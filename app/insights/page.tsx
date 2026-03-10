import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/content/site";
import { SectionLead } from "@/components/ui";
import { getArticles, getTeamMembers } from "@/lib/site-data";
import { buildMetadata, formatJapaneseDate } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `インサイト / コラム | ${siteConfig.brandName}`,
  description: "医療AI、女性向けヘルスケア、論文化、SEO/AIEOに関する4本の実務記事を掲載。法人向け医療コンサルティングの視点で、実務に直結する知見を整理します。",
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
      <div className="page-hero page-hero--compact">
        <div className="shell">
          <Breadcrumbs items={[{ href: "/insights", label: "インサイト / コラム" }]} />
          <p className="eyebrow">インサイト</p>
          <h1>インサイト / コラム</h1>
          <div className="three-line-summary">
            <p>営業前の信頼形成と検索資産化の両方を狙う、法人向けの実務記事を掲載しています。</p>
            <p>すべての記事はTL;DR、結論、背景、具体策、FAQ、著者情報、出典を統一フォーマットで掲載します。</p>
            <p>現在は4テーマに絞り、タグごとに読み分けできる構成にしています。</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <SectionLead title="タグで絞り込む" description="テーマごとに記事を整理しています。複数テーマを増やす場合も、このタグ軸で拡張できます。" />
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
                <article key={article.slug} className="panel panel--article">
                  <div className="article-card__header">
                    <p className="eyebrow">{article.category}</p>
                    <div className="tag-row">
                      {article.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                    </div>
                  </div>
                  <h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2>
                  <p>{article.summary}</p>
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
