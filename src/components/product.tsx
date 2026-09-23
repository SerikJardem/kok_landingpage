"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrushStroke, LeafSprig } from "@/components/brand";
import { product } from "@/lib/content";

export function Product() {
  return (
    <section className="relative overflow-hidden bg-[#eef6ef] px-4 py-20 sm:px-6 sm:py-28">
      <LeafSprig className="pointer-events-none absolute left-[4%] bottom-16 h-16 w-12 rotate-[-20deg] text-leaf/25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrushStroke className="pointer-events-none absolute -left-10 -right-6 top-4 h-[90%] w-[118%] text-ochre/80" />
          <div className="relative aspect-[4/5] overflow-hidden printed">
            <Image
              src="/brand/kok-pita-wrap.png"
              alt="Пита KŌK с курицей су-вид"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 85vw, 420px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf">
            {product.no}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {product.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75">
            {product.body}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
            Утро — кофе · День — grab &amp; go
          </p>
        </motion.div>
      </div>
    </section>
  );
}
