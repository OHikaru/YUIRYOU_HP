"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { companyProfileCopy } from "@/content/company-profile";
import { chromeCopy } from "@/content/page-copy";
import { isEnglishPath, withLocale } from "@/lib/locale";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = isEnglishPath(pathname) ? "en" : "ja";
  const copy = chromeCopy[locale];
  const companyInfo = companyProfileCopy[locale];

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Image src="/images/logo-yuiryou.png" alt="YUIRYOU logo" width={1878} height={530} className="site-footer__logo" />
          <p className="eyebrow">{copy.footerEyebrow}</p>
          <h2>{copy.footerTitle}</h2>
          <p>{copy.footerDescription}</p>
        </div>
        <div className="site-footer__nav">
          {copy.footerGroups.map((group) => (
            <section key={group.title} className="site-footer__nav-block">
              <h3>{group.title}</h3>
              <ul className="footer-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={withLocale(link.href, locale)}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="site-footer__nav-block site-footer__nav-block--company">
            <h3>{companyInfo.infoTitle}</h3>
            <dl className="footer-company-list">
              {companyInfo.infoItems.map((item) => (
                <div key={item.label} className="footer-company-list__row">
                  <dt>{item.label}</dt>
                  <dd>{item.href ? <a href={item.href}>{item.value}</a> : item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>{copy.footerNotice}</p>
        <p>{copy.footerDisclaimer}</p>
      </div>
    </footer>
  );
}
