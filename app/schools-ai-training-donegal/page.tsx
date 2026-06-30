"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { GraduationCap, CheckCircle, MapPin, Calendar, BookOpen, ShieldCheck, Lightbulb, ArrowRight } from "lucide-react"

export default function SchoolsAiTrainingPage() {
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
              <GraduationCap className="w-12 h-12 text-purple-400" />
              <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Schools & youth groups · Donegal · Derry</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-balance">
                AI Training for Schools & Young People in Donegal & Derry
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium text-pretty max-w-3xl">
                Engaging, age-appropriate workshops that help students and teachers understand AI — how to use it
                safely, creatively and responsibly for learning and the future of work.
              </p>
              <Button
                onClick={() => setIsContactDialogOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book a School Workshop
              </Button>
            </div>
          </div>
        </section>

        {/* Intro / Local Focus */}
        <section className="py-20 md:py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Preparing Local Young People for an AI World
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                AI Fusion delivers hands-on AI and digital literacy workshops for primary and post-primary schools,
                Youthreach centres and youth groups across Donegal and Derry. Building on community education work in the
                Northwest — including projects with groups such as Newtownstewart 2000 — we make AI approachable and
                exciting for young people, while keeping safety and responsible use at the centre of every session.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                Workshops are tailored to the age group and curriculum, and can be delivered in your classroom, computer
                room or community space anywhere across the region.
              </p>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="py-20 md:py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                What We Cover
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-pretty">
                Sessions that balance curiosity and creativity with safety and critical thinking.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Understanding AI</h3>
                <p className="text-gray-200">What AI is, how it works and where students already meet it every day</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safe & Responsible Use</h3>
                <p className="text-gray-200">Online safety, honesty in schoolwork, bias and thinking critically</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Creative & Future Skills</h3>
                <p className="text-gray-200">Using AI tools for projects, learning and the careers of tomorrow</p>
              </div>
            </div>
          </div>
        </section>

        {/* For students and teachers */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-purple-950 via-navy-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                  For Students and Teachers Alike
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Student workshops matched to age and ability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Teacher and staff CPD sessions on using AI in the classroom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Guidance on AI policies and academic honesty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">Sessions for youth groups, Youthreach and after-school programmes</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ai-education.jpg"
                  alt="Students taking part in an AI literacy workshop in a Donegal school"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Consultancy / cross-link (short, secondary) */}
        <section className="py-16 md:py-20 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                Training for Workplaces and Communities Too
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
                Beyond schools, AI Fusion delivers staff training for businesses, digital inclusion training for
                community groups, and tailored AI consultancy across Donegal and Derry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center gap-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold"
                >
                  <Link href="/workplace-ai-training-donegal">
                    Workplace Training
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center gap-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold"
                >
                  <Link href="/community-ai-training-donegal">
                    Community Training
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bring AI Learning to Your School</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Book an engaging, age-appropriate AI workshop for your students or staff in Donegal, Derry or across the
                Northwest.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8"
                onClick={() => setIsContactDialogOpen(true)}
              >
                <Calendar className="w-5 h-5" />
                Book a School Workshop
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </div>
  )
}
