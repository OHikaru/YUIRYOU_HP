import type { Metadata } from "next";
import Link from "next/link";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { siteConfig } from "@/content/site";
import { SectionLead } from "@/components/ui";
import { getArticles, getTeamMembers } from "@/lib/site-data";
import { buildMetadata, formatJapaneseDate } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `インサイト / コラム | ${siteConfig.brandName}`,
  description: "医療AI、女性向けヘルスケア、論文化、SEO/AIEOに関する重点4テーマを、公式資料と実務視点で掘り下げた記事一覧です。",
  path: "/insights",
});

export default async function InsightsPage({ searchParams }: { searchParams?: Promise<{ tag?: string }> }) {
  const [articles, teamMembers] = await Promise.all([getArticles(), getTeamMembers()]);
  const resolvedSearchParams: { tag?: string } = searchParams ? await searchParams : {};

  const tags = Array.from(new Set(articles.flatMap((article) => article.tags)));
  const activeTag = resolvedSearchParams.tag ?? "";
  const filteredArticles = activeTag ? articles.filter((article) => article.tags.includes(activeTag)) : articles;

  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/insights", label: "インサイト / コラム" }]}
        eyebrow="インサイト"
        title="インサイト / コラム"
        imageSrc="/images/page-hero-insights.jpg"
        imageAlt="インサイト / コラムのイメージ"
        imageWidth={1408}
        imageHeight={768}
        imagePriority
      >
        <div className="three-line-summary">
          <p>医療AI、女性向けヘルスケア、PoCから論文化、SEO/AIEOの4テーマを、一次情報と実務観点で掘り下げています。</p>
          <p>小手先のノウハウではなく、事業判断、品質管理、研究設計、発信方針にそのまま使える論点を整理しています。</p>
          <p>各記事はTL;DR、背景、具体策、FAQ、著者情報、出典を統一し、商談前共有や社内説明資料にも転用しやすい構成です。</p>
        </div>
      </PageHeroWithImage>

      <section className="section">
        <div className="shell">
          <SectionLead title="タグで絞り込む" description="テーマごとに記事を整理しています。重点テーマごとに深く読めるよう、タグ軸で一覧化しています。" />
          <div className="filter-row">
            <Link href="/insights" className={`filter-chip ${activeTag === "" ? "is-active" : ""}`}>
              すべて
            </Link>
            {tags.map((tag) => (
              <Link key={tag} href={`/insights?tag=${encodeURIComponent(tag)}`} className={`filter-chip ${activeTag === tag ? "is-active" : ""}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell">
          <SectionLead title="記事一覧" description={`${filteredArticles.length}本の記事を表示しています。`} />
          <div className="card-grid card-grid--two insights-grid">
            {filteredArticles.map((article) => {
              const author = teamMembers.find((member) => member.id === article.authorId);
              return (
                <article key={article.slug} className="panel panel--article panel--article-card">
                  <div className="article-card__header">
                    <p className="eyebrow">{article.category}</p>
                    <div className="tag-row">
                      {article.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                    </div>
                  </div>
                  <h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2>
                  <p>{article.summary}</p>
                  <ul className="article-mini-list">
                    {article.tldr.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="article-meta">
                    <span>{formatJapaneseDate(article.publishedAt)}</span>
                    <span>{author?.name ?? siteConfig.brandName}</span>
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