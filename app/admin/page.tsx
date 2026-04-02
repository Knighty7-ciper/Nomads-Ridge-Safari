"use client"

import { useState, useEffect } from "react"
import { AlertCircle, MapPin, Image as ImageIcon, Settings, Radio } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    destinations: 0,
    gallery: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("admin_token")

        const [destRes, galleryRes] = await Promise.all([
          fetch("/api/admin/destinations", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("/api/admin/gallery", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ])

        const destData = await destRes.json()
        const galleryData = await galleryRes.json()

        setStats({
          destinations: destData.data?.length || 0,
          gallery: galleryData.data?.length || 0,
        })
      } catch (err) {
        console.error("[v0] Fetch stats error:", err)
        setError("Failed to load statistics")
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <main className="min-h-screen bg-dusk text-dust pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-5xl font-light mb-2">Admin Dashboard</h1>
          <p className="text-dust/60">Manage your Nomads Ridge Safaris content</p>
        </div>

        {error && (
          <div className="mb-8 p-6 bg-clay/10 border border-clay text-clay rounded-sm flex gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dust/60 uppercase text-xs tracking-wider mb-3">Destinations</p>
                <p className="font-serif text-5xl font-light text-ochre">{loading ? "-" : stats.destinations}</p>
              </div>
              <MapPin className="w-6 h-6 text-ochre/40" />
            </div>
          </div>

          <div className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dust/60 uppercase text-xs tracking-wider mb-3">Gallery</p>
                <p className="font-serif text-5xl font-light text-ochre">{loading ? "-" : stats.gallery}</p>
              </div>
              <ImageIcon className="w-6 h-6 text-ochre/40" />
            </div>
          </div>

          <div className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dust/60 uppercase text-xs tracking-wider mb-3">Safari Types</p>
                <p className="font-serif text-5xl font-light text-ochre">5</p>
              </div>
              <Radio className="w-6 h-6 text-ochre/40" />
            </div>
          </div>
        </div>

        {/* Quick Access Menu */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-light mb-8 text-dust">Quick Access</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/admin/destinations" className="group border border-clay/30 p-8 hover:bg-clay/5 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-dust mb-2 group-hover:text-ochre transition-colors">Destinations</h3>
                  <p className="text-dust/60 text-sm">Add, edit, or delete safari destinations across Kenya, Tanzania, Uganda, and Rwanda</p>
                </div>
                <MapPin className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
              </div>
              <span className="text-xs uppercase tracking-wider text-ochre">Manage Now →</span>
            </Link>

            <Link href="/admin/gallery" className="group border border-clay/30 p-8 hover:bg-clay/5 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-dust mb-2 group-hover:text-ochre transition-colors">Gallery</h3>
                  <p className="text-dust/60 text-sm">Upload, organize, and manage safari photography with titles, descriptions, and metadata</p>
                </div>
                <ImageIcon className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
              </div>
              <span className="text-xs uppercase tracking-wider text-ochre">Manage Now →</span>
            </Link>

            <Link href="/admin/safari-types" className="group border border-clay/30 p-8 hover:bg-clay/5 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-dust mb-2 group-hover:text-ochre transition-colors">Safari Types</h3>
                  <p className="text-dust/60 text-sm">Configure safari experience types: Luxury, Budget, Adventure, Photography, and Family safaris</p>
                </div>
                <Radio className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
              </div>
              <span className="text-xs uppercase tracking-wider text-ochre">Manage Now →</span>
            </Link>

            <Link href="/admin/settings" className="group border border-clay/30 p-8 hover:bg-clay/5 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-dust mb-2 group-hover:text-ochre transition-colors">Settings</h3>
                  <p className="text-dust/60 text-sm">Update company information, contact details, social media links, and site configuration</p>
                </div>
                <Settings className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
              </div>
              <span className="text-xs uppercase tracking-wider text-ochre">Manage Now →</span>
            </Link>
          </div>
        </div>

        {/* Info Box */}
        <div className="border border-clay/20 bg-clay/5 p-8">
          <h3 className="font-semibold text-dust mb-4">Documentation</h3>
          <ul className="space-y-2 text-dust/70 text-sm">
            <li>• All changes are saved to the MySQL database and reflected immediately on the live site</li>
            <li>• Images should be optimized before upload (recommended: max 5MB, 1920x1280px)</li>
            <li>• Destinations link to countries and can have multiple safari types assigned</li>
            <li>• Use descriptive titles and metadata for better search visibility</li>
          </ul>
        </div>
        </CardContent>
      </Card>
    </div>
  )
}
