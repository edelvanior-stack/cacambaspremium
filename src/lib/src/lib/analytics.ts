// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium
// ============================================================

// Google Ads Base ID
export const GADS_ID = "AW-17696330213";

// Google Ads WhatsApp Conversion ID
export const GADS_CONVERSION_WHATSAPP = "AW-17696330213/bNhvCPSvh-UcEOWjovZB";

// ============================================================
// SPA ROUTE TRACKING
// ============================================================

let lastTrackedPath: string | null = null;

/**
 * Track virtual page view for SPA navigation
 * Call this on route change / section scroll into view
 */
export const trackPageView = (path?: string, title?: string) => {
  if (typeof window === "undefined") return;
  
  const currentPath = path || location.pathname + location.search;
  
  // Avoid tracking same path multiple times
  if (currentPath === lastTrackedPath) return;
  lastTrackedPath = currentPath;

  window.gtag?.('event', 'page_view', {
    page_path: currentPath,
    page_title: title || document.title,
    send_to: GADS_ID,
  });
};

/**
 * Track initial page load
 */
export const trackInitialPageView = () => {
  trackPageView(location.pathname, document.title);
};

// ============================================================
// WHATSAPP CONVERSION TRACKING - OFICIAL
// ============================================================

/**
 * Track WhatsApp button click as Google Ads conversion + dataLayer event.
 * send_to: AW-17696330213/bNhvCPSvh-UcEOWjovZB
 *
 * DEDUPLICATION: the site has multiple WhatsApp CTAs (navbar, hero, footer,
 * floating button, etc). Without this guard, a single visitor clicking more
 * than one of them fires multiple Google Ads conversions for what is really
 * one lead, inflating conversion counts and skewing CPA/optimization.
 * Only the FIRST WhatsApp click per browser session is sent to Google Ads;
 * every click is still recorded in dataLayer for full-funnel analytics.
 */
const WHATSAPP_CONVERSION_SESSION_KEY = "cp_wa_conversion_sent";

export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  const alreadyConverted = window.sessionStorage?.getItem(WHATSAPP_CONVERSION_SESSION_KEY);

  // 1. Google Ads conversion event — only once per session
  if (window.gtag && !alreadyConverted) {
    window.gtag("event", "conversion", {
      send_to: "AW-17696330213/bNhvCPSvh-UcEOWjovZB",
    });
    window.sessionStorage?.setItem(WHATSAPP_CONVERSION_SESSION_KEY, "1");
  }

  // 2. dataLayer push (for GTM compatibility) — recorded on every click,
  // so you can still see engagement with each button, just not double-billed
  // as separate Google Ads conversions.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    category: "conversion",
    action: "click",
    label: source,
    counted_as_conversion: !alreadyConverted,
  });
};

// ============================================================
// FORM CONVERSION TRACKING
// ============================================================

/**
 * Track successful form submission (quote request)
 */
export const trackFormSubmit = () => {
  if (typeof window === "undefined") return;
  
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: 'quote_form',
      value: 1,
      send_to: GADS_ID,
    });
  }
};

// ============================================================
// ENGAGEMENT TRACKING
// ============================================================

/**
 * Track user scroll depth milestones
 * Automatically tracks at 25%, 50%, 75%, 100%
 */
const trackedDepths = new Set<number>();

export const trackScrollDepth = (percent: number) => {
  if (trackedDepths.has(percent)) return;
  if (typeof window === "undefined") return;
  
  trackedDepths.add(percent);

  window.gtag?.('event', 'scroll_depth', {
    event_category: 'engagement',
    event_label: `${percent}%`,
    value: percent,
  });
};

/** Reset scroll depth tracking (call this on every SPA route change) */
export const resetScrollTracking = () => {
  trackedDepths.clear();
};

// ============================================================
// UTILITY: Scroll Depth Observer
// ============================================================

let scrollObserverInitialized = false;

/**
 * Initialize automatic scroll depth tracking observer
 * Call once on app mount
 */
export const initScrollObserver = () => {
  if (typeof window === "undefined" || scrollObserverInitialized) return;
  scrollObserverInitialized = true;

  const depths = [25, 50, 75, 100];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const depthPct = parseInt(target.dataset.depth || "0", 10);
          trackScrollDepth(depthPct);
        }
      });
    },
    { threshold: 0.5 }
  );

  depths.forEach((depth) => {
    const el = document.createElement("div");
    el.setAttribute("data-depth", String(depth));
    el.style.position = "absolute";
    el.style.height = `${depth}%`;
    el.style.width = "1px";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    observer.observe(el);
    
    // Remove after observation starts
    setTimeout(() => el.remove(), 5000);
  });

  return observer;
};
