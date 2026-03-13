import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";

export function HomeIssues({ issues, locale = "ja" }: { issues: string[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].issues;

  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="card-grid card-grid--three issue-grid">
          {issues.map((issue, index) => (
            <article key={issue} className="panel panel--soft issue-card">
              <span className="issue-card__index">{String(index + 1).padStart(2, "0")}</span>
              <p>{issue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}