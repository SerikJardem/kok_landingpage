"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useApply } from "@/components/apply-context";
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
          alt="KŌK пита — моно продукт курица"
          fill
          preload
          className="object-cover object-[70%_center] max-sm:object-[62%_center]"
          sizes="100vw"
        />
      </motion.div>

      <div className="hero-photo-scrim pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-cream/75">
            {hero.eyebrow}
          </p>
          <p className="mt-3 font-display text-xl font-bold tracking-[-0.02em] text-cream sm:text-2xl">
            {hero.tagline}
          </p>
        </motion.div>

        <motion.h1
          className="mt-5 max-w-2xl font-display text-3xl font-black leading-[1.08] tracking-[-0.03em] text-cream sm:mt-6 sm:text-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.title}
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
            {hero.deck}
          </p>

          <button
            type="button"
            onClick={() => openApply()}
            className="mt-6 bg-leaf px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ochre hover:text-ink"
          >
            {hero.ctaApply}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
