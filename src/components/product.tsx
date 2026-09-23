"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrushStroke, LeafSprig } from "@/components/brand";
import { product } from "@/lib/content";

export function Product() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-20 sm:px-6 sm:py-28">
      <LeafSprig className="pointer-events-none absolute left-[3%] bottom-14 h-16 w-12 rotate-[-20deg] text-leaf/25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrushStroke className="pointer-events-none absolute -left-8 -right-4 top-6 h-[85%] w-[110%] text-ochre/75" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {product.dayparts.map((part, index) => (
                <motion.figure
                  key={part.label}
                  className={`relative ${index === 1 ? "mt-8 sm:mt-12" : ""}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden printed">
                    <Image
                      src={part.image}
                      alt={part.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 42vw, 280px"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-leaf">
                      {part.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold tracking-[-0.01em] text-ink">
                      {part.note}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf">
              {product.no}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
              {product.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75">
              {product.body}
            </p>

            <dl className="mt-8 space-y-4 border-t border-leaf/20 pt-6">
              {product.beats.map((beat) => (
                <div
                  key={beat.label}
                  className="flex items-baseline justify-between gap-4 border-b border-leaf/15 pb-3 last:border-b-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                    {beat.label}
                  </dt>
                  <dd className="font-display text-lg font-bold tracking-[-0.02em] text-leaf">
                    {beat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
