import { SparkBurst, Stamp, Zigzag } from "@/components/brand";
import { economics } from "@/lib/content";

export function Economics() {
  return (
    <section id="economics" className="relative overflow-hidden scroll-mt-24 bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <SparkBurst className="pointer-events-none absolute right-[10%] top-16 h-10 w-10 text-ochre" />
      <div className="mx-auto max-w-6xl">
        <Stamp className="text-leaf">{economics.stamp}</Stamp>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {economics.receipts.map((receipt, index) => (
            <article
              key={receipt.sku}
              className="receipt relative px-6 pb-8 pt-10 font-mono"
              style={{ transform: `rotate(${index === 0 ? -1.2 : index === 2 ? 1.4 : 0.3}deg)` }}
            >
              <p className="text-center text-[10px] uppercase tracking-[0.35em] text-leaf">
                KŌK · MODEL TICKET
              </p>
              <p className="mt-2 text-center text-[10px] text-ink/40">************************</p>
              <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-widest">
                <span>{receipt.sku}</span>
                <span>QTY 1</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-[0.08em] text-ink">
                {receipt.label}
              </h3>
              <p className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-leaf">
                {receipt.value}
              </p>
              <p className="mt-4 border-t border-dashed border-ink/25 pt-3 text-[11px] uppercase tracking-[0.08em] text-ink/70">
                {receipt.meta}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {economics.stats.map((stat) => (
            <div key={stat.label} className="paper-card px-5 py-4">
              <p className="font-display text-2xl font-black text-leaf">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/70">{stat.label}</p>
            </div>
          ))}
        </div>
        <Zigzag className="mx-auto mt-10 h-4 w-40 text-terra" />
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-ink/75">
          {economics.caveat}
        </p>
      </div>
    </section>
  );
}
