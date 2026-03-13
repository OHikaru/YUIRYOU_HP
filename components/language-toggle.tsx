"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { chromeCopy } from "@/content/page-copy";
import { isEnglishPath, withLocale } from "@/lib/locale";

export function LanguageToggle() {
  const pathname = usePathname() || "/";
  const locale = isEnglishPath(pathname) ? "en" : "ja";
  const nextLocale = locale === "en" ? "ja" : "en";
  const copy = chromeCopy[locale];

  return (
    <Link href={withLocale(pathname, nextLocale)} className="button button--sm button--ghost language-toggle" aria-label={copy.languageSwitchAriaLabel}>
      {copy.languageSwitchLabel}
    </Link>
  );
}
