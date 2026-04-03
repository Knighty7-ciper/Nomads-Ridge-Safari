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

// GET all gallery images
export async function GET(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const connection = await mysql.createConnection(dbConfig)
    const [rows] = await connection.execute('SELECT * FROM gallery ORDER BY created_at DESC')
    await connection.end()
    return NextResponse.json({ data: rows })
  } catch (error) {
    console.error("[v0] Get gallery error:", error)
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 })
  }
}

// POST create gallery image
export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { image_url, caption, destination_id, category } = body

    const connection = await mysql.createConnection(dbConfig)
    const [result] = await connection.execute(
      'INSERT INTO gallery (image_url, caption, destination_id, category) VALUES (?, ?, ?, ?)',
      [image_url, caption, destination_id, category]
    )
    await connection.end()

    return NextResponse.json({ data: { id: (result as any).insertId, image_url, caption, destination_id, category } }, { status: 201 })
  } catch (error) {
    console.error("[v0] Create gallery error:", error)
    return NextResponse.json({ error: "Failed to create gallery image" }, { status: 500 })
  }
}

// PUT update gallery image
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

    await connection.query(`UPDATE gallery SET ${updateStr} WHERE id = ?`, [...updateValues, id])
    await connection.end()

    return NextResponse.json({ data: { id, ...updates } })
  } catch (error) {
    console.error("[v0] Update gallery error:", error)
    return NextResponse.json({ error: "Failed to update gallery image" }, { status: 500 })
  }
}

// DELETE gallery image
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
    await connection.execute('DELETE FROM gallery WHERE id = ?', [id])
    await connection.end()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Delete gallery error:", error)
    return NextResponse.json({ error: "Failed to delete gallery image" }, { status: 500 })
  }
}
