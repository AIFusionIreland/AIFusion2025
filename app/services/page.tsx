"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Code, Smartphone, Users, Lightbulb, Target, Zap, Rocket, ArrowRight } from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-navy-800 bg-navy-975/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <AIFusionTextLogo className="h-12" showText={true} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/#locafy"
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Locafy
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
              onClick={(e) => {
                e.preventDefault()
                // Navigate to home page first, then scroll to contact
                window.location.href = "/#contact"
              }}
            >
              Contact
            </Link>
          </nav>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-4 border-navy-700 text-gray-200 hover:text-white hover:bg-navy-800"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white">Our AI Services</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to empower your business, enhance your skills, and drive innovation.
                From education to implementation, we're here to guide your AI journey.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Education */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-2xl mb-6">
                  <BookOpen className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI Education & Training</h3>
                <p className="text-gray-200 mb-6">
                  Comprehensive training programs designed for businesses, schools, and entrepreneurs to understand and
                  leverage AI technologies effectively.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Hands-on AI workshops and seminars</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Customized training for different skill levels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">AI tools and platforms training</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Social media AI optimization</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
              </div>

              {/* AI Implementation */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-2xl mb-6">
                  <Code className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI Implementation</h3>
                <p className="text-gray-200 mb-6">
                  Expert guidance and support to integrate AI solutions into your existing business processes and
                  systems for maximum efficiency.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">AI strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Process automation solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">AI tool integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Performance monitoring & optimization</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started
                </Button>
              </div>

              {/* App Development */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-lg border border-navy-800 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-200 rounded-2xl mb-6">
                  <Smartphone className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">App Development</h3>
                <p className="text-gray-200 mb-6">
                  Custom application development services to help you scale your business with innovative digital
                  solutions powered by AI.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">AI-powered mobile applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Web application development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">APP Prototyping and Wireframes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-200">Ongoing support & maintenance</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">
                Additional AI Services
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Specialized services to meet your unique AI needs and business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AI Consulting */}
              <div className="bg-navy-900 p-6 rounded-xl shadow-sm border border-navy-800 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-xl mb-4">
                  <Users className="h-6 w-6 text-purple-800" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">AI Consulting</h4>
                <p className="text-gray-200 text-sm">
                  Strategic AI consulting to help you identify opportunities and develop roadmaps for AI adoption.
                </p>
              </div>

              {/* AI Strategy */}
              <div className="bg-navy-900 p-6 rounded-xl shadow-sm border border-navy-800 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-xl mb-4">
                  <Target className="h-6 w-6 text-purple-800" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">AI Strategy</h4>
                <p className="text-gray-200 text-sm">
                  Comprehensive AI strategy development aligned with your business goals and market position.
                </p>
              </div>

              {/* AI Automation */}
              <div className="bg-navy-900 p-6 rounded-xl shadow-sm border border-navy-800 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-xl mb-4">
                  <Zap className="h-6 w-6 text-purple-800" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">AI Automation</h4>
                <p className="text-gray-200 text-sm">
                  Streamline your workflows with intelligent automation solutions that save time and reduce costs.
                </p>
              </div>

              {/* AI Innovation */}
              <div className="bg-navy-900 p-6 rounded-xl shadow-sm border border-navy-800 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-200 rounded-xl mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-800" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">AI Innovation</h4>
                <p className="text-gray-200 text-sm">
                  Explore cutting-edge AI technologies and innovative solutions for competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Our Service Process</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                A structured approach to ensure successful AI implementation and maximum value for your investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Discovery</h4>
                <p className="text-gray-200 text-sm">
                  We analyze your current processes, identify opportunities, and understand your specific needs and
                  goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Strategy</h4>
                <p className="text-gray-200 text-sm">
                  We develop a customized AI strategy and roadmap tailored to your business objectives and resources.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Implementation</h4>
                <p className="text-gray-200 text-sm">
                  We execute the plan with hands-on training, tool integration, and continuous support throughout the
                  process.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Optimization</h4>
                <p className="text-gray-200 text-sm">
                  We monitor performance, provide ongoing support, and continuously optimize your AI solutions for
                  better results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose AI Fusion Section */}
        <section className="py-24 bg-gradient-to-br from-navy-600 to-purple-700 text-white">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Why Choose AI Fusion?</h2>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                We're committed to making AI accessible, practical, and transformative for businesses of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Practical Approach */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Practical Approach</h4>
                <p className="text-gray-100">
                  We focus on real-world applications and measurable results that directly impact your business success.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Ongoing Support</h4>
                <p className="text-gray-100">
                  We provide continuous support and guidance to ensure your AI initiatives deliver lasting value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="rounded-full px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white text-lg">
                  <Link href="https://stan.store/AIFusion" target="_blank" rel="noopener noreferrer">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-navy-700 text-gray-200 hover:text-white hover:bg-navy-800"
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <AIFusionTextLogo className="h-12" showText={true} />
          </div>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
