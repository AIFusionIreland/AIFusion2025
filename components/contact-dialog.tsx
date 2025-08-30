"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Contact Form Submission - AI Fusion")
      const body = encodeURIComponent(`
New Contact Form Submission

Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim() || "Not provided"}

Message:
${formData.message.trim()}

---
This message was submitted through the AI Fusion contact dialog.
      `)

      window.open(`mailto:info@aifusion.ie?subject=${subject}&body=${body}`, "_blank")

      setSubmitStatus("success")
      setShowSuccessPopup(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({ name: "", email: "", phone: "", message: "" })
    setSubmitStatus("idle")
    setShowSuccessPopup(false)
    onClose()
  }

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false)
    setTimeout(() => {
      onClose()
      setSubmitStatus("idle")
    }, 300)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0 bg-navy-900 border-navy-800 overflow-hidden">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-200">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="bg-navy-800 border-navy-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-200">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-navy-800 border-navy-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-navy-800 border-navy-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-200">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-navy-800 border-navy-700 text-white placeholder:text-gray-400 focus:border-purple-500 min-h-[120px] resize-none"
                        placeholder="Tell us about your AI needs, questions, or how we can help your business..."
                      />
                    </div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="bg-red-900/50 border border-red-700 rounded-lg p-3">
                        <p className="text-red-200 text-sm">
                          There was an error sending your message. Please try again.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
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
