import Link from "next/link";

import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";
import { withLocale } from "@/lib/locale";

export function HomeFinalCta({ locale = "ja" }: { locale?: SiteLocale }) {
  const copy = homePageCopy[locale];

  return (
    <section className="section section--cta">
      <div className="shell cta-banner">
        <div>
          <p className="eyebrow">{copy.finalCta.eyebrow}</p>
          <h2>{copy.finalCta.title}</h2>
          <p>{copy.finalCta.description}</p>
          <div className="cta-proof">
            {copy.finalCta.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-actions cta-banner__actions">
          <Link href={withLocale("/contact", locale)} className="button button--solid">{copy.finalCta.primaryCta}</Link>
          <Link href={withLocale("/insights", locale)} className="button button--ghost button--light">{copy.finalCta.secondaryCta}</Link>
        </div>
      </div>
    </section>
  );
}