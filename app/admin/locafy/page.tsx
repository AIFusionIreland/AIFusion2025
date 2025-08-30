"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare, Store, Calendar, User } from "lucide-react"
import SiteHeader from "@/components/site-header"

export default function LocafyAdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Back Button */}
        <section className="py-8 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-5xl">
            <Button asChild variant="outline" className="mb-4 bg-navy-800 border-navy-700 text-white hover:bg-navy-700">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </section>

        {/* Locafy Section */}
        <section id="locafy" className="py-24 bg-white relative">
          {/* Add subtle border to separate from navy sections */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                Introducing Locafy - Coming Soon......
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Locafy helps bring communities together by sharing local knowledge, asking and answering local
                questions, and is location-based on user eircode.
              </p>
              <img src="/images/locafy-logo.png" alt="Locafy Logo" className="w-32 h-auto mx-auto mb-4" />
              <p className="text-xl font-medium text-green-600">Live Local, Love Local</p>
            </div>

            {/* Locafy Photo */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-16">
              <img src="/images/locafy-menu-screen.png" alt="Locafy App Interface" className="w-full h-auto" />
            </div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-1 items-center">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3 mt-1">
                      <MessageSquare className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Ask-a-Fy</h3>
                      <p className="text-gray-600 mt-1">
                        Connect with your community by asking and answering local questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3 mt-1">
                      <Store className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Local Business</h3>
                      <p className="text-gray-600 mt-1">Discover businesses near you and support your local economy</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3 mt-1">
                      <Calendar className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Local Events</h3>
                      <p className="text-gray-600 mt-1">Stay updated on what's happening near you in your community</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3 mt-1">
                      <User className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">My Profile</h3>
                      <p className="text-gray-600 mt-1">Personalize your experience and make it yours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
          </div>
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
        </div>
      </footer>
    </div>
  )
}
