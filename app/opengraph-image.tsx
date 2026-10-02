import { ImageResponse } from "next/og";

export const alt = "GrowthYari — professional growth accelerator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Static OG card. Uses flexbox only — `next/og` does not support grid.
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
          backgroundColor: "#101a16",
          backgroundImage:
            "linear-gradient(to right, rgba(120,220,190,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,220,190,0.06) 1px, transparent 1px)",
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
            Professional Growth Accelerator
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
            Build the skills that create better careers and stronger businesses.
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, color: "#93aaa1", fontSize: 24 }}>
          {["Live online sessions", "Up to 8 weeks", "Max 5 learners"].map((item) => (
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
