import { SparkBurst, Stamp, WavePattern, Zigzag } from "@/components/brand";
import { sauces } from "@/lib/content";

const tones = ["text-leaf", "text-cobalt", "text-ochre", "text-terra", "text-ink"] as const;

export function Sauces() {
  return (
    <section id="sauces" className="relative overflow-hidden scroll-mt-24 bg-leaf/10 px-4 py-20 sm:px-6 sm:py-28">
      <SparkBurst className="pointer-events-none absolute right-[8%] top-12 h-10 w-10 text-ochre" />
      <div className="relative mx-auto max-w-6xl">
        <Stamp className="text-terra">{sauces.stamp}</Stamp>
        <p className="mt-8 font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
          {sauces.kazakh}
        </p>
        <p className="mt-4 max-w-2xl font-display text-xl font-bold text-ink/80 sm:text-2xl">
          {sauces.title}
        </p>
        <WavePattern className="mt-6 h-5 w-40 text-leaf" />
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/80">{sauces.deck}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sauces.items.map((item, index) => (
            <article key={item.no} className="paper-card p-5">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-ink/45">{item.no}</span>
                <Stamp className={tones[index] ?? "text-leaf"}>{item.stamp}</Stamp>
              </div>
              <h3 className="mt-8 font-display text-xl font-black tracking-[-0.03em] text-ink">
                {item.name}
              </h3>
              <Zigzag className={`my-3 h-4 w-20 ${tones[index] ?? "text-terra"}`} />
              {"note" in item && item.note ? <p className="text-sm text-ink/70">{item.note}</p> : null}
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-[15px] leading-relaxed text-ink/80">{sauces.footer}</p>
      </div>
    </section>
  );
}
