"use client"

import type React from "react"
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
    setIsEnrollDialogOpen(false)
    setIsContactDialogOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy-975">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-purple-950">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 to-purple-800/20"></div>

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

            @keyframes teachingFloat {
              0% { transform: perspective(1000px) rotateX(8deg) rotateY(10deg) translateY(0px) translateX(0px); }
              33% { transform: perspective(1000px) rotateX(12deg) rotateY(5deg) translateY(-18px) translateX(10px); }
              66% { transform: perspective(1000px) rotateX(4deg) rotateY(15deg) translateY(-8px) translateX(-8px); }
              100% { transform: perspective(1000px) rotateX(8deg) rotateY(10deg) translateY(0px) translateX(0px); }
            }
            
            @keyframes mathFloat {
              0% { transform: perspective(1000px) rotateX(-5deg) rotateY(-12deg) translateY(0px) translateX(0px) rotateZ(0deg); }
              30% { transform: perspective(1000px) rotateX(2deg) rotateY(-8deg) translateY(-15px) translateX(-12px) rotateZ(2deg); }
              60% { transform: perspective(1000px) rotateX(-8deg) rotateY(-18deg) translateY(-22px) translateX(8px) rotateZ(-1deg); }
              100% { transform: perspective(1000px) rotateX(-5deg) rotateY(-12deg) translateY(0px) translateX(0px) rotateZ(0deg); }
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
            .teaching-float { animation: teachingFloat 6.5s ease-in-out infinite; }
            .math-float { animation: mathFloat 7.5s ease-in-out infinite; }
          `}</style>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

            <div className="absolute top-8 right-8 md:top-12 md:right-16 lg:top-16 lg:right-24 brain-pulse z-10">
              <div className="relative group">
                <img
                  src="/images/ai-brain-circuit.jpeg"
                  alt="AI Brain Circuit representing AI Intelligence"
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full"></div>
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
              </div>
            </div>

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
              </div>
            </div>

            <div className="absolute top-1/3 left-1/4 md:left-1/3 teaching-float z-10 hidden md:block">
              <div className="relative group">
                <img
                  src="/images/robot-teaching-woman.png"
                  alt="Robot teaching woman representing AI Education"
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            <div className="absolute top-2/3 right-1/4 md:right-1/3 math-float z-10 hidden md:block">
              <div className="relative group">
                <img
                  src="/images/robot-teaching-math.jpg"
                  alt="Robot teaching math representing AI Learning"
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-xl shadow-2xl transform transition-transform group-hover:scale-110"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          <div className="container px-4 md:px-6 max-w-4xl relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-2xl animate-logo-glow p-3">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm flex items-center justify-center shadow-inner animate-logo-inner-glow p-2">
                    <AIFusionLogo className="h-full w-full" circular={true} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 animate-text-slide-up" style={{ animationDelay: "0.5s" }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                  Welcome to AI Fusion
                </h1>
              </div>

              <div className="animate-text-slide-up" style={{ animationDelay: "1s" }}>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                  AI made simple, Innovation for everyone
                </p>
              </div>

              <div className="animate-text-slide-up" style={{ animationDelay: "1.2s" }}>
                <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-center">
                  Personalized AI training for individuals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stan Store CTA Section - Below 3D Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-purple-950 via-navy-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="bg-gradient-to-br from-purple-900/40 to-navy-900/40 backdrop-blur-md border-2 border-purple-500/30 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started Today</h2>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Book a <span className="font-bold text-purple-300">FREE 15-minute consultation</span> with me or
                download my <span className="font-bold text-purple-300">FREE guides</span> to kickstart your AI journey
              </p>
              <a
                href="https://stan.store/AIFusion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
              >
                Visit My Stan Store
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-navy-950 via-purple-950 to-navy-900">
          <div className="container px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="/images/feedback-on-iphone.png"
                  alt="AI Fusion customer testimonials displayed on iPhone"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

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
              <div className="flex justify-center">
                <div className="relative w-full">
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-sm">
                    <img src="/images/ai-fusion-team.jpg" alt="AI Fusion team" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

      <PricingDialog isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />
    </div>
  )
}
