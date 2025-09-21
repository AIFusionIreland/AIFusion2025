import { type NextRequest, NextResponse } from "next/server"

// In a real app, you'd store this in a database
// For now, we'll use a simple in-memory store
const analyticsData: any[] = []

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Add IP address from request
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

    const analyticsEvent = {
      ...data,
      ip,
      timestamp: new Date().toISOString(),
    }

    // Store the event (in production, save to database)
    analyticsData.push(analyticsEvent)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Analytics error:", error)
    return NextResponse.json({ error: "Failed to track event" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  // Simple authentication check
  const authHeader = request.headers.get("authorization")
  if (authHeader !== "Bearer admin-secret-key") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Get query parameters for filtering
  const { searchParams } = new URL(request.url)
  const startDate = searchParams.get("startDate")
  const endDate = searchParams.get("endDate")
  const event = searchParams.get("event")

  let filteredData = [...analyticsData]

  // Apply filters
  if (startDate) {
    filteredData = filteredData.filter((item) => new Date(item.timestamp) >= new Date(startDate))
  }

  if (endDate) {
    filteredData = filteredData.filter((item) => new Date(item.timestamp) <= new Date(endDate))
  }

  if (event) {
    filteredData = filteredData.filter((item) => item.event === event)
  }

  // Calculate statistics
  const stats = {
    totalEvents: filteredData.length,
    pageViews: filteredData.filter((item) => item.event === "page_view").length,
    uniqueVisitors: new Set(filteredData.map((item) => item.ip)).size,
    topPages: getTopPages(filteredData),
    eventsByHour: getEventsByHour(filteredData),
    recentEvents: filteredData.slice(-50).reverse(),
  }

  return NextResponse.json(stats)
}

function getTopPages(data: any[]) {
  const pageViews = data.filter((item) => item.event === "page_view")
  const pageCounts = pageViews.reduce(
    (acc, item) => {
      acc[item.page] = (acc[item.page] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return Object.entries(pageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([page, count]) => ({ page, count }))
}

function getEventsByHour(data: any[]) {
  const hourCounts = data.reduce(
    (acc, item) => {
      const hour = new Date(item.timestamp).getHours()
      acc[hour] = (acc[hour] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  return Array.from({ length: 24 }, (_, hour) => ({
    hour,
    count: hourCounts[hour] || 0,
  }))
}
