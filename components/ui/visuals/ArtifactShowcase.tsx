import {
  FileText,
  LayoutGrid,
  Mic,
  PhoneCall,
  Table2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WAVEFORM = [
  18, 42, 30, 58, 24, 66, 38, 74, 46, 30, 62, 84, 52, 34, 68, 44, 26, 56, 38,
  72, 48, 30, 60, 40, 22,
];

const TRACK_ROWS = [
  { label: "Cold call script", state: "Done", tone: "ok" },
  { label: "Follow-up email", state: "Sent", tone: "ok" },
  { label: "Referral ask", state: "Draft", tone: "warn" },
  { label: "Interview prep", state: "Next", tone: "idle" },
] as const;

const LINE_WIDTHS = [88, 74, 92, 62, 80, 55];

function Frame({
  icon: Icon,
  label,
  children,
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <figure
      className="depth-float flex flex-col overflow-hidden rounded-lg border border-line bg-surface"
      style={{ animationDelay: `${delay}ms` }}
    >
      <figcaption className="flex items-center gap-2.5 border-b border-line px-4 py-3">
        <span className="grid size-6 place-items-center rounded-sm border border-line bg-surface-2">
          <Icon className="size-3.5 text-ink-2" strokeWidth={2} />
        </span>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
          {label}
        </span>
      </figcaption>
      <div className="flex-1 p-4">{children}</div>
    </figure>
  );
}

function Recording() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-neon">
          <Mic className="size-4 text-white" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold tracking-[-0.01em] text-ink">
            Cold call — role-play recording
          </p>
          <p className="font-mono text-[11px] text-muted">02:14 / 04:38</p>
        </div>
      </div>

      <div className="mt-4 flex h-14 items-center gap-[3px]" aria-hidden="true">
        {WAVEFORM.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-full bg-neon/30"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="mt-4 space-y-1.5 border-t border-line pt-3.5">
        <p className="text-[12px] leading-5 text-muted">
          <span className="font-mono text-[10px] tracking-[0.12em] text-neon-text">
            00:42
          </span>{" "}
          The hook landed, but the objection was answered defensively — replay
          after the next session.
        </p>
        <p className="text-[12px] leading-5 text-muted">
          <span className="font-mono text-[10px] tracking-[0.12em] text-neon-text">
            03:07
          </span>{" "}
          <span className="rounded-sm bg-amber/25 px-1 font-medium text-amber-text">
            Marked as the moment to rewrite
          </span>
          .
        </p>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold tracking-[-0.01em] text-ink">
          Placement-ready CV
        </p>
        <span className="rounded-sm border border-neon/25 bg-neon/10 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-neon-text">
          Rewritten
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-2.5 w-16 rounded-full bg-ink/70" />
        <div className="h-1.5 w-20 rounded-full bg-ink/25" />
        {LINE_WIDTHS.map((w, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${i === 2 || i === 3 ? "bg-neon/45" : "bg-ink/15"}`}
            style={{ width: `${w}%` }}
          />
        ))}
      </div>

      <div className="mt-4 rounded-sm border border-amber/30 bg-amber/10 p-2.5">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-amber-text">
          Before / after
        </p>
        <p className="mt-1 text-[12px] leading-5 text-body">
          &ldquo;Responsible for communication&rdquo; became a line with a number
          and a result attached.
        </p>
      </div>
    </div>
  );
}

function Tracker() {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Table2 className="size-4 text-neon-text" strokeWidth={1.9} />
        <p className="text-[13px] font-semibold tracking-[-0.01em] text-ink">
          Outreach tracker
        </p>
      </div>

      <div className="mt-3.5 divide-y divide-line border-y border-line">
        {TRACK_ROWS.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2">
            <span className="text-[12px] text-body">{row.label}</span>
            <span
              className={`rounded-sm border px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] ${
                row.tone === "ok"
                  ? "border-neon/25 bg-neon/10 text-neon-text"
                  : row.tone === "warn"
                    ? "border-amber/30 bg-amber/10 text-amber-text"
                    : "border-line-strong bg-surface-2 text-muted"
              }`}
            >
              {row.state}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[12px] leading-5 text-muted">
        Every rejection logged with the reason, so the next fix is chosen from
        evidence instead of guesswork.
      </p>
    </div>
  );
}

function CaseStudy() {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <LayoutGrid className="size-4 text-neon-text" strokeWidth={1.9} />
        <p className="text-[13px] font-semibold tracking-[-0.01em] text-ink">
          Project case study
        </p>
      </div>

      <div className="mt-3.5 grid gap-1.5">
        <div className="grid grid-cols-3 gap-1.5">
          {["Brief", "Build", "Ship"].map((s, i) => (
            <div
              key={s}
              className={`rounded-sm border px-2 py-2 text-center font-mono text-[10px] font-medium uppercase tracking-[0.1em] ${
                i === 2
                  ? "border-neon/30 bg-neon/12 text-neon-text"
                  : "border-line bg-surface-2 text-muted"
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="h-1.5 rounded-full bg-ink/15" />
        <div className="h-1.5 w-4/5 rounded-full bg-ink/12" />
      </div>

      <div className="mt-3.5 flex items-center gap-2.5 rounded-sm border border-line-strong bg-surface-2 px-2.5 py-2">
        <PhoneCall className="size-3.5 shrink-0 text-ink-2" strokeWidth={2} />
        <p className="text-[12px] leading-5 text-body">
          A link a recruiter can open, not a screenshot of a grade.
        </p>
      </div>
    </div>
  );
}

/**
 * Illustrations of the kinds of artefacts the program asks a student to
 * produce. Deliberately generic: none of this is real student work and the
 * captions say so, because growthyari.com publishes no student results.
 */
export function ArtifactShowcase() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Frame icon={Mic} label="Recorded practice" delay={0}>
        <Recording />
      </Frame>
      <Frame icon={FileText} label="Rewritten CV" delay={90}>
        <Resume />
      </Frame>
      <Frame icon={Table2} label="Outreach log" delay={180}>
        <Tracker />
      </Frame>
      <Frame icon={LayoutGrid} label="Case study" delay={270}>
        <CaseStudy />
      </Frame>
    </div>
  );
}