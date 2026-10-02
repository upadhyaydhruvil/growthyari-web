import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { FrameworkSection } from "@/components/sections/FrameworkSection";
import { Hero } from "@/components/sections/Hero";
import { IllustrationBand } from "@/components/sections/IllustrationBand";
import { LoopSection } from "@/components/sections/LoopSection";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { SystemStrip } from "@/components/sections/SystemStrip";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WorkshopsPreview } from "@/components/sections/WorkshopsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SystemStrip className="-mt-px mx-5 sm:mx-8 lg:mx-auto lg:max-w-[78rem] lg:-mt-10" />
<ProblemSection />
      <LoopSection />
      <FrameworkSection />
      <IllustrationBand
        page="/"
        eyebrow="Mentorship"
        title="Coached by people who do the work."
        intro="Every session is run by a working coach, not played back from a slide deck."
      />
      <PersonasSection />
      <AudiencesSection />
      <ComparisonSection />
      <ProcessSection />
      <ProofSection />
      <PricingSection />
      <WorkshopsPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
