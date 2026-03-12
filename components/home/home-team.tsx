import Image from "next/image";
import Link from "next/link";

import type { TeamMember } from "@/content/site";
import { SectionLead } from "@/components/ui";

export function HomeTeam({ members }: { members: TeamMember[] }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionLead eyebrow="医師チーム" title="チーム紹介" description="医師ごとの専門性と役割分担がひと目で伝わるように整理しています。" />
        <div className="card-grid card-grid--three card-grid--team">
          {members.map((member) => (
            <article key={member.id} className="panel panel--profile team-preview-card">
              <Image src={member.image} alt={member.imageAlt} width={320} height={320} />
              <p className="eyebrow">{member.shortRole}</p>
              <h3>{member.name}</h3>
              <p className="role-label">{member.role}</p>
              <p>{member.bio}</p>
              <Link href="/team" className="support-area-card__link">詳細を見る</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}