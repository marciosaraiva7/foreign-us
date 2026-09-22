#!/usr/bin/env python3
"""Crop photographic regions from poster art files."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images"
OUT = ROOT / "public" / "images" / "cropped"

CROPS: dict[str, tuple[str, tuple[int, int, int, int]]] = {
    "gtr-clean.webp": ("gtr-skyline.png", (520, 80, 1024, 720)),
    "detailer-action.webp": ("services-wrap.png", (380, 0, 768, 1024)),
    "detailer-studio.webp": ("services-studio.png", (400, 0, 1024, 768)),
    "car-window.webp": ("car-detail.png", (480, 0, 1024, 768)),
    "polisher-close.webp": ("services-polish.png", (200, 0, 824, 768)),
    "wall-texture.webp": ("contact-bg.png", (0, 0, 512, 512)),
    "hero-detailer.webp": ("detailer.png", (0, 120, 471, 900)),
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
        cropped.save(out_path, "WEBP", quality=82, method=6)
        print(f"  {name}: {cropped.size[0]}x{cropped.size[1]} from {source}")


def create_og_image() -> None:
    src_path = SRC / "grunge-texture.png"
    out_path = SRC / "og-image.webp"

    with Image.open(src_path) as img:
        og = img.resize((1200, 630), Image.Resampling.LANCZOS)
        og.save(out_path, "WEBP", quality=85, method=6)
        print(f"  og-image.webp: 1200x630 from grunge-texture.png")


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
