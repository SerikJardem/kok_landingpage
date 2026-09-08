import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseCsv, rowsToObjects } from "./csv";
import type {
  FranchiseLocation,
  LocationSource,
  LocationStatus,
  LocationsPayload,
} from "./types";

const HEADER_ALIASES: Record<string, keyof FranchiseLocation> = {
  city: "city",
  город: "city",
  region: "region",
  регион: "region",
  status: "status",
  статус: "status",
  launch: "launch",
  запуск: "launch",
  date: "launch",
  note: "note",
  заметка: "note",
  notes: "note",
};

function normalizeStatus(raw: string): LocationStatus | null {
  const value = raw.trim().toLowerCase();
  if (["occupied", "занято", "taken", "closed", "busy"].includes(value)) {
    return "occupied";
  }
  if (
    [
      "construction",
      "in construction",
      "в строительстве",
      "стройка",
      "building",
    ].includes(value)
  ) {
    return "construction";
  }
  if (["available", "свободно", "open", "free", "открыто"].includes(value)) {
    return "available";
  }
  return null;
}

function pick(record: Record<string, string>, key: keyof FranchiseLocation) {
  const aliases = Object.entries(HEADER_ALIASES)
    .filter(([, field]) => field === key)
    .map(([alias]) => alias);
  for (const alias of aliases) {
    if (record[alias]) {
      return record[alias];
    }
  }
  return "";
}

export function parseLocationRecords(
  records: Record<string, string>[],
): FranchiseLocation[] {
  return records
    .map((record) => {
      const city = pick(record, "city");
      const status = normalizeStatus(pick(record, "status"));
      if (!city || !status) {
        return null;
      }
      return {
        city,
        region: pick(record, "region"),
        status,
        launch: pick(record, "launch"),
        note: pick(record, "note"),
      } satisfies FranchiseLocation;
    })
    .filter((row): row is FranchiseLocation => row !== null);
}

async function loadFallbackCsv(): Promise<string> {
  const file = path.join(process.cwd(), "data", "locations.csv");
  return readFile(file, "utf8");
}

export async function loadLocations(): Promise<LocationsPayload> {
  const sheetUrl = process.env.GOOGLE_SHEETS_CSV_URL?.trim();
  let source: LocationSource = "fallback";
  let csv = "";

  if (sheetUrl) {
    try {
      const response = await fetch(sheetUrl, { next: { revalidate: 60 } });
      if (response.ok) {
        csv = await response.text();
        source = "sheet";
      }
    } catch {
      source = "fallback";
    }
  }

  if (!csv) {
    csv = await loadFallbackCsv();
    source = "fallback";
  }

  const locations = parseLocationRecords(rowsToObjects(parseCsv(csv)));
  if (locations.length === 0) {
    const fallback = parseLocationRecords(
      rowsToObjects(parseCsv(await loadFallbackCsv())),
    );
    return {
      locations: fallback,
      source: "fallback",
      fetchedAt: new Date().toISOString(),
    };
  }

  return {
    locations,
    source,
    fetchedAt: new Date().toISOString(),
  };
}
