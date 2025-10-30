import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | AI Fusion",
  description:
    "Get in touch with AI Fusion. Visit us in Donegal, Ireland or reach out via email for AI training and business consultancy services.",
}

import { ContactClientPage } from "./contact-client"

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AI Fusion",
            description:
              "AI education and training provider specializing in making artificial intelligence accessible and practical for individuals, businesses, and organizations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Figart, Isle of Doagh, Clonmany",
              addressLocality: "Donegal",
              addressRegion: "County Donegal",
              postalCode: "F93 ET92",
              addressCountry: "IE",
            },
            email: "info@aifusion.ie",
            url: "https://aifusion.ie",
            areaServed: "IE",
            priceRange: "$$",
          }),
        }}
      />
      <ContactClientPage />
    </>
  )
}
