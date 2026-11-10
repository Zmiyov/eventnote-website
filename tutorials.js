/* ===== Events Notes — Tutorials =====
   Self-contained help center. Guides sit under tabs that mirror the app's tab bar; each one opens
   as a step-by-step walkthrough on an animated phone, in EN / UK / RU.
   URL params for the in-app webview:
     ?embed=1        hide the site header/footer (webview mode)
     ?lang=en|uk|ru  force a language
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
  'search.ph':    { en: 'Search…', uk: 'Пошук…', ru: 'Поиск…' },
  'search.empty': { en: 'No guides match your search.', uk: 'Немає гайдів за вашим запитом.', ru: 'Нет гайдов по вашему запросу.' },
  'tabs.label':   { en: 'Guide sections', uk: 'Розділи гайдів', ru: 'Разделы гайдов' },
  'steps':        { en: ['step', 'steps'], uk: ['крок', 'кроки', 'кроків'], ru: ['шаг', 'шага', 'шагов'] },
  'tip':          { en: 'Tip', uk: 'Порада', ru: 'Совет' },
  'wt.step':      { en: 'Step {n} of {m}', uk: 'Крок {n} з {m}', ru: 'Шаг {n} из {m}' },
  'wt.back':      { en: 'Back', uk: 'Назад', ru: 'Назад' },
  'wt.next':      { en: 'Next', uk: 'Далі', ru: 'Далее' },
  'wt.finish':    { en: 'Done', uk: 'Готово', ru: 'Готово' },
  'wt.close':     { en: 'Close guide', uk: 'Закрити гайд', ru: 'Закрыть гайд' },
  'wt.replay':    { en: 'Play this step again', uk: 'Показати крок ще раз', ru: 'Показать шаг ещё раз' },
  'doc.title':    { en: 'Events Notes — Tutorials', uk: 'Events Notes — Гайди', ru: 'Events Notes — Гайды' },
  'doc.desc':     {
    en: 'Learn how to use Events Notes — bookings, timelines, Sun Track, payments, backups, team and more. Step-by-step guides for iPhone, iPad and Mac.',
    uk: 'Як користуватися Events Notes — бронювання, таймлайни, Sun Track, оплати, резервні копії, команда та інше. Покрокові гайди для iPhone, iPad і Mac.',
    ru: 'Как пользоваться Events Notes — бронирования, таймлайны, Sun Track, оплаты, резервные копии, команда и другое. Пошаговые гайды для iPhone, iPad и Mac.',
  },
};
/* ---- Tabs and guides ----
   The tabs mirror the app's own tab bar (plus one for the widget and the Mac app).
   A tab holds guides directly, or subtabs for its screens that have their own tools. */
const TABS = [
  {
    id: 'schedule',
    title: { en: 'Schedule', uk: 'Розклад', ru: 'Расписание' },
    subtabs: [
      {
        id: 'calendar',
        title: { en: 'Calendar', uk: 'Календар', ru: 'Календарь' },
        sub: {
          en: 'Your month at a glance, and how to add a booking.',
          uk: 'Ваш місяць з першого погляду і як додати бронювання.',
          ru: 'Ваш месяц с первого взгляда и как добавить бронирование.',
        },
        items: [
          {
            id: 'calendar',
            title: { en: 'Calendar & schedule', uk: 'Календар і розклад', ru: 'Календарь и расписание' },
            summary: {
              en: 'Use the calendar to see the events of any day.',
              uk: 'Використовуйте календар для перегляду подій будь-якого дня.',
              ru: 'Используйте календарь для просмотра событий любого дня.',
            },
            steps: {
              en: [
                'The Schedule tab has a calendar in month or week view with special marks on the days. Red marks today, blue the selected day, orange a day that’s unavailable for bookings, and a small dot under the number shows that there are bookings on that date.',
                'Tap any date to see that day’s events below.',
                'Swipe to scroll through the months.',
                'Tap an event to open its details; swipe a row right to edit it or left to delete it.',
              ],
              uk: [
                'Вкладка «Розклад» містить календар у форматі місяця або тижня зі спеціальними позначеннями на днях. Червоним позначається сьогоднішній день, синім - обраний день, помаранчевим - недоступний до бронювань день, маленька крапка під числом - показує, що на цю дату є бронювання.',
                'Торкніться дати, щоб побачити події цього дня нижче.',
                'Гортайте місяці, за допомогою свайпу.',
                'Торкніться події, щоб відкрити деталі, проведіть по рядку: вправо, щоб редагувати, чи вліво, щоб видалити.',
              ],
              ru: [
                'Вкладка «Расписание» содержит календарь в формате месяца или недели со специальными отметками на днях. Красным отмечается сегодняшний день, синим — выбранный день, оранжевым — недоступный для бронирований день, маленькая точка под числом показывает, что на эту дату есть бронирования.',
                'Нажмите дату, чтобы увидеть события этого дня ниже.',
                'Листайте месяцы с помощью свайпа.',
                'Нажмите событие, чтобы открыть детали; проведите по строке вправо, чтобы изменить, или влево, чтобы удалить.',
              ],
            },
          },
          {
            id: 'create',
            title: { en: 'Create a new entry', uk: 'Створіть новий запис', ru: 'Создайте новую запись' },
            summary: {
              en: 'Add an event with all its details.',
              uk: 'Додайте подію з усією інформацією про неї.',
              ru: 'Добавьте событие со всей информацией о нём.',
            },
            steps: {
              en: [
                'On the Schedule tab, pick a date and tap Add (+).',
                'Choose the kind of shooting and set the date and time.',
                'Add the details of the client, location, price and notes.',
                'Save — the event appears on that day in your schedule.',
              ],
              uk: [
                'На вкладці «Розклад» оберіть дату й торкніться «Додати» (+).',
                'Оберіть тип зйомки та задайте дату й час.',
                'Додайте інформацію про клієнта, локацію, вартість і нотатки.',
                'Збережіть — подія зʼявиться в розкладі на цей день.',
              ],
              ru: [
                'На вкладке «Расписание» выберите дату и нажмите «Добавить» (+).',
                'Выберите тип съёмки и задайте дату и время.',
                'Добавьте информацию о клиенте, локации, стоимости и заметки.',
                'Сохраните — событие появится в расписании на этот день.',
              ],
            },
          },
        ],
      },
      {
        id: 'event',
        title: { en: 'Event', uk: 'Подія', ru: 'Событие' },
        sub: {
          en: 'Everything inside a booking: money, plans, light and the route.',
          uk: 'Усе всередині бронювання: гроші, плани, світло й маршрут.',
          ru: 'Всё внутри бронирования: деньги, планы, свет и маршрут.',
        },
        items: [
          {
            id: 'payments',
            title: {
              en: 'Payments, prepayment & certificates',
              uk: 'Оплати, передоплата й сертифікати',
              ru: 'Оплаты, предоплата и сертификаты',
            },
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
                'The amount in the full price field is counted on the Statistics page automatically.',
              ],
              uk: [
                'У події задайте повну вартість роботи.',
                'Додайте «Prepayment» (передоплату), яку клієнт уже вніс.',
                'Позначте бронювання як подарунковий сертифікат, якщо його оплатили наперед у подарунок.',
                'Значення, додане у поле повної оплати, автоматично враховується на сторінці «Статистика».',
              ],
              ru: [
                'В событии задайте полную стоимость работы.',
                'Добавьте «Prepayment» (предоплату), которую клиент уже внёс.',
                'Отметьте бронирование как подарочный сертификат, если его оплатили заранее в подарок.',
                'Значение, добавленное в поле полной оплаты, автоматически учитывается на странице «Статистика».',
              ],
            },
          },
          {
            id: 'timeline',
            title: { en: 'Timeline', uk: 'Таймлайн', ru: 'Таймлайн' },
            summary: {
              en: 'Create a schedule that breaks a shoot into timed stages.',
              uk: 'Створіть розклад для розбивки зйомки на етапи за часом.',
              ru: 'Создайте расписание, чтобы разбить съёмку на этапы по времени.',
            },
            steps: {
              en: [
                'Open an event and go to the Timeline section.',
                'Add timeline stages with a time and description for each part of the day.',
              ],
              uk: [
                'Відкрийте подію й перейдіть до розділу «Timeline».',
                'Додайте етапи таймлайну з часом і описом для кожної частини дня.',
              ],
              ru: [
                'Откройте событие и перейдите в раздел «Timeline».',
                'Добавьте этапы таймлайна с временем и описанием для каждой части дня.',
              ],
            },
          },
          {
            id: 'tasks',
            title: { en: 'To-do list', uk: 'Список справ', ru: 'Список дел' },
            summary: {
              en: 'Create a separate to-do list for each shoot.',
              uk: 'Створіть список справ для кожної зйомки окремо.',
              ru: 'Создайте список дел для каждой съёмки отдельно.',
            },
            steps: {
              en: [
                'Open an event and go to the To Do tab.',
                'Add tasks (“Add a task”) for things to prepare or bring.',
                'Check off completed tasks.',
              ],
              uk: [
                'Відкрийте подію й перейдіть на вкладку To Do.',
                'Додайте завдання («Add a task») — що підготувати чи взяти з собою.',
                'Позначайте завдання виконаними.',
              ],
              ru: [
                'Откройте событие и перейдите на вкладку To Do.',
                'Добавьте задачи («Add a task») — что подготовить или взять с собой.',
                'Отмечайте задачи выполненными.',
              ],
            },
          },
          {
            id: 'gallery',
            title: { en: 'Photo gallery', uk: 'Галерея фото', ru: 'Галерея фото' },
            summary: {
              en: 'Add reference and inspiration photos to an event.',
              uk: 'Додайте референси та фото для натхнення до події.',
              ru: 'Добавьте референсы и фото для вдохновения к событию.',
            },
            steps: {
              en: [
                'Open an event and find the Gallery section.',
                'Add photos from your library — poses, moodboards, client references.',
                'Tap a photo to view it full-screen on the shoot day.',
                'Mark photos as used.',
              ],
              uk: [
                'Відкрийте подію й знайдіть розділ «Gallery».',
                'Додайте фото з бібліотеки — пози, мудборди, референси клієнта.',
                'Торкніться фото, щоб відкрити його на весь екран у день зйомки.',
                'Позначайте фото, як використані.',
              ],
              ru: [
                'Откройте событие и найдите раздел «Gallery».',
                'Добавьте фото из библиотеки — позы, мудборды, референсы клиента.',
                'Нажмите фото, чтобы открыть его на весь экран в день съёмки.',
                'Отмечайте фото как использованные.',
              ],
            },
          },
          {
            id: 'reminders',
            title: { en: 'Reminders', uk: 'Нагадування', ru: 'Напоминания' },
            summary: {
              en: 'Set up local notifications for events and deadlines.',
              uk: 'Налаштуйте локальні сповіщення про події та дедлайни.',
              ru: 'Настройте локальные уведомления о событиях и дедлайнах.',
            },
            steps: {
              en: [
                'When creating or editing an event, set a reminder time for when it starts.',
                'Set a separate deadline reminder for delivery dates.',
                'Allow notifications when the app asks.',
                'Reminders appear on your device as push notifications.',
              ],
              uk: [
                'Створюючи або редагуючи подію, задайте час нагадування про її початок.',
                'Задайте окреме нагадування про дедлайн для дат здачі.',
                'Дозвольте сповіщення, коли застосунок попросить.',
                'Нагадування відображаються на пристрої у вигляді push-сповіщень.',
              ],
              ru: [
                'Создавая или редактируя событие, задайте время напоминания о его начале.',
                'Задайте отдельное напоминание о дедлайне для дат сдачи.',
                'Разрешите уведомления, когда приложение попросит.',
                'Напоминания отображаются на устройстве в виде push-уведомлений.',
              ],
            },
          },
          {
            id: 'suntrack',
            title: { en: 'Sun Track', uk: 'Sun Track', ru: 'Sun Track' },
            summary: {
              en: 'Pick the time with the best light for any spot and date.',
              uk: 'Обирайте час з найкращим світлом для будь-якого місця й дати.',
              ru: 'Выбирайте время с лучшим светом для любого места и даты.',
            },
            steps: {
              en: [
                'Open Sun Track (on the main screen or the event details screen).',
                'Move the map so your shoot spot sits under the center pin.',
                'Pick the date and time.',
                'Plan shots at sunrise, sunset or golden hour.',
              ],
              uk: [
                'Відкрийте Sun Track (на головному екрані чи екрані деталей події).',
                'Переміщайте карту так, щоб місце зйомки опинилося під центральною позначкою.',
                'Оберіть дату й час.',
                'Плануйте кадри на сході, заході сонця чи в золоту годину.',
              ],
              ru: [
                'Откройте Sun Track (на главном экране или экране деталей события).',
                'Перемещайте карту так, чтобы место съёмки оказалось под центральной меткой.',
                'Выберите дату и время.',
                'Планируйте кадры на рассвете, закате или в золотой час.',
              ],
            },
          },
          {
            id: 'routes',
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
          {
            id: 'team',
            title: { en: 'Team members', uk: 'Учасники команди', ru: 'Участники команды' },
            summary: {
              en: 'Add your team to an event — for the Agency role.',
              uk: 'Додавайте команду до події — для ролі «Агенція».',
              ru: 'Добавляйте команду к событию — для роли «Агентство».',
            },
            steps: {
              en: [
                'In the new event form, open the Team section and tap “Add team member”.',
                'Assign a contact and add info for each member on that shoot.',
              ],
              uk: [
                'У формі створення події відкрийте розділ «Team» і торкніться «Add team member».',
                'Призначте контакт і додайте інформацію для кожного учасника на цій зйомці.',
              ],
              ru: [
                'В форме создания события откройте раздел «Team» и нажмите «Add team member».',
                'Назначьте контакт и добавьте информацию для каждого участника на этой съёмке.',
              ],
            },
          },
        ],
      },
      {
        id: 'settings',
        title: { en: 'Settings', uk: 'Налаштування', ru: 'Настройки' },
        sub: {
          en: 'Set the app up for the way you work, and keep your data safe.',
          uk: 'Налаштуйте застосунок під свою роботу й бережіть дані.',
          ru: 'Настройте приложение под свою работу и берегите данные.',
        },
        items: [
          {
            id: 'role',
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
            id: 'icloud',
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
            id: 'applecal',
            title: {
              en: 'Import from Apple Calendar',
              uk: 'Імпорт з Apple Календаря',
              ru: 'Импорт из Apple Календаря',
            },
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
            id: 'gcal',
            title: {
              en: 'Import from Google Calendar',
              uk: 'Імпорт з Google Календаря',
              ru: 'Импорт из Google Календаря',
            },
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
            id: 'backup',
            title: {
              en: 'Backups & restore',
              uk: 'Резервні копії та відновлення',
              ru: 'Резервные копии и восстановление',
            },
            summary: {
              en: 'Save snapshots and restore data safely.',
              uk: 'Зберігайте знімки даних і відновлюйте їх безпечно.',
              ru: 'Сохраняйте снимки данных и восстанавливайте их безопасно.',
            },
            steps: {
              en: [
                'In Settings, open the backups (snapshots) screen.',
                'To restore, choose “Restore missing data” to merge, or “Replace everything” to overwrite.',
              ],
              uk: [
                'У Налаштуваннях відкрийте екран резервних копій (snapshots).',
                'Для відновлення оберіть «Restore missing data» (обʼєднати) або «Replace everything» (перезаписати).',
              ],
              ru: [
                'В Настройках откройте экран резервных копий (snapshots).',
                'Для восстановления выберите «Restore missing data» (объединить) или «Replace everything» (перезаписать).',
              ],
            },
            tip: {
              en: '“Replace everything” overwrites your current data. Read the instructions to make the right choice.',
              uk: '«Replace everything» перезаписує поточні дані. Ознайомтеся з інструкцією, щоб зробити правильний вибір.',
              ru: '«Replace everything» перезаписывает текущие данные. Ознакомьтесь с инструкцией, чтобы сделать правильный выбор.',
            },
          },
          {
            id: 'premium',
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
    ],
  },

  {
    id: 'deadlines',
    title: { en: 'Deadlines', uk: 'Дедлайни', ru: 'Дедлайны' },
    sub: {
      en: 'Every delivery counted down, and off your list once it’s done.',
      uk: 'Відлік до кожної здачі — і геть зі списку, щойно готово.',
      ru: 'Отсчёт до каждой сдачи — и долой из списка, как только готово.',
    },
    items: [
      {
        id: 'deadlines',
        title: { en: 'Deadlines & countdowns', uk: 'Дедлайни й відлік', ru: 'Дедлайны и отсчёт' },
        summary: {
          en: 'See what’s unfinished and how many days are left.',
          uk: 'Бачте незавершене й скільки днів лишилося.',
          ru: 'Видьте незавершённое и сколько дней осталось.',
        },
        steps: {
          en: [
            'Open the Deadlines tab to see unfinished jobs.',
            'Each one shows the days left until its deadline — urgent ones turn red.',
            'Set a deadline (and a deadline reminder) when creating or editing an event.',
          ],
          uk: [
            'Відкрийте вкладку «Дедлайни», щоб побачити незавершені роботи.',
            'Кожна показує, скільки днів лишилося до дедлайну, — термінові стають червоними.',
            'Задайте дедлайн (і нагадування про нього) при створенні або редагуванні події.',
          ],
          ru: [
            'Откройте вкладку «Дедлайны», чтобы увидеть незавершённые работы.',
            'Каждая показывает, сколько дней осталось до дедлайна, — срочные становятся красными.',
            'Задайте дедлайн (и напоминание о нём) при создании или редактировании события.',
          ],
        },
      },
      {
        id: 'deadline-done',
        title: {
          en: 'Mark a job as done',
          uk: 'Позначте роботу як виконану',
          ru: 'Отметьте работу как выполненную',
        },
        summary: {
          en: 'Delivered it? Take it off your deadlines list.',
          uk: 'Здали? Приберіть роботу зі списку дедлайнів.',
          ru: 'Сдали? Уберите работу из списка дедлайнов.',
        },
        steps: {
          en: [
            'Open the Deadlines tab.',
            'Press and hold the job you’ve delivered.',
            'Tap Done — it’s off your list.',
          ],
          uk: [
            'Відкрийте вкладку «Дедлайни».',
            'Затисніть картку роботи, яку ви здали.',
            'Торкніться «Готово» — і її більше немає у списку.',
          ],
          ru: [
            'Откройте вкладку «Дедлайны».',
            'Зажмите карточку работы, которую вы сдали.',
            'Коснитесь «Готово» — и её больше нет в списке.',
          ],
        },
      },
    ],
  },

  {
    id: 'contacts',
    title: { en: 'Contacts', uk: 'Контакти', ru: 'Контакты' },
    sub: {
      en: 'Clients and colleagues, one tap away.',
      uk: 'Клієнти й колеги на відстані одного дотику.',
      ru: 'Клиенты и коллеги на расстоянии одного касания.',
    },
    items: [
      {
        id: 'contacts',
        title: {
          en: 'Every client in one list',
          uk: 'Усі клієнти в одному списку',
          ru: 'Все клиенты в одном списке',
        },
        summary: {
          en: 'Clients from your events are saved for you.',
          uk: 'Клієнти з ваших подій зберігаються самі.',
          ru: 'Клиенты из ваших событий сохраняются сами.',
        },
        steps: {
          en: [
            'The Contacts tab lists everyone you’ve saved.',
            'In Colleagues, save the contacts of people you work with, so you can quickly get in touch or add them to a team.',
          ],
          uk: [
            'Вкладка «Контакти» містить усіх збережених клієнтів.',
            'В розділі «Колеги» зберігайте контакти з ким працюєте, щоб можно було швидко звʼязатися або додати в команду.',
          ],
          ru: [
            'Вкладка «Контакты» содержит всех сохранённых клиентов.',
            'В разделе «Коллеги» сохраняйте контакты тех, с кем работаете, чтобы можно было быстро связаться или добавить в команду.',
          ],
        },
      },
      /* Hidden for now — Save client details, to come back with the New Contact form
      {
        id: 'contacts-save',
        title: { en: 'Save client details', uk: 'Збережіть дані клієнта', ru: 'Сохраните данные клиента' },
        summary: {
          en: 'Phone, Telegram and Instagram, typed once.',
          uk: 'Телефон, Telegram та Instagram — лише один раз.',
          ru: 'Телефон, Telegram и Instagram — всего один раз.',
        },
        steps: {
          en: [
            'When creating an event, fill in the client’s name and phone.',
            'Add Telegram and Instagram — a @username or a link works.',
            'Or tap “Add from Contacts” to pick someone from your phone.',
          ],
          uk: [
            'Створюючи подію, заповніть імʼя та телефон клієнта.',
            'Додайте Telegram та Instagram — підійде @імʼя або посилання.',
            'Або торкніться «Add from Contacts» (Додати з контактів), щоб обрати людину з телефона.',
          ],
          ru: [
            'Создавая событие, заполните имя и телефон клиента.',
            'Добавьте Telegram и Instagram — подойдёт @имя или ссылка.',
            'Или нажмите «Add from Contacts» (Добавить из контактов), чтобы выбрать человека из телефона.',
          ],
        },
      },
      */
      {
        id: 'contacts-reach',
        title: {
          en: 'Reach a client in a tap',
          uk: 'Звʼязок із клієнтом одним дотиком',
          ru: 'Связь с клиентом одним касанием',
        },
        summary: {
          en: 'Call, message or open Instagram from their card.',
          uk: 'Дзвінок, повідомлення чи Instagram просто з картки.',
          ru: 'Звонок, сообщение или Instagram прямо из карточки.',
        },
        steps: {
          en: [
            'Find the client in Contacts and open their card.',
            'Tap the phone number to call.',
            'Tap Telegram or Instagram to open the app.',
          ],
          uk: [
            'Знайдіть клієнта в «Контактах» і відкрийте його картку.',
            'Торкніться номера телефону, щоб зателефонувати.',
            'Торкніться Telegram чи Instagram, щоб відкрити застосунок.',
          ],
          ru: [
            'Найдите клиента в «Контактах» и откройте его карточку.',
            'Нажмите на номер телефона, чтобы позвонить.',
            'Нажмите Telegram или Instagram, чтобы открыть приложение.',
          ],
        },
      },
    ],
  },

  {
    id: 'stats',
    title: { en: 'Statistics', uk: 'Статистика', ru: 'Статистика' },
    sub: {
      en: 'See how your year is really going.',
      uk: 'Дивіться, як насправді йде ваш рік.',
      ru: 'Смотрите, как на самом деле идёт ваш год.',
    },
    items: [
      {
        id: 'analytics',
        title: {
          en: 'Review your results for the year or any other period',
          uk: 'Переглядайте свої успіхи за рік чи інший період',
          ru: 'Просматривайте свои успехи за год или другой период',
        },
        summary: {
          en: 'See your earnings, number of shoots and hours shot for different periods.',
          uk: 'Переглядайте дані про дохід, кількість зйомок та відзнятих годин за різні періоди.',
          ru: 'Просматривайте данные о доходе, количестве съёмок и отснятых часов за разные периоды.',
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
      {
        id: 'charts',
        title: { en: 'Build custom charts', uk: 'Створюйте кастомні графіки', ru: 'Создавайте кастомные графики' },
        summary: {
          en: 'Chart what matters to your business.',
          uk: 'Графіки того, що важливо для вашого бізнесу.',
          ru: 'Графики того, что важно для вашего бизнеса.',
        },
        steps: {
          en: [
            'Open the Statistics tab.',
            'Under “Create custom charts”, tap Create.',
            'Choose the chart type, how to group it and what to show, then tap “Create chart”.',
            'Your charts sit on the Statistics screen — like shoots by type for a quarter.',
          ],
          uk: [
            'Відкрийте вкладку «Статистика».',
            'У блоці «Create custom charts» (Створити власні графіки) торкніться «Create».',
            'Оберіть тип графіка («Chart type»), групування («Group by») і дані («Show»), потім торкніться «Create chart».',
            'Ваші графіки зʼявляться на екрані статистики — наприклад, зйомки за типами за квартал.',
          ],
          ru: [
            'Откройте вкладку «Статистика».',
            'В блоке «Create custom charts» (Создать свои графики) нажмите «Create».',
            'Выберите тип графика («Chart type»), группировку («Group by») и данные («Show»), затем нажмите «Create chart».',
            'Ваши графики появятся на экране статистики — например, съёмки по типам за квартал.',
          ],
        },
      },
    ],
  },

  {
    id: 'beyond',
    title: { en: 'More features', uk: 'Додаткові можливості', ru: 'Дополнительные возможности' },
    sub: {
      en: 'Events Notes on your Home Screen and on your Mac.',
      uk: 'Events Notes на екрані «Додому» і на Mac.',
      ru: 'Events Notes на домашнем экране и на Mac.',
    },
    items: [
      {
        id: 'widget',
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
        id: 'mac',
        title: { en: 'The Mac app', uk: 'Застосунок для Mac', ru: 'Приложение для Mac' },
        summary: {
          en: 'Manage bookings full-screen on your Mac.',
          uk: 'Керуйте бронюваннями на весь екран на Mac.',
          ru: 'Управляйте бронированиями на весь экран на Mac.',
        },
        steps: {
          en: [
            'Install Events Notes on your Mac from the App Store.',
          ],
          uk: [
            'Встановіть Events Notes на Mac із App Store.',
          ],
          ru: [
            'Установите Events Notes на Mac из App Store.',
          ],
        },
        tip: {
          en: 'Use the same iCloud account to sync between devices.',
          uk: 'Використовуйте один аккаунт iCloud для синхронізації між пристроями.',
          ru: 'Используйте один аккаунт iCloud для синхронизации между устройствами.',
        },
      },
    ],
  },
];


/* ---- Walkthrough screens ----
   Drawn in iPhone points on a 440 × 956 screen, like the home page tour. A screen is a real
   screenshot (a path under assets/), or markup built here where the step animates ({A} = assets/).
   Overlays (sheets, alerts, banners) sit on top of the screen below them. */
const ASSET_BASE = new URL('assets/', document.currentScript.src).href;
const CHEV = '<img class="chev" src="{A}flow/ui/chev.webp" alt="" />';
const SCREENS = {
  schedule: 'flow/schedule.webp',
  details: 'flow/details.webp',
  contact: 'flow/contact-detail.webp',
  maps: 'flow/maps-route.webp',
  settings: 'tutorials/settings.webp',
  role: 'tutorials/role.webp',
  'newevent-type': 'tutorials/newevent-type.webp',
  'newevent-main': 'tutorials/newevent-main.webp',
  'newevent-payment': 'tutorials/newevent-payment.webp',
  'details-main': 'tutorials/details-main.webp',
  route: 'tutorials/route.webp',
  stats: 'tutorials/stats.webp',
  'chart-config': 'tutorials/chart-config.webp',
  timeline: 'tutorials/timeline-editor.webp',
  tasks: 'tutorials/tasks.webp',
  team: 'tutorials/team.webp',
  'import-apple': 'tutorials/import-apple.webp',
  'import-google': 'tutorials/import-google.webp',
  backup: 'tutorials/backup.webp',
  widget: 'tutorials/widget.webp',
  premium: 'tutorials/premium.webp',

  // New Event sheet, filled in as you watch (Create a booking)
  newevent: {
    overlay: true,
    html:
      '<div class="ph-dim" data-dim></div>' +
      '<div class="ph-sheet" data-sheet><div class="ne-scroll">' +
        '<div class="icard" style="top:187px;height:258px">' +
          `<div class="irow" style="top:-1px"><span class="lab">Event type</span><span class="typed" data-g="type" data-text="Wedding"></span>${CHEV}</div>` +
          '<div class="irow on" style="top:51px"><span class="lab">Date</span><span class="pills">' +
            '<span class="pill"><span class="swap" data-g="type" data-from="Nov 6, 2026" data-text="Nov 7, 2026">Nov 6, 2026</span></span>' +
            '<span class="pill"><span class="swap" data-g="type" data-from="12:00 AM" data-text="1:00 PM">12:00 AM</span></span></span></div>' +
          '<div class="irow on" style="top:103px"><span class="lab">Timezone: New_York, United States (Eastern)</span><img class="chev" src="{A}flow/ui/chev-dark.webp" alt="" /></div>' +
          `<div class="irow" style="top:155px"><span class="lab">Deadline</span><span class="typed" data-g="type" data-text="In a month"></span>${CHEV}</div>` +
          `<div class="irow" style="top:207px"><span class="lab">Number of Hours</span><span class="typed" data-g="type" data-text="9"></span>${CHEV}</div>` +
          '<i class="sep" style="top:51px"></i><i class="sep" style="top:103px"></i><i class="sep" style="top:155px"></i><i class="sep" style="top:207px"></i>' +
        '</div>' +
        '<div class="ihead" style="top:487px"><span>Contacts</span><a>Add from Contacts</a></div>' +
        '<div class="icard" style="top:510px;height:308px">' +
          '<div class="field" style="top:15px"><span class="ph">Name (required)</span><span class="typed" data-g="client" data-text="Emma &amp; James"></span></div>' +
          '<div class="field" style="top:79px"><span class="ph">Phone number</span><span class="typed" data-g="client" data-text="+1 212 555 0148"></span></div>' +
          '<div class="field" style="top:143px"><span class="ph">Telegram</span></div>' +
          '<span class="hint" style="top:195px">Format: @username or link</span>' +
          '<div class="field" style="top:226px"><span class="ph">Instagram</span><span class="typed" data-g="client" data-text="emma.and.james"></span></div>' +
          '<span class="hint" style="top:278px">Format: @username or link</span>' +
        '</div>' +
        '<div class="ihead" style="top:858px"><span>Location</span><a>Open Map</a></div>' +
        '<div class="icard" style="top:881px;height:77px">' +
          '<div class="field" style="top:15px"><span class="ph">Input location name</span><span class="typed" data-g="place" data-text="Central Park, New York"></span></div>' +
        '</div>' +
        '<div class="ihead" style="top:1000px"><span>Payment</span></div>' +
        '<div class="icard" style="top:1023px;height:205px">' +
          '<div class="field" style="top:15px"><span class="ph">Full Price</span><span class="typed" data-g="place" data-text="4 800"></span></div>' +
          '<div class="field" style="top:79px"><span class="ph">Prepayment</span><span class="typed" data-g="place" data-text="1 200"></span></div>' +
          '<div class="field gift" style="top:142px"><span>Gift certificate</span><i class="toggle"></i></div>' +
        '</div>' +
        '<div class="ihead" style="top:1269px"><span>Reminder</span></div>' +
        '<div class="icard" style="top:1293px;height:102px">' +
          `<div class="irow" style="top:-1px"><span class="lab">Event Alert</span>${CHEV}</div>` +
          `<div class="irow" style="top:51px"><span class="lab">Deadline Alert</span>${CHEV}</div><i class="sep" style="top:51px"></i>` +
        '</div>' +
      '</div>' +
      '<div class="ne-head">' +
        '<img class="ui" src="{A}flow/ui/nav-new.webp" style="top:8px;width:440px" alt="" />' +
        '<img class="ui" src="{A}flow/ui/tabs-main.webp" style="top:71px;width:440px" alt="" />' +
      '</div></div>',
  },

  // Sun Track with the app's own frames, cross-faded as the time changes; the time slider glides
  sun: {
    html:
      '<img class="full" src="{A}flow/sun/base.webp" alt="" />' +
      '<div class="frames" data-f="a" style="left:88px;top:388px;width:264px;height:142px"></div>' +
      '<div class="sun-slider" style="--x:40.25px"><img src="{A}flow/sun/slider.webp" alt="" />' +
        '<i class="sun-mark"></i><b class="sun-time">6:43 AM</b><i class="sun-fill"></i><i class="sun-thumb"></i></div>' +
      '<div class="frames" data-f="c" style="left:225px;top:828px;width:183px;height:49px"></div>' +
      '<div class="frames" data-f="d" style="left:20px;top:708px;width:400px;height:42px"></div>',
  },

  // Deadlines tab: counters run up; press and hold lifts the first card and opens its menu
  dlist: {
    html:
      '<img class="ui" src="{A}flow/ui/dl-status.webp" style="top:0;width:440px" alt="" />' +
      '<img class="ui" src="{A}flow/ui/dl-top.webp" style="top:56px;width:440px" alt="" />' +
      '<div class="dl-list">' +
        [
          ['Lauren &amp; Chris', 'Wedding', '2026, November 9', 3],
          ['Claire Donovan', 'Portrait', '2026, November 14', 8],
          ['The Hughes Family', 'Family', '2026, November 16', 10],
          ['Megan &amp; Josh', 'Wedding', '2026, November 23', 17],
          ['Rachel &amp; Tom', 'Wedding', '2026, November 30', 24],
        ].map(([n, type, d, v], i) =>
          `<div class="dl-card${i ? '' : ' first'}" style="--i:${i}"><b class="dl-name">${n}</b><span class="dl-type">${type}</span>` +
          `<p class="dl-sub">Submit by: <em>${d}</em></p><b class="dl-num${v < 5 ? ' red' : ''}" data-to="${v}">0</b>` +
          `<span class="dl-left${v < 5 ? ' red' : ''}">Days left</span></div>`).join('') +
      '</div>' +
      '<img class="ui" src="{A}flow/ui/tab-dl.webp" style="top:866px;width:440px" alt="" />' +
      '<div class="dl-dim"></div>' +
      '<div class="dl-lift"><b class="dl-name">Lauren &amp; Chris</b><span class="dl-type">Wedding</span>' +
        '<p class="dl-sub">Submit by: <em>2026, November 9</em></p><b class="dl-num red">3</b><span class="dl-left red">Days left</span></div>' +
      '<img class="ui dl-menu" src="{A}flow/ui/done-menu.webp" style="left:92px;top:266px;width:258px" alt="" />',
  },

  // Contacts tab: the client list
  clients: {
    html:
      '<img class="ui" src="{A}flow/ui/ct-status.webp" style="top:0;width:440px" alt="" />' +
      '<img class="ui" src="{A}flow/ui/ct-top.webp" style="top:56px;width:440px" alt="" />' +
      '<div class="ct-list">' +
        ['Emma &amp; James', 'Lauren &amp; Chris', 'Claire Donovan', 'The Hughes Family', 'Megan &amp; Josh', 'Rachel &amp; Tom']
          .map((n, i) => `<div class="ct-card" style="--i:${i}"><b>${n}</b></div>`).join('') +
      '</div>' +
      '<img class="ui" src="{A}flow/ui/tab-contacts.webp" style="top:866px;width:440px" alt="" />',
  },

  // Edit Event › Gallery, with photos added from the library
  gallery: {
    html:
      '<img class="full" src="{A}tutorials/gallery.webp" alt="" />' +
      '<div class="icard grow" style="top:321px">' +
        '<img class="ui" src="{A}flow/ui/row-addimg.webp" style="left:9px;top:5px;width:270px" alt="" />' +
        '<i class="sep" style="top:51px"></i>' +
        '<div class="photos">' +
          [1, 2, 3].map((n, i) => `<i style="--i:${i}"><img src="{A}flow/photo${n}.webp" alt="" /></i>`).join('') +
        '</div>' +
      '</div>',
  },
  // Full-screen photo with the viewer's Mark as used button
  photo: {
    html:
      '<div class="ph-photo"><img src="{A}flow/photo1.webp" alt="" /></div>' +
      '<span class="ph-used">' +
        '<svg viewBox="0 0 20 20" aria-hidden="true"><circle class="ring" cx="10" cy="10" r="8.5"/>' +
        '<circle class="fill" cx="10" cy="10" r="9.5"/><path class="tick" d="M6 10.4l2.7 2.6L14 7.6"/></svg>' +
        '<b class="off">Mark as used</b><b class="on">Used</b>' +
      '</span>',
  },

  // System pieces drawn here: the notification prompt, a reminder banner, the restore choices
  notify: {
    overlay: true,
    html:
      '<div class="ph-dim" data-dim></div>' +
      '<div class="ios-alert" data-pop><b>“Events Notes” Would Like to Send You Notifications</b>' +
        '<p>Notifications may include alerts, sounds and icon badges. These can be configured in Settings.</p>' +
        '<span class="ios-btn" style="left:22px">Don’t Allow</span><span class="ios-btn is-bold" style="left:155px">Allow</span></div>',
  },
  banner: {
    overlay: true,
    html:
      '<div class="ios-banner" data-drop><img src="{A}app-icon.png" alt="" />' +
        '<span class="ios-banner-text"><b>The Foster Family</b><span>Family · 9:00 AM – 11:00 AM, Central Park</span></span><time>now</time></div>',
  },
  restore: {
    overlay: true,
    html:
      '<div class="ph-dim" data-dim></div>' +
      '<div class="ios-actions" data-sheet>' +
        '<div class="ios-group"><span>Restore missing data</span><span class="is-red">Replace everything</span></div>' +
        '<div class="ios-group"><span class="is-bold">Cancel</span></div>' +
      '</div>',
  },
};

/* ---- Walkthrough steps ----
   One list of beats per step, played in order:
     { show: screen, via: 'push' | 'pop' | 'sheet' | 'dismiss' | 'fade' }   change the screen
     { tap: [x, y] }  { hold: [x, y] }  { swipe: [[x, y], [x, y]] }        a finger on the glass
     { spot: [x, y, w, h] | null }                                          light up part of the screen
     { fn: (ctx, animate) => … }                                            hand-built changes
   Going to a step replays the earlier ones instantly, so every beat must also work with animate = false. */
const typeIn = (screen, group) => ({ fn: (c, a) => c.type(screen, group, a) });
const state = (screen, cls, on = true) => ({ fn: (c) => c.cls(screen, cls, on) });
const SETTINGS_ROW = (y) => ({ spot: [18, y - 26, 404, 52] });
const toTab = (x, screen, extra = []) => [{ show: 'schedule' }, { tap: [x, 904] }, { show: screen, via: 'fade' }, ...extra];
const TAB_X = { deadlines: 173, contacts: 267, stats: 361 };

const SCENES = {
  calendar: [
    [{ show: 'schedule' }, { spot: [0, 118, 440, 330] }],
    [{ tap: [345, 239] }, { spot: [20, 475, 400, 345] }],
    [{ spot: [0, 118, 440, 330] }, { swipe: [[380, 320], [90, 320]] }],
    [{ tap: [220, 535] }, { show: 'details', via: 'sheet' }],
  ],
  create: [
    [{ show: 'schedule' }, { tap: [345, 239] }, { tap: [398, 832] }, { show: 'newevent', via: 'sheet' }],
    [{ tap: [220, 274] }, typeIn('newevent', 'type')],
    [typeIn('newevent', 'client'), state('newevent', 'scrolled'), { fn: (c, a) => c.sleep(a ? 900 : 0) }, typeIn('newevent', 'place')],
    [{ tap: [398, 104] }, { show: 'schedule', via: 'dismiss' }, { spot: [316, 206, 60, 64] }],
  ],
  payments: [
    [{ show: 'details-main' }, { spot: [36, 484, 369, 98] }, { tap: [395, 110] }, { spot: null }, { show: 'newevent-payment', via: 'sheet' }],
    [{ tap: [180, 513] }, { spot: [18, 488, 404, 52] }],
    [{ spot: [18, 557, 404, 52] }, { tap: [364, 583] }, { spot: null }, { show: 'stats', via: 'fade' }],
    [{ spot: [26, 224, 388, 157] }],
  ],
  timeline: [
    [{ show: 'team' }, { tap: [224, 207] }, { show: 'timeline', via: 'sheet' }],
    [{ spot: [18, 183, 404, 208] }, { tap: [130, 453] }],
  ],
  tasks: [
    [{ show: 'team' }, { tap: [101, 207] }, { show: 'tasks', via: 'sheet' }],
    [{ spot: [18, 194, 404, 171] }],
    [{ tap: [40, 336] }],
  ],
  gallery: [
    [{ show: 'team' }, { tap: [310, 166] }, { show: 'gallery', via: 'fade' }, { spot: [21, 272, 398, 101] }],
    [{ tap: [110, 347] }, state('gallery', 'open'), { fn: (c, a) => c.sleep(a ? 900 : 0) }],
    [{ tap: [83, 442] }, { show: 'photo', via: 'fade' }],
    [{ spot: [128, 848, 184, 56] }, { tap: [220, 876] }, state('photo', 'done'), { spot: [160, 848, 121, 56] }],
  ],
  reminders: [
    [{ show: 'newevent-payment' }, { spot: [18, 697, 404, 55] }, { tap: [200, 724] }],
    [{ spot: [18, 752, 404, 57] }, { tap: [200, 780] }],
    [{ show: 'schedule', via: 'dismiss' }, { show: 'notify', via: 'sheet' }, { tap: [286, 524] }, { show: 'schedule', via: 'dismiss' }],
    [{ show: 'banner', via: 'sheet' }],
  ],
  suntrack: [
    [{ show: 'details' }, { tap: [318, 276] }, { show: 'sun', via: 'sheet' }],
    [{ spot: [20, 150, 400, 440] }, { swipe: [[300, 480], [220, 390]] }],
    [{ tap: [218, 114] }, { spot: [0, 598, 440, 102] }, { fn: (c, a) => c.frames(a) }],
    [{ spot: [32, 700, 392, 190] }],
  ],
  routes: [
    [{ show: 'newevent-payment' }, { spot: [18, 262, 404, 52] }, { tap: [180, 288] }, { spot: null }, { show: 'details-main', via: 'sheet' }],
    [{ spot: [148, 358, 257, 108] }, { tap: [207, 416] }, { show: 'route', via: 'fade' }, { spot: [114, 279, 273, 155] }],
    [{ spot: [114, 365, 273, 68] }, { fn: (c, a) => c.sleep(a ? 700 : 0) }, { tap: [250, 399] }, { spot: null }, { show: 'maps', via: 'fade' }],
  ],
  team: [
    [{ show: 'team' }, { tap: [347, 207] }, { spot: [18, 318, 404, 57] }, { tap: [150, 346] }],
    [{ spot: [18, 274, 404, 101] }],
  ],

  role: [
    [{ show: 'schedule' }, { tap: [395, 84] }, { show: 'settings', via: 'push' }, SETTINGS_ROW(330), { tap: [220, 330] }, { spot: null }, { show: 'role', via: 'push' }],
    [{ spot: [18, 165, 404, 56] }, { tap: [220, 193] }, { spot: null }, { show: 'newevent-type', via: 'sheet' }],
    [{ spot: [18, 194, 404, 227] }],
  ],
  icloud: [
    [{ show: 'schedule' }, { spot: [350, 410, 86, 36] }],
    [{ tap: [395, 84] }, { show: 'settings', via: 'push' }, SETTINGS_ROW(448)],
    [{ show: 'schedule', via: 'pop' }, { spot: [350, 410, 86, 36] }],
  ],
  applecal: [
    [{ show: 'settings' }, SETTINGS_ROW(554), { tap: [220, 554] }, { spot: null }, { show: 'import-apple', via: 'push' }],
    [{ spot: [24, 831, 392, 64] }, { tap: [220, 863] }],
    [{ spot: [30, 380, 380, 230] }],
  ],
  gcal: [
    [{ show: 'settings' }, SETTINGS_ROW(501), { tap: [220, 501] }, { spot: null }, { show: 'import-google', via: 'push' }],
    [{ spot: [24, 831, 392, 64] }, { tap: [220, 863] }],
    [{ spot: [30, 380, 380, 230] }],
  ],
  backup: [
    [{ show: 'settings' }, SETTINGS_ROW(607), { tap: [220, 607] }, { spot: null }, { show: 'backup', via: 'push' }],
    [{ spot: [18, 214, 404, 93] }, { tap: [200, 270] }, { spot: null }, { show: 'restore', via: 'sheet' }, { tap: [220, 768] }],
  ],
  premium: [
    [{ show: 'settings' }, SETTINGS_ROW(211), { tap: [220, 211] }, { spot: null }, { show: 'premium', via: 'sheet' }],
    [{ spot: [18, 630, 404, 154] }],
    [{ spot: [88, 481, 264, 56] }, { tap: [250, 509] }, { tap: [141, 509] }],
  ],

  deadlines: [
    toTab(TAB_X.deadlines, 'dlist', [{ fn: (c, a) => c.count('dlist', a) }]),
    [{ spot: [345, 141, 78, 102] }],
    [{ show: 'newevent-main', via: 'sheet' }, { spot: [18, 437, 404, 57] }],
  ],
  'deadline-done': [
    toTab(TAB_X.deadlines, 'dlist', [{ fn: (c, a) => c.count('dlist', a) }]),
    [{ hold: [200, 191] }, state('dlist', 'press')],
    [{ tap: [220, 302] }, state('dlist', 'press', false), state('dlist', 'done')],
  ],

  contacts: [
    toTab(TAB_X.contacts, 'clients', [state('clients', 'listed'), { spot: [21, 171, 398, 352] }]),
    [{ spot: [122, 58, 196, 48] }],
  ],
  'contacts-save': [
    [{ show: 'newevent-main' }, { spot: [18, 627, 404, 142] }],
    [{ spot: [18, 771, 404, 173] }],
    [{ spot: [238, 580, 178, 34] }, { tap: [326, 597] }],
  ],
  'contacts-reach': [
    [{ show: 'clients' }, state('clients', 'listed'), { tap: [220, 215] }, { show: 'contact', via: 'push' }],
    [{ spot: [16, 302, 408, 68] }, { tap: [160, 336] }],
    [{ spot: [16, 370, 408, 128] }, { tap: [160, 466] }],
  ],

  analytics: [
    toTab(TAB_X.stats, 'stats'),
    [{ spot: [26, 224, 388, 157] }],
    [{ spot: [26, 224, 192, 157] }],
  ],
  charts: [
    toTab(TAB_X.stats, 'stats'),
    [{ spot: [97, 414, 246, 90] }, { tap: [220, 472] }, { spot: null }, { show: 'chart-config', via: 'sheet' }],
    [{ spot: [24, 176, 392, 154] }, { fn: (c, a) => c.sleep(a ? 1100 : 0) }, { spot: [26, 340, 388, 56] }, { tap: [220, 368] }],
    [{ show: 'stats', via: 'dismiss' }, { spot: [26, 136, 388, 252] }],
  ],

  widget: [
    [{ show: 'widget' }, { hold: [120, 62] }],
    [{ spot: [118, 450, 204, 205] }],
    [{ spot: [24, 835, 392, 60] }, { tap: [220, 864] }],
  ],
  mac: [
    [{ show: 'settings' }, SETTINGS_ROW(779)],
  ],
};

/* ---- Grid art ----
   The screen each guide's cell shows: a screen id or an image under assets/, and how far down
   the screen (in points) the crop starts. */
const ART = {
  calendar: ['schedule', 90], create: ['newevent-main', 0],
  payments: ['details-main', 330], timeline: ['timeline', 0], tasks: ['tasks', 0], gallery: ['tutorials/gallery.webp', 0],
  reminders: ['newevent-payment', 520], suntrack: ['flow/sun/base.webp', 120], routes: ['route', 200], team: ['team', 0],
  role: ['role', 0], icloud: ['settings', 360], applecal: ['import-apple', 280], gcal: ['import-google', 280],
  backup: ['backup', 0], premium: ['premium', 360],
  deadlines: ['tutorials/deadlines.webp', 0], 'deadline-done': ['tutorials/deadlines.webp', 120],
  contacts: ['flow/ui/ct-top.webp', 'strip'], 'contacts-save': ['newevent-main', 440], 'contacts-reach': ['contact', 0],
  analytics: ['stats', 0], charts: ['stats', 300],
  widget: ['widget', 300], mac: ['settings', 600],
};
const artSrc = (art) => (typeof SCREENS[art] === 'string' ? SCREENS[art] : art);

/* ---- Tab icons (drawn to match the app's tab bar, one stroke weight) ---- */
const ICON = (body) => `<svg class="tut-tab-icon" viewBox="0 0 28 28" aria-hidden="true">${body}</svg>`;
const ICONS = {
  schedule: ICON('<rect x="4" y="5.5" width="20" height="18" rx="4"/><path d="M4 11h20"/><path class="dot" d="M9.5 15.5h.01M14 15.5h.01M18.5 15.5h.01M9.5 19.5h.01M14 19.5h.01"/>'),
  deadlines: ICON('<path d="M17.5 23.5H8a4 4 0 0 1-4-4v-10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4"/><path d="M4 11h20"/><path class="dot" d="M9.5 15.5h.01M14 15.5h.01M9.5 19.5h.01"/><circle cx="21.5" cy="20.5" r="4.5"/><path d="M21.5 18.4v2.1"/><path class="dot" d="M21.5 22.8h.01"/>'),
  contacts: ICON('<circle cx="14" cy="14" r="10"/><circle cx="14" cy="11.5" r="3.5"/><path d="M7.6 21.6c1.4-2.6 3.8-3.9 6.4-3.9s5 1.3 6.4 3.9"/>'),
  stats: ICON('<path d="M6 22.5v-6M11.3 22.5V9M16.7 22.5v-9M22 22.5V5.5"/>'),
  beyond: ICON('<rect x="3.5" y="6" width="15" height="10.5" rx="1.5"/><path d="M1.5 19.5h15"/><rect x="18.5" y="10" width="7" height="12.5" rx="2"/>'),
};
const PLAY = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M5 3.4v9.2a.6.6 0 0 0 .9.5l7.3-4.6a.6.6 0 0 0 0-1L5.9 2.9a.6.6 0 0 0-.9.5Z" fill="currentColor"/></svg>';

/* ---- Markup for the tab bar, panels and guide grid ----
   Used by the page on load and by tools/build-pages.mjs for the static pages, so both always match. */
function plural(lang, n) {
  const f = UI.steps[lang] || UI.steps.en;
  if (lang === 'en') return n === 1 ? f[0] : f[1];
  const d = n % 10, h = n % 100;
  return d === 1 && h !== 11 ? f[0] : d >= 2 && d <= 4 && (h < 12 || h > 14) ? f[1] : f[2];
}

function renderGuides(lang, base) {
  const tx = (o) => (o && (o[lang] || o.en)) || '';
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const art = (id) => {
    const [a, y] = ART[id];
    if (y === 'strip') { // a header strip rather than a whole screen
      return `<span class="tut-cell-screen is-strip"><img src="${base}${artSrc(a)}" alt="" loading="lazy" decoding="async" /></span>`;
    }
    return `<span class="tut-cell-screen"><img src="${base}${artSrc(a)}" alt="" loading="lazy" decoding="async" style="--y:${y}" /></span>`;
  };

  const cell = (item, crumb) => {
    const steps = item.steps[lang] || item.steps.en;
    const search = [tx(item.title), tx(item.summary), steps.join(' ')].join(' ').toLowerCase();
    const tip = item.tip ? `<p>${esc(UI.tip[lang])}: ${esc(tx(item.tip))}</p>` : '';
    return (
      `<li class="tut-item"><a class="tut-cell" id="guide-${item.id}" href="?topic=${item.id}" data-topic="${item.id}" data-search="${esc(search)}">` +
      `<span class="tut-cell-art" aria-hidden="true">${art(item.id)}</span>` +
      `<span class="tut-cell-body"><span class="tut-cell-title">${esc(tx(item.title))}</span>` +
      `<span class="tut-cell-summary">${esc(tx(item.summary))}</span>` +
      `<span class="tut-cell-meta">${PLAY}<span>${steps.length} ${plural(lang, steps.length)}</span>` +
      `<span class="tut-cell-crumb">· ${esc(crumb)}</span></span></span>` +
      `<div class="tut-cell-steps" hidden><ol>${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>${tip}</div>` +
      `</a></li>`
    );
  };
  const grid = (items, crumb) => `<ul class="tut-grid">${items.map((i) => cell(i, crumb)).join('')}</ul>`;

  const tabBtn = (tab, i) =>
    `<button type="button" role="tab" class="tut-tab" id="tabbtn-${tab.id}" aria-controls="tab-${tab.id}" ` +
    `aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ''} data-tab="${tab.id}">${ICONS[tab.id]}<span class="tut-tab-label">${esc(tx(tab.title))}</span></button>`;

  const panel = (tab, i) => {
    let inner;
    if (tab.subtabs) {
      inner =
        `<div class="tut-seg" role="tablist" aria-label="${esc(tx(tab.title))}">` +
        tab.subtabs.map((s, j) =>
          `<button type="button" role="tab" class="tut-seg-btn" id="segbtn-${s.id}" aria-controls="sub-${s.id}" ` +
          `aria-selected="${j === 0}"${j ? ' tabindex="-1"' : ''} data-sub="${s.id}">${esc(tx(s.title))}</button>`).join('') +
        `</div>` +
        tab.subtabs.map((s, j) =>
          `<div class="tut-subpanel" id="sub-${s.id}" role="tabpanel" aria-labelledby="segbtn-${s.id}" data-sub="${s.id}"${j ? ' hidden' : ''}>` +
          `<p class="tut-panel-sub">${esc(tx(s.sub))}</p>${grid(s.items, `${tx(tab.title)} › ${tx(s.title)}`)}</div>`).join('');
    } else {
      inner = `<p class="tut-panel-sub">${esc(tx(tab.sub))}</p>${grid(tab.items, tx(tab.title))}`;
    }
    return `<section class="tut-panel" id="tab-${tab.id}" role="tabpanel" aria-labelledby="tabbtn-${tab.id}" data-tab="${tab.id}"${i ? ' hidden' : ''}>${inner}</section>`;
  };

  const last = TABS.length - 1;
  return (
    `<div class="tut-tabbar"><div class="tut-tabs" role="tablist" aria-label="${esc(tx(UI['tabs.label']))}">` +
    `<div class="tut-pill">${TABS.slice(0, last).map(tabBtn).join('')}</div>` +
    `<div class="tut-pill tut-pill-solo">${tabBtn(TABS[last], last)}</div>` +
    `</div></div>\n` +
    `<div class="tut-panels">${TABS.map(panel).join('\n')}</div>\n`
  );
}

/* ===== State & helpers ===== */
const params = new URLSearchParams(location.search);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let lang = 'en';

function t(key, vars) {
  const entry = UI[key];
  let s = (entry && (entry[lang] || entry.en)) || '';
  if (vars) Object.keys(vars).forEach((k) => { s = s.replace('{' + k + '}', vars[k]); });
  return s;
}

function detectLang() {
  const forced = (params.get('lang') || '').toLowerCase();
  if (SUPPORTED_LANGS.includes(forced)) return forced;
  // The site has a page per language; only the in-app webview picks one itself
  if (params.get('embed') !== '1') return document.documentElement.lang;
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser) ? browser : 'en';
}

// Every guide with the tab (and subtab) it lives in
function findGuide(id) {
  for (const tab of TABS) {
    for (const sub of tab.subtabs || [null]) {
      const item = (sub ? sub.items : tab.items).find((it) => it.id === id);
      if (item) return { item, tab, sub };
    }
  }
  return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ===== Tabs ===== */
const root = document.getElementById('tutRoot');

function selectTab(tabId, focus) {
  root.querySelectorAll('.tut-tab').forEach((btn) => {
    const on = btn.dataset.tab === tabId;
    btn.setAttribute('aria-selected', String(on));
    btn.tabIndex = on ? 0 : -1;
    if (on && focus) btn.focus();
  });
  root.querySelectorAll('.tut-panel').forEach((p) => { p.hidden = p.dataset.tab !== tabId; });
}

function selectSub(subId, focus) {
  const btn = document.getElementById('segbtn-' + subId);
  const seg = btn.parentElement;
  seg.querySelectorAll('.tut-seg-btn').forEach((b) => {
    const on = b === btn;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
  });
  seg.parentElement.querySelectorAll('.tut-subpanel').forEach((p) => { p.hidden = p.dataset.sub !== subId; });
  if (focus) btn.focus();
}

// Arrow keys move between tabs, as the ARIA tabs pattern expects
function arrowNav(e, selector, pick) {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
  const scope = selector === '.tut-seg-btn' ? [...e.target.parentElement.children] : [...root.querySelectorAll(selector)];
  let i = scope.indexOf(e.target);
  if (e.key === 'ArrowLeft') i = (i - 1 + scope.length) % scope.length;
  if (e.key === 'ArrowRight') i = (i + 1) % scope.length;
  if (e.key === 'Home') i = 0;
  if (e.key === 'End') i = scope.length - 1;
  e.preventDefault();
  pick(scope[i]);
}

function wireGuides() {
  root.querySelectorAll('.tut-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      clearSearch();
      selectTab(btn.dataset.tab);
    });
    btn.addEventListener('keydown', (e) => arrowNav(e, '.tut-tab', (b) => { clearSearch(); selectTab(b.dataset.tab, true); }));
  });
  root.querySelectorAll('.tut-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => selectSub(btn.dataset.sub));
    btn.addEventListener('keydown', (e) => arrowNav(e, '.tut-seg-btn', (b) => selectSub(b.dataset.sub, true)));
  });
  root.querySelectorAll('.tut-cell').forEach((cell) => {
    cell.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      openGuide(cell.dataset.topic, { push: true });
    });
  });
}

function render() {
  root.innerHTML = renderGuides(lang, ASSET_BASE);
  wireGuides();
}

/* ===== Search ===== */
const searchInput = document.getElementById('tutSearch');
const emptyEl = document.getElementById('tutEmpty');

function runSearch() {
  const q = searchInput.value.trim().toLowerCase();
  root.classList.toggle('is-searching', !!q);
  let any = false;
  root.querySelectorAll('.tut-item').forEach((li) => {
    const match = !q || li.firstElementChild.dataset.search.includes(q);
    li.hidden = !match;
    if (match) any = true;
  });
  // while searching, every panel shows and only those with matches stay
  root.querySelectorAll('.tut-panel, .tut-subpanel').forEach((p) => {
    p.classList.toggle('has-none', !!q && !p.querySelector('.tut-item:not([hidden])'));
  });
  emptyEl.hidden = !q || any;
}

function clearSearch() {
  if (!searchInput.value) return;
  searchInput.value = '';
  runSearch();
}

searchInput.addEventListener('input', runSearch);

/* ===== Walkthrough player ===== */
const SUN_FRAMES = 14;
const EASE_IOS = 'cubic-bezier(.32, .72, 0, 1)';
let wt = null;            // the overlay, built on first use
let guide = null;         // { id, item, tab, sub, scene }
let stepIndex = 0;
let token = 0;
let zTop = 0;
let current = null;       // id of the screen in front
let pushedState = false;
let returnFocus = null;
const layers = {};

function buildOverlay() {
  wt = document.createElement('div');
  wt.className = 'wt';
  wt.hidden = true;
  wt.setAttribute('role', 'dialog');
  wt.setAttribute('aria-modal', 'true');
  wt.setAttribute('aria-labelledby', 'wtTitle');
  wt.innerHTML =
    '<div class="wt-backdrop"></div>' +
    '<div class="wt-sheet">' +
      '<button type="button" class="wt-close"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<div class="wt-body">' +
        '<div class="wt-device">' +
          '<div class="wt-holder"><div class="wt-phone"><div class="wt-screen">' +
            '<span class="wt-spot"></span><span class="wt-tap"></span>' +
          '</div><button type="button" class="wt-replay"></button></div></div>' +
        '</div>' +
        '<div class="wt-copy">' +
          '<h2 class="wt-title" id="wtTitle"></h2>' +
          '<p class="wt-summary"></p>' +
          '<ol class="wt-steps"></ol>' +
          '<p class="wt-tip"></p>' +
          '<div class="wt-nav">' +
            '<div class="wt-progress" aria-hidden="true"></div>' +
            '<span class="wt-count" aria-live="polite"></span>' +
            '<button type="button" class="wt-btn wt-prev"></button>' +
            '<button type="button" class="wt-btn wt-next is-primary"></button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(wt);

  wt.querySelector('.wt-close').addEventListener('click', () => closeGuide());
  wt.querySelector('.wt-backdrop').addEventListener('click', () => closeGuide());
  wt.querySelector('.wt-prev').addEventListener('click', () => go(stepIndex - 1));
  wt.querySelector('.wt-next').addEventListener('click', () => {
    if (stepIndex < guide.scene.length - 1) go(stepIndex + 1);
    else closeGuide();
  });
  let swiped = false;
  wt.querySelector('.wt-replay').addEventListener('click', () => {
    if (swiped) { swiped = false; return; }
    go(stepIndex, { replay: true });
  });
  wt.querySelector('.wt-steps').addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li) go(Number(li.dataset.i));
  });

  wt.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); closeGuide(); }
    else if (e.key === 'ArrowRight' && !e.target.closest('.wt-steps')) { e.preventDefault(); if (stepIndex < guide.scene.length - 1) go(stepIndex + 1); }
    else if (e.key === 'ArrowLeft' && !e.target.closest('.wt-steps')) { e.preventDefault(); if (stepIndex > 0) go(stepIndex - 1); }
    else if (e.key === 'Tab') trapFocus(e);
  });

  // Swipe the phone sideways to change steps
  const device = wt.querySelector('.wt-device');
  let sx = null, sy = 0;
  device.addEventListener('pointerdown', (e) => { sx = e.clientX; sy = e.clientY; });
  device.addEventListener('pointerup', (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    sx = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    swiped = true; // the click that follows is part of the swipe, not a replay
    setTimeout(() => { swiped = false; }, 400);
    if (dx < 0 && stepIndex < guide.scene.length - 1) go(stepIndex + 1);
    if (dx > 0 && stepIndex > 0) go(stepIndex - 1);
  });
  device.addEventListener('pointercancel', () => { sx = null; });

  // Refit whenever the phone's space changes: a window resize, and also the copy
  // growing under it on a phone (a longer step, the tip on the last one)
  new ResizeObserver(fitPhone).observe(device);
}

function trapFocus(e) {
  const items = [...wt.querySelectorAll('button:not([disabled]), [tabindex="0"]')].filter((el) => el.offsetParent);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

// The phone is drawn at 460 × 976 and scaled to fit its column
function fitPhone() {
  if (!wt || wt.hidden) return;
  const box = wt.querySelector('.wt-device').getBoundingClientRect();
  const s = Math.min(box.height / 976, box.width / 460, 0.9);
  wt.style.setProperty('--s', Math.max(0.3, s).toFixed(4));
}

/* ----- Screens ----- */
// Drawn over a screenshot where a guide names something the shot doesn't show:
// 19 November closed for bookings (the app's orange day)
const SCREEN_MARKS = {
  schedule: '<span class="cal-off" style="left:220px;top:314px">19</span>',
};

const screenEl = () => wt.querySelector('.wt-screen');

function layerFor(id) {
  if (layers[id]) return layers[id];
  const def = SCREENS[id];
  const el = document.createElement('section');
  el.className = 'wt-layer';
  el.dataset.s = id;
  if (typeof def === 'string') {
    el.innerHTML = `<img class="full" src="${ASSET_BASE}${def}" alt="" />` + (SCREEN_MARKS[id] || '');
  } else {
    el.innerHTML = def.html.replace(/\{A\}/g, ASSET_BASE);
    if (def.overlay) el.classList.add('is-overlay');
    el.querySelectorAll('.frames').forEach((set) => {
      for (let i = 0; i < SUN_FRAMES; i++) {
        const img = document.createElement('img');
        img.alt = '';
        img.src = `${ASSET_BASE}flow/sun/${set.dataset.f}${String(i).padStart(2, '0')}.webp`;
        set.appendChild(img);
      }
    });
  }
  screenEl().insertBefore(el, screenEl().querySelector('.wt-spot'));
  layers[id] = el;
  return el;
}

// Hand-built screens go back to how they start
function resetLayer(el) {
  el.classList.remove('on', 'press', 'done', 'counted', 'listed', 'scrolled', 'open');
  el.style.zIndex = '';
  el.querySelectorAll('.typed').forEach((n) => { n.textContent = ''; n.classList.remove('typing'); });
  el.querySelectorAll('.swap').forEach((n) => { n.textContent = n.dataset.from; });
  el.querySelectorAll('[data-to]').forEach((n) => { n.textContent = '0'; });
  el.querySelectorAll('.frames img').forEach((img) => img.classList.remove('on'));
  el.querySelectorAll('.sun-slider').forEach((s) => setSunSlider(s, 0));
}

// Sun Track's time slider at p (0 = 6:43 AM, 1 = 4:03 PM), measured from the app's frames
const SUN_X = [40.25, 380.25];   // thumb centre, px
const SUN_MIN = [403, 963];      // minutes since midnight
function setSunSlider(s, p) {
  s.style.setProperty('--x', `${SUN_X[0] + (SUN_X[1] - SUN_X[0]) * p}px`);
  const m = Math.round(SUN_MIN[0] + (SUN_MIN[1] - SUN_MIN[0]) * p);
  const h = Math.floor(m / 60);
  s.querySelector('.sun-time').textContent = `${(h + 11) % 12 + 1}:${String(m % 60).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

function cancelAnimations() {
  screenEl().getAnimations({ subtree: true }).forEach((a) => a.cancel());
}

const anim = (el, frames, opts) =>
  el ? el.animate(frames, { duration: 520, easing: EASE_IOS, fill: 'both', ...opts }).finished.catch(() => {}) : Promise.resolve();

async function show(id, via, animate) {
  const next = layerFor(id);
  const prev = current && layers[current];
  if (prev === next) return;
  current = id;
  const back = via === 'pop' || via === 'dismiss';
  next.style.zIndex = back && prev ? Number(prev.style.zIndex) - 1 : ++zTop;
  next.classList.add('on');

  if (animate && via && prev) {
    const parts = (el, sel) => el.querySelector(sel);
    if (via === 'push') {
      await Promise.all([anim(next, [{ transform: 'translateX(100%)' }, { transform: 'none' }]),
        anim(prev, [{ transform: 'none', filter: 'brightness(1)' }, { transform: 'translateX(-30%)', filter: 'brightness(.85)' }])]);
    } else if (via === 'pop') {
      await Promise.all([anim(prev, [{ transform: 'none' }, { transform: 'translateX(100%)' }]),
        anim(next, [{ transform: 'translateX(-30%)', filter: 'brightness(.85)' }, { transform: 'none', filter: 'brightness(1)' }])]);
    } else if (via === 'sheet' && next.classList.contains('is-overlay')) {
      await Promise.all([
        anim(parts(next, '[data-dim]'), [{ opacity: 0 }, { opacity: 1 }], { duration: 400, easing: 'ease-out' }),
        anim(parts(next, '[data-sheet]'), [{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 600 }),
        anim(parts(next, '[data-pop]'), [{ opacity: 0, transform: 'scale(1.12)' }, { opacity: 1, transform: 'none' }], { duration: 380 }),
        anim(parts(next, '[data-drop]'), [{ transform: 'translateY(-140%)' }, { transform: 'none' }], { duration: 640 }),
      ]);
    } else if (via === 'sheet') {
      await anim(next, [{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: 600 });
    } else if (via === 'dismiss' && prev.classList.contains('is-overlay')) {
      await Promise.all([
        anim(parts(prev, '[data-dim]'), [{ opacity: 1 }, { opacity: 0 }], { duration: 360, easing: 'ease-in' }),
        anim(parts(prev, '[data-sheet]'), [{ transform: 'none' }, { transform: 'translateY(105%)' }], { duration: 460 }),
        anim(parts(prev, '[data-pop]'), [{ opacity: 1 }, { opacity: 0, transform: 'scale(.94)' }], { duration: 220, easing: 'ease-in' }),
        anim(parts(prev, '[data-drop]'), [{ transform: 'none' }, { transform: 'translateY(-140%)' }], { duration: 420 }),
      ]);
    } else if (via === 'dismiss') {
      await anim(prev, [{ transform: 'none' }, { transform: 'translateY(100%)' }], { duration: 460 });
    } else {
      await anim(next, [{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out' });
    }
  }
  // An overlay keeps the screen under it; anything else is the only screen left
  const keep = new Set([next]);
  if (next.classList.contains('is-overlay')) {
    const under = Object.values(layers).filter((l) => l.classList.contains('on') && l !== next && !l.classList.contains('is-overlay'))
      .sort((a, b) => b.style.zIndex - a.style.zIndex)[0];
    if (under) keep.add(under);
  }
  Object.values(layers).forEach((l) => { if (!keep.has(l)) l.classList.remove('on'); });
  if (animate) [next, prev].forEach((l) => l && l.getAnimations({ subtree: true }).forEach((a) => a.cancel()));
}

/* ----- Finger and spotlight ----- */
const pt = (v) => v + 'px';

async function finger(kind, at, my) {
  const tap = wt.querySelector('.wt-tap');
  const [x, y] = kind === 'swipe' ? at[0] : at;
  Object.assign(tap.style, { left: pt(x), top: pt(y) });
  if (kind === 'tap') {
    await anim(tap, [
      { opacity: 0, transform: 'scale(1.5)' }, { opacity: 1, transform: 'scale(.82)', offset: 0.35 }, { opacity: 0, transform: 'scale(1.1)' },
    ], { duration: 560, easing: 'ease-out', fill: 'none' });
  } else if (kind === 'hold') {
    await anim(tap, [
      { opacity: 0, transform: 'scale(1.5)' }, { opacity: 1, transform: 'scale(.82)', offset: 0.18 },
      { opacity: 1, transform: 'scale(.95)', offset: 0.85 }, { opacity: 0, transform: 'scale(1.15)' },
    ], { duration: 1150, easing: 'ease-out', fill: 'none' });
  } else {
    const [dx, dy] = [at[1][0] - x, at[1][1] - y];
    await anim(tap, [
      { opacity: 0, transform: 'translate(0, 0) scale(1.3)' }, { opacity: 1, transform: 'translate(0, 0) scale(.85)', offset: 0.2 },
      { opacity: 1, transform: `translate(${dx}px, ${dy}px) scale(.85)`, offset: 0.8 }, { opacity: 0, transform: `translate(${dx}px, ${dy}px) scale(1.1)` },
    ], { duration: 1200, easing: 'cubic-bezier(.45, 0, .25, 1)', fill: 'none' });
  }
  if (my === token) await sleep(120);
}

function spot(rect, animate) {
  const el = wt.querySelector('.wt-spot');
  if (!rect) { el.classList.remove('on'); return; }
  const [x, y, w, h] = rect;
  const wasOn = el.classList.contains('on');
  if (!wasOn || !animate) el.classList.add('wt-jump');
  Object.assign(el.style, { left: pt(x), top: pt(y), width: pt(w), height: pt(h) });
  void el.offsetWidth;
  el.classList.remove('wt-jump');
  el.classList.add('on');
}

/* ----- Hand-built helpers the scenes call ----- */
function makeCtx(my) {
  const alive = () => my === token;
  return {
    sleep: (ms) => (ms ? sleep(ms) : null),
    cls: (id, c, on) => layerFor(id).classList.toggle(c, on),
    async type(id, group, animate) {
      for (const el of layerFor(id).querySelectorAll(`[data-g="${group}"]`)) {
        if (!animate) { el.textContent = el.dataset.text; continue; }
        if (!alive()) return;
        if (el.classList.contains('swap')) {
          el.classList.add('flash');
          await sleep(200);
          el.textContent = el.dataset.text;
          el.classList.remove('flash');
          await sleep(260);
          continue;
        }
        el.classList.add('typing');
        for (let i = 1; i <= el.dataset.text.length; i++) {
          if (!alive()) { el.classList.remove('typing'); return; }
          el.textContent = el.dataset.text.slice(0, i);
          await sleep(34 + Math.random() * 30);
        }
        el.classList.remove('typing');
        await sleep(160);
      }
    },
    count(id, animate) {
      const el = layerFor(id);
      el.classList.add('counted');
      el.querySelectorAll('[data-to]').forEach((n) => {
        const to = Number(n.dataset.to);
        if (!animate) { n.textContent = to; return; }
        let start = null;
        const frame = (time) => {
          if (!alive()) { n.textContent = to; return; }
          if (start === null) start = time + 300;
          const p = Math.min(1, Math.max(0, (time - start) / 1100));
          n.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      });
      return animate ? sleep(1500) : null;
    },
    async frames(animate) {
      const layer = layerFor('sun');
      const sets = [...layer.querySelectorAll('.frames')];
      const slider = layer.querySelector('.sun-slider');
      const setFrame = (k) => sets.forEach((s) => s.querySelectorAll('img').forEach((img, i) => img.classList.toggle('on', i === k)));
      if (!animate) { setFrame(SUN_FRAMES - 1); setSunSlider(slider, 1); return; }
      // Where the thumb sits in each frame (0–1), so the map and cards change as it passes
      const at = [0, .077, .145, .219, .288, .359, .429, .504, .571, .645, .716, .785, .896, 1];
      setFrame(0);
      await sleep(400);
      const dur = 2300;
      let start = null;
      await new Promise((done) => {
        const tick = (time) => {
          if (!alive()) return done();
          if (start === null) start = time;
          const t = Math.min(1, (time - start) / dur);
          const p = t < .5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t);
          setSunSlider(slider, p);
          let k = 0;
          while (k < SUN_FRAMES - 1 && at[k + 1] - p < p - at[k]) k++;
          setFrame(k);
          if (t < 1) requestAnimationFrame(tick); else done();
        };
        requestAnimationFrame(tick);
      });
    },
  };
}

async function beat(b, animate, my, ctx) {
  if ('show' in b) return show(b.show, b.via, animate);
  if ('spot' in b) return spot(b.spot, animate);
  if (b.fn) return b.fn(ctx, animate);
  if (!animate) return;
  if (b.tap) return finger('tap', b.tap, my);
  if (b.hold) return finger('hold', b.hold, my);
  if (b.swipe) return finger('swipe', b.swipe, my);
}

// Rebuild the screen as it is at the start of step k, then play step k
async function go(k, { replay = false, first = false } = {}) {
  if (!guide || k < 0 || k >= guide.scene.length) return;
  const forward = k === stepIndex + 1;
  stepIndex = k;
  const my = ++token;
  const animate = !reducedMotion.matches;
  const ctx = makeCtx(my);
  updateCopy();

  const screen = screenEl();
  if (!forward && !first && animate) {
    await anim(screen, [{ opacity: 1 }, { opacity: 0.25 }], { duration: 140, easing: 'ease-in', fill: 'forwards' });
    if (my !== token) return;
  }
  screen.classList.add('wt-instant');
  cancelAnimations();
  Object.values(layers).forEach(resetLayer);
  current = null;
  zTop = 0;
  spot(null);
  for (let i = 0; i < k; i++) for (const b of guide.scene[i]) await beat(b, false, my, ctx);
  spot(null);
  void screen.offsetWidth;
  screen.classList.remove('wt-instant');
  if (!forward && !first && animate) anim(screen, [{ opacity: 0.25 }, { opacity: 1 }], { duration: 260, easing: 'ease-out', fill: 'none' });

  if (animate && !first && !replay) await sleep(forward ? 120 : 260);
  if (animate && first) await sleep(520); // let the sheet arrive first
  for (const b of guide.scene[k]) {
    if (my !== token) return;
    await beat(b, animate, my, ctx);
  }
}

function updateCopy() {
  const total = guide.scene.length;
  wt.querySelectorAll('.wt-steps li').forEach((li, i) => {
    li.classList.toggle('is-active', i === stepIndex);
    li.classList.toggle('is-done', i < stepIndex);
    if (i === stepIndex) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
  wt.querySelectorAll('.wt-progress i').forEach((seg, i) => seg.classList.toggle('on', i <= stepIndex));
  wt.querySelector('.wt-count').textContent = t('wt.step', { n: stepIndex + 1, m: total });
  wt.querySelector('.wt-prev').disabled = stepIndex === 0;
  wt.querySelector('.wt-next').textContent = stepIndex === total - 1 ? t('wt.finish') : t('wt.next');
  wt.classList.toggle('is-last', stepIndex === total - 1);
}

/* ----- Open / close ----- */
function setTopicParam(id) {
  const url = new URL(location.href);
  if (id) url.searchParams.set('topic', id); else url.searchParams.delete('topic');
  return url.pathname + url.search + url.hash;
}

function openGuide(id, { push = false } = {}) {
  const found = findGuide(id);
  if (!found || !SCENES[id]) return;
  if (!wt) buildOverlay();
  const wasOpen = !wt.hidden;
  guide = { id, ...found, scene: SCENES[id] };

  // the grid behind shows the guide's tab, so closing lands where it lives
  clearSearch();
  selectTab(found.tab.id);
  if (found.sub) selectSub(found.sub.id);
  returnFocus = document.getElementById('guide-' + id);

  if (push) { history.pushState({ topic: id }, '', setTopicParam(id)); pushedState = true; }

  const item = found.item;
  const steps = item.steps[lang] || item.steps.en;
  wt.querySelector('.wt-title').textContent = item.title[lang] || item.title.en;
  wt.querySelector('.wt-summary').textContent = item.summary ? item.summary[lang] || item.summary.en : '';
  wt.querySelector('.wt-steps').innerHTML = steps.map((s, i) =>
    `<li data-i="${i}" tabindex="0"><span class="wt-num" aria-hidden="true">${i + 1}</span><span class="wt-step-text"></span></li>`).join('');
  wt.querySelectorAll('.wt-step-text').forEach((el, i) => { el.textContent = steps[i]; });
  wt.querySelectorAll('.wt-steps li').forEach((li) => li.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(Number(li.dataset.i)); }
  }));
  const tip = wt.querySelector('.wt-tip');
  tip.hidden = !item.tip;
  if (item.tip) {
    tip.innerHTML = '<strong></strong> <span></span>';
    tip.firstChild.textContent = t('tip') + ':';
    tip.lastChild.textContent = item.tip[lang] || item.tip.en;
  }
  wt.querySelector('.wt-progress').innerHTML = steps.map(() => '<i></i>').join('');
  wt.querySelector('.wt-close').setAttribute('aria-label', t('wt.close'));
  wt.querySelector('.wt-replay').setAttribute('aria-label', t('wt.replay'));
  wt.querySelector('.wt-prev').textContent = t('wt.back');

  // a fresh phone for this guide; its screens start loading now
  token++;
  Object.keys(layers).forEach((k) => { layers[k].remove(); delete layers[k]; });
  current = null;
  guide.scene.flat().forEach((b) => { if (b.show) layerFor(b.show); });

  wt.hidden = false;
  document.body.classList.add('tut-no-scroll');
  fitPhone();
  stepIndex = 0;
  if (!wasOpen && !reducedMotion.matches) {
    anim(wt.querySelector('.wt-backdrop'), [{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: 'ease-out', fill: 'none' });
    anim(wt.querySelector('.wt-sheet'), [{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: 560, fill: 'none' });
  }
  wt.querySelector('.wt-next').focus({ preventScroll: true });
  go(0, { first: true });
}

async function closeGuide({ fromHistory = false } = {}) {
  if (!wt || wt.hidden) return;
  token++;
  if (!fromHistory) {
    if (pushedState) history.back(); // popstate finishes the close
    else history.replaceState(null, '', setTopicParam(null));
    if (pushedState) return;
  }
  pushedState = false;
  if (!reducedMotion.matches) {
    await Promise.all([
      anim(wt.querySelector('.wt-backdrop'), [{ opacity: 1 }, { opacity: 0 }], { duration: 280, easing: 'ease-in' }),
      anim(wt.querySelector('.wt-sheet'), [{ transform: 'none' }, { transform: 'translateY(100%)' }], { duration: 380, easing: 'cubic-bezier(.4, 0, 1, 1)' }),
    ]);
  }
  wt.hidden = true;
  wt.getAnimations({ subtree: true }).forEach((a) => a.cancel());
  document.body.classList.remove('tut-no-scroll');
  guide = null;
  if (returnFocus) {
    returnFocus.focus({ preventScroll: true });
    returnFocus.scrollIntoView({ block: 'nearest' });
  }
}

window.addEventListener('popstate', () => {
  const topic = new URLSearchParams(location.search).get('topic');
  if (topic) openGuide(topic);
  else closeGuide({ fromHistory: true });
});

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
  document.querySelector('meta[name="description"]').setAttribute('content', t('doc.desc'));
  searchInput.placeholder = t('search.ph');
  searchInput.setAttribute('aria-label', t('search.ph'));

  // Active state on both language switchers
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const open = guide && guide.id;
  render();
  runSearch();
  if (open) openGuide(open);
}

/* ===== Init ===== */
(function init() {
  if (params.get('embed') === '1') document.body.classList.add('embed');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Language links open that language's page; the webview switches in place to keep its params
  document.querySelectorAll('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      if (params.get('embed') === '1') {
        e.preventDefault();
        setLang(btn.dataset.lang);
      } else {
        try { localStorage.setItem('lang', btn.dataset.lang); } catch (err) { /* ignore */ }
      }
    })
  );

  setLang(detectLang());
  const topic = params.get('topic');
  if (topic) openGuide(topic);
})();
