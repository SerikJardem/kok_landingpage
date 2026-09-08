import { hero, stamps } from "@/lib/content";

const items = [hero.mantra, stamps[1], stamps[3], "URBAN NOMAD FOOD", "РОДНОЕ В НОВОМ РИТМЕ"];

export function Marquee() {
  const sequence = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-forest bg-ochre py-3 text-forest">
      <div className="marquee-track font-display text-sm font-bold tracking-[0.18em]">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 uppercase first:normal-case">
            <span className={item === hero.mantra ? "lowercase tracking-[0.08em]" : ""}>{item}</span>
            <span aria-hidden>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
