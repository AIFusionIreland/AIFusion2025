"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { MapPin, Phone, Mail } from "lucide-react"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"

export default function SiteFooter() {
  const router = useRouter()
  const pathname = usePathname()

  // Admin tools have their own internal footer.
  if (pathname?.startsWith("/admin")) return null

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="border-t border-navy-800 bg-navy-975 py-12">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <AIFusionTextLogo className="h-12" showText={true} />
            <address className="flex flex-col gap-2 text-sm text-gray-300 not-italic">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span>Based in Donegal, Ireland</span>
              </div>
              <a href="tel:+353876856131" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span>087 685 6131</span>
              </a>
              <a href="mailto:info@aifusion.ie" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span>info@aifusion.ie</span>
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/ai-grants-donegal"
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Funding & Grants
            </Link>
            <button
              onClick={() => handleNavigation("/privacy")}
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavigation("/terms")}
              className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1"
            >
              Terms of Service
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-300 border-t border-navy-800 pt-6">
          © {new Date().getFullYear()} AI Fusion. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
