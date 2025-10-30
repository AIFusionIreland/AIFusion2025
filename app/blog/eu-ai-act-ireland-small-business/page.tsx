import type { Metadata } from "next"
import EUAIActBlogClient from "./client-page"

export const metadata: Metadata = {
  title: "The EU AI Act: What Every Small Business in Ireland Should Know | AI Fusion Blog",
  description:
    "A straightforward guide to the EU AI Act for Irish small businesses. Learn what it means, how it affects you, and actionable steps to ensure compliance.",
  keywords: [
    "EU AI Act Ireland",
    "AI regulation Ireland",
    "small business AI compliance",
    "EU AI Act SME",
    "AI governance Ireland",
    "AI Act compliance",
  ],
}

export default function EUAIActBlogPost() {
  return <EUAIActBlogClient />
}
