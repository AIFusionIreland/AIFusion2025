"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { Briefcase, CheckCircle, MapPin, Calendar, Users, Laptop, Building2, ArrowRight } from "lucide-react"

export default function WorkplaceAiTrainingPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20" />
          <div className="container px-4 md:px-6 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-6">
              <Briefcase className="w-12 h-12 text-purple-400" />
              <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">For employers & teams · Donegal · Derry</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-balance">
                Workplace & Staff AI Training in Donegal & Derry
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium text-pretty max-w-3xl">
                Give your employees the practical AI skills they need to work faster and smarter — delivered on-site at
                your premises or online, and built around the way your business actually works.
              </p>
              <Button
                onClick={() => setIsContactDialogOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Staff Training
              </Button>
            </div>
          </div>
        </section>

        {/* Intro / Local Focus */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                AI Training Built for Your Workplace
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                AI Fusion delivers hands-on staff training for retail shops, hospitality teams, tradespeople, offices
                and family-run businesses right across Donegal, Derry and the Northwest. Having delivered employer-focused
                sessions alongside enterprise and skills programmes in the region, we know how to bring a whole team up
                to speed — from staff who have never used an AI tool to managers who want to roll it out across the
                business.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                Every session is tailored to your sector and the tools your people use every day. No coding, no jargon
                — just clear, practical skills your staff can put to work the very next morning.
              </p>
            </div>
          </div>
        </section>

        {/* What teams learn */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  What Your Employees Will Learn
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Using AI assistants like ChatGPT and Copilot for daily tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Writing emails, quotes, content and social posts in minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Cutting repetitive admin, scheduling and paperwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Using AI safely, securely and within GDPR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Building simple workflows the whole team can follow</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ai-fusion-team.jpg"
                  alt="Employees taking part in a workplace AI training session in Donegal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery options */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-purple-950 via-navy-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Training That Fits Around Your Business
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                We work around shift patterns, quiet periods and busy seasons so your team gets trained without
                disrupting the day-to-day.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">On-Site</h3>
                <p className="text-gray-200">We come to your premises anywhere across Donegal, Derry and the Northwest</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Online</h3>
                <p className="text-gray-200">Live, interactive sessions your team can join from any location</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Team or 1:1</h3>
                <p className="text-gray-200">Whole-team workshops or focused coaching for owners and managers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultancy (short, secondary) */}
        <section className="py-16 md:py-20 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="bg-gradient-to-br from-navy-900/60 to-purple-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-10 text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                Want a Tailored AI Strategy Alongside Training?
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
                For businesses that want to go further, we also offer AI consultancy — helping you choose the right
                tools, automate the right processes and build a practical AI roadmap that fits your goals and budget.
              </p>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center gap-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold"
              >
                <Link href="/business-services">
                  Explore AI Consultancy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-gradient-to-r from-navy-900 via-purple-900 to-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Train Your Team?</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Book practical workplace AI training for your staff in Donegal, Derry or anywhere across the Northwest.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8"
                onClick={() => setIsContactDialogOpen(true)}
              >
                <Calendar className="w-5 h-5" />
                Book Staff Training
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
