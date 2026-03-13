import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";

type ComparisonRow = {
  label: string;
  values: string[];
};

export function HomeComparison({ rows, locale = "ja" }: { rows: ComparisonRow[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].comparison;
  const criteriaLabel = locale === "en" ? "Criteria" : "比較軸";
  const tableAria = locale === "en" ? "Comparison table" : "比較表";
  const mobileAria = locale === "en" ? "Comparison cards" : "比較カード";

  return (
    <section className="section">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="comparison-table-shell">
          <div className="comparison-table" role="table" aria-label={tableAria}>
            <div className="comparison-table__head" role="row">
              <span>{criteriaLabel}</span>
              {copy.columnLabels.map((label) => <span key={label}>{label}</span>)}
            </div>
            {rows.map((row) => (
              <div className="comparison-table__row" role="row" key={row.label}>
                <span>{row.label}</span>
                {row.values.map((value) => (
                  <span key={row.label + value}>{value}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="comparison-mobile-list" aria-label={mobileAria}>
          {rows.map((row) => (
            <article key={row.label} className="comparison-mobile-card">
              <h3>{row.label}</h3>
              <dl>
                {row.values.map((value, index) => (
                  <div key={row.label + String(index)} className="comparison-mobile-card__row">
                    <dt>{copy.columnLabels[index]}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="section-footnote">{copy.footnote}</p>
      </div>
    </section>
  );
}
