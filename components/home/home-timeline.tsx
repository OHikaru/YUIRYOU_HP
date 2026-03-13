import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";

type TimelinePhase = {
  title: string;
  description: string;
};

export function HomeTimeline({ phases, locale = "ja" }: { phases: TimelinePhase[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].timeline;

  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="timeline-grid">
          {phases.map((phase) => (
            <article key={phase.title} className="timeline-card">
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}