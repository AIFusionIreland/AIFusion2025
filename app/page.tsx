"use client"

import type React from "react"
import { BookOpen, Code, MessageSquare, Smartphone, Store } from "lucide-react"
import AIFusionLogo from "@/components/ai-fusion-logo"
import AIFusionTextLogo from "@/components/ai-fusion-text-logo"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PricingDialog from "@/components/pricing-dialog"
import SiteHeader from "@/components/site-header"
import ContactDialog from "@/components/contact-dialog"

export default function Home() {
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const router = useRouter()
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isEnrollDialogOpen, setIsEnrollDialogOpen] = useState(false)

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Open the contact dialog instead of handling enrollment separately
    setIsEnrollDialogOpen(false)
    setIsContactDialogOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Welcome Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20"></div>

          {/* Custom CSS for complex animations */}
          <style jsx>{`
            html {
              scroll-behavior: smooth;
            }

            @media (prefers-reduced-motion: reduce) {
              html {
                scroll-behavior: auto;
              }
            }

            @keyframes floatAndRotate {
              0% { transform: perspective(1000px) rotateX(15deg) rotateY(-20deg) translateY(0px) translateX(0px); }
              25% { transform: perspective(1000px) rotateX(10deg) rotateY(-15deg) translateY(-15px) translateX(10px); }
              50% { transform: perspective(1000px) rotateX(20deg) rotateY(-25deg) translateY(-10px) translateX(-5px); }
              75% { transform: perspective(1000px) rotateX(5deg) rotateY(-10deg) translateY(-20px) translateX(15px); }
              100% { transform: perspective(1000px) rotateX(15deg) rotateY(-20deg) translateY(0px) translateX(0px); }
            }
            
            @keyframes laptopFloat {
              0% { transform: perspective(1000px) rotateX(10deg) rotateY(25deg) translateY(0px) translateX(0px) rotateZ(0deg); }
              33% { transform: perspective(1000px) rotateX(5deg) rotateY(30deg) translateY(-20px) translateX(-10px) rotateZ(2deg); }
              66% { transform: perspective(1000px) rotateX(15deg) rotateY(20deg) translateY(-5px) translateX(15px) rotateZ(-1deg); }
              100% { transform: perspective(1000px) rotateX(10deg) rotateY(25deg) translateY(0px) translateX(0px) rotateZ(0deg); }
            }
            
            @keyframes robotDance {
              0% { transform: perspective(1000px) rotateX(5deg) rotateY(-15deg) translateY(0px) translateX(0px) rotateZ(0deg); }
              20% { transform: perspective(1000px) rotateX(0deg) rotateY(-10deg) translateY(-15px) translateX(-8px) rotateZ(3deg); }
              40% { transform: perspective(1000px) rotateX(10deg) rotateY(-20deg) translateY(-25px) translateX(5px) rotateZ(-2deg); }
              60% { transform: perspective(1000px) rotateX(-5deg) rotateY(-5deg) translateY(-10px) translateX(12px) rotateZ(1deg); }
              80% { transform: perspective(1000px) rotateX(8deg) rotateY(-25deg) translateY(-18px) translateX(-3px) rotateZ(-1deg); }
              100% { transform: perspective(1000px) rotateX(5deg) rotateY(-15deg) translateY(0px) translateX(0px) rotateZ(0deg); }
            }
            
            @keyframes brainPulse {
              0% { 
                transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1) hue-rotate(0deg);
              }
              25% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(15deg) rotateZ(2deg) translateY(-12px) translateX(8px) scale(1.05);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) brightness(1.2) contrast(1.2) hue-rotate(10deg);
              }
              50% { 
                transform: perspective(1000px) rotateX(-3deg) rotateY(25deg) rotateZ(-1deg) translateY(-20px) translateX(-5px) scale(1.02);
                filter: drop-shadow(0 35px 70px rgba(0,0,0,0.35)) brightness(1.15) contrast(1.15) hue-rotate(20deg);
              }
              75% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(10deg) rotateZ(3deg) translateY(-8px) translateX(12px) scale(1.08);
                filter: drop-shadow(0 28px 55px rgba(0,0,0,0.38)) brightness(1.25) contrast(1.25) hue-rotate(15deg);
              }
              100% { 
                transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1) hue-rotate(0deg);
              }
            }

            @keyframes aiBrainPulse {
              0% { 
                transform: perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(3deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 30px 60px rgba(0,255,255,0.4)) brightness(1.2) contrast(1.3) hue-rotate(0deg) saturate(1.2);
              }
              25% { 
                transform: perspective(1000px) rotateX(15deg) rotateY(-10deg) rotateZ(-2deg) translateY(-18px) translateX(12px) scale(1.08);
                filter: drop-shadow(0 40px 80px rgba(255,100,0,0.5)) brightness(1.4) contrast(1.5) hue-rotate(30deg) saturate(1.4);
              }
              50% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(-20deg) rotateZ(4deg) translateY(-25px) translateX(-8px) scale(1.03);
                filter: drop-shadow(0 50px 100px rgba(147,51,234,0.6)) brightness(1.6) contrast(1.7) hue-rotate(60deg) saturate(1.6);
              }
              75% { 
                transform: perspective(1000px) rotateX(20deg) rotateY(-5deg) rotateZ(-1deg) translateY(-12px) translateX(18px) scale(1.12);
                filter: drop-shadow(0 35px 70px rgba(0,255,150,0.45)) brightness(1.3) contrast(1.4) hue-rotate(45deg) saturate(1.3);
              }
              100% { 
                transform: perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(3deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 30px 60px rgba(0,255,255,0.4)) brightness(1.2) contrast(1.3) hue-rotate(0deg) saturate(1.2);
              }
            }

            @keyframes worldMapOrbit {
              0% { 
                transform: perspective(1000px) rotateX(10deg) rotateY(0deg) rotateZ(5deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1) hue-rotate(0deg);
              }
              25% { 
                transform: perspective(1000px) rotateX(15deg) rotateY(90deg) rotateZ(3deg) translateY(-10px) translateX(5px) scale(1.03);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.35)) brightness(1.15) contrast(1.15) hue-rotate(30deg);
              }
              50% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(180deg) rotateZ(-2deg) translateY(-15px) translateX(-8px) scale(1.01);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) brightness(1.2) contrast(1.2) hue-rotate(60deg);
              }
              75% { 
                transform: perspective(1000px) rotateX(20deg) rotateY(270deg) rotateZ(4deg) translateY(-5px) translateX(10px) scale(1.04);
                filter: drop-shadow(0 22px 45px rgba(0,0,0,0.32)) brightness(1.12) contrast(1.12) hue-rotate(90deg);
              }
              100% { 
                transform: perspective(1000px) rotateX(10deg) rotateY(360deg) rotateZ(5deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1) hue-rotate(0deg);
              }
            }

            @keyframes representativeFloat {
              0% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(10deg) rotateZ(1deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.05) contrast(1.05);
              }
              25% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(15deg) rotateZ(-1deg) translateY(-12px) translateX(8px) scale(1.02);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.35)) brightness(1.1) contrast(1.1);
              }
              50% { 
                transform: perspective(1000px) rotateX(2deg) rotateY(5deg) rotateZ(2deg) translateY(-18px) translateX(-5px) scale(1.01);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) brightness(1.08) contrast(1.08);
              }
              75% { 
                transform: perspective(1000px) rotateX(10deg) rotateY(20deg) rotateZ(-0.5deg) translateY(-8px) translateX(12px) scale(1.03);
                filter: drop-shadow(0 22px 45px rgba(0,0,0,0.32)) brightness(1.12) contrast(1.12);
              }
              100% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(10deg) rotateZ(1deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.05) contrast(1.05);
              }
            }

            @keyframes robotTeachingFloat {
              0% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(-12deg) rotateZ(2deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.08) contrast(1.08);
              }
              25% { 
                transform: perspective(1000px) rotateX(12deg) rotateY(-8deg) rotateZ(-1deg) translateY(-15px) translateX(10px) scale(1.03);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.35)) brightness(1.12) contrast(1.12);
              }
              50% { 
                transform: perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(3deg) translateY(-22px) translateX(-6px) scale(1.01);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) brightness(1.15) contrast(1.15);
              }
              75% { 
                transform: perspective(1000px) rotateX(14deg) rotateY(-4deg) rotateZ(-0.5deg) translateY(-10px) translateX(14px) scale(1.04);
                filter: drop-shadow(0 22px 45px rgba(0,0,0,0.32)) brightness(1.1) contrast(1.1);
              }
              100% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(-12deg) rotateZ(2deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.08) contrast(1.08);
              }
            }
            
            @keyframes iconSway {
              0% { transform: perspective(1000px) rotateX(20deg) rotateZ(12deg) translateY(0px) translateX(0px); }
              50% { transform: perspective(1000px) rotateX(25deg) rotateZ(8deg) translateY(-10px) translateX(5px); }
              100% { transform: perspective(1000px) rotateX(20deg) rotateZ(12deg) translateY(0px) translateX(0px); }
            }
            
            @keyframes iconFloat {
              0% { transform: perspective(1000px) rotateX(-15deg) rotateY(20deg) translateY(0px) translateX(0px); }
              50% { transform: perspective(1000px) rotateX(-10deg) rotateY(25deg) translateY(-15px) translateX(-8px); }
              100% { transform: perspective(1000px) rotateX(-15deg) rotateY(20deg) translateY(0px) translateX(0px); }
            }
            
            @keyframes iconBob {
              0% { transform: perspective(1000px) rotateY(-25deg) rotateZ(-10deg) translateY(0px) translateX(0px); }
              50% { transform: perspective(1000px) rotateY(-20deg) rotateZ(-5deg) translateY(-12px) translateX(6px); }
              100% { transform: perspective(1000px) rotateY(-25deg) rotateZ(-10deg) translateY(0px) translateX(0px); }
            }
            
            @keyframes sparkleMove {
              0% { transform: perspective(1000px) translateZ(50px) translateY(0px) translateX(0px) rotate(0deg); }
              25% { transform: perspective(1000px) translateZ(60px) translateY(-8px) translateX(5px) rotate(90deg); }
              50% { transform: perspective(1000px) translateZ(40px) translateY(-15px) translateX(-3px) rotate(180deg); }
              75% { transform: perspective(1000px) translateZ(55px) translateY(-5px) translateX(8px) rotate(270deg); }
              100% { transform: perspective(1000px) translateZ(50px) translateY(0px) translateX(0px) rotate(360deg); }
            }
            
            @keyframes orbitalSpin {
              0% { transform: perspective(1000px) rotateX(45deg) rotateZ(0deg) translateY(0px); }
              50% { transform: perspective(1000px) rotateX(45deg) rotateZ(180deg) translateY(-5px); }
              100% { transform: perspective(1000px) rotateX(45deg) rotateZ(360deg) translateY(0px); }
            }
            
            @keyframes neuralGlow {
              0% { opacity: 0.3; }
              50% { opacity: 0.8; }
              100% { opacity: 0.3; }
            }
            
            @keyframes dataStream {
              0% { opacity: 0.2; transform: translateX(-20px) translateY(0px); }
              50% { opacity: 0.8; transform: translateX(0px) translateY(-5px); }
              100% { opacity: 0.2; transform: translateX(20px) translateY(0px); }
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes logoGlow {
              0% { 
                box-shadow: 0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(79,70,229,0.3), 0 0 90px rgba(147,51,234,0.2);
                transform: scale(1);
              }
              50% { 
                box-shadow: 0 0 50px rgba(255,255,255,0.6), 0 0 80px rgba(79,70,229,0.5), 0 0 120px rgba(147,51,234,0.3);
                transform: scale(1.02);
              }
              100% { 
                box-shadow: 0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(79,70,229,0.3), 0 0 90px rgba(147,51,234,0.2);
                transform: scale(1);
              }
            }

            @keyframes logoInnerGlow {
              0% { 
                box-shadow: 
                  inset 0 0 30px rgba(79,70,229,0.1),
                  0 0 20px rgba(255,255,255,0.8),
                  0 0 40px rgba(79,70,229,0.4);
              }
              50% { 
                box-shadow: 
                  inset 0 0 50px rgba(79,70,229,0.2), 
                  inset 0 0 70px rgba(147,51,234,0.1),
                  0 0 30px rgba(255,255,255,1),
                  0 0 60px rgba(79,70,229,0.6);
              }
              100% { 
                box-shadow: 
                  inset 0 0 30px rgba(79,70,229,0.1),
                  0 0 20px rgba(255,255,255,0.8),
                  0 0 40px rgba(79,70,229,0.4);
              }
            }

            .animate-logo-inner-glow {
              animation: logoInnerGlow 4s ease-in-out infinite;
            }

            @keyframes textSlideUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            .animate-fade-in {
              animation: fadeIn 0.8s ease-out;
            }

            .animate-logo-glow {
              animation: logoGlow 3s ease-in-out infinite;
            }

            .animate-text-slide-up {
              animation: textSlideUp 1s ease-out;
            }
            
            .book-float { animation: floatAndRotate 6s ease-in-out infinite; }
            .laptop-float { animation: laptopFloat 7s ease-in-out infinite; }
            .robot-dance { animation: robotDance 5s ease-in-out infinite; }
            .brain-pulse { animation: brainPulse 8s ease-in-out infinite; }
            .ai-brain-pulse { animation: aiBrainPulse 9s ease-in-out infinite; }
            .world-map-orbit { animation: worldMapOrbit 12s ease-in-out infinite; }
            .representative-float { animation: representativeFloat 9s ease-in-out infinite; }
            .robot-teaching-float { animation: robotTeachingFloat 10s ease-in-out infinite; }
            .icon-sway { animation: iconSway 4s ease-in-out infinite; }
            .icon-float { animation: iconFloat 5s ease-in-out infinite; }
            .icon-bob { animation: iconBob 3.5s ease-in-out infinite; }
            .sparkle-move { animation: sparkleMove 8s linear infinite; }
            .orbital-spin { animation: orbitalSpin 12s linear infinite; }
            .neural-glow { animation: neuralGlow 2s ease-in-out infinite; }
            .data-stream { animation: dataStream 3s ease-in-out infinite; }

            @keyframes locafyLogoFloat {
              0% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(15deg) rotateZ(2deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.05) contrast(1.05);
              }
              25% { 
                transform: perspective(1000px) rotateX(12deg) rotateY(20deg) rotateZ(-1deg) translateY(-10px) translateX(5px) scale(1.03);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.35)) brightness(1.1) contrast(1.1);
              }
              50% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(10deg) rotateZ(3deg) translateY(-15px) translateX(-8px) scale(1.02);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) brightness(1.15) contrast(1.15);
              }
              75% { 
                transform: perspective(1000px) rotateX(15deg) rotateY(25deg) rotateZ(0deg) translateY(-5px) translateX(10px) scale(1.04);
                filter: drop-shadow(0 22px 45px rgba(0,0,0,0.32)) brightness(1.08) contrast(1.08);
              }
              100% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(15deg) rotateZ(2deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.05) contrast(1.05);
              }
            }

            @keyframes robotMathFloat {
              0% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(-10deg) rotateZ(1deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1) contrast(1.1) hue-rotate(0deg);
              }
              25% { 
                transform: perspective(1000px) rotateX(8deg) rotateY(-5deg) rotateZ(-1deg) translateY(-15px) translateX(8px) scale(1.03);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.45)) brightness(1.15) contrast(1.15) hue-rotate(15deg);
              }
              50% { 
                transform: perspective(1000px) rotateX(2deg) rotateY(-15deg) rotateZ(2deg) translateY(-25px) translateX(-5px) scale(1.01);
                filter: drop-shadow(0 35px 70px rgba(0,0,0,0.5)) brightness(1.2) contrast(1.2) hue-rotate(30deg);
              }
              75% { 
                transform: perspective(1000px) rotateX(10deg) rotateY(-2deg) rotateZ(-0.5deg) translateY(-10px) translateX(12px) scale(1.04);
                filter: drop-shadow(0 28px 55px rgba(0,0,0,0.42)) brightness(1.12) contrast(1.12) hue-rotate(20deg);
              }
              100% { 
                transform: perspective(1000px) rotateX(5deg) rotateY(-10deg) rotateZ(1deg) translateY(0px) translateX(0px) scale(1);
                filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1) contrast(1.1) hue-rotate(0deg);
              }
            }

            .robot-math-float { animation: robotMathFloat 11s ease-in-out infinite; }
          `}</style>

          {/* Floating 3D Elements - Redesigned Layout */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top Row - Left to Right */}
            <div className="absolute top-8 left-8 md:top-12 md:left-16 lg:top-16 lg:left-24 book-float z-10">
              <div className="relative group">
                <img
                  src="/images/3d-book.jpg"
                  alt="3D Book representing AI Education"
                  className="w-16 h-20 md:w-20 md:h-28 lg:w-24 lg:h-32 object-cover rounded-lg shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* Top Center - Brain/Connection */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-8 lg:top-12 brain-pulse z-20">
              <div className="relative group">
                <img
                  src="/images/human-ai-connection.jpg"
                  alt="Human hand connecting with AI robotic hand - representing the fusion of human and artificial intelligence"
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-2xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-600/30 rounded-2xl"></div>

                {/* Neural connection effects */}
                <div
                  className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-blue-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-purple-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-2 w-2 h-2 bg-indigo-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.5s" }}
                ></div>

                {/* Connection lines */}
                <div className="absolute top-1/4 left-1/4 w-8 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent neural-glow transform rotate-45"></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-6 h-0.5 bg-gradient-to-l from-purple-400/60 to-transparent neural-glow transform -rotate-45"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Top Right - Robot Teaching */}
            <div className="absolute top-8 right-8 md:top-12 md:right-16 lg:top-16 lg:right-24 robot-teaching-float z-10">
              <div className="relative group">
                <img
                  src="/images/robot-teaching-woman.png"
                  alt="Robot teaching a woman on computer - representing AI education, human-robot collaboration, and accessible technology learning"
                  className="w-24 h-16 md:w-28 md:h-20 lg:w-36 lg:h-26 object-cover rounded-2xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.08) contrast(1.08)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-2xl"></div>

                {/* Educational glow effects */}
                <div
                  className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0.7s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -left-1 w-1 h-1 bg-indigo-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.2s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-purple-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.8s" }}
                ></div>

                {/* Educational indicators */}
                <div className="absolute -top-2 -left-2 text-blue-400 text-xs animate-pulse">🤖</div>
                <div
                  className="absolute -bottom-2 -right-2 text-cyan-400 text-xs animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  💻
                </div>
              </div>
            </div>

            {/* Middle Row - Left Side */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 md:left-8 lg:left-16 representative-float z-15">
              <div className="relative group">
                <img
                  src="/images/ai-fusion-representative.png"
                  alt="AI Fusion representative - Professional woman in green AI Fusion sweater representing approachable AI education and consulting services"
                  className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40 object-cover rounded-2xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.05) contrast(1.05)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-purple-600/20 rounded-2xl"></div>

                {/* Professional glow effects */}
                <div
                  className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-1 -right-1 w-1 h-1 bg-purple-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-pink-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </div>

            {/* New AI Brain Circuit - Center Right of Logo */}
            <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2 translate-x-8 ai-brain-pulse z-25">
              <div className="relative group">
                <div className="w-28 h-20 md:w-32 md:h-24 lg:w-40 lg:h-28 rounded-2xl overflow-hidden shadow-2xl transform transition-transform group-hover:scale-110 bg-gradient-to-br from-cyan-900/20 to-orange-900/20 backdrop-blur-sm border-2 border-cyan-400/30">
                  <img
                    src="/images/ai-brain-circuit.jpeg"
                    alt="3D AI Brain on Circuit Board - representing the fusion of human intelligence and artificial intelligence technology"
                    className="w-full h-full object-cover"
                    style={{
                      filter:
                        "drop-shadow(0 30px 60px rgba(0,255,255,0.4)) brightness(1.2) contrast(1.3) saturate(1.2)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-orange-400/10 rounded-2xl"></div>
                </div>

                {/* AI Brain glow effects */}
                <div
                  className="absolute -top-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-1 -right-2 w-2 h-2 bg-orange-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                  className="absolute -bottom-2 -left-1 w-2 h-2 bg-purple-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.2s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-2 w-3 h-3 bg-blue-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.8s" }}
                ></div>

                {/* Circuit connection lines */}
                <div className="absolute top-1/2 -left-12 w-12 h-1 bg-gradient-to-r from-cyan-400/60 to-transparent neural-glow"></div>
                <div className="absolute top-1/2 -right-12 w-12 h-1 bg-gradient-to-l from-orange-400/60 to-transparent neural-glow"></div>
                <div className="absolute -top-8 left-1/2 w-1 h-8 bg-gradient-to-b from-purple-400/60 to-transparent neural-glow"></div>
                <div className="absolute -bottom-8 left-1/2 w-1 h-8 bg-gradient-to-t from-blue-400/60 to-transparent neural-glow"></div>

                {/* AI indicators */}
                <div className="absolute -top-3 -left-3 text-cyan-400 text-sm animate-pulse">🧠</div>
                <div
                  className="absolute -bottom-3 -right-3 text-orange-400 text-sm animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  ⚡
                </div>
              </div>
            </div>

            {/* Middle Row - Right Side */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 md:right-8 lg:right-16 world-map-orbit z-15">
              <div className="relative group">
                <img
                  src="/images/interconnected-world.jpg"
                  alt="3D World Map with Interconnected Data Streams"
                  className="w-24 h-16 md:w-28 md:h-20 lg:w-36 lg:h-24 object-cover rounded-2xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-2xl"></div>

                {/* Data stream connection points */}
                <div
                  className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0.8s" }}
                ></div>
                <div
                  className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.2s" }}
                ></div>

                {/* Network indicators */}
                <div className="absolute -top-2 -left-2 text-cyan-400 text-xs animate-pulse">🌐</div>
                <div
                  className="absolute -bottom-2 -right-2 text-blue-400 text-xs animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  📡
                </div>
              </div>
            </div>

            {/* New Robot Teaching Math - moved up and further to the right */}
            <div className="absolute top-1/4 right-1/6 transform -translate-x-1/2 -translate-y-1/2 robot-math-float z-15">
              <div className="relative group">
                <div className="w-32 h-20 md:w-36 md:h-24 lg:w-44 lg:h-28 rounded-full overflow-hidden shadow-2xl transform transition-transform group-hover:scale-110 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border-2 border-white/20">
                  <img
                    src="/images/robot-teaching-math.jpg"
                    alt="Advanced AI robot teaching mathematics - representing AI education, machine learning, and intelligent tutoring systems"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1) contrast(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-full"></div>
                </div>

                {/* Mathematical glow effects */}
                <div
                  className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "0.8s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "1.4s" }}
                ></div>
                <div
                  className="absolute -bottom-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full neural-glow shadow-lg"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Mathematical symbols floating around */}
                <div className="absolute -top-3 -left-3 text-cyan-400 text-sm animate-pulse">∑</div>
                <div
                  className="absolute -top-3 -right-3 text-blue-400 text-sm animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  π
                </div>
                <div
                  className="absolute -bottom-3 -left-3 text-purple-400 text-sm animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  ∫
                </div>
                <div
                  className="absolute -bottom-3 -right-3 text-indigo-400 text-sm animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                >
                  √
                </div>

                {/* Connection lines */}
                <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent neural-glow"></div>
                <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-l from-blue-400/60 to-transparent neural-glow"></div>
              </div>
            </div>

            {/* Bottom Row - Left to Right */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 lg:bottom-16 lg:left-24 robot-dance z-10">
              <div className="relative group">
                <img
                  src="/images/3d-robot.jpg"
                  alt="3D Robot representing AI Innovation"
                  className="w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-28 object-cover rounded-xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl"></div>
                {/* Robot glow effects */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 lg:bottom-16 lg:right-24 laptop-float z-10">
              <div className="relative group">
                <img
                  src="/images/3d-laptop.jpg"
                  alt="3D Laptop representing AI Technology"
                  className="w-24 h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover rounded-lg shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent rounded-lg"></div>
                {/* Laptop screen glow effect */}
                <div className="absolute top-1 left-1 right-1 h-8 md:h-10 lg:h-12 bg-gradient-to-b from-blue-400/40 to-blue-600/40 rounded-t-md"></div>
              </div>
            </div>

            {/* Floating Icons - Positioned to avoid overlap */}
            <div className="absolute top-1/4 left-1/4 icon-sway z-5">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl">
                <Code className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
              </div>
            </div>

            <div className="absolute top-3/4 right-1/4 icon-float z-5">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/3 icon-bob z-5">
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-2xl">
                <Smartphone className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-white" />
              </div>
            </div>

            <div className="absolute top-1/6 right-2/3 icon-sway z-5" style={{ animationDelay: "1s" }}>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl">
                <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </div>

            <div className="absolute bottom-1/6 left-2/3 icon-float z-5" style={{ animationDelay: "2s" }}>
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-white/18 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl">
                <Store className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7 text-white" />
              </div>
            </div>

            {/* Enhanced Sparkle Elements - Positioned to avoid overlap */}
            <div
              className="absolute top-1/5 right-1/5 text-white/60 text-lg md:text-xl lg:text-2xl sparkle-move z-5"
              style={{ animationDelay: "1.5s" }}
            >
              ✨
            </div>
            <div
              className="absolute bottom-1/5 left-1/5 text-white/60 text-base md:text-lg lg:text-xl sparkle-move z-5"
              style={{ animationDelay: "2.5s" }}
            >
              ⭐
            </div>
            <div
              className="absolute top-2/3 right-1/6 text-white/60 text-sm md:text-base lg:text-lg sparkle-move z-5"
              style={{ animationDelay: "0.8s" }}
            >
              💫
            </div>
            <div
              className="absolute top-1/8 left-3/5 text-white/60 text-base md:text-lg lg:text-xl sparkle-move z-5"
              style={{ animationDelay: "3s" }}
            >
              🌟
            </div>
            <div
              className="absolute bottom-2/5 right-1/8 text-white/60 text-base md:text-lg lg:text-xl sparkle-move z-5"
              style={{ animationDelay: "4s" }}
            >
              ⚡
            </div>
            <div
              className="absolute top-3/5 right-3/5 text-white/60 text-base md:text-lg lg:text-xl sparkle-move z-5"
              style={{ animationDelay: "1s" }}
            >
              💎
            </div>
            <div
              className="absolute bottom-1/4 left-3/5 text-white/60 text-sm md:text-base lg:text-lg sparkle-move z-5"
              style={{ animationDelay: "2s" }}
            >
              🧠
            </div>
            <div
              className="absolute top-4/5 left-1/8 text-white/60 text-sm md:text-base lg:text-lg sparkle-move z-5"
              style={{ animationDelay: "3.5s" }}
            >
              🌐
            </div>
          </div>

          {/* Central Content */}
          <div className="container px-4 md:px-6 max-w-4xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Circular Logo Container */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-2xl animate-logo-glow p-3">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm flex items-center justify-center shadow-inner animate-logo-inner-glow p-2">
                    <AIFusionLogo className="h-full w-full" circular={true} />
                  </div>
                </div>

                {/* Enhanced Orbital Elements around logo */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-white/40 rounded-full shadow-lg orbital-spin"></div>
                <div
                  className="absolute -bottom-3 -left-3 w-4 h-4 bg-white/35 rounded-full shadow-lg orbital-spin"
                  style={{ animationDirection: "reverse", animationDuration: "10s" }}
                ></div>
                <div
                  className="absolute top-1/2 -left-4 w-3 h-3 bg-white/30 rounded-full shadow-lg orbital-spin"
                  style={{ animationDuration: "15s", animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-4 w-4 h-4 bg-white/32 rounded-full shadow-lg orbital-spin"
                  style={{ animationDirection: "reverse", animationDuration: "8s", animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/25 rounded-full shadow-lg orbital-spin"
                  style={{ animationDuration: "12s", animationDelay: "3s" }}
                ></div>
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white/28 rounded-full shadow-lg orbital-spin"
                  style={{ animationDirection: "reverse", animationDuration: "14s", animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Welcome Message */}
              <div className="space-y-4 animate-text-slide-up" style={{ animationDelay: "0.5s" }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                  Welcome to AI Fusion
                </h1>
              </div>

              {/* Slogan */}
              <div className="animate-text-slide-up" style={{ animationDelay: "1s" }}>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                  AI made simple, Innovation for everyone
                </p>
              </div>

              {/* Subheading */}
              <div className="animate-text-slide-up" style={{ animationDelay: "1.2s" }}>
                <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-center">
                  Personalized AI training for individuals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-navy-950 via-purple-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="/images/feedback-on-iphone.png"
                  alt="AI Fusion customer testimonials displayed on iPhone showing 5-star reviews and positive feedback from satisfied clients about AI training sessions"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 md:py-20 bg-navy-950">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-2xl mx-auto">
                <video autoPlay loop muted playsInline className="w-full h-auto rounded-2xl shadow-2xl">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donna%20in%20Office%20with%20AI%20Robot-4HdIp608uMbh4ULSB3Uck113NKNqAE.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-background.jpg"
              alt="AI technology background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container px-4 md:px-6 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
                AI made simple.
                <span className="block mt-2">Innovation for Everyone.</span>
              </h1>
              <div className="max-w-4xl space-y-6">
                {/* Updated Paragraph */}
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  At AI Fusion, our mission is to empower individuals with practical, hands-on AI knowledge. We deliver
                  accessible, in-person and Online training and share bite-sized tips and tutorials across social media
                  to help everyday people confidently adopt AI tools and transform the way they work, create, and grow.
                </p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/images/diverse-team.jpg"
                  alt="Diverse team working with AI technology"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img src="/images/ai-education.jpg" alt="AI education workshop" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-navy-975">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                  AI Fusion: Bridging Technology and Innovation
                </h2>
                <p className="text-xl text-gray-200">
                  Based in Ireland, AI Fusion is dedicated to making artificial intelligence accessible to all. We
                  believe that AI technology should be available to everyone, regardless of technical background.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full">
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-sm">
                    <img src="/images/ai-fusion-team.jpg" alt="AI Fusion team" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-navy-900 p-6 rounded-2xl border border-navy-800">
                <h3 className="text-xl font-medium mb-2 text-white">Our Mission</h3>
                <p className="text-gray-200">
                  To simplify AI adoption and empower organizations to thrive in the digital age.
                </p>
              </div>
              <div className="bg-purple-800 p-6 rounded-2xl border border-purple-600">
                <h3 className="text-xl font-medium mb-2 text-white">Our Vision</h3>
                <p className="text-gray-200">A world where AI technology is accessible and beneficial to everyone.</p>
              </div>
              <div className="bg-navy-900 p-6 rounded-2xl border border-navy-800">
                <h3 className="text-xl font-medium mb-2 text-white">Our Values</h3>
                <p className="text-gray-200">Innovation, accessibility, education, and community empowerment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800 bg-navy-975 py-12">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <AIFusionTextLogo className="h-12" showText={true} />
          </div>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} AI Fusion. All rights reserved.</p>
          <div className="flex gap-6">
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
      </footer>

      {/* Pricing Dialog */}
      <PricingDialog isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
      {/* Contact Dialog */}
      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
    </div>
  )
}
