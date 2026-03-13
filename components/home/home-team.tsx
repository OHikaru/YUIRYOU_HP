import Link from "next/link";

import type { TeamMember } from "@/content/site";
import { SectionLead } from "@/components/ui";

const researchmapLinks: Record<string, { href: string; label: string }> = {
  "obgyn-rct": { href: "https://researchmap.jp/tmitoma", label: "三苫 智裕のresearchmap" },
  "obgyn-ai": { href: "https://researchmap.jp/Hikaru_Ooba", label: "大羽 輝のresearchmap" },
};

export function HomeTeam({ members }: { members: TeamMember[] }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionLead
          eyebrow="医師チーム"
          title="チーム紹介"
          description="3名の医師が役割を分担し、研究・AI・発信の論点を横断して支援します。"
        />
        <div className="card-grid card-grid--three card-grid--team team-preview-grid">
          {members.map((member) => {
            const profileLink = researchmapLinks[member.id];
            return (
              <article key={member.id} className="panel panel--profile team-preview-card team-preview-card--text">
                <p className="eyebrow">{member.shortRole}</p>
                <h3>{member.name}</h3>
                <p className="role-label">{member.role}</p>
                <p>{member.bio}</p>
                <div className="team-preview-card__links">
                  {profileLink ? (
                    <a href={profileLink.href} target="_blank" rel="noreferrer" className="support-area-card__link">
                      researchmapを見る
                    </a>
                  ) : null}
                  <Link href="/team" className="support-area-card__link">詳細を見る</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}