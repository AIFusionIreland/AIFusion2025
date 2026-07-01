import type { Metadata } from "next"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import { Quote, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Feedback | AI Fusion Testimonials",
  description: "Read feedback from businesses and participants of AI Fusion's training courses in Ireland.",
  keywords: "AI training testimonials, AI for beginners feedback, AI course reviews Ireland, business AI training",
  openGraph: {
    title: "Client Feedback | AI Fusion Testimonials",
    description:
      "Read feedback from businesses and participants of AI Fusion's AI and digital skills training across Donegal and Derry.",
    url: "https://aifusion.ie/testimonials",
    siteName: "AI Fusion",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/ai-20training-20participant-20reviews.png",
        width: 800,
        height: 600,
        alt: "Feedback from AI Fusion training participants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Feedback | AI Fusion Testimonials",
    description:
      "Read feedback from businesses and participants of AI Fusion's AI and digital skills training across Donegal and Derry.",
    images: ["/images/ai-20training-20participant-20reviews.png"],
  },
  alternates: {
    canonical: "https://aifusion.ie/testimonials",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function TestimonialsPage() {
  const businessTestimonials = [
    {
      name: "Bredgeen Harkin",
      business: "McDaids - Bathroom, Plumbing & Tiles",
      location: "Inishowen, Donegal",
      quote:
        "McDaids is a bathroom, plumbing and tiles local business in Inishowen, Donegal, and before working with Donna we hadn't really explored how AI could help us day-to-day. Donna took the time to understand how our business operates and provided practical AI training for our team, along with helpful insights into improving our online presence. We have also updated our website for better discoverability.\n\nSince then, we've started using AI in a few areas of the business which has already helped us save time and streamline some of our processes.\n\nDonna was very approachable and explained everything in a way that was easy to understand.\n\nI would highly recommend AI Fusion to any business looking to explore how AI can support their operations.",
    },
  ]

  const beginnerTestimonials = [
    {
      name: "Maria",
      date: "September 2025",
      quote:
        "I had just heard loads of people chatting about chat GPT never actually used it myself but I can see the relevance and help it could be for different reasons I obviously need to get more involved with that type future work and assistance but was good to see an insight into this.....",
    },
    {
      name: "Tanya",
      date: "September 2025",
      quote: "Thank you Donna. I enjoyed the session. It was very clear and well presented. Best wishes with it all.",
    },
    {
      name: "Mary",
      date: "October 2025",
      quote: "I feel it was pitched perfectly for anyone starting to use AI in everyday life. Thank you Donna :)",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Client Feedback</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Hear from businesses and participants who have worked with AI Fusion
            </p>
          </div>
        </section>

        {/* Training Feedback Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Training Feedback</h2>
            <div className="grid gap-8">
              <div className="bg-navy-900/50 border border-navy-800 rounded-lg p-8 hover:border-purple-600/50 transition-all duration-300 relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-24 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
                    <Image src="/images/ernact-logo.png" alt="ERNACT Logo" fill className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Roksana Oliinyk</h3>
                    <p className="text-sm text-purple-400 font-medium">ERNACT</p>
                    <p className="text-sm text-gray-400">Digital Skills for Beginners Workshop</p>
                  </div>
                  <Quote className="h-8 w-8 text-purple-600/30" />
                </div>

                <p className="text-gray-300 leading-relaxed text-pretty">
                  {
                    "It was a pleasure to work with Donna Cregan from AI Fusion. Donna delivered a very engaging and supportive Digital Skills for Beginners workshop, and we really appreciated her professional and friendly approach."
                  }
                </p>

                <div className="flex gap-1 mt-6 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Services Feedback Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Business Services Feedback</h2>
            <div className="grid gap-8">
              {businessTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-navy-900/50 border border-navy-800 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 relative"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-24 h-16 relative flex-shrink-0 bg-white rounded-md overflow-hidden">
                      <Image
                        src="/images/mcdaids-logo.jpeg"
                        alt="McDaids Logo"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-green-400 font-medium">{testimonial.business}</p>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                    <Quote className="h-8 w-8 text-green-500/30" />
                  </div>

                  <p className="text-gray-300 leading-relaxed text-pretty whitespace-pre-line">{testimonial.quote}</p>

                  <div className="flex gap-1 mt-6 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI for Beginners Feedback Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">AI for Beginners Feedback</h2>
            <div className="grid gap-8">
              {beginnerTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-navy-900/50 border border-navy-800 rounded-lg p-8 hover:border-purple-600/50 transition-all duration-300 relative"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.date}</p>
                      <p className="text-sm text-gray-400">AI for Beginners Course Participant</p>
                    </div>
                    <Quote className="h-8 w-8 text-purple-600/30" />
                  </div>

                  <p className="text-gray-300 leading-relaxed text-pretty">{testimonial.quote}</p>

                  <div className="flex gap-1 mt-4 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
