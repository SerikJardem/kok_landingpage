import { buildJsonLd } from "@/lib/seo";

/** Structured data for Google + AI assistants (Organization, Offer, FAQ). */
export function JsonLd() {
  const data = buildJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
