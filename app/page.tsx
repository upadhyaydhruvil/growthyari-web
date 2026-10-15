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

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramFactsStrip />
      <ProblemSection />
      <PilotShowcase />
      <CoreSkillsSection />
      <RoadmapSection />
      <ExperienceSection />
      <WhySection />
      <WhoShouldJoinSection />
      <ProofSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
