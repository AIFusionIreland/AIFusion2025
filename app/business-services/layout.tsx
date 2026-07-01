import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Business Services in Donegal & Derry | AI Fusion",
  description:
    "AI Fusion's business services for small and family-run businesses across Donegal, Derry and Northwest Ireland — from online presence to AI adoption.",
  keywords: [
    "business services Donegal",
    "AI business services Derry",
    "website services Northwest Ireland",
    "online presence small business Ireland",
  ],
  openGraph: {
    title: "Business Services in Donegal & Derry | AI Fusion",
    description:
      "Business services for small and family-run businesses across Donegal, Derry and Northwest Ireland.",
    url: "/business-services",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Services in Donegal & Derry",
    description: "Business services for small and family-run businesses across Donegal and Derry.",
  },
  alternates: {
    canonical: "/business-services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BusinessServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
