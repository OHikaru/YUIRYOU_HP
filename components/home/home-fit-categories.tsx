import { SectionLead } from "@/components/ui";

type FitCategory = {
  title: string;
  description: string;
};

export function HomeFitCategories({ categories }: { categories: FitCategory[] }) {
  return (
    <section className="section section--muted">
      <div className="shell">
        <SectionLead
          eyebrow="対象企業"
          title="こうした企業に向いています"
          description="医療接点があり、研究・AI・発信のどこかで専門的な判断が必要な企業に適した支援です。"
        />
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