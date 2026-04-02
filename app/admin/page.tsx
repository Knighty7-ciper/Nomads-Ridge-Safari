"use client"

import { useState, useEffect } from "react"
import { Zap, MapPin, MessageSquare, FileText, Grid3x3, BarChart3 } from "lucide-react"
import PackageBuilder from "@/components/admin/package-builder"
import TestimonialsManager from "@/components/admin/testimonials-manager"

type TabType = "overview" | "packages" | "testimonials"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("overview")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-ochre/10 to-clay/10 border border-ochre/20 p-8 rounded-lg">
        <h1 className="font-serif text-4xl font-light text-dust mb-2">Welcome Back</h1>
        <p className="text-sand">Manage your safari packages, testimonials, and content all in one place</p>
      </div>

      {/* Quick Stats */}
      {activeTab === "overview" && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-clay/30 p-6 hover:border-ochre/50 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sand uppercase text-xs tracking-wider mb-2">Active Packages</p>
                <p className="font-serif text-4xl font-light text-ochre">12</p>
                <p className="text-dust/60 text-xs mt-2">Updated today</p>
              </div>
              <Grid3x3 className="w-6 h-6 text-ochre/40" />
            </div>
          </div>

          <div className="border border-clay/30 p-6 hover:border-ochre/50 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sand uppercase text-xs tracking-wider mb-2">Testimonials</p>
                <p className="font-serif text-4xl font-light text-ochre">24</p>
                <p className="text-dust/60 text-xs mt-2">5-star average</p>
              </div>
              <MessageSquare className="w-6 h-6 text-ochre/40" />
            </div>
          </div>

          <div className="border border-clay/30 p-6 hover:border-ochre/50 transition-all hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sand uppercase text-xs tracking-wider mb-2">Blog Posts</p>
                <p className="font-serif text-4xl font-light text-ochre">8</p>
                <p className="text-dust/60 text-xs mt-2">3 drafts</p>
              </div>
              <FileText className="w-6 h-6 text-ochre/40" />
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-clay/30">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-3 font-medium text-sm transition-all border-b-2 ${
            activeTab === "overview"
              ? "border-ochre text-ochre"
              : "border-transparent text-sand hover:text-dust"
          }`}
        >
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Overview
          </div>
        </button>
        <button
          onClick={() => setActiveTab("packages")}
          className={`px-6 py-3 font-medium text-sm transition-all border-b-2 ${
            activeTab === "packages"
              ? "border-ochre text-ochre"
              : "border-transparent text-sand hover:text-dust"
          }`}
        >
          <div className="flex items-center gap-2">
            <Grid3x3 className="w-4 h-4" />
            Safari Packages
          </div>
        </button>
        <button
          onClick={() => setActiveTab("testimonials")}
          className={`px-6 py-3 font-medium text-sm transition-all border-b-2 ${
            activeTab === "testimonials"
              ? "border-ochre text-ochre"
              : "border-transparent text-sand hover:text-dust"
          }`}
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-clay/30 p-8 hover:bg-clay/5 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dust group-hover:text-ochre transition-colors">
                      Create Safari Package
                    </h3>
                    <p className="text-dust/60 text-sm mt-1">Build and customize new safari experiences</p>
                  </div>
                  <Zap className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-wider text-ochre">Manage →</span>
              </div>

              <div className="border border-clay/30 p-8 hover:bg-clay/5 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dust group-hover:text-ochre transition-colors">
                      Manage Testimonials
                    </h3>
                    <p className="text-dust/60 text-sm mt-1">Add and showcase guest reviews and feedback</p>
                  </div>
                  <MessageSquare className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-wider text-ochre">Manage →</span>
              </div>

              <div className="border border-clay/30 p-8 hover:bg-clay/5 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dust group-hover:text-ochre transition-colors">
                      Destinations
                    </h3>
                    <p className="text-dust/60 text-sm mt-1">Manage safari locations and park information</p>
                  </div>
                  <MapPin className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-wider text-ochre">Manage →</span>
              </div>

              <div className="border border-clay/30 p-8 hover:bg-clay/5 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-dust group-hover:text-ochre transition-colors">
                      Blog Content
                    </h3>
                    <p className="text-dust/60 text-sm mt-1">Create and publish safari travel guides</p>
                  </div>
                  <FileText className="w-5 h-5 text-ochre/40 group-hover:text-ochre transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-wider text-ochre">Manage →</span>
              </div>
            </div>

            <div className="border border-clay/20 bg-clay/5 p-8 rounded">
              <h3 className="font-semibold text-dust mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-dust/70 text-sm">
                <li className="flex gap-3">
                  <span className="text-ochre font-bold">•</span>
                  <span>Create compelling package descriptions to help customers choose the right safari</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ochre font-bold">•</span>
                  <span>Showcase 5-star testimonials to build trust and credibility with potential guests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ochre font-bold">•</span>
                  <span>Keep your blog updated with helpful safari guides and travel tips</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "packages" && <PackageBuilder />}
        {activeTab === "testimonials" && <TestimonialsManager />}
      </div>
    </div>
  )
}
