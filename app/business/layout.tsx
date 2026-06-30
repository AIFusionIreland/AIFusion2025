import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "AI for Your Business in Donegal & Derry | AI Fusion",
  description:
    "Discover how AI can save time and reduce costs for your business across Donegal, Derry and Northwest Ireland. Practical AI services tailored to small and family-run businesses.",
  keywords: [
    "AI for business Donegal",
    "AI business services Derry",
    "AI for small business Ireland",
    "business AI solutions Northwest Ireland",
  ],
  openGraph: {
    title: "AI for Your Business in Donegal & Derry | AI Fusion",
    description:
      "Discover how AI can save time and reduce costs for your business across Donegal, Derry and Northwest Ireland.",
    url: "/business",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Your Business in Donegal & Derry",
    description: "Practical AI services tailored to small and family-run businesses.",
  },
  alternates: {
    canonical: "/business",
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

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
