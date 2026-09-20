import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Unbounded } from "next/font/google";
import { SvgFilters } from "@/components/brand";
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
  title: "KŌK — street food франшиза",
  description:
    "KŌK — fast casual street food: пита с курицей су-вид, Hub & Spoke, точка как терминал сборки. Тез. Таза. Fresh.",
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
        <SvgFilters />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
