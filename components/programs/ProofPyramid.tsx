import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proofPyramid } from "@/content/programs-content";
import { cn } from "@/lib/cn";

/**
 * Section 5.12 — a pyramid of the nine proof-of-work artefacts. Rendered as
 * stacked cards that get narrower toward the apex, so it reads as a pyramid
 * at any width and never overflows on phones.
 */
export function ProofPyramid() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow={proofPyramid.eyebrow}
          title={proofPyramid.title}
          intro={proofPyramid.lead}
        />

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center">
          {/* Apex */}
          <Reveal className="w-full">
            <div className="neon-edge w-full rounded-lg border border-neon/30 bg-neon/8 px-6 py-5 text-center">
              <p className="label-xs text-neon-text">At the top</p>
              <p className="mt-2 text-[15px] leading-6 font-medium text-ink">
                {proofPyramid.apex}
              </p>
            </div>
          </Reveal>

          <span aria-hidden="true" className="my-3 h-6 w-px bg-line-strong" />

          {proofPyramid.layers.map((layer, layerIndex) => (
            <div
              key={layer.name}
              className={cn(
                "w-full transition-all",
                layerIndex === 0 ? "max-w-[86%]" : "w-full",
              )}
            >
              <Reveal>
                <div
                  className={cn(
                    "rounded-lg border border-line bg-surface-2 px-5 py-5 sm:px-7",
                    layerIndex === 0 && "rounded-b-none border-b-0",
                  )}
                >
                  <p className="label-xs text-muted">{layer.name}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}