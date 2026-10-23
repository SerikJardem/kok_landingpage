"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useApply } from "@/components/apply-context";
import { LogoLockup } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/content";

const homeLinks = [
  { href: "/catering", label: nav.catering },
  { href: "/franchise", label: nav.franchise },
] as const;

export function Header() {
  const { openApply } = useApply();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const overPhoto = isHome && !scrolled && !menuOpen;
  const inkOnPaper = !isHome || scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        inkOnPaper
          ? "bg-paper/95 shadow-[0_1px_0_#3dae5a] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center text-leaf"
          onClick={() => setMenuOpen(false)}
          aria-label="KŌK — Жеңіл әрі тез"
        >
          <LogoLockup
            align="left"
            className="h-10 w-auto max-w-[9.5rem] shrink-0 sm:h-11 sm:max-w-[11rem]"
          />
        </Link>
        <nav
          className={`hidden items-center gap-6 font-display text-[12px] font-bold uppercase tracking-[0.18em] lg:gap-8 md:flex ${
            overPhoto ? "text-cream" : "text-ink"
          }`}
        >
          {homeLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-leaf">
              {item.label}
            </Link>
          ))}
          <Button size="sm" onClick={() => openApply()}>
            {nav.apply}
          </Button>
        </nav>
        <button
          type="button"
          className={`font-display text-[11px] font-bold uppercase tracking-[0.16em] md:hidden ${
            overPhoto ? "text-cream" : "text-ink"
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Закрыть" : "Меню"}
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-leaf/20 bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-ink">
            {homeLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="wide"
              className="justify-start"
              onClick={() => {
                setMenuOpen(false);
                openApply();
              }}
            >
              {nav.apply}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
