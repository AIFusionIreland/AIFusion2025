"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Building2,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Lightbulb,
  Settings,
  AlertCircle,
} from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import { useState, useEffect } from "react"
import PricingDialog from "@/components/pricing-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Import the SiteHeader component
import SiteHeader from "@/components/site-header"
import BackToHomeButton from "@/components/back-to-home-button"

export default function BusinessPage() {
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)
  const [contactSubmitStatus, setContactSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactSubmitting(true)
    setContactSubmitStatus("idle")

    try {
      const subject = encodeURIComponent("Business Consulting Inquiry - Get Started")
      const body = encodeURIComponent(`
New Business Consulting Inquiry

Name: ${contactFormData.name}
Email: ${contactFormData.email}

Message:
${contactFormData.message}

---
This inquiry was submitted through the AI Fusion Business Consulting page.
      `)

      window.open(`mailto:info@aifusion.ie?subject=${subject}&body=${body}`, "_blank")

      setContactSubmitStatus("success")
      setContactFormData({ name: "", email: "", message: "" })

      // Close form after successful submission
      setTimeout(() => {
        setIsContactFormOpen(false)
        setContactSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      setContactSubmitStatus("error")
    } finally {
      setIsContactSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                AI Solutions for Business
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                Transform your business operations with our tailored AI consulting and implementation services.
              </p>
              <div className="mt-8">
                <BackToHomeButton
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white"
                  label="Return to Home page"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Comprehensive AI Solutions for Business
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl">
                From strategy to implementation, we provide end-to-end AI consulting services that transform how your
                business operates and competes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Implementation */}
              <div className="flex flex-col items-center space-y-6 bg-navy-900 p-8 rounded-2xl shadow-sm border border-navy-800">
                <div className="rounded-full bg-purple-200 p-4">
                  <Settings className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-medium text-white">AI Implementation</h3>
                <p className="text-center text-gray-200 leading-relaxed">
                  Expert guidance and support to integrate AI solutions into your existing business processes and
                  systems. We ensure smooth deployment and maximum ROI.
                </p>
                <div className="w-full space-y-3">
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Process automation and optimization</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Custom AI tool integration</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Staff training and support</span>
                  </div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden w-full">
                  <img
                    src="/images/ai-implementation.jpg"
                    alt="AI implementation in business"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* App Development */}
              <div className="flex flex-col items-center space-y-6 bg-navy-900 p-8 rounded-2xl shadow-sm border border-navy-800">
                <div className="rounded-full bg-purple-200 p-4">
                  <Building2 className="h-8 w-8 text-purple-800" />
                </div>
                <h3 className="text-2xl font-medium text-white">Custom App Development</h3>
                <p className="text-center text-gray-200 leading-relaxed">
                  Tailored application development services to help you scale your business with innovative digital
                  solutions powered by AI.
                </p>
                <div className="w-full space-y-3">
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>AI-powered mobile and web applications</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>APP Prototyping and Wireframes</span>
                  </div>
                </div>
                <div className="mt-6 rounded-xl overflow-hidden w-full">
                  <img
                    src="/images/app-development.jpg"
                    alt="Custom app development"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose AI Fusion */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Why Choose AI Fusion for Your Business?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl">
                We combine deep AI expertise with practical business knowledge to deliver solutions that actually work
                for your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 text-center">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Tailored Solutions</h3>
                <p className="text-gray-200">
                  Every business is unique. We create custom AI strategies that align with your specific goals,
                  industry, and operational requirements.
                </p>
              </div>

              <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 text-center">
                <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Proven Results</h3>
                <p className="text-gray-200">
                  Our clients see measurable improvements in efficiency, cost reduction, and revenue growth through
                  strategic AI implementation.
                </p>
              </div>

              <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 text-center">
                <div className="rounded-full bg-purple-100 p-4 w-16 h-16 mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Ongoing Support</h3>
                <p className="text-gray-200">
                  We don't just implement and leave. Our team provides continuous support, training, and optimization to
                  ensure long-term success.
                </p>
              </div>

              <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 text-center">
                <div className="rounded-full bg-yellow-100 p-4 w-16 h-16 mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Innovation Focus</h3>
                <p className="text-gray-200">
                  Stay ahead of the competition with cutting-edge AI technologies and innovative approaches to business
                  challenges.
                </p>
              </div>

              <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 text-center">
                <div className="rounded-full bg-red-100 p-4 w-16 h-16 mx-auto mb-6">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Fast Implementation</h3>
                <p className="text-gray-200">
                  Quick deployment timelines mean you start seeing benefits sooner. We prioritize efficiency without
                  compromising quality.
                </p>
              </div>

              <div className="bg-navy-900 p-8 rounded-2xl border border-navy-800 text-center">
                <div className="rounded-full bg-cyan-100 p-4 w-16 h-16 mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Data-Driven Approach</h3>
                <p className="text-gray-200">
                  All recommendations are backed by thorough analysis and data insights to ensure maximum impact and
                  ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Business Success Stories</h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                See how AI Fusion has helped businesses embrace AI technology
              </p>
            </div>

            <div className="flex justify-center">
              {/* Recovery Isle Success Story */}
              <div className="bg-navy-900 p-8 rounded-2xl shadow-sm border border-navy-800">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-2 text-white">Recovery_Isle</h3>
                  <p className="text-gray-300 font-medium">Sports Therapy and Massage Clinic</p>
                </div>

                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src="/images/recovery-isle-logo.png"
                    alt="Recovery Isle logo - Professional sports therapy and massage clinic branding representing health and wellness services"
                    className="w-full h-48 object-contain bg-white transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-gray-200 leading-relaxed">
                    "AI Fusion created a fully personalised app tailored to the specific needs of my clinic. Not only
                    does it include a user-friendly booking portal, but I can now also manage client notes, send
                    invoices, and handle other admin tasks—all from one space."
                  </p>

                  {/* Update the grid here */}
                  <div className="mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">60%</div>
                      <div className="text-sm text-gray-300">Time Saved on Admin Tasks</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <div className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Healthcare & Wellness Industry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Our Consulting Process</h2>
              <p className="text-xl text-gray-200 max-w-3xl">
                A structured approach to AI transformation that ensures success at every step
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-purple-600 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Discovery & Assessment</h3>
                <p className="text-gray-200">
                  We analyze your current processes, identify opportunities, and understand your business goals.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-blue-600 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Strategy Development</h3>
                <p className="text-gray-200">
                  Create a customized AI roadmap with clear milestones, timelines, and expected outcomes.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-green-600 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Implementation</h3>
                <p className="text-gray-200">
                  Deploy AI solutions with minimal disruption to your operations and comprehensive staff training.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-yellow-600 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Optimization & Support</h3>
                <p className="text-gray-200">
                  Monitor performance, make adjustments, and provide ongoing support for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </main>

      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="sm:max-w-[500px] bg-navy-900 border-navy-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-center mb-4 text-white">
              Get Started with AI Business Consulting
            </DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <Link href="/">
              <AIFusionTextLogo className="h-12" showText={true} />
            </Link>
          </div>
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

      {/* Pricing Dialog */}
      <PricingDialog isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </div>
  )
}

interface ValidationErrors {
  name?: string
  email?: string
  message?: string
}

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  // Real-time validation functions
  const validateName = (value: string): string | undefined => {
    if (!value.trim()) return "Name is required"
    if (value.trim().length < 2) return "Name must be at least 2 characters"
    if (value.trim().length > 50) return "Name must be less than 50 characters"
    if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return "Name can only contain letters, spaces, hyphens, and apostrophes"
    return undefined
  }

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value.trim())) return "Please enter a valid email address"
    if (value.length > 100) return "Email must be less than 100 characters"
    return undefined
  }

  const validateMessage = (value: string): string | undefined => {
    if (!value.trim()) return "Message is required"
    if (value.trim().length < 10) return "Message must be at least 10 characters"
    if (value.trim().length > 1000) return "Message must be less than 1000 characters"
    return undefined
  }

  // Handle field changes with real-time validation
  const handleNameChange = (value: string) => {
    setName(value)
    if (touched.name) {
      const error = validateName(value)
      setErrors((prev) => ({ ...prev, name: error }))
    }
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (touched.email) {
      const error = validateEmail(value)
      setErrors((prev) => ({ ...prev, email: error }))
    }
  }

  const handleMessageChange = (value: string) => {
    setMessage(value)
    if (touched.message) {
      const error = validateMessage(value)
      setErrors((prev) => ({ ...prev, message: error }))
    }
  }

  // Handle field blur events
  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))

    switch (field) {
      case "name":
        setErrors((prev) => ({ ...prev, name: validateName(name) }))
        break
      case "email":
        setErrors((prev) => ({ ...prev, email: validateEmail(email) }))
        break
      case "message":
        setErrors((prev) => ({ ...prev, message: validateMessage(message) }))
        break
    }
  }

  // Check if form is valid
  const isFormValid = () => {
    const nameError = validateName(name)
    const emailError = validateEmail(email)
    const messageError = validateMessage(message)

    return !nameError && !emailError && !messageError
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true })

    // Validate all fields
    const nameError = validateName(name)
    const emailError = validateEmail(email)
    const messageError = validateMessage(message)

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    })

    // If there are errors, don't submit
    if (nameError || emailError || messageError) {
      return
    }

    setIsSubmitting(true)

    // Create the mailto link with the form data
    const subject = `Business Consulting Inquiry from ${name.trim()}`
    const body = `Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}`
    const mailtoLink = `mailto:infi@aifusion.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open the user's email client
    window.location.href = mailtoLink

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      // Reset form
      setName("")
      setEmail("")
      setMessage("")
      setErrors({})
      setTouched({})
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }, 1000)
  }

  // Get input styling based on validation state
  const getInputStyling = (fieldName: string, hasError: boolean) => {
    const baseClasses =
      "flex h-12 w-full rounded-full border px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"

    if (hasError && touched[fieldName]) {
      return `${baseClasses} border-red-500 bg-navy-800 focus-visible:ring-red-400`
    } else if (
      !hasError &&
      touched[fieldName] &&
      (fieldName === "name" ? name : fieldName === "email" ? email : message)
    ) {
      return `${baseClasses} border-green-500 bg-navy-800 focus-visible:ring-green-400`
    } else {
      return `${baseClasses} border-navy-700 bg-navy-800 focus-visible:ring-purple-400`
    }
  }

  const getTextareaStyling = (hasError: boolean) => {
    const baseClasses =
      "flex h-32 w-full rounded-2xl border px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none"

    if (hasError && touched.message) {
      return `${baseClasses} border-red-500 bg-navy-800 focus-visible:ring-red-400`
    } else if (!hasError && touched.message && message) {
      return `${baseClasses} border-green-500 bg-navy-800 focus-visible:ring-green-400`
    } else {
      return `${baseClasses} border-navy-700 bg-navy-800 focus-visible:ring-purple-400`
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="text-sm font-medium block mb-2 text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          onBlur={() => handleBlur("name")}
          className={getInputStyling("name", !!errors.name)}
        />
        {errors.name && touched.name && (
          <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          onBlur={() => handleBlur("email")}
          className={getInputStyling("email", !!errors.email)}
        />
        {errors.email && touched.email && (
          <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="text-sm font-medium block mb-2 text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your business and how we can help..."
          value={message}
          onChange={(e) => handleMessageChange(e.target.value)}
          onBlur={() => handleBlur("message")}
          className={getTextareaStyling(!!errors.message)}
        />
        {errors.message && touched.message && (
          <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || !isFormValid()}
        className={`w-full h-12 rounded-full text-white focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-950 transition-all duration-200 ${
          isFormValid() && !isSubmitting
            ? "bg-purple-600 hover:bg-purple-700 transform hover:scale-[1.02]"
            : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending Message...
          </div>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-800 border border-green-600 text-green-200 px-4 py-3 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            <div>
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-sm text-green-300">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
