"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeUpTransition, viewportOnce } from "@/lib/motion";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-12 sm:px-6 sm:py-14">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <Badge variant="leaf">{problem.stamp}</Badge>
          <h2 className="section-title mt-4 max-w-xl text-3xl text-ink sm:text-4xl">
            {problem.title}
          </h2>
          <p className="section-deck mt-3 max-w-xl text-base sm:text-lg">
            {problem.body}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {problem.beats.map((beat) => (
              <li
                key={beat.label}
                className="border-l-4 border-leaf bg-[#fffdf8]/60 px-4 py-3"
              >
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-leaf">
                  {beat.value}
                </p>
                <p className="mt-1 text-sm font-normal text-ink/70">{beat.label}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          className="relative mx-auto w-full max-w-sm justify-self-center lg:max-w-md lg:justify-self-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ ...fadeUpTransition, delay: 0.06 }}
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
