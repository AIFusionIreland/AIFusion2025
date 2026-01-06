import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import { Quote, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "AI for Beginners Feedback | AI Fusion Testimonials",
  description: "Read feedback from participants of AI Fusion's AI for Beginners course in Ireland.",
  keywords: "AI training testimonials, AI for beginners feedback, AI course reviews Ireland",
}

export default function TestimonialsPage() {
  const testimonials = [
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">AI for Beginners Feedback</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Hear from participants who attended our AI for Beginners course
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-8">
              {testimonials.map((testimonial, index) => (
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
