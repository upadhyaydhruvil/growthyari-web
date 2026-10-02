import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

import {
  audiences,
  audiencesEyebrow,
  audiencesIntro,
  audiencesTitle,
} from "@/data/audiences";

export function AudiencesSection() {
  return (
    <section className="section-pad bg-surface" id="who-its-for">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={audiencesEyebrow}
            title={audiencesTitle}
            className="lg:col-span-7"
          />
          <p className="max-w-md text-[15px] leading-7 text-body lg:col-span-5">
            {audiencesIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <Reveal
              key={audience.label}
              delay={index * 60}
              className="group relative border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong hover:bg-surface-2 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-sm border border-line bg-surface text-neon-text transition-colors duration-300 group-hover:border-neon/25 group-hover:bg-neon/10 group-hover:text-lime-text"
                >
                  <audience.icon className="size-5" strokeWidth={1.9} />
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 font-mono text-[11px] font-medium tracking-[0.16em] text-lime-text uppercase">
                {audience.label}
              </p>
              <h3 className="mt-2.5 text-[20px] leading-snug font-semibold tracking-[-0.025em] text-ink">
                {audience.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-7 text-body">
                {audience.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
