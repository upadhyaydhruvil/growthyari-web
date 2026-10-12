import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Rocket,
  Send,
  UserCheck,
  X,
} from "lucide-react";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { CareerCapitalEquation } from "@/components/programs/CareerCapitalEquation";
import { ComparisonTable } from "@/components/programs/ComparisonTable";
import { FaqAccordion } from "@/components/programs/FaqAccordion";
import { LearningLoop } from "@/components/programs/LearningLoop";
import { PhaseStaircase } from "@/components/programs/PhaseStaircase";
import { ProgramPhotos } from "@/components/programs/ProgramPhotos";
import { ProofPyramid } from "@/components/programs/ProofPyramid";
import { SectionTracker } from "@/components/programs/SectionTracker";
import { SkillGapCheck } from "@/components/programs/SkillGapCheck";
import { StatStrip } from "@/components/programs/StatStrip";
import { StickyCtaBar } from "@/components/programs/StickyCtaBar";
import { TalentCard } from "@/components/programs/TalentCard";
import { TrackedButtonLink } from "@/components/programs/TrackedButtonLink";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { JourneyRail } from "@/components/ui/visuals/JourneyRail";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { heroFacts, tracks } from "@/content/program-config";
import { effort, honesty, notRightFor, programEvents, programsHero } from "@/content/programs-content";
import { getProgram, programs } from "@/data/programs";
import { programsJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Programs",
  "GrowthYari runs two live programs: a small-cohort Group Cohort (max 5 learners) and a fully personalized 1:1 Accelerator. Both run for up to 8 weeks and end in a proof-of-work portfolio a recruiter can verify.",
  "/programs",
);

export default function ProgramsPage() {
  const group = tracks["group-cohort"];
  const oneToOne = tracks["1-1-accelerator"];

  return (
    <>
      {programsJsonLd().map((block, index) => (
        <JsonLd key={index} id={`programs-jsonld-${index}`} data={block} />
      ))}

      {/* 5.1 — Hero */}
      <header
        data-track-section="hero"
        className="relative overflow-hidden border-b border-line bg-surface"
      >
        <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-50 tech-mask" />
        <div
          aria-hidden="true"
          className="glow-orb animate-drift top-[-10rem] left-1/2 size-[34rem] -translate-x-1/2 bg-neon/8"
        />

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl pt-14 pb-8 text-center sm:pt-20">
            <p className="label-xs text-neon-text">{programsHero.eyebrow}</p>

            <h1 className="mt-5 text-[34px] leading-[1.07] font-semibold text-ink sm:text-[50px] lg:text-[58px]">
              {programsHero.headingFront}
              <span className="text-muted">“{programsHero.headingQuote}”</span>
              {programsHero.headingTail}
              <span className="glow-text text-lime-text">
                {programsHero.headingQuote2}
              </span>
              {programsHero.headingPeriod}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-body sm:text-[17px]">
              {programsHero.lead}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedButtonLink
                href={programsHero.primaryCta.href}
                size="lg"
                event={programEvents.ctaClick}
                eventProps={{ cta: "hero_primary" }}
              >
                {programsHero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </TrackedButtonLink>
              <ButtonLink
                href={programsHero.secondaryCta.href}
                size="lg"
                variant="solidGhost"
              >
                {programsHero.secondaryCta.label}
              </ButtonLink>
            </div>

            <p className="mt-4 text-[13px] text-muted">
              Free Career Assessment Call · fit is confirmed before anything is paid
            </p>
          </div>

          <StatStrip stats={[...heroFacts]} className="mx-auto mb-12 max-w-4xl" />
        </div>
      </header>

      <ProgramPhotos page="/programs" />

      <CareerCapitalEquation />
      <PhaseStaircase />
      <ComparisonTable />
      <LearningLoop />
      <ProofPyramid />
      <TalentCard />

      {/* 5.14 — Effort */}
      <section data-track-section="effort" className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow={effort.eyebrow} title={effort.title} intro={effort.lead} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-4xl">
            {effort.facts.map((fact) => (
              <li key={fact.label} className="rounded-lg border border-line bg-surface-2 p-6">
                <p className="label-xs text-muted">{fact.label}</p>
                <p className="mt-3 font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                  {fact.value}
                </p>
                <p className="mt-2 text-[13.5px] leading-6 text-body">{fact.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[12.5px] leading-5 text-muted">
            [PLACEHOLDER: add schedules, make-up policy and refund terms here when the
            founder confirms them.]
          </p>
        </div>
      </section>

      {/* 5.7 — Choose your track */}
      <section data-track-section="tracks" className="section-pad bg-canvas">
        <div className="container-page">
          <SectionHeading
            eyebrow="Choose your track"
            title="Two tracks, same destination."
            intro="Both finish with a proof-of-work portfolio. The difference is the attention pointed at you alone."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.map((program, index) => (
              <Reveal key={program.slug} delay={index * 80} className="h-full">
                <ProgramCard program={program} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5.8 — Pricing */}
      <section data-track-section="pricing" id="pricing" className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pricing"
            title="What each track costs."
            intro="Prices are shown excluding GST and match the checkout page exactly — one source of truth, no surprises."
            className="max-w-xl"
          />

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            {getProgram("group-cohort") ? (
              <PricingCard
                program={getProgram("group-cohort")!}
                className="h-full"
                trackEvent={programEvents.pricingCardClick}
              />
            ) : null}
            {getProgram("1-1-accelerator") ? (
              <PricingCard
                program={getProgram("1-1-accelerator")!}
                className="h-full"
                trackEvent={programEvents.pricingCardClick}
              />
            ) : null}
          </div>

          <p className="mt-8 text-[13px] text-muted">
            Both tracks include resume reviews, mock interviews and career guidance.{" "}
            {group.price.amount} and {oneToOne.price.amount} — each {group.price.note}.
          </p>
        </div>
      </section>

      <SkillGapCheck />

      {/* How to join — same four-step grammar as /payment */}
      <section data-track-section="how-to-join" className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="How to join"
            title="From enquiry to first session."
            intro="The same four steps apply to both tracks."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-line bg-surface-2 p-6 sm:p-9">
            <JourneyRail
              steps={[
                {
                  icon: Send,
                  label: "Enquiry",
                  note: "Tell us your background and what you want to change.",
                },
                {
                  icon: ClipboardCheck,
                  label: "Assessment",
                  note: "A 1:1 Career Assessment Call maps where you actually are.",
                },
                {
                  icon: UserCheck,
                  label: "Selection",
                  note: "We confirm the track and a seat in the next cohort.",
                },
                {
                  icon: Rocket,
                  label: "First session",
                  note: "Live training starts, with weekly practice and feedback.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FaqAccordion />

      {/* 5.16 — Honesty band */}
      <section data-track-section="honesty" className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow={honesty.eyebrow} title={honesty.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-amber/25 bg-surface-2 p-7">
              <p className="label-xs text-amber-text">Will not promise</p>
              <ul className="mt-5 space-y-3">
                {honesty.denied.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-muted/15"
                    >
                      <X className="size-2.5 text-muted" strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] leading-6 text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-neon/25 bg-neon/6 p-7">
              <p className="label-xs text-neon-text">Will do</p>
              <ul className="mt-5 space-y-3">
                {honesty.kept.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-neon/25"
                    >
                      <Check className="size-2.5 text-ink" strokeWidth={3.5} />
                    </span>
                    <span className="text-[14.5px] leading-6 text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5.18 — Not for you */}
      <section data-track-section="not-right" className="section-pad bg-canvas">
        <div className="container-page">
          <SectionHeading
            eyebrow={notRightFor.eyebrow}
            title={notRightFor.title}
            intro={notRightFor.lead}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-4xl">
            {notRightFor.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-line bg-surface p-5"
              >
                <X className="mt-0.5 size-4 shrink-0 text-amber-text" aria-hidden="true" />
                <span className="text-[14.5px] leading-6 text-ink-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />

      <SectionTracker />
      <StickyCtaBar />
    </>
  );
}