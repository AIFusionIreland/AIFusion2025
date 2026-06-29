"use client"

import { useState, useEffect } from "react"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { GraduationCap, CheckCircle, MapPin, Calendar, Users, Laptop, Building2 } from "lucide-react"

export default function AiTrainingDonegalPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20" />
          <div className="container px-4 md:px-6 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <GraduationCap className="w-12 h-12 text-purple-400" />
              </div>
              <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Donegal · Derry · Northwest Ireland</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-balance">
                AI Training Workshops in Donegal & Northwest Ireland
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium text-pretty max-w-3xl">
                Practical, jargon-free AI training that helps your team work smarter — delivered online and in-person
                across Donegal, Derry and the Northwest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => setIsContactDialogOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book AI Training
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro / Local Focus */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                AI Training Built for Local Businesses
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                AI Fusion is based in County Donegal and works with retail, hospitality, trades, and family-run
                businesses throughout Donegal, Derry and Northwest Ireland. Our workshops are designed for non-technical
                teams — no coding, no jargon, just practical AI skills your staff can use the very next day.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  What Your Team Will Learn
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                  Every workshop is tailored to your business and the tools your team uses every day. We focus on real
                  scenarios, not theory.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Using AI assistants like ChatGPT for everyday business tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Writing emails, content and social posts faster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Automating repetitive admin and scheduling work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Using AI safely, responsibly and within your budget</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ai-20training-202.jpeg"
                  alt="AI training workshop for a business team in Donegal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Options */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-purple-950 via-navy-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Flexible Training Options
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                Choose the format that suits your team and location best.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">In-Person</h3>
                <p className="text-gray-200">On-site workshops at your premises across Donegal, Derry and the Northwest</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Online</h3>
                <p className="text-gray-200">Live, interactive virtual sessions you can join from anywhere</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Group or 1:1</h3>
                <p className="text-gray-200">Team workshops or focused one-to-one coaching to suit your needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-10 h-10 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                AI Training Across the Northwest
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                We deliver AI training workshops throughout Donegal, Derry and the wider Northwest of Ireland — in towns
                and rural communities alike.
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
                Ready to Upskill Your Team with AI?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Book practical AI training for your business in Donegal, Derry or anywhere across Northwest Ireland.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  <Calendar className="w-5 h-5" />
                  Book AI Training
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
