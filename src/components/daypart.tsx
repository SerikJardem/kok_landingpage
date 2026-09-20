import { SparkBurst, Stamp, WavePattern } from "@/components/brand";
import { daypart } from "@/lib/content";

export function Daypart() {
  return (
    <section id="coffee" className="relative overflow-hidden scroll-mt-24 bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <SparkBurst className="pointer-events-none absolute left-[6%] top-12 h-8 w-8 text-ochre" />
      <div className="relative mx-auto max-w-6xl">
        <Stamp className="text-leaf">{daypart.stamp}</Stamp>
        <h2 className="mt-8 max-w-3xl font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
          {daypart.title}
        </h2>
        <WavePattern className="mt-6 h-5 w-40 text-leaf" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="relative bg-leaf p-6 text-cream sm:p-10">
            <SparkBurst className="absolute right-6 top-6 h-8 w-8 text-ochre" />
            <Stamp className="text-ochre">{daypart.coffeeStamp}</Stamp>
            <h3 className="mt-8 font-display text-3xl font-black leading-tight tracking-[-0.03em]">
              {daypart.coffeeTitle}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-cream/95 sm:text-lg">{daypart.coffeeBody}</p>
          </article>

          <article className="paper-card p-6 sm:p-10">
            <Stamp className="text-leaf">{daypart.grabStamp}</Stamp>
            <p className="mt-8 font-display text-5xl font-black tracking-[-0.04em] text-leaf">
              {daypart.grabValue}
            </p>
            <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.03em] text-ink">
              {daypart.grabTitle}
            </h3>
            <ul className="mt-8 space-y-4">
              {daypart.grabItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-l-4 border-ochre pl-4"
                >
                  <span className="text-sm text-ink/70">{item.label}</span>
                  <span className="font-display font-bold text-ink">{item.value}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
