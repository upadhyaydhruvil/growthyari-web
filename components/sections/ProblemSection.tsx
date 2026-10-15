import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FrictionLoop } from "@/components/ui/visuals/FrictionLoop";
import { problemEyebrow, problemIntro, problemTitle, problems } from "@/data/problem";

/**
 * The problem section. The heading and the broken-loop diagram sit side by
 * side, then a full-width illustration of the same idea, then the four gaps
 * as a numbered band.
 *
 * The illustration is decorative-but-meaningful: its `alt` restates the point
 * for anyone who cannot see it.
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

          <div className="hidden lg:col-span-7 lg:block">
            <FrictionLoop />
          </div>
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-lg border border-line bg-canvas">
            <Image
              src="/images/why-most-people-struggle.png"
              alt="Illustration: graduates caught in a loop of applying, waiting and being rejected, with the feedback step missing."
              width={1672}
              height={941}
              className="h-auto w-full"
              sizes="(min-width: 78rem) 1200px, 100vw"
            />
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
