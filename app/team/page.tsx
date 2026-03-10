import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd, SectionLead } from "@/components/ui";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getTeamMembers } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "チーム紹介 | 産婦人科医2名・リハビリ医1名の医師チーム",
  description: "AI、英語、RCT、臨床研究、YouTube・広告の知見を持つ医師3名を紹介。法人向けの医療コンサルティングを支える専門家チームです。",
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
    },
  }));

  return (
    <>
      <JsonLd data={peopleSchema} />
      <div className="page-hero page-hero--compact">
        <div className="shell">
          <Breadcrumbs items={[{ href: "/team", label: "チーム紹介" }]} />
          <p className="eyebrow">医師チーム</p>
          <h1>チーム紹介</h1>
          <div className="three-line-summary">
            <p>産婦人科医2名とリハビリ医1名の医師チームです。</p>
            <p>AI、英語、RCT、臨床研究、YouTube・広告の知見を持つ3名で支援します。</p>
            <p>各メンバーの専門性と担当領域がわかる構成にしています。</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <SectionLead eyebrow="メンバー紹介" title="専門性の異なる3名が、1社の課題に横断して関わります" />
          <div className="team-list">
            {teamMembers.map((member) => (
              <article key={member.id} className="team-card">
                <Image src={member.image} alt={member.imageAlt} width={320} height={320} />
                <div>
                  <p className="eyebrow">{member.shortRole}</p>
                  <h2>{member.name}</h2>
                  <p className="role-label">{member.role}</p>
                  <p>{member.bio}</p>
                  <div className="team-card__columns">
                    <div>
                      <h3>専門領域</h3>
                      <ul className="stack-list">
                        {member.specialties.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h3>研究実績・補足</h3>
                      <ul className="stack-list">
                        {member.researchHighlights.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h3>相談できるテーマ</h3>
                      <ul className="stack-list">
                        {member.supportThemes.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="panel panel--accent">
            <p className="eyebrow">掲載情報</p>
            <p>論文本数、所属、導入実績、ロゴ、メディア掲載などは、事実確認が取れたものから順次掲載しています。</p>
          </div>
        </div>
      </section>
    </>
  );
}

