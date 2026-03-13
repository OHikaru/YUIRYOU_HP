import Image from "next/image";

import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";

type FlowItem = {
  title: string;
  description: string;
};

export function HomeProcess({ supportFlow, locale = "ja" }: { supportFlow: FlowItem[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].process;

  return (
    <section className="section">
      <div className="shell grid-two grid-two--wide-gap">
        <div>
          <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
          <div className="process-grid">
            {supportFlow.map((item, index) => (
              <article key={item.title} className="process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="panel panel--visual panel--visual-clean">
          <Image src="/images/support-journey.png" alt={locale === "en" ? "Support journey" : "支援イメージ"} width={1408} height={768} />
        </div>
      </div>
    </section>
  );
}