// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close the mobile menu after tapping a link
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Testimonials carousel =====
(function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  const viewport = carousel.querySelector('.carousel-viewport');
  const slides = Array.from(track.children);
  const dotsWrap = document.querySelector('.carousel-dots');
  let index = 0;
  let pages = 1;

  function perView() {
    const v = parseInt(getComputedStyle(carousel).getPropertyValue('--per-view'), 10);
    return v > 0 ? v : 1;
  }

  function build() {
    pages = Math.ceil(slides.length / perView());
    index = Math.min(index, pages - 1);

    dotsWrap.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }

    // Hide dots when everything already fits in one view
    dotsWrap.hidden = pages <= 1;

    goTo(index);
  }

  function goTo(i) {
    index = (i + pages) % pages;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const offset = index * (viewport.clientWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    Array.from(dotsWrap.children).forEach((d, di) =>
      d.classList.toggle('is-active', di === index)
    );
  }

  window.addEventListener('resize', build);

  build();
})();

// ===== Localization (EN / UK / RU) =====
const translations = {
  en: {
    'doc.title': 'Events Notes — The all-in-one app for photographers & production pros',
    'doc.desc': 'Events Notes helps photographers, videographers, and production teams manage bookings, schedules, shoot timelines, clients, and analytics. For iPhone, iPad, and Mac.',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.why': 'Why Events Notes',
    'nav.reviews': 'Reviews',
    'nav.download': 'Download',
    'hero.title': 'Never lose an event detail again',
    'hero.lead': 'Events Notes is the all-in-one app for photographers, videographers, and production teams — bookings, schedules, shoot timelines, clients, and analytics, all in one place.',
    'hero.see': 'See what it does ↓',
    'hero.platforms': 'For iPhone, iPad & Mac · 15 languages',
    'features.title': 'Everything a shoot needs',
    'features.sub': 'Built around how photographers and production crews actually work.',
    'f.events.t': 'Events & bookings',
    'f.events.d': 'Create and organize every shoot with full details, locations, and notes.',
    'f.deadlines.t': 'Deadlines & countdowns',
    'f.deadlines.d': 'Calendar view with days-remaining tracking so nothing slips through.',
    'f.timelines.t': 'Shoot timelines',
    'f.timelines.d': 'Break each shoot into time-based stages, tasks, and descriptions.',
    'f.contacts.t': 'Client contacts',
    'f.contacts.d': 'Keep phone, Telegram, Instagram, and website for every client.',
    'f.suntrack.t': 'Sun Track',
    'f.suntrack.d': "See the sun's position and path for perfect natural-light planning.",
    'f.locations.t': 'Locations & routes',
    'f.locations.d': 'Save shoot locations on the map and build routes to get there.',
    'f.createroute.t': 'Create Route',
    'f.createroute.d': 'Create a route directly from the app.',
    'f.analytics.t': 'Analytics',
    'f.analytics.d': 'Track earnings, sessions, and hours across the year at a glance.',
    'f.widget.t': 'Home Screen widget',
    'f.widget.d': 'Upcoming events on your Home Screen, always one glance away.',
    'f.gcal.t': 'Google Calendar import',
    'f.gcal.d': 'Bring existing events straight in from Google Calendar.',
    'f.icloud.t': 'iCloud sync',
    'f.icloud.d': 'Your data, in sync across iPhone, iPad, and Mac.',
    'f.reminders.t': 'Reminders',
    'f.reminders.d': 'Local notifications for events and deadlines — no account needed.',
    'shots.title': 'See it in action',
    'shots.sub': 'A clean, native interface on every Apple device.',
    'shots.createevent': 'Create event',
    'shots.deadlines': 'Deadlines',
    'shots.contacts': 'Contacts',
    'shots.suntrack': 'Sun Track',
    'shots.analytics': 'Analytics',
    'mac.eyebrow': 'Also on macOS',
    'mac.title': 'Work with bookings on your Mac',
    'mac.lead': 'Create, edit, track events in a native Mac app — with everything kept in sync across iPhone, iPad, and Mac.',
    'mac.p1': 'Full-window calendar and event details',
    'mac.p2': 'Handle all features on the big screen',
    'mac.p3': 'Always in sync through iCloud',
    'why.title': 'Why Events Notes',
    'why.sub': 'Built for the way you actually work.',
    'why.place.t': 'Everything in one place',
    'why.place.d': 'Replace paper notebooks, Notes, and chat threads with a single home for every event.',
    'why.search.t': 'See your business clearly',
    'why.search.d': 'Built-in statistics show your busiest seasons, top services, and real growth.',
    'why.track.t': 'Nothing slips through',
    'why.track.d': 'Notes, deadlines, and client requests captured and reminded at the right moment.',
    'why.pro.t': 'Work with confidence',
    'why.pro.d': 'Walk into every event knowing it\'s all under control.',
    'reviews.title': 'Why photographers use Events Notes',
    'reviews.sub': 'Real words from photographers who switched to Events Notes.',
    'reviews.1.headline': '"Calm knowing all my info is in one place."',
    'reviews.1.quote': 'I used to keep my shoots in a notebook — flipping pages every time to find a date and the couple, and once I forgot a detail a client had agreed on. Now everything\'s laid out clearly: time, location, names. The handiest app for a photographer, it covers every need — I\'m calm that I won\'t forget a thing.',
    'reviews.1.name': 'Photographer',
    'reviews.1.role': 'Previously used a notebook',
    'reviews.2.headline': '"Tap the location — and drive there by GPS."',
    'reviews.2.quote': 'I kept everything in Notes, until two shoots overlapped on the same day. Now the client is easy to find — Insta and Telegram right at hand — and the location opens in my navigator with a single tap. A handy planner where you truly won\'t forget anything.',
    'reviews.2.name': 'Photographer',
    'reviews.2.role': 'Previously used Notes',
    'reviews.3.headline': '"No more lugging a notebook around."',
    'reviews.3.quote': 'It\'s always easy to keep my schedule, hold on to client links, and track my income — all in my phone, not on paper that\'s never there when you need it.',
    'reviews.3.name': 'Photographer',
    'reviews.3.role': 'Previously used a notebook',
    'cta.title': 'Ready to organize your next shoot?',
    'cta.text': 'Download Events Notes and bring your bookings, schedule, and clients together.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.support': 'Support',
    'footer.rights': 'All rights reserved.',
  },
  uk: {
    'doc.title': 'Events Notes — універсальний застосунок для фотографів і продакшн-профі',
    'doc.desc': 'Events Notes допомагає фотографам, відеографам і продакшн-командам керувати бронюваннями, розкладами, таймлайнами зйомок, клієнтами та аналітикою. Для iPhone, iPad і Mac.',
    'nav.features': 'Можливості',
    'nav.screenshots': 'Скриншоти',
    'nav.why': 'Чому Events Notes',
    'nav.reviews': 'Відгуки',
    'nav.download': 'Завантажити',
    'hero.title': 'Керуйте зйомками як профі.',
    'hero.lead': 'Events Notes — універсальний застосунок для фотографів, відеографів і продакшн-команд: бронювання, розклади, таймлайни зйомок, клієнти та аналітика в одному місці.',
    'hero.see': 'Подивитися можливості ↓',
    'hero.platforms': 'Для iPhone, iPad і Mac · 15 мов',
    'features.title': 'Усе, що потрібно для зйомки',
    'features.sub': 'Створено з урахуванням реальної роботи фотографів і знімальних команд.',
    'f.events.t': 'Події та бронювання',
    'f.events.d': 'Створюйте й організовуйте кожну зйомку з деталями, локаціями та нотатками.',
    'f.deadlines.t': 'Дедлайни та зворотний відлік',
    'f.deadlines.d': 'Календар із підрахунком днів, що залишилися, щоб нічого не пропустити.',
    'f.timelines.t': 'Таймлайни зйомок',
    'f.timelines.d': 'Розбивайте кожну зйомку на етапи за часом, завдання й описи.',
    'f.contacts.t': 'Контакти клієнтів',
    'f.contacts.d': 'Зберігайте телефон, Telegram, Instagram і сайт кожного клієнта.',
    'f.suntrack.t': 'Трекер сонця',
    'f.suntrack.d': 'Дивіться положення та шлях сонця для ідеального планування природного світла.',
    'f.locations.t': 'Локації та маршрути',
    'f.locations.d': 'Зберігайте локації зйомок на карті та прокладайте маршрути до них.',
    'f.createroute.t': 'Створення маршруту',
    'f.createroute.d': 'Створюйте маршрут прямо із застосунку.',
    'f.analytics.t': 'Аналітика',
    'f.analytics.d': 'Відстежуйте дохід, сесії та години за рік одним поглядом.',
    'f.widget.t': 'Віджет на екрані «Додому»',
    'f.widget.d': 'Найближчі події на екрані «Додому» — завжди під рукою.',
    'f.gcal.t': 'Імпорт із Google Календаря',
    'f.gcal.d': 'Переносьте наявні події напряму з Google Календаря.',
    'f.icloud.t': 'Синхронізація iCloud',
    'f.icloud.d': 'Ваші дані синхронізовані між iPhone, iPad і Mac.',
    'f.reminders.t': 'Нагадування',
    'f.reminders.d': 'Локальні сповіщення про події та дедлайни — без облікового запису.',
    'shots.title': 'Подивіться в дії',
    'shots.sub': 'Чистий, нативний інтерфейс на кожному пристрої Apple.',
    'shots.createevent': 'Створення події',
    'shots.deadlines': 'Дедлайни',
    'shots.contacts': 'Контакти',
    'shots.suntrack': 'Sun Track',
    'shots.analytics': 'Аналітика',
    'mac.eyebrow': 'Також на macOS',
    'mac.title': 'Повна картина — на вашому Mac',
    'mac.lead': 'Нативний застосунок для Mac дає вашим зйомкам, клієнтам і таймлайнам більше простору — і все синхронізується між iPhone, iPad і Mac.',
    'mac.p1': 'Календар і деталі події на весь екран',
    'mac.p2': 'Плануйте таймлайни зйомок на великому екрані',
    'mac.p3': 'Завжди синхронізовано через iCloud',
    'why.title': 'Чому Events Notes',
    'why.sub': 'Створено під те, як ви насправді працюєте.',
    'why.place.t': 'Усе в одному місці',
    'why.place.d': 'Замініть паперові записники, Нотатки й чати єдиним домом для кожної події.',
    'why.search.t': 'Бачте свій бізнес ясно',
    'why.search.d': 'Вбудована статистика показує найзавантаженіші сезони, топ-послуги та реальне зростання.',
    'why.track.t': 'Нічого не загубиться',
    'why.track.d': 'Нотатки, дедлайни та побажання клієнтів зафіксовані з нагадуванням у потрібний момент.',
    'why.pro.t': 'Працюйте впевнено',
    'why.pro.d': 'Приходьте на кожну подію, знаючи, що все під контролем.',
    'reviews.title': 'Чому фотографи використовують Events Notes',
    'reviews.sub': 'Справжні відгуки фотографів, які перейшли на Events Notes.',
    'reviews.1.headline': '«Спокійна, що вся інформація в одному місці.»',
    'reviews.1.quote': 'Раніше вела зйомки в блокноті — щоразу гортала сторінки, шукала дату й пару, і одного разу забула узгоджену деталь клієнта. Тепер усе чітко розписано: час, локація, імена. Найзручніший додаток для фотографа, який закриває всі потреби — спокійна, що нічого не забуду.',
    'reviews.1.name': 'Фотограф',
    'reviews.1.role': 'раніше вела в блокноті',
    'reviews.2.headline': '«Тицьнув на локацію — і поїхав за навігатором.»',
    'reviews.2.quote': 'Вів усе в Нотатках, поки дві зйомки не наклалися на один день. Тепер замовника знайти легко — інста, телеграм одразу під рукою, локація відкривається в навігаторі одним дотиком. Зручний планер, де точно нічого не забудеш.',
    'reviews.2.name': 'Фотограф',
    'reviews.2.role': 'раніше вів у Нотатках',
    'reviews.3.headline': '«Більше не треба тягати блокнот із собою.»',
    'reviews.3.quote': 'Завжди зручно вести свій розпорядок, тримати посилання на клієнтів і відслідковувати прибуток — усе в телефоні, а не на папері, якого вічно немає під рукою.',
    'reviews.3.name': 'Фотограф',
    'reviews.3.role': 'раніше вів у блокноті',
    'cta.title': 'Готові організувати наступну зйомку?',
    'cta.text': 'Завантажте Events Notes та зберіть бронювання, розклад і клієнтів разом.',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    'footer.support': 'Підтримка',
    'footer.rights': 'Усі права захищено.',
  },
  ru: {
    'doc.title': 'Events Notes — универсальное приложение для фотографов и продакшн-профи',
    'doc.desc': 'Events Notes помогает фотографам, видеографам и продакшн-командам управлять бронированиями, расписаниями, таймлайнами съёмок, клиентами и аналитикой. Для iPhone, iPad и Mac.',
    'nav.features': 'Возможности',
    'nav.screenshots': 'Скриншоты',
    'nav.why': 'Почему Events Notes',
    'nav.reviews': 'Отзывы',
    'nav.download': 'Скачать',
    'hero.title': 'Управляйте съёмками как профи.',
    'hero.lead': 'Events Notes — универсальное приложение для фотографов, видеографов и продакшн-команд: бронирования, расписания, таймлайны съёмок, клиенты и аналитика в одном месте.',
    'hero.see': 'Посмотреть возможности ↓',
    'hero.platforms': 'Для iPhone, iPad и Mac · 15 языков',
    'features.title': 'Всё, что нужно для съёмки',
    'features.sub': 'Создано с учётом реальной работы фотографов и съёмочных команд.',
    'f.events.t': 'События и бронирования',
    'f.events.d': 'Создавайте и организуйте каждую съёмку с деталями, локациями и заметками.',
    'f.deadlines.t': 'Дедлайны и обратный отсчёт',
    'f.deadlines.d': 'Календарь с подсчётом оставшихся дней, чтобы ничего не упустить.',
    'f.timelines.t': 'Таймлайны съёмок',
    'f.timelines.d': 'Разбивайте каждую съёмку на этапы по времени, задачи и описания.',
    'f.contacts.t': 'Контакты клиентов',
    'f.contacts.d': 'Храните телефон, Telegram, Instagram и сайт каждого клиента.',
    'f.suntrack.t': 'Трекер солнца',
    'f.suntrack.d': 'Смотрите положение и путь солнца для идеального планирования естественного света.',
    'f.locations.t': 'Локации и маршруты',
    'f.locations.d': 'Сохраняйте локации съёмок на карте и прокладывайте маршруты к ним.',
    'f.createroute.t': 'Создание маршрута',
    'f.createroute.d': 'Создавайте маршрут прямо из приложения.',
    'f.analytics.t': 'Аналитика',
    'f.analytics.d': 'Отслеживайте доход, сессии и часы за год одним взглядом.',
    'f.widget.t': 'Виджет на домашнем экране',
    'f.widget.d': 'Ближайшие события на домашнем экране — всегда под рукой.',
    'f.gcal.t': 'Импорт из Google Календаря',
    'f.gcal.d': 'Переносите существующие события напрямую из Google Календаря.',
    'f.icloud.t': 'Синхронизация iCloud',
    'f.icloud.d': 'Ваши данные синхронизированы между iPhone, iPad и Mac.',
    'f.reminders.t': 'Напоминания',
    'f.reminders.d': 'Локальные уведомления о событиях и дедлайнах — без учётной записи.',
    'shots.title': 'Посмотрите в действии',
    'shots.sub': 'Чистый, нативный интерфейс на каждом устройстве Apple.',
    'shots.createevent': 'Создание события',
    'shots.deadlines': 'Дедлайны',
    'shots.contacts': 'Контакты',
    'shots.suntrack': 'Sun Track',
    'shots.analytics': 'Аналитика',
    'mac.eyebrow': 'Также на macOS',
    'mac.title': 'Полная картина — на вашем Mac',
    'mac.lead': 'Нативное приложение для Mac даёт вашим съёмкам, клиентам и таймлайнам больше пространства — и всё синхронизируется между iPhone, iPad и Mac.',
    'mac.p1': 'Календарь и детали события на весь экран',
    'mac.p2': 'Планируйте таймлайны съёмок на большом экране',
    'mac.p3': 'Всегда синхронизировано через iCloud',
    'why.title': 'Почему Events Notes',
    'why.sub': 'Создано под то, как вы действительно работаете.',
    'why.place.t': 'Всё в одном месте',
    'why.place.d': 'Замените бумажные блокноты, Заметки и чаты единым домом для каждого события.',
    'why.search.t': 'Видьте свой бизнес ясно',
    'why.search.d': 'Встроенная статистика показывает самые загруженные сезоны, топ-услуги и реальный рост.',
    'why.track.t': 'Ничего не упустите',
    'why.track.d': 'Заметки, дедлайны и пожелания клиентов зафиксированы с напоминанием в нужный момент.',
    'why.pro.t': 'Работайте уверенно',
    'why.pro.d': 'Приходите на каждое событие, зная, что всё под контролем.',
    'reviews.title': 'Почему фотографы используют Events Notes',
    'reviews.sub': 'Настоящие отзывы фотографов, которые перешли на Events Notes.',
    'reviews.1.headline': '«Спокойна, что вся информация в одном месте.»',
    'reviews.1.quote': 'Раньше вела съёмки в блокноте — каждый раз листала страницы, искала дату и пару, и однажды забыла согласованную деталь клиента. Теперь всё чётко расписано: время, локация, имена. Самое удобное приложение для фотографа, закрывает все потребности — спокойна, что ничего не забуду.',
    'reviews.1.name': 'Фотограф',
    'reviews.1.role': 'раньше вела в блокноте',
    'reviews.2.headline': '«Нажал на локацию — и поехал по навигатору.»',
    'reviews.2.quote': 'Вёл всё в Заметках, пока две съёмки не наложились на один день. Теперь заказчика найти легко — инста, телеграм сразу под рукой, локация открывается в навигаторе одним касанием. Удобный планер, где точно ничего не забудешь.',
    'reviews.2.name': 'Фотограф',
    'reviews.2.role': 'раньше вёл в Заметках',
    'reviews.3.headline': '«Больше не нужно таскать блокнот с собой.»',
    'reviews.3.quote': 'Всегда удобно вести свой распорядок, держать ссылки на клиентов и отслеживать прибыль — всё в телефоне, а не на бумаге, которой вечно нет под рукой.',
    'reviews.3.name': 'Фотограф',
    'reviews.3.role': 'раньше вёл в блокноте',
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
