"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useApply } from "@/components/apply-context";
import { Button } from "@/components/ui/button";
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
          src={hero.image}
          alt={hero.imageAlt}
          fill
          preload
          className="object-cover object-[58%_48%] max-sm:object-[52%_45%]"
          sizes="100vw"
        />
      </motion.div>

      <div className="hero-photo-scrim pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-16 sm:px-6 sm:py-20">
        <motion.h1
          className="max-w-xl font-display text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cream sm:text-6xl sm:leading-[1.02]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          {hero.brand}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-md text-sm font-normal leading-relaxed text-cream/80 sm:mt-8 sm:text-base sm:leading-7"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : 0.1,
            ease: easeOutExpo,
          }}
        >
          {hero.deck.split("без фритюрного масла").map((part, index, parts) =>
            index < parts.length - 1 ? (
              <span key={index}>
                {part}
                <mark className="rounded-sm bg-leaf px-1.5 py-0.5 font-medium text-white">
                  без фритюрного масла
                </mark>
              </span>
            ) : (
              <span key={index}>{part}</span>
            ),
          )}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : 0.18,
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
