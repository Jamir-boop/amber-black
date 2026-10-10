# Sage Paper Style Guide

Sage Paper is a light profile with warm paper surfaces, dark green text, and
restrained green actions. Use it when a light working surface is preferred.
Keep content dark and idle panels close to the canvas.

This is a new guide design, not a preset found in the reference repository.
The Amber Black pure-black and hue bans do not apply. Follow the
[shared implementation and state rules](README.md). Use the exact values in
[palettes.css](palettes.css) under `data-theme="sage-paper"`.

## Palette

| Token | Exact value |
| --- | --- |
| `--bg` | `#F3F4EE` |
| `--surface` | `#F9FAF5` |
| `--field` | `#FFFFFF` |
| `--interaction` | `#E5EADF` |
| `--text` | `#29362E` |
| `--muted` | `#526255` |
| `--disabled` | `#526255` |
| `--border` | `#D0D8CD` |
| `--control` | `#788775` |
| `--reference` | `#3F6174` |
| `--accent` | `#49694E` |
| `--error` | `#A04037` |
| `--success` | `#426C4E` |
| `--selection` | `#CADBC2` |
| `--selection-ink` | `#243629` |
| `--action-ink` | `#FFFFFF` |

## Profile rules

- Use paper for the canvas, the lighter panel role for panels, and white for
  fields. Keep the existing application hierarchy and layout.
- Use dark green and white ink for primary actions. Use dark green for focus.
- Use blue-gray for confirmed references. Keep error red and success green with
  clear labels. A green accent does not give an action success meaning.
- Use the light green interaction surface and primary text for hover and
  selected rows. Keep a native selected cue.
- Use pale green and dark ink for selected characters. Selection ink and primary
  action ink are separate roles. Do not use white on the pale selection fill.
- Use muted text at full opacity for secondary content and placeholders. Use
  native disabled semantics for disabled controls. Read-only text stays primary.
- The paper separator is decorative. Use the darker control token where an
  input or action boundary is needed. Keep error and keyboard focus visible.

This profile follows the Warm Charcoal role structure, with new light values
authored for this guide on 2026-10-09. It does not change print or export behavior.
Calculated opaque contrast checks and the local synthetic preview do not prove
native integration or WCAG conformance.
