"use client"

import type React from "react"
import AIFusionLogo from "@/components/ai-fusion-logo"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PricingDialog from "@/components/pricing-dialog"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { Bot, Calendar, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const router = useRouter()
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isEnrollDialogOpen, setIsEnrollDialogOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsEnrollDialogOpen(false)
    setIsContactDialogOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section - Above the fold */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20"></div>

          <style jsx>{`
            @keyframes logoGlow {
              0% {
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(79, 70, 229, 0.3),
                  0 0 90px rgba(147, 51, 234, 0.2);
                transform: scale(1);
              }
              50% {
                box-shadow: 0 0 50px rgba(255, 255, 255, 0.6), 0 0 80px rgba(79, 70, 229, 0.5),
                  0 0 120px rgba(147, 51, 234, 0.3);
                transform: scale(1.02);
              }
              100% {
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(79, 70, 229, 0.3),
                  0 0 90px rgba(147, 51, 234, 0.2);
                transform: scale(1);
              }
            }

            @keyframes logoInnerGlow {
              0% {
                box-shadow: inset 0 0 30px rgba(79, 70, 229, 0.1), 0 0 20px rgba(255, 255, 255, 0.8),
                  0 0 40px rgba(79, 70, 229, 0.4);
              }
              50% {
                box-shadow: inset 0 0 50px rgba(79, 70, 229, 0.2), inset 0 0 70px rgba(147, 51, 234, 0.1),
                  0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(79, 70, 229, 0.6);
              }
              100% {
                box-shadow: inset 0 0 30px rgba(79, 70, 229, 0.1), 0 0 20px rgba(255, 255, 255, 0.8),
                  0 0 40px rgba(79, 70, 229, 0.4);
              }
            }

            .animate-logo-inner-glow {
              animation: logoInnerGlow 4s ease-in-out infinite;
            }

            @keyframes textSlideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-logo-glow {
              animation: logoGlow 3s ease-in-out infinite;
            }

            .animate-text-slide-up {
              animation: textSlideUp 1s ease-out;
            }
          `}</style>

          <div className="container px-4 md:px-6 max-w-6xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-2xl animate-logo-glow p-3">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm flex items-center justify-center shadow-inner animate-logo-inner-glow p-2">
                    <AIFusionLogo className="h-full w-full" circular={true} />
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-text-slide-up max-w-4xl" style={{ animationDelay: "0.5s" }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-balance">
                  AI Consultant for Small Businesses in Ireland
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-medium text-pretty">
                  Practical AI solutions that save time, reduce costs, and help your business grow — without technical
                  overwhelm.
                </p>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto text-pretty">
                  AI Fusion helps small and family-run businesses in Ireland use AI in simple, practical ways. From AI
                  automation for SMEs to AI chatbot support for small business websites, we focus on real business
                  results — not jargon.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsContactDialogOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Free 15-Minute AI Strategy Call
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                AI for Small Business Owners in Ireland
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                AI Fusion works with retail, hospitality, trades, and family-run businesses across Ireland. We
                understand real-world pressures and deliver affordable, practical AI solutions tailored to SMEs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/resturant-20and-2020ai.png"
                  alt="Restaurant using AI technology for customer service in Ireland"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hardware-20store.png"
                  alt="Irish hardware store business owner using AI tools"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Strategy Section */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  src="/images/chatbot-20for-20hardware-20store.png"
                  alt="AI Strategy for small businesses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  AI Strategy for Small Retail and Hospitality Businesses
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                  Our AI strategy process includes discovery, prioritization, roadmap, and implementation. We help you
                  avoid wasted spend and focus on high-impact use cases that deliver real results.
                </p>
                <div className="space-y-4">
                  <div className="bg-navy-900/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                    <h3 className="font-bold text-white mb-2">1. Discovery</h3>
                    <p className="text-gray-200">Understand your business challenges and opportunities</p>
                  </div>
                  <div className="bg-navy-900/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                    <h3 className="font-bold text-white mb-2">2. Prioritization</h3>
                    <p className="text-gray-200">Identify high-impact AI solutions for your business</p>
                  </div>
                  <div className="bg-navy-900/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                    <h3 className="font-bold text-white mb-2">3. Roadmap</h3>
                    <p className="text-gray-200">Create a practical implementation plan</p>
                  </div>
                  <div className="bg-navy-900/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                    <h3 className="font-bold text-white mb-2">4. Implementation</h3>
                    <p className="text-gray-200">Deploy AI tools and train your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  AI Automation for SMEs
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                  AI helps reduce admin, improve scheduling and rota management, speed up customer responses, simplify
                  invoicing, and improve stock and inventory workflows. Save time and focus on what matters most.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Reduce administrative tasks by 50% or more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Automate scheduling, rotas, and staff management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Streamline invoicing and payment processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Improve stock control and inventory management</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/woman-20relaxing-20while-20ai-20works.jpeg"
                  alt="Business owner relaxing while AI automation handles tasks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-gradient-to-br from-purple-950 via-navy-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-10 h-10 text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  AI Chatbot Support for Small Business Websites
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                  AI chatbots answer FAQs, capture leads, assist with bookings and scheduling, and reduce phone/email
                  workload. No coding required — simple setup and customization for your business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Answer customer questions 24/7 automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Capture leads and qualify potential customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Handle bookings and appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Reduce phone calls and email inquiries</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ai-20chatbot.jpeg"
                  alt="AI Chatbot Support for Small Business Websites"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-10 h-10 text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  AI Training Workshops for Business Teams
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                  Practical, jargon-free AI training workshops for non-technical teams. Available online and in-person
                  across Ireland. We focus on tools your staff actually use day to day.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Hands-on training with real business scenarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">No technical jargon — clear, practical instruction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Online and in-person options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Focused on tools teams use every day</span>
                  </li>
                </ul>
                <Button
                  onClick={() => handleNavigation("/upcoming-courses")}
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View Training Courses
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ai-20training-202.jpeg"
                  alt="AI Training Workshops for Business Teams"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="w-full max-w-sm mx-auto">
                <img
                  src="/images/ai-20training-20participant-20reviews.png"
                  alt="AI Training participant reviews"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Small Businesses Choose AI Fusion */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Why Small Businesses Choose AI Fusion
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Based in Ireland</h3>
                <p className="text-gray-200">Local expertise for Irish businesses</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Practical Outcomes</h3>
                <p className="text-gray-200">Focused on results, not theory</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Clear, Honest Advice</h3>
                <p className="text-gray-200">No tech overwhelm or jargon</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Full Support</h3>
                <p className="text-gray-200">Training, implementation, and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-r from-navy-900 via-purple-900 to-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Join Irish businesses already saving time and growing with practical AI solutions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 bg-transparent"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <AIFusionTextLogo className="h-12" showText={true} />
          </div>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => handleNavigation("/privacy")}
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavigation("/terms")}
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      <PricingDialog open={isPricingOpen} onOpenChange={setIsPricingOpen} />
      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
