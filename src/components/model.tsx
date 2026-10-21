"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeUpTransition, viewportOnce } from "@/lib/motion";
import { model } from "@/lib/content";

export function Model() {
  return (
    <section className="relative overflow-hidden bg-paper px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <p className="section-deck max-w-xl text-base sm:text-lg">
            {model.body}
          </p>
        </motion.div>

        <motion.figure
          className="relative mx-auto w-full max-w-md justify-self-center lg:mx-0 lg:max-w-none lg:justify-self-stretch"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ ...fadeUpTransition, delay: 0.06 }}
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1a1a]">
            <Image
              src="/brand/kok-kitchen-prep.jpg"
              alt="Сборка питы KŌK на точке — свежие овощи и моно продукт курица"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 90vw, 440px"
              priority={false}
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
