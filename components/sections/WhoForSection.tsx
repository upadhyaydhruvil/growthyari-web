import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audiences, whoForEyebrow, whoForIntro, whoForTitle } from "@/data/whoFor";

/**
 * Section H — "Who GrowthYari is for."
 *
 * The primary audience (students and freshers) gets the large treatment —
 * full width, more room, a stronger headline — and the other four sit
 * underneath as a compact row. The brief asks for students to be the
 * visual focus, and the asymmetry is also the honest hierarchy: the
 * program is built around them first.
 *
 * Each group states the challenge in its own terms rather than being
 * folded into a generic "everyone can learn" claim.
 */
export function WhoForSection() {
  const [primary, ...rest] = audiences;

  if (!primary) return null;
  const PrimaryIcon = primary.icon;

  return (
    <section aria-labelledby="who-for-heading" className="section-pad relative border-b border-line bg-canvas">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={whoForEyebrow}
          title={<span id="who-for-heading">{whoForTitle}</span>}
          intro={whoForIntro}
          className="max-w-3xl"
        />

        {/* Primary audience */}
        <Reveal>
          <article className="rule-top mt-14 grid gap-8 rounded-lg border border-line bg-card p-7 shadow-soft sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-fg"
                >
                  <PrimaryIcon className="size-6" strokeWidth={1.75} />
                </span>
                <span className="label-xs text-accent-hover">{primary.label}</span>
              </div>

              <h3 className="mt-6 font-display text-[28px] leading-[1.15] font-medium tracking-[-0.02em] text-ink sm:text-[34px]">
                {primary.title}
              </h3>

              <ButtonLink href="/register" size="md" className="mt-8">
                Find Your Next Step
              </ButtonLink>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
              <p className="text-[15.5px] leading-[1.75] text-body">{primary.challenge}</p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-body">{primary.help}</p>
            </div>
          </article>
        </Reveal>

        {/* The other four */}
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal as="li" key={group.label} delay={index * 80}>
                <article className="neon-card neon-card-hover flex h-full flex-col p-6">
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full border border-line bg-surface-3 text-primary"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>

                  <span className="label-xs mt-5 text-muted">{group.label}</span>
                  <h3 className="mt-2 font-display text-[19px] leading-snug font-medium text-ink">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.65] text-body">{group.challenge}</p>

                  <p className="mt-4 border-t border-line pt-4 text-[13.5px] leading-[1.6] text-muted">
                    {group.help}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
