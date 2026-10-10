"""Check exact palette roles and opaque contrast pairs, not live WCAG conformance."""

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
ROLES = {
    "bg", "surface", "field", "interaction", "text", "muted", "disabled",
    "border", "control", "reference", "accent", "error", "success",
    "selection", "selection-ink", "action-ink",
}
PROFILES = {"amber-black", "warm-charcoal", "slate-blue", "sage-paper"}


def luminance(color):
    channels = [int(color[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    linear = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
              for c in channels]
    return sum(c * weight for c, weight in zip(linear, (0.2126, 0.7152, 0.0722)))


def contrast(foreground, background):
    light, dark = sorted((luminance(foreground), luminance(background)), reverse=True)
    return (light + 0.05) / (dark + 0.05)


assert contrast("#000000", "#FFFFFF") == 21
assert contrast("#123456", "#123456") == 1
preview = (ROOT / "preview.html").read_text()
for form in re.findall(r'<form\b[^>]*>(.*?)</form>', preview, re.S):
    assert not re.search(r'''\b(?:id|name)\s*=\s*(["'])reset\1''', form), \
        "Preview form descendant masks the native reset method"
css = (ROOT / "palettes.css").read_text()
blocks = re.findall(r'\[data-theme="([a-z-]+)"\]\s*\{([^}]+)\}', css)
assert len(blocks) == len(PROFILES), "Missing or duplicate palette block"
assert {profile for profile, _ in blocks} == PROFILES, "Unexpected profile"

for profile, block in blocks:
    pairs = re.findall(r'--([a-z-]+):\s*(#[0-9A-F]{6});', block)
    colors = dict(pairs)
    assert len(pairs) == len(ROLES) and set(colors) == ROLES, f"{profile}: token parity"
    assert len(re.findall(r'--[a-z-]+:', block)) == len(ROLES), f"{profile}: non-opaque role"
    if profile != "amber-black":
        guide = (ROOT / f"{profile}.md").read_text()
        documented = dict(re.findall(r'\| `--([a-z-]+)` \| `(#[0-9A-F]{6})` \|', guide))
        assert documented == colors, f"{profile}: guide values differ from CSS"

    surfaces = ("bg", "surface", "field", "interaction")
    text_roles = ["text", "muted", "reference", "accent", "error", "success"]
    if profile in ("slate-blue", "sage-paper"):
        text_roles.append("disabled")
    text_min = min(contrast(colors[role], colors[surface])
                   for role in text_roles for surface in surfaces)
    boundary_min = min(contrast(colors[role], colors[surface])
                       for role in ("control", "accent", "error") for surface in surfaces)
    for role in text_roles:
        for surface in surfaces:
            ratio = contrast(colors[role], colors[surface])
            assert ratio >= 4.5, f"{profile}: {role}/{surface} = {ratio:.9f}, needs 4.5"
    for role in ("control", "accent", "error"):
        for surface in surfaces:
            ratio = contrast(colors[role], colors[surface])
            assert ratio >= 3, f"{profile}: {role}/{surface} = {ratio:.9f}, needs 3"
    selection = contrast(colors["selection-ink"], colors["selection"])
    action = contrast(colors["action-ink"], colors["accent"])
    assert selection >= 4.5, f"{profile}: selection = {selection:.9f}, needs 4.5"
    assert action >= 4.5, f"{profile}: primary action = {action:.9f}, needs 4.5"
    print(f"{profile}: PASS; opaque minima text {text_min:.3f}:1, "
          f"control/focus/error {boundary_min:.3f}:1, selection {selection:.3f}:1, "
          f"primary action {action:.3f}:1")

print("All four palettes have 16 matching roles. Opaque target pairs only; "
      "decorative edges and Amber/Warm disabled text are excluded.")
