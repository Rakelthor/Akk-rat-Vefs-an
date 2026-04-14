/**
 * Analytics Utility Functions for Glöggva
 * Handles Google Ads conversion tracking, UTM parameters, and keyword tracking
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface UTMParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string; // Keyword tracking
  utm_content?: string;
  gclid?: string; // Google Click ID
}

export interface ConversionData {
  value?: number;
  currency?: string;
  transaction_id?: string;
}

/**
 * Get UTM parameters from URL
 */
export function getUTMParameters(): UTMParameters {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    gclid: urlParams.get('gclid') || undefined,
  };
}

/**
 * Store UTM parameters in session storage
 */
export function storeUTMParameters(): void {
  if (typeof window === 'undefined') return;
  
  const params = getUTMParameters();
  
  // Only store if we have at least one UTM parameter
  if (Object.keys(params).some(key => params[key as keyof UTMParameters])) {
    sessionStorage.setItem('utm_parameters', JSON.stringify(params));
    
    // Store timestamp for attribution
    sessionStorage.setItem('utm_timestamp', new Date().toISOString());
  }
}

/**
 * Get stored UTM parameters from session storage
 */
export function getStoredUTMParameters(): UTMParameters {
  if (typeof window === 'undefined') return {};
  
  const stored = sessionStorage.getItem('utm_parameters');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }
  return {};
}

/**
 * Track page view with UTM parameters
 */
export function trackPageView(path?: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  window.gtag('event', 'page_view', {
    page_path: path || window.location.pathname,
    page_location: window.location.href,
    ...utm,
  });
}

/**
 * Track form submission conversion
 */
export function trackFormSubmission(
  formName: string,
  conversionData?: ConversionData
): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  // Track to both conversion IDs
  window.gtag('event', 'conversion', {
    send_to: 'AW-18029982289/q0YKCPumu4wcENHkrpVD',
    value: conversionData?.value || 50000, // Default 50,000 ISK estimated value
    currency: conversionData?.currency || 'ISK',
    transaction_id: conversionData?.transaction_id || `form_${Date.now()}`,
    ...utm,
  });
  
  window.gtag('event', 'conversion', {
    send_to: 'AW-18036202934/conversion', // Update with actual conversion label
    value: conversionData?.value || 50000,
    currency: conversionData?.currency || 'ISK',
    transaction_id: conversionData?.transaction_id || `form_${Date.now()}`,
    ...utm,
  });
  
  // Track as custom event for analytics
  window.gtag('event', 'form_submit', {
    form_name: formName,
    event_category: 'Contact',
    event_label: utm.utm_campaign || 'Direct',
    keyword: utm.utm_term || '(not set)',
    ...utm,
  });
}

/**
 * Track phone call conversion
 */
export function trackPhoneCall(phoneNumber: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  window.gtag('event', 'conversion', {
    send_to: 'AW-18029982289/phone_call', // Update with actual conversion label
    value: 40000, // 40,000 ISK estimated value
    currency: 'ISK',
    ...utm,
  });
  
  window.gtag('event', 'phone_call', {
    event_category: 'Contact',
    event_label: phoneNumber,
    keyword: utm.utm_term || '(not set)',
    ...utm,
  });
}

/**
 * Track email click conversion
 */
export function trackEmailClick(email: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  window.gtag('event', 'conversion', {
    send_to: 'AW-18029982289/email_click', // Update with actual conversion label
    value: 20000, // 20,000 ISK estimated value
    currency: 'ISK',
    ...utm,
  });
  
  window.gtag('event', 'email_click', {
    event_category: 'Contact',
    event_label: email,
    keyword: utm.utm_term || '(not set)',
    ...utm,
  });
}

/**
 * Track scroll depth (micro conversion)
 */
export function trackScrollDepth(percentage: number): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  window.gtag('event', 'scroll', {
    event_category: 'Engagement',
    event_label: `${percentage}%`,
    value: percentage,
    keyword: utm.utm_term || '(not set)',
    ...utm,
  });
}

/**
 * Track time on page (micro conversion)
 */
export function trackTimeOnPage(seconds: number): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  if (seconds >= 120) { // 2 minutes or more
    window.gtag('event', 'engaged_session', {
      event_category: 'Engagement',
      event_label: `${Math.floor(seconds / 60)} minutes`,
      value: seconds,
      keyword: utm.utm_term || '(not set)',
      ...utm,
    });
  }
}

/**
 * Track section view (e.g., services, about, etc.)
 */
export function trackSectionView(sectionName: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  window.gtag('event', 'section_view', {
    event_category: 'Engagement',
    event_label: sectionName,
    keyword: utm.utm_term || '(not set)',
    ...utm,
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, ctaLocation: string): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const utm = getStoredUTMParameters();
  
  window.gtag('event', 'cta_click', {
    event_category: 'Engagement',
    event_label: `${ctaName} - ${ctaLocation}`,
    keyword: utm.utm_term || '(not set)',
    ...utm,
  });
}

/**
 * Get attribution report (for debugging)
 */
export function getAttributionReport(): {
  utm: UTMParameters;
  timestamp: string | null;
  timeInSession: number;
} {
  if (typeof window === 'undefined') {
    return {
      utm: {},
      timestamp: null,
      timeInSession: 0,
    };
  }
  
  const utm = getStoredUTMParameters();
  const timestamp = sessionStorage.getItem('utm_timestamp');
  
  let timeInSession = 0;
  if (timestamp) {
    const start = new Date(timestamp);
    const now = new Date();
    timeInSession = Math.floor((now.getTime() - start.getTime()) / 1000);
  }
  
  return {
    utm,
    timestamp,
    timeInSession,
  };
}

/**
 * Initialize analytics tracking
 */
export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  // Store UTM parameters on page load
  storeUTMParameters();
  
  // Track initial page view
  trackPageView();
  
  // Setup scroll depth tracking
  let scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    100: false,
  };
  
  const handleScroll = () => {
    const scrollPercentage = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );
    
    if (scrollPercentage >= 25 && !scrollDepthTracked[25]) {
      scrollDepthTracked[25] = true;
      trackScrollDepth(25);
    }
    if (scrollPercentage >= 50 && !scrollDepthTracked[50]) {
      scrollDepthTracked[50] = true;
      trackScrollDepth(50);
    }
    if (scrollPercentage >= 75 && !scrollDepthTracked[75]) {
      scrollDepthTracked[75] = true;
      trackScrollDepth(75);
    }
    if (scrollPercentage >= 100 && !scrollDepthTracked[100]) {
      scrollDepthTracked[100] = true;
      trackScrollDepth(100);
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Track time on page
  const startTime = Date.now();
  
  const trackTime = () => {
    const timeInSeconds = Math.floor((Date.now() - startTime) / 1000);
    trackTimeOnPage(timeInSeconds);
  };
  
  // Track time on page at 2 minutes and 5 minutes
  setTimeout(() => trackTime(), 120000); // 2 minutes
  setTimeout(() => trackTime(), 300000); // 5 minutes
  
  // Track time on page before leaving
  window.addEventListener('beforeunload', trackTime);
}
