import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cheapest Fuel Prices in Donegal Today | Diesel, Petrol & Heating Oil | Fuel the Gap",
  description: "Find the cheapest fuel prices in Donegal today. Compare diesel, petrol and heating oil prices across Donegal and Derry. Save €5-€15 per fill with Fuel the Gap - the free community-powered fuel price app.",
  keywords: [
    "fuel prices Donegal",
    "cheapest fuel prices Donegal today",
    "diesel prices Donegal",
    "petrol prices Donegal",
    "petrol prices Donegal today",
    "cheapest diesel Donegal",
    "heating oil prices Donegal",
    "fuel prices Derry",
    "cheap fuel Donegal",
    "fuel price comparison Donegal",
    "Donegal fuel stations",
    "fuel the gap",
    "fuel tracker app",
    "cheapest petrol Donegal",
    "fuel prices Ireland",
    "diesel prices Ireland today",
    "home heating oil Donegal"
  ],
  openGraph: {
    title: "Cheapest Fuel Prices in Donegal Today | Fuel the Gap",
    description: "Find the cheapest diesel, petrol and heating oil prices in Donegal. Save €5-€15 per fill with real-time community-powered prices.",
    url: "https://aifusion.ie/fuel-prices-donegal",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/fuel-the-gap-logo.jpeg",
        width: 800,
        height: 600,
        alt: "Fuel the Gap - Cheapest Fuel Prices in Donegal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheapest Fuel Prices in Donegal Today",
    description: "Compare diesel, petrol & heating oil prices across Donegal. Save money with Fuel the Gap.",
    images: ["/images/fuel-the-gap-logo.jpeg"]
  },
  alternates: {
    canonical: "https://aifusion.ie/fuel-prices-donegal"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function FuelPricesDonegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
