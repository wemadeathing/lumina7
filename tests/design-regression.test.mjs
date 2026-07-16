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
