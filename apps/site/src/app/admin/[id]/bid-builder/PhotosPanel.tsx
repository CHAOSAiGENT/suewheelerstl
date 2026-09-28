"use client";

interface Props {
  photoUrls: string[];
}

export function PhotosPanel({ photoUrls }: Props) {
  if (photoUrls.length === 0) return null;

  return (
    <div style={{ padding: "8px 10px", borderBottom: "1px solid #E5E0DB" }}>
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          color: "#6B5E55",
          textTransform: "uppercase",
          letterSpacing: "1px",
          marginBottom: 6,
        }}
      >
        Photos
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
          maxHeight: 120,
          overflowY: "auto",
        }}
      >
        {photoUrls.map((url, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={url}
            alt={`Photo ${i + 1}`}
            draggable={false}
            style={{
              width: "100%",
              aspectRatio: "1",
              objectFit: "cover",
              borderRadius: 2,
              border: "1px solid #E5E0DB",
              cursor: "default",
            }}
          />
        ))}
      </div>
    </div>
  );
}
