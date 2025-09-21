// Simple analytics tracking
export interface AnalyticsEvent {
  id: string
  event: string
  page: string
  timestamp: Date
  userAgent?: string
  ip?: string
  referrer?: string
}

export class Analytics {
  private static instance: Analytics
  private events: AnalyticsEvent[] = []

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics()
    }
    return Analytics.instance
  }

  public track(event: string, page: string, metadata?: any) {
    const analyticsEvent: AnalyticsEvent = {
      id: crypto.randomUUID(),
      event,
      page,
      timestamp: new Date(),
      userAgent: typeof window !== "undefined" ? window.navigator.userAgent : undefined,
      referrer: typeof window !== "undefined" ? document.referrer : undefined,
      ...metadata,
    }

    // Send to API
    if (typeof window !== "undefined") {
      fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(analyticsEvent),
      }).catch(console.error)
    }
  }

  public trackPageView(page: string) {
    this.track("page_view", page)
  }

  public trackEvent(event: string, page: string, data?: any) {
    this.track(event, page, data)
  }
}

export const analytics = Analytics.getInstance()
