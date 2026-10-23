import { readFile } from "node:fs/promises";
import path from "node:path";
import { fetchSheetLocations, locationsFromCsv } from "./location-parse";
import { googleSheetsCsvUrl } from "./public-config";
import type { LocationsPayload } from "./types";

export { parseLocationRecords } from "./location-parse";

async function loadFallbackCsv(): Promise<string> {
  const file = path.join(process.cwd(), "data", "locations.csv");
  return readFile(file, "utf8");
}

export async function loadLocations(): Promise<LocationsPayload> {
  const sheetUrl = googleSheetsCsvUrl();
  if (sheetUrl) {
    const fromSheet = await fetchSheetLocations(sheetUrl);
    if (fromSheet) {
      return fromSheet;
    }
  }

  return locationsFromCsv(await loadFallbackCsv(), "fallback");
}
