import { tracks } from "@/content/program-config";
import { visibleFaq } from "@/content/programs-content";
import { site } from "@/data/site";

/**
 * JSON-LD builders for /programs.
 *
 * Schema policy (from the build spec):
 *  - `Course`/`EducationalOccupationalProgram` per track.
 *  - `FAQPage` derived from confirmed FAQ items only.
 *  - NO `aggregateRating` or `review` — we publish no student results.
 *  - Prices are machine-readable and derived from the same source as /payment.
 */

export type JsonLd = Record<string, unknown>;

type TrackSlug = "group-cohort" | "1-1-accelerator";

function courseData(slug: TrackSlug): JsonLd {
  const program = tracks[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `GrowthYari ${program.name}`,
    description: program.description,
    url: `${site.domain}/programs/${program.slug}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    isAccessibleForFree: false,
    educationalLevel: "Professional / entry-to-mid career",
    teaches: "Sales, communication, business execution, proof-of-work building",
    offers: {
      "@type": "Offer",
      price: program.price.value,
      priceCurrency: "INR",
      category: "Paid program",
      availability: "https://schema.org/LimitedAvailability",
      url: `${site.domain}/payment?program=${program.slug}`,
    },
  };
}

function faqData(): JsonLd {
  const answered = visibleFaq.filter(
    (item): item is typeof item & { answer: string } => item.answer !== null,
  );
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function programsJsonLd(): JsonLd[] {
  return [courseData("group-cohort"), courseData("1-1-accelerator"), faqData()];
}