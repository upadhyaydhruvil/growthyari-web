import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

export function ProgramCard({
  program,
  className,
}: {
  program: Program;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-lg border border-line bg-surface p-7",
        "transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="label-xs text-lime-text">{program.eyebrow}</p>
        {program.badge ? <Badge tone="lime">{program.badge}</Badge> : null}
      </div>

      <h3 className="mt-4 text-[24px] leading-tight font-semibold tracking-[-0.03em] text-ink">
        {program.name}
      </h3>

      <p className="mt-3 text-[14.5px] leading-7 text-body">{program.summary}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-line py-3.5 text-[13px] text-body">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5 text-muted" aria-hidden="true" />
          {program.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users className="size-3.5 text-muted" aria-hidden="true" />
          {program.cohortSize}
        </span>
      </div>

      <p className="mt-5 text-[13px] font-medium tracking-[0.02em] text-muted">
        For
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {program.audience.slice(0, 3).map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-surface px-2.5 py-1 text-[12px] text-ink-2"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-end justify-between gap-4 border-t border-line pt-6">
        <div>
          <p className="font-display text-[28px] leading-none font-semibold tracking-[-0.035em] text-ink">
            {program.price.amount}
          </p>
          <p className="mt-1.5 text-[12.5px] text-muted">{program.price.note}</p>
        </div>

        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex items-center gap-1.5 rounded-sm text-[14px] font-medium text-neon-text transition-colors duration-200 hover:text-neon-text"
        >
          View program
          <ArrowRight
            className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
