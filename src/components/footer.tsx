import { Wordmark, Zigzag } from "@/components/brand";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 text-cream sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3 sm:items-center">
        <div>
          <Wordmark className="h-12 w-auto text-leaf" />
          <p className="mt-3 font-display text-sm font-bold text-ochre">{footer.tagline}</p>
        </div>
        <div className="sm:text-center">
          <a
            href={`mailto:${footer.email}`}
            className="font-mono text-[12px] lowercase tracking-[0.08em] text-ochre hover:text-cream"
          >
            {footer.email}
          </a>
          <p className="mt-2 text-sm text-cream/55">{footer.line}</p>
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
