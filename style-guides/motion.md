# Pleasant Motion for Dark Amber UIs

Use one gentle tab or navigation indicator glide to show continuity. Keep
other feedback smaller and faster. Use the same motion rules for
[Soft Amber](soft-amber.md), [Honey Graphite](honey-graphite.md), and
[dark Honey Mist](honey-mist.md).

Motion is optional where the host supports it. Keep the existing native motion
owner. Unsupported, disabled, or failed motion must show the correct final
state immediately. Animation must not decide selection, visibility, or task
results. Use only the chosen profile's color tokens.

## Timing and travel

Use `--motion-ease: cubic-bezier(.16, 1, .3, 1)` for a gentle stop. The defaults
below give the three profiles one consistent rhythm. Exit faster than entrance.

| Token | Default | Use and limits |
| --- | --- | --- |
| `--motion-fast` | `120ms` | Hover or action feedback, 100–140 ms |
| `--motion-control` | `180ms` | Routine control change, 160–180 ms |
| `--motion-glide` | `280ms` | Main tab or navigation indicator glide |
| `--motion-menu` | `180ms` | Menu entrance, 160–180 ms, 4–6 px |
| `--motion-panel` | `240ms` | Panel entrance, 220–280 ms, 8–16 px |
| `--motion-exit` | `140ms` | Exit, 120–160 ms |

A directional tab panel can travel up to 24 px with the 280 ms glide. The
local [tab-motion source](/home/superuser/Documents/automation-anywhere/better-automationanywhere/entrypoints/sidepanel/main-tab-motion.ts)
uses that distance and easing with one amber indicator. It is a reference,
not a dependency or proof that these guides supply a working integration.

## Component patterns

- **Tabs and navigation:** move one small `--accent` indicator between the
  current and next target. Select the latest target immediately, including
  keyboard and ARIA state. The host measures positions, handles resize, and
  retargets from the actual interrupted position. Keep a static active-tab cue
  when movement is unavailable. Do not move the tab's hit area or label.
- **Panels, drawers, menus, and tooltips:** use a short entrance toward the
  final position. Keep the anchor fixed. Keep native open/close delays, focus
  order, keyboard controls, `hidden`, `inert`, and ARIA rules. Keep inactive
  content noninteractive. An exit must not delay input or a task result.
- **Disclosure and reorder:** animate only a user-triggered change when the
  host already supports it. Commit the open state or item order immediately.
  Keep focus, scroll position, keyboard operation, and undo/redo. Do not move
  rows on hover or make targets jump under the pointer.
- **Hover and press:** use a fast neutral fill change with `--interaction`.
  A button can move by at most 1 px on press if its native component supports
  this cue. Keep hover targets fixed. Do not animate character selection,
  text being edited, warning or error visibility, keyboard focus arrival, or
  input latency. Keep one boundary owner and one keyboard focus owner.
- **Save and copy:** show the existing confirmation words and icon immediately.
  A small control change can support that feedback. Confirmation must not
  depend on movement or color. Keep announcements and existing message timing.
  Errors and recovery actions appear immediately and remain visible.
- **Empty and loading states:** keep guidance, status labels, blocking rules,
  and existing timing. Motion must not postpone useful content. Keep an
  existing necessary progress cue under its native owner. Add no decorative
  loops or repeated entrance effects.

Keep the main glide clear. Do not stack competing effects on one target. Use
no bounce, elastic or rubber-band motion, glow, or full-screen amber washes.
Add no automatic or repeated page-load or scroll choreography.

## Small CSS example

These are guide snippets, not a tested native integration. Copy only the parts
the host needs. Map the example classes to owned elements with no existing
transition, animation, or transform owner. Keep the existing neutral control
paint and all focus, border, error, and disabled styles. Use the control class
only for neutral controls, not editable text, alerts, or selection layers.

Add `amber-motion-panel-content-enter` only to a direct visual content child
of `.amber-motion-panel` for a supported entrance. Keep the outer panel
untransformed. The animated content must have no viewport-fixed descendants.
Keep fixed overlays outside it, preferably in the host's existing overlay
portal with no transformed ancestors. If the host cannot isolate this content,
use its native motion owner or show the final state immediately.

Remove the class after completion or cancellation. The panel is visible by
default; the example does not open, hide, or disable it. CSS does not measure
navigation geometry. This markup shows placement only. Keep the host's
existing roles, focus, and state rules.

```html
<section class="amber-motion-panel">
  <div class="amber-motion-panel-content-enter">
    <p>Panel content</p>
  </div>
</section>
<!-- Use the host's existing overlay portal outside animated content. -->
<div class="overlay-portal">
  <div style="position: fixed; top: 12px; left: 12px;">Panel status</div>
</div>
```

```css
:where([data-theme="soft-amber"], [data-theme="honey-graphite"], [data-theme="honey-mist"]) {
  --motion-fast: 120ms;
  --motion-control: 180ms;
  --motion-glide: 280ms;
  --motion-menu: 180ms;
  --motion-panel: 240ms;
  --motion-exit: 140ms;
  --motion-ease: cubic-bezier(.16, 1, .3, 1);
}

:where([data-theme="soft-amber"], [data-theme="honey-graphite"], [data-theme="honey-mist"])
  .amber-motion-control {
  transition: background-color var(--motion-fast) var(--motion-ease);
}

:where([data-theme="soft-amber"], [data-theme="honey-graphite"], [data-theme="honey-mist"])
  .amber-motion-control:where(:disabled, [aria-disabled="true"], [readonly], [aria-readonly="true"], [aria-invalid="true"]) {
  transition: none;
}

:where([data-theme="soft-amber"], [data-theme="honey-graphite"], [data-theme="honey-mist"])
  .amber-motion-panel > .amber-motion-panel-content-enter {
  animation: amber-panel-glide var(--motion-panel) var(--motion-ease);
}

@keyframes amber-panel-glide {
  from { transform: translateY(12px); }
  to { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  :where([data-theme="soft-amber"], [data-theme="honey-graphite"], [data-theme="honey-mist"]) {
    --motion-fast: 0ms;
    --motion-control: 0ms;
    --motion-glide: 0ms;
    --motion-menu: 0ms;
    --motion-panel: 0ms;
    --motion-exit: 0ms;
  }

  :where([data-theme="soft-amber"], [data-theme="honey-graphite"], [data-theme="honey-mist"])
    .amber-motion-panel > .amber-motion-panel-content-enter {
    animation: none;
  }
}
```

For reduced motion, remove spatial and scale effects and the glide. Show
meaningful feedback, focus, errors, and final states immediately. Do this at
load and when the preference changes while the UI is open. If the application
already has a motion opt-out, give it the same result and cancel active motion.
Do not add a new toggle or a broad global animation reset for this guide.

## Runtime and adoption checks

Use existing motion support, CSS, or the Web Animations API as available. Add
no dependency for these simple effects. Cancel and rebase interrupted motion
from its current visible position. Rapid repeated input must select the latest
target immediately. On resize, settle at the correct measured position. Clear
stale animation fill and transforms after completion or cancellation.

Keep data, actions, scroll, selection, editing, and undo behavior intact. Stop
nonessential animation work offscreen or while hidden. Use no permanent
`will-change` and no repeated layout, shadow, or blur work. Check performance
on target devices; these snippets make no performance claim.

Before adopting motion in an application, check:

- Pointer and keyboard paths, ARIA, focus, and inactive `hidden`/`inert` content.
- Rapid reversal, cancellation, repeated input, resize, and scroll position.
- Reduced motion at load and when changed live, plus an existing motion opt-out.
- Disabled, error, and read-only states, with immediate readable feedback.
- No-JS and unsupported-motion fallback, with a visible correct final state.
- Viewport-fixed overlays keep their position during entrance and cancellation.
- Low-power and mobile devices, including hidden and offscreen behavior.

The guides supply rules and CSS examples only. They do not implement or test
motion in a native application. Keep the existing color and contrast checks.
