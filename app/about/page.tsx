import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { IllustrationBand } from "@/components/sections/IllustrationBand";
import { PageHero } from "@/components/sections/PageHero";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FrameworkStack } from "@/components/ui/FrameworkStack";
import {
  aboutApproach,
  aboutApproachTitle,
  aboutEyebrow,
  aboutIntro,
  aboutSelection,
  aboutThesis,
  aboutThesisTitle,
  aboutTitle,
  aboutValues,
  unknownFacts,
} from "@/data/about";
import { frameworkSteps } from "@/data/framework";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "GrowthYari is a professional growth accelerator: live coaching, practical learning, proof-of-work and personalized feedback for students, professionals, entrepreneurs and business owners.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutEyebrow}
        title={aboutTitle}
        intro={aboutIntro}
        aside={
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-7">
            <p className="label-xs text-muted">At a glance</p>
            <dl className="mt-5 space-y-4">
              {[
                { term: "What", value: "A professional growth accelerator" },
                { term: "Who", value: "Students, professionals, entrepreneurs, business owners" },
                { term: "Focus", value: "Sales, communication, business execution" },
                { term: "Format", value: "Live online, small cohorts, up to 8 weeks" },
                { term: "Output", value: "A proof-of-work portfolio" },
              ].map((row) => (
                <div key={row.term} className="border-t border-line pt-3.5">
                  <dt className="font-mono text-[10.5px] tracking-[0.16em] text-muted uppercase">
                    {row.term}
                  </dt>
                  <dd className="mt-1.5 text-[14.5px] leading-6 text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />

      {/* Thesis */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Why it exists" title={aboutThesisTitle} />
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-8 text-ink-2 sm:text-[19px] sm:leading-9">
                {aboutThesis}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selection stance */}
      <section className="border-y border-line bg-surface py-14 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[24px] leading-snug font-semibold tracking-[-0.03em] text-ink sm:text-[30px]">
              &ldquo;{aboutSelection.title}&rdquo;
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-body">
              {aboutSelection.body}
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our approach"
                title={aboutApproachTitle}
                intro={aboutApproach}
              />
            </div>

            <div className="lg:col-span-7">
              <div className="depth-stack depth-2 rounded-lg border border-line bg-panel p-7 sm:p-9">
                <div className="mb-7 flex items-center justify-between gap-4 border-b border-line pb-5">
                  <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    The sequence, end to end
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    {frameworkSteps.length} stages
                  </p>
                </div>

                <FrameworkStack />
              </div>

              <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {frameworkSteps.map((step, index) => (
                  <Reveal
                    as="li"
                    key={step.number}
                    delay={index * 60}
                    className="border-t border-line pt-6"
                  >
                    <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text">
                      {step.number}
                    </span>
                    <h3 className="mt-2.5 text-[18px] font-semibold tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-7 text-body">{step.blurb}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <AudiencesSection />
      <ComparisonSection />

      {/* Values */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four commitments that shape the program."
          />

          <div className="mt-11 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {aboutValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 60} className="bg-surface p-7 sm:p-8">
                <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[19px] leading-snug font-semibold tracking-[-0.025em] text-ink">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-7 text-body">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Honest gap */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-lg border border-line bg-surface p-7 sm:p-9">
            <CircleHelp className="size-5 text-muted" aria-hidden="true" />
            <h2 className="mt-4 text-[19px] font-semibold tracking-[-0.025em] text-ink">
              Details we have not published
            </h2>
            <p className="mt-3 text-[14.5px] leading-7 text-body">
              These have not been invented for this page. If you need any of them for a
              decision, ask directly and we will tell you.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {unknownFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-full border border-dashed border-line-strong px-3 py-1.5 text-[12.5px] text-muted"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <IllustrationBand
        page="/about"
        eyebrow="The work behind it"
        title="Built around what participants actually needed."
        intro="The programme grew out of a specific gap: skills were taught, but never practised or reviewed."
      />

      <FinalCta />
    </>
  );
}
