import type { Metadata } from "next";
import { CircleHelp, Quote } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { WhoForSection } from "@/components/sections/WhoForSection";
import { Reveal } from "@/components/ui/Reveal";
import {
  aboutEyebrow,
  aboutIntro,
  aboutSelection,
  aboutTitle,
  unknownFacts,
} from "@/data/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "About",
  "GrowthYari runs the 12-Week Sales & Communication Pilot Batch — practical, live training in speaking, listening and conversation skills for students, graduates and freshers.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutEyebrow}
        badge="The program behind it"
        title={aboutTitle}
        intro={aboutIntro}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {[
              { term: "What", value: "Sales & communication training" },
              { term: "Who", value: "Students, graduates, freshers" },
              { term: "Focus", value: "Speaking, listening, execution" },
              { term: "Format", value: "A live, 12-week program" },
              { term: "Output", value: "Evidence of your skills" },
              { term: "Pricing", value: "Shared after assessment" },
            ].map((row) => (
              <div key={row.term} className="bg-canvas p-5">
                <dt className="label-xs text-muted">{row.term}</dt>
                <dd className="mt-2 text-[14.5px] leading-6 font-medium text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      <PhilosophySection />

      {/* Selection stance — the one line we will stand behind in public */}
      <section className="section-pad bg-sand">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto size-6 text-accent" aria-hidden="true" />
            <h2 className="mt-6 font-display text-[26px] leading-[1.25] font-medium tracking-[-0.02em] text-ink italic sm:text-[34px]">
              &ldquo;{aboutSelection.title}&rdquo;
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-[1.8] text-body">
              {aboutSelection.body}
            </p>
          </Reveal>
        </div>
      </section>

      <WhoForSection />

      {/* Honest gap — surfaced, not hidden */}
      <section className="section-pad bg-canvas">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-line-strong p-7 sm:p-9">
            <CircleHelp className="size-5 text-muted" aria-hidden="true" />
            <h2 className="mt-4 font-display text-[20px] font-medium tracking-[-0.02em] text-ink">
              Details we have not published
            </h2>
            <p className="mt-3 text-[14.5px] leading-[1.8] text-body">
              These have not been invented for this page. If you need any of them to make a
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

      <FinalCta />
    </>
  );
}
