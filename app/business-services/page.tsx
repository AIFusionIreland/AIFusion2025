"use client"

import SiteHeader from "@/components/site-header"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Search,
  Shield,
  Lightbulb,
  Clock,
} from "lucide-react"
import ContactDialog from "@/components/contact-dialog"

export default function BusinessServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-navy-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Business Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI solutions tailored to help your business thrive in the digital age. From strategy to
              implementation, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions designed to meet your specific business needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Discovery Consultation */}
            <Card className="bg-navy-900 border-navy-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Discovery Consultation</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      Strategic Planning
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  We begin every project with a Discovery Consultation to understand your operations, pain points, and
                  goals. From there, we help you prioritize your business needs and identify areas where AI can deliver
                  the fastest, most measurable impact.
                </CardDescription>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Operations analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pain point identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Goal setting and prioritization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AI opportunity mapping
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Tool Selection */}
            <Card className="bg-navy-900 border-navy-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">AI Tool Selection & Recommendation</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      Technology Advisory
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  We analyze your workflows and recommend specific AI tools suited to your business size, systems, and
                  staff skill levels. Our goal is to find low-cost, high-value tools that save you time and are simple
                  to implement.
                </CardDescription>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Workflow analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tool compatibility assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost-benefit analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Implementation roadmap
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Team Training */}
            <Card className="bg-navy-900 border-navy-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Hands-On AI Training for Teams</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      Team Development
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  We deliver both in-person and online AI training, tailored to your industry and your staff's skill
                  levels. Training is designed to build confidence and show your team how AI can make their jobs easier.
                </CardDescription>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Industry-specific training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Skill-level customization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    In-person and online options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Confidence building approach
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SEO Services */}
            <Card className="bg-navy-900 border-navy-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">SEO & Online Visibility</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      Digital Marketing
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  We provide SEO audits and ongoing optimization services to improve your business's online
                  discoverability. Combined with AI-driven insights, we help your business attract more of the right
                  customers online.
                </CardDescription>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Keyword and content analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical SEO health check
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    On-page optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local SEO improvements
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Pilot Program Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">6-Week AI Business Pilot Program</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive program to implement AI in your business with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-white">Discovery & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Identifying the best opportunities for your business through comprehensive analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-white">Tool Selection & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Choosing the right AI platforms and training your team to use them effectively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-white">Implementation & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Deploying tools into your daily workflows with rigorous testing and refinement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <CardTitle className="text-white">Performance Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Tracking outcomes and refining results with a custom AI toolkit and clear next steps.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compliance & Data Protection</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We align all our services with the EU AI Act and GDPR requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-navy-900 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Compliant Tools Only</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Only compliant and transparent tools are recommended to ensure your business meets all regulatory
                  requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-900 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI System Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  We assess and classify any AI systems you use to ensure they meet industry standards and legal
                  requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-900 border-navy-700">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Ethical Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  We ensure customer data is processed ethically and securely, with full transparency about how AI tools
                  work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expected Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most businesses see measurable benefits within 4–6 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-navy-800 border-navy-700 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">3-6 Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Saved weekly in admin tasks through intelligent automation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-navy-700 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Faster Response</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Quicker quote responses and project turnaround times
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-navy-700 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Improved Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Better consistency in communications and marketing efforts
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with a wide range of sectors, tailoring AI solutions to fit your workflow, compliance needs, and
              customer base.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Retail",
              "Trades",
              "Professional Services",
              "Healthcare",
              "Hospitality",
              "Education",
              "Manufacturing",
              "Real Estate",
            ].map((industry) => (
              <Card key={industry} className="bg-navy-900 border-navy-700 hover:border-purple-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <p className="text-white font-semibold">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free Discovery Call to discuss how AI can help your business grow.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              onClick={() => setIsContactOpen(true)}
            >
              Contact us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 AI Fusion. All rights reserved. | Inishowen, Donegal, Ireland</p>
        </div>
      </section>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  )
}
