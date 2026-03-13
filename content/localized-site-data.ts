import {
  comparisonRows,
  fitCategories,
  globalFaq,
  issueCards,
  pricingPlans,
  supportAreas,
  supportFlow,
  trustChips,
  timelinePhases,
  type ArticleDetail,
  type FaqItem,
  type ServiceDetail,
  type TeamMember,
} from "@/content/site";
import type { SiteLocale } from "@/lib/locale";

const globalFaqEn: FaqItem[] = [
  {
    question: "What types of companies usually contact you?",
    answer:
      "Typical clients include femtech companies, healthcare SaaS businesses, employee wellbeing services, healthcare media teams, YouTube operators, and startups in medical devices or digital health.",
  },
  {
    question: "Do you provide patient consultations?",
    answer:
      "No. Our services are limited to company-facing information support, review, and execution guidance. We do not provide consultations for individual patients or treatment decisions.",
  },
  {
    question: "Can you handle the final legal or advertising review?",
    answer:
      "We support risk review and expression review, but final legal, pharmaceutical advertising, and medical advertising judgments are handled with specialist collaboration when needed.",
  },
  {
    question: "Can we request article supervision only?",
    answer:
      "Single-asset review is possible, but the core service is ongoing support that connects business, research, and communication. We recommend the scope based on the issue and its priority.",
  },
  {
    question: "Can you review English materials and global-facing documents?",
    answer:
      "Yes. We support English literature review, English material review, and communication design for global-facing healthcare explanations.",
  },
  {
    question: "How should we choose a plan?",
    answer:
      "The diagnostic package is suitable when issues are still broad. Advisory fits recurring review, Growth fits execution support, and Strategic fits high-stakes phases that need deeper leadership involvement.",
  },
];

const supportAreasEn = [
  {
    title: "Medical and Scientific Advisory",
    description:
      "We review landing pages, sales materials, and company narratives from a medical and scientific perspective to reduce messaging gaps and expression risks.",
  },
  {
    title: "Clinical Research, RCTs, and Publication Support",
    description:
      "We support observational studies, PoCs, surveys, RCTs, and publication planning so research can strengthen business progress.",
  },
  {
    title: "Medical AI and Information Quality Design",
    description:
      "We design medical AI usage policies, review rules, and operating workflows before scale creates quality risk.",
  },
  {
    title: "English and Global Healthcare Communication",
    description:
      "We support English literature review, English materials, and the quality of healthcare communication for global-facing audiences.",
  },
  {
    title: "YouTube, Advertising, and Owned Media Support",
    description:
      "We improve content systems so medical accuracy, audience attention, and conversion can work together.",
  },
];

const comparisonRowsEn = [
  { label: "Multi-physician involvement", values: ["Three-physician team", "Often single physician", "Physicians only as external reviewers"] },
  { label: "Clinical research and RCT expertise", values: ["Supports research design", "Limited", "Usually external"] },
  { label: "English material review", values: ["Available", "Often unavailable", "Mostly translation-focused"] },
  { label: "AI governance design", values: ["Medical quality built in", "Often out of scope", "General operations advice"] },
  { label: "YouTube and advertising knowledge", values: ["Medical expression and execution", "Often out of scope", "Weak in medical expression"] },
  { label: "Business discussion", values: ["Handled in recurring meetings", "Mostly ad hoc", "Shallow business understanding"] },
  { label: "Ongoing support", values: ["Diagnostic plus three support tiers", "Often one-off", "Limited to production term"] },
];

const fitCategoriesEn = [
  {
    title: "Femtech and women's healthcare businesses",
    description:
      "We connect obstetrics and gynecology expertise to business design, educational content, research design, and medical review.",
  },
  {
    title: "Healthcare SaaS, wellbeing, and employee benefits services",
    description:
      "We support companies that need stronger medical validity in sales materials and landing pages through recurring physician access.",
  },
  {
    title: "Healthcare media and YouTube operators",
    description:
      "We help media teams balance medical accuracy with watch time, reading completion, and conversion.",
  },
  {
    title: "Medical devices, digital health, and globally oriented startups",
    description:
      "We support critical phases that require research planning, English materials, global-facing explanations, and PoC design.",
  },
];

const supportFlowEn = [
  { title: "Diagnosis", description: "The entry phase for clarifying the current state, risks, and the highest-priority themes." },
  { title: "Design", description: "The phase for structuring messaging, research, AI, English review, and communication into a workable plan." },
  { title: "Execution support", description: "The phase for moving work forward through recurring meetings, reviews, and deliverable creation." },
];

const timelinePhasesEn = [
  { title: "Days 0 to 30", description: "Business understanding / material audit / medical risk review / priority setting" },
  { title: "Days 31 to 60", description: "Message refinement / literature review / LP and sales material improvement / AI or content design" },
  { title: "Days 61 to 90", description: "Operational rollout / KPI alignment / next-quarter planning" },
];

const pricingPlansEn = [
  {
    name: "Diagnostic Package",
    note: "Deliverable includes 3 to 5 priority actions and a three-month support proposal",
    features: ["Issue map", "Competitive, messaging, and medical risk review", "Priority action proposal"],
  },
  {
    name: "Advisory Plan",
    note: "Three-month minimum",
    features: ["Two monthly meetings", "Up to two material reviews per month", "One literature review or issue memo per month"],
  },
  {
    name: "Growth Partner Plan",
    note: "Three-month minimum",
    features: ["Four monthly meetings", "Up to five reviews per month", "One monthly theme across research, PoC, AI, or communication design"],
  },
  {
    name: "Strategic Partner Plan",
    note: "Three-month minimum, six months recommended",
    features: ["Weekly meetings plus monthly leadership review", "Cross-functional physician involvement", "One large deliverable each quarter"],
  },
];
const teamTranslations: Record<string, Partial<TeamMember>> = {
  "obgyn-rct": {
    role: "CEO / Obstetrician / English, RCT, and Research Operations Lead",
    shortRole: "CEO / Research Lead",
    bio: "Tomohiro Mitoma is the CEO of YUIRYOU Inc. With a background in obstetrics and gynecology, research operations, and English-language literature review, he leads PoC and RCT design as well as publication support. Drawing on multi-center studies and English publications listed on researchmap, he helps companies connect research plans to business communication, sales narratives, and global-facing materials.",
    specialties: ["English literature review", "RCT and PoC design", "Research planning and publication support", "Global-facing medical materials"],
    researchHighlights: [
      "Involved in studies such as 'Decline in and recovery of fertility rates after COVID-19-related state of emergency in Japan.' connecting social implementation and population dynamics.",
      "Contributed to multicenter research and RCT-related work including the SPIRAL trial sub-analysis on residual myometrial thickness after cesarean delivery.",
      "Published work on educational and technical assessment, including objective assessment of cesarean section suturing techniques using a uterine simulator.",
    ],
    supportThemes: ["Research planning and decision support", "English materials and global-facing communication", "Execution design from PoC to publication"],
    imageAlt: "Profile image of Tomohiro Mitoma",
  },
  "obgyn-ai": {
    role: "Obstetrician / Medical AI and Information Quality Lead",
    shortRole: "AI and Quality",
    bio: "Hikaru Oba leads medical AI and information quality design. Based on experience spanning clinical obstetrics and gynecology, research support, academic research at Tohoku University Graduate School of Medicine, and research-development coordination at Okayama University Hospital, he translates medical AI governance, evidence reading, and content quality management into company operations.",
    specialties: ["Medical AI usage policy", "Medical information quality review", "Data interpretation and issue framing", "Women's healthcare domain expertise"],
    researchHighlights: [
      "Published AI and deep learning-related work such as voice analysis for detecting mental disorders in pregnant women.",
      "Worked on machine-learning-based analysis of maternal wellbeing, including gradient boosting approaches.",
      "Published medical education and simulation work, including multicenter remote-access simulation studies during the pandemic.",
    ],
    supportThemes: ["Supervision flows for AI deployment", "Medical expression risk review", "Content quality criteria design"],
    imageAlt: "Profile image of Hikaru Oba",
  },
  "rehab-media": {
    role: "Rehabilitation Physician / YouTube, Advertising, and Communication Design Lead",
    shortRole: "Content and Media",
    bio: "Kosuke Toyoda connects medical communication design with marketing execution. He supports YouTube planning, advertising messaging, and owned media improvement while preserving medical accuracy and strengthening the path toward watch time, reading completion, and conversion.",
    specialties: ["YouTube planning review", "Advertising message design", "Owned media operations", "Content funnel design"],
    researchHighlights: [
      "Bridges medical supervision perspectives with marketing execution.",
      "Supports communication design that aligns medical credibility with audience action.",
    ],
    supportThemes: ["Expression review for YouTube and ads", "Communication planning support", "Media improvement proposals"],
    imageAlt: "Profile image of Kosuke Toyoda",
  },
};

const serviceTranslations: Record<string, Partial<ServiceDetail>> = {
  "medical-scientific-advisory": {
    navLabel: "Medical & Scientific Advisory",
    title: "Medical & Scientific Advisory",
    summary: [
      "We review landing pages, sales materials, and business narratives from a medical and scientific perspective.",
      "A three-physician system helps companies keep medical accuracy without slowing business progress.",
      "This is not one-off supervision. It is recurring support for healthcare businesses.",
    ],
    understandingPoints: [
      "What kinds of companies fit this service",
      "Which materials and deliverables are covered",
      "How recurring reviews and strategic discussion are handled",
    ],
    pains: [
      "We need stronger medical credibility in a landing page or sales deck",
      "We are unsure what can and cannot be stated in business communication",
      "We need a physician partner for recurring business discussion",
    ],
    support: [
      "Review of landing pages, proposals, sales decks, and articles",
      "Issue framing from a medical and scientific perspective",
      "Recurring discussion and priority review",
      "Initial risk review of expressions and claims",
    ],
    deliverables: [
      "Reviewed materials with comments",
      "Issue framing document",
      "Improvement priority list",
      "Monthly review summary",
    ],
    idealClients: [
      "Companies improving healthcare-related landing pages or sales materials",
      "Startups that need stronger internal business explanations",
      "Companies building a recurring physician review structure",
    ],
    process: [
      "Clarify the issue in an initial consultation or diagnostic package",
      "Define the priority materials and themes",
      "Run recurring reviews and improvement proposals",
    ],
    faq: globalFaqEn,
    metadataTitle: "Medical & Scientific Advisory | Company-Focused Medical Consulting",
    metadataDescription: "We review landing pages, sales materials, and business narratives from a medical and scientific perspective with a three-physician support structure.",
  },
  "clinical-research-rct": {
    navLabel: "Clinical Research, RCTs, and Publication Support",
    title: "Clinical Research, RCTs, and Publication Support",
    summary: [
      "We support observational studies, PoCs, surveys, RCTs, and publication readiness.",
      "Research is designed to support business progress instead of staying theoretical.",
      "This service connects medical, research, and business execution.",
    ],
    understandingPoints: [
      "What kinds of research support are available",
      "How PoCs and RCTs can support business communication",
      "How to prepare for publication from the start",
    ],
    pains: [
      "We want to do research but do not know where to start",
      "Our PoC or survey design feels weak",
      "We want to use research findings for sales, fundraising, or partnerships",
    ],
    support: [
      "Research planning and strategic discussion",
      "Support for PoC, survey, observational study, and RCT design",
      "English literature review and issue analysis",
      "Support toward publication readiness",
    ],
    deliverables: [
      "Draft research plan",
      "Literature review deck",
      "Objective and endpoint alignment sheet",
      "Publication preparation document",
    ],
    idealClients: [
      "Companies that want to use research or PoCs in sales and fundraising",
      "Startups without sufficient in-house research structure",
      "Healthcare businesses aiming for English-language publication",
    ],
    process: [
      "Align business goals and research goals",
      "Review design options and execution priorities",
      "Support interpretation, materialization, and publication planning after implementation",
    ],
    faq: globalFaqEn,
    metadataTitle: "Clinical Research, RCTs, and Publication Support | Physician-Led Business Support",
    metadataDescription: "Support for observational studies, PoCs, RCTs, and publication planning that connects research design to business execution.",
  },
  "medical-ai-global": {
    navLabel: "Medical AI and Global Communication",
    title: "Medical AI and Global Healthcare Communication",
    summary: [
      "We support AI usage design, medical information quality control, English literature handling, and review of English materials.",
      "Medical quality is treated as the foundation for AI and global-facing communication.",
      "The team supports both operational usability and accountability.",
    ],
    understandingPoints: [
      "What guardrails should be defined before medical AI use",
      "What kinds of English material and literature support are available",
      "How to strengthen healthcare communication for global audiences",
    ],
    pains: [
      "We want to use AI but are unsure how to manage quality",
      "We cannot confidently release English materials externally",
      "We struggle with medical wording for global-facing explanations",
    ],
    support: [
      "Medical AI policy and operating-rule design",
      "Medical information quality review framework",
      "English literature review and English material review",
      "Quality support for global-facing healthcare communication",
    ],
    deliverables: [
      "AI governance memo",
      "Review workflow document",
      "English communication review sheet",
      "Source and evidence management template",
    ],
    idealClients: [
      "Companies preparing to operationalize medical AI",
      "Teams that need stronger English and global-facing healthcare materials",
      "Businesses that need one framework across AI quality and communication quality",
    ],
    process: [
      "Clarify risk areas in AI use and communication",
      "Design rules for review, source control, and updates",
      "Support implementation into real materials and operations",
    ],
    faq: globalFaqEn,
    metadataTitle: "Medical AI and Global Communication | Physician Team Support",
    metadataDescription: "Support for medical AI usage policy, information quality review, English materials, and global healthcare communication.",
  },
  "youtube-content-ad": {
    navLabel: "YouTube, Advertising, and Owned Media",
    title: "YouTube, Advertising, and Owned Media Support",
    summary: [
      "We support planning, structure, review, and funnel design across YouTube, advertising, and owned media.",
      "This goes beyond article supervision to improve communication systems themselves.",
      "Medical accuracy and audience response are designed together.",
    ],
    understandingPoints: [
      "What can be improved in medical communication execution",
      "How YouTube, ads, and owned media can be aligned",
      "How to review expression risk without weakening the message",
    ],
    pains: [
      "We want stronger content performance without weakening medical credibility",
      "Our healthcare videos or articles feel accurate but not persuasive",
      "We need a better review structure for medical expressions in campaigns",
    ],
    support: [
      "Planning review and theme design",
      "Structure review for YouTube, ad copy, and articles",
      "Communication design linked to the funnel",
      "Recurring review of expression risk and message quality",
    ],
    deliverables: [
      "Content strategy memo",
      "Editorial review sheet",
      "Message and funnel proposal",
      "Monthly improvement summary",
    ],
    idealClients: [
      "Media teams that need stronger healthcare content systems",
      "Companies running YouTube or campaigns with medical touchpoints",
      "Businesses that want medical review to contribute to performance",
    ],
    process: [
      "Audit the current channels and content structure",
      "Clarify the priority channel and message design",
      "Run recurring reviews and improvement support",
    ],
    faq: globalFaqEn,
    metadataTitle: "YouTube, Advertising, and Owned Media Support | Medical Communication Design",
    metadataDescription: "Support across YouTube planning, advertising messages, and owned media operations while preserving medical accuracy.",
  },
};
const articleTranslations: Record<string, Partial<ArticleDetail>> = {
  "medical-ai-governance": {
    title: "Quality Guardrails to Build Before Scaling Medical AI",
    category: "Medical AI",
    summary: "Medical AI should not be treated as a simple tool rollout. Based on WHO guidance and FDA documents, this article explains how companies can set up governance, monitoring, and change control before quality breaks down.",
    tldr: [
      "Define high-risk use cases and human review before deployment",
      "Treat prompt changes, source changes, and UI changes as managed updates",
      "Design monitoring and rollback conditions as part of normal operations",
    ],
    learnings: [
      "Why medical AI governance must be designed before scaling",
      "How WHO and FDA thinking can be translated into company operations",
      "What should be documented for safe updates and supervision",
    ],
    conclusion: "If a company wants to use medical AI responsibly, it must define governance before scale. Human oversight, source management, change control, and post-launch monitoring should be treated as operating requirements, not optional refinements.",
    background: [
      "WHO's 2025 guidance on large multi-modal models for health positions medical AI as a governance issue, not only a technology issue. It emphasizes human oversight, transparency, and post-deployment monitoring, especially in higher-risk contexts. [1]",
      "The FDA's final guidance on predetermined change control plans also reinforces that changes expected after launch should be defined in advance, including what may change and how validation will be handled. For internal medical AI operations, this thinking applies directly to prompt changes, RAG source updates, and UI revisions. [2][3]",
    ],
    actions: [
      "Classify use cases by risk and define which ones require physician review",
      "Record source rules, prohibited outputs, and escalation conditions before rollout",
      "Treat model, prompt, source, and interface updates as managed changes with re-evaluation rules",
      "Prepare monitoring metrics and rollback conditions as part of normal operations",
    ],
    tags: ["Medical AI", "Quality Governance", "Operations"],
    faq: [
      {
        question: "Can we start with a lightweight PoC first?",
        answer: "Yes, but even a small PoC should define where human review happens, what sources are used, and what kinds of outputs are not allowed. Governance can be lighter at the beginning, but it still needs to exist.",
      },
      {
        question: "Do we need physician review for every output?",
        answer: "Not always. The practical approach is to classify outputs by risk and define where physician review is mandatory, where operational review is enough, and where publication should be blocked.",
      },
    ],
  },
  "women-health-content-strategy": {
    title: "A Content Strategy Trusted in Women's Healthcare",
    category: "Women's Healthcare",
    summary: "In women's healthcare, empathy alone is not enough, and technical correctness alone is not enough either. This article explains how companies can build trust through readability, evidence transparency, and clear editorial responsibility.",
    tldr: [
      "Trust depends on readability, evidence transparency, and clear responsibility",
      "Medical and promotional language should not be blended carelessly",
      "Authors, sources, and update dates should be visible by default",
    ],
    learnings: [
      "Which expressions tend to reduce trust in women's healthcare content",
      "How to apply health-literacy principles to LPs and articles",
      "How to balance brand warmth with accountability",
    ],
    conclusion: "Women's healthcare communication earns trust when companies make their evidence, editorial responsibility, and intended audience visible. Empathy works best when it is supported by transparent sourcing and clear language.",
    background: [
      "WHO and U.S. health-literacy guidance emphasize that healthcare information should be understandable, audience-aware, and transparent about sources. [1][2]",
      "MedlinePlus and other trusted health-information frameworks also show that users look for visible authorship, clear update dates, and separation between informational and promotional intent. [3]",
    ],
    actions: [
      "Separate educational information from promotional claims in page structure and language",
      "Display authors, supervisors, update dates, and source references on key pages",
      "Use plain language and avoid making sensitive users infer medical meaning from marketing copy",
      "Create an editorial review checklist for women's healthcare topics with explicit responsibility lines",
    ],
    tags: ["Women's Health", "Content Strategy", "Trust"],
    faq: [
      {
        question: "Is an empathic tone enough if our product is medically grounded?",
        answer: "No. Empathy improves receptiveness, but trust is built when the content also shows evidence, authorship, and boundaries of what is being explained.",
      },
      {
        question: "Should we mention sources on landing pages too?",
        answer: "In many cases, yes. You do not need to turn a landing page into a paper, but key evidence, supervision, and update responsibility should be visible when medical credibility matters.",
      },
    ],
  },
  "poc-to-paper": {
    title: "Operational Design for Turning a PoC into a Publication",
    category: "Research Design",
    summary: "A PoC does not lead to publication automatically. This article explains how publication-minded teams should define recording, protocol, reporting, and interpretation before execution, drawing on ICMJE, ClinicalTrials.gov, and SPIRIT-CONSORT.",
    tldr: [
      "Set publication and reporting assumptions before the PoC starts",
      "Preserve protocol, endpoints, and analysis planning in written form",
      "Design registration, reporting, and manuscript preparation as one flow",
    ],
    learnings: [
      "What needs to be decided before a publication-ready PoC begins",
      "Why protocol, endpoint, and analysis discipline matter even in early studies",
      "How to frame feasibility and operational findings without overstating efficacy",
    ],
    conclusion: "Teams that want a PoC to support publication must decide in advance what will be recorded, how it will be reported, and which publication path is realistic. The discipline starts before implementation, not after.",
    background: [
      "ICMJE recommendations, ClinicalTrials.gov reporting expectations, and SPIRIT-CONSORT 2025 all reinforce that publication-quality evidence depends on upfront planning of protocol, reporting, and accountability. [1][2][3][4]",
      "Even when a PoC is exploratory, design discipline matters because feasibility data, operational findings, and future-study implications need to be interpretable and documented. [4]",
    ],
    actions: [
      "Write a compact protocol before execution, including objectives, endpoints, and analysis assumptions",
      "Define how data quality, deviations, and missing data will be tracked",
      "Decide whether the main value is feasibility, usability, operational validity, or efficacy signal",
      "Prepare the reporting and manuscript path before the PoC finishes",
    ],
    tags: ["Research", "PoC", "Publication"],
    faq: [
      {
        question: "Can a small PoC still support publication?",
        answer: "Yes, especially when the outcome is framed around feasibility, usability, or operational insight rather than overclaiming efficacy. The key is disciplined design and reporting.",
      },
      {
        question: "Do we need trial registration from the start?",
        answer: "It depends on the design, jurisdiction, and publication target, but the decision should be considered before the study begins rather than after data collection.",
      },
    ],
  },
  "medical-seo-aieo-basics": {
    title: "The SEO and AIEO Foundations to Build First in Healthcare",
    category: "SEO / AIEO",
    summary: "Healthcare SEO and AIEO are not won by superficial optimization. This article explains the foundations that matter first: clear responsibility, structured pages, useful summaries, and explicit links between expertise and content.",
    tldr: [
      "People-first structure matters more than formulaic optimization",
      "Connect articles and author pages to clarify responsibility",
      "Use clear summaries, structured data, and visible FAQ where they help users",
    ],
    learnings: [
      "Which page foundations matter first for healthcare SEO and AIEO",
      "How to connect articles, team pages, and responsibility signals",
      "Why summaries and structured data should serve users before algorithms",
    ],
    conclusion: "The strongest SEO and AIEO foundation in healthcare is not a trick. It is a page system that makes responsibility, expertise, structure, and evidence easy to understand for both users and search systems.",
    background: [
      "Google's helpful content guidance continues to emphasize people-first content that satisfies user needs rather than pages written primarily for search manipulation. [1]",
      "Article structured data and profile-oriented responsibility signals are most useful when they reflect clear page structure and real editorial responsibility. In healthcare, linking article pages with expert profile pages is a practical way to make that responsibility visible. [2][3]",
    ],
    actions: [
      "Add concise summaries near the top of important pages so users and AI systems can identify the main point quickly",
      "Link article pages and team pages so expertise and editorial responsibility are visible",
      "Use structured data where it matches the actual page content instead of stuffing markup everywhere",
      "Review whether page titles, headings, FAQs, and internal links help a business reader decide faster",
    ],
    tags: ["SEO", "AIEO", "Content Design"],
    faq: [
      {
        question: "Should we optimize for AI answers separately from SEO?",
        answer: "The foundation is mostly the same. Clear structure, explicit responsibility, useful summaries, and evidence-backed content help both search and AI answer systems.",
      },
      {
        question: "Is FAQ schema essential in healthcare pages?",
        answer: "Not necessarily. Visible FAQ can be useful for readers, but it should be added because it improves understanding, not because it is expected to drive results by itself.",
      },
    ],
  },
};

export function getLocalizedTrustChips(locale: SiteLocale) {
  if (locale === "ja") return trustChips;
  return [
    "2 obstetricians + 1 rehab physician",
    "Clinical research and publication support",
    "RCT operations and English review",
    "Medical AI governance",
    "YouTube and advertising execution",
    "Company-only support",
  ];
}

export function getLocalizedIssueCards(locale: SiteLocale) {
  if (locale === "ja") return issueCards;
  return [
    "Our landing pages and sales materials lack medical credibility",
    "We do not know how to structure research, RCTs, or literature review",
    "We are unsure about English papers and global-facing materials",
    "We want to use AI, but cannot guarantee information quality",
    "We want stronger YouTube or ad performance without creating medical risk",
    "One-off physician supervision is not enough. We need strategic discussion.",
  ];
}

export function getLocalizedSupportAreas(locale: SiteLocale) {
  if (locale === "ja") return supportAreas;
  return supportAreas.map((area, index) => ({
    ...area,
    title: supportAreasEn[index]?.title ?? area.title,
    description: supportAreasEn[index]?.description ?? area.description,
  }));
}

export function getLocalizedComparisonRows(locale: SiteLocale) {
  if (locale === "ja") return comparisonRows;
  return comparisonRows.map((row, index) => comparisonRowsEn[index] ?? row);
}

export function getLocalizedFitCategories(locale: SiteLocale) {
  if (locale === "ja") return fitCategories;
  return fitCategories.map((item, index) => ({
    ...item,
    title: fitCategoriesEn[index]?.title ?? item.title,
    description: fitCategoriesEn[index]?.description ?? item.description,
  }));
}

export function getLocalizedSupportFlow(locale: SiteLocale) {
  if (locale === "ja") return supportFlow;
  return supportFlow.map((item, index) => supportFlowEn[index] ?? item);
}

export function getLocalizedTimelinePhases(locale: SiteLocale) {
  if (locale === "ja") return timelinePhases;
  return timelinePhases.map((item, index) => timelinePhasesEn[index] ?? item);
}

export function getLocalizedPricingPlans(locale: SiteLocale) {
  if (locale === "ja") return pricingPlans;
  return pricingPlans.map((plan, index) => ({
    ...plan,
    name: pricingPlansEn[index]?.name ?? plan.name,
    note: pricingPlansEn[index]?.note ?? plan.note,
    features: pricingPlansEn[index]?.features ?? plan.features,
  }));
}

export function getLocalizedGlobalFaq(locale: SiteLocale) {
  return locale === "ja" ? globalFaq : globalFaqEn;
}

export function localizeTeamMembers(items: TeamMember[], locale: SiteLocale) {
  if (locale === "ja") return items;
  return items.map((member) => ({
    ...member,
    ...teamTranslations[member.id],
    selectedPublications: member.selectedPublications,
  }));
}

export function localizeService(service: ServiceDetail, locale: SiteLocale): ServiceDetail {
  if (locale === "ja") return service;
  return {
    ...service,
    ...serviceTranslations[service.slug],
    faq: serviceTranslations[service.slug]?.faq ?? globalFaqEn,
  };
}

export function localizeArticle(article: ArticleDetail, locale: SiteLocale): ArticleDetail {
  if (locale === "ja") return article;
  return {
    ...article,
    ...articleTranslations[article.slug],
  };
}

export function localizeArticles(items: ArticleDetail[], locale: SiteLocale) {
  return items.map((article) => localizeArticle(article, locale));
}