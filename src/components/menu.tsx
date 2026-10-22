"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menu } from "@/lib/content";

function SauceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M12 3c-2.2 2.4-3.5 4.6-3.5 6.8a3.5 3.5 0 1 0 7 0C15.5 7.6 14.2 5.4 12 3Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M8.5 15.2c.7 2.4 2 3.8 3.5 4.8 1.5-1 2.8-2.4 3.5-4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
          <h2 className="section-title mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
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
                    {item.kcal && item.protein ? (
                      <dl className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/55">
                        <div className="flex gap-1.5">
                          <dt className="text-ink/40">ккал</dt>
                          <dd className="font-semibold text-leaf">{item.kcal}</dd>
                        </div>
                        <div className="flex gap-1.5">
                          <dt className="text-ink/40">белок</dt>
                          <dd className="font-semibold text-leaf">
                            {item.protein}
                          </dd>
                        </div>
                      </dl>
                    ) : null}

                    {item.sauce ? (
                      <p className="mt-2.5 flex items-center gap-1.5 text-sm text-ink/75">
                        <SauceIcon className="h-4 w-4 shrink-0 text-leaf" />
                        <span>{item.sauce}</span>
                      </p>
                    ) : null}

                    {item.highlight ? (
                      <p className="text-sm leading-snug text-ink/70">
                        {item.highlight}
                      </p>
                    ) : null}

                    <div
                      className={`relative aspect-square overflow-hidden bg-[#fffdf8] ${
                        item.kcal || item.sauce || item.highlight
                          ? "mt-3"
                          : ""
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className={
                          item.image.includes("veggie")
                            ? "object-cover object-[58%_42%]"
                            : "object-cover object-center"
                        }
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 320px"
                      />
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.02em] text-ink sm:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {item.blurb}
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
