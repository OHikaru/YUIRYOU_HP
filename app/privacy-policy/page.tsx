import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "個人情報保護方針 | 医療コンサルティングチーム",
  description: "法人向け医療コンサルティングサイトにおける個人情報保護方針です。",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-hero page-hero--compact">
        <div className="shell narrow-shell">
          <Breadcrumbs items={[{ href: "/privacy-policy", label: "個人情報保護方針" }]} />
          <p className="eyebrow">Privacy Policy</p>
          <h1>個人情報保護方針</h1>
          <p className="hero-copy">お問い合わせフォームから取得する情報は、法人向け相談への対応、連絡、サービス改善のために利用します。</p>
        </div>
      </div>
      <section className="section">
        <div className="shell narrow-shell prose-block">
          <h2>取得する情報</h2>
          <p>会社名、お名前、メールアドレス、電話番号、役職、会社URL、相談内容、現在の課題、想定時期、想定予算などを取得します。</p>
          <h2>利用目的</h2>
          <p>お問い合わせへの回答、商談設定、サービス提供、品質改善のために利用します。</p>
          <h2>第三者提供</h2>
          <p>法令に基づく場合を除き、本人の同意なく第三者に提供しません。</p>
          <h2>安全管理</h2>
          <p>取得した情報は適切に管理し、不正アクセス、紛失、漏えいの防止に努めます。</p>
          <h2>開示・訂正等</h2>
          <p>保有個人情報の開示、訂正、利用停止等の要望には、合理的な範囲で対応します。</p>
        </div>
      </section>
    </>
  );
}
