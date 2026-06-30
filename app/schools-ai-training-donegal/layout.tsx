import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Training for Schools & Young People in Donegal & Derry | AI Fusion",
  description:
    "Engaging, age-appropriate AI and digital literacy workshops for schools, youth groups and young people across Donegal and Derry. Helping students and teachers use AI safely, creatively and responsibly.",
  keywords: [
    "AI training for schools Donegal",
    "AI workshops young people Derry",
    "digital literacy schools Northwest Ireland",
    "AI education Donegal",
    "AI for students Ireland",
    "teacher AI training Donegal",
    "youth group AI workshops",
    "responsible AI for schools",
    "AI safety education young people",
  ],
  openGraph: {
    title: "AI Training for Schools & Young People in Donegal & Derry | AI Fusion",
    description:
      "Engaging, age-appropriate AI and digital literacy workshops for schools, youth groups and young people across Donegal and Derry.",
    url: "https://aifusion.ie/schools-ai-training-donegal",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/ai-education.jpg",
        width: 800,
        height: 600,
        alt: "AI training workshop for students in a Donegal school",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training for Schools & Young People in Donegal & Derry",
    description:
      "Engaging, age-appropriate AI and digital literacy workshops for schools and youth groups across Donegal and Derry.",
    images: ["/images/ai-education.jpg"],
  },
  alternates: {
    canonical: "https://aifusion.ie/schools-ai-training-donegal",
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

export default function SchoolsAiTrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
