import Link from "next/link";

import type { TeamMember } from "@/content/site";
import { SectionLead } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import type { SiteLocale } from "@/lib/locale";
import { withLocale } from "@/lib/locale";

const researchmapLinks: Record<string, string> = {
  "obgyn-rct": "https://researchmap.jp/tmitoma",
  "obgyn-ai": "https://researchmap.jp/Hikaru_Ooba",
};

export function HomeTeam({ members, locale = "ja" }: { members: TeamMember[]; locale?: SiteLocale }) {
  const copy = homePageCopy[locale].team;

  return (
    <section className="section">
      <div className="shell">
        <SectionLead eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
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
                    <a href={profileLink} target="_blank" rel="noreferrer" className="support-area-card__link">
                      {copy.researchmapLabel}
                    </a>
                  ) : null}
                  <Link href={withLocale("/team", locale)} className="support-area-card__link">{copy.detailLabel}</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}