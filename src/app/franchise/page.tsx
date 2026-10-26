import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { FranchiseCases } from "@/components/franchise-cases";
import { franchiseDeck } from "@/lib/content";
import { franchiseSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: franchiseSeo.title,
  description: franchiseSeo.description,
  keywords: [...franchiseSeo.keywords],
  alternates: { canonical: "/franchise" },
  openGraph: {
    title: franchiseSeo.title,
    description: franchiseSeo.description,
    url: "/franchise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: franchiseSeo.title,
    description: franchiseSeo.description,
  },
};

export default function FranchisePage() {
  return (
    <>
      <main className="bg-paper pt-16">
        <section className="px-0 py-0 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
          <div className="mx-auto max-w-6xl overflow-hidden border-0 border-forest bg-ink sm:border-2">
            <div className="relative aspect-[1440/839] w-full min-h-[50vh] bg-ink">
              <iframe
                src={franchiseDeck.embedSrc}
                title={franchiseDeck.title}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-6xl px-4 text-sm text-ink/60 sm:px-0">
            {franchiseDeck.description} · Vision AI cases below ·{" "}
            <Link
              className="underline decoration-leaf/50 underline-offset-2"
              href="/ops"
            >
              /ops
            </Link>
          </p>
        </section>
        <FranchiseCases />
      </main>
      <Footer />
    </>
  );
}
