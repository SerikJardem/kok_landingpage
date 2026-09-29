import { SparkBurst } from "@/components/brand";
import { stamps } from "@/lib/content";

export function Marquee() {
  const sequence = [...stamps, ...stamps];
  return (
    <div className="overflow-hidden border-y-2 border-leaf bg-ochre py-3.5 text-ink">
      <div className="marquee-track font-display text-[13px] font-bold tracking-[0.2em] sm:text-sm">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 uppercase">
            <span>{item}</span>
            <SparkBurst className="h-3.5 w-3.5 shrink-0 text-terra sm:h-4 sm:w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
