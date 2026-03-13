import type { FaqItem } from "@/content/site";
import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";

export function HomeFaq({ faq, locale = "ja" }: { faq: FaqItem[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].faq;

  return (
    <section className="section">
      <div className="shell narrow-shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} />
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}