import Link from "next/link";

import type { ServiceDetail } from "@/content/site";
import { siteConfig } from "@/content/site";
import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { absoluteUrl } from "@/lib/seo";

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metadataDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    areaServed: "JP",
    url: absoluteUrl(service.path),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: service.title, item: absoluteUrl(service.path) },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <PageHeroWithImage
        items={[{ href: service.path, label: service.title }]}
        eyebrow="支援サービス"
        title={service.title}
        imageSrc="/images/page-hero-services.jpg"
        imageAlt={`${service.title}のイメージ`}
        imageWidth={1408}
        imageHeight={768}
        imagePriority
      >
        <div className="three-line-summary">
          {service.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="hero-actions">
          <Link href="/contact" className="button button--solid">{siteConfig.primaryCta.label}</Link>
          <Link href="/#pricing" className="button button--ghost">料金表を見る</Link>
        </div>
      </PageHeroWithImage>

      <section className="section">
        <div className="shell grid-two">
          <div>
            <SectionLead eyebrow="このページでわかること" title="支援内容を短時間で把握できます" />
            <ul className="check-list">
              {service.understandingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="panel panel--accent">
            <p className="eyebrow">対象外</p>
            <p>患者個人の診療相談や個別の治療判断は対象外です。法務・薬機法の最終判断は必要に応じて専門家連携で行います。</p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell grid-two">
          <div>
            <SectionLead title="こんな悩みに" />
            <ul className="stack-list">
              {service.pains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLead title="支援内容" />
            <ul className="stack-list">
              {service.support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid-two">
          <div>
            <SectionLead title="代表的な成果物" />
            <ul className="stack-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLead title="向いている企業" />
            <ul className="stack-list">
              {service.idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="shell">
          <SectionLead title="進め方" description="診断から定例伴走まで、優先順位を明確にしたうえで進めます。" />
          <div className="process-grid">
            {service.process.map((item, index) => (
              <article key={item} className="process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell narrow-shell">
          <SectionLead title="よくある質問" />
          <div className="faq-list">
            {service.faq.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="shell cta-banner">
          <div>
            <p className="eyebrow">ご相談</p>
            <h2>法人向け無料相談で、優先順位と支援範囲を整理します</h2>
            <p>現状の資料、研究計画、発信課題を共有いただければ、事業フェーズに応じた論点整理と想定プランをご案内します。</p>
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="button button--solid">{siteConfig.primaryCta.label}</Link>
            <Link href="/#pricing" className="button button--ghost button--light">料金プランを見る</Link>
          </div>
        </div>
      </section>
    </>
  );
}