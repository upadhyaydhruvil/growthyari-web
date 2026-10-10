import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Clock, Rocket, Send, UserCheck, Users } from "lucide-react";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JourneyRail } from "@/components/ui/visuals/JourneyRail";
import { IllustrationBand } from "@/components/sections/IllustrationBand";
import { cohort } from "@/data/site";
import { programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Programs",
  "GrowthYari runs two programs: a small-cohort Group Cohort of up to five learners and a fully personalized 1:1 Accelerator. Both run for up to 8 weeks of live online coaching and end in a proof-of-work portfolio.",
  "/programs",
);

export default function ProgramsPage() {
  const group = programs.find((p) => !p.featured);
  const oneToOne = programs.find((p) => p.featured);

  return (
    <>
      <PageHero
        eyebrow="Programs"
        badge={`New cohort starts ${cohort.startsOn}`}
        title={
          <>
            One program.{" "}
            <span className="text-neon-text">Two ways in.</span>
          </>
        }
        intro="Both tracks run for up to 8 weeks of live online coaching. The difference is who you learn with and how much of the coaching is pointed at you alone."
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {[
              { label: "Duration", value: "Up to 8 weeks", icon: Clock },
              { label: "Cohort size", value: "Max 5 learners", icon: Users },
              { label: "Format", value: "Live online", icon: Clock },
              { label: "Weekly time", value: "5–8 hours", icon: Clock },
            ].map((item) => (
              <div key={item.label} className="bg-surface p-5">
                <dt className="label-xs text-muted">{item.label}</dt>
                <dd className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* Program summaries */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Choose your track"
            title="Pick the level of support you actually need."
            intro="Both tracks finish the same way — with work you can show an employer."
          />

          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            {programs.map((program, index) => (
              <Reveal key={program.slug} delay={index * 80}>
                <ProgramCard program={program} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-surface" id="pricing">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Pricing"
              title="What each track costs."
              intro={`Next batch begins ${cohort.startsOn}. Seats are limited to ${cohort.seatsPerCohort} per cohort. Prices exclude GST.`}
              className="max-w-xl"
            />
          </div>

          <div className="mt-11 grid items-start gap-6 lg:grid-cols-2">
            {group ? <PricingCard program={group} className="h-full" /> : null}
            {oneToOne ? <PricingCard program={oneToOne} className="h-full" /> : null}
          </div>

          <p className="mt-8 text-[13px] text-muted">
            Both tracks include resume reviews, mock interviews and career guidance.
          </p>
        </div>
      </section>

      {/* Enrollment path */}
      <section className="section-pad bg-surface" id="how-to-join">
        <div className="container-page">
          <SectionHeading
            eyebrow="How to join"
            title="From enquiry to first session."
            intro="The same four steps apply to both tracks."
            align="center"
          />

          <div className="mt-14 rounded-lg border border-line bg-surface p-6 sm:p-9">
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
                  note: "A 1:1 Career Assessment call maps where you actually are.",
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

      <IllustrationBand
        page="/programs"
        eyebrow="The shape of the work"
        title="Where a track takes you."
        intro="Each track runs the same loop at a different pace and with a different level of support."
      />

      {/* Highlights per track */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Included in every track"
            title="What both programs share."
            intro="Whichever you choose, the outcome is the same: a portfolio a recruiter can verify."
          />

          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.slug}
                className="rounded-lg border border-line bg-surface p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-ink">
                    {program.name}
                  </h3>
                  <span className="font-mono text-[12px] text-muted">
                    {program.price.amount}
                  </span>
                </div>

                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Duration", value: program.duration },
                    { label: "Format", value: program.format },
                    { label: "Cohort", value: program.cohortSize },
                    { label: "Weekly time", value: program.weeklyTime },
                  ].map((item) => (
                    <div key={item.label} className="border-t border-line pt-3">
                      <dt className="text-[12.5px] text-muted">{item.label}</dt>
                      <dd className="mt-1 text-[14.5px] font-medium text-ink">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {program.highlights ? (
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                    {program.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_8px_rgba(23,124,93,0.45)]"
                        />
                        <span className="text-[14.5px] leading-6 text-body">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <Link
                  href={`/programs/${program.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-neon-text transition-colors hover:text-neon-text"
                >
                  Read the full curriculum
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <ProofSection />
      <FinalCta />
    </>
  );
}
