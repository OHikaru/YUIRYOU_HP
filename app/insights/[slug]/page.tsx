import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd, SectionLead } from "@/components/ui";
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
  const [article, teamMembers] = await Promise.all([getArticleBySlug(slug), getTeamMembers()]);
  if (!article) notFound();

  const author = teamMembers.find((member) => member.id === article.authorId);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@type": "Person", name: author?.name ?? "医療コンサルティングチーム", description: author?.role ?? "監修・執筆" },
    publisher: { "@type": "Organization", name: "医療コンサルティングチーム", url: absoluteUrl("/") },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article>
        <div className="page-hero page-hero--compact"><div className="shell"><Breadcrumbs items={[{ href: "/insights", label: "インサイト / コラム" }, { href: `/insights/${article.slug}`, label: article.title }]} /><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><div className="article-meta article-meta--hero"><span>{formatJapaneseDate(article.publishedAt)}</span><span>{author?.name ?? "医療コンサルティングチーム"}</span><span>監修・執筆</span></div><p className="hero-copy">{article.summary}</p></div></div>
        <section className="section"><div className="shell narrow-shell"><SectionLead eyebrow="TL;DR" title="この記事の要点" /><ul className="check-list">{article.tldr.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section className="section section--muted"><div className="shell narrow-shell"><SectionLead title="この記事でわかること" /><ul className="check-list">{article.learnings.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section className="section"><div className="shell narrow-shell prose-block"><SectionLead title="結論" /><p>{article.conclusion}</p></div></section>
        <section className="section section--muted"><div className="shell narrow-shell prose-block"><SectionLead title="背景" />{article.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
        <section className="section"><div className="shell narrow-shell"><SectionLead title="具体策" /><ul className="stack-list">{article.actions.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section className="section section--muted"><div className="shell narrow-shell"><SectionLead title="FAQ" /><div className="faq-list">{article.faq.map((item) => (<details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>))}</div></div></section>
        <section className="section"><div className="shell narrow-shell panel panel--soft"><p className="eyebrow">著者・監修者</p><h2>{author?.name ?? "医療コンサルティングチーム"}</h2><p>{author?.role ?? "監修・執筆"}</p><p>{author?.bio ?? "医療・研究・英語・AI・発信を横断するチームでコンテンツを監修しています。"}</p><Link href="/contact" className="button button--solid">無料相談を申し込む</Link></div></section>
      </article>
    </>
  );
}