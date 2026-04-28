import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cheapest Fuel Prices Donegal Today - Diesel & Petrol Prices | Fuel the Gap",
  description:
    "Find the cheapest fuel prices in Donegal today. Compare diesel prices, petrol prices and heating oil across Donegal and Derry. Save €5-€15 per fill with real-time crowd-sourced prices from local users.",
  keywords: [
    "cheapest fuel prices Donegal today",
    "diesel prices Donegal",
    "petrol prices Donegal",
    "fuel prices Donegal",
    "cheapest diesel Donegal",
    "cheapest petrol Donegal",
    "fuel prices Derry",
    "diesel prices Derry",
    "petrol prices Derry",
    "heating oil prices Donegal",
    "fuel price tracker Ireland",
    "petrol prices Ireland today",
    "diesel prices Ireland today",
    "fuel price comparison Donegal",
    "cheap fuel Donegal",
    "cheap diesel Derry",
    "fuel app Ireland",
    "Fuel the Gap",
    "Inishowen fuel prices",
    "Letterkenny fuel prices",
    "cross border fuel prices",
    "fuel prices Northern Ireland",
  ],
  openGraph: {
    title: "Cheapest Fuel Prices Donegal Today | Diesel, Petrol & Heating Oil",
    description:
      "Save €5-€15 per fill! Find the cheapest diesel and petrol prices in Donegal and Derry today. Real-time crowd-sourced fuel prices from local users.",
    type: "website",
    locale: "en_IE",
    siteName: "Fuel the Gap by AI Fusion",
    url: "https://aifusion.ie/fuel-the-gap",
    images: [
      {
        url: "/images/fuel-the-gap-logo.jpeg",
        width: 800,
        height: 600,
        alt: "Fuel the Gap - Cheapest Fuel Prices Donegal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheapest Fuel Prices Donegal Today | Fuel the Gap",
    description:
      "Find the cheapest diesel and petrol prices in Donegal and Derry. Save money every time you fill up!",
    images: ["/images/fuel-the-gap-logo.jpeg"],
  },
  alternates: {
    canonical: "https://aifusion.ie/fuel-the-gap",
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
  other: {
    "geo.region": "IE-DL",
    "geo.placename": "Donegal, Ireland",
  },
}

export default function FuelTheGapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
