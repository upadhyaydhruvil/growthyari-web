import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: site.domain, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.domain}/programs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.domain}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.domain}/why`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.domain}/register`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.domain}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.domain}/workshops`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.domain}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.domain}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.domain}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.domain}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes;
}
