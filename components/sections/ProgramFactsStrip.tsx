import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { confirmedProgramFacts } from "@/data/site";

/**
 * "Key Program Details" — deliberately a plain facts band rather than a
 * marketing strip. Heading on the left, the essentials as large numbers on
 * the right. Only confirmed facts render; anything the program team has not
 * yet fixed (cohort size, weekly hours, batch date, trainer) is omitted here
 * and flagged in `data/site.ts`.
 */
export function ProgramFactsStrip() {
  return (
    <section className="section-pad bg-surface" id="details">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="At a glance" title="Key program details." />
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-2xl text-[15px] leading-7 text-body">
              The essentials of the 12-Week Sales &amp; Communication Pilot Batch. We add
              the rest — cohort size, weekly commitment and the next batch date — only once
              they are confirmed.
            </p>

            <dl className="mt-9 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {confirmedProgramFacts.map((fact, index) => (
                <Reveal
                  key={fact.label}
                  delay={index * 60}
                  className="group relative bg-surface p-6 sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <dt className="label-xs text-muted">{fact.label}</dt>
                  <dd className="mt-3 text-[22px] leading-tight font-semibold tracking-[-0.02em] text-ink">
                    {fact.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
