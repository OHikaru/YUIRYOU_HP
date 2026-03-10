import type { MetadataRoute } from "next";

import { articles, services, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/team", "/insights", "/contact", "/thanks", "/privacy-policy", "/disclaimer"] as const;

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.siteUrl}${service.path}`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.siteUrl}/insights/${article.slug}`,
      lastModified: article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
