import { homePageCopy } from "@/content/home-page-copy";
import { SectionLead } from "@/components/ui";
import type { SiteLocale } from "@/lib/locale";

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

export function HomePricing({ plans, locale = "ja" }: { plans: PricingPlan[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].pricing;

  return (
    <section id="pricing" className="section section--pricing-surface">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="card-grid card-grid--pricing pricing-grid-shell">
          {plans.map((plan, index) => (
            <article key={plan.name} className={`panel panel--pricing ${pricingCardClasses[index] ?? ""}`}>
              <div className="pricing-card__top">
                <span className="pricing-card__label">{copy.labels[index] ?? "Plan"}</span>
                <p className="pricing-card__name">{plan.name}</p>
              </div>
              <div className="pricing-card__body">
                <h3>{plan.price}</h3>
                <p className="pricing-note">{plan.note}</p>
                <p className="pricing-card__subhead">{copy.includesLabel}</p>
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
          {copy.guardrails.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}