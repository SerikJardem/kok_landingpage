"use client";

import { useApply } from "@/components/apply-context";
import { Stamp, WavePattern } from "@/components/brand";
import { closeCta } from "@/lib/content";

export function CloseCta() {
  const { openApply } = useApply();
  return (
    <section className="bg-terra px-4 py-20 text-cream sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Stamp className="text-cream">APPLY</Stamp>
        <h2 className="mt-6 font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
          {closeCta.title}
        </h2>
        <WavePattern className="mx-auto mt-6 h-5 w-48 text-ochre" />
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/90">{closeCta.deck}</p>
        <button
          type="button"
          onClick={() => openApply()}
          className="mt-10 bg-forest px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-cream shadow-[5px_5px_0_#1a1a1a]"
        >
          {closeCta.cta}
        </button>
      </div>
    </section>
  );
}
