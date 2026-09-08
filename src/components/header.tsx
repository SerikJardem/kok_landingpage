"use client";

import { useEffect, useState } from "react";
import { useApply } from "@/components/apply-context";
import { Stamp, Wordmark } from "@/components/brand";
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

  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-cream/94 shadow-[0_1px_0_#2f3a25] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className={onDark ? "text-lime" : "text-forest"}
          onClick={() => setMenuOpen(false)}
        >
          <Wordmark className="h-8 w-auto sm:h-9" />
        </a>
        <nav
          className={`hidden items-center gap-8 font-display text-[12px] font-bold uppercase tracking-[0.18em] md:flex ${
            onDark ? "text-cream" : "text-forest"
          }`}
        >
          <a href="#locations" className="hover:opacity-70">
            {nav.locations}
          </a>
          <a href="#economics" className="hover:opacity-70">
            {nav.economics}
          </a>
          <button
            type="button"
            onClick={() => openApply()}
            className={`px-4 py-2 transition ${
              onDark
                ? "bg-lime text-ink hover:bg-cream"
                : "bg-forest text-cream shadow-[3px_3px_0_#d86f45] hover:translate-x-[1px] hover:translate-y-[1px]"
            }`}
          >
            {nav.apply}
          </button>
        </nav>
        <button
          type="button"
          className={`font-display text-[11px] font-bold uppercase tracking-[0.16em] md:hidden ${
            onDark ? "text-lime" : "text-forest"
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Закрыть" : "Меню"}
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-forest/20 bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-forest">
            <a href="#locations" onClick={() => setMenuOpen(false)}>
              {nav.locations}
            </a>
            <a href="#economics" onClick={() => setMenuOpen(false)}>
              {nav.economics}
            </a>
            <button
              type="button"
              className="bg-forest px-4 py-3 text-left text-cream"
              onClick={() => {
                setMenuOpen(false);
                openApply();
              }}
            >
              {nav.apply}
            </button>
            <Stamp className="w-fit text-terra">NOMAD MOOD</Stamp>
          </div>
        </div>
      ) : null}
    </header>
  );
}
