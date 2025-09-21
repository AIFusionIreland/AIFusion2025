import { type NextRequest, NextResponse } from "next/server"

// Secret key for admin access
const ADMIN_SECRET = process.env.ADMIN_SECRET || "your-secret-key"

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization")
  const secret = request.headers.get("x-admin-secret")

  return authHeader === `Bearer ${ADMIN_SECRET}` || secret === ADMIN_SECRET
}

// In-memory storage for schedules (replace with database in production)
let schedules: Array<{
  id: string
  type: "weekly" | "monthly"
  recipients: string[]
  dayOfWeek?: number // 0-6, 0 = Sunday
  dayOfMonth?: number // 1-31
  hour: number
  minute: number
  active: boolean
  createdAt: string
  lastRun?: string
}> = []

export async function GET(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      schedules: schedules.map((schedule) => ({
        ...schedule,
        nextRun: calculateNextRun(schedule),
      })),
    })
  } catch (error) {
    console.error("Error fetching schedules:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { type, recipients, dayOfWeek, dayOfMonth, hour = 9, minute = 0 } = body

    if (!type || !recipients || !Array.isArray(recipients)) {
      return NextResponse.json({ error: "Missing required fields: type, recipients" }, { status: 400 })
    }

    if (!["weekly", "monthly"].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "weekly" or "monthly"' }, { status: 400 })
    }

    if (type === "weekly" && (dayOfWeek === undefined || dayOfWeek < 0 || dayOfWeek > 6)) {
      return NextResponse.json({ error: "dayOfWeek must be between 0-6 for weekly schedules" }, { status: 400 })
    }

    if (type === "monthly" && (dayOfMonth === undefined || dayOfMonth < 1 || dayOfMonth > 31)) {
      return NextResponse.json({ error: "dayOfMonth must be between 1-31 for monthly schedules" }, { status: 400 })
    }

    const schedule = {
      id: `schedule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: type as "weekly" | "monthly",
      recipients,
      dayOfWeek: type === "weekly" ? dayOfWeek : undefined,
      dayOfMonth: type === "monthly" ? dayOfMonth : undefined,
      hour,
      minute,
      active: true,
      createdAt: new Date().toISOString(),
    }

    schedules.push(schedule)

    return NextResponse.json({
      success: true,
      message: "Schedule created successfully",
      schedule: {
        ...schedule,
        nextRun: calculateNextRun(schedule),
      },
    })
  } catch (error) {
    console.error("Error creating schedule:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing schedule ID" }, { status: 400 })
    }

    const initialLength = schedules.length
    schedules = schedules.filter((schedule) => schedule.id !== id)

    if (schedules.length === initialLength) {
      return NextResponse.json({ error: "Schedule not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Schedule deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting schedule:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function calculateNextRun(schedule: {
  type: "weekly" | "monthly"
  dayOfWeek?: number
  dayOfMonth?: number
  hour: number
  minute: number
}): string {
  const now = new Date()
  const nextRun = new Date()

  if (schedule.type === "weekly" && schedule.dayOfWeek !== undefined) {
    // Calculate next occurrence of the specified day of week
    const daysUntilTarget = (schedule.dayOfWeek - now.getDay() + 7) % 7
    nextRun.setDate(now.getDate() + (daysUntilTarget === 0 ? 7 : daysUntilTarget))
  } else if (schedule.type === "monthly" && schedule.dayOfMonth !== undefined) {
    // Calculate next occurrence of the specified day of month
    nextRun.setDate(schedule.dayOfMonth)
    if (nextRun <= now) {
      nextRun.setMonth(nextRun.getMonth() + 1)
    }
  }

  nextRun.setHours(schedule.hour, schedule.minute, 0, 0)

  return nextRun.toISOString()
}
