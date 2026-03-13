import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const companyInfo = {
  name: siteConfig.brandName,
  representative: "三苫 智裕",
  contactPath: "/contact",
  updatedAt: "2026-03-13",
};

export const metadata: Metadata = buildMetadata({
  title: `個人情報保護指針 | ${siteConfig.brandName}`,
  description: "YUIRYOU株式会社の個人情報保護指針です。取得する情報、利用目的、安全管理措置、開示等請求への対応方針を記載しています。",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/privacy-policy", label: "個人情報保護指針" }]}
        eyebrow="Privacy Guideline"
        title="個人情報保護指針"
        imageSrc="/images/page-hero-privacy.png"
        imageAlt="個人情報保護指針のイメージ"
        imageWidth={1024}
        imageHeight={1024}
        narrowBody
        imagePriority
      >
        <p className="hero-copy">
          当社は、法人向け医療コンサルティングの提供にあたり、個人情報を適切に取得・利用・管理することを重要な責務と考えています。
        </p>
      </PageHeroWithImage>
      <section className="section">
        <div className="shell narrow-shell prose-block">
          <h2>1. 事業者情報</h2>
          <p>事業者名: {companyInfo.name}</p>
          <p>管理責任者: {companyInfo.representative}</p>

          <h2>2. 取得する情報</h2>
          <p>
            当社は、お問い合わせフォームの入力内容として、会社名、氏名、メールアドレス、電話番号、役職、会社URL、業種、相談内容、現在の課題、想定時期、想定予算を取得します。
            あわせて、utm_source、utm_medium、utm_campaign、utm_content、referrer、landing_page などの流入情報を取得する場合があります。
          </p>

          <h2>3. 利用目的</h2>
          <ul className="stack-list">
            <li>お問い合わせへの回答、商談設定、サービス提供のため</li>
            <li>提供サービスの改善、品質管理、提案内容の精度向上のため</li>
            <li>お問い合わせ経路や利用状況を分析し、事業運営を改善するため</li>
            <li>法令対応、契約履行、緊急時対応など、正当な業務運営のため</li>
          </ul>

          <h2>4. 利用目的の範囲</h2>
          <p>
            当社は、取得した個人情報を、前項の利用目的の達成に必要な範囲で利用します。利用目的の範囲を超えて利用する必要が生じた場合は、法令で認められる場合を除き、あらかじめ本人に通知または公表します。
          </p>

          <h2>5. 第三者提供</h2>
          <p>
            当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。ただし、業務遂行上必要な範囲で業務委託先に取り扱いを委託する場合があります。
          </p>

          <h2>6. 委託先の監督</h2>
          <p>
            個人情報の取り扱いを外部に委託する場合は、委託先の安全管理措置を確認し、必要かつ適切な監督を行います。
          </p>

          <h2>7. 安全管理措置</h2>
          <p>
            当社は、不正アクセス、漏えい、滅失、毀損の防止その他個人情報の安全管理のため、アクセス制御、取扱権限の管理、保存媒体の保護、不要情報の削除ルールの整備など、合理的な安全管理措置を講じます。
          </p>

          <h2>8. 開示、訂正、利用停止等</h2>
          <p>
            本人またはその代理人から、保有個人データについて、開示、訂正、追加、削除、利用停止、消去、第三者提供停止の請求があった場合は、法令に基づき合理的な範囲で対応します。
            ご希望がある場合は、<a href={companyInfo.contactPath}>お問い合わせフォーム</a> からご連絡ください。
          </p>

          <h2>9. 免責</h2>
          <p>
            当社は、本人が自ら開示した情報や、本人の責めに帰すべき事由により第三者が取得した情報については、当社の管理の及ばない範囲では責任を負いません。
          </p>

          <h2>10. 改定</h2>
          <p>
            本指針は、法令改正、業務内容の変更、運用改善に応じて見直すことがあります。重要な変更がある場合は、本サイト上で公表します。
          </p>

          <h2>11. 最終更新日</h2>
          <p>{companyInfo.updatedAt}</p>
        </div>
      </section>
    </>
  );
}