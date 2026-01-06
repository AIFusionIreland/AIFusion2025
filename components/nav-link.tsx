"use client"

import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
    // Ensure page scrolls to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md text-left",
        isActive
          ? "text-white bg-purple-600/20 border-b-2 border-purple-400"
          : "text-gray-300 hover:text-white hover:bg-navy-800/50",
        className,
      )}
    >
      {children}
    </button>
  )
}
