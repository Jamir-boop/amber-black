# Amber Black

Amber Black is a collection of high-contrast themes built around pure black,
white text, and the `#FFB900` amber accent.

See [amber-black-theme-style-guide.md](amber-black-theme-style-guide.md) for
the Amber Black palette and component rules.

Open the [style picker](style-guides/index.html) to compare previews and copy GitHub guide links.

## Selected direction

The selected guides are 01 Soft Amber, 02 Honey Graphite, and 09 Honey Mist.
All three use dark surfaces and amber-only UI colors. Honey Mist is a written
dark adaptation of the earlier light concept. There is no white or light mode.

Read [the concept notes](style-guides/amber-options/README.md) for the selected
guides and the [ten ImageGen concepts](style-guides/amber-options/index.html).
The images remain design references. The exact selected tokens are in Markdown.

## Style guides

Choose one complete profile before you apply its rules. Amber Black retains its
original rules. The three selected guides define softer dark amber profiles.
These written guides do not change the existing application themes.

| Profile | Guide | Character |
| --- | --- | --- |
| Amber Black | [Original guide](amber-black-theme-style-guide.md) | Pure black, white text, solid amber interaction |
| 01 Soft Amber | [Guide](style-guides/soft-amber.md) | Dark warm charcoal, ivory text, soft amber cues |
| 02 Honey Graphite | [Guide](style-guides/honey-graphite.md) | Dark graphite, warm text, muted honey gold |
| 09 Honey Mist | [Dark adaptation guide](style-guides/honey-mist.md) | Dark honey surfaces, cream text, restrained gold |

See the [shared implementation and state rules](style-guides/README.md).

Prior exploration: [Warm Charcoal](style-guides/warm-charcoal.md),
[Slate Blue](style-guides/slate-blue.md), and [Sage Paper](style-guides/sage-paper.md).
Their [CSS tokens](style-guides/palettes.css),
[local preview](style-guides/preview.html), and
[check script](style-guides/check_palettes.py) cover those earlier profiles only.

## Themes

| Software | Theme source | Notes |
| --- | --- | --- |
| Claude Code | [`claude-code/amber-black.json`](claude-code/amber-black.json) | JSON token overrides |
| Codex CLI | [`codex-cli/amber-black.tmTheme`](codex-cli/amber-black.tmTheme) | TextMate syntax theme; see [`codex-cli/memory.md`](codex-cli/memory.md) |
| Firefox | [`firefox/`](firefox/) | Profile CSS theme with [installation instructions](firefox/README.md) |
| Global websites | [`global-userstyle/global-style.styl`](global-userstyle/global-style.styl) | Stylus userstyle with optional font and CRT settings |
| Global font | [`global-userstyle/global-font-only.styl`](global-userstyle/global-font-only.styl) | Font-only Stylus userstyle |
| Glow | [`glow/amber-black.json`](glow/amber-black.json) | Glamour JSON stylesheet for markdown rendering |
| micro | [`micro/amber-black.micro`](micro/amber-black.micro) | micro colorscheme |
| OpenCode | [`opencode-cli/amber-black.json`](opencode-cli/amber-black.json) | OpenCode JSON theme |
| Typora | [`typora/amber-black.css`](typora/amber-black.css) | Markdown editor theme with a block caret |
| WhatsApp Web | [`whatsapp/wsp.user.styl`](whatsapp/wsp.user.styl) | Stylus userstyle |

## Installation

- Firefox: follow [`firefox/README.md`](firefox/README.md).
- Codex CLI: copy `amber-black.tmTheme` to `$CODEX_HOME/themes/`, then set
  `theme = "amber-black"` under `[tui]` in `$CODEX_HOME/config.toml`.
- Stylus themes: create a new Stylus userstyle and import the corresponding
  `.styl` source.
- micro: copy `amber-black.micro` into the micro colorschemes directory and
  select `amber-black` as the colorscheme.
- Glow: run `glow -s glow/amber-black.json`, or copy the file to
  `~/.config/glow/styles/` (`%LOCALAPPDATA%\glow\styles\` on Windows) and set
  `style: "<path to amber-black.json>"` in `glow.yml`.
- Typora: copy `typora/amber-black.css` into the themes directory
  (`%APPDATA%\Typora\themes\` on Windows, `~/.config/Typora/themes/` on Linux,
  `~/Library/Application Support/abnerworks.Typora/themes/` on macOS), restart
  Typora, then select `Amber Black` under Themes. The block caret needs Typora
  1.14 or later, which ships a Chromium with `caret-shape` support.
- Other JSON themes: import or copy the file using the target application's
  custom-theme mechanism.

## License

Source code, configuration, and documentation are licensed under the MIT
License. Image and media assets (`.gif`, `.jpg`, `.png`, and `.svg`) are
excluded unless an asset states otherwise.
