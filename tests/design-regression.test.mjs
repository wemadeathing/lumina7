import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('work listing uses the proof-card design language', async () => {
  const source = await read('src/pages/work.astro');

  assert.match(source, /work-specimen/);
  assert.match(source, /crop-marks/);
  assert.match(source, /outcomeShort/);
  assert.match(source, /aria-label="Filter projects"/);
});

test('mobile navigation fits inside the viewport without horizontal clipping', async () => {
  const source = await read('src/components/Header.astro');

  assert.match(source, /w-\[calc\(100vw-2rem\)\]/);
  assert.match(source, /max-w-md/);
  assert.doesNotMatch(source, /max-w-\[calc\(100vw-6rem\)\]/);
});

test('mobile navigation uses an opaque graphite surface in dark mode', async () => {
  const source = await read('src/components/Header.astro');

  assert.match(source, /id="floating-nav"[\s\S]{0,300}floating-nav-surface/);
  assert.match(source, /:global\(html\.dark\) \.floating-nav-surface[\s\S]{0,240}var\(--bg-elevated\) 96%/);
  assert.match(source, /:global\(html\.dark\) \.floating-nav-surface[\s\S]{0,360}var\(--text-primary\) 18%/);
});

test('the floating WhatsApp shortcut does not obscure mobile page content', async () => {
  const source = await read('src/layouts/Layout.astro');

  assert.doesNotMatch(source, /import WhatsAppFloating/);
  assert.doesNotMatch(source, /<WhatsAppFloating/);
});

test('homepage does not render the job ticket strip below the header', async () => {
  const source = await read('src/pages/index.astro');

  assert.doesNotMatch(source, /Job ticket strip/);
  assert.doesNotMatch(source, />Cape Town design studio</);
});

test('accent picker popover leaves enough room between swatches and groups', async () => {
  const source = await read('src/components/AccentPicker.astro');

  assert.match(source, /accent-panel[^"]*w-52[^"]*p-5/);
  assert.match(source, /class="space-y-5"/);
  assert.match(source, /class="grid grid-cols-4 gap-3"/);
});

test('accent picker desktop trigger matches the theme toggle height and offers a one-time nudge', async () => {
  const source = await read('src/components/AccentPicker.astro');

  assert.match(source, /accent-btn[^"]*w-10[^"]*h-10[^"]*bg-gray-200[^"]*dark:bg-gray-700/);
  assert.doesNotMatch(source, /accent-btn[^"]*border-gray-200/);
  assert.match(source, /data-accent-nudge/);
  assert.match(source, />Color me bad</);
  assert.match(source, /const NUDGE_STORAGE_KEY = 'accent-nudge-dismissed'/);
  assert.match(source, /window\.setTimeout\(showNudge, 2200\)/);
  assert.match(source, /if \(window\.location\.pathname !== '\/'\) return;/);
});

test('accent picker offers exactly four noisy aurora textures', async () => {
  const source = await read('src/components/AccentPicker.astro');

  assert.match(source, /const noiseLayer = [\s\S]*feTurbulence/);
  assert.match(source, /baseFrequency=%27\.74%27/);
  assert.match(source, /tableValues=%270 \.26%27/);
  assert.match(source, /opacity=%27\.72%27/);
  assert.match(source, /72px 72px repeat/);
  assert.match(source, /id: 'aurora-midnight'/);
  assert.match(source, /id: 'aurora-ocean'/);
  assert.match(source, /id: 'aurora-bloom'/);
  assert.match(source, /id: 'aurora-lime'/);
  assert.doesNotMatch(source, /id: '(aurora-solar|dots|dossier-lines|fine-rules|technical-grid|mesh-blend)'/);
  assert.doesNotMatch(source, /featured\??:|swatch\.featured|col-span-4/);
});

test('dark aurora uses light accent-surface text throughout the site', async () => {
  const [picker, layout, header, whatsapp, cta, tokens] = await Promise.all([
    read('src/components/AccentPicker.astro'),
    read('src/layouts/Layout.astro'),
    read('src/components/Header.astro'),
    read('src/components/WhatsAppButton.astro'),
    read('src/components/CTA.astro'),
    read('src/styles/design-tokens.css'),
  ]);

  assert.match(picker, /id: 'aurora-midnight'[\s\S]*ink: 'oklch\(0\.985 0\.002 260\)'/);
  assert.match(picker, /id: 'aurora-midnight'[\s\S]*rgba\(4, 13, 25, 0\.58\)/);
  assert.match(picker, /radial-gradient\(ellipse at 72% 40%, #7138C7 0 8%, transparent 38%\)/);
  assert.doesNotMatch(picker, /radial-gradient\(ellipse at 70% 44%, #A52BDB 0 13%, transparent 50%\)/);
  assert.match(picker, /data-ink=/);
  assert.match(picker, /setProperty\('--color-spot-ink', accent\.ink\)/);
  assert.match(layout, /setProperty\('--color-spot-ink', accent\.ink \|\| 'oklch\(0\.18 0\.004 260\)'\)/);
  assert.match(header, /color: var\(--color-spot-ink\)/);
  assert.match(whatsapp, /text-on-spot/);
  assert.doesNotMatch(whatsapp, /text-spot-ink/);
  assert.match(cta, /text-on-spot/);
  assert.doesNotMatch(cta, /text-spot-ink/);
  assert.match(tokens, /\.text-on-spot\s*\{[\s\S]*color: var\(--color-spot-ink\)/);
});

test('removed accent textures cannot persist as hidden selections', async () => {
  const source = await read('src/components/AccentPicker.astro');

  assert.match(source, /function resetUnsupportedAccent\(\)/);
  assert.match(source, /function resetUnsupportedAccent\(\)[\s\S]*const swatch = Array\.from[\s\S]*if \(!swatch\)[\s\S]*applyAccent\(null\)/);
  assert.match(source, /function resetUnsupportedAccent\(\)[\s\S]*applyAccent\(\{ id: accentId, solid, hover, surface, ink \}\)/);
  assert.match(source, /resetUnsupportedAccent\(\);[\s\S]*accentBound/);
});

test('project outcome labels stay neutral and on one line', async () => {
  const [home, work, tokens] = await Promise.all([
    read('src/pages/index.astro'),
    read('src/pages/work.astro'),
    read('src/styles/design-tokens.css'),
  ]);

  assert.match(home, /class="m-0 outcome-chip"/);
  assert.match(work, /class="m-0 outcome-chip text-right"/);
  assert.doesNotMatch(home, /outcomeShort[\s\S]{0,180}chip-spot/);
  assert.doesNotMatch(work, /outcomeShort[\s\S]{0,180}chip-spot/);
  assert.match(tokens, /\.outcome-chip[\s\S]*white-space: nowrap/);
  assert.match(tokens, /\.outcome-chip[\s\S]*color-mix\(in srgb, var\(--text-primary\) 8%, transparent\)/);
});

test('portfolio detail media keeps the current square-edged art direction', async () => {
  const source = await read('src/pages/work/[...slug].astro');

  assert.doesNotMatch(source, /rounded-2xl/);
  assert.doesNotMatch(source, /group rounded transition-colors duration-300/);
});

test('homepage headline uses an ampersand without accent underlining', async () => {
  const source = await read('src/pages/index.astro');

  assert.match(source, /We design brands &amp; websites for South African businesses\./);
  assert.doesNotMatch(source, /We design brands[\s\S]{0,120}hl-spot/);
});

test('homepage hero does not repeat the delivery promise strip', async () => {
  const source = await read('src/pages/index.astro');

  assert.doesNotMatch(source, /Fixed quote within 24 hours/);
  assert.doesNotMatch(source, /Delivery in 2&ndash;4 weeks/);
  assert.doesNotMatch(source, /You own everything we make/);
});

test('light and dark surfaces use one neutral graphite scale', async () => {
  const [tokens, tailwind, legacySurfaces] = await Promise.all([
    read('src/styles/design-tokens.css'),
    read('tailwind.config.mjs'),
    Promise.all([
      'src/components/Pricing.astro',
      'src/components/Section.astro',
      'src/components/Timeline.astro',
      'src/components/AccentPicker.astro',
      'src/components/CTA.astro',
      'src/layouts/Layout.astro',
      'src/pages/about.astro',
      'src/pages/contact.astro',
      'src/pages/insights.astro',
      'src/pages/insights/[...slug].astro',
      'src/pages/services/brand-identity.astro',
      'src/pages/services/print.astro',
      'src/pages/services/signage.astro',
      'src/pages/services/websites.astro',
      'src/pages/work.astro',
      'src/pages/work/[...slug].astro',
    ].map(read)).then((files) => files.join('\n')),
  ]);

  assert.match(tokens, /--bg-primary: oklch\(0\.985 0\.002 260\)/);
  assert.match(tokens, /--bg-secondary: oklch\(0\.96 0\.003 260\)/);
  assert.match(tokens, /html\.dark[\s\S]*--bg-primary: oklch\(0\.145 0\.003 260\)/);
  assert.match(tokens, /html\.dark[\s\S]*--bg-secondary: oklch\(0\.18 0\.004 260\)/);
  assert.match(tokens, /\.bg-primary\s*\{\s*background-color: var\(--bg-primary\)/);
  assert.match(tokens, /\.bg-secondary\s*\{\s*background-color: var\(--bg-secondary\)/);
  assert.doesNotMatch(tokens, /--bg-(?:primary|secondary|tertiary|elevated): #(?:F6F4EF|EFECE4|E9E5DB|141210|191713|1D1A16)/);
  assert.match(tailwind, /50: 'oklch\(0\.97 0\.002 260\)'/);
  assert.doesNotMatch(tailwind, /Warm ink-on-paper|Warm dark-mode|#(?:F6F4EF|EFECE4|E9E5DB|141210|1D1A16)/);
  assert.doesNotMatch(legacySurfaces, /bg-\[#F6F4EF\]|dark:bg-\[#141210\]|dark:bg-\[#1D1A16\]/);
  assert.doesNotMatch(legacySurfaces, /#(?:F6F4EF|EFECE4|E9E5DB|141210|1D1A16|16140F)/);
});
