import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Image src="/images/logo-yuiryou.png" alt="YUIRYOU株式会社のロゴ" width={1878} height={530} className="site-footer__logo" />
          <p className="eyebrow">Healthcare Business Partner</p>
          <h2>医療の正確性と事業推進の両立を、研究・AI・発信まで一気通貫で支援します。</h2>
          <p>
            YUIRYOU株式会社は、フェムテック、ヘルスケアSaaS、医療メディア、海外準備中のスタートアップに向けて、
            医療・研究・AI・発信の論点を横断して支援する法人向け医療コンサルティングチームです。
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
        <p>患者個人の診療相談は対象外です。法務・薬機法・医療広告の最終判断は必要に応じて専門家連携で行います。</p>
      </div>
    </footer>
  );
}