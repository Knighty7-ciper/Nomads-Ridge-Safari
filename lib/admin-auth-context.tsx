"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface AdminAuthContextType {
  isAuthenticated: boolean
  email: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  checkAuth: () => boolean
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined)

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    // Check if already authenticated
    const token = localStorage.getItem("admin_token")
    const storedEmail = localStorage.getItem("admin_email")
    if (token) {
      setIsAuthenticated(true)
      setEmail(storedEmail)
    }
  }, [])

  const login = async (inputEmail: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputEmail, password }),
      })

      const data = await response.json()

      if (data.success) {
        localStorage.setItem("admin_token", data.token)
        localStorage.setItem("admin_email", inputEmail)
        setIsAuthenticated(true)
        setEmail(inputEmail)
        return true
      }
      return false
    } catch (error) {
      console.error("[v0] Admin login error:", error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("admin_email")
    setIsAuthenticated(false)
    setEmail(null)
  }

  const checkAuth = (): boolean => {
    return isAuthenticated
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, email, login, logout, checkAuth }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider")
  }
  return context
}
