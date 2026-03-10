import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/service-page-template";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/lib/site-data";

const slug = "medical-ai-global";

export async function generateMetadata(): Promise<Metadata> {
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({ title: service.metadataTitle, description: service.metadataDescription, path: service.path });
}

export default async function MedicalAiGlobalPage() {
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}