"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparkBurst } from "@/components/brand";
import { model } from "@/lib/content";

export function Model() {
  return (
    <section className="relative overflow-hidden bg-paper px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="max-w-2xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
              {model.title.split("Көк").map((part, index, parts) => (
                <span key={`model-title-${index}`}>
                  {part}
                  {index < parts.length - 1 ? (
                    <mark className="mx-0.5 inline bg-leaf px-1.5 py-0.5 text-ink [box-decoration-break:clone]">
                      Көк
                    </mark>
                  ) : null}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">
              {model.body}
            </p>
          </motion.div>

          {/* Bottom pair under copy — as in the attached variant */}
          <div className="mt-8 grid overflow-hidden sm:grid-cols-2">
            {model.points.map((point, index) => {
              const isNetwork = index === 0;
              return (
                <motion.div
                  key={point.title}
                  className={`relative px-5 py-8 sm:px-6 sm:py-9 ${
                    isNetwork ? "bg-leaf text-cream" : "bg-[#fffdf8] text-ink"
                  }`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {isNetwork ? (
                    <SparkBurst className="pointer-events-none absolute right-5 top-5 h-6 w-6 text-ochre" />
                  ) : null}
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                      isNetwork ? "text-cream/70" : "text-leaf"
                    }`}
                  >
                    {point.role}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                    {point.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
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

        <motion.figure
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:sticky lg:top-28"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/brand/kok-pita-brand-graphic.png"
              alt="KŌK пита — Тез. Таза. Fresh."
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 85vw, 420px"
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
