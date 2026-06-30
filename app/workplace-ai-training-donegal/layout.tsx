import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workplace & Staff AI Training in Donegal & Derry | AI Fusion",
  description:
    "On-site and online AI training for employees and family-run businesses across Donegal and Derry. Practical, jargon-free workshops that upskill your whole team — from front-of-house to management.",
  keywords: [
    "workplace AI training Donegal",
    "staff AI training Derry",
    "employee AI training Ireland",
    "team AI workshops Donegal",
    "AI upskilling for businesses Northwest Ireland",
    "family business AI training",
    "ERNACT AI training",
    "ChatGPT staff training Donegal",
    "AI training Letterkenny",
  ],
  openGraph: {
    title: "Workplace & Staff AI Training in Donegal & Derry | AI Fusion",
    description:
      "Practical, jargon-free AI training for employees and family-run businesses across Donegal and Derry. On-site and online options.",
    url: "https://www.aifusion.ie/workplace-ai-training-donegal",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/ai-fusion-team.jpg",
        width: 800,
        height: 600,
        alt: "Workplace AI training session for a business team in Donegal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workplace & Staff AI Training in Donegal & Derry",
    description:
      "Practical AI training for employees and family-run businesses across Donegal and Derry.",
    images: ["/images/ai-fusion-team.jpg"],
  },
  alternates: {
    canonical: "https://www.aifusion.ie/workplace-ai-training-donegal",
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

export default function WorkplaceAiTrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
