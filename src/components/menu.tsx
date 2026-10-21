"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menu } from "@/lib/content";

export function Menu() {
  return (
    <section
      id="menu"
      className="relative scroll-mt-24 overflow-hidden bg-paper px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf">
            Гостевое меню · без цен
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-4xl">
            {menu.title}
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 bg-leaf px-5 py-3.5 text-center sm:px-8"
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-sm font-bold tracking-[-0.01em] text-cream sm:text-base">
            {menu.ribbon}
          </p>
        </motion.div>

        <div className="mt-10 space-y-12">
          {menu.groups.map((group, groupIndex) => (
            <div key={group.label}>
              <motion.p
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.04 * groupIndex }}
              >
                {group.label}
              </motion.p>

              <ul className="mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10">
                {group.items.map((item, index) => (
                  <motion.li
                    key={item.name}
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.06, 0.2),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#fffdf8]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 320px"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {item.blurb}
                    </p>
                    <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-leaf/20 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">
                      <div className="flex gap-1.5">
                        <dt className="text-ink/40">ккал</dt>
                        <dd className="font-semibold text-leaf">{item.kcal}</dd>
                      </div>
                      <div className="flex gap-1.5">
                        <dt className="text-ink/40">белок</dt>
                        <dd className="font-semibold text-leaf">{item.protein}</dd>
                      </div>
                    </dl>
                    <p className="mt-2 text-xs leading-snug text-ink/50">
                      {item.edge}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ink/40">
          {menu.footnote}
        </p>
      </div>
    </section>
  );
}
