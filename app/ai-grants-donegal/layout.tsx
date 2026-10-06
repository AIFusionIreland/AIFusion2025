import type { Metadata } from "next"
import type React from "react"

const title = "AI Grants Donegal & Derry | Funded AI Training for SMEs"
const description =
  "Which AI grant applies to your business? Compare Grow Digital, Skillnet, AI Discovery and InterTradeIreland — and see how AI Fusion gets you funded."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: "/ai-grants-donegal",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/ai-grants-donegal",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AiGrantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
