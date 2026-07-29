import type { Metadata } from "next"
import SvnpEglintonBlogClient from "./client-page"

export const metadata: Metadata = {
  title: "Small Screens, Big Confidence: SVNP's First Digital Skills Session in Eglinton | AI Fusion Blog",
  description:
    "Inside the Smart Village Network Project's first Digital Skills for Beginners session in Eglinton, delivered by AI Fusion for ERNACT — practical, device-specific help for older learners across Donegal and Derry.",
  keywords: [
    "Smart Village Network Project",
    "SVNP digital skills",
    "Digital Skills for Beginners Eglinton",
    "ERNACT digital training",
    "digital skills training Derry",
    "PEACEPLUS digital inclusion",
    "AI Fusion community training",
  ],
  alternates: {
    canonical: "https://aifusion.ie/blog/svnp-eglinton-digital-skills-first-session",
  },
  openGraph: {
    title: "Small Screens, Big Confidence: SVNP's First Digital Skills Session in Eglinton",
    description:
      "Inside the Smart Village Network Project's first Digital Skills for Beginners session in Eglinton, delivered by AI Fusion for ERNACT.",
    url: "https://aifusion.ie/blog/svnp-eglinton-digital-skills-first-session",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "article",
    images: [
      {
        url: "/images/svnp-eglinton-session-room.jpg",
        width: 1200,
        height: 630,
        alt: "AI Fusion delivering the SVNP Digital Skills for Beginners session at Eglinton Community Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Screens, Big Confidence: SVNP's First Digital Skills Session in Eglinton",
    description:
      "Inside the Smart Village Network Project's first Digital Skills for Beginners session in Eglinton, delivered by AI Fusion for ERNACT.",
    images: ["/images/svnp-eglinton-session-room.jpg"],
  },
}

export default function SvnpEglintonBlogPost() {
  return <SvnpEglintonBlogClient />
}
