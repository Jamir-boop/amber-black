# Installation

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
