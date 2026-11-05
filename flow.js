// ===== Flow concept: scroll-driven app tour =====

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

document.getElementById('year').textContent = new Date().getFullYear();

(function initTour() {
  const wrap = document.querySelector('.screen-wrap');
  const tapDot = wrap.querySelector('.tap');
  const dim = wrap.querySelector('.dim');
  const newSheet = wrap.querySelector('.sheet[data-l="new"]');
  const steps = Array.from(document.querySelectorAll('.step'));
  const chapters = Array.from(document.querySelectorAll('.chapter'));
  const progressBar = document.querySelector('.chapters-progress');
  const stepsEl = document.querySelector('.steps');
  const caption = document.querySelector('.phone-caption');
  const mobileMq = window.matchMedia('(max-width: 860px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const LAST = steps.length;
  const CHAPTER_START = [1, 7, 10, 12, 14];
  // Which full screen is underneath, and which sheets are up, for every step
  const BASE = ['schedule', 'schedule', 'schedule', 'schedule', 'schedule', 'schedule', 'schedule', 'schedule', 'schedule', 'maps', 'deadlines', 'deadlines', 'stats', 'stats', 'contacts', 'contacts'];
  const SHEETS = [[], ['new'], ['new'], ['new'], ['new'], ['new'], ['new'], ['details'], ['details', 'sun'], [], [], [], [], [], [], []];
  const TAB = { 1: 'main', 2: 'main', 3: 'gallery', 4: 'main', 5: 'team', 6: 'todo' };
  const SUN_FRAMES = 14;

  let scale = 0.8;
  let current = 0;
  let token = 0;
  const applied = new Set();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const $ = (sel) => wrap.querySelector(sel);
  const $$ = (sel) => Array.from(wrap.querySelectorAll(sel));
  const layer = (name) => wrap.querySelector(`[data-l="${name}"]`);

  // ----- Phone sizing -----
  function fit() {
    const top = 64 + 52;
    const mobile = mobileMq.matches;
    const avail = window.innerHeight - top;
    const h = mobile ? avail - 14 - 150 : (avail - 48) * 0.86; // mobile leaves room for the caption
    const w = mobile ? window.innerWidth - 32 : Infinity;
    scale = Math.max(0.33, Math.min(1, h / 976, w / 460));
    // distance from the chapter bar to the top edge of the device, used to pin step text to it
    const gap = mobile ? 14 : (avail - 976 * scale) / 2;
    document.documentElement.style.setProperty('--s', scale.toFixed(4));
    document.documentElement.style.setProperty('--phone-gap', gap.toFixed(1) + 'px');
  }

  // ----- Screen state -----
  function show(base, sheets) {
    $$('.layer').forEach((el) => el.classList.toggle('on', el.dataset.l === base));
    $$('.sheet:not([data-l="contact"])').forEach((el) => el.classList.toggle('on', sheets.includes(el.dataset.l)));
    dim.classList.toggle('on', sheets.length > 0);
  }

  // Tap indicator on an element, or on [x, y] in screen points
  async function tap(target, hold = false) {
    let x, y;
    if (Array.isArray(target)) {
      [x, y] = target;
    } else {
      const r = target.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();
      x = (r.left + r.width / 2 - w.left) / scale;
      y = (r.top + r.height / 2 - w.top) / scale;
    }
    tapDot.style.left = x + 'px';
    tapDot.style.top = y + 'px';
    tapDot.classList.remove('go', 'hold');
    void tapDot.offsetWidth;
    tapDot.classList.add(hold ? 'hold' : 'go');
    await sleep(hold ? 700 : 380);
  }

  // ----- Typing & counting -----
  async function typeStep(n, my) {
    for (const el of $$(`[data-ts="${n}"]`)) {
      const text = el.dataset.text;
      if (el.classList.contains('swap')) {
        el.classList.add('flash');
        await sleep(200);
        if (my !== token) return;
        el.textContent = text;
        el.classList.remove('flash');
        await sleep(160);
        continue;
      }
      el.classList.add('typing');
      for (let i = 1; i <= text.length; i++) {
        if (my !== token) { el.classList.remove('typing'); return; }
        el.textContent = text.slice(0, i);
        await sleep(34 + Math.random() * 30);
      }
      el.classList.remove('typing');
      await sleep(140);
    }
  }
  const fillStep = (n) => $$(`[data-ts="${n}"]`).forEach((el) => {
    el.textContent = el.dataset.text;
    el.classList.remove('typing', 'flash');
  });
  const clearStep = (n) => $$(`[data-ts="${n}"]`).forEach((el) => {
    el.textContent = el.dataset.from || '';
    el.classList.remove('typing', 'flash');
  });

  const fmt = (v) => Math.round(v).toLocaleString('en-US');
  function countStep(n, animate, delay = 0) {
    $$(`[data-cs="${n}"]`).forEach((el) => {
      const to = Number(el.dataset.to);
      if (!animate) { el.textContent = fmt(to); return; }
      el.textContent = '0';
      const dur = to > 1000 ? 1800 : 1100;
      let start = null;
      const frame = (t) => {
        if (!applied.has(n)) return;
        if (start === null) start = t + delay;
        const p = Math.min(1, Math.max(0, (t - start) / dur));
        el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    });
  }
  const zeroStep = (n) => $$(`[data-cs="${n}"]`).forEach((el) => { el.textContent = '0'; });

  // ----- Sun Track: real frames from the app, cross-faded -----
  const frameSets = $$('.frames');
  frameSets.forEach((set) => {
    for (let i = 0; i < SUN_FRAMES; i++) {
      const img = document.createElement('img');
      img.alt = '';
      img.dataset.src = `assets/flow/sun/${set.dataset.f}${String(i).padStart(2, '0')}.webp`;
      set.appendChild(img);
    }
  });
  let framesLoaded = false;
  function loadFrames() {
    if (framesLoaded) return;
    framesLoaded = true;
    frameSets.forEach((set) => set.querySelectorAll('img').forEach((img) => { img.src = img.dataset.src; }));
  }
  function setFrame(k) {
    frameSets.forEach((set) => set.querySelectorAll('img').forEach((img, i) => img.classList.toggle('on', i === k)));
  }
  async function playSun(animate, my) {
    loadFrames();
    if (!animate) { setFrame(SUN_FRAMES - 1); return; }
    setFrame(0);
    await sleep(700);
    for (let k = 1; k < SUN_FRAMES; k++) {
      if (my !== token) return;
      setFrame(k);
      await sleep(190);
    }
  }

  // ----- Statistics donut (Shoots by type for quarter) -----
  const TOTAL = 22, R_OUT = 147.5, R_IN = 90.5, GAP = 2.4;
  const donutSegs = $$('.donut path').map((p) => {
    const [from, count] = p.dataset.seg.split(' ').map(Number);
    return { p, a0: (from / TOTAL) * 360, a1: ((from + count) / TOTAL) * 360 };
  });
  const pt = (r, a) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return `${(r * Math.cos(rad)).toFixed(2)} ${(r * Math.sin(rad)).toFixed(2)}`;
  };
  function drawDonut(sweep) {
    donutSegs.forEach(({ p, a0, a1 }) => {
      const s = a0 + GAP / 2, e = Math.min(a1 - GAP / 2, sweep);
      if (e <= s) { p.setAttribute('d', ''); return; }
      const large = e - s > 180 ? 1 : 0;
      p.setAttribute('d', `M${pt(R_OUT, s)}A${R_OUT} ${R_OUT} 0 ${large} 1 ${pt(R_OUT, e)}L${pt(R_IN, e)}A${R_IN} ${R_IN} 0 ${large} 0 ${pt(R_IN, s)}Z`);
    });
  }
  async function growDonut(animate, my) {
    if (!animate) { drawDonut(360); return; }
    drawDonut(0);
    await sleep(800);
    let start = null;
    const frame = (t) => {
      if (my !== token) { if (applied.has(13)) drawDonut(360); return; }
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / 1300);
      drawDonut(360 * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  // ----- Per-step behaviour -----
  // PRE: taps that lead into a step (only when scrolling forward one step)
  const PRE = {
    1: () => tap($('.js-plus')),
    3: () => tap($('.js-tab[data-t="gallery"]')),
    4: () => tap($('.js-tab[data-t="main"]')),
    5: () => tap($('.js-tab[data-t="team"]')),
    6: () => tap($('.js-tab[data-t="todo"]')),
    7: () => tap($('.js-save')),
    8: () => tap($('.js-sun')),
    9: async (my) => {
      await tap($('.js-sunclose'));
      if (my !== token) return;
      show('schedule', ['details']);
      await sleep(650);
      if (my !== token) return;
      await tap($('.js-loc'));
      wrap.classList.add('menu');
      await sleep(700);
      if (my !== token) return;
      await tap($('.js-route'));
      wrap.classList.remove('menu');
      await sleep(250);
      wrap.classList.add('chooser-open');
      await sleep(700);
      if (my !== token) return;
      await tap($('.js-maps'));
    },
    12: () => tap([361, 904]),
    14: () => tap([267, 904]),
  };

  const APPLY = {
    2: (anim, my) => (anim ? typeStep(2, my) : fillStep(2)),
    3: async (anim, my) => {
      const card = $('.panel[data-p="gallery"] .grow');
      if (!anim) { card.classList.add('open'); return; }
      await sleep(450);
      if (my !== token) return;
      await tap($('.js-addimg'));
      card.classList.add('open');
    },
    4: async (anim, my) => {
      if (!anim) { fillStep(4); return; }
      await sleep(900);
      if (my === token) typeStep(4, my);
    },
    5: async (anim, my) => {
      const card = $('.panel[data-p="team"] .grow');
      if (!anim) { card.classList.add('open'); return; }
      await sleep(400);
      if (my !== token) return;
      await tap($('.panel[data-p="team"] .ui'));
      card.classList.add('open');
    },
    6: async (anim, my) => {
      const card = $('.panel[data-p="todo"] .grow');
      card.classList.add('open');
      if (!anim) { fillStep(6); return; }
      await sleep(500);
      if (my === token) typeStep(6, my);
    },
    8: (anim, my) => playSun(anim, my),
    10: (anim) => countStep(10, anim, 300),
    11: async (anim, my) => {
      if (!anim) { wrap.classList.add('done'); return; }
      await sleep(400);
      if (my !== token) return;
      await tap($('.dl-card.first'), true);
      if (my !== token) return;
      wrap.classList.add('press');
      await sleep(900);
      if (my !== token) return;
      await tap($('.js-done'));
      wrap.classList.remove('press');
      wrap.classList.add('done');
    },
    12: (anim) => countStep(12, anim, 200),
    13: (anim, my) => { countStep(13, anim, 900); growDonut(anim, my); },
    15: async (anim, my) => {
      const sheet = layer('contact');
      if (!anim) {
        fillStep(15);
        wrap.classList.add('filtered');
        sheet.classList.add('on');
        dim.classList.add('on');
        return;
      }
      await sleep(300);
      if (my !== token) return;
      await typeStep(15, my);
      if (my !== token) return;
      wrap.classList.add('filtered');
      await sleep(700);
      if (my !== token) return;
      await tap($('.ct-card'));
      sheet.classList.add('on');
      dim.classList.add('on');
    },
  };

  const RESET = {
    2: () => clearStep(2),
    3: () => $('.panel[data-p="gallery"] .grow').classList.remove('open'),
    4: () => clearStep(4),
    5: () => $('.panel[data-p="team"] .grow').classList.remove('open'),
    6: () => { clearStep(6); $('.panel[data-p="todo"] .grow').classList.remove('open'); },
    8: () => setFrame(0),
    10: () => zeroStep(10),
    11: () => wrap.classList.remove('press', 'done'),
    12: () => zeroStep(12),
    13: () => { zeroStep(13); drawDonut(0); },
    15: () => {
      clearStep(15);
      wrap.classList.remove('filtered');
      layer('contact').classList.remove('on');
      dim.classList.remove('on');
    },
  };

  async function go(step) {
    if (step === current) return;
    const prev = current;
    current = step;
    const my = ++token;
    const forward = !reduced && step === prev + 1;

    // a step that was still animating jumps to its finished state
    if (applied.has(prev) && prev < step && APPLY[prev]) APPLY[prev](false, my);
    if (step >= 5) loadFrames();

    if (forward && PRE[step]) {
      await PRE[step](my);
      if (my !== token) return;
    }

    wrap.classList.remove('menu', 'chooser-open');
    show(BASE[step], SHEETS[step]);
    if (TAB[step]) newSheet.dataset.tab = TAB[step];

    for (let n = 1; n <= LAST; n++) {
      if (n <= step && !applied.has(n)) {
        applied.add(n);
        wrap.classList.add('r-' + n);
        if (APPLY[n]) APPLY[n](forward && n === step, my);
      } else if (n > step && applied.has(n)) {
        applied.delete(n);
        wrap.classList.remove('r-' + n);
        if (RESET[n]) RESET[n]();
      }
    }
  }

  // ----- Scroll tracking -----
  function update() {
    const mobile = mobileMq.matches;
    const line = window.innerHeight * (mobile ? 0.7 : 0.62);
    let active = 0;
    steps.forEach((el, i) => {
      const card = el.firstElementChild.getBoundingClientRect();
      if (card.top + card.height / 2 <= line) active = i + 1;
    });
    steps.forEach((el, i) => el.classList.toggle('is-active', i + 1 === active));
    const captionStep = Math.max(1, active);
    if (caption.dataset.step !== String(captionStep)) {
      caption.dataset.step = captionStep;
      caption.innerHTML = steps[captionStep - 1].firstElementChild.innerHTML;
      caption.classList.remove('swap');
      void caption.offsetWidth;
      caption.classList.add('swap');
    }

    const chapter = CHAPTER_START.reduce((c, s, i) => (active >= s ? i : c), -1);
    chapters.forEach((el, i) => {
      el.classList.toggle('is-active', i === chapter);
      el.classList.toggle('is-done', i < chapter);
    });

    const r = stepsEl.getBoundingClientRect();
    const lastTop = steps[steps.length - 1].getBoundingClientRect().top - r.top;
    const p = Math.min(1, Math.max(0, (line - r.top - steps[0].offsetTop) / (lastTop - steps[0].offsetTop + 1)));
    progressBar.style.setProperty('--progress', p.toFixed(4));

    go(active);
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; update(); });
  }

  chapters.forEach((btn, i) =>
    btn.addEventListener('click', () => {
      steps[CHAPTER_START[i] - 1].firstElementChild.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' });
    })
  );

  newSheet.dataset.tab = 'main';
  show('schedule', []);
  drawDonut(0);
  fit();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { fit(); update(); });
})();
