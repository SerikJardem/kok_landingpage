"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useApply } from "@/components/apply-context";
import { WaveTriple, Wordmark } from "@/components/brand";
import { hero } from "@/lib/content";

export function Hero() {
  const { openApply } = useApply();
  const { scrollY } = useScroll();
  const markY = useTransform(scrollY, [0, 420], [0, -40]);
  const markScale = useTransform(scrollY, [0, 420], [1, 0.92]);
  const photoY = useTransform(scrollY, [0, 420], [0, 28]);

  return (
    <section id="top" className="relative bg-ink px-3 pb-8 pt-20 sm:px-5 sm:pb-10 sm:pt-24">
      <div className="relative mx-auto min-h-[calc(100svh-6rem)] max-w-6xl overflow-hidden border-[1.5px] border-lime p-3 sm:p-4">
        <div className="relative flex min-h-[calc(100svh-8.5rem)] flex-col overflow-hidden border border-lime/80 px-4 py-5 sm:px-8 sm:py-7">
          <div
            className="pointer-events-none absolute -right-[18%] -top-[28%] z-0 h-[58vw] max-h-[420px] w-[58vw] max-w-[420px] rounded-full bg-lime sm:-right-[12%] sm:-top-[22%]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-[32%] -left-[16%] z-0 h-[64vw] max-h-[460px] w-[64vw] max-w-[460px] rounded-full bg-lime sm:-bottom-[28%] sm:-left-[10%]"
            aria-hidden
          />

          <div className="relative z-20">
            <ul className="space-y-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-cream sm:text-xs">
              {hero.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 flex flex-1 flex-col justify-center py-10 sm:py-14">
            <motion.div style={{ y: photoY }} className="pointer-events-none absolute inset-x-0 top-[8%] z-0 flex justify-center gap-3 sm:top-[4%] sm:gap-6">
              <div className="relative h-[42vw] max-h-[340px] w-[30vw] max-w-[240px] -rotate-2 overflow-hidden border border-lime/40 sm:h-[360px] sm:w-[250px]">
                <Image
                  src="/brand/kok-street-male.png"
                  alt="KŌK street style — мужской портрет"
                  fill
                  priority
                  className="object-cover object-[center_18%]"
                  sizes="(max-width: 768px) 30vw, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10" />
              </div>
              <div className="relative mt-8 h-[42vw] max-h-[340px] w-[30vw] max-w-[240px] rotate-2 overflow-hidden border border-lime/40 sm:mt-12 sm:h-[360px] sm:w-[250px]">
                <Image
                  src="/brand/kok-street-female.png"
                  alt="KŌK street style — женский портрет"
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 30vw, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10" />
              </div>
            </motion.div>

            <motion.div
              style={{ y: markY, scale: markScale }}
              className="relative z-10 mx-auto w-[min(92%,720px)] text-lime"
            >
              <Wordmark className="h-auto w-full drop-shadow-[0_0_28px_rgba(184,229,46,0.18)]" />
              <span className="absolute -right-1 -top-1 font-display text-sm font-bold text-lime sm:right-2 sm:top-2 sm:text-base">
                {hero.year}
              </span>
            </motion.div>

            <div className="relative z-10 mx-auto mt-5 flex max-w-xl flex-col items-center text-center">
              <p className="font-display text-base font-bold lowercase tracking-[0.08em] text-cream sm:text-xl">
                {hero.mantra}
              </p>
              <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
                Fast Casual
              </p>
              <WaveTriple className="mt-2 h-5 w-16 text-lime" />
              <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
                Urban Nomad Food
              </p>
              <h1 className="sr-only">{hero.title}</h1>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base">
                {hero.deckLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <button
                type="button"
                onClick={() => openApply()}
                className="mt-7 bg-lime px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-cream"
              >
                {hero.ctaApply}
              </button>
            </div>
          </div>

          <div className="relative z-20 mt-auto flex justify-end pb-2">
            <p className="max-w-[15rem] text-right text-[11px] leading-relaxed text-cream/80 sm:max-w-xs sm:text-sm">
              {hero.cornerBottom}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
