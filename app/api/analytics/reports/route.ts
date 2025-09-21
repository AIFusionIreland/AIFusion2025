import { type NextRequest, NextResponse } from "next/server"
import { analyticsReporter } from "@/lib/analytics-reports"

export async function POST(request: NextRequest) {
  try {
    // Simple authentication check
    const authHeader = request.headers.get("authorization")
    if (authHeader !== "Bearer admin-secret-key") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { type, recipients } = await request.json()

    if (!type || !["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: "Invalid report type. Must be 'weekly' or 'monthly'" }, { status: 400 })
    }

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json({ error: "Recipients array is required" }, { status: 400 })
    }

    // Generate and send report
    const reportData = await analyticsReporter.generateReport(type)
    const result = await analyticsReporter.sendReport(reportData, recipients)

    return NextResponse.json({
      success: true,
      message: `${type} report sent successfully`,
      reportData: {
        period: reportData.period,
        startDate: reportData.startDate,
        endDate: reportData.endDate,
        pageViews: reportData.pageViews,
        uniqueVisitors: reportData.uniqueVisitors,
      },
      emailId: result.emailId,
    })
  } catch (error) {
    console.error("Error generating/sending report:", error)
    return NextResponse.json(
      {
        error: "Failed to generate or send report",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Get report preview without sending
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (authHeader !== "Bearer admin-secret-key") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") as "weekly" | "monthly"

    if (!type || !["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: "Invalid report type. Must be 'weekly' or 'monthly'" }, { status: 400 })
    }

    const reportData = await analyticsReporter.generateReport(type)

    return NextResponse.json({
      success: true,
      reportData,
    })
  } catch (error) {
    console.error("Error generating report preview:", error)
    return NextResponse.json(
      {
        error: "Failed to generate report preview",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
