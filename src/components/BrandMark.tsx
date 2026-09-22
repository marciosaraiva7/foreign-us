import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { width: 36, height: 31, className: "h-9 w-auto" },
  md: { width: 48, height: 41, className: "h-12 w-auto" },
  lg: { width: 72, height: 62, className: "h-16 w-auto sm:h-20" },
};

export function BrandMark({ size = "md", className = "" }: BrandMarkProps) {
  const s = sizes[size];

  return (
    <Image
      src="/images/logo-frgn.png"
      alt="FRGN"
      width={s.width}
      height={s.height}
      className={`${s.className} ${className}`.trim()}
      priority={size === "lg"}
    />
  );
}
