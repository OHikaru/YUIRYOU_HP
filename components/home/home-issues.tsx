import { SectionLead } from "@/components/ui";

export function HomeIssues({ issues }: { issues: string[] }) {
  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead eyebrow="課題整理" title="こんな課題はありませんか" description="医療の正確性だけでも、集客だけでも足りない企業に向けた設計です。" />
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