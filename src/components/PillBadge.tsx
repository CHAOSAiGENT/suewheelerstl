import { cn } from "@/lib/utils";

interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "wood" | "blue";
  className?: string;
}

export function PillBadge({ children, variant = "wood", className }: PillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-widest border",
        variant === "wood" && "border-[#A65D37] text-[#A65D37]",
        variant === "blue" && "border-[#11B2E8] text-[#11B2E8]",
        className
      )}
      style={{ borderRadius: "50px" }}
    >
      {children}
    </span>
  );
}
