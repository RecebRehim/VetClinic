import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VetCare · Bakı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0F766E 0%, #134e4a 50%, #0f172a 100%)",
          padding: 80,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#14B8A6",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          V
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          VetCare · Bakı
        </div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.85 }}>
          Premium veterinary care for every stage of life
        </div>
      </div>
    ),
    { ...size }
  );
}
