import { LogoLockup, Zigzag } from "@/components/brand";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 text-cream sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3 sm:items-center">
        <div>
          <LogoLockup
            variant="stack"
            align="left"
            className="h-16 w-auto max-w-[11rem] sm:h-[4.5rem] sm:max-w-[13rem]"
          />
        </div>
        <div className="sm:text-center">
          <a
            href={`mailto:${footer.email}`}
            className="font-mono text-[12px] lowercase tracking-[0.08em] text-ochre hover:text-cream"
          >
            {footer.email}
          </a>
        </div>
        <div className="sm:text-right">
          <Zigzag className="mb-3 h-4 w-32 text-terra sm:ml-auto" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">
            {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
