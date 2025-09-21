import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  totalEvents: number
  topPages: Array<{ path: string; views: number }>
  trafficByHour: Array<{ hour: number; views: number }>
  recentActivity: Array<{
    timestamp: string
    event: string
    path: string
    userAgent?: string
  }>
}

export interface ReportPeriod {
  start: Date
  end: Date
  type: "weekly" | "monthly"
}

export function getReportPeriod(type: "weekly" | "monthly"): ReportPeriod {
  const now = new Date()
  const end = new Date(now)
  const start = new Date(now)

  if (type === "weekly") {
    // Last 7 days
    start.setDate(now.getDate() - 7)
  } else {
    // Last 30 days
    start.setDate(now.getDate() - 30)
  }

  return { start, end, type }
}

export function calculateGrowth(
  current: number,
  previous: number,
): {
  percentage: number
  trend: "up" | "down" | "stable"
} {
  if (previous === 0) {
    return { percentage: current > 0 ? 100 : 0, trend: current > 0 ? "up" : "stable" }
  }

  const percentage = Math.round(((current - previous) / previous) * 100)
  const trend = percentage > 5 ? "up" : percentage < -5 ? "down" : "stable"

  return { percentage: Math.abs(percentage), trend }
}

export function generateInsights(
  data: AnalyticsData,
  growth: {
    pageViews: ReturnType<typeof calculateGrowth>
    uniqueVisitors: ReturnType<typeof calculateGrowth>
    totalEvents: ReturnType<typeof calculateGrowth>
  },
): string[] {
  const insights: string[] = []

  // Traffic growth insights
  if (growth.pageViews.trend === "up") {
    insights.push(
      `🚀 Great news! Page views increased by ${growth.pageViews.percentage}% compared to the previous period.`,
    )
  } else if (growth.pageViews.trend === "down") {
    insights.push(
      `📉 Page views decreased by ${growth.pageViews.percentage}%. Consider reviewing your content strategy.`,
    )
  }

  // Top page insights
  if (data.topPages.length > 0) {
    const topPage = data.topPages[0]
    insights.push(`🏆 Your most popular page is "${topPage.path}" with ${topPage.views} views.`)
  }

  // Traffic pattern insights
  const peakHour = data.trafficByHour.reduce(
    (max, current) => (current.views > max.views ? current : max),
    data.trafficByHour[0],
  )

  if (peakHour) {
    const hour = peakHour.hour === 0 ? 12 : peakHour.hour > 12 ? peakHour.hour - 12 : peakHour.hour
    const ampm = peakHour.hour >= 12 ? "PM" : "AM"
    insights.push(`⏰ Peak traffic occurs around ${hour}:00 ${ampm} with ${peakHour.views} views.`)
  }

  // Engagement insights
  if (data.uniqueVisitors > 0) {
    const pagesPerVisitor = Math.round((data.pageViews / data.uniqueVisitors) * 10) / 10
    if (pagesPerVisitor > 2) {
      insights.push(`👥 Excellent engagement! Visitors view an average of ${pagesPerVisitor} pages per session.`)
    }
  }

  return insights
}

export function generateRecommendations(
  data: AnalyticsData,
  growth: {
    pageViews: ReturnType<typeof calculateGrowth>
    uniqueVisitors: ReturnType<typeof calculateGrowth>
    totalEvents: ReturnType<typeof calculateGrowth>
  },
): string[] {
  const recommendations: string[] = []

  // Growth-based recommendations
  if (growth.pageViews.trend === "down") {
    recommendations.push("Consider creating fresh content or updating existing pages to re-engage your audience.")
    recommendations.push("Review your SEO strategy and ensure your content is optimized for search engines.")
  }

  // Content recommendations
  if (data.topPages.length > 0) {
    recommendations.push(`Your "${data.topPages[0].path}" page is performing well. Consider creating similar content.`)
  }

  // Traffic timing recommendations
  const lowTrafficHours = data.trafficByHour.filter((h) => h.views < (data.pageViews / 24) * 0.5)
  if (lowTrafficHours.length > 12) {
    recommendations.push("Consider scheduling social media posts during peak hours to maximize visibility.")
  }

  // General recommendations
  recommendations.push("Monitor your analytics regularly to identify trends and opportunities.")
  recommendations.push("Consider A/B testing different page layouts or content to improve engagement.")

  return recommendations
}

export async function sendAnalyticsReport(
  data: AnalyticsData,
  previousData: AnalyticsData,
  period: ReportPeriod,
  recipients: string[],
): Promise<{ success: boolean; error?: string }> {
  try {
    const growth = {
      pageViews: calculateGrowth(data.pageViews, previousData.pageViews),
      uniqueVisitors: calculateGrowth(data.uniqueVisitors, previousData.uniqueVisitors),
      totalEvents: calculateGrowth(data.totalEvents, previousData.totalEvents),
    }

    const insights = generateInsights(data, growth)
    const recommendations = generateRecommendations(data, growth)

    const periodText = period.type === "weekly" ? "Weekly" : "Monthly"
    const dateRange = `${period.start.toLocaleDateString()} - ${period.end.toLocaleDateString()}`

    const getTrendEmoji = (trend: "up" | "down" | "stable") => {
      switch (trend) {
        case "up":
          return "📈"
        case "down":
          return "📉"
        default:
          return "➡️"
      }
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AI Fusion Analytics Report</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px;">📊 AI Fusion Analytics</h1>
            <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">${periodText} Report</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">${dateRange}</p>
          </div>

          <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h2 style="color: #1e1b4b; margin-top: 0;">📈 Key Metrics</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
              <div style="background: white; padding: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="font-size: 24px; font-weight: bold; color: #1e1b4b;">${data.pageViews.toLocaleString()}</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 5px;">Page Views</div>
                <div style="font-size: 12px; color: ${growth.pageViews.trend === "up" ? "#10b981" : growth.pageViews.trend === "down" ? "#ef4444" : "#64748b"};">
                  ${getTrendEmoji(growth.pageViews.trend)} ${growth.pageViews.percentage}%
                </div>
              </div>
              <div style="background: white; padding: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="font-size: 24px; font-weight: bold; color: #1e1b4b;">${data.uniqueVisitors.toLocaleString()}</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 5px;">Unique Visitors</div>
                <div style="font-size: 12px; color: ${growth.uniqueVisitors.trend === "up" ? "#10b981" : growth.uniqueVisitors.trend === "down" ? "#ef4444" : "#64748b"};">
                  ${getTrendEmoji(growth.uniqueVisitors.trend)} ${growth.uniqueVisitors.percentage}%
                </div>
              </div>
              <div style="background: white; padding: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="font-size: 24px; font-weight: bold; color: #1e1b4b;">${data.totalEvents.toLocaleString()}</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 5px;">Total Events</div>
                <div style="font-size: 12px; color: ${growth.totalEvents.trend === "up" ? "#10b981" : growth.totalEvents.trend === "down" ? "#ef4444" : "#64748b"};">
                  ${getTrendEmoji(growth.totalEvents.trend)} ${growth.totalEvents.percentage}%
                </div>
              </div>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <h2 style="color: #1e1b4b; margin-top: 0;">🏆 Top Performing Pages</h2>
            ${data.topPages
              .slice(0, 5)
              .map(
                (page, index) => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: white; margin-bottom: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="flex: 1;">
                  <span style="font-weight: bold; color: #1e1b4b;">${index + 1}.</span>
                  <span style="margin-left: 8px; color: #374151;">${page.path}</span>
                </div>
                <div style="font-weight: bold; color: #3730a3;">${page.views.toLocaleString()} views</div>
              </div>
            `,
              )
              .join("")}
          </div>

          ${
            insights.length > 0
              ? `
          <div style="background: #f0f9ff; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #3730a3;">
            <h2 style="color: #1e1b4b; margin-top: 0;">💡 Key Insights</h2>
            ${insights
              .map(
                (insight) => `
              <div style="margin-bottom: 12px; padding: 12px; background: white; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                ${insight}
              </div>
            `,
              )
              .join("")}
          </div>
          `
              : ""
          }

          ${
            recommendations.length > 0
              ? `
          <div style="background: #f0fdf4; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #10b981;">
            <h2 style="color: #1e1b4b; margin-top: 0;">🎯 Recommendations</h2>
            ${recommendations
              .map(
                (rec) => `
              <div style="margin-bottom: 12px; padding: 12px; background: white; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                • ${rec}
              </div>
            `,
              )
              .join("")}
          </div>
          `
              : ""
          }

          <div style="text-align: center; padding: 20px; background: #f8fafc; border-radius: 10px; margin-top: 30px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This report was automatically generated by AI Fusion Analytics
            </p>
            <p style="margin: 5px 0 0 0; color: #64748b; font-size: 12px;">
              For questions, contact: info@aifusion.ie
            </p>
          </div>
        </body>
      </html>
    `

    const textContent = `
AI Fusion Analytics - ${periodText} Report
${dateRange}

KEY METRICS:
- Page Views: ${data.pageViews.toLocaleString()} (${getTrendEmoji(growth.pageViews.trend)} ${growth.pageViews.percentage}%)
- Unique Visitors: ${data.uniqueVisitors.toLocaleString()} (${getTrendEmoji(growth.uniqueVisitors.trend)} ${growth.uniqueVisitors.percentage}%)
- Total Events: ${data.totalEvents.toLocaleString()} (${getTrendEmoji(growth.totalEvents.trend)} ${growth.totalEvents.percentage}%)

TOP PAGES:
${data.topPages
  .slice(0, 5)
  .map((page, index) => `${index + 1}. ${page.path} - ${page.views.toLocaleString()} views`)
  .join("\n")}

KEY INSIGHTS:
${insights.map((insight) => `• ${insight}`).join("\n")}

RECOMMENDATIONS:
${recommendations.map((rec) => `• ${rec}`).join("\n")}

---
This report was automatically generated by AI Fusion Analytics
For questions, contact: info@aifusion.ie
    `

    const result = await resend.emails.send({
      from: "AI Fusion Analytics <analytics@aifusion.ie>",
      to: recipients,
      subject: `📊 AI Fusion ${periodText} Analytics Report - ${dateRange}`,
      html: htmlContent,
      text: textContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending analytics report:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

export async function generateMockData(period: ReportPeriod): Promise<AnalyticsData> {
  // Generate realistic mock data for demonstration
  const baseViews = period.type === "weekly" ? 150 : 600
  const variance = Math.random() * 0.4 + 0.8 // 80-120% of base

  return {
    pageViews: Math.floor(baseViews * variance),
    uniqueVisitors: Math.floor(baseViews * variance * 0.7),
    totalEvents: Math.floor(baseViews * variance * 1.5),
    topPages: [
      { path: "/", views: Math.floor(baseViews * variance * 0.4) },
      { path: "/ai-training", views: Math.floor(baseViews * variance * 0.25) },
      { path: "/business", views: Math.floor(baseViews * variance * 0.15) },
      { path: "/upcoming-courses", views: Math.floor(baseViews * variance * 0.12) },
      { path: "/services", views: Math.floor(baseViews * variance * 0.08) },
    ],
    trafficByHour: Array.from({ length: 24 }, (_, hour) => ({
      hour,
      views: Math.floor(Math.random() * 20 + 5),
    })),
    recentActivity: [
      {
        timestamp: new Date().toISOString(),
        event: "page_view",
        path: "/",
        userAgent: "Mozilla/5.0...",
      },
    ],
  }
}
