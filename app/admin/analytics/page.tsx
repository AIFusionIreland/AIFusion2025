"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SiteHeader from "@/components/site-header"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Eye, Users, MousePointer, TrendingUp, RefreshCw } from "lucide-react"

interface AnalyticsData {
  totalEvents: number
  pageViews: number
  uniqueVisitors: number
  topPages: { page: string; count: number }[]
  eventsByHour: { hour: number; count: number }[]
  recentEvents: any[]
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (startDate) params.append("startDate", startDate)
      if (endDate) params.append("endDate", endDate)

      const response = await fetch(`/api/analytics?${params}`, {
        headers: {
          Authorization: "Bearer admin-secret-key",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch analytics")
      }

      const analyticsData = await response.json()
      setData(analyticsData)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-975">
        <SiteHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-2 text-white">Loading analytics...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-navy-975">
        <SiteHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-400">
            <p>Error loading analytics: {error}</p>
            <Button onClick={fetchAnalytics} className="mt-4">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-975">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Website Analytics</h1>
          <Button onClick={fetchAnalytics} className="bg-purple-600 hover:bg-purple-700">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-navy-900 border-navy-800">
          <CardHeader>
            <CardTitle className="text-white">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="startDate" className="text-gray-200">
                  Start Date
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-navy-800 border-navy-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="endDate" className="text-gray-200">
                  End Date
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-navy-800 border-navy-700 text-white"
                />
              </div>
              <div className="flex items-end">
                <Button onClick={fetchAnalytics} className="bg-blue-600 hover:bg-blue-700">
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-navy-900 border-navy-800">
            <CardContent className="p-6">
              <div className="flex items-center">
                <MousePointer className="h-8 w-8 text-blue-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Total Events</p>
                  <p className="text-2xl font-bold text-white">{data?.totalEvents || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-navy-900 border-navy-800">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-green-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Page Views</p>
                  <p className="text-2xl font-bold text-white">{data?.pageViews || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-navy-900 border-navy-800">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Unique Visitors</p>
                  <p className="text-2xl font-bold text-white">{data?.uniqueVisitors || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-navy-900 border-navy-800">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-orange-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Avg. per Hour</p>
                  <p className="text-2xl font-bold text-white">
                    {data?.eventsByHour ? Math.round(data.totalEvents / 24) : 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <Card className="bg-navy-900 border-navy-800">
            <CardHeader>
              <CardTitle className="text-white">Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data?.topPages || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="page" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      color: "#F9FAFB",
                    }}
                  />
                  <Bar dataKey="count" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Traffic by Hour */}
          <Card className="bg-navy-900 border-navy-800">
            <CardHeader>
              <CardTitle className="text-white">Traffic by Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data?.eventsByHour || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      color: "#F9FAFB",
                    }}
                  />
                  <Line type="monotone" dataKey="count" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Events */}
        <Card className="bg-navy-900 border-navy-800">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data?.recentEvents?.slice(0, 10).map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-navy-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{event.event}</p>
                    <p className="text-gray-400 text-sm">{event.page}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{new Date(event.timestamp).toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">{event.ip}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
