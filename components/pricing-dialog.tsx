"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Phone, Mail, Globe, Clock, Users, Zap, Star, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

interface PricingDialogProps {
  isOpen: boolean
  onClose: () => void
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ValidationErrors {
  name?: string
  email?: string
  message?: string
}

export default function PricingDialog({ isOpen, onClose }: PricingDialogProps) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Validation functions
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
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (touched[field]) {
      let error: string | undefined
      switch (field) {
        case "name":
          error = validateName(value)
          break
        case "email":
          error = validateEmail(value)
          break
        case "message":
          error = validateMessage(value)
          break
      }
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  // Handle field blur events
  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))

    let error: string | undefined
    switch (field) {
      case "name":
        error = validateName(formData.name)
        break
      case "email":
        error = validateEmail(formData.email)
        break
      case "message":
        error = validateMessage(formData.message)
        break
    }
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  // Check if form is valid
  const isFormValid = () => {
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const messageError = validateMessage(formData.message)
    return !nameError && !emailError && !messageError
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true })

    // Validate all fields
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const messageError = validateMessage(formData.message)

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
    setSubmitStatus("idle")

    try {
      const subject = encodeURIComponent("AI Fusion Pricing Inquiry")
      const body = encodeURIComponent(`
New Pricing Inquiry from AI Fusion Website

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}

Message:
${formData.message.trim()}

---
This inquiry was submitted through the AI Fusion Pricing dialog.
      `)

      window.open(`mailto:info@aifusion.ie?subject=${subject}&body=${body}`, "_blank")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
      setTouched({})

      // Close contact form after successful submission
      setTimeout(() => {
        setIsContactFormOpen(false)
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get input styling based on validation state
  const getInputStyling = (fieldName: keyof ContactFormData, hasError: boolean) => {
    const baseClasses =
      "flex h-12 w-full rounded-lg border px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"

    if (hasError && touched[fieldName]) {
      return `${baseClasses} border-red-500 bg-navy-800 focus-visible:ring-red-400`
    } else if (!hasError && touched[fieldName] && formData[fieldName]) {
      return `${baseClasses} border-green-500 bg-navy-800 focus-visible:ring-green-400`
    } else {
      return `${baseClasses} border-navy-700 bg-navy-800 focus-visible:ring-purple-400`
    }
  }

  const getTextareaStyling = (hasError: boolean) => {
    const baseClasses =
      "flex min-h-[120px] w-full rounded-lg border px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-offset-navy-950 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none"

    if (hasError && touched.message) {
      return `${baseClasses} border-red-500 bg-navy-800 focus-visible:ring-red-400`
    } else if (!hasError && touched.message && formData.message) {
      return `${baseClasses} border-green-500 bg-navy-800 focus-visible:ring-green-400`
    } else {
      return `${baseClasses} border-navy-700 bg-navy-800 focus-visible:ring-purple-400`
    }
  }

  const handleContactFormClose = () => {
    setIsContactFormOpen(false)
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
    setTouched({})
    setSubmitStatus("idle")
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[1000px] max-h-[90vh] p-0 bg-navy-900 border-navy-800 overflow-hidden">
          <DialogHeader className="p-6 border-b border-navy-800 flex flex-row items-center justify-between">
            <DialogTitle className="text-2xl font-medium text-white">AI Fusion Pricing</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-white hover:bg-navy-800"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[75vh]">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-purple-600 to-navy-800 p-8 text-white text-center">
              <h1 className="text-3xl font-bold mb-2">AI FUSION</h1>
              <h2 className="text-xl font-medium mb-1">AI CONSULTANCY</h2>
              <h3 className="text-lg">PRICING SHEET</h3>
            </div>

            {/* Hourly Rate Section */}
            <div className="p-6 bg-navy-950 border-b border-navy-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-navy-900 p-6 rounded-xl border border-navy-700">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-purple-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">HOURLY RATE</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-purple-300 mb-2">Standard AI Consulting:</h4>
                      <p className="text-2xl font-bold text-white mb-2">€125/hour</p>
                      <p className="text-gray-300 text-sm">
                        Includes strategy, training, and hands-on help with tools like ChatGPT, Microsoft Copilot, and
                        more.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-purple-300 mb-2">Quick Session (30 min):</h4>
                      <p className="text-2xl font-bold text-white mb-2">€70</p>
                      <p className="text-gray-300 text-sm">Ideal for focused support, troubleshooting, or quick wins</p>
                    </div>
                  </div>
                </div>

                {/* Free Discovery Call */}
                <div className="bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-xl border border-green-600">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-green-300 mr-2" />
                    <h3 className="text-xl font-semibold text-white">FREE DISCOVERY CALL</h3>
                  </div>
                  <p className="text-lg font-medium text-green-200 mb-2">30 minutes</p>
                  <p className="text-gray-200 text-sm">
                    Let's discuss your business needs and explore which AI tools or package suits you best — no
                    obligation, just insight.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Packages */}
            <div className="p-6 bg-navy-975">
              <h3 className="text-2xl font-bold text-white text-center mb-8">SERVICE PACKAGES</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Starter AI Boost */}
                <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-purple-500 transition-colors">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-blue-400 mr-2" />
                    <h4 className="text-xl font-semibold text-white">Starter AI Boost</h4>
                  </div>
                  <p className="text-3xl font-bold text-blue-400 mb-4">€350</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">3 hours of consulting (valid for 1 month)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">AI audit of your workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Customized AI tool recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Quick setup help with ChatGPT or Microsoft Copilot</span>
                    </li>
                  </ul>
                  <p className="text-blue-300 text-sm font-medium">Ideal for business owners just starting with AI.</p>
                </div>

                {/* Productivity Power-Up */}
                <div className="bg-navy-900 p-6 rounded-xl border border-purple-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">POPULAR</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-purple-400 mr-2" />
                    <h4 className="text-xl font-semibold text-white">Productivity Power-Up</h4>
                  </div>
                  <p className="text-3xl font-bold text-purple-400 mb-4">€950</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">8 hours of consulting (valid for 2 months)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Workflow redesign with AI automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        AI-powered content tools (emails, social media, reports)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">One mini-team workshop (up to 5 staff, 1 hour)</span>
                    </li>
                  </ul>
                  <p className="text-purple-300 text-sm font-medium">
                    Great for teams wanting practical AI integration.
                  </p>
                </div>

                {/* AI Transformation Partner */}
                <div className="bg-navy-900 p-6 rounded-xl border border-navy-700 hover:border-yellow-500 transition-colors">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-yellow-400 mr-2" />
                    <h4 className="text-xl font-semibold text-white">AI Transformation Partner</h4>
                  </div>
                  <p className="text-3xl font-bold text-yellow-400 mb-1">€1,950</p>
                  <p className="text-yellow-300 text-sm mb-4">/month</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Up to 20 hours/month of dedicated consulting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">AI integration strategy + implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Custom-built workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Monthly team workshops and training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Priority support via email/voice</span>
                    </li>
                  </ul>
                  <p className="text-yellow-300 text-sm font-medium">Best for businesses ready to fully embrace AI.</p>
                </div>
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="p-6 bg-navy-950 border-t border-navy-800">
              <h3 className="text-xl font-bold text-white mb-6">OPTIONAL ADD-ONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-navy-900 p-4 rounded-lg border border-navy-700">
                  <h4 className="text-lg font-medium text-white mb-2">Staff Training Workshop</h4>
                  <p className="text-xl font-bold text-purple-400 mb-1">€250</p>
                  <p className="text-gray-400 text-sm">(1 hour)</p>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg border border-navy-700">
                  <h4 className="text-lg font-medium text-white mb-2">AI Content Pack</h4>
                  <p className="text-xl font-bold text-purple-400 mb-1">€300</p>
                  <p className="text-gray-400 text-sm">(10 posts)</p>
                </div>
                <div className="bg-navy-900 p-4 rounded-lg border border-navy-700">
                  <h4 className="text-lg font-medium text-white mb-2">Custom GPT Setup</h4>
                  <p className="text-xl font-bold text-purple-400 mb-1">from €200</p>
                  <p className="text-gray-400 text-sm">Tailored to your needs</p>
                </div>
              </div>
            </div>

            {/* About AI Fusion */}
            <div className="p-6 bg-navy-975 border-t border-navy-800">
              <h3 className="text-xl font-bold text-white mb-4">About AI Fusion</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                At AI Fusion, our mission is to empower small businesses, entrepreneurs, and individuals with practical,
                hands-on AI knowledge. We deliver accessible, in-person training and share bite-sized tips and tutorials
                across social media to help everyday people confidently adopt AI tools and transform the way they work,
                create, and grow.
              </p>

              {/* Contact Information */}
              <div className="bg-navy-900 p-6 rounded-xl border border-navy-700">
                <h4 className="text-lg font-medium text-white mb-4">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-gray-400 text-xs">Phone</p>
                      <p className="text-white text-sm">0876856131</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-gray-400 text-xs">Email</p>
                      <p className="text-white text-sm">infi@aifusion.ie</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-gray-400 text-xs">Website</p>
                      <p className="text-white text-sm">www.AIFusion.ie</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-navy-700">
                  <p className="text-gray-400 text-sm">For inquiries, contact us.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-6 bg-gradient-to-r from-purple-600 to-navy-700 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-gray-200 mb-4">Book your free discovery call today!</p>
              <Button
                className="rounded-full px-6 py-3 bg-white text-navy-800 hover:bg-gray-100 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsContactFormOpen(true)}
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Form Dialog */}
      <Dialog open={isContactFormOpen} onOpenChange={handleContactFormClose}>
        <DialogContent className="sm:max-w-[500px] bg-navy-900 border-navy-800 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-center mb-4 text-white">Contact AI Fusion</DialogTitle>
            <p className="text-gray-300 text-center text-sm">
              Get in touch with us about our AI consulting services and pricing
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <Label htmlFor="contact-name" className="text-sm font-medium text-gray-200">
                  Full Name *
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={getInputStyling("name", !!errors.name)}
                  placeholder="Enter your full name"
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="contact-email" className="text-sm font-medium text-gray-200">
                  Email Address *
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={getInputStyling("email", !!errors.email)}
                  placeholder="Enter your email address"
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <Label htmlFor="contact-message" className="text-sm font-medium text-gray-200">
                  Message *
                </Label>
                <Textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={getTextareaStyling(!!errors.message)}
                  placeholder="Tell us about your AI needs, which services interest you, or any questions you have about our pricing..."
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="bg-green-900/50 border border-green-700 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <div>
                    <p className="text-green-200 font-medium">Message sent successfully!</p>
                    <p className="text-green-300 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="bg-red-900/50 border border-red-700 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                  <p className="text-red-200">There was an error sending your message. Please try again.</p>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleContactFormClose}
                className="flex-1 border-navy-700 text-gray-200 hover:text-white hover:bg-navy-800"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className={`flex-1 transition-all duration-200 ${
                  isFormValid() && !isSubmitting
                    ? "bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-[1.02]"
                    : "bg-gray-600 cursor-not-allowed text-gray-300"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
