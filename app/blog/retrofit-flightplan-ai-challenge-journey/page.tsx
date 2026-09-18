import type { Metadata } from "next"
import RetrofitFlightplanBlogClient from "./client-page"

export const metadata: Metadata = {
  title: "Retrofit Flightplan – Our AI Challenge Journey | AI Fusion Blog",
  description:
    "How a team connected through the Inishowen Innovation Hub in Buncrana took part in Challenge 13 of the TechIreland AI Hackathon, building Retrofit Flightplan — an AI-powered MVP to help homeowners and BER assessors navigate the retrofit journey.",
  keywords: [
    "TechIreland AI Hackathon",
    "Retrofit Flightplan",
    "AI retrofit Ireland",
    "BER assessors AI",
    "Inishowen Innovation Hub",
    "Buncrana ii Hub",
    "AI hackathon Donegal",
    "home retrofit AI tool",
  ],
  alternates: {
    canonical: "https://aifusion.ie/blog/retrofit-flightplan-ai-challenge-journey",
  },
  openGraph: {
    title: "Retrofit Flightplan – Our AI Challenge Journey",
    description:
      "How a team connected through the Inishowen Innovation Hub in Buncrana built Retrofit Flightplan, an AI-powered MVP, in just two weeks for the TechIreland AI Hackathon.",
    url: "https://aifusion.ie/blog/retrofit-flightplan-ai-challenge-journey",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retrofit Flightplan – Our AI Challenge Journey",
    description:
      "How a team connected through the Inishowen Innovation Hub in Buncrana built Retrofit Flightplan, an AI-powered MVP, in just two weeks for the TechIreland AI Hackathon.",
  },
}

export default function RetrofitFlightplanBlogPost() {
  return <RetrofitFlightplanBlogClient />
}
