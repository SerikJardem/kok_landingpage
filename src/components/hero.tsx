"use client";

import Image from "next/image";
import { useApply } from "@/components/apply-context";
import {
  BrushStroke,
  LeafSprig,
  SparkBurst,
  StickerSeal,
  WaveTriple,
  Wordmark,
} from "@/components/brand";
import { hero } from "@/lib/content";

const toneChips = hero.cornerBottom
  .split(".")
  .map((chip) => chip.trim())
  .filter(Boolean);

export function Hero() {
  const { openApply } = useApply();

  return (
    <section id="top" className="relative overflow-hidden bg-paper px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
      <SparkBurst className="pointer-events-none absolute right-[7%] top-24 h-10 w-10 text-ochre sm:h-14 sm:w-14" />
      <SparkBurst className="pointer-events-none absolute left-[42%] top-36 hidden h-7 w-7 text-leaf sm:block" />
      <LeafSprig className="pointer-events-none absolute left-[5%] top-28 h-16 w-12 rotate-[-18deg] text-leaf sm:h-20 sm:w-16" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Wordmark className="h-auto w-[min(100%,34rem)] text-leaf" />
          <p className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">
            {hero.tagline}
          </p>
          <h1 className="mt-8 max-w-xl font-display text-3xl font-black leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            {hero.kazakh}
          </h1>
          <p className="mt-3 text-sm text-ink/70 sm:text-base">{hero.kazakhSub}</p>
          <div className="mt-6 flex items-center justify-start gap-3 text-leaf">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em]">
              {hero.eyebrow}
            </p>
            <WaveTriple className="h-5 w-20 shrink-0" />
          </div>
          <p className="mt-6 max-w-xl text-left text-sm leading-relaxed text-ink/80 sm:text-base">
            {hero.deckLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <button
            type="button"
            onClick={() => openApply()}
            className="mt-8 bg-leaf px-7 py-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-ink"
          >
            {hero.ctaApply}
          </button>
          <ul className="mt-8 flex flex-wrap gap-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink/80">
            {hero.values.map((value) => (
              <li key={value} className="border border-leaf px-3 py-1 text-leaf">
                {value}
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
            {toneChips.map((chip) => (
              <li key={chip} className="bg-ochre px-2.5 py-1">
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <BrushStroke className="pointer-events-none absolute -left-10 -right-6 top-4 h-[92%] w-[120%] text-cobalt sm:-left-16" />
          <LeafSprig className="pointer-events-none absolute -right-2 bottom-24 h-14 w-12 rotate-[22deg] text-leaf sm:h-16" />
          <div className="relative aspect-[4/5] rotate-[-3deg] overflow-hidden printed">
            <Image
              src="/brand/kok-pita-wrap.png"
              alt="KŌK пита с курицей су-вид"
              fill
              preload
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
          <StickerSeal className="absolute -left-3 bottom-24 w-24 rotate-[-12deg] drop-shadow-md sm:-left-6 sm:w-32" />
          <div className="absolute -bottom-6 -right-3 w-28 rotate-[8deg] overflow-hidden rounded-full border-4 border-paper shadow-lg sm:-right-4 sm:w-36">
            <div className="relative aspect-square bg-ochre">
              <Image
                src="/brand/kok-green-cup.png"
                alt="KŌK стакан street food"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
