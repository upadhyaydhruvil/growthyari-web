import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { JourneySection } from "@/components/sections/JourneySection";
import { PageHero } from "@/components/sections/PageHero";
import { ProofShowcaseSection } from "@/components/sections/ProofShowcaseSection";
import { TransformationSection } from "@/components/sections/TransformationSection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The GrowthYari learning loop — learn, practise, receive feedback, execute and build proof — run every week of the 12-week batch, and the eight steps from application to a clear next step.",
  alternates: { canonical: "/how-it-works" },
};

/**
 * /how-it-works — the learning loop and the joining process.
 *
 * The process section leads, because "how it works" for a prospective
 * applicant usually means "what will actually happen to me", and the
 * learning loop follows as the substance behind it.
 */
export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            A loop you run every week,{" "}
            <span className="italic text-forest">not a course you watch once.</span>
          </>
        }
        intro="Five steps, repeated for twelve weeks: learn it, practise it out loud, get specific feedback, run it again, and keep the finished work. The repetition is what turns a technique into a habit."
        badge="The process"
      />

      <JourneySection />
      <TransformationSection />
      <ProofShowcaseSection />
      <FinalCta />
    </>
  );
}
