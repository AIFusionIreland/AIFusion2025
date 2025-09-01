import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    // Initialize Resend with the API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const {
      name,
      email,
      phone,
      message,
      inquiryType,
      organization,
      paymentOption,
      experience,
      goals,
      company,
      industry,
    } = body

    // Create different email subjects based on inquiry type
    let subject = ""
    let emailContent = ""

    switch (inquiryType) {
      case "general":
        subject = "General Inquiry - AI Fusion"
        emailContent = `
          <h2>General Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
        break

      case "course-online":
        subject = "Online Course Enrollment Request - AI Fusion"
        emailContent = `
          <h2>Online Course Enrollment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
          <p><strong>Payment Option:</strong> ${paymentOption || "Not selected"}</p>
          <p><strong>AI Experience Level:</strong> ${experience || "Not selected"}</p>
          <p><strong>Goals:</strong></p>
          <p>${goals || "Not provided"}</p>
        `
        break

      case "course-inperson":
        subject = "In-Person Course Enrollment Request - AI Fusion"
        emailContent = `
          <h2>In-Person Course Enrollment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
          <p><strong>Payment Option:</strong> ${paymentOption || "Not selected"}</p>
          <p><strong>AI Experience Level:</strong> ${experience || "Not selected"}</p>
          <p><strong>Goals:</strong></p>
          <p>${goals || "Not provided"}</p>
        `
        break

      case "business":
        subject = "Business Consultation Inquiry - AI Fusion"
        emailContent = `
          <h2>Business Consultation Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Industry:</strong> ${industry || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
        break

      default:
        subject = "Contact Form Submission - AI Fusion"
        emailContent = `
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "AI Fusion Website <noreply@aifusion.ie>",
      to: ["info@aifusion.ie"],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${emailContent}
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This inquiry was submitted through the AI Fusion website contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
