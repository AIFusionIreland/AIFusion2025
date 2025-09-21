"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { analytics } from "@/lib/analytics"

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    analytics.trackPageView(pathname)
  }, [pathname])

  return <>{children}</>
}
