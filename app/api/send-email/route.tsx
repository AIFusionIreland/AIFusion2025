import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
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

    // Validate required fields
    if (!name || !email || !inquiryType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create different email subjects and content based on inquiry type
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
          
          <h3>Message:</h3>
          <p>${message}</p>
          
          <hr>
          <p><em>This inquiry was submitted through the AI Fusion contact dialog.</em></p>
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
          
          <h3>Goals:</h3>
          <p>${goals || "Not provided"}</p>
          
          <hr>
          <p><em>This enrollment request was submitted through the AI Fusion contact dialog.</em></p>
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
          
          <h3>Goals:</h3>
          <p>${goals || "Not provided"}</p>
          
          <hr>
          <p><em>This enrollment request was submitted through the AI Fusion contact dialog.</em></p>
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
          
          <h3>Message:</h3>
          <p>${message}</p>
          
          <hr>
          <p><em>This business inquiry was submitted through the AI Fusion contact dialog.</em></p>
        `
        break

      default:
        subject = "New Contact Form Submission - AI Fusion"
        emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          
          <h3>Message:</h3>
          <p>${message}</p>
          
          <hr>
          <p><em>This inquiry was submitted through the AI Fusion website.</em></p>
        `
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "AI Fusion Contact <noreply@aifusion.ie>",
      to: ["info@aifusion.ie"],
      subject: subject,
      html: emailContent,
      replyTo: email, // This allows you to reply directly to the person who submitted the form
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
