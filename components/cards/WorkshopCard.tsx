import { ArrowRight, Check, Clock, Radio, UserRound } from "lucide-react";
import { statusOf, type Workshop } from "@/data/workshops";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function formatDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return { day: "--", month: "" };
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date.toLocaleDateString("en-IN", { month: "short" }),
  };
}

/**
 * Workshop card.
 *
 * Every field is optional in the data model — a workshop with no mentor,
 * no price and no seat cap still renders. Replace the demo records in
 * `data/workshops.ts` and this needs no changes.
 */
export function WorkshopCard({
  workshop,
  className,
}: {
  workshop: Workshop;
  className?: string;
}) {
  const { day, month } = formatDate(workshop.date);
  const past = statusOf(workshop) === "past";
  const seatsLeft =
    workshop.seats !== null && workshop.seatsTaken !== null
      ? Math.max(workshop.seats - workshop.seatsTaken, 0)
      : null;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-surface transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift",
        past ? "border-line opacity-75" : "border-line",
        className,
      )}
    >
      <div className="flex items-stretch gap-0">
        <div
          aria-hidden="true"
          className={cn(
            "flex w-[74px] shrink-0 flex-col items-center justify-center border-r py-5",
            past ? "border-line bg-surface" : "border-neon/25 bg-neon/10",
          )}
        >
          <span
            className={cn(
              "font-display text-[26px] leading-none font-semibold tracking-[-0.04em]",
              past ? "text-muted" : "text-ink",
            )}
          >
            {day}
          </span>
          <span
            className={cn(
              "mt-1 font-mono text-[10px] tracking-[0.16em] uppercase",
              past ? "text-muted" : "text-neon-text",
            )}
          >
            {month}
          </span>
        </div>

        <div className="min-w-0 flex-1 p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-body">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-muted" aria-hidden="true" />
              <time dateTime={workshop.date}>{workshop.time}</time>
              <span aria-hidden="true">·</span>
              {workshop.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Radio className="size-3.5 text-muted" aria-hidden="true" />
              {workshop.format}
            </span>
          </div>

          <h3 className="mt-3 text-[19px] leading-snug font-semibold tracking-[-0.025em] text-ink">
            {workshop.title}
          </h3>

          <p className="mt-2.5 text-[14.5px] leading-7 text-body">
            {workshop.description}
          </p>

          {workshop.mentor ? (
            <p className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-ink-2">
              <UserRound className="size-3.5 text-muted" aria-hidden="true" />
              {workshop.mentor}
            </p>
          ) : null}

          <p className="mt-4 border-t border-line pt-4 text-[13px] text-body">
            <span className="font-medium text-ink">Who should attend: </span>
            {workshop.audience}
          </p>

          <ul className="mt-3 space-y-1.5">
            {workshop.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-[13.5px] text-ink-2">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_8px_rgba(23,124,93,0.45)]"
                />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line bg-surface px-6 py-4">
        <div className="flex items-center gap-3">
          {workshop.price ? (
            <span className="text-[15px] font-semibold text-ink">
              {workshop.price}
            </span>
          ) : (
            /*
              * Not "Price to be announced" — that sat next to a Register
              * button and read like a dead end. State when the number lands.
              */
            <span className="text-[13px] text-muted">
              Price published with the date
            </span>
          )}
          {seatsLeft !== null ? (
            <span className="text-[13px] text-muted">
              {seatsLeft} seat{seatsLeft === 1 ? "" : "s"} left
            </span>
          ) : null}
        </div>

        {workshop.seats !== null && workshop.seatsTaken !== null ? (
          <div className="w-full sm:w-40">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
                Seats
              </span>
              <span className="font-mono text-[11px] font-medium text-ink-2">
                {workshop.seatsTaken}/{workshop.seats}
              </span>
            </div>
            <div
              role="meter"
              aria-valuenow={workshop.seatsTaken}
              aria-valuemin={0}
              aria-valuemax={workshop.seats ?? 0}
              aria-label={`Seats filled for ${workshop.title}`}
              className="mt-1.5 h-1.5 overflow-hidden rounded-full border border-line bg-surface-2"
            >
              <div
                className={cn(
                  "h-full rounded-full",
                  past ? "bg-muted" : "bg-neon",
                )}
                style={{
                  width: `${Math.min((workshop.seatsTaken / (workshop.seats || 1)) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        ) : null}

        {past ? (
          <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted">
            <Check className="size-3.5" aria-hidden="true" />
            Completed
          </span>
        ) : (
          <ButtonLink
            href={`/apply?workshop=${workshop.id}`}
            size="sm"
            variant="outline"
          >
            Register
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </ButtonLink>
        )}
      </div>
    </article>
  );
}
