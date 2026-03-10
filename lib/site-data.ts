import {
  articleMap,
  articles,
  comparisonRows,
  fitCategories,
  globalFaq,
  issueCards,
  pricingPlans,
  serviceMap,
  services,
  siteConfig,
  supportAreas,
  supportFlow,
  teamMembers,
  timelinePhases,
  trustChips,
  type ArticleDetail,
  type ServiceDetail,
  type TeamMember,
} from "@/content/site";
import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { articlesQuery, servicesQuery, siteSettingsQuery, teamMembersQuery } from "@/lib/sanity/queries";

type SiteSettingsOverride = Partial<typeof siteConfig> & {
  trustChips?: string[];
  issueCards?: string[];
  globalFaq?: typeof globalFaq;
  pricingPlans?: typeof pricingPlans;
};

const fallbackImageMap: Record<string, string> = {
  "obgyn-ai": "/images/team/team-obgyn-ai.svg",
  "obgyn-rct": "/images/team/team-obgyn-rct-english.svg",
  "rehab-media": "/images/team/team-rehab-youtube-ad.svg",
};

function normalizeService(service: Omit<ServiceDetail, "path"> & { path?: string }): ServiceDetail {
  const slug = service.slug;
  return {
    ...service,
    path: service.path ?? `/services/${slug}`,
  };
}

function normalizeTeamImagePath(memberId: string, image: string | null | undefined) {
  if (image) return image;
  return fallbackImageMap[memberId] ?? "/images/hero-medical-consulting.svg";
}

function sortTeamMembers(items: TeamMember[]) {
  return [...items].sort((a, b) => {
    const aOrder = a.sortOrder ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.sortOrder ?? Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.name.localeCompare(b.name, "ja");
  });
}

export async function getSiteSettings(): Promise<SiteSettingsOverride> {
  if (!sanityEnabled || !sanityClient) {
    return {
      ...siteConfig,
      trustChips,
      issueCards,
      globalFaq,
      pricingPlans,
    };
  }

  try {
    const data = await sanityClient.fetch<SiteSettingsOverride | null>(siteSettingsQuery, {}, { next: { revalidate: 60 } });
    return {
      ...siteConfig,
      trustChips,
      issueCards,
      globalFaq,
      pricingPlans,
      ...(data ?? {}),
    };
  } catch {
    return {
      ...siteConfig,
      trustChips,
      issueCards,
      globalFaq,
      pricingPlans,
    };
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (!sanityEnabled || !sanityClient) {
    return sortTeamMembers(teamMembers);
  }

  try {
    const data = await sanityClient.fetch<TeamMember[]>(teamMembersQuery, {}, { next: { revalidate: 60 } });
    if (!data?.length) return sortTeamMembers(teamMembers);
    return sortTeamMembers(
      data.map((member) => ({
        ...member,
        sortOrder: member.sortOrder ?? Number.MAX_SAFE_INTEGER,
        selectedPublications: member.selectedPublications ?? [],
        image: normalizeTeamImagePath(member.id, member.image),
        imageAlt: member.imageAlt || `${member.name}のプロフィール写真`,
      })),
    );
  } catch {
    return sortTeamMembers(teamMembers);
  }
}

export async function getServices(): Promise<ServiceDetail[]> {
  if (!sanityEnabled || !sanityClient) {
    return services;
  }

  try {
    const data = await sanityClient.fetch<Array<Omit<ServiceDetail, "path">>>(servicesQuery, {}, { next: { revalidate: 60 } });
    if (!data?.length) return services;
    return data.map((service) => normalizeService(service));
  } catch {
    return services;
  }
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetail | null> {
  const all = await getServices();
  return all.find((service) => service.slug === slug) ?? serviceMap.get(slug) ?? null;
}

export async function getArticles(): Promise<ArticleDetail[]> {
  const allowedSlugs = new Set(articles.map((article) => article.slug));

  if (!sanityEnabled || !sanityClient) {
    return articles;
  }

  try {
    const data = await sanityClient.fetch<ArticleDetail[]>(articlesQuery, {}, { next: { revalidate: 60 } });
    if (!data?.length) return articles;
    return data
      .filter((article) => allowedSlugs.has(article.slug))
      .map((article) => ({
        ...article,
        tags: article.tags ?? [],
        sources: article.sources ?? [],
        faq: article.faq ?? [],
      }));
  } catch {
    return articles;
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const all = await getArticles();
  return all.find((article) => article.slug === slug) ?? articleMap.get(slug) ?? null;
}

export async function getHomePageData() {
  const [settings, cmsTeamMembers] = await Promise.all([
    getSiteSettings(),
    getTeamMembers(),
  ]);

  return {
    settings,
    teamMembers: cmsTeamMembers,
    supportAreas,
    comparisonRows,
    fitCategories,
    supportFlow,
    timelinePhases,
  };
}
