"use client"

import SiteHeader from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Fuel, TrendingDown, MapPin, Bell, Users, Heart, Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function FuelTheGapPage() {
  const currentDate = new Date().toLocaleDateString('en-IE', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-navy-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-950 to-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Image
              src="/images/fuel-the-gap-logo.jpeg"
              alt="Fuel the Gap Logo"
              width={120}
              height={120}
              className="mx-auto rounded-2xl"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            Cheapest Fuel Prices in Donegal Today
            <span className="block text-2xl md:text-3xl text-green-400 mt-2">(Diesel, Petrol &amp; Heating Oil)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Fuel prices vary across Donegal by up to 10-15c per litre. Check before you fill up and 
            <strong className="text-green-400"> save €5–€15 every time</strong> you top up.
          </p>
          <p className="text-sm text-gray-400 mb-6">Last Updated: {currentDate}</p>
          <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-red-300 font-semibold text-lg">Don&apos;t fill up before checking!</p>
          </div>
        </div>
      </section>

      {/* Fuel Prices Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Current Fuel Prices in Donegal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Diesel */}
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="p-6 text-center">
                <Fuel className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Diesel</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Lowest Price</span>
                    <span className="text-green-400 font-bold text-lg">€1.45/L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Highest Price</span>
                    <span className="text-red-400 font-bold text-lg">€1.59/L</span>
                  </div>
                  <div className="pt-3 border-t border-navy-700">
                    <p className="text-green-400 font-semibold">Save up to 14c/L</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Petrol */}
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="p-6 text-center">
                <Fuel className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Petrol</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Lowest Price</span>
                    <span className="text-green-400 font-bold text-lg">€1.52/L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Highest Price</span>
                    <span className="text-red-400 font-bold text-lg">€1.68/L</span>
                  </div>
                  <div className="pt-3 border-t border-navy-700">
                    <p className="text-green-400 font-semibold">Save up to 16c/L</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heating Oil */}
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="p-6 text-center">
                <Fuel className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Heating Oil</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Lowest (500L)</span>
                    <span className="text-green-400 font-bold text-lg">€380</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Highest (500L)</span>
                    <span className="text-red-400 font-bold text-lg">€450</span>
                  </div>
                  <div className="pt-3 border-t border-navy-700">
                    <p className="text-green-400 font-semibold">Save up to €70</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            *Prices are crowd-sourced and updated regularly by local users
          </p>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            How Much Can You Save?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-navy-900 border-green-500/30">
              <CardContent className="p-6">
                <TrendingDown className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Per Fill Savings</h3>
                <p className="text-gray-300 mb-4">
                  On a typical <strong className="text-white">60 litre tank</strong>, saving just 
                  <strong className="text-green-400"> 5-10c per litre</strong> means:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <strong className="text-green-400">€3 - €6 saved</strong> per fill
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    That&apos;s a free coffee every time!
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-navy-900 border-green-500/30">
              <CardContent className="p-6">
                <TrendingDown className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Annual Savings</h3>
                <p className="text-gray-300 mb-4">
                  If you fill up <strong className="text-white">once a week</strong>, your yearly savings add up:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <strong className="text-green-400">€156 - €312 per year</strong>
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Just by checking prices first!
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donegal vs Derry Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Donegal vs Derry: Where&apos;s Fuel Cheaper?
          </h2>
          <Card className="bg-navy-900 border-navy-700">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Donegal (EUR)</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">€1.45 - €1.59</p>
                  <p className="text-gray-400 text-sm">Average diesel price</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Derry (GBP)</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-2">£1.35 - £1.45</p>
                  <p className="text-gray-400 text-sm">Average diesel price</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-navy-800 rounded-lg">
                <p className="text-gray-300 text-center">
                  <strong className="text-white">Currency matters!</strong> With exchange rates fluctuating, 
                  sometimes Derry is cheaper, sometimes Donegal. Use Fuel the Gap to compare 
                  <strong className="text-green-400"> real prices in real-time</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/30 to-navy-950">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">Free App</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Download Fuel the Gap
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            The easiest way to find cheap fuel prices Donegal and Derry. 
            Crowd-sourced, community-driven, and completely free.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-700">
              <MapPin className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Find cheapest fuel nearby</p>
            </div>
            <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-700">
              <TrendingDown className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Compare prices instantly</p>
            </div>
            <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-700">
              <Fuel className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Track heating oil prices</p>
            </div>
            <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-700">
              <TrendingDown className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">See savings per litre</p>
            </div>
            <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-700">
              <Bell className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Get price change alerts</p>
            </div>
            <div className="bg-navy-900/80 p-4 rounded-lg border border-navy-700">
              <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Community updates</p>
            </div>
          </div>

          <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4 max-w-md mx-auto mb-8">
            <p className="text-green-300 font-semibold">Check before every fill!</p>
          </div>

          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Launch App Now
            </Link>
          </Button>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            New Features Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Favourite Stations</h3>
                <p className="text-gray-400 text-sm">Save your regular stations and see their prices at a glance</p>
              </CardContent>
            </Card>
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="p-6 text-center">
                <Bell className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Price Alerts</h3>
                <p className="text-gray-400 text-sm">Get notified when prices go up or down at your favourite stations</p>
              </CardContent>
            </Card>
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="p-6 text-center">
                <TrendingDown className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Never Overpay</h3>
                <p className="text-gray-400 text-sm">Stop paying more than you need to for fuel</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="w-12 h-12 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Help Your Community Save Money
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Fuel the Gap works because of people like you. When you spot a price, 
            <strong className="text-green-400"> submit it in seconds</strong> and help others save money too.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">10 sec</p>
              <p className="text-gray-400 text-sm">To submit a price</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">100s</p>
              <p className="text-gray-400 text-sm">Of local users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">€1000s</p>
              <p className="text-gray-400 text-sm">Saved collectively</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Prices Vary Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Info className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why Do Fuel Prices Vary So Much?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-900 p-6 rounded-lg border border-navy-700">
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">Rural stations often charge more due to lower footfall and higher operating costs</p>
            </div>
            <div className="bg-navy-900 p-6 rounded-lg border border-navy-700">
              <h3 className="text-lg font-bold text-white mb-2">Competition</h3>
              <p className="text-gray-400">Areas with multiple stations tend to have lower prices as they compete for customers</p>
            </div>
            <div className="bg-navy-900 p-6 rounded-lg border border-navy-700">
              <h3 className="text-lg font-bold text-white mb-2">Delivery Costs</h3>
              <p className="text-gray-400">Stations further from distribution centres face higher delivery charges</p>
            </div>
            <div className="bg-navy-900 p-6 rounded-lg border border-navy-700">
              <h3 className="text-lg font-bold text-white mb-2">Currency Differences</h3>
              <p className="text-gray-400">Cross-border shopping between EUR and GBP can offer savings depending on exchange rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Watch How It Works</h2>
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

            {/* TikTok Video 3 */}
            <Link 
              href="https://vm.tiktok.com/ZNR457DH1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block group relative aspect-[9/16] bg-navy-800 rounded-lg overflow-hidden border border-navy-700 hover:border-green-500 transition-all duration-300"
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
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Start Saving on Fuel Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Bookmark this page or download the app. Make it a habit: 
            <strong className="text-green-400"> check before you fill up</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Launch Fuel the Gap
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900/50 border-t border-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-4">About Fuel the Gap</h2>
          <p className="text-gray-400 mb-4">
            Fuel the Gap is a local app built specifically for people in Donegal and Derry. 
            Our mission is simple: help you find the cheapest fuel prices and save money every time you fill up.
          </p>
          <p className="text-gray-500 text-sm">
            Created by <Link href="/" className="text-green-400 hover:text-green-300">AI Fusion</Link> | 
            Launched April 2026
          </p>
        </div>
      </section>
    </div>
  )
}
