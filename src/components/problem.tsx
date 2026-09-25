"use client";

import { motion } from "framer-motion";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-12 sm:px-6 sm:py-14">
      <div className="relative mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="max-w-xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {problem.body}
          </p>
        </motion.div>

        <motion.dl
          className="grid grid-cols-2 gap-px overflow-hidden bg-ink/10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {problem.burdens.map((item) => (
            <div key={item.label} className="bg-[#e6f0e7] px-4 py-5 sm:px-5 sm:py-6">
              <dt className="font-display text-xl font-black tracking-[-0.03em] text-ink sm:text-2xl">
                {item.value}
              </dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                {item.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
