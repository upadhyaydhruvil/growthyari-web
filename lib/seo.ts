import type { Metadata } from "next";
import { site } from "@/data/site";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "GrowthYari — professional growth accelerator",
};

const TWITTER_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "GrowthYari — professional growth accelerator",
};

/**
 * Page metadata builder. `title` is the page name only — the
 * "| GrowthYari" suffix comes from `site.titleTemplate` in the root
 * layout, so pages never repeat the brand name.
 */
export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = path === "/" ? site.domain : `${site.domain}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      url,
      title: `${title} | ${site.name}`,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}
