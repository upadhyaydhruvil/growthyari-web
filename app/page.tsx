import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { CoachesSection } from "@/components/sections/CoachesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
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
import { JsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      {/* FAQPage schema, built from the same array the FAQ section renders. */}
      <JsonLd data={faqJsonLd(faqs, "https://growthyari.com/")} />
      <Hero />
      <TrustStrip />
      <SystemStrip className="-mt-px mx-5 sm:mx-8 lg:mx-auto lg:max-w-[78rem] lg:-mt-10" />
      <ProblemSection />
      <LoopSection />

      {/* Named coaches. Renders nothing until every entry in data/coaches.ts is
          real — a placeholder name on a public site is worse than none. */}
      <CoachesSection />

      <IllustrationBand
        page="/"
        eyebrow="Inside a session"
        title="Bring a real situation, leave with the fix."
        intro="Sessions run on your own recordings and documents, so the feedback is about your work rather than a generic example."
      />

      <PersonasSection />
      <AudiencesSection />
      <ComparisonSection />
      <ProcessSection />
      <CurriculumSection />
      <ProofSection />
      <PricingSection />
      <WorkshopsPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
