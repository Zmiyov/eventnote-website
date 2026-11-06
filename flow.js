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

// Site root, so assets load the same from / and from /uk/ or /ru/
const ROOT = new URL('.', document.currentScript.src).href;

// ===== Localization (EN / UK / RU) =====
// mac.*, cta.*, footer.* and nav.tutorials/download match the classic page (script.js).
const translations = {
  en: {
    'doc.title': 'Events Notes — From first booking to your year in numbers',
    'doc.desc': 'Follow one shoot through Events Notes: create the event, plan the day, hit every deadline, and watch your statistics grow. For iPhone, iPad, and Mac.',
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
    'faq.title': 'Questions and answers',
    'faq.q1': 'What is Events Notes?',
    'faq.a1': 'Events Notes is an app for iPhone, iPad and Mac for planning and running shoots and events. Each booking keeps the client, location, price and deposit, tasks, references and delivery deadline together, and the app adds up your earnings, sessions and hours automatically.',
    'faq.q2': 'Who is Events Notes for?',
    'faq.a2': 'Photographers, videographers and other event professionals. You pick your role — Photographer, Videographer, Agency, DJ, Decorator, Event Host, Makeup Artist, Hairdresser or Catering — and event types and tools adjust to it.',
    'faq.q3': 'Is Events Notes free?',
    'faq.a3': "Yes, it's free to download. A free account can keep up to 3 upcoming events (5 in Ukraine). Premium removes the limit and unlocks all features, including iCloud sync. You can pay monthly or yearly.",
    'faq.q4': 'Which devices does it work on?',
    'faq.a4': 'iPhone and iPad with iOS 18 or later, and Mac. The Mac app is a free companion, and with iCloud sync your events are the same on every device.',
    'faq.q5': 'Can I import my events from Google Calendar or Apple Calendar?',
    'faq.a5': "Yes. Events Notes imports existing events from both Apple Calendar and Google Calendar, so you don't have to type your schedule again.",
    'faq.q6': 'Can it track payments and deposits?',
    'faq.a6': "Yes. Every event stores the full price, the prepayment (deposit) and whether it's a gift certificate. These amounts feed your statistics, so you see what you've earned each month and year.",
    'faq.q7': 'What is Sun Track?',
    'faq.a7': "Sun Track shows the sun's path over your shoot location on the event date, with a golden-hour timeline, so you can plan outdoor shoots around the light.",
    'faq.q8': 'Where is my data stored?',
    'faq.a8': "On your device. If you turn on iCloud sync, it syncs through your own iCloud account, and you can make backups and restore them. Events Notes doesn't use your data for advertising and never sells it.",
    'faq.q9': 'Which languages is the app available in?',
    'faq.a9': 'The app is available in 18 languages, including English, Ukrainian, Russian, Spanish, German, French, Italian, Polish, Portuguese and Japanese.',
    'footer.about': 'About',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.support': 'Support',
    'footer.rights': 'All rights reserved.',
  },
  uk: {
    'doc.title': 'Events Notes — від першого бронювання до підсумків року',
    'doc.desc': 'Пройдіть одну зйомку в Events Notes: створіть подію, сплануйте день, встигніть до кожного дедлайну й дивіться, як росте статистика. Для iPhone, iPad і Mac.',
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
    's9.d': 'Торкніться адреси, оберіть <em>Створити маршрут</em> — і Apple Maps доведе вас на місце.',
    's10.t': 'Відлік до кожної здачі',
    's10.d': 'Лічильник днів до здачі кожної галереї та обробки. Термінові стають червоними — нічого не загубиться.',
    's11.t': 'Позначте як виконане',
    's11.d': 'Здали галерею? Затисніть картку, торкніться <em>Готово</em> — і її більше немає у списку.',
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
    'mac.title': 'Працюйте з бронюваннями на Mac',
    'mac.lead': 'Створюйте, редагуйте й відстежуйте події в застосунку для Mac — усе синхронізується між iPhone, iPad і Mac.',
    'mac.p1': 'Календар і деталі події на весь екран',
    'mac.p2': 'Використовуй усі можливості на великому екрані',
    'mac.p3': 'Дані завжди актуальні завдяки синхронізації iCloud',
    'cta.title': 'Готові організувати наступну зйомку?',
    'cta.text': 'Завантажте Events Notes та зберіть бронювання, розклад і клієнтів разом.',
    'faq.title': 'Питання та відповіді',
    'faq.q1': 'Що таке Events Notes?',
    'faq.a1': 'Events Notes — це застосунок для iPhone, iPad і Mac, щоб планувати й проводити зйомки та події. У кожному бронюванні разом зберігаються клієнт, локація, ціна й передоплата, завдання, референси та дедлайн здачі, а застосунок сам підраховує ваш дохід, сесії та години.',
    'faq.q2': 'Для кого Events Notes?',
    'faq.a2': 'Для фотографів, відеографів та інших фахівців, які працюють на подіях. Ви обираєте свою роль — Фотограф, Відеограф, Агенція, DJ, Декоратор, Ведучий, Візажист, Перукар або Кейтеринг, — і типи подій та інструменти підлаштовуються під неї.',
    'faq.q3': 'Events Notes безкоштовний?',
    'faq.a3': 'Так, завантажити його можна безкоштовно. Безкоштовний акаунт дозволяє до 3 майбутніх подій (5 в Україні). Premium знімає обмеження й відкриває всі можливості, зокрема синхронізацію через iCloud. Оплата щомісячна або річна.',
    'faq.q4': 'На яких пристроях він працює?',
    'faq.a4': 'На iPhone та iPad з iOS 18 або новішою, а також на Mac. Застосунок для Mac безкоштовний, а завдяки синхронізації iCloud події однакові на всіх пристроях.',
    'faq.q5': 'Чи можна імпортувати події з Google Календаря або Apple Календаря?',
    'faq.a5': 'Так. Events Notes імпортує наявні події і з Apple Календаря, і з Google Календаря, тож розклад не доведеться вводити заново.',
    'faq.q6': 'Чи відстежує він оплати й передоплати?',
    'faq.a6': 'Так. Для кожної події зберігаються повна вартість, передоплата та позначка подарункового сертифіката. Ці суми потрапляють у статистику, тож ви бачите, скільки заробили за місяць і за рік.',
    'faq.q7': 'Що таке Sun Track?',
    'faq.a7': 'Sun Track показує шлях сонця над локацією зйомки в день події та таймлайн золотої години, щоб ви планували зйомки просто неба під світло.',
    'faq.q8': 'Де зберігаються мої дані?',
    'faq.a8': 'На вашому пристрої. Якщо увімкнути синхронізацію iCloud, дані синхронізуються через ваш власний акаунт iCloud, а ще можна створювати резервні копії та відновлювати їх. Events Notes не використовує ваші дані для реклами й ніколи їх не продає.',
    'faq.q9': 'Якими мовами доступний застосунок?',
    'faq.a9': 'Застосунок доступний 18 мовами, серед них українська, англійська, російська, іспанська, німецька, французька, італійська, польська, португальська та японська.',
    'footer.about': 'Про застосунок',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    'footer.support': 'Підтримка',
    'footer.rights': 'Усі права захищено.',
  },
  ru: {
    'doc.title': 'Events Notes — от первого бронирования до итогов года',
    'doc.desc': 'Пройдите одну съёмку в Events Notes: создайте событие, спланируйте день, успейте к каждому дедлайну и смотрите, как растёт статистика. Для iPhone, iPad и Mac.',
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
    's9.t': 'Место на карте',
    's9.d': 'Коснитесь адреса, выберите <em>Открыть карту</em> — и место съёмки сразу на карте.',
    's10.t': 'Отсчёт до каждой сдачи',
    's10.d': 'Счётчик дней до сдачи каждой галереи и обработки. Срочные становятся красными — ничего не упустите.',
    's11.t': 'Отметьте как выполненное',
    's11.d': 'Сдали галерею? Зажмите карточку, коснитесь <em>Готово</em> — и её больше нет в списке.',
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
    'mac.title': 'Работайте с бронированиями на Mac',
    'mac.lead': 'Создавайте, редактируйте и отслеживайте события в приложении для Mac — всё синхронизируется между iPhone, iPad и Mac.',
    'mac.p1': 'Календарь и детали события на весь экран',
    'mac.p2': 'Используй все возможности на большом экране',
    'mac.p3': 'Данные всегда актуальны благодаря синхронизации iCloud',
    'cta.title': 'Готовы организовать следующую съёмку?',
    'cta.text': 'Скачайте Events Notes и соберите бронирования, расписание и клиентов вместе.',
    'faq.title': 'Вопросы и ответы',
    'faq.q1': 'Что такое Events Notes?',
    'faq.a1': 'Events Notes — это приложение для iPhone, iPad и Mac, чтобы планировать и проводить съёмки и события. В каждом бронировании вместе хранятся клиент, локация, цена и предоплата, задачи, референсы и дедлайн сдачи, а приложение само считает ваш доход, сессии и часы.',
    'faq.q2': 'Для кого Events Notes?',
    'faq.a2': 'Для фотографов, видеографов и других специалистов, которые работают на событиях. Вы выбираете свою роль — Фотограф, Видеограф, Агентство, DJ, Декоратор, Ведущий, Визажист, Парикмахер или Кейтеринг, — и типы событий и инструменты подстраиваются под неё.',
    'faq.q3': 'Events Notes бесплатный?',
    'faq.a3': 'Да, скачать его можно бесплатно. Бесплатный аккаунт допускает до 3 будущих событий (5 в Украине). Premium снимает ограничение и открывает все возможности, включая синхронизацию через iCloud. Оплата ежемесячная или годовая.',
    'faq.q4': 'На каких устройствах он работает?',
    'faq.a4': 'На iPhone и iPad с iOS 18 или новее, а также на Mac. Приложение для Mac бесплатное, а благодаря синхронизации iCloud события одинаковые на всех устройствах.',
    'faq.q5': 'Можно ли импортировать события из Google Календаря или Apple Календаря?',
    'faq.a5': 'Да. Events Notes импортирует существующие события и из Apple Календаря, и из Google Календаря, так что расписание не придётся вводить заново.',
    'faq.q6': 'Отслеживает ли он оплаты и предоплаты?',
    'faq.a6': 'Да. Для каждого события хранятся полная стоимость, предоплата и отметка подарочного сертификата. Эти суммы попадают в статистику, так что вы видите, сколько заработали за месяц и за год.',
    'faq.q7': 'Что такое Sun Track?',
    'faq.a7': 'Sun Track показывает путь солнца над локацией съёмки в день события и таймлайн золотого часа, чтобы вы планировали съёмки на улице под свет.',
    'faq.q8': 'Где хранятся мои данные?',
    'faq.a8': 'На вашем устройстве. Если включить синхронизацию iCloud, данные синхронизируются через ваш собственный аккаунт iCloud, а ещё можно создавать резервные копии и восстанавливать их. Events Notes не использует ваши данные для рекламы и никогда их не продаёт.',
    'faq.q9': 'На каких языках доступно приложение?',
    'faq.a9': 'Приложение доступно на 18 языках, среди них русский, английский, украинский, испанский, немецкий, французский, итальянский, польский, португальский и японский.',
    'footer.about': 'О приложении',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.support': 'Поддержка',
    'footer.rights': 'Все права защищены.',
  },
};

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

// Each language has its own page (/, /uk/, /ru/), so the page says which one it is.
// Language links remember the choice so the English page stops sending this visitor away.
document.querySelectorAll('.lang-btn').forEach((btn) =>
  btn.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', btn.dataset.lang);
    } catch (e) {
      /* ignore */
    }
  })
);

applyLang(document.documentElement.lang);

// ===== Device content per language =====
// Text, numbers and positions inside the phone, read off the app's own screens in each language
// (Ukrainian and Russian demo data use Kyiv and Almaty). Images for uk/ru live in assets/flow/<lang>/.
const device = {
  en: {
    locale: 'en-US', route: 'maps', earnSize: 36, unused: ['openmap.webp'],
    pos: { menuTop: 290, routeTop: 370, openmapTop: 290, chooserTop: 200, mapsTop: 222, sunB: [0, 542, 440, 90], sunC: [225, 766, 183, 49], sunD: [20, 646, 400, 42] },
    axis: [['20,000', 0], ['15,000', 34], ['10,000', 68], ['5,000', 102], ['0', 136]],
    segs: [[0, 8], [8, 2], [10, 4], [14, 1], [15, 6], [21, 1]],
    borders: ['#A7DAAE', '#D3FABC'],
    'ne.type': 'Event type', 'ne.typeV': 'Wedding', 'ne.date': 'Date',
    'ne.dateV': 'Nov 7, 2026', 'ne.dateV.from': 'Nov 6, 2026', 'ne.timeV': '1:00 PM', 'ne.timeV.from': '12:00 AM',
    'ne.tz': 'Timezone: New_York, United States (Eastern)', 'ne.deadline': 'Deadline', 'ne.deadlineV': 'In a month',
    'ne.hours': 'Number of Hours', 'ne.hoursV': '9', 'ne.contacts': 'Contacts', 'ne.addFrom': 'Add from Contacts',
    'ne.name': 'Name (required)', 'ne.nameV': 'Emma & James', 'ne.phone': 'Phone number', 'ne.phoneV': '+1 212 555 0148',
    'ne.tgV': '', 'ne.igV': 'emma.and.james', 'ne.hint': 'Format: @username or link',
    'ne.loc': 'Location', 'ne.openMap': 'Open Map', 'ne.locPh': 'Input location name', 'ne.locV': 'Central Park, New York',
    'ne.pay': 'Payment', 'ne.full': 'Full Price', 'ne.fullV': '4 800', 'ne.pre': 'Prepayment', 'ne.preV': '1 200',
    'ne.gift': 'Gift certificate', 'ne.rem': 'Reminder', 'ne.ea': 'Event Alert', 'ne.da': 'Deadline Alert',
    'ne.notes': 'Notes', 'ne.notesPh': 'Add Notes', 'ne.gal': 'Gallery', 'ne.todo': 'To Do', 'ne.team': 'Team',
    task0: 'Scout the venue', task1: 'Confirm timeline with planner', task2: 'Charge batteries, format cards',
    mate0: 'Anna Kim', mate1: 'Max Rivera', mate2: 'Lena Stone',
    'dl.sub': 'Submit by: ', 'dl.left': 'Days left',
    'dl0.n': 'Lauren & Chris', 'dl0.t': 'Wedding', 'dl0.d': '2026, November 9', 'dl0.v': 3,
    'dl1.n': 'Claire Donovan', 'dl1.t': 'Portrait', 'dl1.d': '2026, November 14', 'dl1.v': 8,
    'dl2.n': 'The Hughes Family', 'dl2.t': 'Family', 'dl2.d': '2026, November 16', 'dl2.v': 10,
    'dl3.n': 'Megan & Josh', 'dl3.t': 'Wedding', 'dl3.d': '2026, November 23', 'dl3.v': 17,
    'dl4.n': 'Rachel & Tom', 'dl4.t': 'Wedding', 'dl4.d': '2026, November 30', 'dl4.v': 24,
    'st.over': 'YEAR OVERVIEW', 'st.earn': 'EARNINGS · 2026', 'st.earnV': 112650, 'st.cap': 'Gross across 55 shoots,<br />before expenses.',
    'st.m1': 'EVENT<span>sessions</span>', 'st.m1V': 55, 'st.m2': 'EVENT<span>hours</span>', 'st.m2V': 268,
    'st.t1': 'Earnings by month', 'st.t2': 'Shoots by type for quarter', 'st.q': '4-th quarter', 'st.total': 'Total',
    m0: 'Feb', m1: 'Mar', m2: 'Apr', m3: 'May', m4: 'Jun', m5: 'Jul', m6: 'Aug', m7: 'Sep', m8: 'Oct', m9: 'Nov', m10: 'Dec',
    lg0: 'Wedding', lg1: 'Love Story', lg2: 'Family', lg3: 'Birthday', lg4: 'Portrait', lg5: 'Event',
    ct0: 'Emma & James', ct1: 'Lauren & Chris', ct2: 'Claire Donovan', ct3: 'The Hughes Family', ct4: 'Megan & Josh', ct5: 'Rachel & Tom',
    'ct.q': 'Emma', 'cd.name': 'Emma & James', 'cd.phone': '+1 212 555 0148', 'cd.tg': '-', 'cd.ig': '@emma.and.james',
  },
  uk: {
    locale: 'uk-UA', route: 'maps', earnSize: 36, unused: ['openmap.webp'],
    pos: { menuTop: 290, routeTop: 370, openmapTop: 290, chooserTop: 200, mapsTop: 222, sunB: [0, 530, 440, 90], sunC: [225, 750, 183, 67], sunD: [20, 632, 400, 42] },
    axis: [['750 000', 8], ['500 000', 52], ['250 000', 94], ['0', 136]],
    segs: [[0, 2], [2, 8], [10, 1], [11, 1], [12, 6], [18, 4]],
    borders: ['#D69CEE', '#BCD2BB'],
    'ne.type': 'Тип події', 'ne.typeV': 'Весілля', 'ne.date': 'Дата',
    'ne.dateV': '7 лист. 2026 р.', 'ne.dateV.from': '6 лист. 2026 р.', 'ne.timeV': '16:00', 'ne.timeV.from': '00:00',
    'ne.tz': 'Часовий пояс: Kyiv, Ukraine', 'ne.deadline': 'Дедлайн', 'ne.deadlineV': 'Через місяць',
    'ne.hours': 'Кількість годин', 'ne.hoursV': '6', 'ne.contacts': 'Контакти', 'ne.addFrom': 'Додати з контактів',
    'ne.name': "Ім'я (обов'язково)", 'ne.nameV': 'Соломія & Назар', 'ne.phone': 'Номер телефону', 'ne.phoneV': '+380 44 555 01 47',
    'ne.tgV': 'solomiia_i_nazar', 'ne.igV': 'solomiia.i.nazar', 'ne.hint': "Формат: @ім'я_користувача або посилання",
    'ne.loc': 'Локація', 'ne.openMap': 'Відкрити карту', 'ne.locPh': 'Введіть назву локації', 'ne.locV': 'Маріїнський парк, Київ',
    'ne.pay': 'Оплата', 'ne.full': 'Повна ціна', 'ne.fullV': '192 000', 'ne.pre': 'Передоплата', 'ne.preV': '48 000',
    'ne.gift': 'Подарунковий сертифікат', 'ne.rem': 'Нагадування', 'ne.ea': 'Попередження про подію', 'ne.da': 'Попередження про дедлайн',
    'ne.notes': 'Примітки', 'ne.notesPh': 'Додати нотатки', 'ne.gal': 'Галерея', 'ne.todo': 'Завдання', 'ne.team': 'Команда',
    task0: 'Оглянути локацію', task1: 'Узгодити таймінг з організаторкою', task2: 'Зарядити батареї, відформатувати картки',
    mate0: 'Анна Кім', mate1: 'Максим Рибак', mate2: 'Олена Коваль',
    'dl.sub': 'Здати до: ', 'dl.left': 'Залишилось днів',
    'dl0.n': 'Дарина & Артем', 'dl0.t': 'Весілля', 'dl0.d': '2026, листопада 9', 'dl0.v': 3,
    'dl1.n': 'Яна Мельник', 'dl1.t': 'Портрет', 'dl1.d': '2026, листопада 14', 'dl1.v': 8,
    'dl2.n': 'Родина Бойків', 'dl2.t': "Сім'я", 'dl2.d': '2026, листопада 16', 'dl2.v': 10,
    'dl3.n': 'Марія & Іван', 'dl3.t': 'Весілля', 'dl3.d': '2026, листопада 23', 'dl3.v': 17,
    'dl4.n': 'Софія & Олександр', 'dl4.t': 'Весілля', 'dl4.d': '2026, листопада 30', 'dl4.v': 24,
    'st.over': 'ОГЛЯД РОКУ', 'st.earn': 'ДОХІД · 2026', 'st.earnV': 4506000, 'st.cap': 'Валовий дохід за 55 зйомок, до<br />вирахування витрат.',
    'st.m1': 'СЕСІЇ<span class="caps">ПОДІЙ</span>', 'st.m1V': 55, 'st.m2': 'ГОДИНИ<span class="caps">ПОДІЙ</span>', 'st.m2V': 265,
    'st.t1': 'Доходи за місяць', 'st.t2': 'Тип зйомок за квартал', 'st.q': '4-й квартал', 'st.total': 'Всього',
    m0: 'лют.', m1: 'бер.', m2: 'квіт.', m3: 'трав.', m4: 'черв.', m5: 'лип.', m6: 'серп.', m7: 'вер.', m8: 'жовт.', m9: 'лист.', m10: 'гр..',
    lg0: 'Love Story', lg1: 'Весілля', lg2: 'Подія', lg3: 'День народження', lg4: 'Портрет', lg5: "Сім'я",
    ct0: 'Соломія & Назар', ct1: 'Дарина & Артем', ct2: 'Яна Мельник', ct3: 'Родина Бойків', ct4: 'Марія & Іван', ct5: 'Софія & Олександр',
    'ct.q': 'Соломія', 'cd.name': 'Соломія & Назар', 'cd.phone': '+380 44 555 01 47', 'cd.tg': 'solomiia_i_nazar', 'cd.ig': '@solomiia.i.nazar',
  },
  ru: {
    locale: 'ru-RU', route: 'openmap', earnSize: 33, unused: ['maps-route.webp', 'ui/chooser.webp'],
    pos: { menuTop: 278, routeTop: 352, openmapTop: 290, chooserTop: 200, mapsTop: 222, sunB: [0, 542, 440, 90], sunC: [225, 766, 183, 49], sunD: [20, 646, 400, 42] },
    axis: [['1,0E7', 0], ['7,5E6', 34], ['5,0E6', 68], ['2,5E6', 102], ['0', 136]],
    segs: [[0, 4], [4, 2], [6, 6], [12, 1], [13, 8], [21, 1]],
    borders: ['#BCF2DD', '#A9E6A2'],
    'ne.type': 'Тип события', 'ne.typeV': 'Свадьба', 'ne.date': 'Дата',
    'ne.dateV': '8 нояб. 2026 г.', 'ne.dateV.from': '7 нояб. 2026 г.', 'ne.timeV': '16:00', 'ne.timeV.from': '00:00',
    'ne.tz': 'Часовой пояс: Almaty, Kazakhstan', 'ne.deadline': 'Крайний срок', 'ne.deadlineV': 'Через месяц',
    'ne.hours': 'Количество часов', 'ne.hoursV': '6', 'ne.contacts': 'Контакты', 'ne.addFrom': 'Добавить из контактов',
    'ne.name': 'Имя (обязательно)', 'ne.nameV': 'Алина & Тимур', 'ne.phone': 'Номер телефона', 'ne.phoneV': '+7 727 555 01 47',
    'ne.tgV': 'alina_i_timur', 'ne.igV': 'alina.i.timur', 'ne.hint': 'Формат: @имя_пользователя или ссылка',
    'ne.loc': 'Локация', 'ne.openMap': 'Открыть карту', 'ne.locPh': 'Введите название локации', 'ne.locV': 'Парк Первого Президента, Алматы',
    'ne.pay': 'Оплата', 'ne.full': 'Полная цена', 'ne.fullV': '2 400 000', 'ne.pre': 'Предоплата', 'ne.preV': '600 000',
    'ne.gift': 'Подарочный сертификат', 'ne.rem': 'Напоминание', 'ne.ea': 'Оповещение о событии', 'ne.da': 'Предупреждение о крайнем сроке',
    'ne.notes': 'Заметки', 'ne.notesPh': 'Добавить заметки', 'ne.gal': 'Галерея', 'ne.todo': 'Запланировано', 'ne.team': 'Команда',
    task0: 'Осмотреть локацию', task1: 'Согласовать тайминг с организатором', task2: 'Зарядить аккумуляторы, отформатировать карты',
    mate0: 'Анна Ким', mate1: 'Максим Рыбаков', mate2: 'Елена Коваль',
    'dl.sub': 'Срок сдачи: ', 'dl.left': 'Осталось дней',
    'dl0.n': 'Дарья & Артём', 'dl0.t': 'Свадьба', 'dl0.d': '2026, ноября 10', 'dl0.v': 4,
    'dl1.n': 'Милана Ким', 'dl1.t': 'Портрет', 'dl1.d': '2026, ноября 15', 'dl1.v': 9,
    'dl2.n': 'Семья Ивановых', 'dl2.t': 'Семья', 'dl2.d': '2026, ноября 17', 'dl2.v': 11,
    'dl3.n': 'Мария & Иван', 'dl3.t': 'Свадьба', 'dl3.d': '2026, ноября 24', 'dl3.v': 18,
    'dl4.n': 'Полина & Михаил', 'dl4.t': 'Свадьба', 'dl4.d': '2026, ноября 30', 'dl4.v': 24,
    'st.over': 'ОБЗОР ГОДА', 'st.earn': 'ДОХОД · 2026', 'st.earnV': 56325000, 'st.cap': 'Валовой доход за 55 съёмок, до<br />вычета расходов.',
    'st.m1': 'СЕССИИ<span class="caps">СОБЫТИЙ</span>', 'st.m1V': 55, 'st.m2': 'ЧАСЫ<span class="caps">СОБЫТИЙ</span>', 'st.m2V': 265,
    'st.t1': 'Доходы за месяц', 'st.t2': 'Тип съёмок за квартал', 'st.q': '4-й квартал', 'st.total': 'Итог',
    m0: 'фе..', m1: 'март', m2: 'апр.', m3: 'май', m4: 'июнь', m5: 'июль', m6: 'авг.', m7: 'сент.', m8: 'окт.', m9: 'нояб.', m10: 'дек.',
    lg0: 'Семья', lg1: 'Love Story', lg2: 'Портрет', lg3: 'День рождения', lg4: 'Свадьба', lg5: 'Событие',
    ct0: 'Алина & Тимур', ct1: 'Дарья & Артём', ct2: 'Милана Ким', ct3: 'Семья Ивановых', ct4: 'Мария & Иван', ct5: 'Полина & Михаил',
    'ct.q': 'Алина', 'cd.name': 'Алина & Тимур', 'cd.phone': '+7 727 555 01 47', 'cd.tg': 'alina_i_timur', 'cd.ig': '@alina.i.timur',
  },
};

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
  // Step 9 ends in Apple Maps, except in Russian where it opens the in-app map (no routes in Kazakhstan)
  const baseOf = (step) => (step === 9 && dev().route === 'openmap' ? 'schedule' : BASE[step]);
  const sheetsOf = (step) => (step === 9 && dev().route === 'openmap' ? ['details', 'openmap'] : SHEETS[step]);
  const TAB = { 1: 'main', 2: 'main', 3: 'gallery', 4: 'main', 5: 'team', 6: 'todo' };
  const SUN_FRAMES = 14;

  let scale = 0.8;
  let current = 0;
  let token = 0;
  const applied = new Set();
  let lang = 'en';
  const dev = () => device[lang];
  const assetBase = () => (lang === 'en' ? `${ROOT}assets/flow/` : `${ROOT}assets/flow/${lang}/`);

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

  const fmt = (v) => Math.round(v).toLocaleString(dev().locale);
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
      img.dataset.frame = `sun/${set.dataset.f}${String(i).padStart(2, '0')}.webp`;
      set.appendChild(img);
    }
  });
  let framesLoaded = false;
  function loadFrames() {
    if (framesLoaded) return;
    framesLoaded = true;
    frameSets.forEach((set) => set.querySelectorAll('img').forEach((img) => { img.src = assetBase() + img.dataset.frame; }));
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
  const donutPaths = $$('.donut path');
  const pt = (r, a) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return `${(r * Math.cos(rad)).toFixed(2)} ${(r * Math.sin(rad)).toFixed(2)}`;
  };
  function drawDonut(sweep) {
    donutPaths.forEach((p, i) => {
      const [from, count] = dev().segs[i];
      const a0 = (from / TOTAL) * 360, a1 = ((from + count) / TOTAL) * 360;
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
    1: async (my) => {
      await sleep(2000); // let the schedule be seen before the form opens
      if (my === token) await tap($('.js-plus'));
    },
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
      if (dev().route === 'openmap') { await tap($('.js-openmap')); return; }
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
    show(baseOf(step), sheetsOf(step));
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


  // ----- Language: swap the device's images, text, numbers and positions -----
  const place = (el, [x, y, w, h]) => Object.assign(el.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' });
  function relocalize(next) {
    lang = device[next] ? next : 'en';
    const D = dev();
    const base = assetBase();
    // screens a language never shows (its route step works differently) are not requested
    const used = (rel) => !D.unused.includes(rel);
    $$('img[data-l10n]').forEach((img) => { if (used(img.dataset.l10n)) img.src = base + img.dataset.l10n; });
    $$('.shot[data-l10n]').forEach((el) => { el.style.backgroundImage = used(el.dataset.l10n) ? `url(${base}${el.dataset.l10n})` : 'none'; });
    $$('[data-d]').forEach((el) => { if (D[el.dataset.d] != null) el.textContent = D[el.dataset.d]; });
    $$('[data-d-html]').forEach((el) => { if (D[el.dataset.dHtml] != null) el.innerHTML = D[el.dataset.dHtml]; });
    $$('[data-dk]').forEach((el) => {
      const key = el.dataset.dk;
      if (el.hasAttribute('data-cs')) el.dataset.to = D[key];
      else el.dataset.text = D[key];
      if (D[key + '.from'] != null) el.dataset.from = D[key + '.from'];
    });
    $('.st-earn b').style.fontSize = D.earnSize + 'px';
    $('.axis').innerHTML = '<i class="grid" style="top:-31px"></i>' + D.axis.map(([label, y]) =>
      `<i class="grid${label === '0' ? ' base' : ''}" style="top:${y}px"></i><span class="yl" style="top:${y}px">${label}</span>`).join('');
    $$('.st-chart').forEach((el, i) => el.style.setProperty('--b', D.borders[i]));
    $('.loc-menu').style.top = D.pos.menuTop + 'px';
    $('.js-route').style.top = D.pos.routeTop + 'px';
    $('.js-openmap').style.top = D.pos.openmapTop + 'px';
    $('.chooser').style.top = D.pos.chooserTop + 'px';
    $('.js-maps').style.top = D.pos.mapsTop + 'px';
    place($('.frames[data-f="b"]'), D.pos.sunB);
    place($('.frames[data-f="c"]'), D.pos.sunC);
    place($('.frames[data-f="d"]'), D.pos.sunD);
    if (framesLoaded) { framesLoaded = false; loadFrames(); }

    // put every step back in the state it should have in the new language
    show(baseOf(current), sheetsOf(current));
    for (let n = 1; n <= LAST; n++) {
      if (applied.has(n)) { if (APPLY[n]) APPLY[n](false, token); } else if (RESET[n]) RESET[n]();
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
  relocalize(document.documentElement.lang);
  show('schedule', []);
  drawDonut(0);
  fit();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { fit(); update(); });
  // the mobile caption is a copy of the active step, so refresh it after a language switch
  document.addEventListener('langchange', () => {
    relocalize(document.documentElement.lang);
    caption.dataset.step = '';
    update();
  });
})();
