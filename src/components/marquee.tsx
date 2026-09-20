import { SparkBurst } from "@/components/brand";
import { hero, stamps } from "@/lib/content";

const items = [hero.tagline, stamps[1], stamps[2], stamps[3], hero.kazakh];

export function Marquee() {
  const sequence = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-leaf bg-ochre py-3 text-ink">
      <div className="marquee-track font-display text-sm font-bold tracking-[0.18em]">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 uppercase">
            <span>{item}</span>
            <SparkBurst className="h-4 w-4 text-terra" />
          </span>
        ))}
      </div>
    </div>
  );
}
