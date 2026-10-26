/** Canonical site URL (custom domain on GitHub Pages). */
export const siteUrl = "https://www.kokfood.kz";

export const seo = {
  title: "KØK — Жеңіл әрі тез · fast gourmet",
  titleTemplate: "%s | KØK",
  description:
    "KØK — fast gourmet без фритюрного масла: питы, крудите и напитки. Homemade · healthy · natural. Grab&Go в Алматы и по Казахстану. Жеңіл әрі тез. Франшиза с Vision AI и видеоаналитикой для HoReCa.",
  keywords: [
    // Brand
    "KØK",
    "KOK",
    "KŌK",
    "кок",
    "kokfood",
    "kokfood.kz",
    "Жеңіл әрі тез",
    "fast gourmet",
    "homemade healthy natural",
    "grab and go",
    "GRAB&GO",
    "пита",
    "шелпек",
    "крудите",
    "без фритюра",
    "стрит фуд Алматы",
    "urban food",
    "франшиза",
    "франшиза Казахстан",
    "франшиза Қазақстан",
    "Алматы",
    "кейтеринг",
    "street food",
    "Almaty",
    "Kazakhstan",
    // Vision AI · HoReCa · retail (RU)
    "видеоаналитика",
    "умная видеоаналитика",
    "компьютерное зрение",
    "Vision AI",
    "AI видеоаналитика",
    "видеоаналитика ресторан",
    "видеоаналитика кафе",
    "видеоаналитика кофейня",
    "видеоаналитика HoReCa",
    "видеоаналитика ритейл",
    "искусственный интеллект ресторан",
    "ИИ камеры кафе",
    "контроль кассы камера",
    "аналитика гостей",
    "операционная аналитика точка",
    "HostAI",
    // Vision AI · hospitality · retail (EN)
    "smart video analytics",
    "computer vision hospitality",
    "AI video analysis restaurant",
    "AI video analytics coffee shop",
    "video analytics HoReCa",
    "retail computer vision",
    "restaurant computer vision",
    "cafe video analytics",
    "hospitality AI cameras",
    "queue analytics restaurant",
    "checkout speed analytics",
    "kitchen zone video AI",
    "guest analytics AI",
  ],
  ogImage: "/brand/kok-og.jpg",
  locale: "ru_KZ",
  alternateLocales: ["kk_KZ", "en_US"],
} as const;

/** Franchise / Vision AI page meta (EN+RU discovery). */
export const franchiseSeo = {
  title: "Франшиза · Vision AI кейсы",
  description:
    "Франшиза KØK: презентация формата и кейсы технологии — Vision AI / умная видеоаналитика на кассе, входе и производстве. Smart video analytics for HoReCa and Grab&Go retail in Kazakhstan.",
  keywords: [
    "франшиза KØK",
    "франшиза HoReCa Казахстан",
    "Vision AI франшиза",
    "видеоаналитика точка питания",
    "smart video analytics franchise",
    "AI video analysis restaurant Kazakhstan",
    "computer vision coffee shop",
    "HoReCa video analytics",
  ],
} as const;

/** Partner ops page meta. */
export const opsSeo = {
  title: "Партнёру: Vision AI, аналитика, смены",
  description:
    "Vision AI по зонам бара, кухни и зала · аналитика гостей · смены в Telegram. Smart video analytics for restaurants, cafés and coffee shops — computer vision for HoReCa operations with KØK.",
  keywords: [
    "Vision AI HoReCa",
    "видеоаналитика ресторан",
    "AI video analysis cafe",
    "smart videoanalytics coffee shop",
    "computer vision retail hospitality",
    "kitchen video AI",
    "guest analytics restaurant",
  ],
} as const;

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "KØK",
        alternateName: ["KOK", "KŌK", "Кок", "kokfood", "HostAI KØK"],
        url: siteUrl,
        logo: `${siteUrl}/brand/kok-mark-k.png`,
        email: "sj@hostai.kz",
        description: seo.description,
        slogan: "Жеңіл әрі тез",
        areaServed: { "@type": "Country", name: "Kazakhstan" },
        knowsLanguage: ["ru", "kk", "en"],
        sameAs: ["https://hostai.kz/demo/"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KØK",
        description: seo.description,
        inLanguage: ["ru", "kk", "en"],
        publisher: { "@id": `${siteUrl}/#organization` },
        keywords: seo.keywords.join(", "),
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#brand` },
        inLanguage: ["ru", "kk", "en"],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}${seo.ogImage}`,
        },
      },
      {
        "@type": ["FoodEstablishment", "FastFoodRestaurant"],
        "@id": `${siteUrl}/#brand`,
        name: "KØK",
        description:
          "Fast gourmet: питы с мясом по стандартам бренд-шефа, фирменные соусы и свежие овощи. Без фритюрного масла. Homemade · healthy · natural. Grab&Go. Операции точки усилены Vision AI / видеоаналитикой.",
        servesCuisine: ["Fast Gourmet", "Urban Food", "Grab and Go"],
        slogan: "Жеңіл әрі тез",
        url: siteUrl,
        image: `${siteUrl}${seo.ogImage}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Almaty",
          addressCountry: "KZ",
        },
      },
      {
        "@type": "Offer",
        "@id": `${siteUrl}/#franchise`,
        name: "KØK франшиза",
        description:
          "Партнёрская точка KØK: сборочный формат без тяжёлой кухни, продукт с центрального цеха, midi ~60 м² или express до 30 м². В контуре — Vision AI и операционная видеоаналитика (касса, вход, производство).",
        category: "Food franchise",
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        areaServed: "KZ",
        availableAtOrFrom: { "@id": `${siteUrl}/#brand` },
        seller: { "@id": `${siteUrl}/#organization` },
        url: `${siteUrl}/franchise`,
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#vision-ai`,
        name: "Vision AI · smart video analytics for HoReCa",
        alternateName: [
          "Умная видеоаналитика HoReCa",
          "AI video analysis restaurant",
          "Computer vision for coffee shops and retail F&B",
        ],
        serviceType: "Computer vision / video analytics for hospitality",
        description:
          "KØK franchise operations use Vision AI (HostAI): smart video analytics on checkout speed, reception/entrance, kitchen zones and hall cleanliness. Computer vision for restaurants, cafés, coffee shops and Grab&Go retail — бар, кухня, зал; guest analytics; Telegram shifts.",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "Kazakhstan" },
        audience: {
          "@type": "Audience",
          audienceType:
            "HoReCa operators, restaurant and café franchisees, coffee shop and retail F&B owners",
        },
        url: `${siteUrl}/ops`,
        category: [
          "Video analytics",
          "Computer vision",
          "HoReCa AI",
          "Retail hospitality AI",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/ops#webpage`,
        url: `${siteUrl}/ops`,
        name: opsSeo.title,
        description: opsSeo.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#vision-ai` },
        inLanguage: ["ru", "en"],
        keywords: opsSeo.keywords.join(", "),
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/franchise#webpage`,
        url: `${siteUrl}/franchise`,
        name: franchiseSeo.title,
        description: franchiseSeo.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: [{ "@id": `${siteUrl}/#franchise` }, { "@id": `${siteUrl}/#vision-ai` }],
        inLanguage: ["ru", "en"],
        keywords: franchiseSeo.keywords.join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq-vision`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Vision AI / smart video analytics at KØK?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KØK franchise points use computer vision cameras to monitor bar/checkout, kitchen assembly, and hall tables. The system tracks staff presence, tasks, cleanliness and guest flow, then feeds analytics and Telegram shift alerts — AI video analysis for restaurants, cafés and coffee shops (HoReCa / retail F&B).",
            },
          },
          {
            "@type": "Question",
            name: "Что такое умная видеоаналитика и Vision AI в KØK?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "На точках франшизы KØK камеры с компьютерным зрением видят бар/кассу, сборку на кухне и чистоту столов в зале. Система помогает контролировать смену, скорость у кассы, зоны производства и аналитику гостей — видеоаналитика для ресторанов, кафе, кофеен и HoReCa/ритейла питания.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I see AI video analysis demos for hospitality?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Case clips (checkout speed, reception, kitchen zones) are on ${siteUrl}/franchise. Zone-by-zone Vision AI, guest analytics and Telegram ops are explained on ${siteUrl}/ops. Live Telegram demo: https://hostai.kz/demo/`,
            },
          },
          {
            "@type": "Question",
            name: "Где посмотреть кейсы видеоаналитики для кафе и ресторана?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Кейсы технологии (касса, вход/ресепшен, зоны производства) — на ${siteUrl}/franchise. Зоны Vision AI, аналитика гостей и смены в Telegram — на ${siteUrl}/ops.`,
            },
          },
        ],
      },
    ],
  };
}
