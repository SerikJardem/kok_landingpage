import { LeafSprig, Stamp, WavePattern, Zigzag } from "@/components/brand";
import { zoning } from "@/lib/content";

export function Zoning() {
  return (
    <section id="zoning" className="relative overflow-hidden scroll-mt-24 bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <LeafSprig className="pointer-events-none absolute right-[6%] top-14 h-16 w-12 rotate-12 text-leaf/35" />
      <div className="relative mx-auto max-w-6xl">
        <Stamp className="text-leaf">{zoning.stamp}</Stamp>
        <p className="mt-8 font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
          {zoning.kazakh}
        </p>
        <p className="mt-4 max-w-2xl font-display text-xl font-bold text-ink/80 sm:text-2xl">
          {zoning.title}
        </p>
        <WavePattern className="mt-6 h-5 w-40 text-leaf" />
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink/80">{zoning.deck}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {zoning.formats.map((format) => (
            <article key={format.stamp} className="paper-card p-6">
              <div className="flex items-start justify-between gap-4">
                <Stamp className="text-leaf">{format.stamp}</Stamp>
                <p className="font-display text-2xl font-black tracking-[-0.03em] text-leaf">
                  {format.area}
                </p>
              </div>
              <h3 className="mt-6 font-display text-2xl font-black tracking-[-0.03em] text-ink">
                {format.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
                {format.meta}
              </p>
              <Zigzag className="my-4 h-4 w-24 text-terra" />
              <p className="text-[15px] leading-relaxed text-ink/80">{format.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <Stamp className="text-leaf">{zoning.midiStamp}</Stamp>
          <p className="mt-4 font-display text-2xl font-black tracking-[-0.03em] text-ink">
            {zoning.midiLead}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {zoning.zones.map((zone) => (
              <article key={zone.label} className="paper-card px-5 py-5">
                <p className="font-display text-2xl font-black text-leaf">{zone.area}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{zone.label}</h3>
                <p className="mt-2 text-sm text-ink/70">{zone.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Stamp className="text-leaf">{zoning.lineStamp}</Stamp>
            <p className="mt-4 font-display text-2xl font-black tracking-[-0.03em] text-ink">
              {zoning.lineLead}
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-5">
              {zoning.steps.map((step) => (
                <li key={step.no} className="border-l-4 border-ochre pl-4">
                  <p className="font-mono text-[11px] text-ink/45">{step.no}</p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">{step.kk}</p>
                  <p className="text-sm text-ink/75">{step.ru}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-leaf">
              {zoning.regenLead}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {zoning.regen.map((path) => (
                <article key={path.path} className="paper-card px-5 py-4">
                  <Stamp className="text-leaf">PATH {path.path}</Stamp>
                  <p className="mt-3 font-display text-xl font-black text-ink">{path.title}</p>
                  <p className="mt-1 font-display text-2xl font-black text-leaf">{path.time}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {zoning.tech.map((item) => (
            <div key={item.label} className="paper-card px-5 py-4">
              <p className="text-sm text-ink/70">{item.label}</p>
              <p className="mt-1 font-display text-2xl font-black text-leaf">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
