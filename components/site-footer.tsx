"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { chromeCopy } from "@/content/page-copy";
import { isEnglishPath, withLocale } from "@/lib/locale";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = isEnglishPath(pathname) ? "en" : "ja";
  const copy = chromeCopy[locale];

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Image src="/images/logo-yuiryou.png" alt="YUIRYOU logo" width={1878} height={530} className="site-footer__logo" />
          <p className="eyebrow">{copy.footerEyebrow}</p>
          <h2>{copy.footerTitle}</h2>
          <p>{copy.footerDescription}</p>
        </div>
        {copy.footerGroups.map((group) => (
          <div key={group.title} className="site-footer__nav-block">
            <h3>{group.title}</h3>
            <ul className="footer-list">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={withLocale(link.href, locale)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="shell site-footer__bottom">
        <p>{copy.footerNotice}</p>
        <p>{copy.footerDisclaimer}</p>
      </div>
    </footer>
  );
}
