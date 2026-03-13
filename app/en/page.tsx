import type { Metadata } from "next";

import {
  HomeComparison,
  HomeFaq,
  HomeFinalCta,
  HomeFitCategories,
  HomeHero,
  HomeIssues,
  HomePricing,
  HomeProcess,
  HomeSupportAreas,
  HomeTeam,
  HomeTimeline,
} from "@/components/home";
import { JsonLd } from "@/components/ui";
import { homePageCopy } from "@/content/home-page-copy";
import {
  getLocalizedComparisonRows,
  getLocalizedFitCategories,
  getLocalizedGlobalFaq,
  getLocalizedIssueCards,
  getLocalizedPricingPlans,
  getLocalizedSupportAreas,
  getLocalizedSupportFlow,
  getLocalizedTimelinePhases,
  getLocalizedTrustChips,
  localizeTeamMembers,
} from "@/content/localized-site-data";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getHomePageData } from "@/lib/site-data";

const locale = "en" as const;
const heroCopy = homePageCopy[locale].hero;

export const metadata: Metadata = buildMetadata({
  title: heroCopy.title,
  description: heroCopy.description,
  path: "/en",
  locale,
});

export default async function EnglishHomePage() {
  const { teamMembers } = await getHomePageData();

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/en") }],
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <HomeHero trustChips={getLocalizedTrustChips(locale)} locale={locale} />
      <HomeIssues issues={getLocalizedIssueCards(locale)} locale={locale} />
      <HomeSupportAreas supportAreas={getLocalizedSupportAreas(locale)} locale={locale} />
      <HomeComparison rows={getLocalizedComparisonRows(locale)} locale={locale} />
      <HomeFitCategories categories={getLocalizedFitCategories(locale)} locale={locale} />
      <HomeProcess supportFlow={getLocalizedSupportFlow(locale)} locale={locale} />
      <HomeTimeline phases={getLocalizedTimelinePhases(locale)} locale={locale} />
      <HomeTeam members={localizeTeamMembers(teamMembers, locale)} locale={locale} />
      <HomePricing plans={getLocalizedPricingPlans(locale)} locale={locale} />
      <HomeFaq faq={getLocalizedGlobalFaq(locale)} locale={locale} />
      <HomeFinalCta locale={locale} />
    </>
  );
}