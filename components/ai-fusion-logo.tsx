import type React from "react"
import Image from "next/image"

interface AIFusionLogoProps {
  className?: string
  circular?: boolean
}

const AIFusionLogo: React.FC<AIFusionLogoProps> = ({ className = "h-10 w-10", circular = false }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <Image
        src="/images/ai-fusion-new-logo.jpg"
        alt="AI Fusion - AI made simple, Innovation for everyone"
        width={400}
        height={400}
        className={`w-full h-full object-cover max-w-full max-h-full ${circular ? "rounded-full" : "object-contain"}`}
        style={{
          filter: circular ? "drop-shadow(0 8px 16px rgba(0,0,0,0.15))" : "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
        }}
        priority
      />
    </div>
  )
}

export default AIFusionLogo
