import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { contactPageCopy } from "@/content/page-copy";
import { buildMetadata } from "@/lib/seo";

const locale = "en" as const;
const copy = contactPageCopy[locale];

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/en/contact",
  locale,
});

export default function EnglishContactPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/en/contact", label: copy.title }]}
        eyebrow={copy.eyebrow}
        title={copy.title}
        imageSrc="/images/page-hero-contact.jpg"
        imageAlt="Contact page visual"
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
        <div className="shell grid-two contact-grid">
          <div className="contact-side-stack">
            <div className="panel panel--accent">
              <p className="eyebrow">{copy.infoTitle}</p>
              <ul className="stack-list">
                {copy.infoItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="panel contact-flow-panel">
              <p className="eyebrow">{copy.flowTitle}</p>
              <ol className="flow-list">
                {copy.flowItems.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </div>
          </div>
          <div>
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}