import { opsProof } from "@/lib/ops-proof";

export function OpsTelegramMock() {
  const { telegram } = opsProof;
  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[1.6rem] border-[3px] border-ink bg-[#0e1621] shadow-[8px_12px_0_#e24a30]">
        <div className="flex items-center justify-between px-4 pb-1 pt-3 text-[10px] text-cream/70">
          <span>11:04</span>
          <span>●●● Wi‑Fi</span>
        </div>
        <div className="border-b border-white/10 bg-[#17212b] px-4 py-3">
          <p className="font-display text-sm font-bold text-cream">HoReCa Bot</p>
          <p className="text-[10px] text-sage">в сети · {telegram.role}</p>
        </div>
        <div className="space-y-3 bg-[#0e1621] px-3 py-4">
          <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#182533] px-3 py-2 text-[12px] leading-relaxed text-cream/90">
            Привет, {telegram.name}! 👋
            <br />
            {telegram.greeting}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {telegram.buttons.map((button) => (
              <div
                key={button}
                className="rounded-lg bg-[#2b5278] px-2 py-2 text-center text-[10px] font-medium text-cream"
              >
                {button}
              </div>
            ))}
          </div>
          <div className="space-y-2 pt-1">
            {telegram.pushes.map((push) => (
              <div
                key={push.title}
                className="rounded-xl border border-lime/30 bg-[#132019] px-3 py-2"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-lime">
                  {push.title}
                </p>
                <p className="mt-1 text-[11px] text-cream/75">{push.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
