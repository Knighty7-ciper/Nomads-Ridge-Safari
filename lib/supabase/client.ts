"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// Check if Supabase environment variables are available
export const isSupabaseConfigured =
  typeof window !== "undefined" &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
  process.env.NEXT_PUBLIC_SUPABASE_URL.length > 0 &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "string" &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 0

let supabaseInstance: ReturnType<typeof createClientComponentClient> | null = null

export const getSupabaseClient = () => {
  if (typeof window === "undefined") {
    // Server-side: return null, don't try to create client
    return null
  }

  if (!isSupabaseConfigured) {
    console.warn("[v0] Supabase environment variables are not configured")
    return null
  }

  if (!supabaseInstance) {
    supabaseInstance = createClientComponentClient()
  }

  return supabaseInstance
}

export const supabase = getSupabaseClient()
