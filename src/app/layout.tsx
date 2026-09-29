import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Unbounded } from "next/font/google";
import { SvgFilters } from "@/components/brand";
import { JsonLd } from "@/components/json-ld";
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
  applicationName: "KŌK Franchise",
  authors: [{ name: "KŌK", url: siteUrl }],
  creator: "KŌK",
  publisher: "KŌK",
  category: "franchise",
  classification: "Food franchise / Fast casual street food",
  referrer: "origin-when-cross-origin",
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
    siteName: "KŌK Franchise",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 1500,
        alt: "KŌK — street food франшиза, пита / үшбармақ, sous-vide chicken",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${inter.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <JsonLd />
        <SvgFilters />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
