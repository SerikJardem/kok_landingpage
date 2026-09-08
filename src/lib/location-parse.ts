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

export function locationsFromCsv(
  csv: string,
  source: LocationSource,
): LocationsPayload {
  return {
    locations: parseLocationRecords(rowsToObjects(parseCsv(csv))),
    source,
    fetchedAt: new Date().toISOString(),
  };
}

export async function fetchSheetLocations(
  sheetUrl: string,
): Promise<LocationsPayload | null> {
  try {
    const response = await fetch(sheetUrl, { cache: "no-store" });
    if (!response.ok) {
      return null;
    }
    const csv = await response.text();
    const payload = locationsFromCsv(csv, "sheet");
    if (payload.locations.length === 0) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
