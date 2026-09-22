import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon. Generated in code for the same reason `opengraph-image.tsx` is —
 * there is no design asset for this business, and a monogram we render is
 * better than the browser's default globe.
 *
 * Constrained by the 32x32 render: two letterforms, cream on ink for contrast
 * against both light and dark browser chrome, and a copper rule that echoes the
 * accent bar on the OpenGraph card. Nothing smaller than 2px survives here.
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#2A2421",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          fontSize: "19px",
          fontWeight: 400,
          color: "#EBE6DE",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          marginTop: "-2px",
        }}
      >
        SW
      </div>
      {/* Copper rule — the OG card's accent bar, scaled to the tab */}
      <div
        style={{
          position: "absolute",
          bottom: "3px",
          width: "14px",
          height: "2px",
          background: "#A65D37",
        }}
      />
    </div>,
    { ...size },
  );
}
