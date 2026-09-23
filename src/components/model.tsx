"use client";

import { motion } from "framer-motion";
import { SparkBurst, WavePattern } from "@/components/brand";
import { model } from "@/lib/content";

export function Model() {
  return (
    <section className="relative overflow-hidden bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf">{model.no}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {model.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75">
            {model.body}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-0 overflow-hidden sm:grid-cols-2">
          {model.points.map((point, index) => {
            const isNetwork = index === 0;
            return (
              <motion.div
                key={point.title}
                className={`relative px-6 py-10 sm:px-8 sm:py-12 ${
                  isNetwork ? "bg-leaf text-cream" : "bg-cream text-ink"
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {isNetwork ? (
                  <SparkBurst className="pointer-events-none absolute right-6 top-6 h-7 w-7 text-ochre" />
                ) : (
                  <WavePattern className="pointer-events-none absolute right-6 top-6 h-4 w-28 text-leaf/40" />
                )}
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                    isNetwork ? "text-ochre" : "text-leaf"
                  }`}
                >
                  {isNetwork ? "Сеть" : "Точка"}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em]">
                  {point.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    isNetwork ? "text-cream/80" : "text-ink/65"
                  }`}
                >
                  {point.note}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
