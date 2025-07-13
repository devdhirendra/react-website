import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function GET() {
  try {
    const supabase = createServerClient()

    // Test the connection by trying to fetch from a table
    const { data, error } = await supabase.from("contact_submissions").select("count(*)").limit(1)

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          message: "Failed to connect to Supabase. Please check your environment variables.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Supabase!",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Environment variables not configured",
        message: "Please set up your Supabase environment variables.",
      },
      { status: 500 },
    )
  }
}
