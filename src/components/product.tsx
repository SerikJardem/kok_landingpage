"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { product } from "@/lib/content";

export function Product() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-12 sm:px-6 sm:py-14">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-3 lg:grid-cols-2 lg:gap-5 lg:items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative grid grid-cols-2 gap-2.5 sm:gap-3">
              {product.dayparts.map((part, index) => (
                <motion.figure
                  key={part.label}
                  className={`relative ${index === 1 ? "mt-4 sm:mt-5" : ""}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.06 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden printed">
                    <Image
                      src={part.image}
                      alt={part.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 42vw, 300px"
                    />
                  </div>
                  <figcaption className="mt-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-leaf">
                      {part.label}
                    </p>
                    <p className="mt-0.5 font-display text-sm font-bold tracking-[-0.01em] text-ink">
                      {part.note}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:pl-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
              {product.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/75">
              {product.body}
            </p>

            <dl className="mt-6 space-y-3 border-t border-leaf/20 pt-5">
              {product.beats.map((beat) => (
                <div
                  key={beat.label}
                  className="flex items-baseline justify-between gap-4 border-b border-leaf/15 pb-2.5 last:border-b-0"
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
