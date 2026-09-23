"use client";

import { useEffect, useState } from "react";
import { useApply } from "@/components/apply-context";
import { Wordmark } from "@/components/brand";
import { nav } from "@/lib/content";

export function Header() {
  const { openApply } = useApply();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-paper/95 shadow-[0_1px_0_#3dae5a] backdrop-blur-md" : "bg-paper/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 text-leaf"
          onClick={() => setMenuOpen(false)}
        >
          <Wordmark className="h-8 w-auto shrink-0 sm:h-9" />
          <span className="truncate font-display text-[12px] font-bold tracking-[-0.02em] text-ink sm:text-sm">
            Тез. Таза. Fresh.
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink md:flex">
          <a href="#numbers" className="hover:text-leaf">
            {nav.numbers}
          </a>
          <a href="#locations" className="hover:text-leaf">
            {nav.locations}
          </a>
          <button
            type="button"
            onClick={() => openApply()}
            className="bg-leaf px-4 py-2 text-cream transition hover:bg-ink"
          >
            {nav.apply}
          </button>
        </nav>
        <button
          type="button"
          className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Закрыть" : "Меню"}
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-leaf/20 bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink">
            <a href="#numbers" onClick={() => setMenuOpen(false)}>
              {nav.numbers}
            </a>
            <a href="#locations" onClick={() => setMenuOpen(false)}>
              {nav.locations}
            </a>
            <button
              type="button"
              className="bg-leaf px-4 py-3 text-left text-cream"
              onClick={() => {
                setMenuOpen(false);
                openApply();
              }}
            >
              {nav.apply}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
