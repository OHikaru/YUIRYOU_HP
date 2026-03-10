import Image from "next/image";
import Link from "next/link";

import logo from "@/images/YUIRYOU_logo.png";
import { siteConfig } from "@/content/site";

const navItems = [
  { href: "/services/medical-scientific-advisory", label: "支援領域" },
  { href: "/team", label: "チーム" },
  { href: "/insights", label: "インサイト" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand-mark" aria-label="トップページへ戻る">
          <Image src={logo} alt="YUIRYOU株式会社のロゴ" className="brand-mark__logo" priority />
          <span>
            <strong>{siteConfig.brandName}</strong>
            <small>法人向け医療コンサルティング</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.primaryCta.href} className="button button--sm button--solid">
            {siteConfig.primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
