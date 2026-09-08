import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Unbounded } from "next/font/google";
import { SvgFilters } from "@/components/brand";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KŌK — франшиза urban nomad food",
  description:
    "KŌK — современный fast-casual. Знакомая казахская еда на языке города. Заявите территорию.",
};

export const viewport: Viewport = {
  themeColor: "#2F3A25",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">
        <SvgFilters />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
