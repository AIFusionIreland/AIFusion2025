"use client"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import { ContactDialog } from "@/components/contact-dialog"
import { useState } from "react"

export function ContactClientPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-[#00d9ff]">AI Fusion</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for AI training, business consultancy, or any questions you may have
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-[#1a1f3a]/80 border-[#00d9ff]/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#00d9ff]/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-[#00d9ff]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Figart, Isle of Doagh
                          <br />
                          Clonmany
                          <br />
                          Co. Donegal
                          <br />
                          F93 ET92
                          <br />
                          Ireland
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="bg-[#00d9ff]/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-[#00d9ff]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                        <a
                          href="mailto:info@aifusion.ie"
                          className="text-[#00d9ff] hover:text-[#00b8d4] transition-colors"
                        >
                          info@aifusion.ie
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form CTA */}
                  <div className="mt-8 pt-6 border-t border-[#00d9ff]/20">
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Contact</h3>
                    <p className="text-gray-300 mb-4">
                      Have a question? Fill out our contact form and we'll get back to you as soon as possible.
                    </p>
                    <ContactFormButton setIsContactOpen={setIsContactOpen} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <Card className="bg-[#1a1f3a]/80 border-[#00d9ff]/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.8!2d-7.4!3d55.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDE4JzAwLjAiTiA3wrAyNCcwMC4wIlc!5e0!3m2!1sen!2sie!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AI Fusion Location Map"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-[#1a1f3a]/80 border-[#00d9ff]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-white">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-white">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  )
}

function ContactFormButton({ setIsContactOpen }: { setIsContactOpen: (isOpen: boolean) => void }) {
  return (
    <button
      onClick={() => setIsContactOpen(true)}
      className="w-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#6d28d9] hover:to-[#9333ea] transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Open Contact Form
    </button>
  )
}
