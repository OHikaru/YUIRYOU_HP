import type { MetadataRoute } from "next";

import { articles, services, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/team", "/insights", "/contact", "/thanks", "/privacy-policy", "/disclaimer"] as const;
  const englishStaticRoutes = ["/en", "/en/team", "/en/insights", "/en/contact", "/en/thanks", "/en/privacy-policy", "/en/disclaimer"] as const;

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.7,
    })),
    ...englishStaticRoutes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: route === "/en" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/en" ? 0.9 : 0.6,
    })),
    ...services.flatMap((service) => ([
      {
        url: `${siteConfig.siteUrl}${service.path}`,
        lastModified: siteConfig.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${siteConfig.siteUrl}/en${service.path}`,
        lastModified: siteConfig.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
    ])),
    ...articles.flatMap((article) => ([
      {
        url: `${siteConfig.siteUrl}/insights/${article.slug}`,
        lastModified: article.publishedAt,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      {
        url: `${siteConfig.siteUrl}/en/insights/${article.slug}`,
        lastModified: article.publishedAt,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      },
    ])),
  ];
}