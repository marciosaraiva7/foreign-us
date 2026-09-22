"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroParallaxImageProps = {
  src: string;
  alt: string;
};

export function HeroParallaxImage({ src, alt }: HeroParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${y * 0.12}px) scale(1.04)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[3/4] w-full max-w-md overflow-hidden border border-white/10 will-change-transform lg:max-w-lg"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 90vw, 480px"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gold" />
    </div>
  );
}
