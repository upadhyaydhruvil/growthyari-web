"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

/**
 * Single-open accordion.
 *
 * Built on <button aria-expanded> + a linked <div role="region"> so it
 * is fully keyboard and screen-reader operable with no extra ARIA
 * wiring. The open/close animation uses the grid-rows 0fr → 1fr trick,
 * which animates to the content's natural height without measuring.
 */
export function Accordion({
  items,
  className,
  defaultOpenIndex = 0,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-5 text-left",
                  "transition-colors duration-200 hover:text-neon-text sm:py-6",
                )}
              >
                <span className="text-[17px] font-medium tracking-[-0.015em] text-ink transition-colors group-hover:text-neon-text sm:text-[19px]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-neon bg-neon-dim text-ink"
                      : "border-line-strong text-ink-2 group-hover:border-neon group-hover:text-neon-text",
                  )}
                >
                  <Plus className="size-3.5" strokeWidth={2.25} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pr-10 pb-6 text-[15px] leading-7 text-body">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
