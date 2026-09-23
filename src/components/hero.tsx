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
      className="relative isolate flex min-h-[82svh] items-center overflow-hidden bg-[#1a1a1a] sm:min-h-[86svh]"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduceMotion ? false : { opacity: 0.75, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/brand/kok-pita-wrap-landscape.png"
          alt="KŌK пита — моно продукт курица"
          fill
          preload
          className="object-cover object-[72%_center] max-sm:object-[68%_center]"
          sizes="100vw"
        />
      </motion.div>

      <div className="hero-photo-scrim pointer-events-none absolute inset-0 -z-10" aria-hidden />

      {/* Vertically centered stack; open gaps between copy beats kept */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-cream/75">
            {hero.eyebrow}
          </p>
          <p className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-cream sm:text-2xl">
            {hero.tagline}
          </p>
        </motion.div>

        <motion.h1
          className="mt-9 max-w-xl font-display text-3xl font-black leading-[1.18] tracking-[-0.03em] text-cream sm:mt-10 sm:text-[2.75rem] sm:leading-[1.16]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-md text-sm leading-relaxed text-cream/80 sm:mt-8 sm:text-base sm:leading-7"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.deck}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={() => openApply()}
            className="mt-9 bg-leaf px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ochre hover:text-ink sm:mt-10"
          >
            {hero.ctaApply}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
