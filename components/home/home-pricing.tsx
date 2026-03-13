import { homePageCopy } from "@/content/home-page-copy";
import { SectionLead } from "@/components/ui";

type PricingPlan = {
  name: string;
  price: string;
  note: string;
  features?: string[];
};

const pricingCardClasses = [
  "pricing-card--diagnostic",
  "pricing-card--advisory",
  "pricing-card--growth",
  "pricing-card--strategic",
];

export function HomePricing({ plans }: { plans: PricingPlan[] }) {
  const copy = homePageCopy.ja;

  return (
    <section id="pricing" className="section section--pricing-surface">
      <div className="shell">
        <SectionLead eyebrow={copy.pricing.eyebrow} title={copy.pricing.title} description={copy.pricing.description} />
        <div className="card-grid card-grid--pricing pricing-grid-shell">
          {plans.map((plan, index) => (
            <article key={plan.name} className={`panel panel--pricing ${pricingCardClasses[index] ?? ""}`}>
              <div className="pricing-card__top">
                <span className="pricing-card__label">{copy.pricing.labels[index] ?? "プラン"}</span>
                <p className="pricing-card__name">{plan.name}</p>
              </div>
              <div className="pricing-card__body">
                <h3>{plan.price}</h3>
                <p className="pricing-note">{plan.note}</p>
                <p className="pricing-card__subhead">含まれる内容</p>
                <ul className="stack-list">
                  {(plan.features ?? []).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="pricing-guardrails pricing-guardrails--light">
          <p>法人向け支援です。</p>
          <p>患者個人の診療相談は対象外です。</p>
          <p>法務・薬機法・医療広告の最終判断は必要に応じて専門家連携で行います。</p>
        </div>
      </div>
    </section>
  );
}