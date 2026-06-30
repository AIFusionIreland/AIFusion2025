import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Privacy Policy | AI Fusion",
  description:
    "Read AI Fusion's privacy policy to understand how we collect, use and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
