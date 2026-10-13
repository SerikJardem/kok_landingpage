"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PartnersTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#121212] px-4 py-12 text-cream sm:px-6 sm:py-14">
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
            Что даём партнёру
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] sm:text-4xl">
            Vision AI, аналитика гостей и смены в Telegram
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
            Камеры ведут бар, кухню и зал. Вы читаете статусы, удержание гостей и
            пуши смены — без ERP на точке.
          </p>
          <Link
            href="/ops"
            className="mt-7 inline-flex bg-lime px-7 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-ochre"
          >
            Смотреть, что даём
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
