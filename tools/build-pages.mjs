// Writes the static pages search engines and AI crawlers read without running JavaScript:
//   tutorials.html               — English guides filled in between the <!-- guides --> markers
//   uk/index.html, ru/index.html — the home page with flow.js's translations applied
//   uk/tutorials.html, ru/tutorials.html — the tutorials with tutorials.js's guides
// Run after changing index.html, tutorials.html, the translations in flow.js or the guides in tutorials.js:
//   node tools/build-pages.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => readFileSync(join(root, f), 'utf8');
const write = (f, s) => {
  mkdirSync(dirname(join(root, f)), { recursive: true });
  writeFileSync(join(root, f), s);
};

const SITE = 'https://www.eventsnotes.top/';
const LANGS = ['uk', 'ru'];

// ----- Data, read straight from the scripts the pages run -----
const flowSrc = read('flow.js');
const translations = new Function(`return ${flowSrc.match(/const translations = (\{[\s\S]*?\n\});/)[1]}`)();

const tutSrc = read('tutorials.js');
const tutData = tutSrc
  .slice(0, tutSrc.indexOf('/* ===== State & helpers ===== */'))
  .replace(/^const SHOT_BASE = .*$/m, ''); // needs the browser; the pages use a relative path instead
const { UI, GROUPS, SHOTS } = new Function(`${tutData}; return { UI, GROUPS, SHOTS };`)();
const SHOT_BASE = 'assets/tutorials/';

// ----- Helpers -----
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function setMeta(html, title, desc) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(desc)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(desc)}"`);
}

function setLangAndCanonical(html, lang, page) {
  return html
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${SITE}${lang}/${page}"`);
}

// Pages that exist in every language folder keep their relative links; everything else is one level up.
const LOCALIZED = /^(index|tutorials)\.html(#.*)?$/;
const EXTERNAL = /^(#|[a-z]+:|\/)/i;

function upOneLevel(html) {
  return html.replace(/<[a-z][^>]*>/gi, (tag) => {
    const isLangLink = tag.includes('class="lang-btn"');
    const fix = (url) => {
      if (EXTERNAL.test(url) || (!isLangLink && LOCALIZED.test(url))) return url;
      return '../' + url.replace(/^\.\//, '');
    };
    return tag
      .replace(/(\s(?:src|href)=")([^"]*)"/g, (_, attr, url) => `${attr}${fix(url)}"`)
      .replace(/url\(([^)]+)\)/g, (_, url) => `url(${fix(url)})`);
  });
}

function markActiveLang(html, lang) {
  return html.replace(/<a class="lang-btn" data-lang="(\w+)"/g, (m, l) =>
    l === lang ? `<a class="lang-btn is-active" aria-current="page" data-lang="${l}"` : m
  );
}

// ----- Home page -----
function translateHome(html, lang) {
  const dict = translations[lang];
  // data-i18n elements hold only text; data-i18n-html ones may hold <em> or <br>
  html = html.replace(
    /<(\w+)([^>]*?)\sdata-i18n(-html)?="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, before, isHtml, key, after) => {
      if (dict[key] == null) return m;
      const attr = isHtml ? 'data-i18n-html' : 'data-i18n';
      return `<${tag}${before} ${attr}="${key}"${after}>${isHtml ? dict[key] : esc(dict[key])}</${tag}>`;
    }
  );
  return setMeta(html, dict['doc.title'], dict['doc.desc']);
}

// ----- Tutorials -----
// Same markup tutorials.js builds in render() and buildCard(); the script replaces it on load.
function renderGuides(lang) {
  const t = (key) => (UI[key] && (UI[key][lang] || UI[key].en)) || '';
  const chevron =
    '<svg class="tut-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>';

  const card = (item, groupId) => {
    const steps = item.steps[lang] || item.steps.en;
    const shots = SHOTS[item.id];
    const badge = item.badge ? `<span class="tut-badge">${t('badge.' + item.badge)}</span>` : '';
    const lis = steps.map((s, i) => {
      const shot = shots && shots[i];
      const img = shot
        ? `<button type="button" class="tut-shot" aria-label="${esc(s)}"><img src="${SHOT_BASE}${shot}.webp" alt="${esc(s)}" loading="lazy" decoding="async"></button>`
        : '';
      return `<li${shot ? ' class="has-shot"' : ''}><p class="tut-step-text">${esc(s)}</p>${img}</li>`;
    });
    const tip = item.tip
      ? `<div class="tut-tip"><span class="tut-tip-icon" aria-hidden="true">💡</span><span><strong>${t('tip')}:</strong> ${esc(item.tip[lang])}</span></div>`
      : '';
    return (
      `<details class="tut-card" id="guide-${item.id}" data-group="${groupId}">` +
      `<summary class="tut-summary"><span class="tut-card-icon" aria-hidden="true">${item.icon}</span>` +
      `<span class="tut-card-text"><span class="tut-card-title">${esc(item.title[lang])}</span>` +
      `<span class="tut-card-summary">${item.summary ? esc(item.summary[lang]) : ''}</span></span>${badge}${chevron}</summary>` +
      `<div class="tut-detail"><div class="tut-detail-inner"><ol class="tut-steps">${lis.join('')}</ol>${tip}</div></div>` +
      `</details>`
    );
  };

  return GROUPS.map(
    (group) =>
      `\n<section class="tut-group" id="group-${group.id}" data-group="${group.id}">` +
      `<div class="tut-group-head"><span class="tut-group-icon" aria-hidden="true">${group.icon}</span><h2 class="tut-group-title">${esc(group.title[lang])}</h2></div>` +
      `<p class="tut-group-sub">${esc(group.sub[lang])}</p>\n` +
      group.items.map((item) => card(item, group.id)).join('\n') +
      `\n</section>`
  ).join('') + '\n';
}

function fillGuides(html, lang) {
  return html.replace(/(<!-- guides:[^>]*-->)[\s\S]*?(<!-- \/guides -->)/, (_, open, close) => open + renderGuides(lang) + close);
}

function translateTutorials(html, lang) {
  const t = (key) => UI[key][lang] || UI[key].en;
  html = html.replace(/(<(\w+)[^>]*\sdata-t="([^"]+)"[^>]*>)[\s\S]*?(<\/\2>)/g, (m, open, tag, key, close) =>
    UI[key] ? open + esc(t(key)) + close : m
  );
  return setMeta(html, t('doc.title'), t('doc.desc'));
}

// ----- Write -----
const home = read('index.html');
const tutorials = fillGuides(read('tutorials.html'), 'en');
write('tutorials.html', tutorials);

for (const lang of LANGS) {
  const page = (html) => markActiveLang(upOneLevel(html), lang);
  write(`${lang}/index.html`, page(setLangAndCanonical(translateHome(home, lang), lang, '')));
  write(`${lang}/tutorials.html`, page(setLangAndCanonical(translateTutorials(fillGuides(tutorials, lang), lang), lang, 'tutorials.html')));
}

console.log('Wrote tutorials.html and', LANGS.map((l) => `${l}/index.html, ${l}/tutorials.html`).join(', '));
