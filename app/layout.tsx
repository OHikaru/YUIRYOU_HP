import type { ReactNode } from "react";
import type { Metadata } from "next";

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
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
