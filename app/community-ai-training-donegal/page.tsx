"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { HeartHandshake, CheckCircle, MapPin, Calendar, Users, Accessibility, Globe, ArrowRight } from "lucide-react"

export default function CommunityAiTrainingPage() {
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
              <HeartHandshake className="w-12 h-12 text-purple-400" />
              <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">
                  Community groups & funded programmes · Donegal · Derry
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-balance">
                Community & Digital Inclusion AI Training in Donegal & Derry
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium text-pretty max-w-3xl">
                Accessible, friendly AI and digital skills training for community groups, charities and
                government-funded digital inclusion programmes — designed for real people, at a pace that suits them.
              </p>
              <Button
                onClick={() => setIsContactDialogOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Enquire About Funded Training
              </Button>
            </div>
          </div>
        </section>

        {/* Intro / Local Focus */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Helping Everyone in the Community Get Confident with AI
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                AI Fusion partners with community organisations, local development companies, charities, libraries and
                local authorities across Donegal and Derry to deliver digital inclusion training that genuinely meets
                people where they are. Whether you are running a government-funded digital skills programme, a community
                resource centre or a grant-supported project, we provide patient, plain-English sessions that build real
                confidence.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                We have experience designing accessible sessions for older adults getting online for the first time, for
                New Irish and Ukrainian community members who may be learning in a second language, and for groups
                supporting people at risk of digital exclusion. Sessions can be delivered in your own community venue
                anywhere across the Northwest.
              </p>
            </div>
          </div>
        </section>

        {/* Who we support */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Who We Support
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                Inclusive training tailored to the people your programme serves.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Accessibility className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Older Adults</h3>
                <p className="text-gray-200">
                  Patient, step-by-step sessions for people getting online and using AI for the first time
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">New Irish & Ukrainian Communities</h3>
                <p className="text-gray-200">
                  Welcoming sessions that use AI tools to support language, everyday tasks and settling in
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community Groups & Charities</h3>
                <p className="text-gray-200">
                  Practical AI skills for staff, volunteers and the people your organisation supports
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's covered */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-purple-950 via-navy-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  src="/images/svnp-digital-skills-beginners-eglinton.jpg"
                  alt="Digital Skills for Beginners community AI training session at Eglinton Community Centre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  What Sessions Cover
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Getting started with everyday AI tools, safely and confidently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Using AI to help with letters, forms, translation and information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Staying safe online — scams, privacy and trusted sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Sessions adapted for accessibility and different language levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Reporting and outcomes to support funded-programme requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Funding note */}
        <section className="py-16 md:py-20 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="bg-gradient-to-br from-navy-900/60 to-purple-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-10 text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                Delivering a Funded Digital Inclusion Programme?
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
                We work with local authorities, development companies and grant-funded projects to design training that
                meets programme objectives and reporting needs. Get in touch to discuss scope, group sizes and outcomes
                for your funding application or live programme.
              </p>
              <Button
                onClick={() => setIsContactDialogOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold"
              >
                <Calendar className="w-4 h-4" />
                Discuss a Funded Programme
              </Button>
            </div>
          </div>
        </section>

        {/* Consultancy (short, secondary) */}
        <section className="py-16 md:py-20 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                Looking for Business AI Training or Strategy?
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
                If you are an employer rather than a community group, we also offer workplace staff training and tailored
                AI consultancy for businesses across Donegal and Derry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center gap-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold"
                >
                  <Link href="/workplace-ai-training-donegal">
                    Workplace Staff Training
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center gap-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold"
                >
                  <Link href="/business-services">
                    AI Consultancy
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-gradient-to-r from-navy-900 via-purple-900 to-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bring Digital Confidence to Your Community
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Talk to us about accessible AI and digital skills training for your group or programme in Donegal, Derry
                or across the Northwest.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8"
                onClick={() => setIsContactDialogOpen(true)}
              >
                <Calendar className="w-5 h-5" />
                Enquire About Funded Training
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
