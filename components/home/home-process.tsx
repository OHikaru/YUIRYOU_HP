import Image from "next/image";

import { SectionLead } from "@/components/ui";

type FlowItem = {
  title: string;
  description: string;
};

export function HomeProcess({ supportFlow }: { supportFlow: FlowItem[] }) {
  return (
    <section className="section">
      <div className="shell grid-two grid-two--wide-gap">
        <div>
          <SectionLead eyebrow="支援の流れ" title="支援イメージ" description="診断・設計・伴走の3段階で、何を前に進めるかを整理します。" />
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
          <Image src="/images/support-journey.png" alt="支援イメージ" width={1408} height={768} />
        </div>
      </div>
    </section>
  );
}