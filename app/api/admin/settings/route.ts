import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl!, supabaseKey!)

function checkAdminAuth(request: NextRequest): boolean {
  const token = request.headers.get("authorization")?.replace("Bearer ", "")
  return !!token && token.startsWith("admin_token_")
}

// GET settings
export async function GET(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { data, error } = await supabase.from("site_settings").select("*").single()

    if (error && error.code === "PGRST116") {
      // No settings found, return defaults
      return NextResponse.json({
        data: {
          company_name: "Nomads Ridge Safaris",
          contact_email: "nomadsridgesafaris@gmail.com",
          contact_phone: "+254 714 703 892",
          whatsapp_number: "+254 714 703 892",
          facebook_url: "https://www.facebook.com/profile.php?id=61586691939066",
          instagram_url: "https://www.instagram.com/nomadsridgesafaris",
          location: "Kenya",
          description: "",
        },
      })
    }

    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error("[v0] Get settings error:", error)
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
  }
}

// PUT update settings
export async function PUT(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()

    const { data: existing } = await supabase.from("site_settings").select("id").single()

    let result

    if (existing) {
      result = await supabase.from("site_settings").update(body).eq("id", existing.id).select()
    } else {
      result = await supabase.from("site_settings").insert([body]).select()
    }

    const { data, error } = result

    if (error) throw error
    return NextResponse.json({ data: data?.[0] })
  } catch (error) {
    console.error("[v0] Update settings error:", error)
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 })
  }
}
