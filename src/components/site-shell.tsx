"use client";

import { ApplyProvider } from "@/components/apply-context";
import { ApplyModal } from "@/components/apply-modal";
import { Header } from "@/components/header";
import type { FranchiseLocation } from "@/lib/types";

/** Shared chrome: same top nav + apply modal on every page. */
export function SiteShell({
  children,
  cities,
}: {
  children: React.ReactNode;
  cities: FranchiseLocation[];
}) {
  return (
    <ApplyProvider>
      <Header />
      {children}
      <ApplyModal cities={cities} />
    </ApplyProvider>
  );
}
