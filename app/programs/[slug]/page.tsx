import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, MonitorPlay, Sparkles, Users } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { IllustrationBand } from "@/components/sections/IllustrationBand";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCard } from "@/components/cards/PricingCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cohort, primaryCta } from "@/data/site";
import { faqs } from "@/data/faqs";
import { getProgram, getRelatedPrograms, programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";

const stageLabels: Record<string, string> = {
  assessment: "Before you start",
  training: "Live training",
  practice: "Weekly practice",
  proof: "Proof-of-work",
  opportunity: "Getting to opportunity",
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return pageMetadata("Program not found", "This program is not available.", "/programs");
  }

  return pageMetadata(
    program.name,
    `${program.summary} ${program.duration}, ${program.cohortSize}. ${program.price.amount} ${program.price.note}.`,
    `/programs/${program.slug}`,
  );
}

export default async function ProgramDetailPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) notFound();

  const related = getRelatedPrograms(program.slug);

  return (
    <>
      <PageHero
        eyebrow="Program"
        badge={`New cohort starts ${cohort.startsOn}`}
        title={program.name}
        intro={program.description}
        aside={
          <div className="rounded-lg border border-line bg-surface p-6 shadow-soft sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="label-xs text-muted">Program fee</p>
                <p className="mt-2.5 font-display text-[38px] leading-none font-semibold tracking-[-0.04em] text-ink">
                  {program.price.amount}
                </p>
                <p className="mt-2 text-[13px] text-muted">{program.price.note}</p>
              </div>
              {program.badge ? <Badge tone="lime">{program.badge}</Badge> : null}
            </div>

            <ButtonLink href={primaryCta.href} size="lg" className="mt-6 w-full">
              {program.ctaLabel}
            </ButtonLink>

            <p className="mt-3 text-center text-[12.5px] text-muted">
              Applications open · Seats limited to {cohort.seatsPerCohort} per cohort
            </p>
          </div>
        }
      />

      {/* Key facts */}
      <section className="border-b border-line bg-surface">
        <div className="container-page">
          <dl className="grid gap-px overflow-hidden border-x border-b border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Duration", value: program.duration, icon: Clock },
              { label: "Cohort size", value: program.cohortSize, icon: Users },
              { label: "Format", value: program.format, icon: MonitorPlay },
              { label: "Weekly commitment", value: program.weeklyTime, icon: Clock },
            ].map((item) => (
              <div key={item.label} className="bg-surface px-5 py-6">
                <dt className="flex items-center gap-2 text-[12.5px] text-muted">
                  <item.icon className="size-3.5 text-muted" aria-hidden="true" />
                  {item.label}
                </dt>
                <dd className="mt-2.5 text-[15.5px] font-semibold tracking-[-0.02em] text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who + why */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Who it's for" title="Is this you?" />
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {program.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-sm border border-line bg-surface px-4 py-3.5"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-4 shrink-0 place-items-center rounded-full bg-neon/20"
                    >
                      <Check className="size-2.5 text-neon-text" strokeWidth={3.5} />
                    </span>
                    <span className="text-[14.5px] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  Why this program
                </h3>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-body">
                  <p>
                    GrowthYari exists because people graduate with degrees and
                    certificates but struggle in the real world — they lack
                    communication, confidence, execution and proof that they can
                    actually perform.
                  </p>
                  <p>
                    This track is built to fix that. You learn in live sessions, you
                    practise every week, and you finish with recordings, documents and
                    outcomes that a recruiter or client can check for themselves.
                  </p>
                </div>
              </div>

              {program.highlights ? (
                <ul className="mt-8 space-y-3 border-t border-line pt-7">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Sparkles
                        className="mt-0.5 size-4 shrink-0 text-lime-text"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-6 text-ink-2">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-pad bg-surface" id={program.slug}>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Curriculum"
                title="How the eight weeks are spent."
                intro="Built from the GrowthYari loop: learning, practice, feedback, execution, growth."
              />
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-px overflow-hidden rounded-lg border border-line bg-line">
                {program.curriculum.map((item, index) => (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={index * 60}
                    className="flex flex-col gap-3 bg-surface p-6 sm:flex-row sm:gap-6 sm:p-7"
                  >
                    <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text sm:pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="label-xs text-muted">
                        {stageLabels[item.stage] ?? item.stage}
                      </p>
                      <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[14.5px] leading-7 text-body">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <p className="mt-5 text-[13px] text-muted">
                Week-by-week module titles are not published. The stages above are the
                structure GrowthYari commits to — your 1:1 Career Assessment call sets
                the sequence within them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / proof of work */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What you'll leave with"
                title="Work, not just a certificate."
                intro="Yes, you receive a certificate. But these are what you actually show an employer."
              />
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {program.proofOfWork.map((artifact) => (
                  <li key={artifact} className="flex items-center gap-3 border-t border-line py-3.5">
                    <span
                      aria-hidden="true"
                      className="grid size-5 shrink-0 place-items-center rounded-full bg-neon/20"
                    >
                      <Check className="size-3 text-lime-text" strokeWidth={3.5} />
                    </span>
                    <span className="text-[14.5px] text-ink-2">{artifact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <IllustrationBand
        page="/programs/[slug]"
        eyebrow="Progress you can see"
        title="Reviewed every module, not just at the end."
        intro="Each module closes with a review of the skill it targeted, so the next gap is chosen from evidence."
      />

      {/* Pricing + FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <PricingCard program={program} />
            </div>

            <div className="lg:col-span-7">
              <SectionHeading eyebrow="FAQ" title="Before you apply." />
              <div className="mt-8">
                <Accordion items={faqs} defaultOpenIndex={null} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other program */}
      {related.length > 0 ? (
        <section className="border-t border-line bg-surface py-14">
          <div className="container-page">
            <p className="label-xs text-muted">Also consider</p>
            <ul className="mt-5 flex flex-col gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/programs/${item.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-lg border border-line px-5 py-4 transition-colors duration-200 hover:border-line-strong hover:bg-surface"
                  >
                    <span>
                      <span className="block text-[16px] font-semibold tracking-[-0.02em] text-ink">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-[13.5px] text-body">
                        {item.summary}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[13px] text-muted">
                      {item.price.amount}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/programs"
              className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-neon-text transition-colors hover:text-neon-text"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All programs
            </Link>
          </div>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}
