/**
 * Tiny tracking stub. GrowthYari has no analytics script installed yet, so
 * events are queued into a standard `dataLayer` that a tag manager can pick up
 * later. Until then this is a safe no-op that never throws.
 *
 * Known event names live in `content/programs-content.ts` (`programEvents`).
 */
type DataLayerEvent = Record<string, unknown> & { event: string };

export function track(event: string, props: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as { dataLayer?: DataLayerEvent[] };
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({ event, ...props });
  } catch {
    // Never let analytics break the page.
  }
}