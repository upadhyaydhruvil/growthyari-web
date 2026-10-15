import type { Metadata } from "next";
import { ArrowRight, Clock, Info, Target } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProofSection } from "@/components/sections/ProofSection";
import { WhoShouldJoinSection } from "@/components/sections/WhoShouldJoinSection";
import { curriculumWeeks } from "@/data/pilot";
import { flagshipProgram } from "@/data/programs";
import { confirmedProgramFacts, primaryCta } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Programs",
  "The GrowthYari 12-Week Sales & Communication Pilot Batch: a practical program for college students, graduates and freshers. Twelve weeks, ten core skills, and a full curriculum of learning, practice and feedback.",
  "/programs",
);

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        badge="Applications open"
        title={
          <>
            12-Week Sales &amp;{" "}
            <span className="text-neon-text">Communication Pilot Batch.</span>
          </>
        }
        intro={flagshipProgram.description}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {confirmedProgramFacts.map((fact) => (
              <div key={fact.label} className="bg-surface p-5">
                <dt className="label-xs text-muted">{fact.label}</dt>
                <dd className="mt-2 text-[16px] font-semibold tracking-[-0.02em] text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* What you build */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What you build"
                title="Practical skills, practised out loud."
                intro={flagshipProgram.summary}
              />
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5 text-[13.5px] text-body">
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-neon-text" aria-hidden="true" />
                  {flagshipProgram.duration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Target className="size-4 text-neon-text" aria-hidden="true" />
                  {flagshipProgram.focus}
                </span>
              </div>
              <ButtonLink href={primaryCta.href} size="lg" className="mt-8 w-full sm:w-auto">
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-x-10 gap-y-3.5 border-t border-line pt-6 sm:grid-cols-2">
                {flagshipProgram.features.map((feature, index) => (
                  <Reveal
                    as="li"
                    key={feature}
                    delay={index * 45}
                    className="flex items-start gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_8px_rgba(23,124,93,0.45)]"
                    />
                    <span className="text-[14.5px] leading-6 text-body">{feature}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full 12-week curriculum */}
      <section className="section-pad bg-canvas" id="curriculum">
        <div className="container-page">
          <SectionHeading
            eyebrow="Full curriculum"
            title="The twelve weeks in detail."
            intro="Each week has one objective, a set of practice activities and a concrete output you keep."
          />

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-amber/25 bg-amber/5 p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-amber-text" aria-hidden="true" />
            <p className="text-[13.5px] leading-6 text-ink-2">
              This is the proposed curriculum for the pilot. Every module is confirmed
              as deliverable before the batch begins.
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
                  <p className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text">
                    WEEK {String(week.week).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[19px] leading-tight font-semibold tracking-[-0.02em] text-ink">
                    {week.title}
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[12.5px] font-medium tracking-[0.1em] text-muted uppercase">
                    Objective
                  </p>
                  <p className="mt-2 text-[14.5px] leading-7 text-body">
                    {week.objective}
                  </p>

                  <p className="mt-5 text-[12.5px] font-medium tracking-[0.1em] text-muted uppercase">
                    Activities
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {week.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2.5 text-[14px] leading-6 text-ink-2"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rounded-full bg-neon"
                        />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-lg border border-line bg-surface p-5">
                    <p className="text-[12.5px] font-medium tracking-[0.1em] text-muted uppercase">
                      Output
                    </p>
                    <p className="mt-2 text-[14.5px] leading-7 text-ink">
                      {week.output}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ExperienceSection />
      <WhoShouldJoinSection />
      <ProofSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
