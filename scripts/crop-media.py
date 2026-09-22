#!/usr/bin/env python3
"""Crop photographic regions from poster art files."""

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images"
OUT = ROOT / "public" / "images" / "cropped"

CROPS: dict[str, tuple[str, tuple[int, int, int, int]]] = {
    # Car only — no poster text
    "gtr-clean.webp": ("gtr-skyline.png", (480, 140, 980, 680)),
    # Wide cinematic strip — car only, no poster text
    "hero-banner.webp": ("gtr-skyline.png", (560, 210, 1010, 685)),
    "wall-texture.webp": ("contact-bg.png", (680, 80, 1024, 480)),
    # Legacy service crops (kept for OG / future use)
    "detailer-action.webp": ("services-wrap.png", (430, 40, 768, 980)),
    "detailer-studio.webp": ("services-studio.png", (380, 0, 768, 900)),
    "car-window.webp": ("car-detail.png", (540, 60, 1024, 700)),
    "polisher-close.webp": ("services-polish.png", (280, 80, 720, 980)),
}


def crop_and_save(name: str, source: str, box: tuple[int, int, int, int]) -> None:
    src_path = SRC / source
    out_path = OUT / name

    with Image.open(src_path) as img:
        width, height = img.size
        left, top, right, bottom = box
        left = max(0, min(left, width))
        top = max(0, min(top, height))
        right = max(left + 1, min(right, width))
        bottom = max(top + 1, min(bottom, height))
        cropped = img.crop((left, top, right, bottom))

        # Slight contrast boost for web display
        cropped = ImageEnhance.Contrast(cropped).enhance(1.08)
        cropped = ImageEnhance.Sharpness(cropped).enhance(1.1)

        if name == "hero-banner.webp":
            cropped = ImageEnhance.Contrast(cropped).enhance(1.1)
            cropped = ImageEnhance.Brightness(cropped).enhance(1.06)
            cropped = ImageEnhance.Sharpness(cropped).enhance(1.12)

        cropped.save(out_path, "WEBP", quality=88, method=6)
        print(f"  {name}: {cropped.size[0]}x{cropped.size[1]} from {source}")


def create_og_image() -> None:
    src_path = SRC / "grunge-texture.png"
    out_path = SRC / "og-image.webp"

    with Image.open(src_path) as img:
        og = img.resize((1200, 630), Image.Resampling.LANCZOS)
        og.save(out_path, "WEBP", quality=85, method=6)
        print(f"  og-image.webp: 1200x630")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    print("Cropping images...")
    for name, (source, box) in CROPS.items():
        crop_and_save(name, source, box)
    print("Creating OG image...")
    create_og_image()
    print("Done.")


if __name__ == "__main__":
    main()
