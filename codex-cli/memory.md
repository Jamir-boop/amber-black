# Codex CLI Theme Memory

Status: Codex CLI TUI custom syntax themes use TextMate `.tmTheme`, not JSON.

## Working Setup

- Theme file: `$CODEX_HOME/themes/amber-black.tmTheme`
- Config file: `$CODEX_HOME/config.toml`
- Config value:

```toml
[tui]
theme = "amber-black"
```

On Windows, `$CODEX_HOME` commonly defaults to `%USERPROFILE%\.codex`.

## How Resolution Works

1. Codex reads `[tui] theme = "amber-black"` from `config.toml`.
2. Codex first checks bundled theme names.
3. If no bundled theme matches, Codex checks `$CODEX_HOME\themes\amber-black.tmTheme`.
4. File must be valid TextMate `.tmTheme` XML plist.
5. Invalid or unreadable file -> startup warning -> default theme.
6. Theme picker discovers valid `*.tmTheme` files under `$CODEX_HOME\themes`.

## Important Split

- `.tmTheme` controls Codex CLI/TUI syntax highlighting.
- `amber-black.json` is ignored by Codex CLI/TUI theme discovery.
- Desktop app chrome appearance is separate. It is persisted in `$CODEX_HOME/.codex-global-state.json` under keys such as `appearanceDarkChromeTheme`, not through `themes/*.json`.

## Files Copied Here

- `codex-cli/amber-black.tmTheme` - working custom Codex TUI syntax theme.
- `codex-cli/theme.json` - original JSON reference; not used directly by Codex TUI.

## Docs / Source

- Codex source: custom theme path is `{codex_home}/themes/{name}.tmTheme`:
  https://github.com/openai/codex/blob/main/codex-rs/tui/src/render/highlight.rs#L2539-L2551
- Codex source: theme resolution checks bundled names, then custom `.tmTheme` file:
  https://github.com/openai/codex/blob/main/codex-rs/tui/src/render/highlight.rs#L2589-L2620
- Codex source: picker lists valid custom `*.tmTheme` files from `{CODEX_HOME}/themes/`:
  https://github.com/openai/codex/blob/main/codex-rs/tui/src/render/highlight.rs#L2844-L2904
- Sublime Text `.tmTheme` format docs:
  https://www.sublimetext.com/docs/3/color_schemes_tmtheme.html
- TextMate theme docs:
  https://macromates.com/manual/en/themes
