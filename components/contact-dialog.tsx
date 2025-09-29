"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
}

interface ContactFormData {
  inquiryType: string
  name: string
  email: string
  phone: string
  message: string
  organization: string
  experience: string
  goals: string
  company: string
  industry: string
}

interface ValidationErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  submit?: string
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    inquiryType: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    organization: "",
    experience: "",
    goals: "",
    company: "",
    industry: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  // Validation functions
  const validateName = (value: string): string | undefined => {
    if (!value || !value.trim()) return "Name is required"
    if (value.trim().length < 2) return "Name must be at least 2 characters"
    if (value.trim().length > 50) return "Name must be less than 50 characters"
    return undefined
  }

  const validateEmail = (value: string): string | undefined => {
    if (!value || !value.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value.trim())) return "Please enter a valid email address"
    if (value.length > 100) return "Email must be less than 100 characters"
    return undefined
  }

  const validatePhone = (value: string): string | undefined => {
    if (!value || !value.trim()) return "Phone number is required"
    // More lenient phone validation
    const cleanPhone = value.replace(/[\s\-()]/g, "")
    if (cleanPhone.length < 7) return "Please enter a valid phone number"
    return undefined
  }

  const validateMessage = (value: string): string | undefined => {
    if (!value || !value.trim()) return "Message is required"
    if (value.trim().length < 10) return "Message must be at least 10 characters"
    if (value.trim().length > 1000) return "Message must be less than 1000 characters"
    return undefined
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear any previous submit errors when user starts typing
    if (errors.submit) {
      setErrors((prev) => ({ ...prev, submit: undefined }))
    }

    if (touched[field]) {
      let error: string | undefined
      switch (field) {
        case "name":
          error = validateName(value)
          break
        case "email":
          error = validateEmail(value)
          break
        case "phone":
          error = validatePhone(value)
          break
        case "message":
          error = validateMessage(value)
          break
      }
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))

    let error: string | undefined
    switch (field) {
      case "name":
        error = validateName(formData.name)
        break
      case "email":
        error = validateEmail(formData.email)
        break
      case "phone":
        error = validatePhone(formData.phone)
        break
      case "message":
        error = validateMessage(formData.message)
        break
    }
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const getRequiredFields = () => {
    const required = ["name", "email"]

    if (formData.inquiryType.startsWith("course-")) {
      required.push("phone")
    }

    if (formData.inquiryType === "general") {
      required.push("message")
    }

    return required
  }

  const isFormValid = () => {
    if (!formData.inquiryType) return false

    const requiredFields = getRequiredFields()

    for (const field of requiredFields) {
      const value = formData[field as keyof ContactFormData]
      if (!value || !value.trim()) {
        return false
      }

      // Check for validation errors
      switch (field) {
        case "name":
          if (validateName(value)) return false
          break
        case "email":
          if (validateEmail(value)) return false
          break
        case "phone":
          if (validatePhone(value)) return false
          break
        case "message":
          if (validateMessage(value)) return false
          break
      }
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submission started")
    console.log("Form data:", formData)
    console.log("Required fields:", getRequiredFields())

    // Mark relevant fields as touched
    const requiredFields = getRequiredFields()
    const touchedFields: { [key: string]: boolean } = {}
    requiredFields.forEach((field) => {
      touchedFields[field] = true
    })
    setTouched(touchedFields)

    // Validate all required fields
    const validationErrors: ValidationErrors = {}
    let hasErrors = false

    if (!formData.inquiryType) {
      validationErrors.submit = "Please select an inquiry type"
      hasErrors = true
    }

    for (const field of requiredFields) {
      const value = formData[field as keyof ContactFormData]
      let error: string | undefined

      switch (field) {
        case "name":
          error = validateName(value)
          break
        case "email":
          error = validateEmail(value)
          break
        case "phone":
          error = validatePhone(value)
          break
        case "message":
          error = validateMessage(value)
          break
      }

      if (error) {
        validationErrors[field as keyof ValidationErrors] = error
        hasErrors = true
      }
    }

    console.log("Validation errors:", validationErrors)
    console.log("Has errors:", hasErrors)

    if (hasErrors) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Prepare the data to send
      const submitData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        subject: `Contact Form - ${formData.inquiryType}`,
        inquiryType: formData.inquiryType,
        organization: formData.organization.trim(),
        experience: formData.experience,
        goals: formData.goals.trim(),
        company: formData.company.trim(),
        industry: formData.industry.trim(),
      }

      console.log("Sending data:", submitData)

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      })

      console.log("Response status:", response.status)

      if (response.ok) {
        const result = await response.json()
        console.log("Success result:", result)
        setSubmitStatus("success")
        setShowSuccessPopup(true)

        // Reset form
        setFormData({
          inquiryType: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          organization: "",
          experience: "",
          goals: "",
          company: "",
          industry: "",
        })
        setErrors({})
        setTouched({})
      } else {
        const errorData = await response.json()
        console.log("Error response:", errorData)
        setSubmitStatus("error")
        setErrors({ submit: errorData.error || "Failed to send message. Please try again." })
      }
    } catch (error) {
      console.error("Network error:", error)
      setSubmitStatus("error")
      setErrors({ submit: "Network error. Please check your connection and try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({
      inquiryType: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      organization: "",
      experience: "",
      goals: "",
      company: "",
      industry: "",
    })
    setSubmitStatus("idle")
    setShowSuccessPopup(false)
    setErrors({})
    setTouched({})
    onClose()
  }

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false)
    setTimeout(() => {
      onClose()
      setSubmitStatus("idle")
    }, 300)
  }

  const getInputStyling = (fieldName: string, hasError: boolean) => {
    const baseClasses =
      "bg-navy-800 border-navy-700 text-white placeholder-gray-400 focus:ring-purple-400 focus:border-purple-400"

    if (hasError && touched[fieldName]) {
      return `${baseClasses} border-red-500 focus:ring-red-400 focus:border-red-400`
    } else if (!hasError && touched[fieldName] && formData[fieldName as keyof ContactFormData]) {
      return `${baseClasses} border-green-500 focus:ring-green-400 focus:border-green-400`
    }
    return baseClasses
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] p-0 bg-navy-900 border-navy-800 overflow-hidden">
          <DialogHeader className="p-6 border-b border-navy-800 flex flex-row items-center justify-between">
            <DialogTitle className="text-2xl font-medium text-white">Contact AI Fusion</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-white hover:bg-navy-800"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[75vh]">
            {/* Contact Information Section */}
            <div className="p-6 bg-navy-950">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                    <p className="text-gray-300 mb-6">
                      Ready to transform your business with AI? Contact us today to discuss your needs and discover how
                      we can help you harness the power of artificial intelligence.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="text-white font-medium">087 685 6131</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white font-medium">info@aifusion.ie</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-white font-medium">Donegal, Ireland</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Response Time</p>
                        <p className="text-white font-medium">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Fusion Representative Image */}
                  <div className="mt-6">
                    <div className="relative w-32 h-32 mx-auto lg:mx-0">
                      <Image
                        src="/images/ai-fusion-representative.png"
                        alt="AI Fusion Representative"
                        fill
                        className="rounded-full object-cover border-2 border-purple-600"
                      />
                    </div>
                    <p className="text-center lg:text-left text-gray-300 text-sm mt-2">
                      Your AI Transformation Partner
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-navy-900 p-6 rounded-xl border border-navy-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Display submission error if any */}
                    {errors.submit && (
                      <div className="bg-red-900/20 border border-red-500 rounded-md p-3">
                        <p className="text-red-400 text-sm flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          {errors.submit}
                        </p>
                      </div>
                    )}

                    {/* Debug info - remove this in production */}
                    {process.env.NODE_ENV === "development" && (
                      <div className="bg-gray-800 p-2 rounded text-xs text-gray-300">
                        <p>Debug: Form valid: {isFormValid() ? "Yes" : "No"}</p>
                        <p>Required fields: {getRequiredFields().join(", ")}</p>
                        <p>Inquiry type: {formData.inquiryType || "None"}</p>
                      </div>
                    )}

                    {/* Inquiry Type Selection */}
                    <div>
                      <Label htmlFor="inquiryType" className="text-gray-200">
                        What can we help you with? *
                      </Label>
                      <Select
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                        value={formData.inquiryType}
                      >
                        <SelectTrigger className="bg-navy-800 border-navy-700 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-navy-800 border-navy-700">
                          <SelectItem value="course-beginners" className="text-white hover:bg-navy-700">
                            AI for Beginners Course
                          </SelectItem>
                          <SelectItem value="course-content-creators" className="text-white hover:bg-navy-700">
                            AI Content Creators Course
                          </SelectItem>
                          <SelectItem value="course-vibe-coding" className="text-white hover:bg-navy-700">
                            AI Vibe Coding – Build Your Website Course
                          </SelectItem>
                          <SelectItem value="general" className="text-white hover:bg-navy-700">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Basic Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-200">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
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

                      <div>
                        <Label htmlFor="email" className="text-gray-200">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
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
                    </div>

                    {/* Phone field - required for courses, optional for general */}
                    <div>
                      <Label htmlFor="phone" className="text-gray-200">
                        Phone Number {formData.inquiryType.startsWith("course-") ? "*" : "(Optional)"}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+353 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={getInputStyling("phone", !!errors.phone)}
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Course-specific fields */}
                    {formData.inquiryType.startsWith("course-") && (
                      <>
                        <div>
                          <Label htmlFor="organization" className="text-gray-200">
                            Organization (Optional)
                          </Label>
                          <Input
                            id="organization"
                            placeholder="Your business or organization"
                            value={formData.organization}
                            onChange={(e) => handleInputChange("organization", e.target.value)}
                            className={getInputStyling("organization", false)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="experience" className="text-gray-200">
                            AI Experience Level (Optional)
                          </Label>
                          <Select
                            onValueChange={(value) => handleInputChange("experience", value)}
                            value={formData.experience}
                          >
                            <SelectTrigger className="bg-navy-800 border-navy-700 text-white">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent className="bg-navy-800 border-navy-700">
                              <SelectItem value="beginner" className="text-white hover:bg-navy-700">
                                Complete Beginner
                              </SelectItem>
                              <SelectItem value="some" className="text-white hover:bg-navy-700">
                                Some Experience
                              </SelectItem>
                              <SelectItem value="intermediate" className="text-white hover:bg-navy-700">
                                Intermediate
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="goals" className="text-gray-200">
                            Learning Goals (Optional)
                          </Label>
                          <Textarea
                            id="goals"
                            placeholder="What do you hope to achieve with AI training?"
                            rows={3}
                            value={formData.goals}
                            onChange={(e) => handleInputChange("goals", e.target.value)}
                            className={`${getInputStyling("goals", false)} resize-none`}
                          />
                        </div>
                      </>
                    )}

                    {/* Message field - required for general inquiries */}
                    {formData.inquiryType === "general" && (
                      <div>
                        <Label htmlFor="message" className="text-gray-200">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your inquiry..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          onBlur={() => handleBlur("message")}
                          className={`${getInputStyling("message", !!errors.message)} resize-none`}
                        />
                        {errors.message && touched.message && (
                          <p className="mt-1 text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.message}
                          </p>
                        )}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !isFormValid()}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                    <p className="text-sm text-gray-400 text-center">
                      Your message will be sent directly to our team at info@aifusion.ie
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent className="sm:max-w-md bg-navy-900 border-navy-800">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</DialogTitle>
            <p className="text-gray-300 mb-6">
              Thank you for contacting AI Fusion. We've received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={handleSuccessPopupClose}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
