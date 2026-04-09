import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fuel the Gap - Crowd-Sourced Fuel Prices Derry & Donegal | AI Fusion Apps",
  description:
    "Find the cheapest fuel prices in Derry and Donegal with Fuel the Gap. A community-driven app for real-time petrol and diesel price updates. Save money on fuel with crowd-sourced local price tracking.",
  keywords: [
    "fuel prices Derry",
    "fuel prices Donegal",
    "cheap petrol Derry",
    "cheap diesel Donegal",
    "fuel price tracker Ireland",
    "petrol prices Northern Ireland",
    "diesel prices Ireland",
    "fuel price app",
    "crowd sourced fuel prices",
    "best fuel prices near me",
    "Fuel the Gap",
    "AI Fusion apps",
    "fuel price comparison Derry",
    "fuel price comparison Donegal",
    "cheapest petrol Donegal",
    "cheapest diesel Derry",
    "local fuel prices",
    "community fuel tracker",
  ],
  openGraph: {
    title: "Fuel the Gap - Find Cheap Fuel Prices in Derry & Donegal",
    description:
      "Community-driven fuel price tracker for Derry and Donegal. Get real-time petrol and diesel prices from local users and save money at the pump.",
    type: "website",
    locale: "en_IE",
    siteName: "AI Fusion",
    images: [
      {
        url: "/images/fuel-the-gap-logo.jpeg",
        width: 800,
        height: 600,
        alt: "Fuel the Gap - Crowd-Sourced Fuel Price App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel the Gap - Cheap Fuel Prices Derry & Donegal",
    description:
      "Find the best fuel prices in your area with crowd-sourced data from local users in Derry and Donegal.",
    images: ["/images/fuel-the-gap-logo.jpeg"],
  },
  alternates: {
    canonical: "https://aifusion.ie/apps",
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

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
