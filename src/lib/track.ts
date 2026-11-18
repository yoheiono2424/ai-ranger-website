/** 問い合わせ完了を計測に送る（GA4・Metaピクセル。どちらも無ければ何もしない） */
type W = Window & { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void };

export const trackLead = (from: string) => {
  if (typeof window === 'undefined') return;
  const w = window as W;
  w.fbq?.('track', 'Lead', { content_name: from });
  w.gtag?.('event', 'generate_lead', { form: from });
};
