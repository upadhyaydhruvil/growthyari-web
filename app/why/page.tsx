import type { Metadata } from "next";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { GapSection } from "@/components/sections/GapSection";
import { PageHero } from "@/components/sections/PageHero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";

export const metadata: Metadata = {
  title: "Why GrowthYari",
  description:
    "GrowthYari exists for people who have potential but struggle to turn it into visible ability. The real problem isn't a lack of knowledge — it's the gap between knowing something and being able to demonstrate it.",
  alternates: { canonical: "/why" },
};

/**
 * /why — the problem and the philosophy.
 *
 * Reuses the same recognition, gap, philosophy and differentiation
 * sections as the homepage rather than paraphrasing them. One brand, one
 * argument — a visitor who reads both should never find the two pages
 * disagreeing about what GrowthYari believes.
 */
export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why GrowthYari"
        title={
          <>
            You are not short on ability.{" "}
            <span className="italic text-forest">You are short on evidence.</span>
          </>
        }
        intro="Most people who struggle to get taken seriously have done the learning. What they have not had is the chance to practise out loud, be corrected, and walk away with something they can point at."
        badge="The problem"
      />

      <RecognitionSection />
      <GapSection />
      <PhilosophySection />
      <DifferenceSection />
      <FinalCta />
    </>
  );
}
