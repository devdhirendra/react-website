import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, phone, industry, projectType, budget, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !industry || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Insert contact form submission
    const { data, error } = await supabase.from("contact_submissions").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        company,
        phone,
        industry,
        project_type: projectType,
        budget,
        message,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
    }

    // Here you could also send an email notification
    // using a service like SendGrid, Resend, etc.

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
