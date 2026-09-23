"use client";

import { motion } from "framer-motion";
import { LeafSprig } from "@/components/brand";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-20 sm:px-6 sm:py-24">
      <LeafSprig className="pointer-events-none absolute right-[8%] top-10 h-20 w-16 rotate-[18deg] text-leaf/30" />
      <motion.div
        className="relative mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf">{problem.no}</p>
        <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
          {problem.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
          {problem.body}
        </p>
      </motion.div>
    </section>
  );
}
