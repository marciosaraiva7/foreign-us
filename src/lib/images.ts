import type { ServiceId } from "@/messages/types";

export const croppedImages = {
  heroBanner: "/images/cropped/hero-banner.webp",
  heroDetailer: "/images/cropped/hero-detailer.webp",
  gtr: "/images/cropped/gtr-clean.webp",
  wallTexture: "/images/cropped/wall-texture.webp",
  og: "/images/og-image.webp",
} as const;

export const processImages = [
  croppedImages.heroDetailer,
  "/images/cropped/car-window.webp",
  "/images/cropped/detailer-polish.webp",
  "/images/cropped/detailer-studio.webp",
] as const;

/** Pixel dimensions of process step crops — container wraps image exactly */
export const processImageDimensions = [
  { width: 471, height: 1024 },
  { width: 484, height: 640 },
  { width: 428, height: 570 },
  { width: 388, height: 768 },
] as const;

export const faqImages = {
  primary: "/images/cropped/detailer-studio.webp",
  secondary: "/images/cropped/polisher-close.webp",
} as const;

export const serviceImages: Record<ServiceId, string> = {
  "paint-correction": "/images/cropped/polisher-close.webp",
  "ceramic-coating": "/images/cropped/detailer-studio.webp",
  "caliper-painting": "/images/cropped/detailer-action.webp",
  "window-tint": "/images/cropped/car-window.webp",
  wraps: "/images/cropped/detailer-action.webp",
  ppf: "/images/cropped/gtr-clean.webp",
};
