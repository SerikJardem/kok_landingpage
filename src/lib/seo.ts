/** Canonical site URL (custom domain on GitHub Pages). */
export const siteUrl = "https://www.kokfood.kz";

export const seo = {
  title: "KŌK — франшиза street food / үшбармақ / fast casual",
  titleTemplate: "%s | KŌK Franchise",
  description:
    "KŌK (KOK) — fast-growth street food franchise: үшбармақ / ushbarmak-style pita, mono-product chicken. You open a sales point; the network kitchen cooks. No fryer, −40% labor, launch in 3–4 weeks. Франшиза быстрого роста · Қазақстан · Алматы. Тез. Таза. Fresh.",
  keywords: [
    "KŌK",
    "KOK",
    "KØK",
    "кок",
    "кок франшиза",
    "франшиза",
    "франшиза общественного питания",
    "франшиза фастфуд",
    "франшиза street food",
    "быстрый рост бизнеса",
    "быстрорастущий бизнес",
    "инвестиции в франшизу",
    "открыть точку питания",
    "точка продажи",
    "центральный цех",
    "моно продукт курица",
    "пита",
    "стрит фуд Алматы",
    "франшиза Казахстан",
    "үшбармақ",
    "франшиза Қазақстан",
    "стрит фуд",
    "тез таза fresh",
    "жылдам өсу бизнесі",
    "инвестиция франшиза",
    "Алматы франшиза",
    "ushbarmak",
    "ushparmak",
    "franchise",
    "food franchise",
    "fast casual franchise",
    "street food franchise",
    "fast growth business",
    "high growth franchise",
    "franchise investor",
    "sous-vide chicken",
    "Almaty franchise",
    "Kazakhstan franchise",
  ],
  ogImage: "/brand/kok-pita-wrap.png",
  locale: "ru_KZ",
  alternateLocales: ["kk_KZ", "en_US"],
} as const;

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "KŌK",
        alternateName: ["KOK", "KØK", "Кок"],
        url: siteUrl,
        logo: `${siteUrl}/brand/kok-wordmark-mark.png`,
        email: "sj@hostai.kz",
        description: seo.description,
        slogan: "Тез. Таза. Fresh.",
        areaServed: { "@type": "Country", name: "Kazakhstan" },
        knowsLanguage: ["ru", "kk", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KŌK Franchise",
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
        about: { "@id": `${siteUrl}/#franchise` },
        inLanguage: ["ru", "kk", "en"],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}${seo.ogImage}`,
        },
      },
      {
        "@type": ["FoodEstablishment", "FastFoodRestaurant"],
        "@id": `${siteUrl}/#brand`,
        name: "KŌK",
        description:
          "Fast casual street food: pita / үшбармақ-style wraps with sous-vide chicken. Network kitchen cooks; the partner runs a sales point for assembly and serving. No fryer on site.",
        servesCuisine: ["Street Food", "Kazakh-inspired", "Fast Casual"],
        slogan: "Тез. Таза. Fresh.",
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
        name: "KŌK franchise / франшиза точки продажи",
        description:
          "Investor franchise for a KŌK sales point. The network kitchen supplies sous-vide chicken and sauces. Fast growth: 3–4 week launch, −40% labor vs classic cafe, 18–25 kW power, midi 45–60 m² or express 25–35 m².",
        category: "Food franchise",
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        areaServed: "KZ",
        availableAtOrFrom: { "@id": `${siteUrl}/#brand` },
        seller: { "@id": `${siteUrl}/#organization` },
        url: siteUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is KŌK / KOK franchise?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KŌK is a fast casual street food franchise from Almaty, Kazakhstan. The product is a pita wrap in the spirit of үшбармақ / ushbarmak with sous-vide chicken. Investors open a sales point; the network kitchen supplies the food.",
            },
          },
          {
            "@type": "Question",
            name: "Что такое франшиза KŌK для инвестора?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Инвестор открывает точку продажи. Центральный цех сети готовит моно продукт курица и заготовки. На точке нет фритюра и тяжёлой кухни: labor −40%, мощность 18–25 кВт, запуск 3–4 недели, быстрая сборка.",
            },
          },
          {
            "@type": "Question",
            name: "KŌK франшизасы дегеніміз не?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KŌK — Алматыдағы street food бренді: үшбармақ рухындағы пита, моно продукт тауық. Инвестор сату нүктесін ашады; желінің цехі дайындайды. Тез. Таза. Fresh.",
            },
          },
          {
            "@type": "Question",
            name: "Is KŌK a fast growth food business for franchise investors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Fit-out in 3–4 weeks, smaller footprint (−50–60% vs classic cafe), and lower power and labor costs than a full restaurant.",
            },
          },
        ],
      },
    ],
  };
}
