import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recognitionClose, recognitionEyebrow, recognitionMoments } from "@/data/recognition";

/**
 * Section C — "The thought people rarely say aloud."
 *
 * Recognition comes before any mention of GrowthYari, so the visitor meets
 * their own situation first. Each moment is set as a large serif line with
 * the explanation kept quiet underneath — the emotional weight sits in the
 * sentence, not in the styling.
 *
 * On a sand band, because it should feel like a page turned to rather than
 * a section announced.
 */
export function RecognitionSection() {
  return (
    <section
      aria-labelledby="recognition-heading"
      className="section-pad relative border-b border-line bg-surface-3"
    >
      <div aria-hidden="true" className="tech-grid absolute inset-0 opacity-40" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={recognitionEyebrow}
          title={
            <span id="recognition-heading">
              Sometimes the hardest part isn&apos;t learning.{" "}
              <span className="italic text-forest">It&apos;s showing what you&apos;ve learned.</span>
            </span>
          }
          className="max-w-3xl"
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:mt-20 lg:grid-cols-3">
          {recognitionMoments.map((moment, index) => (
            <Reveal as="li" key={moment.line} delay={index * 110} className="bg-card">
              <article className="flex h-full flex-col p-7 sm:p-9">
                <span className="label-xs text-accent-hover">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-6 font-display text-[21px] leading-[1.35] tracking-[-0.015em] text-ink sm:text-[23px]">
                  {moment.line}
                </p>

                <p className="mt-5 text-[15px] leading-[1.75] text-body">{moment.body}</p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-12 flex max-w-3xl items-start gap-4 border-l-2 border-accent pl-6 font-display text-[19px] leading-[1.6] text-ink-2 sm:text-[21px]">
            {recognitionClose}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
