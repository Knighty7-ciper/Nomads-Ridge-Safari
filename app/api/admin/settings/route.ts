import { NextRequest, NextResponse } from "next/server"
import mysql from 'mysql2/promise'

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'nomads_ridge'
}

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
    const connection = await mysql.createConnection(dbConfig)
    const [rows] = await connection.execute('SELECT * FROM site_settings LIMIT 1')
    await connection.end()

    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json({ data: rows[0] })
    }

    // Return defaults if no settings found
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
    const connection = await mysql.createConnection(dbConfig)

    // Check if settings exist
    const [existing] = await connection.execute('SELECT id FROM site_settings LIMIT 1')
    
    if (Array.isArray(existing) && existing.length > 0) {
      // Update existing
      const updates = Object.entries(body).map(([key]) => `${key} = ?`).join(', ')
      const values = Object.values(body)
      await connection.execute(`UPDATE site_settings SET ${updates}`, values)
    } else {
      // Insert new
      const columns = Object.keys(body).join(', ')
      const placeholders = Object.keys(body).map(() => '?').join(', ')
      const values = Object.values(body)
      await connection.execute(`INSERT INTO site_settings (${columns}) VALUES (${placeholders})`, values)
    }

    await connection.end()
    return NextResponse.json({ data: body })
  } catch (error) {
    console.error("[v0] Update settings error:", error)
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 })
  }
}
