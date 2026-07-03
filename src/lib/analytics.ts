// ============================================================
// ANALYTICS & TRACKING - Caçambas Premium
// ============================================================

// Google Analytics 4 Measurement ID
export const GA4_ID = "G-XXXXXXXXXX";

// Google Tag Manager Container ID
export const GTM_ID = "GTM-XXXXXXX";

// Google Ads Conversion ID (AW-XXXXXXXXX)
export const GADS_ID = "AW-XXXXXXXXX";

// ============================================================
// INITIALIZATION
// ============================================================

/**
 * Initialize Google Analytics 4
 * Only runs when GA4_ID is a real value (not placeholder)
 */
export const initGA = () => {
  if (typeof window === "undefined") return;
  if (!GA4_ID || GA4_ID === "G-XXXXXXXXXX") return;

  // Prevent duplicate initialization
  if ((window as any).__gaInitialized) return;
  (window as any).__gaInitialized = true;

  // Create gtag function on window if not exists
  window.dataLayer = window.dataLayer || [];
  
  // @ts-ignore - gtag is injected by external script or created here
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Load gtag.js script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Configure GA4 with correct settings for SPA
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID, {
    send_page_view: false, // We'll track page views manually in SPA
    cookie_domain: 'cacambaspremium.com.br',
    site_speed_sample_rate: 1,
    allow_google_signals: false,
    allow_display_features: true,
  });
};

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
  if (!GA4_ID || GA4_ID === "G-XXXXXXXXXX") return;
  
  const currentPath = path || location.pathname + location.search;
  
  // Avoid tracking same path multiple times
  if (currentPath === lastTrackedPath) return;
  lastTrackedPath = currentPath;

  window.gtag?.('event', 'page_view', {
    page_path: currentPath,
    page_title: title || document.title,
    send_to: GA4_ID,
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
 * Track WhatsApp button click via dataLayer
 * Format is compatible with Google Tag Manager and Google Ads
 */
export const trackWhatsAppClick = (source: string) => {
  if (typeof window === "undefined") return;

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
