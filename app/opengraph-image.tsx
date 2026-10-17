import { ImageResponse } from "next/og";

export const alt = "GrowthYari — turn what you know into what you can show";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Static OG card, in the warm editorial identity: ivory ground, a forest
 * rule, the terracotta mark and a serif headline. Uses flexbox only —
 * `next/og` does not support grid. Fonts render with the system serif
 * because a webfont is not bundled for the card.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f4ed",
          backgroundImage:
            "linear-gradient(to right, rgba(23,61,50,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,61,50,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          padding: 76,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              backgroundColor: "#173d32",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 6,
                backgroundColor: "#c96f4a",
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em" }}>
            <div style={{ display: "flex", color: "#20231f" }}>Growth</div>
            <div style={{ display: "flex", color: "#c96f4a" }}>Yari</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.18em",
              color: "#a8552f",
              textTransform: "uppercase",
              marginBottom: 26,
            }}
          >
            12-Week Sales & Communication Pilot Batch
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 500,
              color: "#173d32",
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            You&apos;re capable of more than your CV can show.
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, color: "#5c6459", fontSize: 24 }}>
          {["Live, practical training", "Built around evidence", "For students & freshers"].map(
            (item) => (
              <div key={item} style={{ display: "flex" }}>
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
