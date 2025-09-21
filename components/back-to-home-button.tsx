"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

interface BackToHomeButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  showIcon?: boolean
  label?: string
}

export function BackToHomeButton({
  className = "",
  variant = "default",
  size = "default",
  showIcon = true,
  label = "Back to Home",
}: BackToHomeButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    // Navigate to home page
    router.push("/")

    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick} className={`transition-all duration-300 ${className}`}>
      {showIcon && <Home className="mr-2 h-4 w-4" />}
      {label}
    </Button>
  )
}

export default BackToHomeButton
