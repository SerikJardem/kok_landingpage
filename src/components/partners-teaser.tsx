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
            Кейтеринг
          </p>
          <h2 className="section-title mt-3 text-3xl text-cream sm:text-4xl">
            Закажите Køk на выезд
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-normal leading-relaxed text-cream/70 sm:text-base">
            Вайбово накормите посетителей вашего ивента легким и вкусным перекусом,
            а также кофе и напитками
          </p>
          <Link
            href="/catering"
            className={cn(
              buttonVariants({ variant: "lime" }),
              "mt-7 motion-safe:hover:-translate-y-px",
            )}
          >
            Сделать запрос
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
