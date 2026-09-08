import { Stamp, WavePattern } from "@/components/brand";
import { manifesto } from "@/lib/content";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-cream px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Stamp className="text-terra">{manifesto.stamp}</Stamp>
          <p className="mt-8 font-display text-3xl font-black leading-tight tracking-[-0.03em] text-forest sm:text-4xl">
            {manifesto.lead}
          </p>
          <WavePattern className="mt-6 h-5 w-40 text-sage" />
          <p className="mt-8 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-leaf">
            {manifesto.guestsLabel}
          </p>
          <ul className="mt-4 space-y-4">
            {manifesto.guests.map((guest) => (
              <li key={guest.kk} className="border-l-4 border-ochre pl-4">
                <p className="font-display text-lg font-bold text-forest">{guest.kk}</p>
                <p className="text-sm text-ink/75">{guest.ru}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="printed bg-forest p-6 text-cream shadow-[10px_12px_0_#abb27a] sm:p-10">
          <div className="space-y-5 text-base leading-relaxed text-cream/90 sm:text-lg">
            {manifesto.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
