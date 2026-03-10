import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせを受け付けました | 医療コンサルティングチーム",
  description: "お問い合わせ完了ページ。通常2営業日以内を目安にご連絡します。",
  path: "/thanks",
});

export default function ThanksPage() {
  return (
    <div className="page-hero page-hero--compact">
      <div className="shell narrow-shell align-center">
        <Breadcrumbs items={[{ href: "/thanks", label: "お問い合わせ完了" }]} />
        <p className="eyebrow">Thanks</p>
        <h1>お問い合わせを受け付けました</h1>
        <p className="hero-copy">通常2営業日以内を目安にご連絡します。内容確認のうえ、無料相談または診断パックの進め方をご案内します。</p>
        <div className="hero-actions hero-actions--center">
          <Link href="/" className="button button--solid">トップへ戻る</Link>
          <Link href="/insights" className="button button--ghost">インサイトを見る</Link>
        </div>
      </div>
    </div>
  );
}
