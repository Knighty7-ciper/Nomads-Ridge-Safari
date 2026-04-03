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

// GET all destinations
export async function GET(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const connection = await mysql.createConnection(dbConfig)
    const [rows] = await connection.execute('SELECT * FROM destinations ORDER BY created_at DESC')
    await connection.end()
    return NextResponse.json({ data: rows })
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

    const connection = await mysql.createConnection(dbConfig)
    const [result] = await connection.execute(
      'INSERT INTO destinations (name, country_id, description, image_url, highlights, best_time_to_visit, wildlife) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, country_id, description, image_url, highlights, best_time_to_visit, wildlife]
    )
    await connection.end()

    return NextResponse.json({ data: { id: (result as any).insertId, name, country_id, description, image_url, highlights, best_time_to_visit, wildlife } }, { status: 201 })
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

    const connection = await mysql.createConnection(dbConfig)
    const updateKeys = Object.keys(updates)
    const updateValues = Object.values(updates)
    const updateStr = updateKeys.map(k => `${k} = ?`).join(', ')

    await connection.query(`UPDATE destinations SET ${updateStr} WHERE id = ?`, [...updateValues, id])
    await connection.end()

    return NextResponse.json({ data: { id, ...updates } })
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

    const connection = await mysql.createConnection(dbConfig)
    await connection.execute('DELETE FROM destinations WHERE id = ?', [id])
    await connection.end()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Delete destination error:", error)
    return NextResponse.json({ error: "Failed to delete destination" }, { status: 500 })
  }
}
