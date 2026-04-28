import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Apps - AI Fusion | Innovative Applications",
  description:
    "Discover the innovative applications built by AI Fusion to help businesses and communities thrive in the digital age. Explore our portfolio of AI-powered solutions.",
  keywords: [
    "AI Fusion apps",
    "AI applications",
    "innovative apps Ireland",
    "community apps",
    "AI powered solutions",
    "digital transformation apps",
  ],
  openGraph: {
    title: "Our Apps - AI Fusion",
    description:
      "Explore the innovative applications built by AI Fusion to help businesses and communities.",
    type: "website",
    locale: "en_IE",
    siteName: "AI Fusion",
  },
  alternates: {
    canonical: "https://aifusion.ie/apps",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
