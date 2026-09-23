"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LeafSprig } from "@/components/brand";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-20 sm:px-6 sm:py-24">
      <LeafSprig className="pointer-events-none absolute right-[6%] top-8 h-20 w-16 rotate-[18deg] text-leaf/25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf">
            {problem.no}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {problem.body}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] overflow-hidden printed">
            <Image
              src="/brand/kok-street-male.png"
              alt=""
              fill
              className="object-cover object-center grayscale-[40%] contrast-[0.9] brightness-[0.85]"
              sizes="(max-width: 1024px) 85vw, 440px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-ink/45 via-transparent to-leaf/15"
              aria-hidden
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
