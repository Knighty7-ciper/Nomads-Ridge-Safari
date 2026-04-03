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
      <div className="flex items-center justify-center min-h-screen bg-dusk">
        <div className="text-center">
          <p className="text-sand">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-dusk text-dust">
      {/* Header */}
      <header className="bg-card border-b border-clay/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-dust">Admin Dashboard</h1>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-sand">{email}</span>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 bg-transparent border-clay/30 text-sand hover:bg-clay/10">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded text-dust"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-clay/30 p-4 space-y-2">
            <p className="text-sm text-sand mb-4">{email}</p>
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
        <aside className="hidden md:flex w-64 bg-card border-r border-clay/30 flex-col">
          <nav className="flex-1 p-6 space-y-2">
            <Link
              href="/admin"
              className="block px-4 py-2 rounded hover:bg-clay/10 text-sand hover:text-ochre transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/destinations"
              className="block px-4 py-2 rounded hover:bg-clay/10 text-sand hover:text-ochre transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/admin/gallery"
              className="block px-4 py-2 rounded hover:bg-clay/10 text-sand hover:text-ochre transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/admin/settings"
              className="block px-4 py-2 rounded hover:bg-clay/10 text-sand hover:text-ochre transition-colors"
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