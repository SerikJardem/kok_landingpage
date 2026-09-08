import { DashField, Stamp, Zigzag } from "@/components/brand";
import { phygital } from "@/lib/content";

export function Phygital() {
  return (
    <section id="phygital" className="relative overflow-hidden bg-forest px-4 py-20 text-cream sm:px-6 sm:py-28">
      <DashField className="pointer-events-none absolute inset-0 text-sage/15" />
      <div className="relative mx-auto max-w-6xl">
        <Stamp className="text-ochre">{phygital.stamp}</Stamp>
        <p className="mt-6 max-w-2xl font-display text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
          {phygital.deck}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phygital.cards.map((card, index) => (
            <article
              key={card.no}
              className="printed relative bg-cream p-6 text-ink shadow-[8px_8px_0_#d86f45]"
              style={{ transform: `rotate(${index === 1 ? 1.2 : index === 2 ? -1.1 : -0.6}deg)` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-forest/60">{card.no}</span>
                <Stamp className="text-leaf">{card.stamp}</Stamp>
              </div>
              <h3 className="mt-8 font-display text-2xl font-black tracking-[-0.03em] text-forest">
                {card.title}
              </h3>
              <Zigzag className="my-4 h-4 w-24 text-terra" />
              <p className="text-[15px] leading-relaxed text-ink/80">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
