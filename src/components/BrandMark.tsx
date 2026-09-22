type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showCrown?: boolean;
  className?: string;
};

const sizes = {
  sm: { box: "h-9 w-9 text-[0.55rem]", crown: "h-2.5 w-3.5" },
  md: { box: "h-12 w-12 text-[0.7rem]", crown: "h-3 w-4" },
  lg: { box: "h-16 w-16 text-[0.95rem]", crown: "h-4 w-5" },
};

export function BrandMark({
  size = "md",
  showCrown = true,
  className = "",
}: BrandMarkProps) {
  const s = sizes[size];

  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
      aria-label="FRGN"
    >
      {showCrown && (
        <svg
          viewBox="0 0 24 16"
          className={`${s.crown} -mb-0.5 text-brand-gold`}
          aria-hidden="true"
        >
          <path
            d="M2 14 L4 4 L8 10 L12 2 L16 10 L20 4 L22 14 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <div
        className={`font-display ${s.box} flex flex-col items-center justify-center border border-brand-cream/20 bg-brand-surface font-black leading-none tracking-tight text-brand-cream`}
      >
        <span>FR</span>
        <span>GN</span>
      </div>
      <span
        className="mt-1 h-0.5 w-full origin-left bg-brand-gold"
        aria-hidden="true"
      />
    </div>
  );
}
