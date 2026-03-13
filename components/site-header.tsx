"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageToggle } from "@/components/language-toggle";
import { chromeCopy } from "@/content/page-copy";
import { siteConfig } from "@/content/site";
import { isEnglishPath, withLocale } from "@/lib/locale";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = isEnglishPath(pathname) ? "en" : "ja";
  const copy = chromeCopy[locale];
  const homeHref = withLocale("/", locale);
  const brandName = locale === "en" ? siteConfig.brandNameEn : siteConfig.brandName;

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href={homeHref} className="brand-mark" aria-label={locale === "en" ? "Back to home" : "トップページへ戻る"}>
          <Image src="/images/logo-yuiryou.png" alt="YUIRYOU logo" width={1878} height={530} className="brand-mark__logo" priority />
          <span className="brand-mark__text">
            <strong>{brandName}</strong>
            <small>{copy.brandTagline}</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label={copy.navAriaLabel}>
          <div className="site-nav__links">
            {copy.navItems.map((item) => (
              <Link key={item.href} href={withLocale(item.href, locale)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="site-nav__actions">
            <LanguageToggle />
            <Link href={withLocale("/contact", locale)} className="button button--sm button--solid">
              {copy.primaryCta}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
