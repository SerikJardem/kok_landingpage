import Image from "next/image";
import { Zigzag } from "@/components/brand";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-cream sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Image
            src="/brand/kok-logo-footer.png"
            alt="KØK — Жеңіл әрі тез"
            width={182}
            height={80}
            className="h-14 w-auto"
          />
          <p className="mt-4 font-display text-sm font-bold lowercase tracking-[0.08em] text-sage">
            {footer.mantra}
          </p>
          <p className="mt-2 max-w-sm text-sm text-cream/60">{footer.line}</p>
        </div>
        <div className="text-right">
          <Zigzag className="ml-auto mb-3 h-4 w-32 text-terra" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/40">
            {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
