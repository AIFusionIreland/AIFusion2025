"use client"

import Link from "next/link"
import { GraduationCap, Briefcase, Home } from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import NavLink from "@/components/nav-link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const pathname = usePathname()

  // Function to handle logo click and scroll to top
  const handleLogoClick = () => {
    // Small delay to ensure navigation completes first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Only show the Back to Home button when not on the home page
  const showBackToHomeButton = pathname !== "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-800 bg-navy-975/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" onClick={handleLogoClick}>
            <AIFusionTextLogo className="h-12" showText={true} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/ai-training" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            AI Courses
          </NavLink>
          <NavLink href="/business" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            AI for Business
          </NavLink>
          <NavLink href="/#locafy">Locafy</NavLink>
          <NavLink href="/#contact">Contact</NavLink>

          {showBackToHomeButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                // Navigate to home page
                window.location.href = "/"

                // Use setTimeout to ensure navigation completes before scrolling
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }, 100)
              }}
              className="flex items-center gap-1 bg-purple-800/30 border-purple-600/50 hover:bg-purple-700/50 text-white"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Back to 3D Home</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
