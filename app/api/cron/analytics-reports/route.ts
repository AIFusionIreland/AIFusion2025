import { type NextRequest, NextResponse } from "next/server"
import { sendAnalyticsReport, generateMockData, getReportPeriod } from "@/lib/analytics-reports"

// Secret for cron job authentication
const CRON_SECRET = process.env.CRON_SECRET || "your-cron-secret"

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret
    const authHeader = request.headers.get("authorization")
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") as "weekly" | "monthly"

    if (!type || !["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: "Invalid or missing type parameter" }, { status: 400 })
    }

    // Get current date info
    const now = new Date()
    const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const currentDate = now.getDate()
    const currentHour = now.getHours()

    // Default recipients (you can modify this or fetch from database)
    const defaultRecipients = ["info@aifusion.ie"]

    let shouldSend = false
    let scheduleInfo = ""

    if (type === "weekly") {
      // Send weekly reports on Mondays at 9 AM
      if (currentDay === 1 && currentHour === 9) {
        shouldSend = true
        scheduleInfo = "Weekly report scheduled for Monday 9 AM"
      }
    } else if (type === "monthly") {
      // Send monthly reports on the 1st of each month at 9 AM
      if (currentDate === 1 && currentHour === 9) {
        shouldSend = true
        scheduleInfo = "Monthly report scheduled for 1st of month 9 AM"
      }
    }

    if (!shouldSend) {
      return NextResponse.json({
        success: true,
        message: `Not scheduled to run now. ${scheduleInfo}`,
        currentTime: now.toISOString(),
        type,
      })
    }

    // Generate report data
    const period = getReportPeriod(type)
    const currentData = await generateMockData(period)

    // Generate previous period data for comparison
    const previousPeriod = {
      ...period,
      start: new Date(period.start.getTime() - (period.end.getTime() - period.start.getTime())),
      end: period.start,
    }
    const previousData = await generateMockData(previousPeriod)

    // Send the report
    const result = await sendAnalyticsReport(currentData, previousData, period, defaultRecipients)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} report sent successfully`,
        recipients: defaultRecipients,
        timestamp: now.toISOString(),
      })
    } else {
      return NextResponse.json({ error: result.error || "Failed to send report" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in cron analytics reports:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Handle POST requests for manual triggering
export async function POST(request: NextRequest) {
  try {
    // Verify admin secret for manual triggers
    const adminSecret = request.headers.get("x-admin-secret")
    if (adminSecret !== "aifusion2024admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { type, recipients } = body

    if (!type || !["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "weekly" or "monthly"' }, { status: 400 })
    }

    const reportRecipients = recipients || ["info@aifusion.ie"]

    // Generate report data
    const period = getReportPeriod(type)
    const currentData = await generateMockData(period)

    const previousPeriod = {
      ...period,
      start: new Date(period.start.getTime() - (period.end.getTime() - period.start.getTime())),
      end: period.start,
    }
    const previousData = await generateMockData(previousPeriod)

    // Send the report
    const result = await sendAnalyticsReport(currentData, previousData, period, reportRecipients)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} report sent successfully (manual trigger)`,
        recipients: reportRecipients,
        timestamp: new Date().toISOString(),
      })
    } else {
      return NextResponse.json({ error: result.error || "Failed to send report" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in manual analytics report trigger:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
