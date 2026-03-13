import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { insightDetailCopy } from "@/content/page-copy";
import { localizeArticle, localizeArticles, localizeTeamMembers } from "@/content/localized-site-data";
import { siteConfig } from "@/content/site";
import { buildMetadata, formatDate } from "@/lib/seo";
import { getArticleBySlug, getArticles, getTeamMembers } from "@/lib/site-data";

const locale = "ja" as const;
const copy = insightDetailCopy[locale];

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  const localized = localizeArticle(article, locale);

  return buildMetadata({
    title: localized.title + " | " + copy.listLabel,
    description: localized.summary,
    path: "/insights/" + localized.slug,
    locale,
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [article, teamMembers, allArticles] = await Promise.all([getArticleBySlug(slug), getTeamMembers(), getArticles()]);
  if (!article) notFound();

  const localizedArticle = localizeArticle(article, locale);
  const localizedTeam = localizeTeamMembers(teamMembers, locale);
  const localizedArticles = localizeArticles(allArticles, locale);

  const author = localizedTeam.find((member) => member.id === localizedArticle.authorId);
  const relatedArticles = localizedArticles
    .filter((candidate) => candidate.slug !== localizedArticle.slug)
    .filter((candidate) => candidate.tags.some((tag) => localizedArticle.tags.includes(tag)))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localizedArticle.title,
    description: localizedArticle.summary,
    datePublished: localizedArticle.publishedAt,
    dateModified: localizedArticle.publishedAt,
    keywords: localizedArticle.tags,
    author: { "@type": "Person", name: author?.name ?? siteConfig.brandName, description: author?.role ?? copy.fallbackRole },
    publisher: { "@type": "Organization", name: siteConfig.brandName, url: siteConfig.siteUrl },
    mainEntityOfPage: siteConfig.siteUrl + "/insights/" + localizedArticle.slug,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article>
        <PageHeroWithImage
          items={[{ href: "/insights", label: copy.listLabel }, { href: "/insights/" + localizedArticle.slug, label: localizedArticle.title }]}
          eyebrow={localizedArticle.category}
          title={localizedArticle.title}
          imageSrc="/images/page-hero-insights.jpg"
          imageAlt={copy.heroImageAlt(localizedArticle.title)}
          imageWidth={1408}
          imageHeight={768}
          heroClassName="article-hero"
          bodyClassName="page-hero__body--article"
          imagePriority
          locale={locale}
        >
          <div className="article-meta article-meta--hero">
            <span>{formatDate(localizedArticle.publishedAt, locale)}</span>
            <span>{author?.name ?? siteConfig.brandName}</span>
            <span>{author?.role ?? copy.fallbackRole}</span>
          </div>
          <div className="tag-row tag-row--hero">
            {localizedArticle.tags.map((tag) => <span key={tag} className="tag-pill tag-pill--light">{tag}</span>)}
          </div>
          <p className="hero-copy">{localizedArticle.summary}</p>
        </PageHeroWithImage>

        <section className="section article-section">
          <div className="shell narrow-shell article-stack">
            <div className="article-panel article-panel--summary">
              <SectionLead eyebrow={copy.summaryEyebrow} title={copy.summaryTitle} />
              <p>{localizedArticle.summary}</p>
            </div>

            <div className="article-panel article-panel--lead">
              <SectionLead eyebrow={copy.tldrEyebrow} title={copy.tldrTitle} />
              <ul className="check-list">
                {localizedArticle.tldr.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="article-panel">
              <SectionLead title={copy.learningsTitle} />
              <ul className="check-list">
                {localizedArticle.learnings.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="article-panel prose-block article-panel--conclusion">
              <SectionLead title={copy.conclusionTitle} />
              <p>{localizedArticle.conclusion}</p>
            </div>

            <div className="article-panel prose-block article-panel--background">
              <SectionLead title={copy.backgroundTitle} />
              {localizedArticle.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="article-panel article-panel--actions">
              <SectionLead title={copy.actionsTitle} />
              <ul className="stack-list">
                {localizedArticle.actions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="article-panel article-panel--source">
              <SectionLead title={copy.sourcesTitle} description={copy.sourcesDescription} />
              <ul className="source-list">
                {localizedArticle.sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">{source.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="article-panel">
              <SectionLead title={copy.faqTitle} />
              <div className="faq-list">
                {localizedArticle.faq.map((item) => (
                  <details key={item.question} className="faq-item">
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="article-panel article-panel--author">
              <p className="eyebrow">{copy.authorEyebrow}</p>
              <h2>{author?.name ?? siteConfig.brandName}</h2>
              <p className="role-label">{author?.role ?? copy.fallbackRole}</p>
              <p>{author?.bio ?? copy.fallbackBio}</p>
              <div className="hero-actions">
                <Link href="/team" className="button button--ghost">{copy.viewTeamLabel}</Link>
                <Link href="/contact" className="button button--solid">{copy.primaryCta}</Link>
              </div>
            </div>

            {relatedArticles.length ? (
              <div className="article-panel article-panel--related">
                <SectionLead title={copy.relatedTitle} description={copy.relatedDescription} />
                <div className="related-articles">
                  {relatedArticles.map((related) => (
                    <article key={related.slug} className="related-article-card">
                      <p className="eyebrow">{related.category}</p>
                      <h3><Link href={"/insights/" + related.slug}>{related.title}</Link></h3>
                      <p>{related.summary}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </article>
    </>
  );
}
