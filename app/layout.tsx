import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName}のOGP画像`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    description: siteConfig.defaultDescription,
    email: siteConfig.contactEmail,
    areaServed: "JP",
    knowsAbout: ["医療監修", "臨床研究", "RCT", "医療AI", "英語資料", "YouTube運用"],
  };

  return (
    <html lang="ja">
      <body>
        <a href="#main-content" className="skip-link">本文へ移動</a>
        <JsonLd data={organizationSchema} />
        <div className="site-frame">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <section className="section section--support-note">
            <div className="shell support-note">
              <div>
                <p className="eyebrow">運用メモ</p>
                <h2>初期受注はSEO待ちにしない設計です</h2>
              </div>
              <p>
                紹介、直接営業、メール営業、Google検索広告、note、LinkedIn、X、YouTubeからの流入を、すべて同じLPで受け止められるようにしています。 <Link href="/insights">インサイト一覧</Link> と <Link href="/team">チーム紹介</Link> を後から厚くすることで、検索資産化も進められます。
              </p>
            </div>
          </section>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
