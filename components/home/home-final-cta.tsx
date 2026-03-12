import Link from "next/link";

import { homePageCopy } from "@/content/home-page-copy";

export function HomeFinalCta() {
  const copy = homePageCopy.ja;

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
          <Link href="/contact" className="button button--solid">{copy.finalCta.primaryCta}</Link>
          <Link href="/insights" className="button button--ghost button--light">{copy.finalCta.secondaryCta}</Link>
        </div>
      </div>
    </section>
  );
}