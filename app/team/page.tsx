import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getTeamMembers } from "@/lib/site-data";

const researchmapLinks: Record<string, { href: string; label: string }> = {
  "obgyn-rct": { href: "https://researchmap.jp/tmitoma", label: "三苫 智裕のresearchmap" },
  "obgyn-ai": { href: "https://researchmap.jp/Hikaru_Ooba", label: "大羽 輝のresearchmap" },
};

export const metadata: Metadata = buildMetadata({
  title: "チーム紹介 | 三苫 智裕・大羽 輝・豊田 康介",
  description: "三苫 智裕、大羽 輝、豊田 康介の3名で構成する医療コンサルティングチーム。研究・AI・発信の役割分担を紹介します。",
  path: "/team",
});

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
  const peopleSchema = teamMembers.map((member) => ({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: member.name,
      description: member.role,
      knowsAbout: [...member.specialties, ...member.supportThemes],
      image: absoluteUrl(member.image),
      sameAs: researchmapLinks[member.id] ? [researchmapLinks[member.id].href] : undefined,
    },
  }));

  return (
    <>
      <JsonLd data={peopleSchema} />
      <PageHeroWithImage
        items={[{ href: "/team", label: "チーム紹介" }]}
        eyebrow="医師チーム"
        title="チーム紹介"
        imageSrc="/images/page-hero-team.jpg"
        imageAlt="チーム紹介のイメージ"
        imageWidth={1408}
        imageHeight={768}
        imagePriority
      >
        <div className="three-line-summary">
          <p>三苫 智裕、大羽 輝、豊田 康介の3名で構成する医療コンサルティングチームです。</p>
          <p>研究・AI・情報品質・発信設計を役割分担し、事業課題に応じて横断的に支援します。</p>
          <p>公開情報は2026年3月13日時点で確認できる内容を基準に整理しています。</p>
        </div>
      </PageHeroWithImage>

      <section className="section">
        <div className="shell">
          <SectionLead
            eyebrow="Member"
            title="専門性の異なる3名が、ひとつの案件に連携して関わります"
            description="研究、AI、発信の論点を切り分けず、事業の優先順位に沿って支援できる体制です。"
          />
          <div className="team-list">
            {teamMembers.map((member) => {
              const profileLink = researchmapLinks[member.id];
              return (
                <article key={member.id} className="team-card team-card--text-only">
                  <div className="team-card__intro">
                    <p className="eyebrow">{member.shortRole}</p>
                    <h2>{member.name}</h2>
                    <p className="role-label">{member.role}</p>
                    <p>{member.bio}</p>
                    {profileLink ? (
                      <p className="team-card__external-link">
                        <a href={profileLink.href} target="_blank" rel="noreferrer">{profileLink.label}</a>
                      </p>
                    ) : null}
                  </div>
                  <div className="team-card__details-grid">
                    <section className="team-card__detail-block">
                      <h3>専門領域</h3>
                      <ul className="stack-list">
                        {member.specialties.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                    <section className="team-card__detail-block">
                      <h3>研究実績・補足</h3>
                      <ul className="stack-list">
                        {member.researchHighlights.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                    <section className="team-card__detail-block">
                      <h3>相談できるテーマ</h3>
                      <ul className="stack-list">
                        {member.supportThemes.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                    {member.selectedPublications.length > 0 ? (
                      <section className="team-card__detail-block team-card__detail-block--wide">
                        <h3>主要論文</h3>
                        <ul className="stack-list">
                          {member.selectedPublications.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </section>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="panel panel--accent">
            <p className="eyebrow">掲載情報について</p>
            <p>三苫 智裕、大羽 輝の研究実績・主要論文は、2026年3月13日時点で確認した researchmap の公開情報をもとに、企業向けに要点を整理しています。</p>
            <p>掲載実績や論文は公開情報を基準に構成しており、より詳細な確認が必要な場合は個別にご案内します。</p>
          </div>
        </div>
      </section>
    </>
  );
}