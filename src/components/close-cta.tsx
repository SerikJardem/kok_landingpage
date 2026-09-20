"use client";

import { useApply } from "@/components/apply-context";
import { SparkBurst, Stamp, WavePattern } from "@/components/brand";
import { closeCta } from "@/lib/content";

export function CloseCta() {
  const { openApply } = useApply();
  return (
    <section className="relative overflow-hidden bg-leaf px-4 py-20 text-cream sm:px-6 sm:py-24">
      <SparkBurst className="pointer-events-none absolute left-[8%] top-10 h-10 w-10 text-ochre" />
      <SparkBurst className="pointer-events-none absolute right-[10%] bottom-10 h-8 w-8 text-ochre" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Stamp className="text-ochre">APPLY</Stamp>
        <h2 className="mt-6 font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
          {closeCta.title}
        </h2>
        <WavePattern className="mx-auto mt-6 h-5 w-48 text-ochre" />
        <button
          type="button"
          onClick={() => openApply()}
          className="mt-10 bg-ochre px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-cream"
        >
          {closeCta.cta}
        </button>
      </div>
    </section>
  );
}
