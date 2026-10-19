import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { franchiseDeck } from "@/lib/content";

export const metadata: Metadata = {
  title: franchiseDeck.title,
  description: franchiseDeck.description,
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
        </section>
      </main>
      <Footer />
    </>
  );
}
