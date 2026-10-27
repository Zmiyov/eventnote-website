/* ===== Events Notes — Tutorials =====
   Self-contained help center. Renders guides from the data below in EN / UK / RU.
   URL params for the in-app webview:
     ?embed=1        hide the site header/footer (webview mode)
     ?lang=en|uk|ru  force a language
     ?theme=dark|light  force a color scheme
     ?topic=<id>     open a specific guide on load
*/

const SUPPORTED_LANGS = ['en', 'uk', 'ru'];

/* ---- UI strings ---- */
const UI = {
  'page.title':  { en: 'How to use Events Notes', uk: 'Як користуватися Events Notes', ru: 'Как пользоваться Events Notes' },
  'page.sub':    {
    en: 'Short, practical guides to every feature — from your first booking to Sun Track, backups and team.',
    uk: 'Короткі практичні гайди до кожної можливості — від першого бронювання до Sun Track, резервних копій і команди.',
    ru: 'Короткие практичные гайды по каждой функции — от первого бронирования до Sun Track, резервных копий и команды.',
  },
  'search.ph':    { en: 'Search guides…', uk: 'Пошук гайдів…', ru: 'Поиск гайдов…' },
  'search.empty': { en: 'No guides match your search.', uk: 'Немає гайдів за вашим запитом.', ru: 'Нет гайдов по вашему запросу.' },
  'chip.all':     { en: 'All', uk: 'Усі', ru: 'Все' },
  'tip':          { en: 'Tip', uk: 'Порада', ru: 'Совет' },
  'doc.title':    { en: 'Events Notes — Tutorials', uk: 'Events Notes — Гайди', ru: 'Events Notes — Гайды' },
};

/* ---- Guide groups and content ---- */
const GROUPS = [
  {
    id: 'start', icon: '🚀',
    title: { en: 'Getting started', uk: 'Перші кроки', ru: 'Первые шаги' },
    sub: {
      en: 'Set the app up for the way you work and add your first job.',
      uk: 'Налаштуйте застосунок під свою роботу й додайте перше замовлення.',
      ru: 'Настройте приложение под свою работу и добавьте первый заказ.',
    },
    items: [
      {
        id: 'role', icon: '🎭',
        title: { en: 'Pick your role', uk: 'Оберіть свою роль', ru: 'Выберите свою роль' },
        summary: {
          en: 'Your role tailors event types and which tools appear.',
          uk: 'Роль підлаштовує типи подій і доступні інструменти.',
          ru: 'Роль подстраивает типы событий и доступные инструменты.',
        },
        steps: {
          en: [
            'Open Settings and tap “Your role”.',
            'Choose Photographer, Videographer, Agency, DJ, Decorator, Event Host, Makeup Artist, Hairdresser or Catering.',
            'Event types and tools like Sun Track adjust to your role automatically.',
          ],
          uk: [
            'Відкрийте Налаштування й торкніться «Your role» (Ваша роль).',
            'Оберіть: Фотограф, Відеограф, Агенція, DJ, Декоратор, Ведучий, Візажист, Перукар або Кейтеринг.',
            'Типи подій та інструменти на кшталт Sun Track підлаштуються автоматично.',
          ],
          ru: [
            'Откройте Настройки и нажмите «Your role» (Ваша роль).',
            'Выберите: Фотограф, Видеограф, Агентство, DJ, Декоратор, Ведущий, Визажист, Парикмахер или Кейтеринг.',
            'Типы событий и инструменты вроде Sun Track подстроятся автоматически.',
          ],
        },
        tip: {
          en: 'You can change your role anytime — your existing events stay.',
          uk: 'Роль можна змінити будь-коли — наявні події збережуться.',
          ru: 'Роль можно изменить в любой момент — существующие события сохранятся.',
        },
      },
      {
        id: 'create', icon: '📅',
        title: { en: 'Create a booking', uk: 'Створіть бронювання', ru: 'Создайте бронирование' },
        summary: {
          en: 'Add an event with client, type, date, place and notes.',
          uk: 'Додайте подію з клієнтом, типом, датою, місцем і нотатками.',
          ru: 'Добавьте событие с клиентом, типом, датой, местом и заметками.',
        },
        steps: {
          en: [
            'On the Schedule tab, pick a date and tap Add (+).',
            'Choose the kind of shooting and set the date and time.',
            'Add the client, location, price and any notes.',
            'Save — the event appears on that day in your schedule.',
          ],
          uk: [
            'На вкладці «Розклад» оберіть дату й торкніться «Додати» (+).',
            'Оберіть тип зйомки та задайте дату й час.',
            'Додайте клієнта, локацію, вартість і нотатки.',
            'Збережіть — подія зʼявиться в розкладі на цей день.',
          ],
          ru: [
            'На вкладке «Расписание» выберите дату и нажмите «Добавить» (+).',
            'Выберите тип съёмки и задайте дату и время.',
            'Добавьте клиента, локацию, стоимость и заметки.',
            'Сохраните — событие появится в расписании на этот день.',
          ],
        },
        tip: {
          en: 'First launch? The guided onboarding builds your first event with you.',
          uk: 'Перший запуск? Покроковий онбординг створить першу подію разом з вами.',
          ru: 'Первый запуск? Пошаговый онбординг создаст первое событие вместе с вами.',
        },
      },
    ],
  },

  {
    id: 'manage', icon: '🗂️',
    title: { en: 'Managing bookings', uk: 'Керування бронюваннями', ru: 'Управление бронированиями' },
    sub: {
      en: 'Everything inside an event, and how to stay on top of your schedule.',
      uk: 'Усе всередині події та як тримати розклад під контролем.',
      ru: 'Всё внутри события и как держать расписание под контролем.',
    },
    items: [
      {
        id: 'payments', icon: '💰',
        title: { en: 'Payments, prepayment & certificates', uk: 'Оплати, передоплата й сертифікати', ru: 'Оплаты, предоплата и сертификаты' },
        summary: {
          en: 'Track full price, deposits and gift certificates per event.',
          uk: 'Відстежуйте повну ціну, завдаток і подарункові сертифікати в події.',
          ru: 'Отслеживайте полную цену, задаток и подарочные сертификаты в событии.',
        },
        steps: {
          en: [
            'In an event, set the full price for the job.',
            'Add the Prepayment (deposit) the client has already paid.',
            'Mark a booking as a gift certificate when it is paid upfront as a gift.',
            'Totals feed into your Statistics automatically.',
          ],
          uk: [
            'У події задайте повну вартість роботи.',
            'Додайте «Prepayment» (передоплату), яку клієнт уже вніс.',
            'Позначте бронювання як подарунковий сертифікат, якщо його оплатили наперед у подарунок.',
            'Суми автоматично потрапляють у «Статистику».',
          ],
          ru: [
            'В событии задайте полную стоимость работы.',
            'Добавьте «Prepayment» (предоплату), которую клиент уже внёс.',
            'Отметьте бронирование как подарочный сертификат, если его оплатили заранее в подарок.',
            'Суммы автоматически попадают в «Статистику».',
          ],
        },
        tip: {
          en: 'The remaining balance is simply the full price minus the prepayment.',
          uk: 'Залишок до сплати — це повна ціна мінус передоплата.',
          ru: 'Остаток к оплате — это полная цена минус предоплата.',
        },
      },
      {
        id: 'calendar', icon: '🗓️',
        title: { en: 'Calendar & schedule', uk: 'Календар і розклад', ru: 'Календарь и расписание' },
        summary: {
          en: 'Browse your month and jump to any day’s events.',
          uk: 'Переглядайте місяць і переходьте до подій будь-якого дня.',
          ru: 'Просматривайте месяц и переходите к событиям любого дня.',
        },
        steps: {
          en: [
            'The Schedule tab shows a month calendar with marked days.',
            'Tap any date to see that day’s events below.',
            'Swipe between months to plan ahead.',
            'Tap an event to open details, or swipe a row to edit or delete it.',
          ],
          uk: [
            'Вкладка «Розклад» показує календар на місяць із позначеними днями.',
            'Торкніться дати, щоб побачити події цього дня нижче.',
            'Гортайте місяці, щоб планувати наперед.',
            'Торкніться події для деталей або проведіть по рядку, щоб редагувати чи видалити.',
          ],
          ru: [
            'Вкладка «Расписание» показывает календарь на месяц с отмеченными днями.',
            'Нажмите дату, чтобы увидеть события этого дня ниже.',
            'Листайте месяцы, чтобы планировать наперёд.',
            'Нажмите событие для деталей или проведите по строке, чтобы изменить или удалить.',
          ],
        },
      },
      {
        id: 'deadlines', icon: '⏳',
        title: { en: 'Deadlines & countdowns', uk: 'Дедлайни й відлік', ru: 'Дедлайны и отсчёт' },
        summary: {
          en: 'See what’s unfinished and how many days are left.',
          uk: 'Бачте незавершене й скільки днів лишилося.',
          ru: 'Видьте незавершённое и сколько дней осталось.',
        },
        steps: {
          en: [
            'Open the Deadlines tab to see unfinished jobs.',
            'Each one shows the days left until its deadline.',
            'Set a deadline (and a deadline reminder) when creating or editing an event.',
            'Long-press a job to mark it ready.',
          ],
          uk: [
            'Відкрийте вкладку «Дедлайни», щоб побачити незавершені роботи.',
            'Кожна показує, скільки днів лишилося до дедлайну.',
            'Задайте дедлайн (і нагадування про нього) при створенні або редагуванні події.',
            'Утримуйте роботу, щоб позначити її виконаною.',
          ],
          ru: [
            'Откройте вкладку «Дедлайны», чтобы увидеть незавершённые работы.',
            'Каждая показывает, сколько дней осталось до дедлайна.',
            'Задайте дедлайн (и напоминание о нём) при создании или редактировании события.',
            'Удерживайте работу, чтобы отметить её выполненной.',
          ],
        },
      },
      {
        id: 'timeline', icon: '📋',
        title: { en: 'Timeline & tasks', uk: 'Таймлайн і завдання', ru: 'Таймлайн и задачи' },
        summary: {
          en: 'Break a shoot into timed stages and to-dos.',
          uk: 'Розбийте зйомку на етапи за часом і список справ.',
          ru: 'Разбейте съёмку на этапы по времени и список дел.',
        },
        steps: {
          en: [
            'Open an event and go to the Timeline section.',
            'Add timeline stages with a time and description for each part of the day.',
            'Add tasks (“Add a task”) for things to prepare or bring.',
            'Check off tasks as you complete them.',
          ],
          uk: [
            'Відкрийте подію й перейдіть до розділу «Timeline».',
            'Додайте етапи таймлайну з часом і описом для кожної частини дня.',
            'Додайте завдання («Add a task») — що підготувати чи взяти з собою.',
            'Позначайте завдання виконаними по ходу.',
          ],
          ru: [
            'Откройте событие и перейдите в раздел «Timeline».',
            'Добавьте этапы таймлайна с временем и описанием для каждой части дня.',
            'Добавьте задачи («Add a task») — что подготовить или взять с собой.',
            'Отмечайте задачи выполненными по ходу.',
          ],
        },
      },
      {
        id: 'gallery', icon: '🖼️',
        title: { en: 'Photo gallery', uk: 'Галерея фото', ru: 'Галерея фото' },
        summary: {
          en: 'Attach reference and inspiration photos to an event.',
          uk: 'Прикріпіть референси та фото для натхнення до події.',
          ru: 'Прикрепите референсы и фото для вдохновения к событию.',
        },
        steps: {
          en: [
            'Open an event and find the Gallery section.',
            'Add photos from your library — poses, moodboards, client references.',
            'Tap a photo to view it full-screen on the shoot day.',
          ],
          uk: [
            'Відкрийте подію й знайдіть розділ «Gallery».',
            'Додайте фото з бібліотеки — пози, мудборди, референси клієнта.',
            'Торкніться фото, щоб відкрити його на весь екран у день зйомки.',
          ],
          ru: [
            'Откройте событие и найдите раздел «Gallery».',
            'Добавьте фото из библиотеки — позы, мудборды, референсы клиента.',
            'Нажмите фото, чтобы открыть его на весь экран в день съёмки.',
          ],
        },
      },
      {
        id: 'contacts', icon: '👤',
        title: { en: 'Client contacts', uk: 'Контакти клієнтів', ru: 'Контакты клиентов' },
        summary: {
          en: 'Keep every client’s links and reach them in one tap.',
          uk: 'Зберігайте контакти клієнтів і звʼязуйтеся в один дотик.',
          ru: 'Храните контакты клиентов и связывайтесь в одно касание.',
        },
        steps: {
          en: [
            'The Contacts tab lists everyone you’ve saved.',
            'Save phone, Telegram, Instagram and website for a client.',
            'Tap the phone number to call; tap Telegram or Instagram to open the app.',
            'When creating an event, you can pick a client from your phone’s contacts.',
          ],
          uk: [
            'Вкладка «Контакти» містить усіх збережених клієнтів.',
            'Збережіть телефон, Telegram, Instagram і сайт клієнта.',
            'Торкніться номера, щоб подзвонити; торкніться Telegram чи Instagram, щоб відкрити застосунок.',
            'Створюючи подію, можна обрати клієнта з контактів телефону.',
          ],
          ru: [
            'Вкладка «Контакты» содержит всех сохранённых клиентов.',
            'Сохраните телефон, Telegram, Instagram и сайт клиента.',
            'Нажмите номер, чтобы позвонить; нажмите Telegram или Instagram, чтобы открыть приложение.',
            'При создании события можно выбрать клиента из контактов телефона.',
          ],
        },
      },
      {
        id: 'reminders', icon: '🔔',
        title: { en: 'Reminders', uk: 'Нагадування', ru: 'Напоминания' },
        summary: {
          en: 'Local notifications for events and deadlines — no account needed.',
          uk: 'Локальні сповіщення про події та дедлайни — без облікового запису.',
          ru: 'Локальные уведомления о событиях и дедлайнах — без учётной записи.',
        },
        steps: {
          en: [
            'When creating or editing an event, set a reminder time.',
            'Set a separate deadline reminder for delivery dates.',
            'Allow notifications when the app asks.',
            'Reminders fire on your device — nothing is sent to a server.',
          ],
          uk: [
            'Створюючи або редагуючи подію, задайте час нагадування.',
            'Задайте окреме нагадування про дедлайн для дат здачі.',
            'Дозвольте сповіщення, коли застосунок попросить.',
            'Нагадування спрацьовують на пристрої — нічого не надсилається на сервер.',
          ],
          ru: [
            'Создавая или редактируя событие, задайте время напоминания.',
            'Задайте отдельное напоминание о дедлайне для дат сдачи.',
            'Разрешите уведомления, когда приложение попросит.',
            'Напоминания срабатывают на устройстве — ничего не отправляется на сервер.',
          ],
        },
      },
    ],
  },

  {
    id: 'plan', icon: '🧭',
    title: { en: 'Planning tools', uk: 'Інструменти планування', ru: 'Инструменты планирования' },
    sub: {
      en: 'Plan light and travel before you arrive.',
      uk: 'Плануйте світло й дорогу ще до приїзду.',
      ru: 'Планируйте свет и дорогу ещё до приезда.',
    },
    items: [
      {
        id: 'suntrack', icon: '☀️',
        title: { en: 'Sun Track', uk: 'Sun Track', ru: 'Sun Track' },
        summary: {
          en: 'Plan golden hour and natural light for any spot and date.',
          uk: 'Плануйте золоту годину та природне світло для будь-якого місця й дати.',
          ru: 'Планируйте золотой час и естественный свет для любого места и даты.',
        },
        steps: {
          en: [
            'Open Sun Track (available for photographer, videographer, agency, decorator and event-host roles).',
            'Move the map so your shoot spot sits under the center pin.',
            'Pick the date and time to see the sun’s position and path.',
            'Use it to plan sunrise, sunset and golden-hour shots.',
          ],
          uk: [
            'Відкрийте Sun Track (доступно для ролей фотографа, відеографа, агенції, декоратора й ведучого).',
            'Посуньте карту так, щоб місце зйомки опинилося під центральною позначкою.',
            'Оберіть дату й час, щоб побачити положення та шлях сонця.',
            'Плануйте кадри на схід, захід і золоту годину.',
          ],
          ru: [
            'Откройте Sun Track (доступно для ролей фотографа, видеографа, агентства, декоратора и ведущего).',
            'Подвиньте карту так, чтобы место съёмки оказалось под центральной меткой.',
            'Выберите дату и время, чтобы увидеть положение и путь солнца.',
            'Планируйте кадры на рассвет, закат и золотой час.',
          ],
        },
        tip: {
          en: 'Sun Track needs location access to calculate the sun’s path.',
          uk: 'Для розрахунку шляху сонця Sun Track потрібен доступ до геолокації.',
          ru: 'Для расчёта пути солнца Sun Track нужен доступ к геолокации.',
        },
      },
      {
        id: 'routes', icon: '📍',
        title: { en: 'Locations & Create Route', uk: 'Локації та маршрут', ru: 'Локации и маршрут' },
        summary: {
          en: 'Save a shoot spot and open directions in one tap.',
          uk: 'Збережіть місце зйомки й відкрийте маршрут одним дотиком.',
          ru: 'Сохраните место съёмки и откройте маршрут одним касанием.',
        },
        steps: {
          en: [
            'Add a location to an event by searching or placing it on the map.',
            'Open the event details and tap the location.',
            'Tap “Create route” to open directions in Maps.',
          ],
          uk: [
            'Додайте локацію до події через пошук або на карті.',
            'Відкрийте деталі події й торкніться локації.',
            'Торкніться «Create route», щоб відкрити маршрут у Картах.',
          ],
          ru: [
            'Добавьте локацию к событию через поиск или на карте.',
            'Откройте детали события и нажмите локацию.',
            'Нажмите «Create route», чтобы открыть маршрут в Картах.',
          ],
        },
      },
    ],
  },

  {
    id: 'insights', icon: '📊',
    title: { en: 'Insights', uk: 'Аналітика', ru: 'Аналитика' },
    sub: {
      en: 'See how your business is really doing.',
      uk: 'Побачте, як насправді йдуть справи.',
      ru: 'Посмотрите, как на самом деле идут дела.',
    },
    items: [
      {
        id: 'analytics', icon: '📈',
        title: { en: 'Analytics', uk: 'Аналітика', ru: 'Аналитика' },
        summary: {
          en: 'Earnings, sessions and hours at a glance.',
          uk: 'Дохід, сесії та години одним поглядом.',
          ru: 'Доход, сессии и часы одним взглядом.',
        },
        steps: {
          en: [
            'Open the Statistics tab.',
            'See earnings, number of sessions and hours by month.',
            'Spot your busiest seasons and top services.',
          ],
          uk: [
            'Відкрийте вкладку «Статистика».',
            'Дивіться дохід, кількість сесій і години за місяцями.',
            'Визначайте найзавантаженіші сезони й топ-послуги.',
          ],
          ru: [
            'Откройте вкладку «Статистика».',
            'Смотрите доход, количество сессий и часы по месяцам.',
            'Определяйте самые загруженные сезоны и топ-услуги.',
          ],
        },
      },
    ],
  },

  {
    id: 'sync', icon: '☁️',
    title: { en: 'Sync, import & backup', uk: 'Синхронізація, імпорт і копії', ru: 'Синхронизация, импорт и копии' },
    sub: {
      en: 'Keep your data safe and bring in events you already have.',
      uk: 'Тримайте дані в безпеці й переносьте наявні події.',
      ru: 'Держите данные в безопасности и переносите существующие события.',
    },
    items: [
      {
        id: 'icloud', icon: '☁️',
        title: { en: 'iCloud sync', uk: 'Синхронізація iCloud', ru: 'Синхронизация iCloud' },
        summary: {
          en: 'Your data, in sync across iPhone, iPad and Mac.',
          uk: 'Ваші дані синхронізовані між iPhone, iPad і Mac.',
          ru: 'Ваши данные синхронизированы между iPhone, iPad и Mac.',
        },
        steps: {
          en: [
            'Sign in to iCloud on your device and enable iCloud Drive.',
            'In Settings → Data synchronization, check the status shows “On”.',
            'Your events then sync across all your Apple devices automatically.',
          ],
          uk: [
            'Увійдіть в iCloud на пристрої та увімкніть iCloud Drive.',
            'У «Налаштування → Data synchronization» перевірте, що статус «On».',
            'Події синхронізуватимуться між усіма пристроями Apple автоматично.',
          ],
          ru: [
            'Войдите в iCloud на устройстве и включите iCloud Drive.',
            'В «Настройки → Data synchronization» проверьте, что статус «On».',
            'События будут синхронизироваться между всеми устройствами Apple автоматически.',
          ],
        },
      },
      {
        id: 'applecal', icon: '📆',
        title: { en: 'Import from Apple Calendar', uk: 'Імпорт з Apple Календаря', ru: 'Импорт из Apple Календаря' },
        summary: {
          en: 'Bring events in from the Apple Calendar.',
          uk: 'Перенесіть події з Apple Календаря.',
          ru: 'Перенесите события из Apple Календаря.',
        },
        steps: {
          en: [
            'Open Settings → Import from Apple Calendar.',
            'Allow calendar access.',
            'Pick the events to bring in as bookings.',
          ],
          uk: [
            'Відкрийте «Налаштування → Import from Apple Calendar».',
            'Дозвольте доступ до календаря.',
            'Оберіть події, щоб перенести їх як бронювання.',
          ],
          ru: [
            'Откройте «Настройки → Import from Apple Calendar».',
            'Разрешите доступ к календарю.',
            'Выберите события, чтобы перенести их как бронирования.',
          ],
        },
      },
      {
        id: 'gcal', icon: '🔄',
        title: { en: 'Import from Google Calendar', uk: 'Імпорт з Google Календаря', ru: 'Импорт из Google Календаря' },
        summary: {
          en: 'Bring existing events in from Google Calendar.',
          uk: 'Перенесіть наявні події з Google Календаря.',
          ru: 'Перенесите существующие события из Google Календаря.',
        },
        steps: {
          en: [
            'Open Settings → Import from Google Calendar.',
            'Sign in to your Google account.',
            'Choose events to import into Events Notes.',
          ],
          uk: [
            'Відкрийте «Налаштування → Import from Google Calendar».',
            'Увійдіть у свій акаунт Google.',
            'Оберіть події для імпорту в Events Notes.',
          ],
          ru: [
            'Откройте «Настройки → Import from Google Calendar».',
            'Войдите в свой аккаунт Google.',
            'Выберите события для импорта в Events Notes.',
          ],
        },
      },
      {
        id: 'backup', icon: '🛟',
        title: { en: 'Backups & restore', uk: 'Резервні копії та відновлення', ru: 'Резервные копии и восстановление' },
        summary: {
          en: 'Save snapshots and restore data safely.',
          uk: 'Зберігайте знімки даних і відновлюйте їх безпечно.',
          ru: 'Сохраняйте снимки данных и восстанавливайте их безопасно.',
        },
        steps: {
          en: [
            'In Settings, open the backups (snapshots) screen.',
            'Create a snapshot to save a copy of your data.',
            'To restore, choose “Restore missing data” to merge, or “Replace everything” to overwrite.',
          ],
          uk: [
            'У Налаштуваннях відкрийте екран резервних копій (snapshots).',
            'Створіть знімок, щоб зберегти копію даних.',
            'Для відновлення оберіть «Restore missing data» (обʼєднати) або «Replace everything» (перезаписати).',
          ],
          ru: [
            'В Настройках откройте экран резервных копий (snapshots).',
            'Создайте снимок, чтобы сохранить копию данных.',
            'Для восстановления выберите «Restore missing data» (объединить) или «Replace everything» (перезаписать).',
          ],
        },
        tip: {
          en: '“Replace everything” overwrites current data — use it only on a fresh device.',
          uk: '«Replace everything» перезаписує поточні дані — використовуйте лише на новому пристрої.',
          ru: '«Replace everything» перезаписывает текущие данные — используйте только на новом устройстве.',
        },
      },
    ],
  },

  {
    id: 'more', icon: '✨',
    title: { en: 'More', uk: 'Більше', ru: 'Больше' },
    sub: {
      en: 'Widgets, team, Mac and your subscription.',
      uk: 'Віджети, команда, Mac і ваша підписка.',
      ru: 'Виджеты, команда, Mac и ваша подписка.',
    },
    items: [
      {
        id: 'widget', icon: '🧩',
        title: { en: 'Home Screen widget', uk: 'Віджет на екрані «Додому»', ru: 'Виджет на домашнем экране' },
        summary: {
          en: 'Upcoming events, always one glance away.',
          uk: 'Найближчі події завжди під рукою.',
          ru: 'Ближайшие события всегда под рукой.',
        },
        steps: {
          en: [
            'Long-press your Home Screen and tap the + in the corner.',
            'Search for Events Notes and pick a widget size.',
            'Add it to see your upcoming events at a glance.',
          ],
          uk: [
            'Утримуйте екран «Додому» й торкніться + у куті.',
            'Знайдіть Events Notes і оберіть розмір віджета.',
            'Додайте його, щоб бачити найближчі події одним поглядом.',
          ],
          ru: [
            'Удерживайте домашний экран и нажмите + в углу.',
            'Найдите Events Notes и выберите размер виджета.',
            'Добавьте его, чтобы видеть ближайшие события одним взглядом.',
          ],
        },
      },
      {
        id: 'team', icon: '👥',
        title: { en: 'Team members', uk: 'Учасники команди', ru: 'Участники команды' },
        summary: {
          en: 'Add your team to an event — for the Agency role.',
          uk: 'Додавайте команду до події — для ролі «Агенція».',
          ru: 'Добавляйте команду к событию — для роли «Агентство».',
        },
        steps: {
          en: [
            'Switch to the Agency role to use team features.',
            'In an event, open the Team section and tap “Add team member”.',
            'Assign a contact and add info for each member on that shoot.',
          ],
          uk: [
            'Перейдіть на роль «Агенція», щоб користуватися командними функціями.',
            'У події відкрийте розділ «Team» і торкніться «Add team member».',
            'Призначте контакт і додайте інформацію для кожного учасника на цій зйомці.',
          ],
          ru: [
            'Переключитесь на роль «Агентство», чтобы использовать командные функции.',
            'В событии откройте раздел «Team» и нажмите «Add team member».',
            'Назначьте контакт и добавьте информацию для каждого участника на этой съёмке.',
          ],
        },
      },
      {
        id: 'mac', icon: '💻',
        title: { en: 'The Mac app', uk: 'Застосунок для Mac', ru: 'Приложение для Mac' },
        summary: {
          en: 'Manage bookings full-screen on your Mac.',
          uk: 'Керуйте бронюваннями на весь екран на Mac.',
          ru: 'Управляйте бронированиями на весь экран на Mac.',
        },
        steps: {
          en: [
            'Install Events Notes on your Mac from the App Store.',
            'Sign in to the same iCloud account.',
            'Manage bookings full-screen — everything stays in sync.',
          ],
          uk: [
            'Встановіть Events Notes на Mac із App Store.',
            'Увійдіть у той самий акаунт iCloud.',
            'Керуйте бронюваннями на весь екран — усе синхронізується.',
          ],
          ru: [
            'Установите Events Notes на Mac из App Store.',
            'Войдите в тот же аккаунт iCloud.',
            'Управляйте бронированиями на весь экран — всё синхронизируется.',
          ],
        },
      },
      {
        id: 'premium', icon: '⭐',
        title: { en: 'Premium', uk: 'Premium', ru: 'Premium' },
        summary: {
          en: 'What a subscription unlocks.',
          uk: 'Що відкриває підписка.',
          ru: 'Что открывает подписка.',
        },
        steps: {
          en: [
            'Free accounts can keep up to 3 upcoming events (5 in Ukraine).',
            'Premium removes the limit and unlocks all features.',
            'Choose monthly or yearly billing.',
          ],
          uk: [
            'Безкоштовний акаунт дозволяє до 3 майбутніх подій (5 в Україні).',
            'Premium знімає обмеження й відкриває всі можливості.',
            'Оберіть щомісячну або річну оплату.',
          ],
          ru: [
            'Бесплатный аккаунт допускает до 3 будущих событий (5 в Украине).',
            'Premium снимает ограничение и открывает все возможности.',
            'Выберите ежемесячную или годовую оплату.',
          ],
        },
      },
    ],
  },
];

/* ===== State & helpers ===== */
const params = new URLSearchParams(location.search);
let lang = 'en';

function t(key) {
  const entry = UI[key];
  return (entry && (entry[lang] || entry.en)) || '';
}

function detectLang() {
  const forced = (params.get('lang') || '').toLowerCase();
  if (SUPPORTED_LANGS.includes(forced)) return forced;
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser) ? browser : 'en';
}

function applyTheme() {
  const theme = (params.get('theme') || '').toLowerCase();
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

/* ===== Rendering ===== */
function render() {
  const root = document.getElementById('tutRoot');
  root.innerHTML = '';

  GROUPS.forEach((group) => {
    const section = document.createElement('section');
    section.className = 'tut-group';
    section.id = 'group-' + group.id;
    section.dataset.group = group.id;

    const head = document.createElement('div');
    head.className = 'tut-group-head';
    head.innerHTML =
      '<span class="tut-group-icon" aria-hidden="true">' + group.icon + '</span>' +
      '<h2 class="tut-group-title"></h2>';
    head.querySelector('.tut-group-title').textContent = group.title[lang];
    section.appendChild(head);

    const sub = document.createElement('p');
    sub.className = 'tut-group-sub';
    sub.textContent = group.sub[lang];
    section.appendChild(sub);

    group.items.forEach((item) => {
      section.appendChild(buildCard(item, group.id));
    });

    root.appendChild(section);
  });
}

function buildCard(item, groupId) {
  const card = document.createElement('details');
  card.className = 'tut-card';
  card.id = 'guide-' + item.id;
  card.dataset.group = groupId;
  // Lowercased searchable text
  const steps = item.steps[lang] || item.steps.en;
  card.dataset.search = [
    item.title[lang], item.summary ? item.summary[lang] : '', steps.join(' '),
  ].join(' ').toLowerCase();

  const summary = document.createElement('summary');
  summary.className = 'tut-summary';

  const badge = item.badge
    ? '<span class="tut-badge">' + t('badge.' + item.badge) + '</span>'
    : '';

  summary.innerHTML =
    '<span class="tut-card-icon" aria-hidden="true">' + item.icon + '</span>' +
    '<span class="tut-card-text">' +
      '<span class="tut-card-title"></span>' +
      '<span class="tut-card-summary"></span>' +
    '</span>' +
    badge +
    '<svg class="tut-chevron" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>';
  summary.querySelector('.tut-card-title').textContent = item.title[lang];
  if (item.summary) summary.querySelector('.tut-card-summary').textContent = item.summary[lang];
  card.appendChild(summary);

  const detail = document.createElement('div');
  detail.className = 'tut-detail';
  const inner = document.createElement('div');
  inner.className = 'tut-detail-inner';

  const ol = document.createElement('ol');
  ol.className = 'tut-steps';
  steps.forEach((s) => {
    const li = document.createElement('li');
    li.textContent = s;
    ol.appendChild(li);
  });
  inner.appendChild(ol);

  if (item.tip) {
    const tip = document.createElement('div');
    tip.className = 'tut-tip';
    tip.innerHTML = '<span class="tut-tip-icon" aria-hidden="true">💡</span><span></span>';
    tip.querySelector('span:last-child').innerHTML =
      '<strong>' + t('tip') + ':</strong> ';
    tip.querySelector('span:last-child').append(item.tip[lang]);
    inner.appendChild(tip);
  }

  detail.appendChild(inner);
  card.appendChild(detail);
  return card;
}

/* ===== Category chips ===== */
function buildChips() {
  const wrap = document.getElementById('tutChips');
  wrap.innerHTML = '';

  const all = document.createElement('button');
  all.type = 'button';
  all.className = 'tut-chip is-active';
  all.textContent = t('chip.all');
  all.dataset.target = '';
  wrap.appendChild(all);

  GROUPS.forEach((group) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'tut-chip';
    chip.textContent = group.icon + '  ' + group.title[lang];
    chip.dataset.target = 'group-' + group.id;
    wrap.appendChild(chip);
  });

  wrap.querySelectorAll('.tut-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      wrap.querySelectorAll('.tut-chip').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const target = chip.dataset.target;
      if (target) {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

/* ===== Search ===== */
function initSearch() {
  const input = document.getElementById('tutSearch');
  const empty = document.getElementById('tutEmpty');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let anyVisible = false;

    document.querySelectorAll('.tut-group').forEach((group) => {
      let groupHasMatch = false;
      group.querySelectorAll('.tut-card').forEach((card) => {
        const match = !q || card.dataset.search.includes(q);
        card.hidden = !match;
        if (match) { groupHasMatch = true; anyVisible = true; }
        if (q && match) card.open = true;
        if (!q) card.open = false;
      });
      group.hidden = !groupHasMatch;
    });

    empty.hidden = anyVisible;
  });
}

/* ===== Language switch ===== */
function setLang(next) {
  lang = SUPPORTED_LANGS.includes(next) ? next : 'en';
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }

  // Static UI text
  document.querySelectorAll('[data-t]').forEach((el) => {
    const key = el.getAttribute('data-t');
    if (UI[key]) el.textContent = t(key);
  });
  document.title = t('doc.title');
  document.getElementById('tutSearch').placeholder = t('search.ph');

  // Active state on both language switchers
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  buildChips();
  render();
  openTopicFromURL();
}

function openTopicFromURL() {
  const topic = params.get('topic');
  if (!topic) return;
  const el = document.getElementById('guide-' + topic);
  if (el) {
    el.open = true;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  }
}

/* ===== Init ===== */
(function init() {
  if (params.get('embed') === '1') document.body.classList.add('embed');
  applyTheme();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', () => setLang(btn.dataset.lang))
  );

  initSearch();
  setLang(detectLang());
})();
