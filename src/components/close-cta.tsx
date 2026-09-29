"use client";

import { motion } from "framer-motion";
import { useApply } from "@/components/apply-context";
import { SparkBurst, WavePattern } from "@/components/brand";
import { closeCta } from "@/lib/content";

export function CloseCta() {
  const { openApply } = useApply();
  return (
    <section className="relative overflow-hidden bg-leaf px-4 py-12 text-cream sm:px-6 sm:py-14">
      <SparkBurst className="pointer-events-none absolute left-[8%] top-8 h-8 w-8 text-ochre" />
      <SparkBurst className="pointer-events-none absolute right-[10%] bottom-8 h-7 w-7 text-ochre" />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
          {closeCta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-cream/85">
          {closeCta.deck}
        </p>
        <WavePattern className="mx-auto mt-5 h-5 w-48 text-ochre" />
        <button
          type="button"
          onClick={() => openApply()}
          className="mt-6 bg-ochre px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-cream"
        >
          {closeCta.cta}
        </button>
      </motion.div>
    </section>
  );
}
