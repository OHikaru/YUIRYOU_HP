import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/service-page-template";
import { localizeService } from "@/content/localized-site-data";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/site-data";

const slug = "medical-scientific-advisory";
const locale = "ja" as const;

export async function generateMetadata(): Promise<Metadata> {
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  const localized = localizeService(service, locale);
  return buildMetadata({ title: localized.metadataTitle, description: localized.metadataDescription, path: service.path, locale });
}

export default async function MedicalScientificAdvisoryPage() {
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={localizeService(service, locale)} locale={locale} />;
}