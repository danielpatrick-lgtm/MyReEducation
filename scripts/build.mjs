// scripts/build.mjs — production build for Vercel.
//
// The site is authored as plain HTML + JSX that used to be compiled in the
// browser by Babel. That left search engines with an almost empty page
// (<div id="root"></div>) until JavaScript ran. This build:
//
//   1. Copies the site into dist/.
//   2. Compiles every .jsx file to plain .js ahead of time, so the browser no
//      longer downloads Babel (~3 MB) or compiles code on every visit.
//   3. Pre-renders each page in jsdom and writes the rendered markup into
//      <div id="root">, so the HTML Google receives already contains every
//      heading, paragraph and link. React still mounts on top as before.
//
// Run locally with `npm run build`, preview with `npm run preview`.
// Authoring is unchanged: keep editing the .html and .jsx files in the repo root.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import babel from '@babel/core';
import { JSDOM, VirtualConsole, ResourceLoader } from 'jsdom';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

// Never shipped to the site.
const SKIP = new Set([
  'node_modules', 'dist', 'scripts', '.git', '.github', '.vercel',
  'package.json', 'package-lock.json', 'README.md', '.gitignore',
  'bundled-check.png', 'AdobeStock_227897464.jpg', 'AdobeStock_68360750 copy.jpg',
]);

// ---------------------------------------------------------------- 1. copy
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);
for (const name of fs.readdirSync(ROOT)) {
  if (SKIP.has(name) || name.endsWith('.jsx')) continue;
  fs.cpSync(path.join(ROOT, name), path.join(DIST, name), { recursive: true });
}

// ---------------------------------------------------------------- 2. compile JSX
const jsxFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.jsx'));
for (const f of jsxFiles) {
  const { code } = babel.transformSync(fs.readFileSync(path.join(ROOT, f), 'utf8'), {
    filename: f,
    babelrc: false,
    configFile: false,
    // Classic runtime: output uses the global React, exactly like in-browser Babel did.
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: false,
  });
  // In-browser Babel ran each file at top level with shared globals; plain
  // classic scripts behave the same way, so no wrapping is needed.
  fs.writeFileSync(path.join(DIST, f.replace(/\.jsx$/, '.js')), code);
}

const BABEL_TAG = /[ \t]*<script[^>]*src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\s*\n?/;
const toPlainScripts = html =>
  html
    .replace(BABEL_TAG, '')
    .replace(/<script type="text\/babel" src="([^"]+)\.jsx"><\/script>/g, '<script src="$1.js"></script>');

// ---------------------------------------------------------------- 3. pre-render
// Serve the CDN React builds from node_modules (same 18.3.1 version) and every
// other script from dist/, so pre-rendering needs no network.
const LOCAL_CDN = {
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js': path.join(ROOT, 'node_modules/react/umd/react.production.min.js'),
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': path.join(ROOT, 'node_modules/react-dom/umd/react-dom.production.min.js'),
};
class LocalLoader extends ResourceLoader {
  fetch(url, options) {
    if (LOCAL_CDN[url]) return Promise.resolve(fs.readFileSync(LOCAL_CDN[url]));
    if (url.startsWith('https://myreeducation.com/')) {
      const p = path.join(DIST, decodeURIComponent(new URL(url).pathname));
      if (p.endsWith('.js') && fs.existsSync(p)) return Promise.resolve(fs.readFileSync(p));
    }
    return null; // ignore fonts, images, analytics, etc.
  }
}

function installBrowserStubs(window) {
  // Reveal-on-scroll: report every element as visible so the snapshot has the
  // final, visible state (class "in") rather than opacity-0 content.
  window.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; }
    observe(el) { this.cb([{ isIntersecting: true, target: el, intersectionRatio: 1 }], this); }
    unobserve() {} disconnect() {} takeRecords() { return []; }
  };
  window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
  window.matchMedia = q => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null, dispatchEvent() { return false; } });
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.fetch = () => new Promise(() => {}); // lead form never fires during build anyway
  window.requestAnimationFrame = cb => setTimeout(() => cb(Date.now()), 0);
  window.cancelAnimationFrame = id => clearTimeout(id);
}

async function prerender(file, html) {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => errors.push(e.message));
  vc.on('error', (...a) => errors.push(a.join(' ')));

  const pageUrl = 'https://myreeducation.com/' + (file === 'index.html' ? '' : file.replace(/\.html$/, ''));
  const dom = new JSDOM(html, {
    url: pageUrl,
    runScripts: 'dangerously',
    resources: new LocalLoader(),
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse: installBrowserStubs,
  });
  const { window } = dom;
  await new Promise(r => window.addEventListener('load', r));

  // Wait until React has committed and the markup stops changing.
  const root = () => window.document.getElementById('root');
  let last = '', stable = 0;
  for (let i = 0; i < 100 && stable < 3; i++) {
    await new Promise(r => setTimeout(r, 50));
    const now = root().innerHTML;
    stable = now === last && now.length > 0 ? stable + 1 : 0;
    last = now;
  }
  const rendered = root().innerHTML;
  const hasH1 = !!root().querySelector('h1');
  window.close();
  if (!rendered || !hasH1) {
    throw new Error(`${file}: pre-render produced ${rendered ? 'no <h1>' : 'no markup'}\n  ${errors.join('\n  ')}`);
  }
  return rendered;
}

const pages = fs.readdirSync(DIST).filter(f => f.endsWith('.html'));
for (const file of pages) {
  const src = toPlainScripts(fs.readFileSync(path.join(DIST, file), 'utf8'));
  const open = src.match(/<div id="root">/);
  if (!open) { fs.writeFileSync(path.join(DIST, file), src); continue; }

  // Keep anything already inside #root (e.g. the homepage's crawlable link
  // list) and put the rendered page in front of it.
  const start = open.index + open[0].length;
  const end = findRootClose(src, open.index);
  const existing = src.slice(start, end);
  const rendered = await prerender(file, src);
  const out = src.slice(0, start) + rendered + existing + src.slice(end);
  fs.writeFileSync(path.join(DIST, file), out);
  const words = rendered.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`prerendered ${file.padEnd(36)} ${String(words).padStart(5)} words`);
}

// Returns the index of the </div> that closes <div id="root"> (handles nesting).
function findRootClose(src, openIdx) {
  const re = /<div\b|<\/div>/g;
  re.lastIndex = openIdx;
  let depth = 0, m;
  while ((m = re.exec(src))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return m.index;
  }
  throw new Error('unclosed #root');
}
