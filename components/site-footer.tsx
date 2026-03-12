import Image from "next/image";
import Link from "next/link";

import logo from "@/images/YUIRYOU_logo.png";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Image src={logo} alt="YUIRYOU株式会社のロゴ" className="site-footer__logo" />
          <p className="eyebrow">Healthcare Business Partner</p>
          <h2>医療監修の先まで踏み込み、研究・AI・発信の実務を前に進めるための法人向け医療コンサルティング。</h2>
          <p>
            本サイトは法人向けの情報提供と伴走支援を目的としています。患者個人の診療相談や個別の治療判断は行いません。
          </p>
        </div>
        <div className="site-footer__nav-block">
          <h3>支援領域</h3>
          <ul className="footer-list">
            <li><Link href="/services/medical-scientific-advisory">医療・科学アドバイザリー</Link></li>
            <li><Link href="/services/clinical-research-rct">臨床研究・RCT・論文化支援</Link></li>
            <li><Link href="/services/medical-ai-global">医療AI・英語 / 海外向け支援</Link></li>
            <li><Link href="/services/youtube-content-ad">YouTube・広告・オウンドメディア支援</Link></li>
          </ul>
        </div>
        <div className="site-footer__nav-block">
          <h3>ガイド</h3>
          <ul className="footer-list">
            <li><Link href="/team">チーム紹介</Link></li>
            <li><Link href="/insights">インサイト / コラム</Link></li>
            <li><Link href="/privacy-policy">個人情報保護指針</Link></li>
            <li><Link href="/disclaimer">免責事項</Link></li>
          </ul>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>{siteConfig.phoneLabel}</p>
        <p>法務や薬機法の最終判断は専門家連携で行います。情報の完全性を保証するものではありません。</p>
      </div>
    </footer>
  );
}