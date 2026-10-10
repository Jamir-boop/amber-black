# Soft Amber Style Guide

Goal: use warm dark surfaces, ivory content, and small soft amber cues for
dense tools and long editor sessions. This is selected concept 01, with a
complete dark amber-only token specification.

Keep canvas, panels, fields, menus, dialogs, and code surfaces dark. There is
no white or light mode or light fallback. Use only amber/gold and warm neutral
gray, black, cream, or ivory. UI accents have no blue, green, red, purple, teal,
or pink hues. Follow the [shared implementation rules](README.md).

## Exact tokens

| Token | Exact value | Role |
| --- | --- | --- |
| `--bg` | `#1C1A18` | Canvas |
| `--surface` | `#24211E` | Panels, menus, dialogs |
| `--field` | `#171513` | Fields and code surfaces |
| `--interaction` | `#36312C` | Dark hover, active, selected rows |
| `--text` | `#E9E4DC` | Content, labels, read-only values |
| `--muted` | `#B7AEA3` | Secondary text, placeholders, comments |
| `--disabled` | `#B7AEA3` | Disabled controls only |
| `--border` | `#423B34` | Decorative separators |
| `--control` | `#8C8175` | Required control boundaries |
| `--reference` | `#D8B56B` | Links and confirmed references |
| `--accent` | `#D8B56B` | Small primary actions and focus |
| `--error` | `#D8B56B` | Error message, boundary, marker |
| `--success` | `#D8B56B` | Success message and marker |
| `--selection` | `#D8B56B` | Selected characters |
| `--selection-ink` | `#171513` | Text and glyphs on selection |
| `--action-ink` | `#171513` | Text and icons on primary actions |

Copy these tokens onto an owned root. Bind them through the application's
supported theme API. The block sets the dark color scheme and tokens.

```css
[data-theme="soft-amber"] {
  color-scheme: dark;
  --bg: #1C1A18;
  --surface: #24211E;
  --field: #171513;
  --interaction: #36312C;
  --text: #E9E4DC;
  --muted: #B7AEA3;
  --disabled: #B7AEA3;
  --border: #423B34;
  --control: #8C8175;
  --reference: #D8B56B;
  --accent: #D8B56B;
  --error: #D8B56B;
  --success: #D8B56B;
  --selection: #D8B56B;
  --selection-ink: #171513;
  --action-ink: #171513;
}
```

## Component and state rules

- Use the warm canvas and inset field. Panels, menus, and dialogs use
  `--surface`. Keep idle surfaces neutral and amber emphasis small.
- Use `--text` for content and read-only values. Use full-opacity `--muted`
  for secondary text, placeholders, and comments. Inherit the existing type
  hierarchy and fonts. Keep prose and code fonts separate.
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
| Content text on dark surfaces | 10.17:1 |
| Muted and placeholder text on dark surfaces | 5.88:1 |
| Accent, reference, error, success on dark surfaces | 6.58:1 |
| Required control boundaries on dark surfaces | 3.38:1 |
| Character selection fill and ink | 9.32:1 |
| Primary-action fill and ink | 9.32:1 |

Decorative borders have no required-control contrast claim. Native disabled
semantics remain necessary. See the [shared contrast targets](README.md#contrast-targets-and-limits).
Calculated opaque pairs do not prove live contrast or WCAG conformance.
Check overlays, opacity, focus geometry, and native controls in the target app.

## Provenance and limits

The canvas, panel, field, row, text, muted, and accent values match the target
colors for option 01 in [prompts.json](amber-options/prompts.json), dated
2026-10-09. The remaining formal state roles are written specifications for
this guide. The [Soft Amber image](amber-options/01-soft-amber.png) is an
approximate design reference with synthetic content. It does not prove exact
tokens, working controls, or native behavior.

This guide supplies no application integration. The earlier CSS, preview, and
checker cover [prior exploration](README.md#prior-exploration) only; they do
not implement or validate this profile.
