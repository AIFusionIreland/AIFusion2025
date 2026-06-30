import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Our AI Services in Donegal & Derry | AI Fusion",
  description:
    "Explore AI Fusion's services — AI training, workshops and practical AI strategy for businesses, community groups and schools across Donegal, Derry and Northwest Ireland.",
  keywords: [
    "AI services Donegal",
    "AI services Derry",
    "AI strategy Northwest Ireland",
    "AI training and consultancy Ireland",
  ],
  openGraph: {
    title: "Our AI Services in Donegal & Derry | AI Fusion",
    description:
      "AI training, workshops and practical AI strategy across Donegal, Derry and Northwest Ireland.",
    url: "/services",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our AI Services in Donegal & Derry",
    description: "AI training, workshops and practical AI strategy across Donegal and Derry.",
  },
  alternates: {
    canonical: "/services",
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

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
