"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { GraduationCap, Home, Calendar, Menu } from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import NavLink from "@/components/nav-link"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Function to handle logo click and scroll to top
  const handleLogoClick = () => {
    router.push("/")
    // Small delay to ensure navigation completes first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Function to handle contact click and open dialog
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsContactDialogOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  // Function to handle back to home button
  const handleBackToHome = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Only show the Back to Home button when not on the home page
  const showBackToHomeButton = pathname !== "/"

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-navy-800 bg-navy-975/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={handleLogoClick} className="cursor-pointer">
              <AIFusionTextLogo className="h-12" showText={true} />
            </button>
          </div>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/ai-training" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                AI Courses
              </NavLink>
              <NavLink href="/upcoming-courses" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Courses
              </NavLink>
              <button
                onClick={handleContactClick}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-navy-900 border-navy-800">
                <nav className="flex flex-col gap-4 mt-8">
                  <NavLink href="/ai-training" className="flex items-center gap-2 p-2">
                    <GraduationCap className="h-4 w-4" />
                    AI Courses
                  </NavLink>
                  <NavLink href="/upcoming-courses" className="flex items-center gap-2 p-2">
                    <Calendar className="h-4 w-4" />
                    Upcoming Courses
                  </NavLink>
                  <button
                    onClick={handleContactClick}
                    className="text-left text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
                  >
                    Contact
                  </button>
                </nav>
              </SheetContent>
            </Sheet>

            {showBackToHomeButton && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleBackToHome}
                className="flex items-center gap-1 bg-purple-800/30 border-purple-600/50 hover:bg-purple-700/50 text-white"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Back to Home</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Contact Dialog */}
      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
    </>
  )
}
