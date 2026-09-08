"use client";

import { useEffect, useState } from "react";
import { useApply } from "@/components/apply-context";
import { Stamp } from "@/components/brand";
import { territories } from "@/lib/content";
import { fetchSheetLocations } from "@/lib/location-parse";
import { googleSheetsCsvUrl } from "@/lib/public-config";
import type { FranchiseLocation, LocationSource, LocationStatus } from "@/lib/types";

const statusTone: Record<LocationStatus, string> = {
  available: "text-leaf border-leaf",
  construction: "text-ochre border-ochre",
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

  return (
    <section id="locations" className="bg-forest px-4 py-20 text-cream sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Stamp className="text-sage">{territories.stamp}</Stamp>
            <h2 className="mt-6 font-display text-3xl font-black tracking-[-0.03em] sm:text-5xl">
              {territories.title}
            </h2>
            <p className="mt-4 max-w-xl text-cream/80">{territories.deck}</p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-sage">
            {liveSource === "sheet" ? territories.sourceSheet : territories.sourceFallback}
          </p>
        </div>

        <div className="mt-10 overflow-hidden border-2 border-cream/20">
          <div className="hidden grid-cols-[1.2fr_1fr_0.9fr_0.9fr_auto] gap-4 border-b border-cream/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-sage md:grid">
            <span>Город</span>
            <span>Регион</span>
            <span>Статус</span>
            <span>Запуск</span>
            <span></span>
          </div>
          {rows.map((location) => (
            <article
              key={`${location.city}-${location.region}`}
              className="grid gap-3 border-b border-cream/15 px-5 py-5 md:grid-cols-[1.2fr_1fr_0.9fr_0.9fr_auto] md:items-center"
            >
              <div>
                <p className="font-display text-xl font-bold">{location.city}</p>
                {location.note ? (
                  <p className="mt-1 text-sm text-cream/60">{location.note}</p>
                ) : null}
              </div>
              <p className="text-sm text-cream/70">{location.region || "—"}</p>
              <span className={`stamp w-fit text-[10px] ${statusTone[location.status]}`}>
                {territories.status[location.status]}
              </span>
              <p className="font-mono text-sm text-sage">{location.launch || "—"}</p>
              <div>
                {location.status === "available" ? (
                  <button
                    type="button"
                    onClick={() => openApply(location.city)}
                    className="bg-ochre px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-forest shadow-[3px_3px_0_#d86f45]"
                  >
                    {territories.book}
                  </button>
                ) : (
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cream/40">
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
