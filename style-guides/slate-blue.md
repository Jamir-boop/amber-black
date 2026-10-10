# Slate Blue Style Guide

Slate Blue uses cool dark surfaces, pale blue actions, and soft lavender
references. Use this profile when a cool dark palette is preferred for a tool.
Surface changes show structure. Color identifies actions and state.

This is a new guide design, not a preset found in the reference repository.
The Amber Black hue bans do not apply. Follow the
[shared implementation and state rules](README.md). Use the exact values in
[palettes.css](palettes.css) under `data-theme="slate-blue"`.

## Palette

| Token | Exact value |
| --- | --- |
| `--bg` | `#1B2027` |
| `--surface` | `#232A33` |
| `--field` | `#161B21` |
| `--interaction` | `#303B47` |
| `--text` | `#E0E7EE` |
| `--muted` | `#AAB7C5` |
| `--disabled` | `#AAB7C5` |
| `--border` | `#3E4B59` |
| `--control` | `#7F90A3` |
| `--reference` | `#C4B4DF` |
| `--accent` | `#9BBBDD` |
| `--error` | `#EBA6A1` |
| `--success` | `#9CC8B0` |
| `--selection` | `#AFCFE8` |
| `--selection-ink` | `#17212B` |
| `--action-ink` | `#17212B` |

## Profile rules

- Use the cool canvas, panel, and field roles for existing surface hierarchy.
- Use pale blue for actions and focus. Keep lavender limited to references and
  syntax roles that have the same meaning.
- Use soft red for errors and soft green for success. Keep semantic labels.
- Keep hover and selected rows dark with primary text and a native selected cue.
- Use pale blue selection with dark ink for characters. Do not confuse this
  character selection with the dark whole-row state.
- Use muted text at full opacity for secondary content and placeholders. Use
  native disabled semantics to distinguish disabled controls. Read-only values
  keep primary text.
- Use quiet separators for decoration and the stronger control boundary for
  inputs and secondary actions. Keep focus and error edges visible.

This profile follows the Warm Charcoal role structure, with new values authored
for this guide on 2026-10-09. Calculated opaque contrast checks and the local
synthetic preview do not prove native integration or WCAG conformance.
