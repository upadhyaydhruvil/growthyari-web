import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { GapSection } from "@/components/sections/GapSection";
import { Hero } from "@/components/sections/Hero";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { ProofShowcaseSection } from "@/components/sections/ProofShowcaseSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { WhoForSection } from "@/components/sections/WhoForSection";

/**
 * Home page — the emotional narrative, in order.
 *
 *   recognition → understanding → possibility → evidence → next step
 *
 * Sections are lettered in the design brief (A–L). The nav (A) lives in
 * the layout. Everything below alternates ground deliberately:
 * ivory → sand → ivory → forest → ivory → sand → ivory → sand → ivory →
 * sand → ivory → forest, so the page has rhythm instead of one long wash.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <RecognitionSection />
      <GapSection />
      <TransformationSection />
      <ProofShowcaseSection />
      <StoriesSection />
      <WhoForSection />
      <ProgramSection />
      <DifferenceSection />
      <JourneySection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
