import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせ | 法人向け医療コンサルティング",
  description: "法人向けの医療コンサルティングに関するお問い合わせページ。無料相談、診断パック、継続伴走の相談を受け付けています。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeroWithImage
        items={[{ href: "/contact", label: "お問い合わせ" }]}
        eyebrow="Contact"
        title="お問い合わせ"
        imageSrc="/images/page-hero-contact.jpg"
        imageAlt="お問い合わせページのイメージ"
        imageWidth={1408}
        imageHeight={768}
        imagePriority
      >
        <div className="three-line-summary">
          <p>法人向けサービスです。患者個人の診療相談は対象外です。</p>
          <p>無料相談または診断パックの相談内容をお送りください。</p>
          <p>通常2営業日以内を目安にご連絡します。</p>
        </div>
      </PageHeroWithImage>
      <section className="section">
        <div className="shell grid-two">
          <div>
            <div className="panel panel--accent">
              <p className="eyebrow">Before Contact</p>
              <ul className="stack-list">
                <li>法人向けサービスです。患者個人の相談は対象外です。</li>
                <li>表現リスクの整理は支援しますが、法務・薬機法の最終判断は専門家連携です。</li>
                <li>価格感を含めた初回整理を行います。</li>
              </ul>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}