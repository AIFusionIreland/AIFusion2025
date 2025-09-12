import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with error handling
let resend: Resend | null = null

try {
  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    resend = new Resend(apiKey)
  }
} catch (error) {
  console.error("Failed to initialize Resend:", error)
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is properly configured
    if (!resend) {
      console.error("Email service is not configured - missing RESEND_API_KEY")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const body = await request.json()
    console.log("Received request body:", body)

    const {
      name,
      email,
      phone,
      message,
      subject = "Contact Form Submission",
      inquiryType,
      organization,
      paymentOption,
      experience,
      goals,
      company,
      industry,
    } = body

    // Basic validation - only check for name and email as minimum requirements
    if (!name || !email) {
      console.log("Missing required fields:", { name: !!name, email: !!email })
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Build email content based on inquiry type
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
          New Contact Form Submission - ${inquiryType || "General"}
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4f46e5; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${industry ? `<p><strong>Industry:</strong> ${industry}</p>` : ""}
        </div>
    `

    // Add inquiry-specific information
    if (inquiryType && inquiryType.startsWith("course-")) {
      emailContent += `
        <div style="background-color: #e0e7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #4f46e5; margin-top: 0;">Course Information</h3>
          <p><strong>Course Type:</strong> ${inquiryType === "course-online" ? "Online Course" : "In-Person Course"}</p>
          ${paymentOption ? `<p><strong>Payment Option:</strong> ${paymentOption}</p>` : ""}
          ${experience ? `<p><strong>AI Experience:</strong> ${experience}</p>` : ""}
          ${goals ? `<p><strong>Learning Goals:</strong> ${goals}</p>` : ""}
        </div>
      `
    }

    if (message) {
      emailContent += `
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
          <h3 style="color: #4f46e5; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `
    }

    emailContent += `
        <div style="margin-top: 20px; padding: 15px; background-color: #e0e7ff; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #6366f1;">
            <strong>Sent from:</strong> AI Fusion Website Contact Form<br>
            <strong>Time:</strong> ${new Date().toLocaleString()}<br>
            <strong>Inquiry Type:</strong> ${inquiryType || "General"}
          </p>
        </div>
      </div>
    `

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "AI Fusion Contact <noreply@aifusion.ie>",
      to: ["info@aifusion.ie"],
      subject: `${subject} - ${name}`,
      html: emailContent,
    })

    console.log("Email sent successfully:", emailData)

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully!",
        emailId: emailData.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error sending email:", error)

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
