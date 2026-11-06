// Writes the static pages search engines and AI crawlers read without running JavaScript:
//   index.html, faq.html         — schema.org data (app and organization; FAQ) between the <!-- schema --> markers
//   tutorials.html               — English guides filled in between the <!-- guides --> markers
//   uk/index.html, ru/index.html — the home page with flow.js's translations applied
//   uk/faq.html, ru/faq.html     — the FAQ page, also from flow.js's translations
//   uk/tutorials.html, ru/tutorials.html — the tutorials with tutorials.js's guides
// uk/about.html and ru/about.html are written by hand.
// Run after changing index.html, faq.html, tutorials.html, the translations in flow.js or the guides in tutorials.js:
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
const APP_STORE = 'https://apps.apple.com/ua/app/events-notes/id1666326813';
// From the App Store listing
const APP_LANGS = ['en', 'uk', 'ru', 'ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'th', 'tr', 'vi', 'zh'];
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
const LOCALIZED = /^(index|tutorials|faq|about)\.html(#.*)?$/;
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

// ----- Home and FAQ pages -----
function translatePage(html, lang, titleKey, descKey) {
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
  return setMeta(html, dict[titleKey], dict[descKey]);
}

// schema.org data in the page's language: the app and organization on the home page,
// the questions on the FAQ page (from the faq.* strings, so they always match what's shown)
function fillSchema(html, lang, page) {
  const dict = translations[lang];
  const pageUrl = SITE + (lang === 'en' ? '' : `${lang}/`) + page;
  const faq = Object.keys(dict)
    .filter((k) => /^faq\.q\d+$/.test(k))
    .map((k) => ({
      '@type': 'Question',
      name: dict[k],
      acceptedAnswer: { '@type': 'Answer', text: dict[k.replace('.q', '.a')] },
    }));
  const home = [
    {
      '@type': 'Organization',
      '@id': `${SITE}#org`,
      name: 'Events Notes',
      url: SITE,
      logo: `${SITE}assets/app-icon.png`,
      email: 'eventnoteapp@gmail.com',
      founder: { '@type': 'Person', name: 'Volodymyr Pysarenko' },
    },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE}#app`,
      name: 'Events Notes',
      alternateName: ['Event Notes: Shoot Planner CRM', 'EventNote'],
      description: dict['faq.a1'],
      url: pageUrl,
      installUrl: APP_STORE,
      image: `${SITE}assets/app-icon.png`,
      operatingSystem: 'iOS 18.0 or later, iPadOS, macOS',
      applicationCategory: 'BusinessApplication',
      datePublished: '2023-01-19',
      inLanguage: APP_LANGS,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: { '@type': 'Person', name: 'Volodymyr Pysarenko' },
      publisher: { '@id': `${SITE}#org` },
    },
  ];
  const faqPage = [
    { '@type': 'FAQPage', '@id': pageUrl, url: pageUrl, inLanguage: lang, about: { '@id': `${SITE}#app` }, mainEntity: faq },
  ];
  const data = { '@context': 'https://schema.org', '@graph': page === 'faq.html' ? faqPage : home };
  const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c').replace(/^/gm, '  ');
  return html.replace(
    /(<!-- schema:[^>]*-->)[\s\S]*?(<!-- \/schema -->)/,
    (_, open, close) => `${open}\n  <script type="application/ld+json">\n${json}\n  </script>\n  ${close}`
  );
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
const home = fillSchema(read('index.html'), 'en', '');
write('index.html', home);
const faq = fillSchema(read('faq.html'), 'en', 'faq.html');
write('faq.html', faq);
const tutorials = fillGuides(read('tutorials.html'), 'en');
write('tutorials.html', tutorials);

for (const lang of LANGS) {
  const page = (html) => markActiveLang(upOneLevel(html), lang);
  write(`${lang}/index.html`, page(setLangAndCanonical(fillSchema(translatePage(home, lang, 'doc.title', 'doc.desc'), lang, ''), lang, '')));
  write(`${lang}/faq.html`, page(setLangAndCanonical(fillSchema(translatePage(faq, lang, 'faq.doc.title', 'faq.doc.desc'), lang, 'faq.html'), lang, 'faq.html')));
  write(`${lang}/tutorials.html`, page(setLangAndCanonical(translateTutorials(fillGuides(tutorials, lang), lang), lang, 'tutorials.html')));
}

console.log('Wrote index.html, faq.html, tutorials.html and', LANGS.map((l) => `${l}/index.html, ${l}/faq.html, ${l}/tutorials.html`).join(', '));
