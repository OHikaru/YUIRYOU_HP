import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `免責事項 | ${siteConfig.brandName}`,
  description: "法人向け医療コンサルティングサイトの免責事項です。情報提供の範囲と責任範囲を記載しています。",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/disclaimer", label: "免責事項" }]}
        eyebrow="Disclaimer"
        title="免責事項"
        imageSrc="/images/page-hero-disclaimer.png"
        imageAlt="免責事項のイメージ"
        imageWidth={1024}
        imageHeight={1024}
        narrowBody
        imagePriority
      >
        <p className="hero-copy">
          本サイトは法人向けの情報提供を目的としており、個別の医療判断、診断、治療方針の提示を行うものではありません。
        </p>
      </PageHeroWithImage>
      <section className="section">
        <div className="shell narrow-shell prose-block">
          <h2>1. 法人向け情報提供</h2>
          <p>本サイトは、法人向けのコンサルティング、レビュー、伴走支援を説明するものです。患者個人への診療相談は対象外です。</p>

          <h2>2. 法務・薬機法・医療広告</h2>
          <p>表現リスクの整理やレビューは支援しますが、法務・薬機法・医療広告の最終判断は必要に応じて専門家と連携して行います。</p>

          <h2>3. 情報の正確性</h2>
          <p>掲載情報の正確性には配慮しますが、完全性、最新性、有用性を保証するものではありません。</p>

          <h2>4. 成果保証の否定</h2>
          <p>本サービスは事業推進を支援するものであり、売上向上、資金調達成功、規制適合、検索順位向上などの成果を保証するものではありません。</p>
        </div>
      </section>
    </>
  );
}