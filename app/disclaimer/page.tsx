import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "免責事項 | 医療コンサルティングチーム",
  description: "法人向け医療コンサルティングサイトの免責事項です。",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <div className="page-hero page-hero--compact">
        <div className="shell narrow-shell">
          <Breadcrumbs items={[{ href: "/disclaimer", label: "免責事項" }]} />
          <p className="eyebrow">Disclaimer</p>
          <h1>免責事項</h1>
          <p className="hero-copy">本サイトは法人向けの情報提供を目的としており、個別の医療判断、診断、治療方針の提示を行うものではありません。</p>
        </div>
      </div>
      <section className="section">
        <div className="shell narrow-shell prose-block">
          <h2>法人向け情報提供</h2>
          <p>本サイトは法人向けのコンサルティング、レビュー、伴走支援を説明するものです。患者個人への診療相談は対象外です。</p>
          <h2>法務・薬機法・医療広告</h2>
          <p>表現リスクの整理やレビューは支援しますが、法務・薬機法・医療広告の最終判断は必要に応じて専門家と連携して行います。</p>
          <h2>情報の完全性</h2>
          <p>掲載情報の正確性には配慮しますが、完全性・最新性を保証するものではありません。</p>
          <h2>成果保証の否定</h2>
          <p>本サービスは事業推進を支援するものであり、売上向上や規制適合を保証するものではありません。</p>
        </div>
      </section>
    </>
  );
}
