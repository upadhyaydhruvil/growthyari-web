import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutApproach, aboutApproachTitle, aboutThesis, aboutThesisTitle, aboutValues } from "@/data/about";

/**
 * The GrowthYari thesis and working method. Shared by /why and /about so
 * the two pages cannot drift apart on the thing they most need to agree
 * about — what the problem is and how the program answers it.
 *
 * Rendered on a forest band, because this is the part of the argument that
 * is about GrowthYari itself.
 */
export function PhilosophySection() {
  return (
    <section className="on-forest section-pad relative overflow-hidden border-b border-line bg-forest">
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-40" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Why we exist"
              title={aboutThesisTitle}
              className="[&_h2]:text-ink"
            />
            <Reveal delay={80}>
              <p className="mt-6 font-display text-[19px] leading-[1.6] text-ink-2 sm:text-[21px]">
                {aboutThesis}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <h3 className="label-xs text-accent-hover">{aboutApproachTitle}</h3>
            <Reveal delay={100}>
              <p className="mt-5 text-[16px] leading-[1.8] text-body">{aboutApproach}</p>
            </Reveal>

            <dl className="mt-9 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {aboutValues.map((value, index) => (
                <Reveal as="div" key={value.title} delay={index * 70} className="bg-forest-2 p-6">
                  <dt className="font-display text-[18px] leading-snug font-medium text-ink">
                    {value.title}
                  </dt>
                  <dd className="mt-2.5 text-[14px] leading-[1.7] text-body">{value.body}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
