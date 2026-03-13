import { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { type SiteLocale, withLocale } from "@/lib/locale";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "ja",
}: {
  title: string;
  description: string;
  path: string;
  locale?: SiteLocale;
}): Metadata {
  const jaPath = withLocale(path, "ja");
  const enPath = withLocale(path, "en");

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "ja-JP": jaPath,
        "en-US": enPath,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: locale === "en" ? siteConfig.brandNameEn : siteConfig.brandName,
      locale: locale === "en" ? "en_US" : "ja_JP",
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${locale === "en" ? siteConfig.brandNameEn : siteConfig.brandName} OGP image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export function formatDate(date: string, locale: SiteLocale = "ja") {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "ja-JP", {
    year: "numeric",
    month: locale === "en" ? "long" : "long",
    day: "numeric",
  }).format(new Date(date));
}