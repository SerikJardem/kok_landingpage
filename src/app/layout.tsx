import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Unbounded } from "next/font/google";
import { SvgFilters } from "@/components/brand";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { loadLocations } from "@/lib/locations";
import { seo, siteUrl } from "@/lib/seo";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "KØK",
  authors: [{ name: "KØK", url: siteUrl }],
  creator: "KØK",
  publisher: "KØK",
  category: "food",
  classification:
    "Fast gourmet · Grab&Go · Urban food · Vision AI · HoReCa video analytics",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/kok-mark-k.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "ru-KZ": "/",
      "kk-KZ": "/",
      "en": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    alternateLocale: [...seo.alternateLocales],
    url: "/",
    siteName: "KØK",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "KØK — fast gourmet · Жеңіл әрі тез",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  other: {
    "geo.region": "KZ-ALA",
    "geo.placename": "Almaty",
    language: "Russian, Kazakh, English",
  },
};

export const viewport: Viewport = {
  themeColor: "#3DAE5A",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locations } = await loadLocations();

  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${inter.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <JsonLd />
        <SvgFilters />
        <div className="grain" aria-hidden />
        <SiteShell cities={locations}>{children}</SiteShell>
      </body>
    </html>
  );
}
