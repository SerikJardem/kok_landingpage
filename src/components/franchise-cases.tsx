"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpTransition, viewportOnce } from "@/lib/motion";
import { franchiseCases } from "@/lib/content";

export function FranchiseCases() {
  return (
    <section className="bg-paper px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf">
            Vision AI · операции
          </p>
          <h2 className="section-title mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            {franchiseCases.title}
          </h2>
          <p className="section-deck mt-3 max-w-2xl text-base sm:text-lg">
            {franchiseCases.deck}
          </p>
        </motion.div>

        <ul className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {franchiseCases.items.map((item, index) => (
            <motion.li
              key={item.label}
              className="flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ ...fadeUpTransition, delay: Math.min(index * 0.06, 0.18) }}
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={item.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-ink sm:text-base">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-ink/65">{item.blurb}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
