"use client"

import { useEffect, useState } from "react"
import SiteHeader from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Fuel, 
  TrendingDown, 
  MapPin, 
  Clock, 
  PiggyBank, 
  Bell, 
  Users, 
  Star,
  ExternalLink,
  Droplets,
  Flame,
  Loader2
} from "lucide-react"

interface FuelPrice {
  id: number
  fuelType: string
  currency: string
  pricePerLitre: number
  stationName: string
  address: string
  town: string
  county: string
  postcode?: string
  reportedAt: string
  updatedAt: string | null
}

interface ProcessedPrices {
  diesel: { lowest: FuelPrice | null; highest: FuelPrice | null; prices: FuelPrice[] }
  petrol: { lowest: FuelPrice | null; highest: FuelPrice | null; prices: FuelPrice[] }
  heatingOil: { lowest: FuelPrice | null; highest: FuelPrice | null; prices: FuelPrice[] }
}

export default function FuelPricesDonegalPage() {
  const [prices, setPrices] = useState<ProcessedPrices | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>("")

  useEffect(() => {
    async function fetchPrices() {
      try {
        // Fetch each fuel type separately with filtered queries to get all EUR prices
        const [dieselRes, petrolRes, heatingOilRes] = await Promise.all([
          fetch("https://fuel-the-gap.replit.app/api/prices?currency=EUR&fuelType=diesel"),
          fetch("https://fuel-the-gap.replit.app/api/prices?currency=EUR&fuelType=petrol"),
          fetch("https://fuel-the-gap.replit.app/api/prices?currency=EUR&fuelType=home_heating_oil")
        ])
        
        if (!dieselRes.ok || !petrolRes.ok || !heatingOilRes.ok) {
          throw new Error("Failed to fetch prices")
        }
        
        const diesel: FuelPrice[] = await dieselRes.json()
        const petrol: FuelPrice[] = await petrolRes.json()
        const heatingOil: FuelPrice[] = await heatingOilRes.json()
        
        // Combine all data for date calculation
        const allData = [...diesel, ...petrol, ...heatingOil]

        const getLowestHighest = (arr: FuelPrice[]) => {
          if (arr.length === 0) return { lowest: null, highest: null, prices: arr }
          const sorted = [...arr].sort((a, b) => a.pricePerLitre - b.pricePerLitre)
          return { 
            lowest: sorted[0], 
            highest: sorted[sorted.length - 1],
            prices: arr
          }
        }

        setPrices({
          diesel: getLowestHighest(diesel),
          petrol: getLowestHighest(petrol),
          heatingOil: getLowestHighest(heatingOil)
        })

        // Find the most recent update
        const allDates = allData
          .map(p => new Date(p.updatedAt || p.reportedAt))
          .filter(d => !isNaN(d.getTime()))
        
        if (allDates.length > 0) {
          const mostRecent = new Date(Math.max(...allDates.map(d => d.getTime())))
          setLastUpdated(mostRecent.toLocaleDateString('en-IE', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }))
        }
      } catch (err) {
        setError("Unable to load live prices. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
  }, [])

  const formatPrice = (priceInCents: number) => {
    return `€${(priceInCents / 1000).toFixed(2)}`
  }

  

  return (
    <div className="min-h-screen bg-navy-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-950 to-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
            Live Prices from Fuel the Gap
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Cheapest Fuel Prices in Donegal Today
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Diesel, Petrol &amp; Heating Oil
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Fuel prices vary across Donegal. Save <strong className="text-green-400">€5–€15 per fill</strong> by checking before you buy.
          </p>
          {lastUpdated && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Clock className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          )}
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-red-400 font-semibold">Don&apos;t fill up before checking!</p>
          </div>
        </div>
      </section>

      {/* Fuel Price Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Current Fuel Prices in Donegal
          </h2>
          
          
          
          
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-green-400 animate-spin" />
              <span className="ml-3 text-gray-400">Loading live prices...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="https://fuel-the-gap.replit.app/" target="_blank">
                  View prices on Fuel the Gap
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Diesel */}
              <Card className="bg-navy-900 border-navy-700">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
                    <Fuel className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">Diesel</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {prices?.diesel.lowest ? (
                    <div>
                      <p className="text-sm text-gray-400">Lowest Price</p>
                      <p className="text-2xl font-bold text-green-400">
                        {formatPrice(prices.diesel.lowest.pricePerLitre)}/L
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {prices.diesel.lowest.stationName}, {prices.diesel.lowest.town}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500">No diesel prices available</p>
                  )}
                </CardContent>
              </Card>

              {/* Petrol */}
              <Card className="bg-navy-900 border-navy-700">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <Droplets className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Petrol</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {prices?.petrol.lowest ? (
                    <div>
                      <p className="text-sm text-gray-400">Lowest Price</p>
                      <p className="text-2xl font-bold text-green-400">
                        {formatPrice(prices.petrol.lowest.pricePerLitre)}/L
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {prices.petrol.lowest.stationName}, {prices.petrol.lowest.town}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500">No petrol prices reported yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Heating Oil */}
              <Card className="bg-navy-900 border-navy-700">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                    <Flame className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-white">Heating Oil</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {prices?.heatingOil.lowest ? (
                    <div>
                      <p className="text-sm text-gray-400">Lowest Price (per litre)</p>
                      <p className="text-2xl font-bold text-green-400">
                        {formatPrice(prices.heatingOil.lowest.pricePerLitre)}/L
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {prices.heatingOil.lowest.stationName}, {prices.heatingOil.lowest.town}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500">No heating oil prices reported yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* View all prices link */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
              <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Prices on Fuel the Gap
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Real-World Savings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-navy-900 border-green-500/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <PiggyBank className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Per Fill Savings</h3>
                    <p className="text-gray-400 mb-3">
                      With a 60L tank and 10c per litre savings:
                    </p>
                    <p className="text-3xl font-bold text-green-400">€6.00 saved</p>
                    <p className="text-sm text-gray-500 mt-1">Every time you fill up</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-900 border-green-500/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Annual Savings</h3>
                    <p className="text-gray-400 mb-3">
                      Filling up weekly at the cheapest station:
                    </p>
                    <p className="text-3xl font-bold text-green-400">€312+ saved</p>
                    <p className="text-sm text-gray-500 mt-1">That&apos;s money back in your pocket</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* App Promotion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/30 to-navy-950">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
            Free App
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Download Fuel the Gap
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            The free app for finding the cheapest fuel prices in Donegal and Derry. Community-powered, always up-to-date.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-navy-900/80 rounded-lg p-4 border border-navy-700">
              <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Find cheapest fuel nearby</p>
            </div>
            <div className="bg-navy-900/80 rounded-lg p-4 border border-navy-700">
              <TrendingDown className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Compare prices instantly</p>
            </div>
            <div className="bg-navy-900/80 rounded-lg p-4 border border-navy-700">
              <Flame className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Track heating oil prices</p>
            </div>
            <div className="bg-navy-900/80 rounded-lg p-4 border border-navy-700">
              <PiggyBank className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">See savings per litre</p>
            </div>
            <div className="bg-navy-900/80 rounded-lg p-4 border border-navy-700">
              <Bell className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Get price alerts</p>
            </div>
            <div className="bg-navy-900/80 rounded-lg p-4 border border-navy-700">
              <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Real-time updates</p>
            </div>
          </div>

          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 max-w-md mx-auto mb-8">
            <p className="text-green-400 font-semibold">Check before every fill!</p>
          </div>

          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Launch Fuel the Gap
            </Link>
          </Button>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="pt-6 text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Favourite Stations</h3>
                <p className="text-gray-400 text-sm">Save your go-to stations for quick access</p>
              </CardContent>
            </Card>
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="pt-6 text-center">
                <Bell className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Price Alerts</h3>
                <p className="text-gray-400 text-sm">Get notified when prices go up or down</p>
              </CardContent>
            </Card>
            <Card className="bg-navy-900 border-navy-700">
              <CardContent className="pt-6 text-center">
                <TrendingDown className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Never Overpay</h3>
                <p className="text-gray-400 text-sm">Always know when to fill up</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Help Your Community
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Fuel the Gap relies on people like you sharing prices. It only takes a few seconds to submit a price and help others save money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
                Submit a Price
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-navy-800">
              <Link href="/fuel-the-gap">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Do Fuel Prices Vary?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400 text-sm">Rural stations often have higher prices due to lower footfall and higher overheads.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Competition</h3>
                <p className="text-gray-400 text-sm">Areas with more stations tend to have lower prices as they compete for customers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                <Fuel className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Delivery Costs</h3>
                <p className="text-gray-400 text-sm">Fuel delivery to remote areas costs more, which gets passed on to customers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                <PiggyBank className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Currency Differences</h3>
                <p className="text-gray-400 text-sm">EUR vs GBP exchange rates can make cross-border fuel shopping worthwhile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 to-green-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Saving Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Bookmark this page or download the app. Make it a habit: <strong className="text-green-400">check before you fill up</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="https://fuel-the-gap.replit.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Open Fuel the Gap
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-navy-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-white mb-4">About Fuel the Gap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Fuel the Gap is a local app built for Donegal and Derry communities. Our mission is simple: help people save money on fuel by providing real-time, crowd-sourced price information.
          </p>
          <p className="text-gray-500 text-sm">
            Built by <Link href="/" className="text-green-400 hover:underline">AI Fusion Ireland</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
