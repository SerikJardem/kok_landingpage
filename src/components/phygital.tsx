import { DashField, LeafSprig, Stamp, Zigzag } from "@/components/brand";
import { phygital } from "@/lib/content";

export function Phygital() {
  return (
    <section id="format" className="relative overflow-hidden scroll-mt-24 bg-leaf/10 px-4 py-20 text-ink sm:px-6 sm:py-28">
      <DashField className="pointer-events-none absolute -right-6 top-8 h-40 w-56 text-leaf/30 sm:h-52 sm:w-72" />
      <LeafSprig className="pointer-events-none absolute right-6 top-10 h-16 w-12 rotate-12 text-leaf/50" />
      <div className="relative mx-auto max-w-6xl">
        <Stamp className="text-leaf">{phygital.stamp}</Stamp>
        <p className="mt-6 max-w-2xl font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
          {phygital.deck}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phygital.cards.map((card) => (
            <article key={card.no} className="paper-card p-6 text-ink">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-ink/50">{card.no}</span>
                <Stamp className="text-leaf">{card.stamp}</Stamp>
              </div>
              <h3 className="mt-8 font-display text-2xl font-black tracking-[-0.03em] text-ink">
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
