import { loadLocations } from "@/lib/locations";

export const dynamic = "force-dynamic";

export async function GET() {
  const payload = await loadLocations();
  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
