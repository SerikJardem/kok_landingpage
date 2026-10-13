import type { Metadata } from "next";
import Image from "next/image";
import { Stamp } from "@/components/brand";
import { CateringForm } from "@/components/catering-form";
import { Footer } from "@/components/footer";
import { catering } from "@/lib/content";

export const metadata: Metadata = {
  title: "KŌK — кейтеринг",
  description:
    "Кейтеринг KŌK для встреч и событий: питы и напитки для 50, 100 или 200+ гостей. Заявка за 24 часа.",
};

export default function CateringPage() {
  return (
    <>
      <main className="bg-cream pt-16">
        <section className="px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-start lg:gap-8">
            <div className="min-w-0">
              <div className="relative overflow-hidden border-2 border-forest bg-forest text-cream">
                <div className="relative aspect-[16/10] w-full sm:aspect-[2/1] lg:aspect-[16/9]">
                  <Image
                    src="/brand/catering-spread.jpg"
                    alt="KŌK кейтеринг — пита-спред и напитки"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <Stamp className="text-lime">{catering.stamp}</Stamp>
                    <h1 className="mt-3 max-w-xl font-display text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                      {catering.title}
                    </h1>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/85 sm:text-base">
                      {catering.deck}
                    </p>
                    <p className="mt-4 inline-block border border-lime/50 bg-ink/30 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-lime">
                      {catering.notice}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {catering.points.map((point) => (
                  <li
                    key={point}
                    className="border-l-4 border-terra pl-3 text-sm leading-relaxed text-ink/85"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {catering.sizes.map((size) => (
                  <article
                    key={size.key}
                    className="border-2 border-forest/20 bg-white/50 px-2 py-3 sm:px-3"
                  >
                    <p className="font-display text-sm font-black text-forest sm:text-base">
                      {size.label}
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-forest/55 sm:text-[10px]">
                      {size.hint}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div id="catering-form" className="min-w-0 lg:sticky lg:top-24">
              <CateringForm compact />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
