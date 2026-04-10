"use client"

import SiteHeader from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-950 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Apps</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the innovative applications AI Fusion has built to help businesses and communities thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* Fuel the Gap App */}
          <Card className="bg-navy-900 border-navy-700 hover:border-green-500 transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-32 h-32 rounded-xl overflow-hidden bg-navy-800 flex items-center justify-center mb-4">
                    <Image
                      src="/images/fuel-the-gap-logo.jpeg"
                      alt="Fuel the Gap Logo"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Live
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-green-400 transition-colors text-center">
                  Fuel the Gap
                </CardTitle>
                <CardDescription className="text-gray-400 text-center">Community App</CardDescription>
                <p className="text-sm text-gray-500 text-center mt-2">Launched April 2026</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A crowd-sourced app for local fuel prices in Derry and Donegal.
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Fuel the Gap empowers local communities to share and discover the best fuel prices in the Derry and Donegal region. Users can contribute real-time price updates, helping everyone save money at the pump.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-navy-800 text-gray-300 text-xs">
                    Crowd-Sourced
                  </Badge>
                  <Badge variant="secondary" className="bg-navy-800 text-gray-300 text-xs">
                    Fuel Prices
                  </Badge>
                  <Badge variant="secondary" className="bg-navy-800 text-gray-300 text-xs">
                    Derry
                  </Badge>
                  <Badge variant="secondary" className="bg-navy-800 text-gray-300 text-xs">
                    Donegal
                  </Badge>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">Key Features:</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      Real-time fuel price updates
                    </li>
                    <li className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      Community-driven data
                    </li>
                    <li className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      Coverage across Derry & Donegal
                    </li>
                    <li className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      Find the cheapest fuel near you
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-navy-700">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Launch App
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          {/* Video Thumbnails Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Watch Videos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* TikTok Video 1 */}
              <Link 
                href="https://vm.tiktok.com/ZNR4Bft87/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] bg-navy-800 rounded-lg overflow-hidden border border-navy-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
                  <Image
                    src="/images/fuel-the-gap-logo.jpeg"
                    alt="Fuel the Gap Video"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-600/90 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <Badge className="bg-black/60 text-white text-xs">TikTok</Badge>
                </div>
              </Link>

              {/* TikTok Video 2 */}
              <Link 
                href="https://vm.tiktok.com/ZNR45G9rU/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] bg-navy-800 rounded-lg overflow-hidden border border-navy-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
                  <Image
                    src="/images/fuel-the-gap-logo.jpeg"
                    alt="Fuel the Gap Video"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-600/90 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <Badge className="bg-black/60 text-white text-xs">TikTok</Badge>
                </div>
              </Link>
              <div className="hidden sm:flex aspect-[9/16] bg-navy-800/50 rounded-lg border border-dashed border-navy-700 items-center justify-center">
                <span className="text-gray-500 text-sm">More coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
