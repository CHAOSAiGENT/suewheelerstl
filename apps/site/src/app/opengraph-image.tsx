import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wood Refinishing by Sue Wheeler — St. Louis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#EBE6DE",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "serif",
      }}
    >
      {/* Blue accent bar */}
      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#11B2E8",
          marginBottom: "32px",
        }}
      />
      <div
        style={{
          fontSize: "56px",
          fontWeight: 400,
          color: "#2A2421",
          lineHeight: 1.15,
          maxWidth: "900px",
          marginBottom: "24px",
        }}
      >
        Wood Refinishing by Sue Wheeler
      </div>
      <div
        style={{
          fontSize: "26px",
          color: "#A65D37",
          marginBottom: "40px",
          fontStyle: "italic",
        }}
      >
        Hand-stripped, never dipped. St. Louis since 1989.
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#6B5E55",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        EPA Certified · St. Louis Magazine · (314) 367-6054
      </div>
    </div>,
    { ...size },
  );
}
