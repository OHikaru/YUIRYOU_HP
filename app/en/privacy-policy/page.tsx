import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { staticPageCopy } from "@/content/page-copy";
import { buildMetadata } from "@/lib/seo";

const locale = "en" as const;
const copy = staticPageCopy[locale].privacy;

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/en/privacy-policy",
  locale,
});

export default function EnglishPrivacyPolicyPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/en/privacy-policy", label: copy.title }]}
        eyebrow={copy.eyebrow}
        title={copy.title}
        imageSrc="/images/page-hero-privacy.png"
        imageAlt="Privacy guideline visual"
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