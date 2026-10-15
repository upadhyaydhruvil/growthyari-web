import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { confirmedProgramFacts } from "@/data/site";

/**
 * "Key Program Details" — deliberately a plain facts strip rather than a
 * marketing band. Only confirmed facts render. Anything the program team has
 * not yet fixed (cohort size, weekly hours, batch date, trainer) is omitted
 * here and flagged in `data/site.ts`.
 */
export function ProgramFactsStrip() {
  return (
    <section className="section-pad bg-surface" id="details">
      <div className="container-page">
        <SectionHeading
          eyebrow="At a glance"
          title="Key program details."
          intro="The essentials of the 12-Week Sales & Communication Pilot Batch. We add the rest — cohort size, weekly commitment and the next batch date — only once they are confirmed."
        />

        <dl className="mt-11 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {confirmedProgramFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 60} className="bg-surface p-6 sm:p-7">
              <dt className="label-xs text-muted">{fact.label}</dt>
              <dd className="mt-3 text-[19px] font-semibold tracking-[-0.02em] text-ink">
                {fact.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
