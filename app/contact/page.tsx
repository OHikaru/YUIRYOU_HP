import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせ | 法人向け医療コンサルティング",
  description: "法人向け医療コンサルティングに関するお問い合わせページです。課題の概要と希望時期をお送りください。",
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
          <p>法人向け支援のご相談専用フォームです。</p>
          <p>対象資料、現在の課題、想定時期がわかる範囲であれば十分です。</p>
          <p>通常2営業日以内を目安にご連絡します。</p>
        </div>
      </PageHeroWithImage>
      <section className="section">
        <div className="shell grid-two">
          <div>
            <div className="panel panel--accent">
              <p className="eyebrow">Before Contact</p>
              <ul className="stack-list">
                <li>法人向け支援のみを対象としています。</li>
                <li>法務・薬機法・医療広告の最終判断は必要に応じて専門家と連携します。</li>
                <li>課題が散らばっていても問題ありません。現状がわかる資料があれば十分です。</li>
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