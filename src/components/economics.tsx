import { Stamp } from "@/components/brand";
import { economics, footer } from "@/lib/content";

export function Economics() {
  return (
    <section id="economics" className="bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Stamp className="text-forest">{economics.stamp}</Stamp>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {economics.receipts.map((receipt, index) => (
            <article
              key={receipt.sku}
              className="receipt relative px-6 pb-8 pt-10 font-mono"
              style={{ transform: `rotate(${index === 0 ? -1.5 : index === 2 ? 1.8 : 0.4}deg)` }}
            >
              <p className="text-center text-[10px] uppercase tracking-[0.35em] text-forest/70">
                KŌK · UNIT TICKET
              </p>
              <p className="mt-2 text-center text-[10px] text-forest/50">************************</p>
              <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-widest">
                <span>{receipt.sku}</span>
                <span>QTY 1</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-[0.08em] text-forest">
                {receipt.label}
              </h3>
              <p className="mt-3 font-display text-4xl font-black tracking-[-0.04em] text-ink">
                {receipt.value}
              </p>
              <p className="mt-4 border-t border-dashed border-forest/30 pt-3 text-[11px] uppercase tracking-[0.14em] text-forest/70">
                {receipt.meta}
              </p>
              <p className="mt-6 text-center text-[10px] lowercase tracking-[0.08em] text-forest/40">
                --- {footer.mantra} ---
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-forest/75">
          {economics.caveat}
        </p>
      </div>
    </section>
  );
}
