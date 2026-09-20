import { Crown, LeafSprig, SparkBurst, Stamp, WavePattern } from "@/components/brand";
import { manifesto } from "@/lib/content";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden scroll-mt-24 bg-paper px-4 py-20 sm:px-6 sm:py-28">
      <LeafSprig className="pointer-events-none absolute right-[8%] top-16 h-16 w-12 rotate-12 text-leaf/40" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Stamp className="text-terra">{manifesto.stamp}</Stamp>
          <Crown className="mt-8 h-7 w-12 text-leaf" />
          <p className="mt-4 font-display text-3xl font-black leading-tight tracking-[-0.03em] text-ink sm:text-5xl">
            {manifesto.lead}
          </p>
          <p className="mt-4 max-w-md text-ink/75">{manifesto.deck}</p>
          <WavePattern className="mt-6 h-5 w-40 text-leaf" />
          <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-leaf">
            {manifesto.guestsLabel}
          </p>
          <ul className="mt-4 space-y-4">
            {manifesto.guests.map((guest) => (
              <li key={guest.kk} className="border-l-4 border-ochre pl-4">
                <p className="font-display text-lg font-bold text-ink">{guest.kk}</p>
                <p className="text-sm text-ink/75">{guest.ru}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative bg-leaf p-6 text-cream sm:p-10">
          <SparkBurst className="absolute right-6 top-6 h-8 w-8 text-ochre" />
          <Crown className="absolute right-16 top-7 h-7 w-12 text-cream/80" />
          <div className="space-y-5 text-base leading-relaxed text-cream/95 sm:text-lg">
            {manifesto.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
