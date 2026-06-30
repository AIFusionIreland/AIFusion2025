import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Terms of Service | AI Fusion",
  description:
    "Read the terms of service governing the use of AI Fusion's website and services.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
