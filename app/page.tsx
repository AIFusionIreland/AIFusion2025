"use client"

import type React from "react"
import AIFusionLogo from "@/components/ai-fusion-logo"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import PricingDialog from "@/components/pricing-dialog"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  HeartHandshake,
} from "lucide-react"

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
                  AI Training for Businesses, Schools & Community Groups in Donegal & Derry
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-medium text-pretty">
                  Practical, jargon-free AI and digital skills training — built around the people in the room, not
                  technical overwhelm.
                </p>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto text-pretty">
                  AI Fusion works with family-run businesses wanting their staff trained, local authorities and
                  government bodies funding digital inclusion programmes, community organisations supporting Ukrainian
                  residents and older people, and schools across Donegal and Derry. From AI digital skills workshops for
                  community groups to staff training for SMEs, we focus on real, practical results.
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
                AI for Small Business Owners in Donegal & Northwest Ireland
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                AI Fusion works with retail, hospitality, trades, and family-run businesses across Donegal, Derry and
                Northwest Ireland. We understand real-world pressures and deliver affordable, practical AI solutions
                tailored to local SMEs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/resturant-20and-20ai.png"
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

        {/* AI Training Workshops - moved higher for local booking focus */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-10 h-10 text-purple-400" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  AI Training Workshops in Donegal & Northwest Ireland
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                  Practical, jargon-free AI training workshops for non-technical teams. Available online and in-person
                  across Donegal, Derry and Northwest Ireland. We focus on tools your staff actually use day to day.
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
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ai-20training-202.jpeg"
                  alt="AI Training Workshops in Donegal and Northwest Ireland"
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

        {/* Training by Audience */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                AI Training for Every Group in the Northwest
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                We tailor AI and digital skills training to who&apos;s in the room — from busy workplaces to community
                groups and schools across Donegal and Derry.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/workplace-ai-training-donegal"
                className="group flex flex-col bg-gradient-to-br from-purple-900/40 to-navy-950/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-5">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Workplaces & Staff</h3>
                <p className="text-gray-200 leading-relaxed flex-1">
                  Hands-on AI training for employees and family-run businesses, delivered on-site or online.
                </p>
                <span className="inline-flex items-center gap-2 text-purple-300 font-semibold mt-5 group-hover:gap-3 transition-all">
                  Staff Training
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/community-ai-training-donegal"
                className="group flex flex-col bg-gradient-to-br from-purple-900/40 to-navy-950/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-5">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community & Funded Programmes</h3>
                <p className="text-gray-200 leading-relaxed flex-1">
                  Digital inclusion training for community groups, older adults and New Irish &amp; Ukrainian
                  communities.
                </p>
                <span className="inline-flex items-center gap-2 text-purple-300 font-semibold mt-5 group-hover:gap-3 transition-all">
                  Community Training
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/schools-ai-training-donegal"
                className="group flex flex-col bg-gradient-to-br from-purple-900/40 to-navy-950/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 transition-all duration-300 hover:border-purple-400/60 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-5">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Schools & Young People</h3>
                <p className="text-gray-200 leading-relaxed flex-1">
                  Engaging, age-appropriate AI and digital literacy workshops for schools and youth groups.
                </p>
                <span className="inline-flex items-center gap-2 text-purple-300 font-semibold mt-5 group-hover:gap-3 transition-all">
                  Schools Training
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
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
                <h3 className="text-xl font-bold text-white mb-3">Based in Donegal</h3>
                <p className="text-gray-200">Local expertise for businesses across Northwest Ireland</p>
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

        {/* Areas Served Section */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-10 h-10 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Areas We Serve
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                AI Fusion is based in County Donegal and works with small businesses throughout Donegal, Derry and the
                wider Northwest of Ireland — both online and in-person. Whether you&apos;re in a town or a rural
                community, we bring practical AI support to your doorstep.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Letterkenny",
                "Donegal Town",
                "Buncrana",
                "Ballybofey",
                "Derry / Londonderry",
                "Inishowen",
                "Bundoran",
                "Carndonagh",
                "Lifford",
                "Dungloe",
                "Strabane",
                "Northwest Ireland",
              ].map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-3"
                >
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-200 text-sm md:text-base">{area}</span>
                </div>
              ))}
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
                Join businesses across Donegal, Derry and Northwest Ireland already saving time and growing with
                practical AI solutions
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
          <div className="container flex flex-col gap-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-4">
                <AIFusionTextLogo className="h-12" showText={true} />
                <address className="flex flex-col gap-2 text-sm text-gray-300 not-italic">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span>Based in Donegal, Ireland</span>
                  </div>
                  <a href="tel:+353876856131" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span>087 685 6131</span>
                  </a>
                  <a href="mailto:info@aifusion.ie" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span>info@aifusion.ie</span>
                  </a>
                </address>
              </div>
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
            <p className="text-sm text-gray-300 border-t border-navy-800 pt-6">
              © {new Date().getFullYear()} AI Fusion. All rights reserved.
            </p>
          </div>
        </footer>

      <PricingDialog open={isPricingOpen} onOpenChange={setIsPricingOpen} />
      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
