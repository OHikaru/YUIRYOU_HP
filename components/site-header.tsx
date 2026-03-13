import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";

const navItems = [
  { href: "/services/medical-scientific-advisory", label: "支援領域" },
  { href: "/team", label: "チーム紹介" },
  { href: "/insights", label: "インサイト" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand-mark" aria-label="トップページへ戻る">
          <Image src="/images/logo-yuiryou.png" alt="YUIRYOU株式会社のロゴ" width={1878} height={530} className="brand-mark__logo" priority />
          <span className="brand-mark__text">
            <strong>{siteConfig.brandName}</strong>
            <small>Medical Consulting for Healthcare Businesses</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="グローバルナビゲーション">
          <div className="site-nav__links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href={siteConfig.primaryCta.href} className="button button--sm button--solid">
            {siteConfig.primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}