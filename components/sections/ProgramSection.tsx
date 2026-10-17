import { Check } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { curriculumWeeks, coreSkills } from "@/data/pilot";
import { flagshipProgram } from "@/data/programs";
import { assessmentCall, confirmedProgramFacts, primaryCta } from "@/data/site";

/**
 * Section I — the program.
 *
 * One program, no public price. The brief's two-track priced model was
 * deliberately retired, so this section presents the single 12-week pilot,
 * keeps the confirmed facts and the full curriculum discoverable, and
 * states plainly that the assessment conversation comes before any
 * payment.
 *
 * The curriculum is an accordion rather than nineteen paragraphs: it has
 * to be available, but the section's job is to be scannable.
 */
export function ProgramSection() {
  const curriculumItems = curriculumWeeks.map((week) => ({
    question: `Week ${week.week} — ${week.title}`,
    answer: (
      <div className="space-y-3">
        <p className="text-[14.5px] leading-[1.7] text-body">{week.objective}</p>
        <ul className="space-y-1.5">
          {week.activities.map((activity) => (
            <li key={activity} className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-ink-2">
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {activity}
            </li>
          ))}
        </ul>
        <p className="rounded-md border border-line bg-surface-3 p-3 text-[13.5px] leading-[1.6] text-muted">
          <span className="label-xs mb-1 block text-accent-hover">You leave with</span>
          {week.output}
        </p>
      </div>
    ),
  }));

  return (
    <section aria-labelledby="program-heading" className="section-pad relative border-b border-line bg-surface-3">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={flagshipProgram.eyebrow}
          title={
            <span id="program-heading">
              Build the skills you need. Practise until they feel natural.{" "}
              <span className="italic text-forest">Show what you can do.</span>
            </span>
          }
          intro={flagshipProgram.description}
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
          {/* What it is */}
          <Reveal className="lg:col-span-7">
            <article className="rule-top h-full rounded-lg border border-line bg-card p-7 shadow-soft sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="solid">{flagshipProgram.duration}</Badge>
                <Badge tone="neutral">{flagshipProgram.focus}</Badge>
              </div>

              <h3 className="mt-6 font-display text-[26px] leading-tight font-medium tracking-[-0.02em] text-ink sm:text-[30px]">
                {flagshipProgram.name}
              </h3>

              <p className="mt-4 text-[15.5px] leading-[1.75] text-body">{flagshipProgram.summary}</p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {flagshipProgram.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14.5px] leading-[1.55] text-ink-2">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"
                    >
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4">
                {confirmedProgramFacts.map((fact) => (
                  <div key={fact.label} className="bg-card p-4">
                    <dt className="label-xs text-muted">{fact.label}</dt>
                    <dd className="mt-2 text-[14.5px] leading-snug font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={primaryCta.href} size="lg">
                  Apply for a Career Assessment
                </ButtonLink>
                <ButtonLink href="/programs" size="lg" variant="outline">
                  Explore the Program
                </ButtonLink>
              </div>

              {/*
                * Payment timing is stated here, in the section that sells the
                * program, rather than only in the FAQ — the brief asks for it
                * to be unmissable.
                */}
              <p className="mt-5 text-[13.5px] leading-[1.6] text-muted">
                Application and assessment happen <span className="font-medium text-ink-2">before</span> any
                payment. Fees are discussed only after we confirm the batch is right for you.
              </p>
            </article>
          </Reveal>

          {/* Curriculum + skills */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-lg border border-line bg-card p-6 shadow-soft sm:p-7">
                <h3 className="font-display text-[20px] font-medium text-ink">The twelve weeks</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-muted">
                  Proposed weekly structure. Final sequence is confirmed with the batch.
                </p>
                <Accordion items={curriculumItems} defaultOpenIndex={null} className="mt-5" />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 rounded-lg border border-line bg-card p-6 shadow-soft sm:p-7">
                <h3 className="font-display text-[20px] font-medium text-ink">Ten skills you will practise</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {coreSkills.map((skill) => (
                    <li
                      key={skill.title}
                      className="rounded-full border border-line bg-surface-3 px-3.5 py-1.5 text-[13.5px] text-ink-2"
                      title={skill.description}
                    >
                      {skill.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-5 rounded-lg border border-accent/30 bg-card p-6 sm:p-7">
                <h3 className="font-display text-[19px] font-medium text-ink">{assessmentCall.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-body">{assessmentCall.body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
