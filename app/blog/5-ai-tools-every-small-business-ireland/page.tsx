import type { Metadata } from "next"
import BlogPostClient from "./client-page"

export const metadata: Metadata = {
  title: "5 AI Tools Every Small Business in Ireland Should Know | AI Fusion Blog",
  description:
    "Discover five practical, affordable AI tools that can help Irish small businesses save time and boost productivity — from ChatGPT to OpusClip.",
  keywords: [
    "AI tools Ireland",
    "small business AI",
    "ChatGPT Ireland",
    "Canva AI",
    "Google Gemini",
    "Notion AI",
    "OpusClip",
    "AI for Irish businesses",
  ],
}

export default function BlogPost() {
  return <BlogPostClient />
}
