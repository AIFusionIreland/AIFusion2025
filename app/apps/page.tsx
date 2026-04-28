"use client"

import SiteHeader from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
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

      {/* Apps Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fuel the Gap App Card */}
            <Link href="/fuel-the-gap" className="group">
              <Card className="bg-navy-900 border-navy-700 hover:border-green-500 transition-all duration-300 overflow-hidden h-full">
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
                  <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Placeholder for future apps */}
            <div className="bg-navy-900/50 border border-dashed border-navy-700 rounded-lg flex items-center justify-center p-8">
              <p className="text-gray-500 text-center">More apps coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
