import type { Metadata } from "next";

import { PageHeroWithImage } from "@/components/page-hero-with-image";
import { JsonLd, SectionLead } from "@/components/ui";
import { teamPageCopy } from "@/content/page-copy";
import { localizeTeamMembers } from "@/content/localized-site-data";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getTeamMembers } from "@/lib/site-data";

const locale = "en" as const;
const copy = teamPageCopy[locale];

const researchmapLinks: Record<string, { href: string; label: string }> = {
  "obgyn-rct": { href: "https://researchmap.jp/tmitoma", label: "View Tomohiro Mitoma on researchmap" },
  "obgyn-ai": { href: "https://researchmap.jp/Hikaru_Ooba", label: "View Hikaru Oba on researchmap" },
};

export const metadata: Metadata = buildMetadata({
  title: copy.metadataTitle,
  description: copy.metadataDescription,
  path: "/en/team",
  locale,
});

export default async function EnglishTeamPage() {
  const teamMembers = localizeTeamMembers(await getTeamMembers(), locale);
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
        items={[{ href: "/en/team", label: copy.title }]}
        eyebrow={copy.eyebrow}
        title={copy.title}
        imageSrc="/images/page-hero-team.jpg"
        imageAlt="Team page visual"
        imageWidth={1408}
        imageHeight={768}
        imagePriority
        locale={locale}
      >
        <div className="three-line-summary">
          {copy.summary.map((line) => <p key={line}>{line}</p>)}
        </div>
      </PageHeroWithImage>

      <section className="section">
        <div className="shell">
          <SectionLead eyebrow={copy.sectionEyebrow} title={copy.sectionTitle} description={copy.sectionDescription} />
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
                      <h3>{copy.labels.specialties}</h3>
                      <ul className="stack-list">
                        {member.specialties.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                    <section className="team-card__detail-block">
                      <h3>{copy.labels.research}</h3>
                      <ul className="stack-list">
                        {member.researchHighlights.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                    <section className="team-card__detail-block">
                      <h3>{copy.labels.supportThemes}</h3>
                      <ul className="stack-list">
                        {member.supportThemes.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </section>
                    {member.selectedPublications.length > 0 ? (
                      <section className="team-card__detail-block team-card__detail-block--wide">
                        <h3>{copy.labels.publications}</h3>
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
            <p className="eyebrow">{copy.labels.sourceNoteEyebrow}</p>
            {copy.sourceNote.map((line) => <p key={line}>{line}</p>)}
          </div>
        </div>
      </section>
    </>
  );
}