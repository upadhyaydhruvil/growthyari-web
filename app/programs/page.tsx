import type { Metadata } from "next";
import { ArrowRight, Check, Info } from "lucide-react";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProofShowcaseSection } from "@/components/sections/ProofShowcaseSection";
import { WhoForSection } from "@/components/sections/WhoForSection";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreSkills, curriculumWeeks } from "@/data/pilot";
import { flagshipProgram } from "@/data/programs";
import { assessmentCall, confirmedProgramFacts, primaryCta } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Programs",
  "The GrowthYari 12-Week Sales & Communication Pilot Batch: a practical program for college students, graduates and freshers. Twelve weeks, ten core skills, and a full curriculum of learning, practice and feedback.",
  "/programs",
);

/**
 * /programs — the full detail for the single pilot batch.
 *
 * Deliberately not the homepage's program section repeated. This page is
 * where a serious applicant goes to read the whole curriculum without
 * opening an accordion, and to check the confirmed facts before applying.
 * No price is published: fees come after the assessment conversation.
 */
export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        badge="Applications open"
        title={
          <>
            The 12-week sales &amp;{" "}
            <span className="italic text-forest">communication pilot batch.</span>
          </>
        }
        intro={flagshipProgram.description}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {confirmedProgramFacts.map((fact) => (
              <div key={fact.label} className="bg-canvas p-5">
                <dt className="label-xs text-muted">{fact.label}</dt>
                <dd className="mt-2 text-[15px] leading-snug font-medium text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* Overview */}
      <section className="section-pad border-b border-line bg-canvas">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={flagshipProgram.eyebrow}
                title="Practical skills, practised out loud."
                intro={flagshipProgram.summary}
              />
              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                <Badge tone="solid">{flagshipProgram.duration}</Badge>
                <Badge tone="neutral">{flagshipProgram.focus}</Badge>
              </div>
              <ButtonLink href={primaryCta.href} size="lg" className="mt-8 w-full sm:w-auto">
                Apply for a Career Assessment
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                {flagshipProgram.features.map((feature, index) => (
                  <Reveal
                    as="li"
                    key={feature}
                    delay={index * 45}
                    className="flex items-start gap-3 text-[14.5px] leading-[1.55] text-ink-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"
                    >
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {feature}
                  </Reveal>
                ))}
              </ul>

              <div className="mt-8 rounded-lg border border-accent/30 bg-surface-3 p-6 sm:p-7">
                <h3 className="font-display text-[19px] font-medium text-ink">
                  {assessmentCall.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-body">
                  {assessmentCall.body}
                </p>
                <p className="mt-4 text-[13.5px] leading-[1.6] text-muted">
                  Application and assessment happen{" "}
                  <span className="font-medium text-ink-2">before</span> any payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full curriculum, expanded */}
      <section aria-labelledby="curriculum-heading" className="section-pad border-b border-line bg-sand">
        <div className="container-page">
          <SectionHeading
            eyebrow="Full curriculum"
            title={<span id="curriculum-heading">The twelve weeks, in the open.</span>}
            intro="Each week has one objective, a set of practice activities and a concrete output you keep. This is the proposed sequence for the pilot."
            className="max-w-3xl"
          />

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-amber/30 bg-amber/5 p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-amber-text" aria-hidden="true" />
            <p className="text-[13.5px] leading-[1.7] text-ink-2">
              Every module is confirmed as deliverable before the batch begins. If any week
              changes, you will know before you commit.
            </p>
          </div>

          <ol className="mt-10 border-t border-line">
            {curriculumWeeks.map((week, index) => (
              <Reveal
                as="li"
                key={week.week}
                delay={(index % 4) * 40}
                className="grid gap-6 border-b border-line py-8 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-[12px] font-medium tracking-[0.16em] text-accent-hover">
                    WEEK {String(week.week).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[21px] leading-tight font-medium tracking-[-0.02em] text-ink">
                    {week.title}
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="label-xs text-muted">Objective</p>
                  <p className="mt-2 text-[14.5px] leading-[1.75] text-body">{week.objective}</p>

                  <p className="label-xs mt-5 text-muted">Activities</p>
                  <ul className="mt-2 space-y-1.5">
                    {week.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-ink-2"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rounded-full bg-forest"
                        />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-lg border border-line bg-canvas p-5">
                    <p className="label-xs text-accent-hover">You leave with</p>
                    <p className="mt-2 text-[14.5px] leading-[1.7] text-ink">{week.output}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Ten skills */}
          <div className="mt-14">
            <h3 className="font-display text-[24px] font-medium text-ink">
              Ten skills you will practise
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <li
                  key={skill.title}
                  title={skill.description}
                  className="rounded-full border border-line bg-canvas px-3.5 py-1.5 text-[13.5px] text-ink-2"
                >
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhoForSection />
      <ProofShowcaseSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
