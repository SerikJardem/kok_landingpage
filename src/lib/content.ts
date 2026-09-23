import type { BudgetBand, ExperienceLevel } from "./types";

export const nav = {
  numbers: "Цифры",
  locations: "Города",
  apply: "Заявка",
} as const;

export const hero = {
  eyebrow: "FAST CASUAL · STREET FOOD",
  tagline: "Тез. Таза. Fresh.",
  title: "Почему точка KŌK — рациональная ставка, а не «ещё одно кафе».",
  deck: "Меньше площади, людей и киловатт — быстрее до открытия и проще в жилом фонде.",
  metricsPreview: [
    { value: "−40%", label: "фонд оплаты труда" },
    { value: "18–25 кВт", label: "мощность точки" },
    { value: "3–4 нед.", label: "до открытия" },
  ],
  ctaApply: "Оставить контакт",
} as const;

export const problem = {
  title: "Обычная точка съедает деньги до открытия",
  body: "Нужны повар, большая площадь, мощная вентиляция и 50–70 кВт. В жилом фонде и стрит-ритейле это долго, дорого и рискованно.",
  burdens: [
    { value: "повар", label: "на смене" },
    { value: "большая", label: "площадь" },
    { value: "мощная", label: "вентиляция" },
    { value: "50–70 кВт", label: "ввод мощности" },
  ],
} as const;

export const model = {
  title: "Как это работает в Көк: вы открываете точку продажи, а готовит франчайзер.",
  body: "Центральный цех делает моно продукт курица, соусы и заготовки. На вашей точке — прогрев, сборка питы и выдача. Без фритюра, без «кухни ресторана» на смене.",
  points: [
    { role: "Сеть", title: "Сеть готовит", note: "моно продукт курица, соусы, заготовки" },
    { role: "Точка", title: "Вы собираете и продаёте", note: "линия выдачи по техкарте" },
  ],
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

export const closeCta = {
  title: "Следующий шаг",
  deck: "Если город свободен и цифры сходятся — оставляете контакт. Считаем локацию: midi 45–60 м² или express 25–35 м².",
  cta: "Оставить контакт",
} as const;

export const territories = {
  title: "Свободные для франшизы",
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
    under25: "Express 25–35 м²",
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
  tagline: "Тез. Таза. Fresh.",
  line: "Fast casual street food. Пита — моно продукт курица. Точка продажи без ресторанной кухни.",
  email: "sj@hostai.kz",
  rights: "KŌK · Алматы",
} as const;

export const stamps = [
  "ТЕЗ. ТАЗА. FRESH.",
  "STREET FOOD",
  "МОНО ПРОДУКТ КУРИЦА",
  "БЫСТРАЯ СБОРКА",
] as const;
