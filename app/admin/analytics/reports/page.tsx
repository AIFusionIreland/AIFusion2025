"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"
import { Send, Calendar, Mail, Plus, Trash2, Eye, CheckCircle, AlertCircle, Clock, Users } from "lucide-react"

interface Schedule {
  id: string
  type: "weekly" | "monthly"
  recipients: string[]
  dayOfWeek?: number
  dayOfMonth?: number
  active: boolean
  lastSent?: string
  nextSend?: string
}

export default function AnalyticsReportsPage() {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState<string | null>(null)
  const [newSchedule, setNewSchedule] = useState({
    type: "weekly" as "weekly" | "monthly",
    recipients: "",
    dayOfWeek: 1, // Monday
    dayOfMonth: 1,
  })
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  useEffect(() => {
    fetchSchedules()
  }, [])

  const fetchSchedules = async () => {
    try {
      const response = await fetch("/api/analytics/schedule", {
        headers: {
          Authorization: "Bearer admin-secret-key",
        },
      })

      if (response.ok) {
        const data = await response.json()
        setSchedules(data.schedules || [])
      }
    } catch (error) {
      console.error("Error fetching schedules:", error)
    } finally {
      setLoading(false)
    }
  }

  const sendReport = async (type: "weekly" | "monthly", recipients?: string[]) => {
    setSending(type)
    try {
      const response = await fetch("/api/analytics/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer admin-secret-key",
        },
        body: JSON.stringify({
          type,
          recipients: recipients || ["info@aifusion.ie"],
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: `${type} report sent successfully!` })
      } else {
        setMessage({ type: "error", text: data.error || "Failed to send report" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred" })
    } finally {
      setSending(null)
      setTimeout(() => setMessage(null), 5000)
    }
  }

  const previewReport = async (type: "weekly" | "monthly") => {
    try {
      const response = await fetch(`/api/analytics/reports?type=${type}`, {
        headers: {
          Authorization: "Bearer admin-secret-key",
        },
      })

      const data = await response.json()

      if (response.ok) {
        // Open preview in new window
        const previewWindow = window.open("", "_blank", "width=800,height=600")
        if (previewWindow) {
          previewWindow.document.write(`
            <html>
              <head><title>${type} Report Preview</title></head>
              <body style="font-family: Arial, sans-serif; padding: 20px;">
                <h1>${data.reportData.period} Report Preview</h1>
                <p><strong>Period:</strong> ${data.reportData.startDate} to ${data.reportData.endDate}</p>
                <p><strong>Page Views:</strong> ${data.reportData.pageViews.toLocaleString()}</p>
                <p><strong>Unique Visitors:</strong> ${data.reportData.uniqueVisitors.toLocaleString()}</p>
                <p><strong>Total Events:</strong> ${data.reportData.totalEvents.toLocaleString()}</p>
                <hr>
                <p><em>This is a preview. The actual email will contain charts and detailed insights.</em></p>
              </body>
            </html>
          `)
        }
      } else {
        setMessage({ type: "error", text: data.error || "Failed to generate preview" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred" })
    }
  }

  const createSchedule = async () => {
    try {
      const recipients = newSchedule.recipients
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean)

      if (recipients.length === 0) {
        setMessage({ type: "error", text: "Please enter at least one email address" })
        return
      }

      const response = await fetch("/api/analytics/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer admin-secret-key",
        },
        body: JSON.stringify({
          type: newSchedule.type,
          recipients,
          dayOfWeek: newSchedule.type === "weekly" ? newSchedule.dayOfWeek : undefined,
          dayOfMonth: newSchedule.type === "monthly" ? newSchedule.dayOfMonth : undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: "Schedule created successfully!" })
        setNewSchedule({
          type: "weekly",
          recipients: "",
          dayOfWeek: 1,
          dayOfMonth: 1,
        })
        fetchSchedules()
      } else {
        setMessage({ type: "error", text: data.error || "Failed to create schedule" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred" })
    }
  }

  const deleteSchedule = async (id: string) => {
    try {
      const response = await fetch(`/api/analytics/schedule?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer admin-secret-key",
        },
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Schedule deleted successfully!" })
        fetchSchedules()
      } else {
        const data = await response.json()
        setMessage({ type: "error", text: data.error || "Failed to delete schedule" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error occurred" })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-975">
        <SiteHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-2 text-white">Loading reports...</span>
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
          <h1 className="text-3xl font-bold text-white">Analytics Reports</h1>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
              message.type === "success"
                ? "bg-green-900/50 border border-green-700 text-green-200"
                : "bg-red-900/50 border border-red-700 text-red-200"
            }`}
          >
            {message.type === "success" ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            {message.text}
          </div>
        )}

        {/* Manual Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-navy-900 border-navy-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send Reports Manually
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Button
                    onClick={() => sendReport("weekly")}
                    disabled={sending === "weekly"}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {sending === "weekly" ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Weekly Report
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={() => previewReport("weekly")}
                    variant="outline"
                    className="w-full border-navy-700 text-gray-200 hover:bg-navy-800"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Weekly
                  </Button>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={() => sendReport("monthly")}
                    disabled={sending === "monthly"}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {sending === "monthly" ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Monthly Report
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={() => previewReport("monthly")}
                    variant="outline"
                    className="w-full border-navy-700 text-gray-200 hover:bg-navy-800"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Monthly
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center">Reports will be sent to info@aifusion.ie</p>
            </CardContent>
          </Card>

          {/* Schedule New Report */}
          <Card className="bg-navy-900 border-navy-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Schedule Automatic Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="reportType" className="text-gray-200">
                  Report Type
                </Label>
                <Select
                  value={newSchedule.type}
                  onValueChange={(value: "weekly" | "monthly") => setNewSchedule((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger className="bg-navy-800 border-navy-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-800 border-navy-700">
                    <SelectItem value="weekly" className="text-white">
                      Weekly Report
                    </SelectItem>
                    <SelectItem value="monthly" className="text-white">
                      Monthly Report
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {newSchedule.type === "weekly" && (
                <div>
                  <Label htmlFor="dayOfWeek" className="text-gray-200">
                    Day of Week
                  </Label>
                  <Select
                    value={newSchedule.dayOfWeek.toString()}
                    onValueChange={(value) =>
                      setNewSchedule((prev) => ({ ...prev, dayOfWeek: Number.parseInt(value) }))
                    }
                  >
                    <SelectTrigger className="bg-navy-800 border-navy-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-navy-800 border-navy-700">
                      {dayNames.map((day, index) => (
                        <SelectItem key={index} value={index.toString()} className="text-white">
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {newSchedule.type === "monthly" && (
                <div>
                  <Label htmlFor="dayOfMonth" className="text-gray-200">
                    Day of Month
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    max="31"
                    value={newSchedule.dayOfMonth}
                    onChange={(e) =>
                      setNewSchedule((prev) => ({ ...prev, dayOfMonth: Number.parseInt(e.target.value) || 1 }))
                    }
                    className="bg-navy-800 border-navy-700 text-white"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="recipients" className="text-gray-200">
                  Email Recipients
                </Label>
                <Input
                  placeholder="email1@example.com, email2@example.com"
                  value={newSchedule.recipients}
                  onChange={(e) => setNewSchedule((prev) => ({ ...prev, recipients: e.target.value }))}
                  className="bg-navy-800 border-navy-700 text-white"
                />
                <p className="text-xs text-gray-400 mt-1">Separate multiple emails with commas</p>
              </div>

              <Button onClick={createSchedule} className="w-full bg-green-600 hover:bg-green-700">
                <Calendar className="h-4 w-4 mr-2" />
                Create Schedule
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Existing Schedules */}
        <Card className="bg-navy-900 border-navy-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Scheduled Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            {schedules.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No scheduled reports yet</p>
                <p className="text-sm">Create your first automated report above</p>
              </div>
            ) : (
              <div className="space-y-4">
                {schedules.map((schedule) => (
                  <div key={schedule.id} className="flex items-center justify-between p-4 bg-navy-800 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={schedule.type === "weekly" ? "default" : "secondary"}>{schedule.type}</Badge>
                        <Badge variant={schedule.active ? "default" : "destructive"}>
                          {schedule.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <p className="text-white font-medium">
                        {schedule.type === "weekly"
                          ? `Every ${dayNames[schedule.dayOfWeek || 0]}`
                          : `${schedule.dayOfMonth}${getOrdinalSuffix(schedule.dayOfMonth || 1)} of each month`}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {schedule.recipients.length} recipient{schedule.recipients.length !== 1 ? "s" : ""}
                        </span>
                        {schedule.nextSend && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Next: {new Date(schedule.nextSend).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => deleteSchedule(schedule.id)}
                      variant="outline"
                      size="sm"
                      className="border-red-700 text-red-400 hover:bg-red-900/50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
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
