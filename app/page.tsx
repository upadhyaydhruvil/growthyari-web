import { CoreSkillsSection } from "@/components/sections/CoreSkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { PilotShowcase } from "@/components/sections/PilotShowcase";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProgramFactsStrip } from "@/components/sections/ProgramFactsStrip";
import { ProofSection } from "@/components/sections/ProofSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { WhoShouldJoinSection } from "@/components/sections/WhoShouldJoinSection";
import { WhySection } from "@/components/sections/WhySection";

/**
 * Home page order — a deliberate funnel:
 *   promise → context → why → how → detail → outcome → fit → objections → act
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramFactsStrip />
      <ProblemSection />
      <WhySection />
      <PilotShowcase />
      <ExperienceSection />
      <CoreSkillsSection />
      <RoadmapSection />
      <ProofSection />
      <WhoShouldJoinSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
