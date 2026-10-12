import type { JsonLd as JsonLdData } from "@/lib/jsonld";

/**
 * Renders a JSON-LD block. Kept in a dedicated component so pages embedding
 * structured data can't forget to JSON.stringify or escape it.
 */
export function JsonLd({ data, id }: { data: JsonLdData; id: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}