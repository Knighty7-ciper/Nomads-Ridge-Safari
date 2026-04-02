import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl!, supabaseKey!)

function checkAdminAuth(request: NextRequest): boolean {
  const token = request.headers.get("authorization")?.replace("Bearer ", "")
  return !!token && token.startsWith("admin_token_")
}

// GET all destinations
export async function GET(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { data, error } = await supabase.from("destinations").select("*").order("created_at", { ascending: false })

    if (error) throw error
    return NextResponse.json({ data })
  } catch (error) {
    console.error("[v0] Get destinations error:", error)
    return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 })
  }
}

// POST create destination
export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, country_id, description, image_url, highlights, best_time_to_visit, wildlife } = body

    const { data, error } = await supabase
      .from("destinations")
      .insert([
        {
          name,
          country_id,
          description,
          image_url,
          highlights,
          best_time_to_visit,
          wildlife,
        },
      ])
      .select()

    if (error) throw error
    return NextResponse.json({ data: data?.[0] }, { status: 201 })
  } catch (error) {
    console.error("[v0] Create destination error:", error)
    return NextResponse.json({ error: "Failed to create destination" }, { status: 500 })
  }
}

// PUT update destination
export async function PUT(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { id, ...updates } = body

    const { data, error } = await supabase
      .from("destinations")
      .update(updates)
      .eq("id", id)
      .select()

    if (error) throw error
    return NextResponse.json({ data: data?.[0] })
  } catch (error) {
    console.error("[v0] Update destination error:", error)
    return NextResponse.json({ error: "Failed to update destination" }, { status: 500 })
  }
}

// DELETE destination
export async function DELETE(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 })
    }

    const { error } = await supabase.from("destinations").delete().eq("id", id)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Delete destination error:", error)
    return NextResponse.json({ error: "Failed to delete destination" }, { status: 500 })
  }
}
