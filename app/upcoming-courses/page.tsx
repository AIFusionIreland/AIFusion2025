"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactDialog from "@/components/contact-dialog"
import SiteHeader from "@/components/site-header"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import BackToHomeButton from "@/components/back-to-home-button"
import { Users, CheckCircle, Target, BookOpen, Lightbulb, Calendar } from "lucide-react"

export default function UpcomingCoursesPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                AI for Work, Business & Personal Growth
              </h1>

              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                AI for all - Find a course or several courses suited to your AI learning needs, whether your working,
                running a small business, pursuing creative projects, or exploring AI for personal use.
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
            </div>
          </div>
        </section>

        {/* AI For Beginners Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">AI For Beginners</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits List */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Understand key AI concepts without requiring advanced math or coding.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Gain skills that are increasingly valued across industries.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Learn to apply AI tools in personal projects, hobbies, or work.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Replace fear or confusion with practical understanding and confidence.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">1 Hour Training</h3>

                    {/* Date Information */}
                    <div className="flex items-center justify-center mb-4 text-purple-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-lg font-semibold">Monday 6th October at 7pm</span>
                    </div>

                    <div className="text-5xl font-bold text-blue-400 mb-4">€30</div>
                    <p className="text-gray-300 text-lg mb-6">AI training session</p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full w-full mb-6"
                      onClick={() => setIsContactDialogOpen(true)}
                    >
                      Book Training
                    </Button>

                    {/* Training Session Image */}
                    <div className="mt-6">
                      <Image
                        src="/images/ai-training-session.jpg"
                        alt="AI Training Session in Progress - Professional Learning Environment"
                        width={300}
                        height={200}
                        className="mx-auto rounded-lg shadow-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Content Creators Section */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                AI Content Creators Course
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits List */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Quickly turn ideas into polished logos, flyers, videos, and avatars.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Reduce reliance on expensive software or external designers.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Learn to create engaging content across multiple formats.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Produce professional-quality branding and content to stand out on social media or business
                          platforms.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">1 Hour Training</h3>

                    {/* Date Information */}
                    <div className="flex items-center justify-center mb-4 text-purple-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-lg font-semibold">Tuesday 7th October at 7pm</span>
                    </div>

                    <div className="text-5xl font-bold text-blue-400 mb-4">€30</div>
                    <p className="text-gray-300 text-lg mb-6">AI training session</p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full w-full"
                      onClick={() => setIsContactDialogOpen(true)}
                    >
                      Book Training
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Vibe Coding - Build Your Website Course Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                AI Vibe Coding - Build Your Website Course
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits List */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Learn to build a website without needing advanced coding skills.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Create a personalized, functional website during the course.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Gain the ability to showcase businesses, portfolios, or personal brands online.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Use AI tools to experiment with layouts, color palettes, and designs effortlessly.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">1 Hour Training</h3>

                    {/* Date Information */}
                    <div className="flex items-center justify-center mb-4 text-purple-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-lg font-semibold">Tuesday 14th October at 7pm</span>
                    </div>

                    <div className="text-5xl font-bold text-blue-400 mb-4">€30</div>
                    <p className="text-gray-300 text-lg mb-6">AI training session</p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full w-full"
                      onClick={() => setIsContactDialogOpen(true)}
                    >
                      Book Training
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Vibe Coding - Build Your Own App Section */}
        <section className="py-24 bg-navy-950 relative overflow-hidden">
          {/* Diagonal Coming Soon Banner */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute bg-red-600 text-white font-bold text-lg py-3 px-12 shadow-lg transform -rotate-12 origin-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(-12deg)",
                  minWidth: "300px",
                  textAlign: "center",
                }}
              >
                COMING IN NOVEMBER
              </div>
            </div>
          </div>

          <div className="container px-4 md:px-6 max-w-6xl relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                AI Vibe Coding - Build Your Own App Course
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits List */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Learn to build apps without needing advanced programming knowledge.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Create real, usable apps for personal projects, businesses, or communities.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Use AI to speed up coding, design, and feature integration.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-lg">
                          Gain in-demand app-building skills to stand out or launch your own digital product.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing */}
              <div>
                <Card className="bg-navy-900 border-navy-800">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">1 Hour Training</h3>
                    <div className="text-5xl font-bold text-blue-400 mb-4">€30</div>
                    <p className="text-gray-300 text-lg mb-6">AI training session</p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full w-full"
                      onClick={() => setIsContactDialogOpen(true)}
                    >
                      Book Training
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Trainer */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Your Trainer</h2>
              <p className="text-xl text-gray-200">Expert guidance from experienced professionals</p>
            </div>

            <div className="bg-navy-800 rounded-2xl p-8 border border-navy-700 mb-12">
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

            {/* Training Image */}
            <div className="text-center">
              <Image
                src="/images/ai-fusion-beginners-training.jpg"
                alt="AI Fusion Beginners Training Session - Welcome to AI Fusion presentation"
                width={400}
                height={267}
                className="mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* What Makes This Course Special */}
        <section className="py-24 bg-navy-900">
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
              <div className="bg-navy-800 p-6 rounded-2xl shadow-lg border border-navy-700 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-200 rounded-xl mb-4 mx-auto">
                  <Target className="h-6 w-6 text-green-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Practical Focus</h3>
                <p className="text-gray-300 text-sm">Real-world applications you can use immediately</p>
              </div>

              <div className="bg-navy-800 p-6 rounded-2xl shadow-lg border border-navy-700 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-xl mb-4 mx-auto">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Small Groups</h3>
                <p className="text-gray-300 text-sm">Limited spots ensure personalized attention</p>
              </div>

              <div className="bg-navy-800 p-6 rounded-2xl shadow-lg border border-navy-700 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-xl mb-4 mx-auto">
                  <BookOpen className="h-6 w-6 text-purple-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Beginner Friendly</h3>
                <p className="text-gray-300 text-sm">No technical background required</p>
              </div>

              <div className="bg-navy-800 p-6 rounded-2xl shadow-lg border border-navy-700 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-200 rounded-xl mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-orange-800" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Local Focus</h3>
                <p className="text-gray-300 text-sm">Tailored for Donegal businesses and creatives</p>
              </div>
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
