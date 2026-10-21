import type {
  BudgetBand,
  CateringHeadcount,
  CateringNeed,
  ExperienceLevel,
} from "./types";

export const nav = {
  numbers: "Цифры",
  menu: "Меню",
  catering: "Кейтеринг",
  franchise: "Франшиза",
  locations: "Города",
  partners: "Партнёрам",
  apply: "Заявка",
} as const;

/** Published Google Slides deck for franchise pitch. */
export const franchiseDeck = {
  title: "KŌK — франшиза",
  description:
    "Презентация франшизы KŌK: формат точки, продукт и модель партнёрства.",
  embedSrc:
    "https://docs.google.com/presentation/d/e/2PACX-1vQla4fx3QSdniKdAZflSW1BCBkGbInxcA7YkxtHCxYeE6mODyWKZ1bcj6_EJny2FGzfUKL2Z66AGiZM/pubembed?start=false&loop=true&delayms=10000",
} as const;

export const hero = {
  eyebrow: "URBAN FOOD",
  title: "Почему точка KŌK — рациональная ставка, а не «ещё одно кафе».",
  deck: "Родное в новом ритме. Знакомый бешбармак концепт мы переводим на язык города: быстрее, легче и ближе к повседневной жизни. Ушбармак — традиция есть тремя пальцами.",
  metricsPreview: [
    { value: "−40%", label: "фонд оплаты труда" },
    { value: "18–25 кВт", label: "мощность точки" },
    { value: "3–4 нед.", label: "до открытия" },
  ],
  ctaApply: "Оставить контакт",
} as const;

export const problem = {
  stamp: "Grab & Go",
  title: "Завтрак и обед — взять и пойти",
  body: "Салат, пита или кофе в удобной упаковке: свежий продукт с цеха, быстрая выдача, вкус, который хочется повторить между встречами и по дороге на работу.",
  image: "/brand/kok-grab-go-salad.jpg",
  imageAlt: "KŌK Grab & Go — куриный салат на вынос для завтрака и обеда",
  beats: [
    { value: "утро", label: "кофе + лёгкий старт" },
    { value: "день", label: "салат или пита с собой" },
  ],
} as const;

export const model = {
  body: "Urban food без тяжёлой кухни: нежная курица с цеха, фирменные соусы и хруст свежих овощей. Короткий лист — быстрая сборка, чистый вкус, ощущение «homemade · healthy · natural».",
} as const;

export const numbers = {
  title: "Цифры, на которых держится решение",
  cards: [
    {
      value: "−40%",
      label: "фонд оплаты труда",
      note: "оператор 15–18 тыс. ₸/смена вместо повара 25–30",
    },
    {
      value: "45–60 м²",
      label: "midi-формат",
      note: "на 50–60% меньше классического кафе · 20–25 посадок",
    },
    {
      value: "18–25 кВт",
      label: "мощность",
      note: "вместо типичных 50–70 кВт — ниже ввод и CAPEX",
    },
    {
      value: "3–4 нед.",
      label: "до открытия",
      note: "лёгкий ремонт, без тяжёлой вытяжки и гидрофильтра",
    },
    {
      value: "быстрая",
      label: "сборка",
      note: "гость не ждёт кухню — линия сборки по техкарте",
    },
    {
      value: "<2%",
      label: "списания",
      note: "порции с цеха бьются с чеками, не «на глаз»",
    },
  ],
} as const;

export const product = {
  title: "Продукт понятен за секунду",
  body: "Пита — моно продукт курица. Мало позиций, пять соусов. Утром точка работает как кофейня (8:00–11:30); днём — еда с собой. Кросс-продажа салатов и напитков — до 42%.",
  dayparts: [
    {
      label: "Утро",
      note: "Кофейня 8:00–11:30",
      image: "/brand/kok-coffee-cup.png",
      alt: "Кофе в стакане KŌK",
    },
    {
      label: "День",
      note: "Еда с собой",
      image: "/brand/kok-green-cup.png",
      alt: "Пита KŌK в фирменном стакане — еда с собой",
    },
  ],
  beats: [
    { value: "5", label: "соусов" },
    { value: "8:00–11:30", label: "кофейное окно" },
    { value: "до 42%", label: "кросс-продажа" },
  ],
} as const;

/** Guest-facing menu — no prices; macros are approximate for positioning. */
export const menu = {
  title: "Меню, которое гости понимают с первого взгляда",
  ribbon: "Все питы — со свежими овощами",
  footnote:
    "Ккал и белок — ориентиры для гостя (±10%). Финальные значения зависят от порции и сезона овощей.",
  groups: [
    {
      label: "Питы",
      items: [
        {
          name: "Курица су-вид · ранч",
          blurb:
            "Мягкая курица су-вид — сочная до последней нитки. Сливочный ранч, чёрный кунжут и хруст овощей: сытно, чисто, без ощущения «фастфуда».",
          image: "/brand/menu-pita-sousvide.jpg",
          alt: "Пита KŌK с курицей су-вид и соусом ранч",
          kcal: "~480",
          protein: "~32 г",
          edge: "Нежность су-вид vs сухая курица с гриля",
        },
        {
          name: "Курица гриль · курт",
          blurb:
            "Дымок гриля и знакомый курт — казахстанский акцент в городской пите. Свежий огурец, лук и зелень держат баланс: ярче вкуса, легче послевкусия.",
          image: "/brand/menu-pita-grill.jpg",
          alt: "Пита KŌK с курицей гриль и соусом курт",
          kcal: "~510",
          protein: "~34 г",
          edge: "Локальный соус курт — отличие от глобальных сетей",
        },
        {
          name: "Говядина томлёная · демиглас",
          blurb:
            "Медленная томлёность и бархатный демиглас. Перец и зелёный лук добавляют свежести — это «праздничная» пита в обычный будний день.",
          image: "/brand/menu-pita-beef.jpg",
          alt: "Пита KŌK с томлёной говядиной и соусом демиглас",
          kcal: "~590",
          protein: "~36 г",
          edge: "Ресторанный соус без ресторанной кухни на точке",
        },
      ],
    },
    {
      label: "С собой · напитки",
      items: [
        {
          name: "Овощные стаканчики",
          blurb:
            "Хрустящий микс овощей и соус на дне стакана — grab&go перекус, который выглядит как забота о себе, а не как компромисс.",
          image: "/brand/menu-veggie-cup.jpg",
          alt: "Овощные стаканчики KŌK с миксом соусов",
          kcal: "~160",
          protein: "~4 г",
          edge: "Лёгкий апселл к пите · до 42% кросс-продаж",
        },
        {
          name: "Cold brew улун · ананас",
          blurb:
            "Холодный улун с ананасовой свежестью — мягкая бодрость без сироповой тяжести. Напиток «на бегу», который хочется допить до конца.",
          image: "/brand/menu-drink-oolong.jpg",
          alt: "Cold brew молочный улун с ананасом в стакане KŌK",
          kcal: "~90",
          protein: "~1 г",
          edge: "Чайная глубина вместо сладкой газировки",
        },
        {
          name: "Крыжовник · яблоко · алоэ",
          blurb:
            "Лимонад с кислинкой ягоды, яблока и прохладой алоэ. Чистый, летний, без приторности — идеальный компаньон к пите.",
          image: "/brand/menu-drink-lemonade.jpg",
          alt: "Лимонад крыжовник–яблоко–алоэ в стакане KŌK",
          kcal: "~110",
          protein: "—",
          edge: "Лёгкость и витаминный профиль vs классический лимонад",
        },
      ],
    },
  ],
} as const;

export const closeCta = {
  title: "Следующий шаг",
  deck: "Если город свободен и цифры сходятся — оставляете контакт. Считаем локацию: midi 45–60 м² или express до 30 м².",
  cta: "Оставить контакт",
} as const;

export const territories = {
  title: "Скоро в вашем городе",
  deck: "Города, где ещё можно открыть точку. Midi в стрит-ритейле. Express на фудкорте.",
  availableTitle: "Открыты к заявке",
  book: "Оставить контакт",
  occupiedHint: "Территория занята",
  constructionHint: "Уже в работе",
  sourceSheet: "Реестр: живая таблица",
  sourceFallback: "Реестр: локальный контур — подключите Google Sheet",
  status: {
    available: "Свободно",
    construction: "В строительстве",
    occupied: "Занято",
  },
} as const;

export const quiz = {
  title: "Заявка партнёра",
  steps: ["Город", "Опыт", "Формат", "Контакт"],
  cityLabel: "Какой город хотите вести?",
  cityOther: "Другой город",
  cityPlaceholder: "Название города",
  experienceLabel: "Есть опыт в HoReCa или в своём деле?",
  experience: {
    yes: "Да",
    no: "Нет",
    partial: "Частично",
  } satisfies Record<ExperienceLevel, string>,
  budgetLabel: "Какой формат рассматриваете?",
  budget: {
    under25: "Express до 30 м²",
    "25to50": "Midi 45–60 м²",
    "50to80": "Несколько точек",
    over80: "Сеть / несколько городов",
  } satisfies Record<BudgetBand, string>,
  nameLabel: "Имя",
  contactLabel: "Телефон или Telegram",
  contactPlaceholder: "+7 … или @handle",
  back: "Назад",
  next: "Дальше",
  submit: "Отправить заявку",
  close: "Закрыть",
  successTitle: "Заявка ушла.",
  successBody: "Команда KŌK прочитает её и напишет. Без автоворонки — живой разговор.",
  queuedTitle: "Заявка собрана.",
  queuedBody:
    "Telegram-канал ещё не подключён. Текст заявки сохранён в ответе — передайте его команде или добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID.",
  error: "Не отправилось. Проверьте поля и попробуйте ещё раз.",
} as const;

export const footer = {
  tagline: "URBAN FOOD",
  line: "Urban food. Пита — моно продукт курица. Точка продажи без ресторанной кухни.",
  email: "sj@hostai.kz",
  rights: "KŌK · Алматы",
} as const;

export const stamps = [
  "URBAN FOOD",
  "МОНО ПРОДУКТ КУРИЦА",
  "БЫСТРАЯ СБОРКА",
] as const;

export const catering = {
  stamp: "CATERING",
  title: "Еда для вашей встречи — без ресторанной возни.",
  deck: "От индивидуальных порций до пита-спреда для 50, 100 или 200+ гостей. Заявка за 24 часа — соберём еду и напитки под ваш формат.",
  notice: "Все заказы — минимум за 24 часа.",
  points: [
    "Питы со свежими овощами — порционно или спредом.",
    "Напитки: cold brew, лимонады; кофе уточняем при подтверждении.",
    "Для офиса, кампуса, встречи или сбора — без банкетного театра.",
  ],
  sizes: [
    { key: "50" as const, label: "50 гостей", hint: "небольшая встреча" },
    { key: "100" as const, label: "100 гостей", hint: "офис / кампус" },
    { key: "200plus" as const, label: "200+", hint: "крупное событие" },
  ],
  formTitle: "Заявка на кейтеринг",
  formDeck: "Короткий опросник. Заявка уходит команде в Telegram.",
  needLabel: "Что нужно?",
  need: {
    food: "Только еда",
    drinks: "Только напитки",
    both: "Еда и напитки",
  } satisfies Record<CateringNeed, string>,
  headcountLabel: "Сколько гостей?",
  headcount: {
    "50": "≈ 50",
    "100": "≈ 100",
    "200plus": "200+",
  } satisfies Record<CateringHeadcount, string>,
  dateLabel: "Дата события",
  timeLabel: "Время (необязательно)",
  cityLabel: "Город",
  venueLabel: "Адрес / площадка",
  organizationLabel: "Организация (необязательно)",
  nameLabel: "Имя",
  contactLabel: "Телефон или Telegram",
  contactPlaceholder: "+7 … или @handle",
  notesLabel: "Комментарий",
  notesPlaceholder: "Аллергии, упаковка, окно доставки…",
  submit: "Отправить заявку",
  successTitle: "Заявка на кейтеринг ушла.",
  successBody:
    "Команда KŌK увидит её в Telegram и напишет для подтверждения меню и объёма.",
  queuedTitle: "Заявка собрана.",
  queuedBody:
    "Telegram ещё не подключён. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID — или передайте данные команде вручную.",
  error: "Не отправилось. Проверьте поля и попробуйте ещё раз.",
  dateTooSoon: "Нужно минимум 24 часа до события.",
  cta: "Оставить заявку",
} as const;
