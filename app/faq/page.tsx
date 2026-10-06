"use client"

import { Card, CardContent } from "@/components/ui/card"
import ContactDialog from "@/components/contact-dialog"
import SiteHeader from "@/components/site-header"
import Link from "next/link"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
  showFundingLink?: boolean
}

const generalFAQs: FAQItem[] = [
  {
    question: "Who does AI Fusion train?",
    answer:
      "AI Fusion trains employees at family-run and small businesses, community groups, schools, and government-funded programmes across Donegal and Derry — including sessions designed for older adults and the Ukrainian community.",
  },
  {
    question: "Where is AI Fusion based?",
    answer:
      "AI Fusion is based in County Donegal, Ireland, and delivers training in person across Donegal and Derry, and online anywhere.",
  },
  {
    question: "Does AI Fusion offer training for community groups and government-funded programmes?",
    answer:
      "Yes. AI Fusion works with councils, local development bodies, and community organisations to deliver digital skills and AI training, including programmes supporting older adults and New Irish communities.",
  },
  {
    question: "Does AI Fusion still offer AI consultancy for businesses?",
    answer:
      "Yes — alongside training, AI Fusion offers a smaller AI strategy consultancy service for businesses wanting a tailored roadmap for adopting AI.",
  },
  {
    question: "Is the training suitable for people with no technical background?",
    answer:
      "Yes — all sessions are designed to be plain-spoken and practical, with no assumed technical knowledge.",
  },
]

const individualTrainingFAQs: FAQItem[] = []

const fundingFAQs: FAQItem[] = [
  {
    question: "Can my business get a grant for AI training or consultancy?",
    answer:
      "Usually, yes — but almost never in one step. The route most Donegal businesses use starts with a Digital for Business assessment, which is free to your business and produces a report showing where AI would actually pay off. That report is what unlocks the Grow Digital Voucher, which funds 50% of eligible costs up to a maximum grant of €5,000, and covers both software and the training or IT configuration to get it working. If your staff train through an approved Skillnet programme, you can also claim €204.30 per training day, per employee, towards their salary. Subject to eligibility and approval. Before you commit to anything, we'll tell you honestly which of these you're likely to qualify for — including if the answer is none of them.",
    showFundingLink: true,
  },
  {
    question: "What is the Grow Digital Voucher worth, and what does it cover?",
    answer:
      "It funds 50% of eligible costs, with a minimum grant of €500 and a maximum of €5,000 per application. You can be approved for up to two projects, to a cumulative grant value of €5,000. It covers software and the training or IT configuration needed to make it work — which is exactly what we do. You must have completed a Digital for Business project within the previous two years. Subject to eligibility and approval.",
    showFundingLink: true,
  },
  {
    question: "What is Digital for Business — and is it really free?",
    answer:
      "It's a LEO-funded assessment, and yes, it's genuinely free to your business. An independent consultant reviews how you work and produces a report identifying where digital tools and AI would make a measurable difference. It's the prerequisite for the Grow Digital Voucher, which is why it's the right first step even if you never spend another euro. One thing worth knowing: the LEO appoints the consultant, so we can't promise it'll be us. We'll still tell you honestly whether it's worth doing.",
  },
  {
    question: "Does my business qualify for these grants?",
    answer:
      "The common requirements: between 1 and 50 paid employees; trading for at least six months; registered in a Local Enterprise Office area; not a current Enterprise Ireland or IDA client; solvent and tax compliant, with a Tax Reference and Tax Clearance Access Number. Some sectors are excluded — primary agriculture, fishing and aquaculture, gambling, adult entertainment, tobacco, coal and steel, commercial semi-state bodies, trade associations and Chambers, and charitable-status companies that don't meet the trading criteria. If you're not sure which side of the line you're on, a 15-minute call will settle it. Subject to eligibility and approval.",
    showFundingLink: true,
  },
  {
    question: "Is there a grant that covers staff salaries while they train?",
    answer:
      "Yes — the Skillnet Upskill SME Training Grant contributes €204.30 per training day, per employee, towards salary costs. It applies to businesses with 2–250 employees, and the training has to be delivered through an approved programme with a Skillnet network. Two things people get wrong: individuals can't claim it themselves, and it rebates salary rather than course fees — so it stacks on top of the LEO route rather than replacing it. For a team of five over two days, that's €2,043 back. Subject to eligibility and approval.",
  },
  {
    question: "Can schools or community groups get these grants?",
    answer:
      "No. The LEO vouchers are for businesses with paid employees — schools aren't eligible, and neither are community groups or charities. Community and digital inclusion work is funded differently: through programmes such as LEADER, PEACEPLUS, local development companies, library services, ETBs and local authority initiatives. If you're running a funded programme, we deliver into it and provide the attendance and outcomes reporting your funder asks for. Schools usually fund workshops from subject or digital-learning budgets, parents' associations, or local sponsorship.",
  },
  {
    question: "What if I don't qualify, or don't want to wait for approval?",
    answer:
      "Then you get the same work at the quoted price, and we'll tell you that before you commit rather than after. It's worth knowing the other routes exist: Enterprise Ireland's AI and Digital Discovery funding covers up to 80% of project cost, capped at a €5,000 grant, for EI clients; the EI Mentor Grant covers up to 10 mentoring sessions to a total of €1,750; InterTradeIreland runs fully funded all-island SME programmes; and the AIM Centre in Sligo runs a six-week hybrid AI Accelerator at 80% funding through De Minimis. None of these are ours to approve, and all are subject to eligibility and approval — but if one fits, we'll point you at it.",
    showFundingLink: true,
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
      "AI Fusion is based in County Donegal, Ireland, and we serve clients across the country and internationally through our online training programs.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can: Book a 15-minute call through our contact page; Arrange an on-site consultation. From there, we'll create a tailored AI Action Plan specific to your business.",
  },
]

export default function FAQPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  const allFAQs = [...generalFAQs, ...individualTrainingFAQs, ...fundingFAQs, ...businessServicesFAQs]

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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Training in Donegal &amp; Derry</h2>
          <div className="space-y-6">
            {generalFAQs.map((faq, index) => (
              <Card key={index} className="bg-navy-900/50 border-navy-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Funding &amp; Grants</h2>
          <div className="space-y-6">
            {fundingFAQs.map((faq, index) => (
              <Card key={index} className="bg-navy-900/50 border-navy-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  {faq.showFundingLink && (
                    <Link
                      href="/ai-grants-donegal"
                      className="mt-3 inline-block font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {"See the funding routes →"}
                    </Link>
                  )}
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
              <div className="flex justify-center">
                <button
                  onClick={() => setIsContactDialogOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Book a 15-minute call
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
