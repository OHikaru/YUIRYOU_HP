import Image from "next/image";
import Link from "next/link";

import { SectionLead } from "@/components/ui";

type SupportArea = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function HomeSupportAreas({ supportAreas }: { supportAreas: SupportArea[] }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionLead
          eyebrow="支援領域"
          title="研究・AI・発信を、1つのチームで横断支援します"
          description="個別発注で分断しやすい論点を、同じ事業文脈で束ねて前に進めます。"
        />
        <div className="card-grid card-grid--five support-area-grid">
          {supportAreas.map((area, index) => (
            <article key={area.title} className="panel panel--service support-area-card">
              <div className="support-area-card__meta">
                <span className="support-area-card__index">{String(index + 1).padStart(2, "0")}</span>
                <Image src={area.icon} alt={`${area.title}のアイコン`} width={56} height={56} />
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <Link href={area.href} className="support-area-card__link">詳細を見る</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}