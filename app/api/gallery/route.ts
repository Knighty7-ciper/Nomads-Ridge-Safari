import { query } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// GET all gallery images
export async function GET() {
  try {
    const results = await query(
      'SELECT * FROM gallery ORDER BY display_order ASC, created_at DESC'
    )
    return NextResponse.json(results, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    )
  }
}

// POST - Create new gallery image (Admin only)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      destination_id,
      title,
      description,
      image_url,
      category,
      alt_text,
      featured,
      display_order,
    } = body

    // Validate required fields
    if (!title || !image_url) {
      return NextResponse.json(
        { error: 'Missing required fields: title and image_url' },
        { status: 400 }
      )
    }

    const sql = `
      INSERT INTO gallery (
        destination_id, title, description, image_url, category,
        alt_text, featured, display_order
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    const values = [
      destination_id || null,
      title,
      description || null,
      image_url,
      category || null,
      alt_text || null,
      featured || false,
      display_order || 0,
    ]

    const result = await query(sql, values)
    return NextResponse.json(
      { message: 'Gallery image created successfully', result },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating gallery image:', error)
    return NextResponse.json(
      { error: 'Failed to create gallery image' },
      { status: 500 }
    )
  }
}
