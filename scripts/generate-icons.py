#!/usr/bin/env python3
"""Generate favicon and apple-touch-icon for Foreign US."""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app"

GOLD = (232, 185, 35)
BLACK = (7, 7, 7)
CREAM = (244, 241, 234)


def draw_mark(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), BLACK)
    draw = ImageDraw.Draw(img)

    pad = size // 8
    draw.rectangle(
        (pad, pad, size - pad, size - pad),
        outline=CREAM,
        width=max(2, size // 64),
    )

    font_size = size // 5
    try:
        from PIL import ImageFont

        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", font_size)
    except OSError:
        font = ImageFont.load_default()

    text = "FR\nGN"
    bbox = draw.multiline_textbbox((0, 0), text, font=font, spacing=4, align="center")
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2 - size // 20
    draw.multiline_text((x, y), text, fill=CREAM, font=font, spacing=4, align="center")

    line_y = size - pad - size // 10
    draw.line((pad + 4, line_y, size - pad - 4, line_y), fill=GOLD, width=max(2, size // 80))

    crown_y = pad - size // 16
    cx = size // 2
    draw.polygon(
        [
            (cx - size // 8, crown_y + size // 16),
            (cx - size // 14, crown_y),
            (cx, crown_y + size // 20),
            (cx + size // 14, crown_y),
            (cx + size // 8, crown_y + size // 16),
        ],
        fill=GOLD,
    )

    return img


def main() -> None:
    icon = draw_mark(512)
    icon.save(APP / "icon.png", "PNG")
    apple = draw_mark(180)
    apple.save(APP / "apple-icon.png", "PNG")
    print("Generated icon.png and apple-icon.png")


if __name__ == "__main__":
    main()
