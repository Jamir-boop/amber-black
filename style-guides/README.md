# Reusable Style Guides

Open the [style picker](index.html) to compare previews and copy GitHub guide links.

The selected guides use dark surfaces and amber-only UI colors. Choose one
complete profile for an application or an owned UI root. The original
[Amber Black guide](../amber-black-theme-style-guide.md) keeps its own rules.
Do not combine roles from different profiles without new checks.

| Profile | Guide | Base |
| --- | --- | --- |
| Amber Black | [Original guide](../amber-black-theme-style-guide.md) | Pure black, high contrast |
| 01 Soft Amber | [Guide](soft-amber.md) | Dark warm charcoal, soft amber |
| 02 Honey Graphite | [Guide](honey-graphite.md) | Dark graphite, muted honey gold |
| 09 Honey Mist | [Dark adaptation guide](honey-mist.md) | Dark honey surfaces, cream text |

Each selected guide contains an exact token table and a scoped CSS token block.
Those Markdown values are the specification. All canvases, panels, fields,
menus, dialogs, and code surfaces stay dark. Warm off-white content text and
small amber primary actions with dark ink are allowed. There is no white or
light mode or light fallback.

The [concept notes](amber-options/README.md) retain all ten generated images.
Image 09 remains the earlier light illustration. Its selected written guide
defines a dark adaptation. Generated pixels are approximate references.

## Token contract

Bind tokens through the application's supported theme API within the chosen
root. For the selected guides, copy the block from that guide. Do not add a
blanket color filter, all-descendant override, or global `!important` rule.

| Token | Role |
| --- | --- |
| `--bg` | Main canvas |
| `--surface` | Panels, menus, dialogs |
| `--field` | Fields and code surfaces |
| `--interaction` | Dark hover, active, and selected-row fill |
| `--text` | Content, labels, read-only values |
| `--muted` | Secondary text, placeholders, comments |
| `--disabled` | Only controls that are actually disabled |
| `--border` | Decorative separators and panel edges |
| `--control` | Boundaries needed to identify controls |
| `--reference` | Links, confirmed references, supported syntax roles |
| `--accent` | Small primary actions, keyboard focus, state markers |
| `--error` | Error message, boundary, and marker |
| `--success` | Success message and marker |
| `--selection` | Selected characters |
| `--selection-ink` | Text and glyph fill on character selection |
| `--action-ink` | Text and icons on primary actions |

## Selected dark guide rules

- Use only amber/gold and warm neutral gray, black, cream, or ivory. Thematic
  UI colors have no blue, green, red, purple, teal, or pink accents.
- Keep resting surfaces neutral. Use existing text hierarchy and spacing.
  Reserve bright fills for small primary actions and character selection.
- Use `--interaction` with `--text` for hover, active neutral controls, and
  selected rows. Keep the native selected or pressed cue. A soft fill alone
  does not identify selection. Amber Black keeps its original solid amber rows.
- Keep row selection separate from character selection. Use `--selection`
  and `--selection-ink` for characters through supported browser/editor APIs.
  Keep selection ownership, glyph fill, readiness, fallback, and undo history.
- Use `--accent` and `--action-ink` for small primary actions. Secondary actions
  use a dark surface, `--text`, and a `--control` edge. Keep hover and pressed
  feedback visible through the application's existing cues.
- Use `--border` for decoration only. Use `--control` for required boundaries.
  Keep one boundary owner per control and a separate offset keyboard outline.
- In all three selected profiles, `--reference`, `--error`, and `--success`
  equal `--accent`. Use state words, icon shapes, and boundary patterns to
  identify meaning. An amber accent has no success meaning.
- Keep warning and error labels, messages, and recovery actions. Use a warning
  icon with warning text. Keep error markers and boundaries visible during
  focus and row or character selection. A focus outline must not hide them.
- Use `--text` for read-only values and full-opacity `--muted` for placeholders.
  `--disabled` equals `--muted` in these profiles. Keep native disabled
  semantics, with no action or hover state. Do not reduce readable text opacity.
- Keep empty-state guidance, loading labels, and the existing blocking and
  timing behavior. Preserve keyboard operation, ARIA states, and announcements.
- Keep native icons. Owned monochrome icons can use `currentColor`. Keep their
  glyphs visible in each state. Do not force every SVG fill or stroke.
- Use amber and warm neutral roles for owned UI code chrome where meaning is
  retained. Preserve authored content and its colors. Recoloring that content
  is a separate request.

## Safe adoption

1. Inspect existing theme tokens, routes, portals, components, and states.
2. Bind the chosen profile through the supported theme system. Scope missing
   paint to confirmed owned roots, including menus and dialogs.
3. Keep native layout, fonts, spacing, dimensions, controls, accessibility,
   data, actions, scroll, selection, and undo/redo. Keep theme enablement.
   Optional [motion](motion.md) must keep task behavior, state timing, and the
   native motion owner.
4. Inherit the application's typography. Keep prose and code fonts separate.
   Preserve print, export, other routes, and authored content within their scope.
5. Check rest, hover, active, selected row, character selection, keyboard focus,
   read-only, disabled, warning, error, success, empty, loading, code, menus,
   and dialogs in the real application.

Reduce decorative contrast, not required text or control contrast. A quiet
separator cannot replace an edge needed to identify an input or action.

## Contrast targets and limits

Normal, secondary, placeholder, reference, error, and success text must reach
4.5:1 on each adjacent dark surface. Character selection and primary-action
ink must reach 4.5:1 on their fills. Required control edges and keyboard focus
must reach 3:1 on adjacent surfaces. Compare unrounded ratios.

These targets follow [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
and [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
Decorative edges and inactive controls have different requirements. Read-only
content remains readable. The original Amber Black tokens remain unchanged.

Each selected guide records calculated opaque-pair minima. These calculations
do not prove WCAG conformance or live application contrast. Opacity, overlays,
selection layers, inherited and authored colors, focus geometry, and native
controls need live checks. No native integration is supplied by these guides.

## Prior exploration

These earlier guides keep their own values and state rules:

| Profile | Guide | Base |
| --- | --- | --- |
| Warm Charcoal | [Guide](warm-charcoal.md) | Dark, warm, with other semantic hues |
| Slate Blue | [Guide](slate-blue.md) | Dark, cool |
| Sage Paper | [Guide](sage-paper.md) | Light, warm green |

[palettes.css](palettes.css) contains those earlier tokens and Amber Black.
The [preview](preview.html) uses synthetic Operate samples for those profiles.
The sample selector and form work locally. Static empty and loading specimens
are labeled. The preview does not edit files, run automation, or prove native
application behavior.

The existing command checks only those earlier palettes:

```sh
python3 style-guides/check_palettes.py
```

It checks earlier token parity, guide values, and opaque-pair contrast with
unrounded ratios. It does not implement or validate Soft Amber, Honey Graphite,
or the dark Honey Mist guide. Warm Charcoal provenance remains in its guide.
Slate Blue and Sage Paper remain earlier guide designs.
