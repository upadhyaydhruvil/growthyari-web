import { ImageResponse } from "next/og";
import { getProgram, programs } from "@/data/programs";

export const alt = "GrowthYari program";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

/**
 * Per-program share card, so a link to a specific track gets that track's card
 * rather than the generic site one. Every field comes from `data/programs.ts`;
 * nothing is invented here.
 */
export default async function ProgramOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#101a16",
            color: "#eef5f1",
            fontSize: 56,
            fontWeight: 700,
          }}
        >
          GrowthYari
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101a16",
          backgroundImage:
            "linear-gradient(to right, rgba(23,124,93,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,124,93,0.09) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#2fb188",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: "#eef5f1",
              letterSpacing: "-0.02em",
            }}
          >
            GrowthYari
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.16em",
              color: "#5fd3ac",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            {program.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.08,
              fontWeight: 700,
              color: "#eef5f1",
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            {program.name}
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, color: "#93aaa1", fontSize: 24 }}>
          {[program.price.amount, program.price.note, program.duration, program.format]
            .filter((item): item is string => Boolean(item))
            .map((item) => (
              <div key={item} style={{ display: "flex" }}>
                {item}
              </div>
            ))}
        </div>
      </div>
    ),
    { ...size },
  );
}