"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  GraduationCap,
  Home,
  Calendar,
  Menu,
  Facebook,
  HelpCircle,
  Briefcase,
  Mail,
  BookOpen,
  Star,
} from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import NavLink from "@/components/nav-link"
import ContactDialog from "@/components/contact-dialog"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const SiteHeader = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsContactDialogOpen(true)
    setIsMobileMenuOpen(false)
  }

  const handleBackToHome = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const showBackToHomeButton = pathname !== "/"

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-navy-800 bg-navy-975/95 backdrop-blur-md">
        <div className="container max-w-[1400px] flex h-16 items-center justify-between gap-4">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="cursor-pointer">
              <AIFusionTextLogo className="h-12" showText={true} />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 text-sm">
              <NavLink href="/" className="flex items-center gap-1.5">
                <Home className="h-4 w-4" />
                Home
              </NavLink>
              <NavLink href="/ai-training" className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                AI Courses
              </NavLink>
              <NavLink href="/upcoming-courses" className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Upcoming Courses
              </NavLink>
              <NavLink href="/business-services" className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                Business Services
              </NavLink>
              <NavLink href="/blog" className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                Blog
              </NavLink>
              <NavLink href="/testimonials" className="flex items-center gap-1.5">
                <Star className="h-4 w-4" />
                Testimonials
              </NavLink>
              <NavLink href="/faq" className="flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </NavLink>
              <NavLink href="/contact" className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                Contact Us
              </NavLink>
            </nav>

            <div className="hidden lg:flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <a
                  href="http://www.tiktok.com/@aifusionireland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Visit our TikTok"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/AIFusionireland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Visit our Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-navy-900 border-navy-800">
                <nav className="flex flex-col gap-4 mt-8">
                  <NavLink href="/" className="flex items-center gap-2 p-2">
                    <Home className="h-4 w-4" />
                    Home
                  </NavLink>
                  <NavLink href="/ai-training" className="flex items-center gap-2 p-2">
                    <GraduationCap className="h-4 w-4" />
                    AI Courses
                  </NavLink>
                  <NavLink href="/upcoming-courses" className="flex items-center gap-2 p-2">
                    <Calendar className="h-4 w-4" />
                    Upcoming Courses
                  </NavLink>
                  <NavLink href="/business-services" className="flex items-center gap-2 p-2">
                    <Briefcase className="h-4 w-4" />
                    Business Services
                  </NavLink>
                  <NavLink href="/blog" className="flex items-center gap-2 p-2">
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </NavLink>
                  <NavLink href="/testimonials" className="flex items-center gap-2 p-2">
                    <Star className="h-4 w-4" />
                    Testimonials
                  </NavLink>
                  <NavLink href="/faq" className="flex items-center gap-2 p-2">
                    <HelpCircle className="h-4 w-4" />
                    FAQ
                  </NavLink>
                  <NavLink href="/contact" className="flex items-center gap-2 p-2">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </NavLink>
                  <div className="flex items-center gap-4 p-2 mt-4 border-t border-navy-800 pt-4">
                    <a
                      href="http://www.tiktok.com/@aifusionireland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label="Visit our TikTok"
                    >
                      <TikTokIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/AIFusionireland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label="Visit our Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {showBackToHomeButton && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleBackToHome}
                className="hidden lg:flex items-center gap-1 bg-purple-800/30 border-purple-600/50 hover:bg-purple-700/50 text-white"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Back to Home</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Contact Dialog */}
      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </>
  )
}

export { SiteHeader }
export default SiteHeader
