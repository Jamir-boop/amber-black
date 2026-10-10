import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const slugs = ['amber-black', 'soft-amber', 'honey-graphite', 'honey-mist'];
const guides = ['../amber-black-theme-style-guide.md', 'soft-amber.md', 'honey-graphite.md', 'honey-mist.md'];
const github = 'https://github.com/Jamir-boop/amber-black/blob/main/';
const links = new Map([...html.matchAll(/<a class="github-url" id="([^"]+)" href="([^"]+)">([^<]+)<\/a>/g)]
  .map(([, id, href, text]) => { assert.equal(text, href); return [id, { href }]; }));
assert.equal(links.size, 4);
assert.equal((html.match(/<article /g) || []).length, 4);
assert.equal((html.match(/<span class="publication">GitHub guide<\/span>/g) || []).length, 4);
assert.doesNotMatch(html, /GitHub pending|await a push/);
assert.match(html, /max-width: 1600px/);
assert.match(html, /\.styles \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
assert.match(html, /@media \(max-width: 700px\) \{[\s\S]*?\.styles \{ grid-template-columns: minmax\(0, 1fr\)/);
assert.match(html, /\.preview-viewport \{[^}]*overflow-x: auto/);
assert.match(html, /\.image-link \{[^}]*width: 100%;/);
assert.doesNotMatch(html, /\.image-link \{[^}]*min-width:/);
assert.match(html, /:is\(a, button, \.preview-viewport\):focus-visible/);
assert.match(html, /<nav id="style-navigation" aria-label="Choose a style preview">/);
assert.ok(html.includes('The illustrated controls do not operate.'));

const requiredStates = [
  'app-bar', 'navigation', 'variables', 'resources',
  'primary-button', 'secondary-button', 'disabled-button', 'search',
  'tabs-active', 'tabs-inactive', 'checkbox-checked', 'checkbox-unchecked',
  'toggle-on', 'toggle-off', 'radio-selected', 'radio-unselected',
  'dropdown', 'menu', 'menu-hovered', 'menu-disabled',
  'field-editable', 'field-readonly', 'field-invalid', 'warning',
  'row-normal', 'row-selected', 'row-hovered', 'row-focus',
  'code', 'character-selection', 'loading', 'progress', 'status-feedback',
];
let sharedComposition;

for (const [index, slug] of slugs.entries()) {
  const guidePath = guides[index];
  const urlPath = index === 0 ? 'amber-black-theme-style-guide.md' : `style-guides/${slug}.md`;
  assert.equal(links.get(`${slug}-github`)?.href, github + urlPath);
  assert.ok(html.includes(`href="${guidePath}">Local guide</a>`));
  assert.ok(existsSync(resolve(root, guidePath)));
  assert.ok(html.includes(`src="previews/${slug}.svg"`));
  assert.ok(html.includes(`href="#${slug}"`));
  assert.ok(html.includes(`<article id="${slug}" aria-labelledby="${slug}-title">`));
  assert.ok(html.includes(`href="previews/${slug}.svg">Open full-size preview</a>`));
  assert.ok(html.includes(`tabindex="0" role="region" aria-labelledby="${slug}-title" aria-describedby="${slug}-hint"`));
  assert.match(html, new RegExp(`src="previews/${slug}\\.svg" width="1440" height="1080" alt="Static `));
  const svg = readFileSync(resolve(root, 'previews', `${slug}.svg`), 'utf8');
  assert.match(svg, /<svg[^>]+viewBox="0 0 1440 1080" width="1440" height="1080"/);
  assert.match(svg, /<title id="title">[^<]+<\/title>/);
  assert.match(svg, /<desc id="description">Static illustrated application UI with sample data\./);
  assert.doesNotMatch(svg, /<(?:image|script|foreignObject|linearGradient|radialGradient|filter)\b|(?:href|src)=/);
  assert.match(svg, /text \{[^}]*font-size: 18px/);
  assert.doesNotMatch(svg, /font-size: (?:[0-9]|1[0-4])px/);
  for (const state of requiredStates) {
    assert.equal([...svg.matchAll(new RegExp(`data-role="${state}"`, 'g'))].length, 1, `${slug}: missing or repeated ${state}`);
    // Each marker belongs to painted geometry or a group with visible content.
    assert.match(svg, new RegExp(`<(?:g data-role="${state}">\\s*<(?:rect|text|g|circle)|rect [^>]*data-role="${state}")`), `${slug}: ${state} is not rendered`);
  }
  const statePaint = {
    'primary-button': '<rect class="action"',
    'secondary-button': '<rect class="field"',
    'disabled-button': '<rect class="disabled-control"',
    'checkbox-checked': '<rect class="selected-check"',
    'checkbox-unchecked': '<rect class="field"',
    'radio-selected': '<circle class="radio"[^>]+/><circle class="action"',
    'radio-unselected': '<circle class="radio"[^>]+/><text class="text"',
    'field-editable': '<rect class="field"[^>]+/><rect class="focus"',
    'field-readonly': '<rect class="field"[^>]+/><text class="text"[^>]+>step_02</text><g class="icon muted"',
    'field-invalid': '<rect class="invalid"',
    'row-normal': '<rect class="canvas"',
    'row-selected': '<rect class="selected"',
    'row-hovered': '<rect class="hovered"',
    'menu-hovered': '<rect class="hovered"',
    'menu-disabled': '<g class="icon disabled"',
    'character-selection': '<rect class="selection"[^>]+/>\\s*<text class="selection-ink code-text"',
    'progress': '<rect class="progress-track"[^>]+/><rect class="action"',
    'toggle-on': '<text[^>]+>Include source links</text><rect class="action"[^>]+/><circle class="action-ink"',
    'toggle-off': '<text[^>]+>Send test copy</text><rect class="field"[^>]+/><circle class="muted"',
  };
  for (const [state, paint] of Object.entries(statePaint)) {
    assert.match(svg, new RegExp(`data-role="${state}">\\s*${paint}`), `${slug}: wrong visible ${state} state`);
  }
  for (const label of ['Daily report', 'Build summary', 'Properties', 'Workflow variables',
    'Invalid address. Add a domain.', 'Copy step JSON', 'Delete during run', 'Running: step 2 of 5']) {
    assert.ok(svg.includes(`>${label}<`), `${slug}: missing visible ${label}`);
  }
  assert.match(svg, /class="icon [^"]+"[^>]*fill="none" stroke="currentColor"/);
  assert.match(svg, /\.icon \{ fill: none; stroke: currentColor;/);
  const composition = svg.split('</style>')[1];
  if (sharedComposition === undefined) sharedComposition = composition;
  else assert.equal(composition, sharedComposition, `${slug}: layout differs from the other profiles`);
  const guide = readFileSync(resolve(root, guidePath), 'utf8');
  const tokens = Object.fromEntries(index === 0
    ? [...guide.matchAll(/(--[a-z0-9-]+): (#[A-Fa-f0-9]{6});/g)].map(([, token, value]) => [token, value])
    : [...guide.matchAll(/`(--[a-z-]+)` \| `(#[A-Fa-f0-9]{6})`/g)].map(([, token, value]) => [token, value]));
  const roles = {
    canvas: tokens['--bg'],
    panel: tokens[index === 0 ? '--surface-2' : '--surface'],
    field: tokens[index === 0 ? '--bg' : '--field'],
    text: tokens['--text'],
    muted: tokens[index === 0 ? '--text-muted' : '--muted'],
    disabled: tokens[index === 0 ? '--text-disabled' : '--disabled'],
    action: tokens['--accent'],
    'action-ink': tokens[index === 0 ? '--text-on-accent' : '--action-ink'],
    selected: tokens[index === 0 ? '--accent' : '--interaction'],
    'selected-text': tokens[index === 0 ? '--text-on-accent' : '--text'],
    hovered: tokens[index === 0 ? '--accent' : '--interaction'],
    'hovered-text': tokens[index === 0 ? '--text-on-accent' : '--text'],
    selection: tokens[index === 0 ? '--accent' : '--selection'],
    'selection-ink': tokens[index === 0 ? '--text-on-accent' : '--selection-ink'],
    reference: tokens[index === 0 ? '--accent' : '--reference'],
    warning: tokens[index === 0 ? '--accent' : '--error'],
  };
  const paintedClasses = new Set([...svg.matchAll(/class="([^"]+)"/g)].flatMap(([, classes]) => classes.split(' ')));
  for (const [role, value] of Object.entries(roles)) {
    assert.ok(value, `${slug}: missing ${role} guide token`);
    assert.ok(svg.includes(`.${role} { fill: ${value};`), `${slug}: wrong ${role} color`);
    assert.ok(paintedClasses.has(role), `${slug}: unused ${role} role`);
  }
  const control = tokens[index === 0 ? '--accent' : '--control'];
  const field = tokens[index === 0 ? '--bg' : '--field'];
  assert.ok(svg.includes(`.field { fill: ${field}; stroke: ${control};`), `${slug}: wrong control boundary`);
  for (const role of ['radio', 'code-surface', 'menu-surface', 'progress-track']) {
    assert.match(svg, new RegExp(`\\.${role} \\{[^}]*stroke: ${control};`), `${slug}: wrong ${role} boundary`);
  }
  assert.ok(svg.includes(`.focus { fill: none; stroke: ${tokens['--accent']}; stroke-width: 2;`), `${slug}: wrong focus outline`);
  assert.ok(svg.includes(`.invalid { fill: ${field}; stroke: ${roles.warning}; stroke-width: 2;`), `${slug}: wrong invalid field`);
  const allowedColors = new Set(Object.values(tokens));
  for (const [color] of svg.matchAll(/#[A-Fa-f0-9]{6}/g)) assert.ok(allowedColors.has(color), `${slug}: unknown ${color}`);
}

const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const buttonDefinitions = [...html.matchAll(/<button id="([^"]+)"[^>]+data-copy="([^"]+)"[^>]+aria-describedby="([^"]+)"/g)];
assert.equal(buttonDefinitions.length, 4);
assert.deepEqual(buttonDefinitions.map(([, , linkId]) => linkId), slugs.map(slug => `${slug}-github`));

for (const [native, fallback, success] of [
  ['success', false, true],
  ['denied', true, true],
  ['denied', false, false],
  ['absent', true, true],
  ['absent', false, false],
  ['absent', 'throws', false],
]) {
  const elements = new Map(links);
  const written = [];
  let selected = null;
  let fallbackCalls = 0;
  const selection = { removeAllRanges() { selected = null; }, addRange(range) { selected = range.link; } };
  const buttons = buttonDefinitions.map(([, id, linkId, statusId]) => {
    elements.set(statusId, { textContent: '' });
    return {
      id, dataset: { copy: linkId }, disabled: true,
      getAttribute(name) { assert.equal(name, 'aria-describedby'); return statusId; },
      addEventListener(name, handler) { assert.equal(name, 'click'); this.click = handler; },
    };
  });
  const document = {
    querySelectorAll(selector) { assert.equal(selector, '[data-copy]'); return buttons; },
    getElementById(id) { assert.ok(elements.has(id), `Unknown element: ${id}`); return elements.get(id); },
    createRange() { return { selectNodeContents(link) { this.link = link; } }; },
    execCommand(command) {
      assert.equal(command, 'copy');
      fallbackCalls++;
      if (fallback === 'throws') throw new Error('Copy unavailable');
      return fallback;
    },
  };
  const navigator = native === 'absent' ? {} : { clipboard: { async writeText(url) {
    if (native === 'denied') throw new Error('NotAllowedError');
    written.push(url);
  } } };
  vm.runInNewContext(script, { document, navigator, window: { getSelection: () => selection } });
  for (const button of buttons) {
    assert.equal(button.disabled, false);
    await button.click();
    assert.equal(button.disabled, false);
    assert.equal(elements.get(button.getAttribute('aria-describedby')).textContent,
      success ? 'Link copied.' : 'Copy failed. Select the link and copy it.');
    assert.equal(selected, success ? null : links.get(button.dataset.copy));
  }
  assert.equal(fallbackCalls, native === 'success' ? 0 : 4);
  assert.deepEqual(written, native === 'success' ? [...links.values()].map(link => link.href) : []);
}

console.log('Picker checks passed: four responsive 1440×1080 UI previews, 2/1 columns, rendered control states, exact palettes and guide URLs, and clipboard success/failure paths.');
