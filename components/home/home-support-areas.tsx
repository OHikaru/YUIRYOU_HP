import Image from "next/image";
import Link from "next/link";

import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";
import { withLocale } from "@/lib/locale";

type SupportArea = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function HomeSupportAreas({ supportAreas, locale = "ja" }: { supportAreas: SupportArea[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].supportAreas;

  return (
    <section className="section">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="card-grid card-grid--five support-area-grid">
          {supportAreas.map((area, index) => (
            <article key={area.title} className="panel panel--service support-area-card">
              <div className="support-area-card__meta">
                <span className="support-area-card__index">{String(index + 1).padStart(2, "0")}</span>
                <Image src={area.icon} alt={`${area.title} icon`} width={56} height={56} />
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <Link href={withLocale(area.href, locale)} className="support-area-card__link">{copy.linkLabel}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}