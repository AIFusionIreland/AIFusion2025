import { type NextRequest, NextResponse } from "next/server"
import { analyticsReporter } from "@/lib/analytics-reports"

// This endpoint would be called by a cron job service like Vercel Cron or external cron
export async function POST(request: NextRequest) {
  try {
    // Verify the request is from a trusted source (cron job)
    const authHeader = request.headers.get("authorization")
    const cronSecret = process.env.CRON_SECRET || "your-cron-secret-key"

    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const now = new Date()
    const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const dayOfMonth = now.getDate()

    // In a real implementation, fetch scheduled reports from database
    // For now, we'll use hardcoded schedules
    const defaultSchedules = [
      {
        type: "weekly" as const,
        recipients: ["info@aifusion.ie"],
        dayOfWeek: 1, // Monday
        active: true,
      },
      {
        type: "monthly" as const,
        recipients: ["info@aifusion.ie"],
        dayOfMonth: 1, // 1st of each month
        active: true,
      },
    ]

    const results = []

    // Check weekly reports
    const weeklySchedules = defaultSchedules.filter((s) => s.type === "weekly" && s.active && s.dayOfWeek === dayOfWeek)

    for (const schedule of weeklySchedules) {
      try {
        const reportData = await analyticsReporter.generateReport("weekly")
        const result = await analyticsReporter.sendReport(reportData, schedule.recipients)
        results.push({
          type: "weekly",
          recipients: schedule.recipients,
          success: true,
          emailId: result.emailId,
        })
      } catch (error) {
        results.push({
          type: "weekly",
          recipients: schedule.recipients,
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }

    // Check monthly reports
    const monthlySchedules = defaultSchedules.filter(
      (s) => s.type === "monthly" && s.active && s.dayOfMonth === dayOfMonth,
    )

    for (const schedule of monthlySchedules) {
      try {
        const reportData = await analyticsReporter.generateReport("monthly")
        const result = await analyticsReporter.sendReport(reportData, schedule.recipients)
        results.push({
          type: "monthly",
          recipients: schedule.recipients,
          success: true,
          emailId: result.emailId,
        })
      } catch (error) {
        results.push({
          type: "monthly",
          recipients: schedule.recipients,
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${results.length} scheduled reports`,
      results,
      timestamp: now.toISOString(),
    })
  } catch (error) {
    console.error("Error in cron job:", error)
    return NextResponse.json(
      {
        error: "Cron job failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
