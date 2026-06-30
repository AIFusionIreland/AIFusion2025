import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community & Digital Inclusion AI Training in Donegal & Derry | AI Fusion",
  description:
    "AI and digital skills training for community groups, charities and government-funded digital inclusion programmes in Donegal and Derry. Accessible sessions for older adults, New Irish and Ukrainian communities, and people getting online for the first time.",
  keywords: [
    "digital inclusion training Donegal",
    "community AI training Derry",
    "digital skills training older adults Donegal",
    "AI training community groups Ireland",
    "government funded digital skills training",
    "Ukrainian community digital training Donegal",
    "New Irish digital skills training",
    "charity AI training Northwest Ireland",
    "digital inclusion programme Donegal",
    "basic digital skills training Letterkenny",
  ],
  openGraph: {
    title: "Community & Digital Inclusion AI Training in Donegal & Derry | AI Fusion",
    description:
      "Accessible AI and digital skills training for community groups, older adults, New Irish and Ukrainian communities, and government-funded digital inclusion programmes across Donegal and Derry.",
    url: "https://aifusion.ie/community-ai-training-donegal",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/community-connection.jpg",
        width: 800,
        height: 600,
        alt: "Community digital inclusion AI training session in Donegal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community & Digital Inclusion AI Training in Donegal & Derry",
    description:
      "Accessible AI and digital skills training for community groups and government-funded digital inclusion programmes across Donegal and Derry.",
    images: ["/images/community-connection.jpg"],
  },
  alternates: {
    canonical: "https://aifusion.ie/community-ai-training-donegal",
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

export default function CommunityAiTrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
