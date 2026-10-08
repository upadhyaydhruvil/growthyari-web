/**
 * JSON-LD structured data.
 *
 * Rendered as a plain `<script>` rather than a component that guesses — the
 * object passed in is the object that ships, so what search engines read and
 * what the page says cannot drift apart.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Organization schema for the site root. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GrowthYari",
    url: "https://growthyari.com",
    logo: "https://growthyari.com/opengraph-image",
    description:
      "Live small-cohort coaching in sales and communication. Practise weekly, get personal feedback, and build a portfolio recruiters can verify.",
    sameAs: [] as string[],
  };
}

/** FAQPage schema, generated from the same `faqs` array the page renders. */
export function faqJsonLd(
  items: { question: string; answer: string }[],
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
    url: pageUrl,
  };
}
