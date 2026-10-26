"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useApply } from "@/components/apply-context";
import { LogoLockup } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

const homeLinks = [
  { href: "/catering", label: nav.catering, key: "catering" as const },
  { href: "/franchise", label: nav.franchise, key: "franchise" as const },
] as const;

type NudgeKey = (typeof homeLinks)[number]["key"];

export function Header() {
  const { openApply } = useApply();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nudge, setNudge] = useState<NudgeKey | null>(null);

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

  /** Rare soft nudges on home — only while scanning the hero, not mid-page. */
  useEffect(() => {
    if (!isHome) {
      setNudge(null);
      return;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let cancelled = false;
    let step = 0;
    let clearTimer = 0;

    const fire = () => {
      if (cancelled || window.scrollY > 140) return;
      const which: NudgeKey = step % 2 === 0 ? "catering" : "franchise";
      setNudge(which);
      window.clearTimeout(clearTimer);
      clearTimer = window.setTimeout(() => {
        if (!cancelled) setNudge(null);
      }, 1200);
      step += 1;
    };

    const first = window.setTimeout(fire, 2200);
    const interval = window.setInterval(fire, 7800);

    return () => {
      cancelled = true;
      window.clearTimeout(first);
      window.clearTimeout(clearTimer);
      window.clearInterval(interval);
    };
  }, [isHome]);

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
          aria-label="KØK — Жеңіл әрі тез"
        >
          <LogoLockup
            variant="inline"
            align="left"
            className="h-8 w-auto max-w-[14rem] shrink-0 sm:h-9 sm:max-w-[17rem]"
          />
        </Link>
        <nav
          className={`hidden items-center gap-6 font-display text-[12px] font-bold uppercase tracking-[0.18em] lg:gap-8 md:flex ${
            overPhoto ? "text-cream" : "text-ink"
          }`}
        >
          {homeLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-attention hover:text-leaf",
                isHome && "nav-attention--live",
                nudge === item.key && "nav-attention--nudge",
              )}
            >
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
                className={cn(
                  "nav-attention nav-attention--live",
                  nudge === item.key && "nav-attention--nudge",
                )}
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
