const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const ts = require('typescript');
const { createClient } = require('@sanity/client');

function loadEnv(file) {
  const text = fs.readFileSync(file, 'utf8');
  const env = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
  }
  return env;
}

function loadContent(env) {
  const source = fs.readFileSync(path.join(process.cwd(), 'content', 'site.ts'), 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const module = { exports: {} };
  const sandbox = {
    module,
    exports: module.exports,
    require,
    console,
    process: { env: { NEXT_PUBLIC_SITE_URL: env.NEXT_PUBLIC_SITE_URL } },
  };

  vm.runInNewContext(transpiled, sandbox, { filename: 'content/site.ts' });
  return module.exports;
}

function stableKey(value) {
  return crypto.createHash('md5').update(value).digest('hex').slice(0, 12);
}

function faqItems(items) {
  return items.map((item) => ({
    _type: 'faqItem',
    _key: stableKey(`faq:${item.question}`),
    question: item.question,
    answer: item.answer,
  }));
}

function pricingItems(items) {
  return items.map((item) => ({
    _type: 'pricingPlan',
    _key: stableKey(`plan:${item.name}`),
    name: item.name,
    price: item.price,
    note: item.note,
    features: item.features,
  }));
}

async function main() {
  const env = loadEnv(path.join(process.cwd(), '.env.local'));
  const token = env.SANITY_API_WRITE_TOKEN || env.SANITY_API_READ_TOKEN;
  if (!token) {
    throw new Error('SANITY_API_WRITE_TOKEN または SANITY_API_READ_TOKEN が必要です。');
  }

  const content = loadContent(env);
  const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-10',
    token,
    useCdn: false,
  });

  const counts = await client.fetch(`{
    "siteSettings": count(*[_type == "siteSettings"]),
    "teamMember": count(*[_type == "teamMember"]),
    "service": count(*[_type == "service"]),
    "article": count(*[_type == "article"])
  }`);

  const existingTotal = counts.siteSettings + counts.teamMember + counts.service + counts.article;
  if (existingTotal > 0) {
    console.log(JSON.stringify({ skipped: true, reason: 'dataset-not-empty', counts }, null, 2));
    return;
  }

  const teamImageFiles = {
    'obgyn-ai': path.join(process.cwd(), 'public', 'images', 'team', 'team-obgyn-ai.svg'),
    'obgyn-rct': path.join(process.cwd(), 'public', 'images', 'team', 'team-obgyn-rct-english.svg'),
    'rehab-media': path.join(process.cwd(), 'public', 'images', 'team', 'team-rehab-youtube-ad.svg'),
  };

  const uploadedImages = {};
  for (const [memberId, filePath] of Object.entries(teamImageFiles)) {
    if (!fs.existsSync(filePath)) continue;
    const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
      filename: path.basename(filePath),
      contentType: 'image/svg+xml',
    });
    uploadedImages[memberId] = asset._id;
  }

  const siteSettingsDoc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    brandName: content.siteConfig.brandName,
    defaultTitle: content.siteConfig.defaultTitle,
    defaultDescription: content.siteConfig.defaultDescription,
    phoneLabel: content.siteConfig.phoneLabel,
    contactEmail: content.siteConfig.contactEmail,
    trustChips: content.trustChips,
    issueCards: content.issueCards,
    globalFaq: faqItems(content.globalFaq),
    pricingPlans: pricingItems(content.pricingPlans),
  };

  const teamDocs = content.teamMembers.map((member) => {
    const imageAssetId = uploadedImages[member.id];
    return {
      _id: `teamMember.${member.id}`,
      _type: 'teamMember',
      id: member.id,
      name: member.name,
      role: member.role,
      shortRole: member.shortRole,
      bio: member.bio,
      specialties: member.specialties,
      researchHighlights: member.researchHighlights,
      supportThemes: member.supportThemes,
      imageAlt: member.imageAlt,
      ...(imageAssetId
        ? {
            image: {
              _type: 'image',
              asset: { _type: 'reference', _ref: imageAssetId },
            },
          }
        : {}),
    };
  });

  const serviceDocs = content.services.map((service) => ({
    _id: `service.${service.slug}`,
    _type: 'service',
    slug: { _type: 'slug', current: service.slug },
    navLabel: service.navLabel,
    title: service.title,
    summary: service.summary,
    understandingPoints: service.understandingPoints,
    pains: service.pains,
    support: service.support,
    deliverables: service.deliverables,
    idealClients: service.idealClients,
    process: service.process,
    faq: faqItems(service.faq),
    metadataTitle: service.metadataTitle,
    metadataDescription: service.metadataDescription,
  }));

  const articleDocs = content.articles.map((article) => ({
    _id: `article.${article.slug}`,
    _type: 'article',
    title: article.title,
    slug: { _type: 'slug', current: article.slug },
    category: article.category,
    publishedAt: article.publishedAt,
    author: { _type: 'reference', _ref: `teamMember.${article.authorId}` },
    summary: article.summary,
    tldr: article.tldr,
    learnings: article.learnings,
    conclusion: article.conclusion,
    background: article.background,
    actions: article.actions,
    faq: faqItems(article.faq),
  }));

  await client.createIfNotExists(siteSettingsDoc);
  for (const doc of teamDocs) await client.createIfNotExists(doc);
  for (const doc of serviceDocs) await client.createIfNotExists(doc);
  for (const doc of articleDocs) await client.createIfNotExists(doc);

  const finalCounts = await client.fetch(`{
    "siteSettings": count(*[_type == "siteSettings"]),
    "teamMember": count(*[_type == "teamMember"]),
    "service": count(*[_type == "service"]),
    "article": count(*[_type == "article"])
  }`);

  console.log(JSON.stringify({ skipped: false, finalCounts }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
