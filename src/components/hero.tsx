"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useApply } from "@/components/apply-context";
import { BrushStroke, StickerSeal, WaveTriple } from "@/components/brand";
import { hero } from "@/lib/content";

export function Hero() {
  const { openApply } = useApply();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 text-leaf">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em]">
              {hero.eyebrow}
            </p>
            <WaveTriple className="h-5 w-20 shrink-0" />
          </div>

          <h1 className="mt-6 max-w-xl font-display text-3xl font-black leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/75 sm:text-base">
            {hero.deck}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {hero.metricsPreview.map((metric) => (
              <div key={metric.label}>
                <dt className="font-display text-2xl font-black tracking-[-0.03em] text-leaf sm:text-3xl">
                  {metric.value}
                </dt>
                <dd className="mt-1 max-w-[9rem] font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={() => openApply()}
            className="mt-10 bg-leaf px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ink"
          >
            {hero.ctaApply}
          </button>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrushStroke className="pointer-events-none absolute -left-12 -right-8 top-2 h-[95%] w-[125%] text-cobalt sm:-left-16" />
          <div className="relative aspect-[4/5] overflow-hidden printed">
            <Image
              src="/brand/kok-pita-wrap.png"
              alt="KŌK пита с курицей су-вид"
              fill
              preload
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
          <StickerSeal className="absolute -left-2 bottom-20 w-24 rotate-[-12deg] drop-shadow-md sm:-left-5 sm:w-28" />
        </motion.div>
      </div>
    </section>
  );
}
