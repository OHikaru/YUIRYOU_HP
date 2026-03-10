import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionLead } from "@/components/ui";
import { getArticles, getTeamMembers } from "@/lib/site-data";
import { buildMetadata, formatJapaneseDate } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "インサイト / コラム | 医療コンサルティングチーム",
  description: "医療、臨床研究、AI、英語、YouTube・広告に関するコラムを掲載。法人向け医療コンサルティングの視点で、実務に直結する知見を整理します。",
  path: "/insights",
});

export default async function InsightsPage() {
  const [articles, teamMembers] = await Promise.all([getArticles(), getTeamMembers()]);

  return (
    <>
      <div className="page-hero page-hero--compact">
        <div className="shell">
          <Breadcrumbs items={[{ href: "/insights", label: "インサイト / コラム" }]} />
          <p className="eyebrow">インサイト</p>
          <h1>インサイト / コラム</h1>
          <div className="three-line-summary">
            <p>SEO流入を取りに行くだけでなく、営業前の信頼形成にも使うコンテンツ群です。</p>
            <p>すべての記事はTL;DR、結論、背景、具体策、FAQ、著者情報を持ちます。</p>
            <p>医療・研究・AI・発信に関する実務テーマを幅広くカバーしています。</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <SectionLead title="記事一覧" description="カテゴリ、公開日、著者、要約を明示し、AI要約にも検索にも耐える構造にしています。" />
          <div className="card-grid card-grid--two">
            {articles.map((article) => {
              const author = teamMembers.find((member) => member.id === article.authorId);
              return (
                <article key={article.slug} className="panel panel--article">
                  <p className="eyebrow">{article.category}</p>
                  <h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2>
                  <p>{article.summary}</p>
                  <div className="article-meta">
                    <span>{formatJapaneseDate(article.publishedAt)}</span>
                    <span>{author?.name ?? "医療コンサルティングチーム"}</span>
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

