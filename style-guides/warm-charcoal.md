# Warm Charcoal Style Guide

Warm Charcoal uses warm dark surfaces, soft text, and a restrained amber action.
Use this profile for dense tools and long editor sessions. Gold marks selected
characters. Whole-row selection stays dark.

This is an alternative profile. The Amber Black hue bans do not apply. Follow
the [shared implementation and state rules](README.md). Use the exact values in
[palettes.css](palettes.css) under `data-theme="warm-charcoal"`.

## Palette

| Token | Exact value |
| --- | --- |
| `--bg` | `#1C1A18` |
| `--surface` | `#24211E` |
| `--field` | `#171513` |
| `--interaction` | `#36312C` |
| `--text` | `#E9E4DC` |
| `--muted` | `#B7AEA3` |
| `--disabled` | `#555555` |
| `--border` | `#423B34` |
| `--control` | `#8C8175` |
| `--reference` | `#A8C0DC` |
| `--accent` | `#D8B56B` |
| `--error` | `#EB8C88` |
| `--success` | `#93C9AD` |
| `--selection` | `#FFBA30` |
| `--selection-ink` | `#111113` |
| `--action-ink` | `#111113` |

## Profile rules

- Keep the warm canvas and inset fields. Use the panel role for raised content.
- Use amber for actions and focus. Use soft blue for confirmed references.
- Use soft red for errors and soft green for success. Keep semantic labels.
- Use the dark interaction fill with primary text for hover and selected rows.
- Use exact gold and dark ink for selected characters. Do not use gold for a
  whole selected row. Keep editor glyph fill and selection ownership intact.
- Use muted text for placeholders and comments. The inherited disabled value
  is only for truly disabled controls. It is not a readable text role.
- Use the quiet border for decoration and the control token for required edges.
  Keep one border owner and a separate visible keyboard outline.

## Provenance and limits

The fixed warm palette comes from `editorThemePalette()` in the local reference
repository's [controlRoomNativeColors.styl](../../automation-anywhere/better-automationanywhere/src/styl/controlRoomNativeColors.styl),
with [dark.md](../../automation-anywhere/better-automationanywhere/dark.md) and
[DESIGN.md](../../automation-anywhere/better-automationanywhere/DESIGN.md).
These links require that local sibling repository. The source was inspected on
2026-10-09. The exact warm roles are working-tree evidence at HEAD `2322c79`,
not a committed palette release. The source disabled role remains `#555555`.

Committed feature history provides context, not proof of the later warm values:

- [`63835583f5603033140b51832947c01868b8c83b`](https://github.com/MoraTools/better-automationanywhere/commit/63835583f5603033140b51832947c01868b8c83b): opt-in Control Room dark mode.
- [`99ad97284de63f468e2e8f96f6f3f13c9a9abbcd`](https://github.com/MoraTools/better-automationanywhere/commit/99ad97284de63f468e2e8f96f6f3f13c9a9abbcd): Control Room dark-theme repair.
- [`6863c9a3e5c98f1556785ea4da40556daf4a9dcf`](https://github.com/MoraTools/better-automationanywhere/commit/6863c9a3e5c98f1556785ea4da40556daf4a9dcf): text-file theming and shared text selection.

The reference fixed default applies to TaskBot and text editors under existing
gates. Custom-derived theme colors are separate local work. Do not copy the
reference's application selectors or extend its route scope. Its screenshots
and local fixtures are synthetic. Live native warm acceptance remains pending.
This guide and preview add no native integration or WCAG conformance claim.
