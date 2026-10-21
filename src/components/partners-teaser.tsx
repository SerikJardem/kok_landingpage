"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, fadeUpTransition, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PartnersTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#121212] px-4 py-12 text-cream sm:px-6 sm:py-14">
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={fadeUpTransition}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
            Что даём партнёру
          </p>
          <h2 className="section-title mt-3 text-3xl text-cream sm:text-4xl">
            Камеры, аналитика гостей и смены в Telegram
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-normal leading-relaxed text-cream/70 sm:text-base">
            Камеры ведут бар, кухню и зал. Вы читаете статусы, удержание гостей и
            пуши смены — без ERP на точке.
          </p>
          <Link
            href="/ops"
            className={cn(
              buttonVariants({ variant: "lime" }),
              "mt-7 motion-safe:hover:-translate-y-px",
            )}
          >
            Смотреть, что даём
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
