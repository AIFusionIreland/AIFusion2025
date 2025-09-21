"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactDialog from "@/components/contact-dialog"
import SiteHeader from "@/components/site-header"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import BackToHomeButton from "@/components/back-to-home-button"
import { Calendar, Clock, MapPin, Users, ExternalLink, CheckCircle, Target, BookOpen, Lightbulb } from "lucide-react"

export default function UpcomingCoursesPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      {/* Fully Booked Banner */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 py-2 overflow-hidden relative z-30">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg mx-8">
            🔴 Fully Booked AI for Beginners session 🔴
          </span>
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg mx-8">
            🔴 Fully Booked AI for Beginners session 🔴
          </span>
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg mx-8">
            🔴 Fully Booked AI for Beginners session 🔴
          </span>
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg mx-8">
            🔴 Fully Booked AI for Beginners session 🔴
          </span>
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg mx-8">
            🔴 Fully Booked AI for Beginners session 🔴
          </span>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                AI for Small Business Owners, Creatives, Personal & Hobbyists
              </h1>

              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                AI for all - A 4-week practical course designed to equip everyone with practical AI skills, whether
                you're running a small business, pursuing creative projects, or exploring AI for personal use
              </p>

              <div className="mb-8">
                <Image
                  src="/images/ai-fusion-classroom-training.jpg"
                  alt="AI Fusion Training - Classroom Environment"
                  width={400}
                  height={300}
                  className="mx-auto rounded-2xl shadow-lg"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-green-200 text-green-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  Starting Sept 23rd
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-blue-200 text-blue-800">
                  <Clock className="w-5 h-5 mr-2" />4 Weeks
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-purple-200 text-purple-800">
                  <MapPin className="w-5 h-5 mr-2" />
                  Buncrana
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-orange-200 text-orange-800">
                  <Users className="w-5 h-5 mr-2" />
                  Limited Spots
                </Badge>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                onClick={() => setIsContactDialogOpen(true)}
              >
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Course Information */}
              <div>
                <Card className="mb-8 bg-navy-900 border-navy-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">Course Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-gray-300">The ii, St Orans road, Buncrana, F93 RT73</p>
                        <a
                          href="https://www.theii.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1"
                        >
                          www.theii.com <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold text-white">Start Date</p>
                        <p className="text-gray-300">23rd Sept from 7-8pm</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold text-white">Duration</p>
                        <p className="text-gray-300">Every Tuesday for 4 weeks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Learning Objectives */}
                <Card className="bg-navy-900 border-navy-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Understand AI concepts and terminology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">
                          Identify AI benefits for small businesses and creative projects
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Explore AI tools and technologies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">Develop a basic strategy for incorporating AI</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div>
                <Card className="mb-8 bg-navy-900 border-navy-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-white">Course Investment</CardTitle>
                  </CardHeader>
                  <div className="relative overflow-hidden bg-red-600 py-2 mb-4">
                    <div className="animate-scroll whitespace-nowrap">
                      <span className="text-white font-semibold text-lg mx-8">
                        🎉 Free Introductory Session 🎉 Free Introductory Session 🎉 Free Introductory Session 🎉 Free
                        Introductory Session 🎉 Free Introductory Session 🎉 Free Introductory Session 🎉
                      </span>
                    </div>
                  </div>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Early Bird */}
                      <div className="border-2 border-green-500 rounded-lg p-6 text-center bg-navy-800 relative">
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-600">
                          Limited Time
                        </Badge>
                        <h3 className="text-lg font-semibold mb-2 text-white">Early Bird</h3>
                        <div className="text-3xl font-bold text-green-400 mb-2">€99</div>
                        <p className="text-sm text-gray-300 mb-4">Book by Sept 16th</p>
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => setIsContactDialogOpen(true)}
                        >
                          Select Plan
                        </Button>
                      </div>

                      {/* Pay in Full */}
                      <div className="border-2 border-blue-500 rounded-lg p-6 text-center bg-navy-800">
                        <h3 className="text-lg font-semibold mb-2 text-white">Pay in Full</h3>
                        <div className="text-3xl font-bold text-blue-400 mb-2">€149</div>
                        <p className="text-sm text-gray-300 mb-4">Complete 4-week course</p>
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => setIsContactDialogOpen(true)}
                        >
                          Select Plan
                        </Button>
                      </div>

                      {/* Group Discount */}
                      <div className="border-2 border-purple-500 rounded-lg p-6 text-center relative bg-navy-800">
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
                          Best Value
                        </Badge>
                        <h3 className="text-lg font-semibold mb-2 text-white">Group Discount</h3>
                        <div className="text-3xl font-bold text-purple-400 mb-2">€119</div>
                        <p className="text-sm text-gray-300 mb-4">3+ employees</p>
                        <Button
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          onClick={() => setIsContactDialogOpen(true)}
                        >
                          Select Plan
                        </Button>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-navy-700">
                      <h4 className="font-semibold mb-2 text-center text-white">Payment Method</h4>
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center">
                          <div className="font-semibold">Revolut</div>
                          <div className="text-sm opacity-90">Secure Digital Payment</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 text-center mt-2">
                        Payment details will be provided upon enrollment confirmation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Description */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">About This Course</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-200 leading-relaxed text-lg text-center">
                This course is designed to equip local business owners and creative professionals with practical,
                vocational skills in artificial intelligence. Each session focuses on real-world applications that
                enhance productivity, innovation, and strategic decision-making. By the end of the program, participants
                will be able to confidently integrate AI tools into their work, making this training a valuable
                professional development opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Course Trainer */}
        <section className="py-24 bg-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Your Trainer</h2>
              <p className="text-xl text-gray-200">Expert guidance from experienced professionals</p>
            </div>

            <div className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
              <div className="text-center mb-8">
                <div className="mb-6">
                  <Image
                    src="/images/ai-fusion-trainer.png"
                    alt="AI Fusion Trainer"
                    width={120}
                    height={120}
                    className="mx-auto rounded-full shadow-lg border-4 border-gradient-to-r from-blue-600 to-purple-600"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Fusion Team</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My experience in AI brings together years of practical experience in Artificial intelligence, business
                  consulting, IT and project management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24+</div>
                  <div className="text-gray-200 font-semibold">Years IT Consulting</div>
                  <div className="text-gray-400 text-sm mt-1">Enterprise solutions & project management</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
                  <div className="text-gray-200 font-semibold">Years AI Experience</div>
                  <div className="text-gray-400 text-sm mt-1">Practical AI implementation & training</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes This Course Special */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Why Choose This Course?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Designed specifically for the local community with practical, hands-on learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-navy-900 p-6 rounded-2xl shadow-lg border border-navy-800 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-200 rounded-xl mb-4 mx-auto">
                  <Target className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Practical Focus</h3>
                <p className="text-gray-300 text-sm">Real-world applications you can use immediately</p>
              </div>

              <div className="bg-navy-900 p-6 rounded-2xl shadow-lg border border-navy-800 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-xl mb-4 mx-auto">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Small Groups</h3>
                <p className="text-gray-300 text-sm">Limited spots ensure personalized attention</p>
              </div>

              <div className="bg-navy-900 p-6 rounded-2xl shadow-lg border border-navy-800 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-xl mb-4 mx-auto">
                  <BookOpen className="h-6 w-6 text-purple-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Beginner Friendly</h3>
                <p className="text-gray-300 text-sm">No technical background required</p>
              </div>

              <div className="bg-navy-900 p-6 rounded-2xl shadow-lg border border-navy-800 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-200 rounded-xl mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-orange-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Local Focus</h3>
                <p className="text-gray-300 text-sm">Tailored for Donegal businesses and creatives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Online Taster Course */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Can't Make It In Person?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Try our online AI beginners taster course from the comfort of your home
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-navy-800 to-purple-900 border-purple-600 border-2">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Badge className="mb-4 bg-purple-600 text-white px-4 py-2 text-lg">Online Course</Badge>
                    <h3 className="text-3xl font-bold text-white mb-4">AI Beginners Taster Course</h3>
                    <p className="text-xl text-gray-200 mb-6">
                      Get a taste of AI in just 30 minutes - perfect for busy schedules
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Course Details */}
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-purple-400 mr-3" />
                        <div>
                          <p className="font-semibold text-white">Date</p>
                          <p className="text-gray-200">Wednesday, 24th September</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-400 mr-3" />
                        <div>
                          <p className="font-semibold text-white">Time</p>
                          <p className="text-gray-200">7:00 PM (30 minutes)</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                        <div>
                          <p className="font-semibold text-white">Location</p>
                          <p className="text-gray-200">Online via Zoom</p>
                        </div>
                      </div>
                    </div>

                    {/* What You'll Learn */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">What You'll Learn</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">AI basics and key concepts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">Quick ChatGPT demonstration</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">Simple AI tools for daily use</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">Q&A session</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="bg-navy-900 rounded-2xl p-6 border border-purple-500 inline-block">
                      <div className="mb-2">
                        <div className="text-4xl font-bold text-gray-500 line-through mb-1">€30</div>
                        <div className="text-4xl font-bold text-green-400">FREE</div>
                      </div>
                      <p className="text-gray-200">30-minute online session</p>
                      <p className="text-sm text-gray-400 mt-2">Perfect introduction to AI</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full"
                      onClick={() => setIsContactDialogOpen(true)}
                    >
                      Reserve Your Spot
                    </Button>
                    <p className="text-sm text-gray-400 mt-3">Zoom link will be sent after payment confirmation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <AIFusionTextLogo className="h-12" showText={true} />
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex justify-center">
            <BackToHomeButton variant="ghost" size="sm" className="text-gray-300 hover:text-white" />
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
    </div>
  )
}
