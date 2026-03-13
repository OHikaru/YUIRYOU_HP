import type { Metadata } from "next";
import Link from "next/link";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { staticPageCopy } from "@/content/page-copy";
import { buildMetadata } from "@/lib/seo";

const locale = "ja" as const;
const copy = staticPageCopy[locale].thanks;

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/thanks",
  locale,
});

export default function ThanksPage() {
  return (
    <PageHeroWithImage
      items={[{ href: "/thanks", label: copy.title }]}
      eyebrow={copy.eyebrow}
      title={copy.title}
      imageSrc="/images/page-hero-thanks.jpg"
      imageAlt={copy.imageAlt}
      imageWidth={1408}
      imageHeight={768}
      narrowBody
      imagePriority
      locale={locale}
    >
      <p className="hero-copy">{copy.summary}</p>
      <div className="hero-actions">
        <Link href="/" className="button button--solid">{copy.primaryAction}</Link>
        <Link href="/insights" className="button button--ghost">{copy.secondaryAction}</Link>
      </div>
    </PageHeroWithImage>
  );
}
