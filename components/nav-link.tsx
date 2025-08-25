"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import type { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function NavLink({ href, children, className = "", onClick }: NavLinkProps) {
  const pathname = usePathname()

  // Check if the link is active
  // For home page links with hash (#), they're active on the home page
  const isActive =
    href === pathname || (href.startsWith("/#") && pathname === "/") || (href === "/" && pathname === "/")

  // Base classes that are always applied
  const baseClasses =
    "text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-navy-975 rounded-md px-2 py-1 relative"

  // Classes that change based on active state
  const stateClasses = isActive
    ? "text-white bg-purple-800/30 border-b-2 border-purple-500"
    : "text-gray-200 hover:text-white"

  const handleClick = () => {
    // Scroll to top when navigating to a new page
    if (!href.startsWith("/#") && href !== pathname) {
      // Use setTimeout to ensure the navigation happens first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }

    // Call any additional onClick handler
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link href={href} className={`${baseClasses} ${stateClasses} ${className}`} onClick={handleClick}>
      {children}
    </Link>
  )
}
