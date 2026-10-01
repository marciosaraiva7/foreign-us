import type { ServiceId } from "@/messages/types";

export const croppedImages = {
  heroBanner: "/images/cropped/hero-banner.webp",
  heroDetailer: "/images/editorial/polishing-v2.webp",
  gtr: "/images/editorial/skyline-v2.webp",
  wallTexture: "/images/cropped/wall-texture.webp",
  og: "/images/og-image.webp",
} as const;

export const processImages = [
  croppedImages.heroDetailer,
  "/images/cropped/car-window.webp",
  "/images/editorial/polishing-v2.webp",
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
  secondary: "/images/editorial/polishing-v2.webp",
} as const;

export const serviceImages: Record<ServiceId, string> = {
  "paint-correction": "/images/editorial/polishing-v2.webp",
  "ceramic-coating": "/images/editorial/polishing-v2.webp",
  "caliper-painting": "/images/editorial/skyline-v2.webp",
  "window-tint": "/images/cropped/car-window.webp",
  wraps: "/images/editorial/skyline-v2.webp",
  ppf: "/images/editorial/skyline-v2.webp",
};
