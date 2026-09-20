/** Site URL used for metadata, sitemap, and JSON-LD (GitHub Pages). */
export const siteUrl = "https://serikjardem.github.io/kok_landingpage";

export const seo = {
  title: "KŌK — франшиза street food / үшбармақ / fast casual | Hub & Spoke",
  titleTemplate: "%s | KŌK Franchise",
  description:
    "KŌK (KOK) — fast-growth street food franchise: үшбармақ / ushbarmak-style pita with sous-vide chicken. Hub & Spoke model for investors — Spoke sales point only, no fryer, −40% labor, launch in 3–4 weeks. Франшиза быстрого роста · Қазақстан · Алматы. Тез. Таза. Fresh.",
  keywords: [
    // Brand
    "KŌK",
    "KOK",
    "KØK",
    "кок",
    "кок франшиза",
    // RU
    "франшиза",
    "франшиза общественного питания",
    "франшиза фастфуд",
    "франшиза street food",
    "быстрый рост бизнеса",
    "быстрорастущий бизнес",
    "инвестиции в франшизу",
    "открыть точку питания",
    "Hub and Spoke",
    "хаб энд споук",
    "фабрика кухня",
    "точка продажи",
    "су-вид курица",
    "пита",
    "стрит фуд Алматы",
    "франшиза Казахстан",
    // KK
    "үшбармақ",
    "франшиза Қазақстан",
    "стрит фуд",
    "тез таза fresh",
    "жылдам өсу бизнесі",
    "инвестиция франшиза",
    "Алматы франшиза",
    // EN
    "ushbarmak",
    "ushparmak",
    "beshbarmak street food",
    "franchise",
    "food franchise",
    "fast casual franchise",
    "street food franchise",
    "fast growth business",
    "high growth franchise",
    "franchise investor",
    "sous-vide chicken",
    "Hub & Spoke restaurant",
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
        areaServed: {
          "@type": "Country",
          name: "Kazakhstan",
        },
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
          "Fast casual street food brand: pita / үшбармақ-style wraps with sous-vide chicken. No fryer on site. Hub kitchen + Spoke sales points.",
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
        name: "KŌK Spoke franchise / франшиза точки продажи",
        description:
          "Investor franchise for a KŌK Spoke sales point (точка продажи). Hub (цех) stays with the network. Fast growth: 3–4 week launch, −40% labor vs classic cafe, 18–25 kW power, midi 45–60 m² or express 25–35 m². Keywords: kok franchise, ushbarmak, үшбармақ, fast growth business, франшиза быстрого роста.",
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
              text: "KŌK is a fast casual street food franchise from Almaty, Kazakhstan. The product is a pita wrap in the spirit of үшбармақ / ushbarmak with sous-vide chicken. Investors open a Spoke sales point; the Hub kitchen supplies the network.",
            },
          },
          {
            "@type": "Question",
            name: "Что такое франшиза KŌK для инвестора?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Инвестор входит только в Spoke — точку продажи. Hub (цех) готовит су-вид курицу и заготовки. На точке нет фритюра и тяжёлой кухни: labor −40%, мощность 18–25 кВт, запуск 3–4 недели — модель быстрого роста сети.",
            },
          },
          {
            "@type": "Question",
            name: "KŌK франшизасы дегеніміз не?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KŌK — Алматыдағы street food бренді: үшбармақ рухындағы пита, су-вид тауық. Инвестор Spoke сату нүктесін ашады; Hub цех желіні қамтамасыз етеді. Тез. Таза. Fresh.",
            },
          },
          {
            "@type": "Question",
            name: "Is KŌK a fast growth food business for franchise investors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Hub & Spoke model is built for speed: Spoke fit-out in 3–4 weeks, 2–3 new points per month target tempo, smaller footprint (−50–60% vs classic cafe), and lower power and labor costs than a full restaurant.",
            },
          },
        ],
      },
    ],
  };
}
