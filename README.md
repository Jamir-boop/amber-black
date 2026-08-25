# Amber Black

Amber Black is a collection of high-contrast themes built around pure black,
white text, and the `#FFB900` amber accent.

See [amber-black-theme-style-guide.md](amber-black-theme-style-guide.md) for
the shared palette and component rules.

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
- Other JSON themes: import or copy the file using the target application's
  custom-theme mechanism.

## License

Source code, configuration, and documentation are licensed under the MIT
License. Image and media assets (`.gif`, `.jpg`, `.png`, and `.svg`) are
excluded unless an asset states otherwise.
