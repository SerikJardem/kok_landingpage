"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stamp } from "@/components/brand";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-12 sm:px-6 sm:py-14">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Stamp className="text-leaf">{problem.stamp}</Stamp>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            {problem.body}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {problem.beats.map((beat) => (
              <li
                key={beat.label}
                className="border-l-4 border-leaf bg-[#fffdf8]/60 px-4 py-3"
              >
                <p className="font-display text-lg font-black tracking-[-0.02em] text-ink">
                  {beat.value}
                </p>
                <p className="mt-0.5 text-sm text-ink/65">{beat.label}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          className="relative mx-auto w-full max-w-sm justify-self-center lg:max-w-md lg:justify-self-end"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-forest/15 bg-[#e6f0e7]">
            <Image
              src={problem.image}
              alt={problem.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 80vw, 360px"
              priority={false}
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
