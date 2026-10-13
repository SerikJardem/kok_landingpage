import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Stamp, Wordmark } from "@/components/brand";
import { Footer } from "@/components/footer";
import { OpsTelegramMock } from "@/components/ops-telegram-mock";
import { opsProof } from "@/lib/ops-proof";

export const metadata: Metadata = {
  title: "KŌK — что даём партнёру: Vision AI, аналитика, смены",
  description:
    "Vision AI по зонам, аналитика гостей и удержания, смены в Telegram. Что получает франчайзи KŌK.",
};

export default function OpsPage() {
  return (
    <>
      <header className="border-b border-forest/15 bg-cream print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="text-leaf">
            <Wordmark className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/70 hover:text-ink"
            >
              {opsProof.back}
            </Link>
            <Link
              href="/?apply=1"
              className="bg-leaf px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-cream transition hover:bg-ink"
            >
              {opsProof.cta}
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-[#121212] text-cream">
        <section className="border-b border-cream/10 px-4 pb-8 pt-10 sm:px-6 sm:pt-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime/90">
              {opsProof.eyebrow}
            </p>
            <Stamp className="mt-3 text-ochre">{opsProof.stamp}</Stamp>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              {opsProof.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-cream/70 sm:text-base">
              {opsProof.deck}
            </p>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-6xl space-y-10">
            {opsProof.zones.map((zone) => (
              <article
                key={zone.id}
                className="grid gap-4 border border-cream/15 lg:grid-cols-[1.4fr_0.9fr] lg:gap-6"
              >
                <div className="relative min-h-[220px] overflow-hidden bg-[#121212]">
                  <Image
                    src={zone.image}
                    alt={zone.imageAlt}
                    width={1448}
                    height={1086}
                    className="h-full w-full object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority={zone.id === "bar"}
                  />
                </div>
                <div className="flex flex-col justify-center px-4 py-5 sm:px-6">
                  <Stamp className="w-fit text-lime">{zone.stamp}</Stamp>
                  <h2 className="mt-3 font-display text-xl font-black tracking-[-0.03em] sm:text-2xl">
                    {zone.title}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {zone.sees.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-cream/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-lime" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-cream/10 bg-[#121a14] px-4 py-12 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-10">
              <div>
                <Stamp className="text-ochre">{opsProof.analytics.stamp}</Stamp>
                <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                  {opsProof.analytics.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
                  {opsProof.analytics.caption}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {opsProof.analytics.covers.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 border-l-2 border-lime pl-3 text-sm text-cream/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden border border-cream/15 bg-[#121212] shadow-[0_0_0_1px_rgba(184,229,46,0.12)]">
                <Image
                  src={opsProof.analytics.image}
                  alt={opsProof.analytics.imageAlt}
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-cream/10 bg-cream px-4 py-12 text-ink sm:px-6 sm:py-14">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <Stamp className="text-terra">{opsProof.telegram.stamp}</Stamp>
              <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.03em] text-ink">
                {opsProof.telegram.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/70">
                {opsProof.telegram.caption}
              </p>
              <p className="mt-4 border-l-4 border-leaf pl-3 text-sm font-medium text-ink">
                {opsProof.telegram.sheetNote}
              </p>
              <a
                href={opsProof.hostaiDemo}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex border-2 border-ink px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-cream"
              >
                {opsProof.hostaiLabel} →
              </a>
              <div className="mt-10">
                <h3 className="font-display text-xl font-black text-ink">
                  {opsProof.ctaTitle}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{opsProof.ctaDeck}</p>
                <Link
                  href="/?apply=1"
                  className="mt-5 inline-flex bg-leaf px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-cream transition hover:bg-ink"
                >
                  {opsProof.cta}
                </Link>
              </div>
            </div>
            <OpsTelegramMock />
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
