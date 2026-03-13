import Image from "next/image";

import { companyProfileCopy } from "@/content/company-profile";
import type { SiteLocale } from "@/lib/locale";

export function HomeCompanyProfile({ locale = "ja" }: { locale?: SiteLocale }) {
  const copy = companyProfileCopy[locale];

  return (
    <div className="hero-principles" aria-label={locale === "en" ? "Philosophy, mission, and vision" : "理念、ミッション、ビジョン"}>
      {copy.principles.map((principle) => (
        <article key={principle.label} className="panel panel--soft hero-principle-card">
          <div className="hero-principle-copy">
            <p className="eyebrow">{principle.label}</p>
            <h2>{principle.headline}</h2>
            {principle.subheadline ? <p className="hero-principle-copy__subheadline">{principle.subheadline}</p> : null}
            <div className="hero-principle-copy__body">
              {principle.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="hero-principle-media">
            <Image src={principle.imageSrc} alt={principle.imageAlt} width={1200} height={900} />
          </div>
        </article>
      ))}
    </div>
  );
}
