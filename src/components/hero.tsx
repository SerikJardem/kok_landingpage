"use client";

import Image from "next/image";
import { useApply } from "@/components/apply-context";
import { WaveTriple, Wordmark } from "@/components/brand";
import { hero } from "@/lib/content";

export function Hero() {
  const { openApply } = useApply();

  return (
    <section id="top" className="relative overflow-hidden bg-paper px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <Wordmark className="h-14 w-auto sm:h-20" />
          <p className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">
            {hero.tagline}
          </p>
          <div className="mt-5 flex items-center justify-start gap-3 text-leaf">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em]">
              {hero.eyebrow}
            </p>
            <WaveTriple className="h-5 w-20 shrink-0" />
          </div>
          <h1 className="mt-6 max-w-xl font-display text-3xl font-black leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
            {hero.deck}
          </p>
          <dl className="mt-5 grid max-w-xl gap-3 sm:grid-cols-2">
            {hero.model.map((item) => (
              <div key={item.role} className="border border-leaf/35 bg-cream/60 px-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-leaf">
                  {item.role}
                  <span className="text-ink/40"> · </span>
                  <span className="text-ink">{item.meaning}</span>
                </dt>
                <dd className="mt-1 text-sm text-ink/70">{item.note}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 max-w-xl space-y-4">
            {hero.hooks.map((hook) => (
              <li key={hook.label} className="border-l-4 border-leaf pl-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-leaf">
                  {hook.label}
                </p>
                <p className="mt-1 font-display text-base font-bold leading-snug text-ink sm:text-lg">
                  {hook.point}
                </p>
                <p className="mt-1 text-sm text-ink/65">{hook.gain}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => openApply()}
            className="mt-8 bg-leaf px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ink"
          >
            {hero.ctaApply}
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Image
            src="/brand/kok-logo-lockup.png"
            alt="KŌK — Тез. Таза. Fresh. Пита с курицей су-вид"
            width={1482}
            height={1061}
            preload
            className="h-auto w-full"
            sizes="(max-width: 1024px) 90vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
