import type { ServiceId } from "@/messages/types";

export const croppedImages = {
  heroBanner: "/images/cropped/hero-banner.webp",
  gtr: "/images/cropped/gtr-clean.webp",
  wallTexture: "/images/cropped/wall-texture.webp",
  og: "/images/og-image.webp",
} as const;

export const serviceImages: Record<ServiceId, string> = {
  "paint-correction": "/images/cropped/polisher-close.webp",
  "ceramic-coating": "/images/cropped/detailer-studio.webp",
  "caliper-painting": "/images/cropped/detailer-action.webp",
  "window-tint": "/images/cropped/car-window.webp",
  wraps: "/images/cropped/detailer-action.webp",
  ppf: "/images/cropped/gtr-clean.webp",
};
