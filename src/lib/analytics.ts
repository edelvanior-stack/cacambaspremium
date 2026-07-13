// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium
// ============================================================

// Google Ads Conversion ID
export const GADS_ID = "AW-17696330213";

// ============================================================
// INITIALIZATION
// ============================================================
// Google Ads Tag initialized directly in index.html as requested.

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
// WHATSAPP CONVERSION TRACKING
// ============================================================

/**
 * Track WhatsApp button click as Google Ads conversion + dataLayer event.
 * Fires the conversion BEFORE the WhatsApp link opens.
 */
export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

  // 1. Google Ads conversion event
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17696330213/xk9ZCLPj-8wcEOWjovZB',
      'value': 1.0,
      'currency': 'BRL',
    });
  }

  // 2. dataLayer push (for GTM compatibility)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    category: "conversion",
    action: "click",
    label: source,
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
