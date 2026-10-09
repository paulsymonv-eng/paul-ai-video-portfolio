import { ImageResponse } from "next/og";

export const alt = "Paul Symon Vergara | AI Video Editor & AI Creative Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07070b",
          color: "#f4f4f5",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#c4b5fd",
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          PAUL SYMON VERGARA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 600,
          }}
        >
          <span>AI Video Editor &</span>
          <span>AI Creative Specialist</span>
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 820,
            fontSize: 26,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          Realistic AI videos, ecommerce ads, UGC creatives, and short-form content.
        </div>
      </div>
    ),
    { ...size },
  );
}
