import { CalendarClock, Radio, UserRound, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trustStrip } from "@/data/site";

const icons: LucideIcon[] = [Radio, CalendarClock, UsersRound, UserRound];

/** Thin credibility bar sitting directly under the hero. */
export function TrustStrip() {
  return (
    <section aria-label="What to expect" className="border-b border-line bg-surface">
      <div className="container-page">
        <ul className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {trustStrip.map((item, index) => {
            const Icon = icons[index];
            return (
              <li
                key={item}
                className="flex items-center gap-2.5 border-b border-line py-4 last:border-b-0 lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                {Icon ? (
                  <Icon className="size-4 shrink-0 text-neon-text" aria-hidden="true" />
                ) : null}
                <span className="text-[13.5px] font-medium text-ink-2">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
