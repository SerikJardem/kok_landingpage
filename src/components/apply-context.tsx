"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ApplyContextValue = {
  open: boolean;
  city: string;
  session: number;
  openApply: (city?: string) => void;
  closeApply: () => void;
};

const ApplyContext = createContext<ApplyContextValue | null>(null);

export function ApplyProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");
  const [session, setSession] = useState(0);

  const openApply = useCallback((nextCity?: string) => {
    setCity(nextCity ?? "");
    setSession((value) => value + 1);
    setOpen(true);
  }, []);

  const closeApply = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ open, city, session, openApply, closeApply }),
    [open, city, session, openApply, closeApply],
  );

  return <ApplyContext.Provider value={value}>{children}</ApplyContext.Provider>;
}

export function useApply() {
  const ctx = useContext(ApplyContext);
  if (!ctx) {
    throw new Error("useApply must be used inside ApplyProvider");
  }
  return ctx;
}
