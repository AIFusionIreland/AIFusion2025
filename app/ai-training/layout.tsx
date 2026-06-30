import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "AI Training & Courses in Donegal & Derry | AI Fusion",
  description:
    "Practical, jargon-free AI training courses and workshops across Donegal and Derry. Learn the everyday AI tools that save time at work — online or in person, with no technical background needed.",
  keywords: [
    "AI training courses Donegal",
    "AI courses Derry",
    "AI workshops Northwest Ireland",
    "ChatGPT training Ireland",
    "AI training Letterkenny",
    "learn AI for work Donegal",
  ],
  openGraph: {
    title: "AI Training & Courses in Donegal & Derry | AI Fusion",
    description:
      "Practical, jargon-free AI training courses and workshops across Donegal and Derry. Online or in person, no technical background needed.",
    url: "/ai-training",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training & Courses in Donegal & Derry",
    description: "Practical, jargon-free AI training courses and workshops across Donegal and Derry.",
  },
  alternates: {
    canonical: "/ai-training",
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

export default function AiTrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
