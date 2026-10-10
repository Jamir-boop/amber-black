# Honey Graphite Style Guide

Goal: use dark neutral graphite, warm content text, and small muted honey-gold
cues for practical tools. This is selected concept 02, with a complete dark
amber-only token specification.

Keep canvas, panels, fields, menus, dialogs, and code surfaces dark. There is
no white or light mode or light fallback. Use only amber/gold and warm neutral
gray, black, cream, or ivory. UI accents have no blue, green, red, purple, teal,
or pink hues. Follow the [shared implementation rules](README.md).

## Exact tokens

| Token | Exact value | Role |
| --- | --- | --- |
| `--bg` | `#1E1E1D` | Canvas |
| `--surface` | `#282725` | Panels, menus, dialogs |
| `--field` | `#191918` | Fields and code surfaces |
| `--interaction` | `#37332A` | Dark hover, active, selected rows |
| `--text` | `#E6E2D8` | Content, labels, read-only values |
| `--muted` | `#B6AFA1` | Secondary text, placeholders, comments |
| `--disabled` | `#B6AFA1` | Disabled controls only |
| `--border` | `#444036` | Decorative separators |
| `--control` | `#8E8470` | Required control boundaries |
| `--reference` | `#CBAA60` | Links and confirmed references |
| `--accent` | `#CBAA60` | Small primary actions and focus |
| `--error` | `#CBAA60` | Error message, boundary, marker |
| `--success` | `#CBAA60` | Success message and marker |
| `--selection` | `#CBAA60` | Selected characters |
| `--selection-ink` | `#191918` | Text and glyphs on selection |
| `--action-ink` | `#191918` | Text and icons on primary actions |

Copy these tokens onto an owned root. Bind them through the application's
supported theme API. The block sets the dark color scheme and tokens.

```css
[data-theme="honey-graphite"] {
  color-scheme: dark;
  --bg: #1E1E1D;
  --surface: #282725;
  --field: #191918;
  --interaction: #37332A;
  --text: #E6E2D8;
  --muted: #B6AFA1;
  --disabled: #B6AFA1;
  --border: #444036;
  --control: #8E8470;
  --reference: #CBAA60;
  --accent: #CBAA60;
  --error: #CBAA60;
  --success: #CBAA60;
  --selection: #CBAA60;
  --selection-ink: #191918;
  --action-ink: #191918;
}
```

## Component and state rules

- Use graphite for the canvas and inset fields. Panels, menus, and dialogs use
  `--surface`. Keep panels flat and resting surfaces neutral. Use small gold cues.
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
| Content text on dark surfaces | 9.72:1 |
| Muted and placeholder text on dark surfaces | 5.77:1 |
| Accent, reference, error, success on dark surfaces | 5.67:1 |
| Required control boundaries on dark surfaces | 3.41:1 |
| Character selection fill and ink | 7.92:1 |
| Primary-action fill and ink | 7.92:1 |

Decorative borders have no required-control contrast claim. Native disabled
semantics remain necessary. See the [shared contrast targets](README.md#contrast-targets-and-limits).
Calculated opaque pairs do not prove live contrast or WCAG conformance.
Check overlays, opacity, focus geometry, and native controls in the target app.

## Provenance and limits

The canvas, panel, field, row, text, muted, and accent values match the target
colors for option 02 in [prompts.json](amber-options/prompts.json), dated
2026-10-09. The remaining formal state roles are written specifications for
this guide. The [Honey Graphite image](amber-options/02-honey-graphite.png) is an
approximate design reference with synthetic content. It does not prove exact
tokens, working controls, or native behavior.

This guide supplies no application integration. The earlier CSS, preview, and
checker cover [prior exploration](README.md#prior-exploration) only; they do
not implement or validate this profile.
