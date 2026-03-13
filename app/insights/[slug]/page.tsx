import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { getArticleBySlug, getArticles, getTeamMembers } from "@/lib/site-data";
import { absoluteUrl, buildMetadata, formatJapaneseDate } from "@/lib/seo";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: `${article.title} | インサイト / コラム`,
    description: article.summary,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [article, teamMembers, allArticles] = await Promise.all([getArticleBySlug(slug), getTeamMembers(), getArticles()]);
  if (!article) notFound();

  const author = teamMembers.find((member) => member.id === article.authorId);
  const fallbackName = siteConfig.brandName;
  const fallbackRole = "監修・執筆";
  const fallbackBio = "医療・研究・英語・AI・発信を横断するチームでコンテンツを監修しています。";

  const relatedArticles = allArticles.filter((candidate) => candidate.slug !== article.slug).filter((candidate) => candidate.tags.some((tag) => article.tags.includes(tag))).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    keywords: article.tags,
    author: { "@type": "Person", name: author?.name ?? fallbackName, description: author?.role ?? fallbackRole },
    publisher: { "@type": "Organization", name: siteConfig.brandName, url: absoluteUrl("/") },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article>
        <PageHeroWithImage
          items={[{ href: "/insights", label: "インサイト / コラム" }, { href: `/insights/${article.slug}`, label: article.title }]}
          eyebrow={article.category}
          title={article.title}
          imageSrc="/images/page-hero-insights.jpg"
          imageAlt={`${article.title}のイメージ`}
          imageWidth={1408}
          imageHeight={768}
          heroClassName="article-hero"
          bodyClassName="page-hero__body--article"
          imagePriority
        >
          <div className="article-meta article-meta--hero">
            <span>{formatJapaneseDate(article.publishedAt)}</span>
            <span>{author?.name ?? fallbackName}</span>
            <span>{author?.role ?? fallbackRole}</span>
          </div>
          <div className="tag-row tag-row--hero">
            {article.tags.map((tag) => <span key={tag} className="tag-pill tag-pill--light">{tag}</span>)}
          </div>
          <p className="hero-copy">{article.summary}</p>
        </PageHeroWithImage>

        <section className="section article-section">
          <div className="shell narrow-shell article-stack">
            <div className="article-panel article-panel--summary">
              <SectionLead eyebrow="Summary" title="要旨" />
              <p>{article.summary}</p>
            </div>

            <div className="article-panel article-panel--lead">
              <SectionLead eyebrow="TL;DR" title="この記事の要点" />
              <ul className="check-list">
                {article.tldr.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="article-panel">
              <SectionLead title="この記事でわかること" />
              <ul className="check-list">
                {article.learnings.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="article-panel prose-block article-panel--conclusion">
              <SectionLead title="結論" />
              <p>{article.conclusion}</p>
            </div>

            <div className="article-panel prose-block article-panel--background">
              <SectionLead title="背景" />
              {article.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="article-panel article-panel--actions">
              <SectionLead title="具体策" />
              <ul className="stack-list">
                {article.actions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="article-panel article-panel--source">
              <SectionLead title="参考・出典" description="2026年3月11日時点で確認した一次情報・公式情報です。" />
              <ul className="source-list">
                {article.sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">{source.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="article-panel">
              <SectionLead title="FAQ" />
              <div className="faq-list">
                {article.faq.map((item) => (
                  <details key={item.question} className="faq-item">
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="article-panel article-panel--author">
              <p className="eyebrow">著者・監修者</p>
              <h2>{author?.name ?? fallbackName}</h2>
              <p className="role-label">{author?.role ?? fallbackRole}</p>
              <p>{author?.bio ?? fallbackBio}</p>
              <div className="hero-actions">
                <Link href="/team" className="button button--ghost">チームを見る</Link>
                <Link href="/contact" className="button button--solid">{siteConfig.primaryCta.label}</Link>
              </div>
            </div>

            {relatedArticles.length ? (
              <div className="article-panel article-panel--related">
                <SectionLead title="関連する記事" description="あわせて読むと全体像をつかみやすい記事です。" />
                <div className="related-articles">
                  {relatedArticles.map((related) => (
                    <article key={related.slug} className="related-article-card">
                      <p className="eyebrow">{related.category}</p>
                      <h3><Link href={`/insights/${related.slug}`}>{related.title}</Link></h3>
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