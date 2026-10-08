/**
 * "What makes it different" — traditional courses vs the GrowthYari
 * approach. Both lists are verbatim from growthyari.com.
 */

export interface ComparisonColumn {
  key: "traditional" | "growthyari";
  heading: string;
  badge: string;
  badgeTone: "negative" | "positive";
  items: string[];
  /** Traditional items are struck through in the UI. */
  struck?: boolean;
}

export const comparisonEyebrow = "Why GrowthYari";
export const comparisonTitle = "What makes it different.";

export const comparisonColumns: ComparisonColumn[] = [
  {
    key: "traditional",
    heading: "Traditional courses",
    badge: "The default",
    badgeTone: "negative",
    items: ["Recorded videos", "Passive learning", "One-way lectures", "No accountability"],
    struck: true,
  },
  {
    key: "growthyari",
    heading: "GrowthYari",
    badge: "Active",
    badgeTone: "positive",
    items: [
      "Live coaching",
      "Small cohorts",
      "Weekly practice",
      "Personalised feedback",
      "Interview readiness",
      "Real execution",
    ],
  },
];
