import type { Metadata } from "next"
import TrainingSessionBlogClient from "./client-page"

export const metadata: Metadata = {
  title: "What Happens in an AI Fusion Training Session | AI Fusion Blog",
  description:
    "A behind-the-scenes look at how AI Fusion plans and delivers tailored digital skills training — using a recent Digital Skills for Beginners workshop for ERNACT at Eglinton Community Centre as an example.",
  keywords: [
    "AI Fusion training session",
    "digital skills training Donegal",
    "digital skills for beginners",
    "community digital training Derry",
    "ERNACT digital skills workshop",
    "tailored AI training Ireland",
  ],
  alternates: {
    canonical: "https://aifusion.ie/blog/what-happens-in-ai-fusion-training-session",
  },
}

export default function TrainingSessionBlogPost() {
  return <TrainingSessionBlogClient />
}
