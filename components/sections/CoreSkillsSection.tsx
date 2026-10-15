import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Ear,
  Gauge,
  MessageCircleQuestion,
  Mic,
  Network,
  PenLine,
  Presentation,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreSkills } from "@/data/pilot";

/**
 * One icon per skill, in the same order as `coreSkills`. Kept as a parallel
 * array (not a property of the data) because the icons are a presentation
 * choice, not part of the program's content.
 */
const ICONS: LucideIcon[] = [
  Mic, // Clear speech
  Network, // Structured thinking
  Ear, // Active listening
  MessageCircleQuestion, // Asking good questions
  Gauge, // Confident delivery
  Presentation, // Presentation skills
  ShieldCheck, // Handling objections
  Sparkles, // Persuasion
  PenLine, // Professional writing
  Briefcase, // Interview communication
];

/**
 * The ten core skills the batch develops. Each is a card that lifts and lights
 * on hover, with a gradient hairline that draws in from the left. Cards arrive
 * on a scroll stagger so the grid assembles rather than appearing at once.
 */
export function CoreSkillsSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface" id="skills">
      <div
        aria-hidden="true"
        className="tech-grid-fine tech-mask absolute inset-0 opacity-40"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Core skills"
          title="Ten skills you actually practise."
          intro="Each one is taught, then used in a real scenario, then reviewed. None of them are learned by watching."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill, index) => {
            const Icon = ICONS[index] ?? Mic;
            return (
              <Reveal
                as="li"
                key={skill.title}
                delay={(index % 3) * 80}
                className="group relative h-full"
              >
                <div className="neon-card neon-card-hover relative flex h-full flex-col overflow-hidden p-6">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-neon via-lime to-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />

                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-11 place-items-center rounded-lg border border-line bg-surface-2 text-neon-text transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:border-neon/40 group-hover:shadow-neon"
                    >
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-mono text-[12px] font-medium tracking-[0.16em] text-lime-text transition-colors duration-300 group-hover:text-neon-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-body">
                    {skill.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
