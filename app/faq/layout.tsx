import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AI Training Donegal & Derry | AI Fusion",
  description:
    "Answers to common questions about AI Fusion's AI training and workshops for businesses, schools, community groups and government-funded programmes across Donegal and Derry.",
  keywords: [
    "AI Fusion FAQ",
    "AI training questions Donegal",
    "AI workshops Derry FAQ",
    "community AI training questions",
  ],
  openGraph: {
    title: "Frequently Asked Questions | AI Fusion",
    description:
      "Answers to common questions about AI training and workshops across Donegal and Derry.",
    url: "/faq",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AI Fusion",
    description: "Answers to common questions about AI training across Donegal and Derry.",
  },
  alternates: {
    canonical: "https://aifusion.ie/faq",
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

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
