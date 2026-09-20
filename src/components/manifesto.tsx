import { SparkBurst, Stamp, Zigzag } from "@/components/brand";
import { manifesto } from "@/lib/content";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden scroll-mt-24 bg-leaf px-4 py-16 text-cream sm:px-6 sm:py-20"
    >
      <SparkBurst className="pointer-events-none absolute right-[8%] top-10 h-10 w-10 text-ochre" />
      <div className="relative mx-auto max-w-6xl">
        <Stamp className="text-ochre">{manifesto.stamp}</Stamp>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
          {manifesto.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-cream/85 sm:text-lg">{manifesto.deck}</p>
        <Zigzag className="mt-6 h-4 w-32 text-ochre" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {manifesto.points.map((point) => (
            <article key={point.label} className="border border-cream/25 bg-leaf/40 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ochre">
                {point.label}
              </p>
              <h3 className="mt-3 font-display text-xl font-black tracking-[-0.02em]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
