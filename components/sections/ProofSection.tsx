import { Check, FolderOpen } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillDial } from "@/components/ui/SkillDial";
import { ArtifactShowcase } from "@/components/ui/visuals/ArtifactShowcase";
import { proofArtifacts, proofEyebrow, proofIntro, proofTitle } from "@/data/outcomes";

/** Skill areas first, then the concrete artefacts they produce. */
export function ProofSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface" id="outcomes">
      <div
        aria-hidden="true"
        className="tech-grid-fine absolute inset-0 opacity-50 tech-mask"
      />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={proofEyebrow} title={proofTitle} intro={proofIntro} />

            <div className="mt-10 flex justify-center lg:justify-start">
              <SkillDial />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="depth-stack depth-2 rounded-lg border border-line bg-surface p-7 sm:p-9">
              <div className="flex items-center gap-3 border-b border-line pb-5">
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center rounded-sm border border-line bg-panel text-ink"
                >
                  <FolderOpen className="size-4" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    Your proof-of-work portfolio
                  </p>
                  <p className="text-[13px] text-muted">
                    {proofArtifacts.length} artefacts you build during the program
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {proofArtifacts.map((artifact, index) => (
                  <Reveal
                    as="li"
                    key={artifact}
                    delay={index * 45}
                    className="flex items-center gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-5 shrink-0 place-items-center rounded-full bg-neon/20 text-neon-text"
                    >
                      <Check className="size-3" strokeWidth={3.5} />
                    </span>
                    <span className="text-[14.5px] text-ink-2">{artifact}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
                  What the artefacts look like
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Illustrations
                </p>
              </div>
              <div className="mt-6">
                <ArtifactShowcase />
              </div>
              <p className="mt-5 max-w-2xl text-[13px] leading-6 text-muted">
                Drawn examples of the format, not student work. No student
                results are published by growthyari.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
