const credentials = [
  { label: "EPA Certified", sub: "Lead Renovator" },
  { label: "Sue Answers Every Call", sub: "Personally" },
  { label: "Historic Home Specialist", sub: "36 Years" },
  { label: "St. Louis Magazine", sub: '"Perfect Finish"' },
  { label: "Est. 1989", sub: "St. Louis" },
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
              <span className="text-xs font-sans font-semibold uppercase tracking-[0.1em] text-[#2A2421]">
                {c.label}
              </span>
              <span className="text-[11px] font-sans text-[#6B5E55]">
                {c.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
