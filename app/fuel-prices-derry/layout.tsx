import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cheapest Fuel Prices in Derry Today | Diesel, Petrol & Heating Oil | Fuel the Gap",
  description: "Find the cheapest fuel prices in Derry today. Compare diesel, petrol and heating oil prices across Derry. Save £5-£15 per fill with Fuel the Gap - the free community-powered fuel price app.",
  keywords: [
    "fuel prices Derry",
    "cheapest fuel prices Derry today",
    "diesel prices Derry",
    "petrol prices Derry",
    "petrol prices Derry today",
    "cheapest diesel Derry",
    "heating oil prices Derry",
    "cheap fuel Derry",
    "fuel price comparison Derry",
    "Derry fuel stations",
    "fuel the gap",
    "fuel tracker app",
    "cheapest petrol Derry",
    "fuel prices Northern Ireland",
    "diesel prices Northern Ireland today",
    "home heating oil Derry"
  ],
  openGraph: {
    title: "Cheapest Fuel Prices in Derry Today | Fuel the Gap",
    description: "Find the cheapest diesel, petrol and heating oil prices in Derry. Save £5-£15 per fill with real-time community-powered prices.",
    url: "https://aifusion.ie/fuel-prices-derry",
    siteName: "AI Fusion",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/fuel-the-gap-logo.jpeg",
        width: 800,
        height: 600,
        alt: "Fuel the Gap - Cheapest Fuel Prices in Derry"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheapest Fuel Prices in Derry Today",
    description: "Compare diesel, petrol & heating oil prices across Derry. Save money with Fuel the Gap.",
    images: ["/images/fuel-the-gap-logo.jpeg"]
  },
  alternates: {
    canonical: "https://aifusion.ie/fuel-prices-derry"
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

export default function FuelPricesDerryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
