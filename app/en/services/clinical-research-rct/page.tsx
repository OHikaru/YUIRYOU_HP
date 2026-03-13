import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/service-page-template";
import { localizeService } from "@/content/localized-site-data";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/site-data";

const slug = "clinical-research-rct";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  const localized = localizeService(service, locale);
  return buildMetadata({ title: localized.metadataTitle, description: localized.metadataDescription, path: `/en${service.path}`, locale });
}

export default async function EnglishClinicalResearchPage() {
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={localizeService(service, locale)} locale={locale} />;
}