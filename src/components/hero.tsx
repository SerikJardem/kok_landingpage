"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useApply } from "@/components/apply-context";
import { Wordmark } from "@/components/brand";
import { hero } from "@/lib/content";

export function Hero() {
  const { openApply } = useApply();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/brand/kok-pita-wrap.png"
          alt="KŌK пита с курицей су-вид"
          fill
          preload
          className="object-cover object-[70%_center] max-sm:object-[62%_center]"
          sizes="100vw"
        />
      </motion.div>

      {/* Readability atmosphere only — no stickers or floating chrome */}
      <div className="hero-photo-scrim pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-cream/75">
            {hero.eyebrow}
          </p>

          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-6">
            <Wordmark className="h-16 w-auto drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:h-20 md:h-28" />
            <p className="font-display text-xl font-bold tracking-[-0.02em] text-cream sm:mb-1.5 sm:text-2xl">
              {hero.tagline}
            </p>
          </div>
        </motion.div>

        <motion.h1
          className="mt-8 max-w-2xl font-display text-3xl font-black leading-[1.08] tracking-[-0.03em] text-cream sm:mt-10 sm:text-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.title}
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
            {hero.deck}
          </p>

          <button
            type="button"
            onClick={() => openApply()}
            className="mt-8 bg-leaf px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ochre hover:text-ink"
          >
            {hero.ctaApply}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
