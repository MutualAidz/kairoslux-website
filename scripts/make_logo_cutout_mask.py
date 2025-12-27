import xml.etree.ElementTree as ET
from pathlib import Path

SVG_NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", SVG_NS)

SRC = Path("public/images/logo-klw-source.svg")
DST = Path("public/images/logo-klw.svg")


def q(tag: str) -> str:
    return f"{{{SVG_NS}}}{tag}"


root = ET.fromstring(SRC.read_text(encoding="utf-8"))

# Collect paths by fill
paths = root.findall(f".//{q('path')}")
white_paths = []
coral_paths = []

for p in paths:
    fill = (p.get("fill") or "").strip()
    if fill == "white":
        white_paths.append(p)
    elif fill.lower() == "#ef6c61":
        coral_paths.append(p)

# Identify background (full-canvas) and cutout shapes (all other white paths)
cutouts = []
for p in white_paths:
    d = (p.get("d") or "").strip()
    if d.startswith("M0 0L1024 0L1024 1024L0 1024L0 0Z"):
        continue
    cutouts.append(p)

# New SVG root (preserve original svg attrs like width/height/viewBox)
new_root = ET.Element(q("svg"), attrib=dict(root.attrib))

# Mask: start fully visible (white rect), then punch holes (black paths)
defs = ET.SubElement(new_root, q("defs"))
mask = ET.SubElement(
    defs,
    q("mask"),
    attrib={
        "id": "cutout-mask",
        "maskUnits": "userSpaceOnUse",
        "x": "0",
        "y": "0",
        "width": "1024",
        "height": "1024",
    },
)

ET.SubElement(
    mask,
    q("rect"),
    attrib={"x": "0", "y": "0", "width": "1024", "height": "1024", "fill": "white"},
)

for p in cutouts:
    ET.SubElement(
        mask,
        q("path"),
        attrib={"d": p.get("d") or "", "fill": "black"},
    )

# Apply mask to the coral shapes group
g = ET.SubElement(new_root, q("g"), attrib={"mask": "url(#cutout-mask)"})
for p in coral_paths:
    attrib = dict(p.attrib)
    attrib["fill"] = "#EF6C61"
    ET.SubElement(g, q("path"), attrib=attrib)

DST.write_text(ET.tostring(new_root, encoding="unicode"), encoding="utf-8")
print(f"Wrote {DST}")
