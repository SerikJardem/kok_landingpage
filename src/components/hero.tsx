"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useApply } from "@/components/apply-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { easeOutExpo } from "@/lib/motion";
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
        transition={{ duration: 1.15, ease: easeOutExpo }}
      >
        <Image
          src="/brand/kok-pita-wrap-landscape.png"
          alt="KŌK пита — моно продукт курица"
          fill
          preload
          className="object-cover object-[70%_42%] max-sm:object-[66%_40%]"
          sizes="100vw"
        />
      </motion.div>

      <div className="hero-photo-scrim pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <Badge variant="cream" className="border-cream/40 text-cream/85">
            {hero.eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          className="mt-7 max-w-xl font-display text-3xl font-black leading-[1.18] tracking-[-0.03em] text-cream sm:mt-8 sm:text-[2.75rem] sm:leading-[1.16]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: reduceMotion ? 0 : 0.08,
            ease: easeOutExpo,
          }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-md text-sm font-normal leading-relaxed text-cream/80 sm:mt-8 sm:text-base sm:leading-7"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : 0.14,
            ease: easeOutExpo,
          }}
        >
          {hero.deck}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : 0.2,
            ease: easeOutExpo,
          }}
        >
          <Button
            onClick={() => openApply()}
            className="mt-9 hover:bg-ochre hover:text-ink sm:mt-10"
          >
            {hero.ctaApply}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
