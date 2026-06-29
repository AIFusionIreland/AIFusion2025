import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Training Workshops in Donegal & Northwest Ireland | AI Fusion",
  description:
    "Practical, jargon-free AI training workshops for small businesses and teams in Donegal, Derry and across Northwest Ireland. Online and in-person sessions. Book your AI training today.",
  keywords: [
    "AI training Donegal",
    "AI workshops Donegal",
    "AI training Northwest Ireland",
    "AI training Derry",
    "AI courses Donegal",
    "AI staff training Ireland",
    "business AI training Donegal",
    "AI training Letterkenny",
    "AI workshops for small business",
    "ChatGPT training Donegal",
    "AI upskilling Northwest Ireland",
  ],
  openGraph: {
    title: "AI Training Workshops in Donegal & Northwest Ireland | AI Fusion",
    description:
      "Practical, jargon-free AI training for small businesses and teams across Donegal, Derry and Northwest Ireland. Online and in-person options available.",
    url: "https://www.aifusion.ie/ai-training-donegal",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/ai-20training-202.jpeg",
        width: 800,
        height: 600,
        alt: "AI Training Workshops in Donegal and Northwest Ireland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training Workshops in Donegal & Northwest Ireland",
    description:
      "Practical, jargon-free AI training for small businesses and teams across Donegal, Derry and Northwest Ireland.",
    images: ["/images/ai-20training-202.jpeg"],
  },
  alternates: {
    canonical: "https://www.aifusion.ie/ai-training-donegal",
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

export default function AiTrainingDonegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
