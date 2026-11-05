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

// ===== Localization (EN / UK / RU) =====
// mac.*, cta.*, footer.* and nav.tutorials/download match the classic page (script.js).
const translations = {
  en: {
    'doc.title': 'Events Notes — From first booking to your year in numbers',
    'doc.desc': 'Follow one shoot through Events Notes: create the event, plan the day, hit every deadline, and watch your statistics grow. For iPhone, iPad, and Mac.',
    'nav.tour': 'How it works',
    'nav.tutorials': 'Tutorials',
    'nav.download': 'Download',
    'hero.eyebrow': 'For iPhone, iPad & Mac',
    'hero.title': 'From the first booking<br />to your year in numbers',
    'hero.lead': 'Follow one real shoot through Events Notes — create it, plan the day, deliver on time, and watch your business grow.',
    'hero.start': 'Start the tour ↓',
    'ch.create': 'Create',
    'ch.details': 'Details',
    'ch.deadlines': 'Deadlines',
    'ch.stats': 'Statistics',
    'ch.contacts': 'Contacts',
    'k.create': 'Create event',
    'k.details': 'Event details',
    'k.deadlines': 'Deadlines',
    'k.stats': 'Statistics',
    'k.contacts': 'Contacts',
    's1.t': 'Start a new booking',
    's1.d': 'One tap on <em>+</em> from your schedule opens a new event.',
    's2.t': 'Fill in the essentials',
    's2.d': "Event type, date, hours, deadline and your client's contacts — typed once, never searched for again.",
    's3.t': 'Add references',
    's3.d': 'Drop in moodboards, details and client inspiration, so the whole vision lives right next to the booking.',
    's4.t': 'Location and price',
    's4.d': 'Save where the shoot happens, plus the full price and deposit — they feed your statistics later.',
    's5.t': 'Bring your team',
    's5.d': "Add a second shooter, videographer or makeup artist from your colleagues — everyone knows who's on the job.",
    's6.t': 'Plan the tasks',
    's6.d': 'A to-do list for every event: scouting, confirmations, batteries.',
    's7.t': 'Everything on one screen',
    's7.d': 'Time, place, price, deposit, notes and tasks. Call or message the client with a single tap.',
    's8.t': 'Check the sun',
    's8.d': "See the sun's path over your location on the event date — and know exactly when golden hour starts.",
    's9.t': 'Build the route',
    's9.d': 'Tap the address, choose <em>Create route</em>, and Apple Maps takes you there.',
    's10.t': 'Every delivery, counted down',
    's10.d': 'Days-left counters for each gallery and edit. The urgent ones turn red, so nothing slips.',
    's11.t': 'Mark it as done',
    's11.d': "Delivered the gallery? Press and hold, tap <em>Done</em>, and it's off your list.",
    's12.t': 'Your year at a glance',
    's12.d': 'Earnings, sessions and hours add up automatically from the events you create.',
    's13.t': 'Build your own charts',
    's13.d': 'Custom charts show what matters to your business — like which shoots fill your quarter.',
    's14.t': 'Every client in one list',
    's14.d': 'Clients from your events are saved automatically — colleagues get their own tab.',
    's15.t': 'Reach them in a tap',
    's15.d': 'Find a client and call, message or open their Instagram straight from their card.',
    'also.title': "And there's more inside",
    'also.sub': 'Everything else a busy season needs.',
    'a1': 'Apple & Google Calendar import',
    'a2': 'Home Screen widget',
    'a3': 'Event & deadline reminders',
    'a4': 'iCloud sync',
    'a5': 'Backups & restore',
    'a6': 'Shoot timelines',
    'a7': 'Prices & deposits',
    'mac.eyebrow': 'Also on macOS',
    'mac.title': 'Work with bookings on your Mac',
    'mac.lead': 'Create, edit, track events in a native Mac app — with everything kept in sync across iPhone, iPad, and Mac.',
    'mac.p1': 'Full-window calendar and event details',
    'mac.p2': 'Handle all features on the big screen',
    'mac.p3': 'Always in sync through iCloud',
    'cta.title': 'Ready to organize your next shoot?',
    'cta.text': 'Download Events Notes and bring your bookings, schedule, and clients together.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.support': 'Support',
    'footer.rights': 'All rights reserved.',
  },
  uk: {
    'doc.title': 'Events Notes — від першого бронювання до підсумків року',
    'doc.desc': 'Пройдіть одну зйомку в Events Notes: створіть подію, сплануйте день, встигніть до кожного дедлайну й дивіться, як росте статистика. Для iPhone, iPad і Mac.',
    'nav.tour': 'Як це працює',
    'nav.tutorials': 'Гайди',
    'nav.download': 'Завантажити',
    'hero.eyebrow': 'Для iPhone, iPad і Mac',
    'hero.title': 'Від першого бронювання<br />до підсумків року',
    'hero.lead': 'Пройдіть одну справжню зйомку в Events Notes — створіть її, сплануйте день, здайте вчасно й подивіться, як росте ваш бізнес.',
    'hero.start': 'Почати тур ↓',
    'ch.create': 'Створення',
    'ch.details': 'Деталі',
    'ch.deadlines': 'Дедлайни',
    'ch.stats': 'Статистика',
    'ch.contacts': 'Контакти',
    'k.create': 'Створення події',
    'k.details': 'Деталі події',
    'k.deadlines': 'Дедлайни',
    'k.stats': 'Статистика',
    'k.contacts': 'Контакти',
    's1.t': 'Нове бронювання',
    's1.d': 'Один дотик до <em>+</em> у розкладі — і нова подія відкрита.',
    's2.t': 'Заповніть головне',
    's2.d': 'Тип події, дата, години, дедлайн і контакти клієнта — вводите один раз і більше ніколи не шукаєте.',
    's3.t': 'Додайте референси',
    's3.d': 'Додайте мудборди, деталі та натхнення від клієнта — уся задумка зберігається поруч із бронюванням.',
    's4.t': 'Локація і ціна',
    's4.d': 'Збережіть місце зйомки, повну ціну й передоплату — згодом вони потраплять у статистику.',
    's5.t': 'Зберіть команду',
    's5.d': 'Додайте другого фотографа, відеографа чи візажиста з колег — усі знають, хто працює на події.',
    's6.t': 'Сплануйте завдання',
    's6.d': 'Список справ для кожної події: розвідка локації, підтвердження, акумулятори.',
    's7.t': 'Усе на одному екрані',
    's7.d': 'Час, місце, ціна, передоплата, нотатки й завдання. Дзвінок чи повідомлення клієнту — одним дотиком.',
    's8.t': 'Перевірте сонце',
    's8.d': 'Подивіться, як рухається сонце над локацією в день події, — і точно знайте, коли починається золота година.',
    's9.t': 'Прокладіть маршрут',
    's9.d': 'Торкніться адреси, оберіть <em>Create route</em> — і Apple Maps доведе вас на місце.',
    's10.t': 'Відлік до кожної здачі',
    's10.d': 'Лічильник днів до здачі кожної галереї та обробки. Термінові стають червоними — нічого не загубиться.',
    's11.t': 'Позначте як виконане',
    's11.d': 'Здали галерею? Затисніть картку, торкніться <em>Done</em> — і її більше немає у списку.',
    's12.t': 'Ваш рік з першого погляду',
    's12.d': 'Заробіток, зйомки й години підраховуються автоматично з ваших подій.',
    's13.t': 'Створюйте власні графіки',
    's13.d': 'Власні графіки показують те, що важливо для бізнесу, — наприклад, які зйомки заповнюють квартал.',
    's14.t': 'Усі клієнти в одному списку',
    's14.d': 'Клієнти з ваших подій зберігаються автоматично, а для колег є окрема вкладка.',
    's15.t': "Зв'язок одним дотиком",
    's15.d': 'Знайдіть клієнта й зателефонуйте, напишіть або відкрийте його Instagram просто з картки.',
    'also.title': 'І це ще не все',
    'also.sub': 'Усе інше, що потрібно в насичений сезон.',
    'a1': 'Імпорт з Apple і Google Календаря',
    'a2': 'Віджет на екрані «Додому»',
    'a3': 'Нагадування про події та дедлайни',
    'a4': 'Синхронізація iCloud',
    'a5': 'Резервні копії та відновлення',
    'a6': 'Таймлайни зйомок',
    'a7': 'Ціни та передоплати',
    'mac.eyebrow': 'Також на macOS',
    'mac.title': 'Повна картина — на вашому Mac',
    'mac.lead': 'Нативний застосунок для Mac дає вашим зйомкам, клієнтам і таймлайнам більше простору — і все синхронізується між iPhone, iPad і Mac.',
    'mac.p1': 'Календар і деталі події на весь екран',
    'mac.p2': 'Плануйте таймлайни зйомок на великому екрані',
    'mac.p3': 'Завжди синхронізовано через iCloud',
    'cta.title': 'Готові організувати наступну зйомку?',
    'cta.text': 'Завантажте Events Notes та зберіть бронювання, розклад і клієнтів разом.',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    'footer.support': 'Підтримка',
    'footer.rights': 'Усі права захищено.',
  },
  ru: {
    'doc.title': 'Events Notes — от первого бронирования до итогов года',
    'doc.desc': 'Пройдите одну съёмку в Events Notes: создайте событие, спланируйте день, успейте к каждому дедлайну и смотрите, как растёт статистика. Для iPhone, iPad и Mac.',
    'nav.tour': 'Как это работает',
    'nav.tutorials': 'Гайды',
    'nav.download': 'Скачать',
    'hero.eyebrow': 'Для iPhone, iPad и Mac',
    'hero.title': 'От первого бронирования<br />до итогов года',
    'hero.lead': 'Пройдите одну настоящую съёмку в Events Notes — создайте её, спланируйте день, сдайте вовремя и посмотрите, как растёт ваш бизнес.',
    'hero.start': 'Начать тур ↓',
    'ch.create': 'Создание',
    'ch.details': 'Детали',
    'ch.deadlines': 'Дедлайны',
    'ch.stats': 'Статистика',
    'ch.contacts': 'Контакты',
    'k.create': 'Создание события',
    'k.details': 'Детали события',
    'k.deadlines': 'Дедлайны',
    'k.stats': 'Статистика',
    'k.contacts': 'Контакты',
    's1.t': 'Новое бронирование',
    's1.d': 'Одно касание <em>+</em> в расписании — и новое событие открыто.',
    's2.t': 'Заполните главное',
    's2.d': 'Тип события, дата, часы, дедлайн и контакты клиента — вводите один раз и больше никогда не ищете.',
    's3.t': 'Добавьте референсы',
    's3.d': 'Добавьте мудборды, детали и вдохновение от клиента — весь замысел хранится рядом с бронированием.',
    's4.t': 'Локация и цена',
    's4.d': 'Сохраните место съёмки, полную цену и предоплату — позже они попадут в статистику.',
    's5.t': 'Соберите команду',
    's5.d': 'Добавьте второго фотографа, видеографа или визажиста из коллег — все знают, кто работает на событии.',
    's6.t': 'Спланируйте задачи',
    's6.d': 'Список дел для каждого события: разведка локации, подтверждения, аккумуляторы.',
    's7.t': 'Всё на одном экране',
    's7.d': 'Время, место, цена, предоплата, заметки и задачи. Звонок или сообщение клиенту — одним касанием.',
    's8.t': 'Проверьте солнце',
    's8.d': 'Посмотрите, как движется солнце над локацией в день события, — и точно знайте, когда начинается золотой час.',
    's9.t': 'Постройте маршрут',
    's9.d': 'Коснитесь адреса, выберите <em>Create route</em> — и Apple Maps доведёт вас до места.',
    's10.t': 'Отсчёт до каждой сдачи',
    's10.d': 'Счётчик дней до сдачи каждой галереи и обработки. Срочные становятся красными — ничего не упустите.',
    's11.t': 'Отметьте как выполненное',
    's11.d': 'Сдали галерею? Зажмите карточку, коснитесь <em>Done</em> — и её больше нет в списке.',
    's12.t': 'Ваш год с первого взгляда',
    's12.d': 'Заработок, съёмки и часы подсчитываются автоматически из ваших событий.',
    's13.t': 'Создавайте свои графики',
    's13.d': 'Собственные графики показывают то, что важно для бизнеса, — например, какие съёмки заполняют квартал.',
    's14.t': 'Все клиенты в одном списке',
    's14.d': 'Клиенты из ваших событий сохраняются автоматически, а для коллег есть отдельная вкладка.',
    's15.t': 'Связь одним касанием',
    's15.d': 'Найдите клиента и позвоните, напишите или откройте его Instagram прямо из карточки.',
    'also.title': 'И это ещё не всё',
    'also.sub': 'Всё остальное, что нужно в насыщенный сезон.',
    'a1': 'Импорт из Apple и Google Календаря',
    'a2': 'Виджет на домашнем экране',
    'a3': 'Напоминания о событиях и дедлайнах',
    'a4': 'Синхронизация iCloud',
    'a5': 'Резервные копии и восстановление',
    'a6': 'Таймлайны съёмок',
    'a7': 'Цены и предоплаты',
    'mac.eyebrow': 'Также на macOS',
    'mac.title': 'Полная картина — на вашем Mac',
    'mac.lead': 'Нативное приложение для Mac даёт вашим съёмкам, клиентам и таймлайнам больше пространства — и всё синхронизируется между iPhone, iPad и Mac.',
    'mac.p1': 'Календарь и детали события на весь экран',
    'mac.p2': 'Планируйте таймлайны съёмок на большом экране',
    'mac.p3': 'Всегда синхронизировано через iCloud',
    'cta.title': 'Готовы организовать следующую съёмку?',
    'cta.text': 'Скачайте Events Notes и соберите бронирования, расписание и клиентов вместе.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.support': 'Поддержка',
    'footer.rights': 'Все права защищены.',
  },
};

const SUPPORTED_LANGS = ['en', 'uk', 'ru'];

function applyLang(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  // strings with inline markup (<em>, <br>) come only from the dictionary above
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  if (dict['doc.title']) document.title = dict['doc.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['doc.desc']) metaDesc.setAttribute('content', dict['doc.desc']);

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem('lang', lang);
  } catch (e) {
    /* storage unavailable — ignore */
  }
  document.dispatchEvent(new Event('langchange'));
}

function detectLang() {
  let saved;
  try {
    saved = localStorage.getItem('lang');
  } catch (e) {
    /* ignore */
  }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser) ? browser : 'en';
}

document.querySelectorAll('.lang-btn').forEach((btn) =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

applyLang(detectLang());

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
  // the mobile caption is a copy of the active step, so refresh it after a language switch
  document.addEventListener('langchange', () => { caption.dataset.step = ''; update(); });
})();
