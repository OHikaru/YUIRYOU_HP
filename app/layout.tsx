import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

import { HtmlLangManager } from "@/components/html-lang-manager";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

import "./globals.css";

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

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
        alt: siteConfig.brandName + " OGP image",
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
    knowsAbout: ["medical review", "clinical research", "RCTs", "medical AI", "English materials", "YouTube content"],
  };

  return (
    <html lang="ja">
      <body className={notoSerifJp.variable}>
        <HtmlLangManager />
        <a href="#main-content" className="skip-link">?????</a>
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
