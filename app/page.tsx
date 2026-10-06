import type { Metadata } from "next"
import HomePage from "@/components/home-page"

const title = "AI Training Donegal & Derry | Funded for SMEs | AI Fusion"
const description =
  "Practical AI training and consultancy for small businesses in Donegal and Derry. Often funded through LEO, Skillnet and Enterprise Ireland schemes."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://aifusion.ie",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/ai-fusion-classroom-training.jpg",
        width: 1200,
        height: 630,
        alt: "AI Fusion delivering practical AI and digital skills training in Donegal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/ai-fusion-classroom-training.jpg"],
  },
}

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://aifusion.ie/#organization",
  name: "AI Fusion",
  description:
    "Practical AI training and digital skills workshops for small businesses, community groups and schools across Donegal, Derry and Northwest Ireland, with AI consultancy for SMEs.",
  url: "https://aifusion.ie",
  telephone: "+353876856131",
  email: "info@aifusion.ie",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Figart, Isle of Doagh",
    addressLocality: "Clonmany",
    addressRegion: "Co. Donegal",
    postalCode: "F93 ET92",
    addressCountry: "IE",
  },
  areaServed: [
    { "@type": "City", name: "Letterkenny" },
    { "@type": "City", name: "Buncrana" },
    { "@type": "City", name: "Donegal Town" },
    { "@type": "City", name: "Carndonagh" },
    { "@type": "City", name: "Ballybofey" },
    { "@type": "City", name: "Bundoran" },
    { "@type": "City", name: "Lifford" },
    { "@type": "City", name: "Dungloe" },
    { "@type": "City", name: "Derry" },
    { "@type": "City", name: "Strabane" },
    { "@type": "AdministrativeArea", name: "County Donegal" },
    { "@type": "AdministrativeArea", name: "Inishowen" },
  ],
  founder: { "@type": "Person", name: "Donna Cregan" },
  sameAs: ["https://www.facebook.com/AIFusionIreland/", "https://www.tiktok.com/@aifusionireland"],
  priceRange: "€€",
  knowsAbout: [
    "Artificial intelligence training",
    "Digital skills training",
    "AI adoption for small business",
    "EU AI Act compliance",
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd).replace(/</g, "\\u003c") }}
      />
      <HomePage />
    </>
  )
}
