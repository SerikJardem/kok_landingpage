"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useApply } from "@/components/apply-context";
import { SparkBurst, WavePattern } from "@/components/brand";
import { closeCta } from "@/lib/content";

export function CloseCta() {
  const { openApply } = useApply();
  return (
    <section className="relative overflow-hidden bg-leaf px-4 py-20 text-cream sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] opacity-[0.18] lg:block">
        <Image
          src="/brand/kok-street-female.png"
          alt=""
          fill
          className="object-cover object-[center_20%]"
          sizes="38vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-leaf via-leaf/80 to-transparent"
          aria-hidden
        />
      </div>
      <SparkBurst className="pointer-events-none absolute left-[8%] top-10 h-10 w-10 text-ochre" />
      <SparkBurst className="pointer-events-none absolute right-[10%] bottom-10 h-8 w-8 text-ochre lg:right-[42%]" />

      <motion.div
        className="relative mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-xl lg:text-left"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ochre">
          {closeCta.no}
        </p>
        <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
          {closeCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/85 lg:mx-0">
          {closeCta.deck}
        </p>
        <WavePattern className="mx-auto mt-8 h-5 w-48 text-ochre lg:mx-0" />
        <button
          type="button"
          onClick={() => openApply()}
          className="mt-10 bg-ochre px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-cream"
        >
          {closeCta.cta}
        </button>
      </motion.div>
    </section>
  );
}
