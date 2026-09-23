import { SparkBurst } from "@/components/brand";
import { stamps } from "@/lib/content";

export function Marquee() {
  const sequence = [...stamps, ...stamps];
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
