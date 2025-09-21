"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BackToHomeButton } from "@/components/back-to-home-button"
import { Calendar, Clock, Mail, Send, Trash2, Users, BarChart3, TrendingUp } from "lucide-react"

interface Schedule {
  id: string
  type: "weekly" | "monthly"
  recipients: string[]
  dayOfWeek?: number
  dayOfMonth?: number
  hour: number
  minute: number
  active: boolean
  createdAt: string
  lastRun?: string
  nextRun?: string
}

interface ReportData {
  current: {
    pageViews: number
    uniqueVisitors: number
    totalEvents: number
    topPages: Array<{ path: string; views: number }>
  }
  previous: {
    pageViews: number
    uniqueVisitors: number
    totalEvents: number
  }
  period: {
    start: string
    end: string
    type: string
  }
}

const ADMIN_SECRET = "aifusion2024admin"

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default function AnalyticsReportsPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [reportData, setReportData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Form state
  const [formData, setFormData] = useState({
    type: "weekly" as "weekly" | "monthly",
    recipients: "",
    dayOfWeek: 1, // Monday
    dayOfMonth: 1,
    hour: 9,
    minute: 0,
  })

  useEffect(() => {
    fetchSchedules()
    fetchReportPreview("weekly")
  }, [])

  const fetchSchedules = async () => {
    try {
      const response = await fetch("/api/analytics/schedule", {
        headers: {
          "x-admin-secret": ADMIN_SECRET,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setSchedules(data.schedules || [])
      }
    } catch (error) {
      console.error("Error fetching schedules:", error)
    }
  }

  const fetchReportPreview = async (type: "weekly" | "monthly") => {
    try {
      const response = await fetch(`/api/analytics/reports?type=${type}`, {
        headers: {
          "x-admin-secret": ADMIN_SECRET,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setReportData(data.data)
      }
    } catch (error) {
      console.error("Error fetching report preview:", error)
    }
  }

  const createSchedule = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const recipients = formData.recipients
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean)

      if (recipients.length === 0) {
        setError("Please enter at least one email address")
        return
      }

      const response = await fetch("/api/analytics/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": ADMIN_SECRET,
        },
        body: JSON.stringify({
          type: formData.type,
          recipients,
          dayOfWeek: formData.type === "weekly" ? formData.dayOfWeek : undefined,
          dayOfMonth: formData.type === "monthly" ? formData.dayOfMonth : undefined,
          hour: formData.hour,
          minute: formData.minute,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess("Schedule created successfully!")
        setFormData({
          type: "weekly",
          recipients: "",
          dayOfWeek: 1,
          dayOfMonth: 1,
          hour: 9,
          minute: 0,
        })
        fetchSchedules()
      } else {
        setError(data.error || "Failed to create schedule")
      }
    } catch (error) {
      setError("An error occurred while creating the schedule")
    } finally {
      setLoading(false)
    }
  }

  const deleteSchedule = async (id: string) => {
    if (!confirm("Are you sure you want to delete this schedule?")) return

    try {
      const response = await fetch(`/api/analytics/schedule?id=${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-secret": ADMIN_SECRET,
        },
      })

      if (response.ok) {
        setSuccess("Schedule deleted successfully!")
        fetchSchedules()
      } else {
        const data = await response.json()
        setError(data.error || "Failed to delete schedule")
      }
    } catch (error) {
      setError("An error occurred while deleting the schedule")
    }
  }

  const sendReport = async (type: "weekly" | "monthly") => {
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const recipients = ["info@aifusion.ie"] // Default recipient

      const response = await fetch("/api/analytics/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": ADMIN_SECRET,
        },
        body: JSON.stringify({
          type,
          recipients,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`${type.charAt(0).toUpperCase() + type.slice(1)} report sent successfully!`)
      } else {
        setError(data.error || "Failed to send report")
      }
    } catch (error) {
      setError("An error occurred while sending the report")
    } finally {
      setLoading(false)
    }
  }

  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return { percentage: 0, trend: "stable" as const }
    const percentage = Math.round(((current - previous) / previous) * 100)
    const trend = percentage > 5 ? "up" : percentage < -5 ? "down" : "stable"
    return { percentage: Math.abs(percentage), trend }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <BackToHomeButton />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">📊 Analytics Reports</h1>
            <p className="text-lg text-gray-600">Automated weekly and monthly analytics reports for AI Fusion</p>
          </div>

          {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">{success}</div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>Send reports immediately or preview data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={() => sendReport("weekly")} disabled={loading} className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Weekly Report
                  </Button>
                  <Button onClick={() => sendReport("monthly")} disabled={loading} variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Monthly Report
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={() => fetchReportPreview("weekly")} variant="secondary" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Preview Weekly
                  </Button>
                  <Button onClick={() => fetchReportPreview("monthly")} variant="secondary" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Preview Monthly
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Report Preview */}
            {reportData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Report Preview
                  </CardTitle>
                  <CardDescription>
                    {reportData.period.type.charAt(0).toUpperCase() + reportData.period.type.slice(1)} data preview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[
                      {
                        label: "Page Views",
                        current: reportData.current.pageViews,
                        previous: reportData.previous.pageViews,
                      },
                      {
                        label: "Visitors",
                        current: reportData.current.uniqueVisitors,
                        previous: reportData.previous.uniqueVisitors,
                      },
                      {
                        label: "Events",
                        current: reportData.current.totalEvents,
                        previous: reportData.previous.totalEvents,
                      },
                    ].map((metric, index) => {
                      const growth = calculateGrowth(metric.current, metric.previous)
                      return (
                        <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-indigo-900">{metric.current.toLocaleString()}</div>
                          <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                          <div
                            className={`text-xs ${growth.trend === "up" ? "text-green-600" : growth.trend === "down" ? "text-red-600" : "text-gray-600"}`}
                          >
                            {growth.trend === "up" ? "📈" : growth.trend === "down" ? "📉" : "➡️"} {growth.percentage}%
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Top Pages:</strong>
                    <ul className="mt-1 space-y-1">
                      {reportData.current.topPages.slice(0, 3).map((page, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{page.path}</span>
                          <span className="font-medium">{page.views}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Create Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Create Schedule
                </CardTitle>
                <CardDescription>Set up automated report delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={createSchedule} className="space-y-4">
                  <div>
                    <Label htmlFor="type">Report Type</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value: "weekly" | "monthly") => {
                        setFormData({ ...formData, type: value })
                        fetchReportPreview(value)
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="recipients">Email Recipients</Label>
                    <Textarea
                      id="recipients"
                      placeholder="info@aifusion.ie, admin@aifusion.ie"
                      value={formData.recipients}
                      onChange={(e) => setFormData({ ...formData, recipients: e.target.value })}
                      className="min-h-[80px]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate multiple emails with commas</p>
                  </div>

                  {formData.type === "weekly" && (
                    <div>
                      <Label htmlFor="dayOfWeek">Day of Week</Label>
                      <Select
                        value={formData.dayOfWeek.toString()}
                        onValueChange={(value) => setFormData({ ...formData, dayOfWeek: Number.parseInt(value) })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {dayNames.map((day, index) => (
                            <SelectItem key={index} value={index.toString()}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {formData.type === "monthly" && (
                    <div>
                      <Label htmlFor="dayOfMonth">Day of Month</Label>
                      <Input
                        id="dayOfMonth"
                        type="number"
                        min="1"
                        max="31"
                        value={formData.dayOfMonth}
                        onChange={(e) => setFormData({ ...formData, dayOfMonth: Number.parseInt(e.target.value) })}
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hour">Hour (24h)</Label>
                      <Input
                        id="hour"
                        type="number"
                        min="0"
                        max="23"
                        value={formData.hour}
                        onChange={(e) => setFormData({ ...formData, hour: Number.parseInt(e.target.value) })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="minute">Minute</Label>
                      <Input
                        id="minute"
                        type="number"
                        min="0"
                        max="59"
                        value={formData.minute}
                        onChange={(e) => setFormData({ ...formData, minute: Number.parseInt(e.target.value) })}
                      />
                    </div>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Create Schedule
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Active Schedules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Active Schedules
                </CardTitle>
                <CardDescription>Manage your automated report schedules</CardDescription>
              </CardHeader>
              <CardContent>
                {schedules.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No schedules created yet</p>
                    <p className="text-sm">Create your first automated report schedule</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {schedules.map((schedule) => (
                      <div key={schedule.id} className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Badge variant={schedule.type === "weekly" ? "default" : "secondary"}>
                              {schedule.type}
                            </Badge>
                            <div className="text-sm text-gray-600 mt-1">
                              {schedule.type === "weekly"
                                ? `Every ${dayNames[schedule.dayOfWeek!]}`
                                : `${schedule.dayOfMonth}${getOrdinalSuffix(schedule.dayOfMonth!)} of each month`}{" "}
                              at {String(schedule.hour).padStart(2, "0")}:{String(schedule.minute).padStart(2, "0")}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteSchedule(schedule.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="h-4 w-4" />
                            <span>{schedule.recipients.length} recipient(s)</span>
                          </div>
                          <div className="text-xs text-gray-500">{schedule.recipients.join(", ")}</div>
                          {schedule.nextRun && (
                            <div className="text-xs text-gray-500 mt-2">
                              Next run: {new Date(schedule.nextRun).toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th"
  switch (day % 10) {
    case 1:
      return "st"
    case 2:
      return "nd"
    case 3:
      return "rd"
    default:
      return "th"
  }
}
