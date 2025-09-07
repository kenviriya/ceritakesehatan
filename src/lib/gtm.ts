// Lightweight helper to push events to Google Tag Manager's dataLayer.
// Safe to call on server — it will no-op there.
export function trackWhatsAppClick(phone: string, label?: string): void {
  if (typeof window === 'undefined') return;
  // Ensure dataLayer exists and is typed for pushing events
  const w = window as unknown as {dataLayer?: Record<string, unknown>[]};
  try {
    if (!Array.isArray(w.dataLayer)) w.dataLayer = [];
    w.dataLayer.push({
      event: 'whatsapp_click',
      phone,
      label: label ?? null,
      timestamp: Date.now(),
    });
  } catch {
    // swallow errors to avoid breaking client navigation
  }
}
