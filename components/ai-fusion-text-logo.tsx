import type React from "react"
import Image from "next/image"

interface AIFusionTextLogoProps {
  className?: string
  showText?: boolean
}

const AIFusionTextLogo: React.FC<AIFusionTextLogoProps> = ({ className = "h-10", showText = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-full aspect-square">
        <Image
          src="/images/ai-fusion-new-brand-logo.jpg"
          alt="AI Fusion - AI Made Simple. Innovation for Everyone"
          width={400}
          height={400}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
      {showText && <span className="ml-3 text-xl font-bold text-white">AI Fusion</span>}
    </div>
  )
}

export default AIFusionTextLogo
