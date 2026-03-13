import Image from "next/image";
import Link from "next/link";

import { homePageCopy } from "@/content/home-page-copy";

type HomeHeroProps = {
  trustChips: string[];
};

export function HomeHero({ trustChips }: HomeHeroProps) {
  const copy = homePageCopy.ja;

  return (
    <section className="hero hero--home">
      <div className="shell hero__layout hero__layout--editorial">
        <div className="hero-copy-cluster">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-copy hero-copy--strong">{copy.hero.description}</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button--solid">{copy.hero.primaryCta}</Link>
            <Link href="/#pricing" className="button button--ghost-strong">{copy.hero.secondaryCta}</Link>
          </div>
          <div className="hero-note-block">
            <p className="hero-note">{copy.hero.note}</p>
          </div>
          <div className="chip-row chip-row--hero">
            {trustChips.map((chip) => (
              <span key={chip} className="chip">{chip}</span>
            ))}
          </div>
        </div>
        <div className="hero-stage">
          <div className="hero-visual-card hero-visual-card--home">
            <Image src="/images/page-hero-home.png" alt="YUIRYOU株式会社のトップビジュアル" width={1024} height={1024} priority />
          </div>
          <div className="hero-highlight-grid">
            {copy.hero.highlights.map((item) => (
              <article key={item.title} className="hero-highlight-card">
                <span className="hero-highlight-card__label">{item.label}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}