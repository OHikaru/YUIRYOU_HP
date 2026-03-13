import type { Metadata } from "next";
import Link from "next/link";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { staticPageCopy } from "@/content/page-copy";
import { buildMetadata } from "@/lib/seo";

const locale = "en" as const;
const copy = staticPageCopy[locale].thanks;

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/en/thanks",
  locale,
});

export default function EnglishThanksPage() {
  return (
    <PageHeroWithImage
      items={[{ href: "/en/thanks", label: copy.title }]}
      eyebrow={copy.eyebrow}
      title={copy.title}
      imageSrc="/images/page-hero-thanks.jpg"
      imageAlt="Thank you page visual"
      imageWidth={1408}
      imageHeight={768}
      narrowBody
      imagePriority
      locale={locale}
    >
      <p className="hero-copy">{copy.summary}</p>
      <div className="hero-actions">
        <Link href="/en" className="button button--solid">{copy.primaryAction}</Link>
        <Link href="/en/insights" className="button button--ghost">{copy.secondaryAction}</Link>
      </div>
    </PageHeroWithImage>
  );
}