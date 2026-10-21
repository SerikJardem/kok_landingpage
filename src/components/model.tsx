"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { model } from "@/lib/content";

export function Model() {
  return (
    <section className="relative overflow-hidden bg-paper px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="max-w-xl font-display text-2xl font-black tracking-[-0.03em] text-ink sm:text-3xl">
            {model.body}
          </h2>
        </motion.div>

        <motion.figure
          className="relative mx-auto w-full max-w-md justify-self-center lg:mx-0 lg:max-w-none lg:justify-self-stretch"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1a1a] sm:aspect-[3/2]">
            <Image
              src="/brand/kok-kitchen-prep.jpg"
              alt="Сборка питы KŌK на точке — свежие овощи и моно продукт курица"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 440px"
              priority={false}
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
