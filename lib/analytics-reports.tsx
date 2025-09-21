import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ReportData {
  period: string
  startDate: string
  endDate: string
  totalEvents: number
  pageViews: number
  uniqueVisitors: number
  topPages: { page: string; count: number }[]
  eventsByDay: { date: string; count: number }[]
  growthMetrics: {
    pageViewsGrowth: number
    visitorsGrowth: number
    eventsGrowth: number
  }
  insights: string[]
}

export class AnalyticsReporter {
  private static instance: AnalyticsReporter

  private constructor() {}

  public static getInstance(): AnalyticsReporter {
    if (!AnalyticsReporter.instance) {
      AnalyticsReporter.instance = new AnalyticsReporter()
    }
    return AnalyticsReporter.instance
  }

  async generateReport(type: "weekly" | "monthly"): Promise<ReportData> {
    const endDate = new Date()
    const startDate = new Date()

    if (type === "weekly") {
      startDate.setDate(endDate.getDate() - 7)
    } else {
      startDate.setMonth(endDate.getMonth() - 1)
    }

    // Fetch analytics data for the period
    const currentPeriodData = await this.fetchAnalyticsData(startDate, endDate)

    // Fetch previous period data for comparison
    const previousStartDate = new Date(startDate)
    const previousEndDate = new Date(startDate)

    if (type === "weekly") {
      previousStartDate.setDate(startDate.getDate() - 7)
    } else {
      previousStartDate.setMonth(startDate.getMonth() - 1)
    }

    const previousPeriodData = await this.fetchAnalyticsData(previousStartDate, previousEndDate)

    // Calculate growth metrics
    const growthMetrics = {
      pageViewsGrowth: this.calculateGrowth(currentPeriodData.pageViews, previousPeriodData.pageViews),
      visitorsGrowth: this.calculateGrowth(currentPeriodData.uniqueVisitors, previousPeriodData.uniqueVisitors),
      eventsGrowth: this.calculateGrowth(currentPeriodData.totalEvents, previousPeriodData.totalEvents),
    }

    // Generate insights
    const insights = this.generateInsights(currentPeriodData, growthMetrics, type)

    return {
      period: type === "weekly" ? "Weekly" : "Monthly",
      startDate: startDate.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      ...currentPeriodData,
      growthMetrics,
      insights,
    }
  }

  private async fetchAnalyticsData(startDate: Date, endDate: Date) {
    // In a real implementation, this would fetch from your database
    // For now, we'll simulate the data structure

    // This is a placeholder - replace with actual database queries
    const mockData = {
      totalEvents: Math.floor(Math.random() * 1000) + 500,
      pageViews: Math.floor(Math.random() * 800) + 300,
      uniqueVisitors: Math.floor(Math.random() * 200) + 100,
      topPages: [
        { page: "/", count: Math.floor(Math.random() * 200) + 100 },
        { page: "/ai-training", count: Math.floor(Math.random() * 150) + 50 },
        { page: "/upcoming-courses", count: Math.floor(Math.random() * 100) + 30 },
        { page: "/business", count: Math.floor(Math.random() * 80) + 20 },
        { page: "/services", count: Math.floor(Math.random() * 60) + 15 },
      ],
      eventsByDay: this.generateDailyData(startDate, endDate),
    }

    return mockData
  }

  private generateDailyData(startDate: Date, endDate: Date) {
    const days = []
    const currentDate = new Date(startDate)

    while (currentDate <= endDate) {
      days.push({
        date: currentDate.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 100) + 20,
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return days
  }

  private calculateGrowth(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0
    return Math.round(((current - previous) / previous) * 100)
  }

  private generateInsights(data: any, growth: any, type: "weekly" | "monthly"): string[] {
    const insights = []
    const period = type === "weekly" ? "week" : "month"

    // Traffic insights
    if (growth.pageViewsGrowth > 10) {
      insights.push(`🚀 Great news! Page views increased by ${growth.pageViewsGrowth}% this ${period}.`)
    } else if (growth.pageViewsGrowth < -10) {
      insights.push(
        `📉 Page views decreased by ${Math.abs(growth.pageViewsGrowth)}% this ${period}. Consider reviewing your content strategy.`,
      )
    } else {
      insights.push(`📊 Page views remained stable this ${period} with ${growth.pageViewsGrowth}% change.`)
    }

    // Visitor insights
    if (growth.visitorsGrowth > 15) {
      insights.push(`👥 Excellent! You gained ${growth.visitorsGrowth}% more unique visitors this ${period}.`)
    } else if (growth.visitorsGrowth < 0) {
      insights.push(
        `👤 Unique visitors decreased by ${Math.abs(growth.visitorsGrowth)}% this ${period}. Focus on SEO and marketing efforts.`,
      )
    }

    // Top page insights
    const topPage = data.topPages[0]
    if (topPage) {
      if (topPage.page === "/") {
        insights.push(`🏠 Your homepage continues to be the most popular page with ${topPage.count} views.`)
      } else {
        insights.push(`⭐ "${topPage.page}" was your most popular page with ${topPage.count} views this ${period}.`)
      }
    }

    // Course-specific insights
    const coursePages = data.topPages.filter(
      (page: any) => page.page.includes("course") || page.page.includes("training"),
    )
    if (coursePages.length > 0) {
      const totalCourseViews = coursePages.reduce((sum: number, page: any) => sum + page.count, 0)
      insights.push(`🎓 AI training pages received ${totalCourseViews} views, showing strong interest in your courses.`)
    }

    // Business insights
    const businessPages = data.topPages.filter(
      (page: any) => page.page.includes("business") || page.page.includes("services"),
    )
    if (businessPages.length > 0) {
      const totalBusinessViews = businessPages.reduce((sum: number, page: any) => sum + page.count, 0)
      insights.push(`💼 Business-related pages received ${totalBusinessViews} views, indicating commercial interest.`)
    }

    return insights
  }

  async sendReport(reportData: ReportData, recipients: string[]) {
    const htmlContent = this.generateReportHTML(reportData)

    try {
      const emailData = await resend.emails.send({
        from: "AI Fusion Analytics <analytics@aifusion.ie>",
        to: recipients,
        subject: `${reportData.period} Analytics Report - AI Fusion Website`,
        html: htmlContent,
      })

      console.log(`${reportData.period} report sent successfully:`, emailData)
      return { success: true, emailId: emailData.data?.id }
    } catch (error) {
      console.error(`Error sending ${reportData.period.toLowerCase()} report:`, error)
      throw error
    }
  }

  private generateReportHTML(data: ReportData): string {
    const formatNumber = (num: number) => num.toLocaleString()
    const formatGrowth = (growth: number) => {
      const sign = growth > 0 ? "+" : ""
      const color = growth > 0 ? "#10B981" : growth < 0 ? "#EF4444" : "#6B7280"
      return `<span style="color: ${color}; font-weight: bold;">${sign}${growth}%</span>`
    }

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.period} Analytics Report</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 30px 20px; }
        .metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin: 30px 0; }
        .metric-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; text-align: center; }
        .metric-value { font-size: 32px; font-weight: bold; color: #1a202c; margin-bottom: 5px; }
        .metric-label { font-size: 14px; color: #64748b; margin-bottom: 8px; }
        .metric-growth { font-size: 14px; }
        .section { margin: 30px 0; }
        .section h2 { color: #1a202c; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
        .top-pages { background: #f8fafc; border-radius: 8px; padding: 20px; }
        .page-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e2e8f0; }
        .page-item:last-child { border-bottom: none; }
        .page-path { font-family: monospace; color: #4f46e5; font-weight: 500; }
        .page-count { background: #4f46e5; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold; }
        .insights { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; padding: 20px; }
        .insight-item { margin: 10px 0; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 6px; }
        .footer { background: #1a202c; color: #a0aec0; padding: 20px; text-align: center; font-size: 14px; }
        .footer a { color: #667eea; text-decoration: none; }
        .chart-placeholder { background: #f1f5f9; border: 2px dashed #cbd5e0; border-radius: 8px; padding: 40px; text-align: center; color: #64748b; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>${data.period} Analytics Report</h1>
          <p>${data.startDate} to ${data.endDate}</p>
        </div>

        <!-- Content -->
        <div class="content">
          <!-- Key Metrics -->
          <div class="section">
            <h2>📊 Key Metrics</h2>
            <div class="metric-grid">
              <div class="metric-card">
                <div class="metric-value">${formatNumber(data.pageViews)}</div>
                <div class="metric-label">Page Views</div>
                <div class="metric-growth">${formatGrowth(data.growthMetrics.pageViewsGrowth)} vs last ${data.period.toLowerCase()}</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">${formatNumber(data.uniqueVisitors)}</div>
                <div class="metric-label">Unique Visitors</div>
                <div class="metric-growth">${formatGrowth(data.growthMetrics.visitorsGrowth)} vs last ${data.period.toLowerCase()}</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">${formatNumber(data.totalEvents)}</div>
                <div class="metric-label">Total Events</div>
                <div class="metric-growth">${formatGrowth(data.growthMetrics.eventsGrowth)} vs last ${data.period.toLowerCase()}</div>
              </div>
            </div>
          </div>

          <!-- Top Pages -->
          <div class="section">
            <h2>🏆 Top Performing Pages</h2>
            <div class="top-pages">
              ${data.topPages
                .map(
                  (page) => `
                <div class="page-item">
                  <span class="page-path">${page.page}</span>
                  <span class="page-count">${formatNumber(page.count)}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <!-- Traffic Trend -->
          <div class="section">
            <h2>📈 Traffic Trend</h2>
            <div class="chart-placeholder">
              <p>📊 Daily traffic visualization</p>
              <p style="font-size: 12px; margin-top: 10px;">
                Peak day: ${data.eventsByDay.reduce((max, day) => (day.count > max.count ? day : max), data.eventsByDay[0])?.date} 
                (${data.eventsByDay.reduce((max, day) => (day.count > max.count ? day : max), data.eventsByDay[0])?.count} events)
              </p>
            </div>
          </div>

          <!-- Insights -->
          <div class="section">
            <div class="insights">
              <h2 style="color: white; border-bottom-color: rgba(255,255,255,0.3);">💡 Key Insights</h2>
              ${data.insights
                .map(
                  (insight) => `
                <div class="insight-item">${insight}</div>
              `,
                )
                .join("")}
            </div>
          </div>

          <!-- Recommendations -->
          <div class="section">
            <h2>🎯 Recommendations</h2>
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px;">
              ${this.generateRecommendations(data)
                .map(
                  (rec) => `
                <p style="margin: 10px 0; color: #92400e;">• ${rec}</p>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>This report was automatically generated by AI Fusion Analytics</p>
          <p>Visit your <a href="https://aifusion.ie/admin/analytics">analytics dashboard</a> for more detailed insights</p>
          <p style="margin-top: 15px; font-size: 12px;">
            AI Fusion - AI Made Simple. Innovation for Everyone.<br>
            <a href="mailto:info@aifusion.ie">info@aifusion.ie</a> | <a href="https://aifusion.ie">aifusion.ie</a>
          </p>
        </div>
      </div>
    </body>
    </html>
    `
  }

  private generateRecommendations(data: ReportData): string[] {
    const recommendations = []

    // Growth-based recommendations
    if (data.growthMetrics.pageViewsGrowth < 0) {
      recommendations.push("Consider creating more engaging content or improving SEO to boost page views")
    }

    if (data.growthMetrics.visitorsGrowth < 5) {
      recommendations.push("Focus on marketing campaigns and social media promotion to attract new visitors")
    }

    // Content recommendations
    const coursePageViews = data.topPages
      .filter((page) => page.page.includes("course") || page.page.includes("training"))
      .reduce((sum, page) => sum + page.count, 0)

    if (coursePageViews > data.pageViews * 0.3) {
      recommendations.push(
        "High interest in AI courses detected - consider expanding course offerings or adding more training content",
      )
    }

    // Business recommendations
    const businessPageViews = data.topPages
      .filter((page) => page.page.includes("business") || page.page.includes("services"))
      .reduce((sum, page) => sum + page.count, 0)

    if (businessPageViews > data.pageViews * 0.2) {
      recommendations.push(
        "Strong business interest shown - consider adding more case studies or business-focused content",
      )
    }

    // Default recommendations
    if (recommendations.length === 0) {
      recommendations.push("Continue your current content strategy - metrics are performing well")
      recommendations.push("Consider A/B testing different call-to-action buttons to improve conversions")
    }

    return recommendations
  }
}

export const analyticsReporter = AnalyticsReporter.getInstance()
