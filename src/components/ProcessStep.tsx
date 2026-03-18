interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function ProcessStep({ number, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-sans font-semibold shrink-0"
          style={{ backgroundColor: "#11B2E8" }}
        >
          {number}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ backgroundColor: "rgba(17,178,232,0.25)" }}
          />
        )}
      </div>
      <div className="pb-8">
        <h3
          className="font-serif italic text-xl text-[#2A2421] mb-2"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          {title}
        </h3>
        <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
