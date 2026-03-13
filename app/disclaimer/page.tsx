import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { staticPageCopy } from "@/content/page-copy";
import { buildMetadata } from "@/lib/seo";

const locale = "ja" as const;
const copy = staticPageCopy[locale].disclaimer;

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/disclaimer",
  locale,
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/disclaimer", label: copy.title }]}
        eyebrow={copy.eyebrow}
        title={copy.title}
        imageSrc="/images/page-hero-disclaimer.png"
        imageAlt={copy.imageAlt}
        imageWidth={1024}
        imageHeight={1024}
        narrowBody
        imagePriority
        locale={locale}
      >
        <div className="three-line-summary">
          {copy.summary.map((line) => <p key={line}>{line}</p>)}
        </div>
      </PageHeroWithImage>
      <section className="section">
        <div className="shell narrow-shell prose-block legal-stack">
          {copy.sections.map((section) => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
