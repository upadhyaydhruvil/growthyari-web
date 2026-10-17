import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stories, storiesEyebrow, storiesIntro, storiesNote, storiesTitle } from "@/data/stories";

/**
 * Section G — "You may recognise one of these."
 *
 * Five illustrative situations, one per audience. Each is set as an
 * editorial row: the situation quoted at display size on the left, and the
 * same three-part resolution — difficulty, skill, evidence — on the right,
 * so the pattern is legible across all five without repeating the framing.
 *
 * Every row is explicitly labelled illustrative. The note is not buried:
 * these are composites written from patterns, and no real participant,
 * name or result is claimed.
 */
export function StoriesSection() {
  return (
    <section aria-labelledby="stories-heading" className="section-pad relative border-b border-line bg-surface-3">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={storiesEyebrow}
          title={<span id="stories-heading">{storiesTitle}</span>}
          intro={storiesIntro}
          className="max-w-3xl"
        />

        <ol className="mt-14 space-y-4">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <Reveal as="li" key={story.who} delay={index * 80}>
                <article className="grid gap-8 rounded-lg border border-line bg-card p-7 sm:p-9 lg:grid-cols-12 lg:gap-12">
                  {/* The situation */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-surface-3 text-primary"
                      >
                        <Icon className="size-5" strokeWidth={1.75} />
                      </span>
                      <span className="label-xs text-muted">Illustrative situation</span>
                    </div>

                    <p className="mt-5 font-display text-[20px] leading-[1.4] tracking-[-0.015em] text-ink sm:text-[22px]">
                      {story.situation}
                    </p>

                    <p className="mt-4 text-[14.5px] leading-[1.65] text-muted">{story.who}</p>
                  </div>

                  {/* The resolution, in three labelled steps */}
                  <dl className="grid gap-5 lg:col-span-7 lg:grid-cols-3 lg:gap-6">
                    <div>
                      <dt className="label-xs text-accent-hover">The difficulty</dt>
                      <dd className="mt-2.5 text-[14.5px] leading-[1.65] text-body">{story.difficulty}</dd>
                    </div>
                    <div>
                      <dt className="label-xs text-accent-hover">The skill</dt>
                      <dd className="mt-2.5 text-[14.5px] leading-[1.65] text-body">{story.skill}</dd>
                    </div>
                    <div>
                      <dt className="label-xs text-accent-hover">The evidence</dt>
                      <dd className="mt-2.5 text-[14.5px] leading-[1.65] text-body">{story.evidence}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={100}>
          <p className="mt-8 text-[13.5px] leading-[1.6] text-muted">{storiesNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
