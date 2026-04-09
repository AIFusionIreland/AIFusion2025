"use client"

import SiteHeader from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Fuel } from "lucide-react"
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

      {/* Apps Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fuel the Gap App */}
            <Card className="bg-navy-900 border-navy-700 hover:border-green-500 transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-navy-800 flex items-center justify-center">
                    <Image
                      src="/images/fuel-the-gap-logo.jpeg"
                      alt="Fuel the Gap Logo"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Live
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-green-400 transition-colors">
                  Fuel the Gap
                </CardTitle>
                <CardDescription className="text-gray-400">Community App</CardDescription>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
