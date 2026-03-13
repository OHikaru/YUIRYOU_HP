import type { Metadata } from "next";
import Link from "next/link";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { SectionLead } from "@/components/ui";
import { insightsPageCopy } from "@/content/page-copy";
import { localizeArticles, localizeTeamMembers } from "@/content/localized-site-data";
import { siteConfig } from "@/content/site";
import { type SiteLocale } from "@/lib/locale";
import { buildMetadata, formatDate } from "@/lib/seo";
import { getArticles, getTeamMembers } from "@/lib/site-data";

const locale = "en" as const;
const copy = insightsPageCopy[locale];

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/en/insights",
  locale,
});

function buildInsightsList(articles: Awaited<ReturnType<typeof getArticles>>, teamMembers: Awaited<ReturnType<typeof getTeamMembers>>, locale: SiteLocale, activeTag: string) {
  const localizedArticles = localizeArticles(articles, locale);
  const localizedTeam = localizeTeamMembers(teamMembers, locale);
  const tags = Array.from(new Set(localizedArticles.flatMap((article) => article.tags)));
  const filteredArticles = activeTag ? localizedArticles.filter((article) => article.tags.includes(activeTag)) : localizedArticles;
  return { localizedArticles, localizedTeam, tags, filteredArticles };
}

export default async function EnglishInsightsPage({ searchParams }: { searchParams?: Promise<{ tag?: string }> }) {
  const [articles, teamMembers] = await Promise.all([getArticles(), getTeamMembers()]);
  const resolvedSearchParams: { tag?: string } = searchParams ? await searchParams : {};
  const activeTag = resolvedSearchParams.tag ?? "";
  const { localizedTeam, tags, filteredArticles } = buildInsightsList(articles, teamMembers, locale, activeTag);

  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/en/insights", label: copy.title }]}
        eyebrow={copy.eyebrow}
        title={copy.title}
        imageSrc="/images/page-hero-insights.jpg"
        imageAlt="Insights page visual"
        imageWidth={1408}
        imageHeight={768}
        imagePriority
        locale={locale}
      >
        <div className="three-line-summary">
          {copy.summary.map((line) => <p key={line}>{line}</p>)}
        </div>
      </PageHeroWithImage>

      <section className="section">
        <div className="shell">
          <SectionLead title={copy.filterTitle} description={copy.filterDescription} />
          <div className="filter-row">
            <Link href="/en/insights" className={`filter-chip ${activeTag === "" ? "is-active" : ""}`}>{copy.allTag}</Link>
            {tags.map((tag) => (
              <Link key={tag} href={`/en/insights?tag=${encodeURIComponent(tag)}`} className={`filter-chip ${activeTag === tag ? "is-active" : ""}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <SectionLead title={copy.listTitle} description={copy.listDescription(filteredArticles.length)} />
          <div className="card-grid card-grid--two insights-grid">
            {filteredArticles.map((article) => {
              const author = localizedTeam.find((member) => member.id === article.authorId);
              return (
                <article key={article.slug} className="panel panel--article panel--article-card">
                  <div className="article-card__header">
                    <p className="eyebrow">{article.category}</p>
                    <div className="tag-row">
                      {article.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                    </div>
                  </div>
                  <h2><Link href={`/en/insights/${article.slug}`}>{article.title}</Link></h2>
                  <p>{article.summary}</p>
                  <ul className="article-mini-list">
                    {article.tldr.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="article-meta">
                    <span>{formatDate(article.publishedAt, locale)}</span>
                    <span>{author?.name ?? siteConfig.brandNameEn}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}