"use client";

import { useEffect, useMemo, useState } from "react";
import { useApply } from "@/components/apply-context";
import { LeafSprig, Stamp } from "@/components/brand";
import { territories } from "@/lib/content";
import { fetchSheetLocations } from "@/lib/location-parse";
import { googleSheetsCsvUrl } from "@/lib/public-config";
import type { FranchiseLocation, LocationSource, LocationStatus } from "@/lib/types";

const statusTone: Record<LocationStatus, string> = {
  available: "text-leaf border-leaf",
  construction: "text-ink border-ochre bg-ochre",
  occupied: "text-terra border-terra",
};

export function Locations({
  locations,
  source,
}: {
  locations: FranchiseLocation[];
  source: LocationSource;
}) {
  const { openApply } = useApply();
  const [rows, setRows] = useState(locations);
  const [liveSource, setLiveSource] = useState(source);

  useEffect(() => {
    let cancelled = false;
    const sheetUrl = googleSheetsCsvUrl();
    if (!sheetUrl) {
      return;
    }
    fetchSheetLocations(sheetUrl).then((payload) => {
      if (!cancelled && payload && payload.locations.length > 0) {
        setRows(payload.locations);
        setLiveSource(payload.source);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const available = useMemo(
    () => rows.filter((location) => location.status === "available"),
    [rows],
  );

  return (
    <section
      id="locations"
      className="relative overflow-hidden scroll-mt-24 bg-paper px-4 py-16 text-ink sm:px-6 sm:py-24"
    >
      <LeafSprig className="pointer-events-none absolute right-8 top-12 h-16 w-12 rotate-12 text-leaf/35" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Stamp className="text-leaf">{territories.stamp}</Stamp>
            <h2 className="mt-5 font-display text-3xl font-black tracking-[-0.03em] text-ink sm:text-5xl">
              {territories.title}
            </h2>
            <p className="mt-3 max-w-xl text-ink/75">{territories.deck}</p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-leaf">
            {liveSource === "sheet" ? territories.sourceSheet : territories.sourceFallback}
          </p>
        </div>

        {available.length > 0 ? (
          <div className="mt-8 border-y border-leaf/25 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-leaf">
              {territories.availableTitle}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {available.map((location) => (
                <li key={`available-${location.city}`}>
                  <button
                    type="button"
                    onClick={() => openApply(location.city)}
                    className="font-display text-lg font-bold tracking-[-0.02em] text-ink underline decoration-leaf/40 underline-offset-4 transition hover:text-leaf hover:decoration-leaf"
                  >
                    {location.city}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="paper-card mt-8 overflow-hidden">
          <div className="hidden grid-cols-[1.2fr_1fr_0.9fr_0.9fr_auto] gap-4 border-b border-ink/10 bg-leaf/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-leaf md:grid">
            <span>Город</span>
            <span>Регион</span>
            <span>Статус</span>
            <span>Запуск</span>
            <span></span>
          </div>
          {rows.map((location) => (
            <article
              key={`${location.city}-${location.region}`}
              className="grid gap-3 border-b border-ink/10 px-5 py-5 last:border-b-0 md:grid-cols-[1.2fr_1fr_0.9fr_0.9fr_auto] md:items-center"
            >
              <div>
                <p className="font-display text-xl font-bold text-ink">{location.city}</p>
                {location.note ? (
                  <p className="mt-1 text-sm text-ink/55">{location.note}</p>
                ) : null}
              </div>
              <p className="text-sm text-ink/70">{location.region || "—"}</p>
              <span className={`stamp w-fit text-[10px] ${statusTone[location.status]}`}>
                {territories.status[location.status]}
              </span>
              <p className="font-mono text-sm text-leaf">{location.launch || "—"}</p>
              <div>
                {location.status === "available" ? (
                  <button
                    type="button"
                    onClick={() => openApply(location.city)}
                    className="bg-leaf px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-cream transition hover:bg-ink"
                  >
                    {territories.book}
                  </button>
                ) : (
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/40">
                    {location.status === "construction"
                      ? territories.constructionHint
                      : territories.occupiedHint}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
