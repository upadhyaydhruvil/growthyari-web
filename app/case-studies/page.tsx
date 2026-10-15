import type { Metadata } from "next";
import { Info } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { illustrativeCaseStudies, verifiedCaseStudies } from "@/data/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Case Studies",
  "How the GrowthYari 12-Week Sales & Communication Pilot Batch applies to real situations — interview nerves, first sales calls and workplace updates. Verified learner stories are added as they are published.",
  "/case-studies",
);

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Situations the batch <span className="text-neon-text">is built for.</span>
          </>
        }
        intro="Straight talk about what changes and what we do not claim. Verified learner stories appear here as they are published; until then, the entries below are clearly marked as illustrative scenarios."
      />

      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="flex items-start gap-3 rounded-lg border border-amber/25 bg-amber/5 p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-amber-text" aria-hidden="true" />
            <p className="text-[13.5px] leading-6 text-ink-2">
              We publish no invented results, names, numbers or company logos. The
              illustrative entries below describe common situations and what the program
              develops — they are not real people and claim no outcomes.
            </p>
          </div>

          {/* Illustrative */}
          <div className="mt-14">
            <SectionHeading
              eyebrow="Illustrative"
              title="Common situations"
              intro="Marked illustrative throughout."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {illustrativeCaseStudies.map((study, index) => (
                <Reveal
                  key={study.slug}
                  delay={index * 70}
                  className="flex flex-col rounded-lg border border-line bg-surface p-7"
                >
                  <Badge tone="neutral" className="self-start">
                    Illustrative
                  </Badge>
                  <h3 className="mt-4 text-[19px] leading-tight font-semibold tracking-[-0.02em] text-ink">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] text-muted">{study.context}</p>

                  <dl className="mt-5 space-y-4 border-t border-line pt-5">
                    <div>
                      <dt className="label-xs text-muted">The challenge</dt>
                      <dd className="mt-1.5 text-[14px] leading-6 text-body">
                        {study.challenge}
                      </dd>
                    </div>
                    <div>
                      <dt className="label-xs text-muted">How the program helps</dt>
                      <dd className="mt-1.5 text-[14px] leading-6 text-body">
                        {study.approach}
                      </dd>
                    </div>
                    <div>
                      <dt className="label-xs text-muted">What it develops</dt>
                      <dd className="mt-1.5 text-[14px] leading-6 text-ink-2">
                        {study.outcome}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {study.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[12px] text-ink-2"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Verified */}
          <div className="mt-16">
            <SectionHeading
              eyebrow="Verified"
              title="Real learner stories"
              intro="Published only with the learner's permission and after the facts are checked."
            />
            {verifiedCaseStudies.length === 0 ? (
              <div className="mt-8 rounded-lg border border-dashed border-line-strong p-8">
                <p className="text-[15px] font-medium text-ink-2">
                  No verified case studies are published yet.
                </p>
                <p className="mt-2 max-w-xl text-[14px] leading-7 text-body">
                  This library is built to hold many stories. When a learner agrees to
                  share theirs, it will appear here — with their name, their situation and
                  what actually changed.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
