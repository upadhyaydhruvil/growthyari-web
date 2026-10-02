import { Quote } from "lucide-react";
import {
  personas,
  personasEyebrow,
  personasIntro,
  personasNote,
  personasTitle,
  type StudentPersona,
} from "@/data/personas";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonaGlyph } from "@/components/ui/visuals/PersonaGlyph";
import { cn } from "@/lib/cn";

/**
 * A "thinker" card. The visual weight sits on the thought itself rather than
 * on a portrait, because no real student photography or consent exists yet.
 * The glyph above it is an abstract composition derived from the persona's
 * position in the set, not a picture of a person.
 */
function PersonaCard({ persona, index }: { persona: StudentPersona; index: number }) {
  const Icon = persona.icon;

  return (
    <Reveal
      as="article"
      delay={index * 70}
      className={cn(
        "neon-card neon-card-hover group relative flex flex-col overflow-hidden",
        "p-6 sm:p-7",
      )}
    >
      {/* Corner ticks — reads as a viewport frame rather than a photo. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 size-6 border-t border-l border-neon/45 transition-colors duration-300 group-hover:border-neon"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 size-6 border-t border-r border-neon/45 transition-colors duration-300 group-hover:border-neon"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 size-6 border-b border-l border-neon/45 transition-colors duration-300 group-hover:border-neon"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-6 border-b border-r border-neon/45 transition-colors duration-300 group-hover:border-neon"
      />

      <div className="relative flex aspect-[5/4] w-full items-end border-b border-line bg-surface">
        <PersonaGlyph icon={Icon} seed={index} className="absolute inset-0" />
        <span className="label-xs relative m-3 rounded-sm border border-line-strong bg-surface px-2 py-1 text-neon-text">
          {persona.stage}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="label-xs text-muted">{persona.module} track</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-sm border border-neon/30 bg-neon/8 text-neon-text transition-colors duration-300 group-hover:border-neon/60 group-hover:bg-neon/15">
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </div>

      <h3 className="mt-4 text-[18px] leading-snug font-semibold tracking-[-0.02em] text-ink">
        {persona.title}
      </h3>

      <blockquote className="relative mt-5 flex-1 border-l-2 border-neon/40 pl-4">
        <Quote
          className="absolute -top-1 -left-[9px] size-4 fill-neon/25 text-neon/25"
          aria-hidden="true"
        />
        <p className="text-[15px] leading-7 text-body italic">“{persona.thought}”</p>
      </blockquote>

      <div className="mt-6 border-t border-line pt-4">
        <p className="label-xs text-muted">What moves it</p>
        <p className="mt-2 text-[14.5px] leading-6 text-ink-2">{persona.focus}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] text-neon-text uppercase">
          <span className="inline-block size-1.5 rounded-full bg-neon animate-pulse-dot" />
          {persona.module}
        </p>
      </div>
    </Reveal>
  );
}

export function PersonasSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-canvas" id="personas">
      {/* Background texture: fine grid + two slow drifting blooms. */}
      <div aria-hidden="true" className="tech-grid-fine tech-mask absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift top-[-8rem] left-[-6rem] size-[26rem] bg-neon/8"
      />
      <div
        aria-hidden="true"
        className="glow-orb animate-drift-slow right-[-7rem] bottom-[-9rem] size-[24rem] bg-lime/6"
      />

      <div className="container-page relative">
        <SectionHeading eyebrow={personasEyebrow} title={personasTitle} intro={personasIntro} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {personas.map((persona, index) => (
            <PersonaCard key={persona.title} persona={persona} index={index} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[13px] leading-6 text-muted">{personasNote}</p>
      </div>
    </section>
  );
}
