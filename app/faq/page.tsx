"use client"

import { Card, CardContent } from "@/components/ui/card"
import ContactDialog from "@/components/contact-dialog"
import SiteHeader from "@/components/site-header"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const individualTrainingFAQs: FAQItem[] = [
  {
    question: "What is AI Fusion?",
    answer:
      "AI Fusion is an AI education and training provider. We specialize in making artificial intelligence accessible and practical for individuals, businesses, and organizations of all sizes.",
  },
  {
    question: "Who are the courses suitable for?",
    answer:
      "Our courses are designed for everyone - from complete beginners with no technical background to professionals looking to integrate AI into their business. We offer tailored training for individuals, businesses, and educational institutions.",
  },
  {
    question: "Do I need any technical background to attend?",
    answer:
      "No technical background is required! Our 'AI for Beginners' course is specifically designed for people with no prior knowledge of AI. We explain everything in simple, easy-to-understand terms.",
  },
  {
    question: "What topics do you cover in your courses?",
    answer:
      "We cover a wide range of AI topics including ChatGPT, AI tools for business, content creation with AI, automation, AI for marketing, AI for education, and practical AI implementation strategies.",
  },
  {
    question: "Are the courses online or in-person?",
    answer:
      "We offer both online and in-person training options. Check our 'Upcoming Courses' page for specific course formats and dates.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Course lengths vary depending on the program. Our introductory courses typically run for 1 hour, while comprehensive business training can be customized to your needs.",
  },
  {
    question: "Do you offer the FREE 15-minute consultation?",
    answer:
      "Yes! We offer a FREE 15-minute consultation where we can discuss your AI learning goals and recommend the best course for you. You can book this through our Stan Store link on the home page, or drop us an email info@aifusion.ie, or by contacting us directly through the contact form on our website.",
  },
  {
    question: "What are the FREE guides about?",
    answer:
      "Our FREE guides cover various AI topics including; FREE AI App Guide, FREE Small Business Guide to AI. You can download these from our Stan Store, link on Homepage.",
  },
  {
    question: "How do I book a course?",
    answer:
      "You can book a course by clicking the 'Book Now' button on any course page, or by contacting us directly through the contact form. We'll guide you through the registration process.",
  },
  {
    question: "Do you offer ongoing support after the course?",
    answer:
      "We provide post-course support to help you implement what you've learned. You'll also have access to our community and resources.",
  },
  {
    question: "How can I stay updated on new courses and AI news?",
    answer:
      "Follow us on Facebook and TikTok (@aifusionireland) for the latest updates, tips, and course announcements. You can also contact us to join our mailing list.",
  },
]

const businessServicesFAQs: FAQItem[] = [
  {
    question: "How can AI Fusion help my business decide where to start with AI?",
    answer:
      "We begin every project with a Discovery Consultation to understand your operations, pain points, and goals. From there, we help you prioritize your business needs and identify areas where AI can deliver the fastest, most measurable impact — such as admin automation, marketing support, or customer communication.",
  },
  {
    question: "What if I'm not sure which AI tools are right for my business?",
    answer:
      "That's completely normal — most clients aren't! We analyze your workflows and recommend specific AI tools suited to your business size, systems, and staff skill levels. Our goal is to find low-cost, high-value tools that save you time and are simple to implement — no unnecessary tech overwhelm.",
  },
  {
    question: "Do you offer hands-on AI training for teams?",
    answer:
      "Yes. We deliver both in-person and online AI training, tailored to your industry and your staff's skill levels. Training is designed to build confidence and show your team how AI can make their jobs easier — not replace them.",
  },
  {
    question: "What's included in an AI Business Pilot Program?",
    answer:
      "Our 6-week AI Pilot Program includes: Discovery & Strategy Session – identifying the best opportunities for your business; Tool Selection & Training – choosing the right AI platforms; Implementation & Testing – deploying tools into your daily workflows; Performance Review & Optimization – tracking outcomes and refining results. By the end, you'll have a custom AI toolkit and clear next steps for scaling AI use safely.",
  },
  {
    question: "Can you help my business become more visible online?",
    answer:
      "Absolutely. We provide SEO audits and ongoing optimization services to improve your business's online discoverability. Our audits include: Keyword and content analysis; Technical SEO health check; On-page optimization recommendations; Local SEO improvements. Combined with AI-driven insights, we help your business attract more of the right customers online.",
  },
  {
    question: "How does AI Fusion ensure compliance with AI and data protection laws?",
    answer:
      "We align all our services with the EU AI Act and GDPR requirements. That means: Only compliant and transparent tools are recommended; We assess and classify any AI systems you use; We ensure customer data is processed ethically and securely. You'll always know how AI tools work and what data they handle.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a wide range of sectors — from retail and trades to professional services, healthcare, hospitality, and education. Our strength lies in tailoring AI solutions to fit your workflow, compliance needs, and customer base, not forcing a one-size-fits-all system.",
  },
  {
    question: "How long does it take to see results from AI implementation?",
    answer:
      "Most businesses see measurable benefits within 4–6 weeks, including: 3–6 hours saved weekly in admin tasks; Faster quote responses and project turnaround; Improved consistency in communications and marketing. We track and review progress with you during and after implementation.",
  },
  {
    question: "Is AI Fusion suitable for small and medium-sized businesses?",
    answer:
      "Yes — we specialize in helping SMEs and family-run companies use AI affordably. Our focus is on practical solutions that deliver visible value, not big, expensive enterprise systems.",
  },
  {
    question: "Can my business get a grant for this training or AI consultancy?",
    answer:
      "Yes! AI Fusion can help you prepare your Grow Digital application, write your project proposal, and ensure your business meets all eligibility requirements for funding.",
  },
  {
    question: "Can you provide training for my entire team?",
    answer:
      "Yes! We offer customized corporate training programs for businesses of all sizes. Contact us to discuss your specific requirements and we'll create a tailored training plan for your team.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards via Stripe and Revolut payments. Payment details and links will be provided during the booking process.",
  },
  {
    question: "Where are you located?",
    answer:
      "AI Fusion is based in Inishowen, Donegal, Ireland, and we serve clients across the country and internationally through our online training programs.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can: Book a free Discovery Call through our contact form; Arrange an on-site consultation; Or attend one of our AI Courses. From there, we'll create a tailored AI Action Plan specific to your business.",
  },
]

export default function FAQPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  const allFAQs = [...individualTrainingFAQs, ...businessServicesFAQs]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about AI Fusion's courses, training, and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Individual Training</h2>
          <div className="space-y-6">
            {individualTrainingFAQs.map((faq, index) => (
              <Card key={index} className="bg-navy-900/50 border-navy-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Business Services</h2>
          <div className="space-y-6">
            {businessServicesFAQs.map((faq, index) => (
              <Card key={index} className="bg-navy-900/50 border-navy-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-gray-300 mb-6">Can't find the answer you're looking for? Our team is here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://stan.store/AIFusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Book FREE Consultation
                </a>
                <button
                  onClick={() => setIsContactDialogOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
