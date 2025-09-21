import { type NextRequest, NextResponse } from "next/server"
import { sendAnalyticsReport, generateMockData, getReportPeriod, type ReportPeriod } from "@/lib/analytics-reports"

// Secret key for admin access
const ADMIN_SECRET = process.env.ADMIN_SECRET || "your-secret-key"

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization")
  const secret = request.headers.get("x-admin-secret")

  return authHeader === `Bearer ${ADMIN_SECRET}` || secret === ADMIN_SECRET
}

export async function POST(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { type, recipients } = body

    if (!type || !recipients || !Array.isArray(recipients)) {
      return NextResponse.json({ error: "Missing required fields: type, recipients" }, { status: 400 })
    }

    if (!["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "weekly" or "monthly"' }, { status: 400 })
    }

    // Get report period
    const period = getReportPeriod(type as "weekly" | "monthly")

    // Generate current and previous period data
    const currentData = await generateMockData(period)

    // Generate previous period data (for comparison)
    const previousPeriod: ReportPeriod = {
      ...period,
      start: new Date(period.start.getTime() - (period.end.getTime() - period.start.getTime())),
      end: period.start,
    }
    const previousData = await generateMockData(previousPeriod)

    // Send the report
    const result = await sendAnalyticsReport(currentData, previousData, period, recipients)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} report sent successfully to ${recipients.length} recipient(s)`,
        period: {
          start: period.start.toISOString(),
          end: period.end.toISOString(),
          type: period.type,
        },
      })
    } else {
      return NextResponse.json({ error: result.error || "Failed to send report" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in analytics reports API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = (searchParams.get("type") as "weekly" | "monthly") || "weekly"

    if (!["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "weekly" or "monthly"' }, { status: 400 })
    }

    // Get report period and generate preview data
    const period = getReportPeriod(type)
    const currentData = await generateMockData(period)

    const previousPeriod: ReportPeriod = {
      ...period,
      start: new Date(period.start.getTime() - (period.end.getTime() - period.start.getTime())),
      end: period.start,
    }
    const previousData = await generateMockData(previousPeriod)

    return NextResponse.json({
      success: true,
      data: {
        current: currentData,
        previous: previousData,
        period: {
          start: period.start.toISOString(),
          end: period.end.toISOString(),
          type: period.type,
        },
      },
    })
  } catch (error) {
    console.error("Error in analytics reports preview API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
