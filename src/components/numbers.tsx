"use client";

import { motion } from "framer-motion";
import { numbers } from "@/lib/content";

export function Numbers() {
  return (
    <section
      id="numbers"
      className="scroll-mt-24 bg-paper px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf">
            {numbers.no}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {numbers.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {numbers.cards.map((card, index) => (
            <motion.article
              key={card.label}
              className="border border-leaf/25 bg-[#fffdf8] p-6 sm:p-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-display text-3xl font-black tracking-[-0.03em] text-leaf sm:text-4xl">
                {card.value}
              </p>
              <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink">
                {card.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{card.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
