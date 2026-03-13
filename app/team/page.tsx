import type { Metadata } from "next";
import Image from "next/image";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getTeamMembers } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "チーム紹介 | 三苫 智裕・大羽 輝・豊田 康介",
  description: "三苫 智裕、大羽 輝、豊田 康介の医師チームを紹介。英語・RCT・研究実務、AI・情報品質、YouTube・広告設計を横断して支援します。",
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
          <p>三苫 智裕、大羽 輝、豊田 康介の医師チームです。</p>
          <p>英語・RCT・研究実務、AI・情報品質、YouTube・広告設計を横断して支援します。</p>
          <p>役割分担だけでなく、研究実績や公開論文も確認できる構成にしています。</p>
        </div>
      </PageHeroWithImage>

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
                  {member.selectedPublications.length > 0 ? (
                    <div className="team-card__columns">
                      <div>
                        <h3>主要論文</h3>
                        <ul className="stack-list">
                          {member.selectedPublications.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <div className="panel panel--accent">
            <p className="eyebrow">掲載情報</p>
            <p>三苫 智裕、大羽 輝の研究実績と主要論文は、2026年3月10日時点の researchmap 公開情報をもとに企業向けに再構成しています。</p>
            <p>所属、論文、研究テーマは公開情報に基づいて反映し、導入実績やロゴなどは事実確認が取れたものから掲載します。</p>
          </div>
        </div>
      </section>
    </>
  );
}