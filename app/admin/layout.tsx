"use client"

import React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Menu, X } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    const storedEmail = localStorage.getItem("admin_email")

    if (!token) {
      router.push("/")
      return
    }

    setIsAuthenticated(true)
    setEmail(storedEmail || "")
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("admin_email")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-amber-950">Admin Dashboard</h1>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-600">{email}</span>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 p-4 space-y-2">
            <p className="text-sm text-gray-600 mb-4">{email}</p>
            <Button onClick={handleLogout} variant="outline" className="w-full flex items-center gap-2 bg-transparent">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col">
          <nav className="flex-1 p-6 space-y-2">
            <Link
              href="/admin"
              className="block px-4 py-2 rounded hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/destinations"
              className="block px-4 py-2 rounded hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/admin/gallery"
              className="block px-4 py-2 rounded hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/admin/settings"
              className="block px-4 py-2 rounded hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition-colors"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}
