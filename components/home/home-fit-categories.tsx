import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";

type FitCategory = {
  title: string;
  description: string;
};

export function HomeFitCategories({ categories, locale = "ja" }: { categories: FitCategory[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].fit;

  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="card-grid card-grid--two fit-grid">
          {categories.map((item) => (
            <article key={item.title} className="panel fit-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}