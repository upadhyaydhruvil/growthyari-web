import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whoShouldJoin, whoShouldNot } from "@/data/pilot";

/**
 * Who should join — and, just as importantly, who should not. The "not a fit"
 * column is deliberate: it filters applications before they are written.
 */
export function WhoShouldJoinSection() {
  return (
    <section className="section-pad bg-surface" id="who">
      <div className="container-page">
        <SectionHeading
          eyebrow="Who it's for"
          title="A good fit — and an honest no."
          intro="This batch works for people who show up ready to practise. It is not for everyone, and pretending otherwise would waste your time."
        />

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-lg border border-neon/25 bg-neon/5 p-7 sm:p-8">
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
              Join if you are
            </h3>
            <ul className="mt-6 space-y-3.5">
              {whoShouldJoin.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neon/20 text-neon-text"
                  >
                    <Check className="size-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[14.5px] leading-7 text-body">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-lg border border-line bg-surface p-7 sm:p-8">
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-ink">
              This is not for you if
            </h3>
            <ul className="mt-6 space-y-3.5">
              {whoShouldNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-line text-muted"
                  >
                    <X className="size-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[14.5px] leading-7 text-body">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
