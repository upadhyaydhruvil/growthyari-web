import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: site.domain, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.domain}/programs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.domain}/workshops`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.domain}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.domain}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  for (const program of programs) {
    routes.push({
      url: `${site.domain}/programs/${program.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return routes;
}
