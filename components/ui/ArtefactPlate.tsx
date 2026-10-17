import { cn } from "@/lib/cn";

/**
 * An illustrative preview of a proof-of-work artefact.
 *
 * IMPORTANT, and the reason this is drawn rather than photographed:
 * GrowthYari publishes no real learner recordings, decks, resumes or
 * screenshots, and there is no licensed editorial photography in this
 * project. Rather than imply that a stock photograph shows a real student,
 * or fabricate a document that looks like someone's actual work, every
 * artefact preview here is an original abstract composition — a waveform,
 * a ruled page, a slide outline. It shows the *shape* of the thing without
 * pretending to be an instance of it.
 *
 * Every plate is labelled "Illustrative" in the UI, and the sections that
 * use them repeat that in prose so the distinction survives without CSS.
 */

export type PlateKind = "audio" | "document" | "presentation" | "data" | "writing" | "reflection";

const kindLabel: Record<PlateKind, string> = {
  audio: "Practice recording",
  document: "Document",
  presentation: "Presentation",
  data: "CRM record",
  writing: "Email",
  reflection: "Journal",
};

/** Abstract preview body, one per kind. Purely decorative. */
function PlateBody({ kind }: { kind: PlateKind }) {
  switch (kind) {
    case "audio":
      return (
        <div className="flex h-full flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-fg"
            >
              <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
            </span>
            {/* Waveform: a fixed abstract shape, never a real signal. */}
            <div aria-hidden="true" className="flex h-10 flex-1 items-end gap-[3px]">
              {[38, 62, 45, 88, 71, 54, 96, 66, 42, 78, 58, 34, 68, 84, 47, 60, 39, 72, 51, 64, 44, 80, 56, 41].map(
                (height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}%` }}
                    className={cn(
                      "flex-1 rounded-full",
                      index < 9 ? "bg-accent" : "bg-line-strong",
                    )}
                  />
                ),
              )}
            </div>
            <span className="label-xs shrink-0 text-muted">03:12</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-line">
            <span className="block h-full w-[38%] rounded-full bg-accent" />
          </div>
        </div>
      );

    case "document":
      return (
        <div className="flex h-full flex-col gap-3">
          <span aria-hidden="true" className="block h-2.5 w-2/5 rounded-sm bg-ink/70" />
          <span aria-hidden="true" className="block h-1.5 w-1/4 rounded-sm bg-accent/70" />
          <div aria-hidden="true" className="mt-2 flex flex-col gap-2">
            {[92, 86, 95, 70, 88, 60].map((width, index) => (
              <span key={index} style={{ width: `${width}%` }} className="block h-1.5 rounded-sm bg-line-strong" />
            ))}
          </div>
        </div>
      );

    case "presentation":
      return (
        <div className="flex h-full flex-col gap-3">
          <span aria-hidden="true" className="block h-2.5 w-3/5 rounded-sm bg-ink/70" />
          <div aria-hidden="true" className="mt-1 flex flex-1 items-end gap-2.5">
            {[54, 78, 42, 90, 63].map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
                className={cn("flex-1 rounded-t-sm", index === 3 ? "bg-accent" : "bg-primary/25")}
              />
            ))}
          </div>
        </div>
      );

    case "data":
      return (
        <div aria-hidden="true" className="flex h-full flex-col gap-2">
          <span className="mb-1 block h-1.5 w-1/3 rounded-sm bg-accent/70" />
          {[62, 48, 80, 55].map((width, index) => (
            <span key={index} className="flex items-center gap-2">
              <span style={{ width: `${width}%` }} className="block h-1.5 rounded-sm bg-line-strong" />
              <span className="ml-auto block h-4 w-10 rounded-sm bg-primary/15" />
            </span>
          ))}
        </div>
      );

    case "writing":
      return (
        <div className="flex h-full flex-col gap-2.5">
          <span aria-hidden="true" className="block h-1.5 w-1/3 rounded-sm bg-ink/50" />
          <div aria-hidden="true" className="flex flex-col gap-2">
            {[96, 90, 74].map((width, index) => (
              <span key={index} style={{ width: `${width}%` }} className="block h-1.5 rounded-sm bg-line-strong" />
            ))}
          </div>
          {/* A highlighted phrase — the part someone would actually rewrite. */}
          <span aria-hidden="true" className="mt-1 block h-3 w-1/2 rounded-sm bg-accent/30" />
          <div aria-hidden="true" className="flex flex-col gap-2">
            {[88, 64].map((width, index) => (
              <span key={index} style={{ width: `${width}%` }} className="block h-1.5 rounded-sm bg-line-strong" />
            ))}
          </div>
        </div>
      );

    case "reflection":
      return (
        <div aria-hidden="true" className="flex h-full flex-col gap-2.5">
          {[true, true, false].map((done, index) => (
            <span key={index} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "grid size-3.5 shrink-0 place-items-center rounded-[3px] border",
                  done ? "border-accent bg-accent" : "border-line-strong",
                )}
              >
                {done ? <span className="block h-1 w-2 rotate-[-45deg] border-b-[1.5px] border-l-[1.5px] border-current border-transparent" /> : null}
              </span>
              <span
                style={{ width: `${[82, 68, 74][index]}%` }}
                className="block h-1.5 rounded-sm bg-line-strong"
              />
            </span>
          ))}
        </div>
      );
  }
}

/**
 * A single illustrative artefact plate.
 *
 * `compact` drops the body copy and keeps only the preview + label, for
 * grids where the surrounding section already explains the artefact.
 */
export function ArtefactPlate({
  kind,
  name,
  compact = false,
  bare = false,
  className,
}: {
  kind: PlateKind;
  name?: string;
  compact?: boolean;
  /** Drop the card chrome, for use inside a card that already has it. */
  bare?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative flex flex-col overflow-hidden rounded-lg border border-line bg-card p-4",
        bare && "rounded-none border-0 bg-transparent p-0",
        className,
      )}
    >
      <figcaption className="flex items-center justify-between gap-3">
        {name ? <span className="label-xs text-ink">{name}</span> : null}
        <span className="label-xs shrink-0 text-muted">{kindLabel[kind]}</span>
      </figcaption>

      <div className={cn("mt-3 flex-1", compact ? "min-h-[76px]" : "min-h-[104px]")}>
        <PlateBody kind={kind} />
      </div>

      {/*
        * The label is inside the plate, not only in the section prose, so a
        * preview can never be mistaken for a real learner's work even if it
        * is screenshotted out of context.
        */}
      <span
        aria-hidden="true"
        className="label-xs mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-surface-3 px-2 py-1 text-muted"
      >
        <span className="size-1 rounded-full bg-accent" />
        Illustrative
      </span>
    </figure>
  );
}
