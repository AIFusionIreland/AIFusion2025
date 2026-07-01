import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import AnalyticsProvider from "@/components/analytics-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://aifusion.ie"),
  title: "AI Training Donegal & Derry | AI Fusion",
  description:
    "Practical AI & digital skills training for small businesses, schools and community groups across Donegal and Derry. Book a free strategy call.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI consultant Donegal",
    "AI training Donegal",
    "AI consultant Derry",
    "AI training Northwest Ireland",
    "AI for small business Ireland",
    "AI automation SMEs Ireland",
    "AI chatbot small business",
    "AI workshops Donegal",
    "AI consultant Northern Ireland",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e1b4b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://aifusion.ie/#organization",
              name: "AI Fusion",
              description:
                "AI Fusion helps small and family-run businesses in Donegal, Derry and across Northwest Ireland implement practical AI solutions, including AI automation, chatbots, staff training and AI strategy.",
              url: "https://aifusion.ie",
              email: "info@aifusion.ie",
              telephone: "+353876856131",
              image: "https://aifusion.ie/apple-touch-icon.png",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                addressRegion: "County Donegal",
                addressCountry: "IE",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "County Donegal" },
                { "@type": "City", name: "Derry" },
                { "@type": "Place", name: "Northwest Ireland" },
              ],
              knowsAbout: [
                "AI consulting",
                "AI training",
                "AI automation",
                "AI chatbots",
                "AI strategy for small business",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  )
}
