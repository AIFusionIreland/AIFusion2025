import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for scheduled reports (in production, use a database)
const scheduledReports: Array<{
  id: string
  type: "weekly" | "monthly"
  recipients: string[]
  dayOfWeek?: number // 0-6 for weekly (0 = Sunday)
  dayOfMonth?: number // 1-31 for monthly
  active: boolean
  lastSent?: string
  nextSend?: string
}> = []

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== "Bearer admin-secret-key") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({ schedules: scheduledReports })
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (authHeader !== "Bearer admin-secret-key") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { type, recipients, dayOfWeek, dayOfMonth } = await request.json()

    if (!type || !["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: "Invalid report type" }, { status: 400 })
    }

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json({ error: "Recipients array is required" }, { status: 400 })
    }

    if (type === "weekly" && (dayOfWeek === undefined || dayOfWeek < 0 || dayOfWeek > 6)) {
      return NextResponse.json({ error: "dayOfWeek must be 0-6 for weekly reports" }, { status: 400 })
    }

    if (type === "monthly" && (dayOfMonth === undefined || dayOfMonth < 1 || dayOfMonth > 31)) {
      return NextResponse.json({ error: "dayOfMonth must be 1-31 for monthly reports" }, { status: 400 })
    }

    const schedule = {
      id: crypto.randomUUID(),
      type,
      recipients,
      dayOfWeek: type === "weekly" ? dayOfWeek : undefined,
      dayOfMonth: type === "monthly" ? dayOfMonth : undefined,
      active: true,
      nextSend: calculateNextSend(type, dayOfWeek, dayOfMonth),
    }

    scheduledReports.push(schedule)

    return NextResponse.json({
      success: true,
      message: "Report scheduled successfully",
      schedule,
    })
  } catch (error) {
    console.error("Error scheduling report:", error)
    return NextResponse.json(
      {
        error: "Failed to schedule report",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (authHeader !== "Bearer admin-secret-key") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Schedule ID is required" }, { status: 400 })
    }

    const index = scheduledReports.findIndex((schedule) => schedule.id === id)
    if (index === -1) {
      return NextResponse.json({ error: "Schedule not found" }, { status: 404 })
    }

    scheduledReports.splice(index, 1)

    return NextResponse.json({
      success: true,
      message: "Schedule deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting schedule:", error)
    return NextResponse.json(
      {
        error: "Failed to delete schedule",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

function calculateNextSend(type: "weekly" | "monthly", dayOfWeek?: number, dayOfMonth?: number): string {
  const now = new Date()
  const nextSend = new Date()

  if (type === "weekly" && dayOfWeek !== undefined) {
    const daysUntilTarget = (dayOfWeek - now.getDay() + 7) % 7
    if (daysUntilTarget === 0) {
      // If it's the same day, schedule for next week
      nextSend.setDate(now.getDate() + 7)
    } else {
      nextSend.setDate(now.getDate() + daysUntilTarget)
    }
  } else if (type === "monthly" && dayOfMonth !== undefined) {
    nextSend.setDate(dayOfMonth)
    if (nextSend <= now) {
      // If the date has passed this month, schedule for next month
      nextSend.setMonth(nextSend.getMonth() + 1)
    }
  }

  // Set time to 9 AM
  nextSend.setHours(9, 0, 0, 0)

  return nextSend.toISOString()
}
