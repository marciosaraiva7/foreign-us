import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  aspect?: "video" | "4/3" | "square" | "wide";
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  imageScale?: number;
  objectFit?: "cover" | "contain";
  intrinsicSize?: { width: number; height: number };
};

const aspectClasses = {
  video: "aspect-video",
  "4/3": "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[21/9]",
} as const;

export function SectionImage({
  src,
  alt,
  aspect = "video",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 420px",
  objectPosition = "center",
  imageScale = 1,
  objectFit = "cover",
  intrinsicSize,
}: SectionImageProps) {
  if (intrinsicSize) {
    return (
      <div
        className={`relative w-full overflow-hidden border border-white/10 bg-brand-black ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={intrinsicSize.width}
          height={intrinsicSize.height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full"
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden border border-white/10 bg-brand-black ${aspectClasses[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
        style={{
          objectPosition,
          transform: imageScale !== 1 ? `scale(${imageScale})` : undefined,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold" aria-hidden="true" />
    </div>
  );
}
