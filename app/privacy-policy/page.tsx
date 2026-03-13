import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const companyInfo = {
  name: siteConfig.brandName,
  representative: "三苫 智裕",
  address: "岡山県岡山市北区東古松209番地1 リベール大元駅前II 1303号室",
  contactPath: "/contact",
  updatedAt: "2026-03-11",
};

export const metadata: Metadata = buildMetadata({
  title: `個人情報保護指針 | ${siteConfig.brandName}`,
  description: "YUIRYOU株式会社の個人情報保護指針です。お問い合わせ時に取得する個人情報の利用目的、安全管理、開示等の請求窓口を定めています。",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/privacy-policy", label: "個人情報保護指針" }]}
        eyebrow="Privacy Guideline"
        title="個人情報保護指針"
        imageSrc="/images/page-hero-home.png"
        imageAlt="個人情報保護指針のイメージ"
        imageWidth={1024}
        imageHeight={1024}
        narrowBody
        imagePriority
      >
        <p className="hero-copy">
          当社は、法人向け医療コンサルティングの提供にあたり、個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律その他の関係法令に従って適切に取り扱います。
        </p>
      </PageHeroWithImage>
      <section className="section">
        <div className="shell narrow-shell prose-block">
          <h2>1. 事業者情報</h2>
          <p>事業者名: {companyInfo.name}</p>
          <p>代表者: {companyInfo.representative}</p>
          <p>所在地: {companyInfo.address}</p>

          <h2>2. 取得する情報</h2>
          <p>
            当社は、本サイトのお問い合わせフォームその他の相談受付手段を通じて、会社名、お名前、メールアドレス、電話番号、役職、会社URL、業種、相談内容、現在の課題、想定時期、想定予算等を取得します。
          </p>
          <p>
            あわせて、広告効果測定および流入経路の把握のため、utm_source、utm_medium、utm_campaign、utm_content、referrer、landing_page 等の情報を取得する場合があります。
          </p>

          <h2>3. 利用目的</h2>
          <ul className="stack-list">
            <li>お問い合わせへの回答、面談設定、本人確認および連絡のため</li>
            <li>相談内容に応じた提案、見積もり、資料送付および契約検討のため</li>
            <li>サービス提供、案件管理、アフターフォローおよび記録保存のため</li>
            <li>本サイトおよび当社サービスの改善、流入分析、再発防止および品質向上のため</li>
            <li>法令対応、不正行為防止その他これらに付随する対応のため</li>
          </ul>

          <h2>4. 利用目的の変更</h2>
          <p>
            当社は、利用目的を変更する場合には、変更前の利用目的と関連性を有すると合理的に認められる範囲で行い、変更後の利用目的は本ページの更新その他適切な方法により公表します。
          </p>

          <h2>5. 第三者提供</h2>
          <p>
            当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。なお、業務委託先に個人情報の取扱いを委託する場合がありますが、その場合は当社の委託先として必要かつ適切な監督を行います。
          </p>

          <h2>6. 委託および外部サービスの利用</h2>
          <p>
            当社は、問い合わせ対応、クラウドインフラ、電子メール、フォーム管理その他の業務運営に必要な範囲で外部事業者を利用する場合があります。この場合、利用目的の達成に必要な範囲でのみ個人情報を取り扱わせ、契約その他の方法により適切な管理を求めます。
          </p>

          <h2>7. 安全管理措置</h2>
          <p>
            当社は、個人情報への不正アクセス、漏えい、滅失または毀損の防止その他の個人情報の安全管理のため、組織的、人的、物理的および技術的な安全管理措置を講じます。取得した情報には、業務上必要な者のみがアクセスできる体制をとり、保存期間経過後は、法令または業務上必要な範囲を超えて保有しないよう努めます。
          </p>

          <h2>8. 保有個人データの開示等の請求</h2>
          <p>
            本人またはその代理人は、法令の定めに従い、当社が保有する個人データについて、利用目的の通知、開示、訂正、追加、削除、利用停止、消去または第三者提供の停止を求めることができます。請求を希望される場合は、
            <a href={companyInfo.contactPath}>お問い合わせフォーム</a>
            からご連絡ください。本人確認のうえ、法令に従って合理的な期間および範囲で対応します。
          </p>

          <h2>9. 任意性</h2>
          <p>
            個人情報の提供は任意ですが、必要な情報をご提供いただけない場合、お問い合わせへの回答、面談設定またはサービス提供に支障が生じることがあります。
          </p>

          <h2>10. 継続的改善</h2>
          <p>
            当社は、法令改正、事業内容の変更または実務運用の見直しに応じて、本指針を継続的に見直し、必要に応じて更新します。重要な変更を行う場合は、本サイト上で公表します。
          </p>

          <h2>11. 改定日</h2>
          <p>制定・最終改定日: {companyInfo.updatedAt}</p>
        </div>
      </section>
    </>
  );
}