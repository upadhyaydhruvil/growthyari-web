import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FrictionLoop } from "@/components/ui/visuals/FrictionLoop";
import { problemEyebrow, problemIntro, problemTitle, problems } from "@/data/problem";

/**
 * Not a card grid. A numbered editorial list reads faster than four identical
 * boxes and breaks up the page rhythm, so the visual weight goes into a single
 * diagram of the loop the student is stuck in instead.
 */
export function ProblemSection() {
  return (
    <section className="section-pad bg-surface" id="problem">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={problemEyebrow}
              title={problemTitle}
              intro={problemIntro}
            />

            <div className="mt-12 lg:hidden">
              <FrictionLoop />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="hidden lg:block">
              <FrictionLoop />
            </div>

            <ol className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-0">
              {problems.map((problem, index) => (
                <Reveal
                  as="li"
                  key={problem.title}
                  delay={index * 70}
                  className="border-t border-line py-7"
                >
                  <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-7 text-body">
                    {problem.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
