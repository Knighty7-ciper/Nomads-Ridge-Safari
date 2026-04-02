import { query } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if email matches the admin email
    const adminEmail = process.env.ADMIN_EMAIL || 'bknglabs.dev@gmail.com'
    if (email !== adminEmail) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 401 }
      )
    }

    // Get admin user from database
    const results: any = await query(
      'SELECT * FROM admin_users WHERE email = ?',
      [email]
    )

    if (!results || results.length === 0) {
      return NextResponse.json(
        { error: 'Admin user not found' },
        { status: 401 }
      )
    }

    const admin = results[0]

    // Compare password
    const validPassword = await bcrypt.compare(password, admin.password_hash)
    if (!validPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Create session (you can use cookies or JWT)
    const response = NextResponse.json(
      { message: 'Login successful', admin: { id: admin.id, email: admin.email } },
      { status: 200 }
    )

    // Set secure HTTP-only cookie
    response.cookies.set('admin_session', email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours
    })

    return response
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    )
  }
}
