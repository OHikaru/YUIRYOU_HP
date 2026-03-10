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

function normalizeService(service: Omit<ServiceDetail, "path"> & { path?: string }): ServiceDetail {
  const slug = service.slug;
  return {
    ...service,
    path: service.path ?? `/services/${slug}`,
  };
}

function normalizeTeamImagePath(memberId: string, image: string | null | undefined) {
  if (image) return image;

  const fallbackImageMap: Record<string, string> = {
    "obgyn-ai": "/images/team/team-obgyn-ai.svg",
    "obgyn-rct": "/images/team/team-obgyn-rct-english.svg",
    "rehab-media": "/images/team/team-rehab-youtube-ad.svg",
  };

  return fallbackImageMap[memberId] ?? "/images/hero-medical-consulting.svg";
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
    return teamMembers;
  }

  try {
    const data = await sanityClient.fetch<TeamMember[]>(teamMembersQuery, {}, { next: { revalidate: 60 } });
    if (!data?.length) return teamMembers;
    return data.map((member) => ({
      ...member,
      image: normalizeTeamImagePath(member.id, member.image),
      imageAlt: member.imageAlt || `${member.name}のプロフィール写真`,
    }));
  } catch {
    return teamMembers;
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
  if (!sanityEnabled || !sanityClient) {
    return articles;
  }

  try {
    const data = await sanityClient.fetch<ArticleDetail[]>(articlesQuery, {}, { next: { revalidate: 60 } });
    if (!data?.length) return articles;
    return data;
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
