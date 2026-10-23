/** Canonical site URL (custom domain on GitHub Pages). */
export const siteUrl = "https://www.kokfood.kz";

export const seo = {
  title: "KØK — Жеңіл әрі тез · fast gourmet",
  titleTemplate: "%s | KØK",
  description:
    "KØK — fast gourmet без фритюрного масла: питы, крудите и напитки. Homemade · healthy · natural. Grab&Go в Алматы и по Казахстану. Жеңіл әрі тез.",
  keywords: [
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
  ],
  ogImage: "/brand/kok-og.jpg",
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
        name: "KØK",
        alternateName: ["KOK", "KŌK", "Кок", "kokfood"],
        url: siteUrl,
        logo: `${siteUrl}/brand/kok-mark-k.png`,
        email: "sj@hostai.kz",
        description: seo.description,
        slogan: "Жеңіл әрі тез",
        areaServed: { "@type": "Country", name: "Kazakhstan" },
        knowsLanguage: ["ru", "kk", "en"],
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
          "Fast gourmet: питы с мясом по стандартам бренд-шефа, фирменные соусы и свежие овощи. Без фритюрного масла. Homemade · healthy · natural. Grab&Go.",
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
          "Партнёрская точка KØK: сборочный формат без тяжёлой кухни, продукт с центрального цеха, midi ~60 м² или express до 30 м².",
        category: "Food franchise",
        businessFunction: "http://purl.org/goodrelations/v1#Sell",
        areaServed: "KZ",
        availableAtOrFrom: { "@id": `${siteUrl}/#brand` },
        seller: { "@id": `${siteUrl}/#organization` },
        url: `${siteUrl}/franchise`,
      },
    ],
  };
}
