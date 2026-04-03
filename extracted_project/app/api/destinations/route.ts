import { query } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// GET all destinations
export async function GET() {
  try {
    const results = await query('SELECT * FROM destinations ORDER BY created_at DESC')
    return NextResponse.json(results, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    )
  }
}

// POST - Create new destination (Admin only)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      country_id,
      name,
      slug,
      description,
      long_description,
      image_url,
      best_season,
      wildlife_species,
      location,
      altitude,
      best_time_to_visit,
      price_range,
      duration_days,
    } = body

    // Validate required fields
    if (!country_id || !name || !slug || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const sql = `
      INSERT INTO destinations (
        country_id, name, slug, description, long_description, image_url,
        best_season, wildlife_species, location, altitude, best_time_to_visit,
        price_range, duration_days
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const values = [
      country_id,
      name,
      slug,
      description,
      long_description || null,
      image_url || null,
      best_season || null,
      wildlife_species || null,
      location || null,
      altitude || null,
      best_time_to_visit || null,
      price_range || null,
      duration_days || null,
    ]

    const result = await query(sql, values)
    return NextResponse.json(
      { message: 'Destination created successfully', result },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating destination:', error)
    return NextResponse.json(
      { error: 'Failed to create destination' },
      { status: 500 }
    )
  }
}
