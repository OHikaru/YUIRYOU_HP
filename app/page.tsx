import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd, SectionLead } from "@/components/ui";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getHomePageData } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "医療監修で終わらせない。医師3名が、事業・研究・発信まで伴走する法人向け医療コンサルティング",
  description:
    "産婦人科医2名とリハビリ医1名の医師チームが、医療・臨床研究・RCT・英語・AI・YouTube・広告まで横断支援する法人向け医療コンサルティングサイト。",
  path: "/",
});

export default async function HomePage() {
  const { settings, teamMembers, supportAreas, comparisonRows, fitCategories, supportFlow, timelinePhases } = await getHomePageData();

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: absoluteUrl("/") }],
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <section className="hero">
        <div className="shell hero__layout">
          <div>
            <p className="eyebrow">B2B Medical Consulting</p>
            <h1>{settings.defaultTitle}</h1>
            <p className="hero-copy">{settings.defaultDescription}</p>
            <div className="chip-row">
              {(settings.trustChips ?? []).map((chip) => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>
            <div className="hero-actions">
              <Link href="/contact" className="button button--solid">無料相談を申し込む</Link>
              <Link href="/#pricing" className="button button--ghost">診断パックの詳細を見る</Link>
            </div>
            <p className="hero-note">法人向け / 患者個人の相談は対象外 / 価格公開あり</p>
          </div>
          <div className="hero-visual-card">
            <Image src="/images/hero-medical-consulting.svg" alt="医師3名による法人向け医療コンサルティングのイメージ" width={800} height={600} priority />
          </div>
        </div>
      </section>
      <section className="section"><div className="shell"><SectionLead eyebrow="Issue" title="こんな課題はありませんか" description="医療の正確性だけでも、集客だけでも足りない企業に向けた設計です。" /><div className="card-grid card-grid--three">{(settings.issueCards ?? []).map((issue) => (<article key={issue} className="panel panel--soft"><p>{issue}</p></article>))}</div></div></section>
      <section className="section section--muted"><div className="shell"><SectionLead eyebrow="Capability" title="5つの支援領域を、1つのチームで" /><div className="card-grid card-grid--five">{supportAreas.map((area) => (<article key={area.title} className="panel panel--service"><Image src={area.icon} alt={`${area.title}のアイコン`} width={72} height={72} /><h3>{area.title}</h3><p>{area.description}</p><Link href={area.href}>詳細を見る</Link></article>))}</div></div></section>
      <section className="section"><div className="shell"><SectionLead eyebrow="Why Us" title="なぜ私たちなのか" description="一般的な単発監修や制作会社とは、関わり方の深さが異なります。" /><div className="comparison-table" role="table" aria-label="比較表"><div className="comparison-table__head" role="row"><span>比較項目</span><span>私たち</span><span>一般的な医師監修</span><span>一般的な制作会社 / 代理店</span></div>{comparisonRows.map((row) => (<div className="comparison-table__row" role="row" key={row.label}><span>{row.label}</span>{row.values.map((value) => <span key={`${row.label}-${value}`}>{value}</span>)}</div>))}</div><p className="section-footnote">3名の医師体制で、研究・英語・AI・発信まで横断できる点が、単発監修との決定的な違いです。</p></div></section>
      <section className="section section--deep"><div className="shell"><SectionLead eyebrow="Best Fit" title="こんな企業に向いています" /><div className="card-grid card-grid--two">{fitCategories.map((item) => (<article key={item.title} className="panel panel--dark"><h3>{item.title}</h3><p>{item.description}</p></article>))}</div></div></section>
      <section className="section"><div className="shell grid-two grid-two--wide-gap"><div><SectionLead eyebrow="Support Flow" title="支援イメージ" description="診断・設計・伴走の3段階で、何を前に進めるかを整理します。" /><div className="process-grid">{supportFlow.map((item, index) => (<article key={item.title} className="process-card"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>))}</div></div><div className="panel panel--visual"><Image src="/images/flow-support.svg" alt="診断から伴走支援までの流れ" width={960} height={540} /></div></div></section>
      <section className="section section--muted"><div className="shell"><SectionLead eyebrow="30 / 60 / 90 Days" title="30 / 60 / 90日の進め方" /><div className="timeline-grid">{timelinePhases.map((phase) => (<article key={phase.title} className="timeline-card"><h3>{phase.title}</h3><p>{phase.description}</p></article>))}</div></div></section>
      <section className="section"><div className="shell"><SectionLead eyebrow="Team" title="チーム紹介" description="実名・論文・所属は確認済み情報のみ段階公開しつつ、役割分担は初版から明確に示します。" /><div className="card-grid card-grid--three">{teamMembers.map((member) => (<article key={member.id} className="panel panel--profile"><Image src={member.image} alt={member.imageAlt} width={320} height={320} /><p className="eyebrow">{member.shortRole}</p><h3>{member.name}</h3><p className="role-label">{member.role}</p><p>{member.bio}</p><Link href="/team">詳細を見る</Link></article>))}</div></div></section>
      <section id="pricing" className="section section--deep"><div className="shell"><SectionLead eyebrow="Pricing" title="料金表" description="案件の難易度と関与範囲に応じて調整はありますが、目安が見えないまま商談に進ませないため標準価格を公開します。" /><div className="card-grid card-grid--pricing">{(settings.pricingPlans ?? []).map((plan) => (<article key={plan.name} className="panel panel--pricing"><p className="eyebrow">{plan.name}</p><h3>{plan.price}</h3><p className="pricing-note">{plan.note}</p><ul className="stack-list">{(plan.features ?? []).map((feature) => <li key={feature}>{feature}</li>)}</ul></article>))}</div><div className="pricing-guardrails"><p>法人向けサービスです。</p><p>患者個人の相談は対象外です。</p><p>法務・薬機法の最終判断は専門家連携で行います。</p></div></div></section>
      <section className="section"><div className="shell narrow-shell"><SectionLead eyebrow="FAQ" title="よくある質問" /><div className="faq-list">{(settings.globalFaq ?? []).map((item) => (<details key={item.question} className="faq-item"><summary>{item.question}</summary><p>{item.answer}</p></details>))}</div></div></section>
      <section className="section section--cta"><div className="shell cta-banner"><div><p className="eyebrow">Final CTA</p><h2>まずは無料相談で、何をどこまで外部化すべきか整理してください</h2><p>監修だけで足りるのか、研究設計まで必要なのか、AIや発信まで含めるべきかをヒアリングし、診断パックまたは月額プランにつなげます。</p></div><div className="hero-actions"><Link href="/contact" className="button button--solid">無料相談を申し込む</Link><Link href="/insights" className="button button--ghost button--light">インサイトを見る</Link></div></div></section>
    </>
  );
}