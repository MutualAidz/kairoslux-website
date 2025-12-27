import re
from pathlib import Path

src = Path("public/images/logo-klw-source.svg")
dst = Path("public/images/logo-klw-cutout.svg")

s = src.read_text(encoding="utf-8")

# 1) Remove common full-canvas background path (if present)
s = re.sub(
    r'<path[^>]*\sfill="white"[^>]*\sd="M0 0L1024 0L1024 1024L0 1024L0 0Z"[^>]*/>\s*',
    "",
    s,
    flags=re.IGNORECASE,
)


def to_none_attr(match: re.Match[str]) -> str:
    attr = match.group(1)
    val = match.group(2).strip().lower()
    if val in {"white", "#fff", "#ffffff"}:
        return f'{attr}="none"'
    return match.group(0)


# 2) Convert white fills/strokes to none (transparent)
s = re.sub(r'(fill|stroke)="([^"]+)"', to_none_attr, s, flags=re.IGNORECASE)


def to_none_style(match: re.Match[str]) -> str:
    prop = match.group(1).lower()
    val = match.group(2).strip().lower()
    if val in {"white", "#fff", "#ffffff"}:
        return f"{prop}:none"
    return match.group(0)


# 3) Convert style-based white fills/strokes to none
s = re.sub(r'(fill|stroke)\s*:\s*([^;"]+)', to_none_style, s, flags=re.IGNORECASE)

dst.write_text(s, encoding="utf-8")
print("Wrote", dst)
