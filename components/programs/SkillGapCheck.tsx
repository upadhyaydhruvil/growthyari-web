"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programEvents, selfCheck } from "@/content/programs-content";
import { track } from "@/lib/analytics";

/**
 * Section 5.11 — a five-question honesty self-check. Purely a talking point
 * for the Career Assessment Call; it is not a scored diagnostic.
 */
export function SkillGapCheck() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    selfCheck.questions.map(() => null),
  );

  const answered = answers.filter((a) => a !== null).length;
  const done = answered === selfCheck.questions.length;
  const yesCount = answers.filter((a) => a === true).length;

  const finish = () => {
    if (!done) return;
    track(programEvents.selfCheckComplete, {
      yes: yesCount,
      questions: selfCheck.questions.length,
    });
  };

  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={selfCheck.eyebrow}
            title={selfCheck.title}
            intro={selfCheck.lead}
            align="center"
          />

          <ol className="mt-10 space-y-4">
            {selfCheck.questions.map((question, index) => {
              const answer = answers[index];
              return (
                <li
                  key={question.ask}
                  className="rounded-lg border border-line bg-surface-2 p-5 sm:p-6"
                >
                  <p className="text-[15px] leading-7 font-medium text-ink">
                    <span className="mr-2 font-mono text-[13px] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {question.ask}
                  </p>

                  {answer === null ? (
                    <div className="mt-4 flex gap-2.5">
                      <button
                        type="button"
                        onClick={() =>
                          setAnswers((prev) =>
                            prev.map((v, i) => (i === index ? true : v)),
                          )
                        }
                        className="inline-flex h-10 items-center gap-1.5 rounded-sm border border-line-strong bg-surface px-4 text-[13.5px] font-medium text-ink transition-colors hover:border-neon hover:text-neon-text"
                        aria-label={`Answer yes: ${question.ask}`}
                      >
                        <Check className="size-3.5" aria-hidden="true" />
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setAnswers((prev) =>
                            prev.map((v, i) => (i === index ? false : v)),
                          )
                        }
                        className="inline-flex h-10 items-center gap-1.5 rounded-sm border border-line-strong bg-surface px-4 text-[13.5px] font-medium text-ink transition-colors hover:border-amber hover:text-amber-text"
                        aria-label={`Answer no: ${question.ask}`}
                      >
                        <X className="size-3.5" aria-hidden="true" />
                        No
                      </button>
                    </div>
                  ) : (
                    <p
                      className={`mt-4 text-[13.5px] leading-6 ${
                        answer ? "text-neon-text" : "text-amber-text"
                      }`}
                    >
                      {answer ? question.yes : question.no}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-8 rounded-lg border border-line bg-surface-2 px-6 py-6 text-center">
            <p className="text-[13px] text-muted">
              Answered {answered} of {selfCheck.questions.length}
            </p>
            {done ? (
              <div className="mt-4">
                <p className="mx-auto max-w-md text-[15px] leading-7 text-ink-2">
                  You answered “yes” {yesCount} of {selfCheck.questions.length}. Bring
                  this sheet to the assessment call — it tells the coach more than a
                  resume does.
                </p>
                <ButtonLink
                  href="/contact"
                  size="lg"
                  variant="solid"
                  className="mt-5"
                  onClick={finish}
                >
                  Book the free Career Assessment Call
                </ButtonLink>
              </div>
            ) : null}
            <p className="mt-5 text-[12.5px] leading-5 text-muted">
              {selfCheck.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}