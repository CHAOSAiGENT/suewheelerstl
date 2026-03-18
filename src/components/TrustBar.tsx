const credentials = [
  { label: "36 Years in Business", sub: "Since 1989" },
  { label: "EPA Certified", sub: "Lead Renovator" },
  { label: "BBB A+", sub: "Accredited" },
  { label: "St. Louis Magazine", sub: '"Perfect Finish"' },
  { label: "The Sheldon", sub: "Concert Hall" },
];

export function TrustBar() {
  return (
    <div
      className="border-b border-t"
      style={{
        backgroundColor: "#F8F6F1",
        borderColor: "rgba(42,36,33,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0">
          {credentials.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-3"
            >
              <span
                className="text-xs font-sans font-semibold uppercase tracking-[0.1em] text-[#2A2421]"
              >
                {c.label}
              </span>
              <span className="text-[11px] font-sans text-[#6B5E55]">{c.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
