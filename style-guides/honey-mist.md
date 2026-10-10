# Honey Mist Dark Adaptation Style Guide

Goal: retain the selected Honey Mist concept's honey character on dark warm
surfaces, with cream content and small gold cues. This is the selected concept
09 dark adaptation. The earlier generated image is light; this guide defines
new dark values.

Keep canvas, panels, fields, menus, dialogs, and code surfaces dark. There is
no white or light mode or light fallback. Use only amber/gold and warm neutral
gray, black, cream, or ivory. UI accents have no blue, green, red, purple, teal,
or pink hues. Follow the [shared implementation rules](README.md).

## Exact tokens

| Token | Exact value | Role |
| --- | --- | --- |
| `--bg` | `#242015` | Canvas |
| `--surface` | `#2F281B` | Panels, menus, dialogs |
| `--field` | `#1C180F` | Fields and code surfaces |
| `--interaction` | `#403523` | Dark hover, active, selected rows |
| `--text` | `#EFE2C4` | Content, labels, read-only values |
| `--muted` | `#C2B08C` | Secondary text, placeholders, comments |
| `--disabled` | `#C2B08C` | Disabled controls only |
| `--border` | `#51442D` | Decorative separators |
| `--control` | `#9B8556` | Required control boundaries |
| `--reference` | `#E0B554` | Links and confirmed references |
| `--accent` | `#E0B554` | Small primary actions and focus |
| `--error` | `#E0B554` | Error message, boundary, marker |
| `--success` | `#E0B554` | Success message and marker |
| `--selection` | `#E6C477` | Selected characters |
| `--selection-ink` | `#21190B` | Text and glyphs on selection |
| `--action-ink` | `#21190B` | Text and icons on primary actions |

Copy these tokens onto an owned root. Bind them through the application's
supported theme API. The block sets the dark color scheme and tokens.

```css
[data-theme="honey-mist"] {
  color-scheme: dark;
  --bg: #242015;
  --surface: #2F281B;
  --field: #1C180F;
  --interaction: #403523;
  --text: #EFE2C4;
  --muted: #C2B08C;
  --disabled: #C2B08C;
  --border: #51442D;
  --control: #9B8556;
  --reference: #E0B554;
  --accent: #E0B554;
  --error: #E0B554;
  --success: #E0B554;
  --selection: #E6C477;
  --selection-ink: #21190B;
  --action-ink: #21190B;
}
```

## Component and state rules

- Use dark honey surfaces for the canvas and panels, with deeper inset fields.
  Menus and dialogs use `--surface`; code uses `--field`. Keep bright gold fills
  limited to small primary actions and selected characters.
- Use cream `--text` for content and read-only values. Use full-opacity
  `--muted` for secondary text, placeholders, and comments. Inherit the existing
  type hierarchy and fonts. Keep prose and code fonts separate.
- Hover, active neutral controls, and selected rows use `--interaction` with
  `--text`. Retain native selected and pressed cues alongside the soft fill.
- Character selection uses `--selection` and `--selection-ink`, separate from
  row selection. Keep native ownership, glyph fill, readiness, fallback, and undo.
- Small primary actions use `--accent` and `--action-ink`. Secondary actions
  stay dark with `--text` and a `--control` edge. Keep hover and pressed feedback.
- `--border` is decorative. Required boundaries use `--control`. Keep one edge
  owner and a separate offset amber keyboard focus outline.
- `--reference`, `--error`, and `--success` equal `--accent`. Distinguish states
  with words, icon shapes, and boundary patterns. Amber alone does not mean success.
- Keep warning icons and labels, error labels and messages, and recovery actions. Error
  edges and markers stay visible during focus and row or character selection.
- `--disabled` equals `--muted`. Retain native disabled semantics, with no action
  or hover state. Read-only values use `--text`. Do not reduce text opacity.
- Keep empty guidance, loading labels, blocking, timing, keyboard operation,
  ARIA states, and announcements.
- Scope supported token bindings to owned UI roots, menus, and dialogs. Use no
  blanket color filter, all-descendant override, or forced SVG paint. Preserve
  native layout, spacing, data, actions, icons, and authored content. Recoloring
  authored content is a separate request.

## Motion

Use the [shared optional motion guide](motion.md): one gentle tab or navigation
indicator glide, with smaller control feedback. Keep native motion ownership.
Show the correct final state immediately when motion is disabled or unsupported.

## Contrast targets

Require at least 4.5:1 for normal and placeholder text and selection/action ink.
Require at least 3:1 for control edges and keyboard focus on adjacent surfaces.
The rounded opaque-pair minima below use the four dark surfaces. Selection
and action minima use their own fill and ink pairs. Compare unrounded ratios.

| Pair | Rounded minimum |
| --- | --- |
| Content text on dark surfaces | 9.33:1 |
| Muted and placeholder text on dark surfaces | 5.64:1 |
| Accent, reference, error, success on dark surfaces | 6.23:1 |
| Required control boundaries on dark surfaces | 3.36:1 |
| Character selection fill and ink | 10.37:1 |
| Primary-action fill and ink | 9.02:1 |

Decorative borders have no required-control contrast claim. Native disabled
semantics remain necessary. See the [shared contrast targets](README.md#contrast-targets-and-limits).
Calculated opaque pairs do not prove live contrast or WCAG conformance.
Check overlays, opacity, focus geometry, and native controls in the target app.

## Provenance and limits

Option 09 in [prompts.json](amber-options/prompts.json), dated 2026-10-09,
specified a light Honey Mist concept. The [Honey Mist image](amber-options/09-honey-mist.png)
remains that earlier light illustration with synthetic content. Its pixels are
approximate and do not show this dark palette. The image and prompt history
remain unchanged.

All exact values here are new written specifications for the selected dark
adaptation. They retain the honey color character with dark surfaces. The
image does not prove exact tokens, working controls, or native behavior.

This guide supplies no application integration. The earlier CSS, preview, and
checker cover [prior exploration](README.md#prior-exploration) only; they do
not implement or validate this profile.
