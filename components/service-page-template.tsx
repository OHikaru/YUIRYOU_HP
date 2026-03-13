import Link from "next/link";

import type { ServiceDetail } from "@/content/site";
import { siteConfig } from "@/content/site";
import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { serviceTemplateCopy } from "@/content/page-copy";
import { absoluteUrl } from "@/lib/seo";
import { type SiteLocale, withLocale } from "@/lib/locale";

export function ServicePageTemplate({ service, locale = "ja" }: { service: ServiceDetail; locale?: SiteLocale }) {
  const copy = serviceTemplateCopy[locale];
  const path = withLocale(service.path, locale);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metadataDescription,
    provider: {
      "@type": "Organization",
      name: locale === "en" ? siteConfig.brandNameEn : siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    areaServed: "JP",
    url: absoluteUrl(path),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "en" ? "Home" : "???", item: absoluteUrl(withLocale("/", locale)) },
      { "@type": "ListItem", position: 2, name: service.title, item: absoluteUrl(path) },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <PageHeroWithImage
        items={[{ href: path, label: service.title }]}
        eyebrow={copy.eyebrow}
        title={service.title}
        imageSrc="/images/page-hero-services.jpg"
        imageAlt={copy.heroImageAlt(service.title)}
        imageWidth={1408}
        imageHeight={768}
        imagePriority
        locale={locale}
      >
        <div className="three-line-summary">
          {service.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="hero-actions">
          <Link href={withLocale("/contact", locale)} className="button button--solid">{copy.primaryCta}</Link>
          <Link href={withLocale("/#pricing", locale)} className="button button--ghost">{copy.pricingLabel}</Link>
        </div>
      </PageHeroWithImage>

      <section className="section">
        <div className="shell grid-two">
          <div>
            <SectionLead eyebrow={copy.understanding} title={copy.understandingTitle} />
            <ul className="check-list">
              {service.understandingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="panel panel--accent">
            <p className="eyebrow">{copy.outOfScopeTitle}</p>
            <p>{copy.outOfScopeBody}</p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="shell grid-two">
          <div>
            <SectionLead title={copy.painsTitle} />
            <ul className="stack-list">
              {service.pains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLead title={copy.supportTitle} />
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
            <SectionLead title={copy.deliverablesTitle} />
            <ul className="stack-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLead title={copy.idealClientsTitle} />
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
          <SectionLead title={copy.processTitle} description={copy.processDescription} />
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
          <SectionLead title={copy.faqTitle} />
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
            <p className="eyebrow">{copy.ctaEyebrow}</p>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaDescription}</p>
          </div>
          <div className="hero-actions cta-banner__actions">
            <Link href={withLocale("/contact", locale)} className="button button--solid">{copy.primaryCta}</Link>
            <Link href={withLocale("/#pricing", locale)} className="button button--ghost button--light">{copy.pricingLabel}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
