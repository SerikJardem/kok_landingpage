"use client";

import { motion } from "framer-motion";
import { DashField } from "@/components/brand";
import { numbers } from "@/lib/content";

export function Numbers() {
  return (
    <section
      id="numbers"
      className="relative scroll-mt-24 overflow-hidden bg-paper px-4 py-12 sm:px-6 sm:py-16"
    >
      <DashField className="pointer-events-none absolute -right-8 top-16 h-48 w-72 text-leaf/[0.07] sm:h-64 sm:w-96" />
      <DashField className="pointer-events-none absolute -left-10 bottom-20 hidden h-40 w-64 text-leaf/[0.06] sm:block" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="max-w-2xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {numbers.title}
          </h2>
        </motion.div>

        <div className="mt-7 grid gap-px bg-leaf/20 sm:grid-cols-2 lg:grid-cols-3">
          {numbers.cards.map((card, index) => (
            <motion.article
              key={card.label}
              className="bg-[#fffdf8] px-5 py-6 sm:px-6 sm:py-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-display text-4xl font-black tracking-[-0.04em] text-leaf sm:text-[2.75rem]">
                {card.value}
              </p>
              <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink">
                {card.label}
              </p>
              <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-ink/60">
                {card.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
