import type { Metadata } from "next";
import Link from "next/link";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `お問い合わせを受け付けました | ${siteConfig.brandName}`,
  description: "お問い合わせ完了ページです。通常2営業日以内を目安にご連絡します。",
  path: "/thanks",
});

export default function ThanksPage() {
  return (
    <PageHeroWithImage
      items={[{ href: "/thanks", label: "お問い合わせ完了" }]}
      eyebrow="Thanks"
      title="お問い合わせを受け付けました"
      imageSrc="/images/page-hero-thanks.jpg"
      imageAlt="お問い合わせ完了ページのイメージ"
      imageWidth={1408}
      imageHeight={768}
      narrowBody
      imagePriority
    >
      <p className="hero-copy">通常2営業日以内を目安にご連絡します。内容確認のうえ、適した進め方をご案内します。</p>
      <div className="hero-actions">
        <Link href="/" className="button button--solid">トップへ戻る</Link>
        <Link href="/insights" className="button button--ghost">インサイトを見る</Link>
      </div>
    </PageHeroWithImage>
  );
}