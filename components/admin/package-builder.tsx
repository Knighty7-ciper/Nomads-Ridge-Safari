"use client"

import { useState } from "react"
import { Plus, Trash2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Package {
  id: string
  name: string
  duration: string
  price: string
  destinations: string[]
  highlights: string[]
}

export default function PackageBuilder() {
  const [packages, setPackages] = useState<Package[]>([
    {
      id: "1",
      name: "Classic Kenya Safari",
      duration: "7 days",
      price: "$2,500",
      destinations: ["Masai Mara", "Amboseli"],
      highlights: ["Big 5", "Game drives", "Sunset views"],
    },
  ])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Package>>({})

  const handleAddNew = () => {
    setShowForm(true)
    setEditingId(null)
    setFormData({
      id: Math.random().toString(),
      name: "",
      duration: "",
      price: "",
      destinations: [],
      highlights: [],
    })
  }

  const handleEdit = (pkg: Package) => {
    setEditingId(pkg.id)
    setFormData({ ...pkg })
    setShowForm(true)
  }

  const handleSave = () => {
    if (editingId) {
      setPackages(packages.map((p) => (p.id === editingId ? (formData as Package) : p)))
    } else {
      setPackages([...packages, formData as Package])
    }
    setShowForm(false)
    setFormData({})
  }

  const handleDelete = (id: string) => {
    setPackages(packages.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl font-light text-dust">Safari Packages</h2>
        {!showForm && (
          <Button onClick={handleAddNew} className="bg-ochre hover:bg-ochre/90 text-card flex gap-2">
            <Plus className="w-4 h-4" />
            Create Package
          </Button>
        )}
      </div>

      {showForm && (
        <div className="border border-clay/30 p-8 bg-clay/5 space-y-6">
          <h3 className="font-semibold text-lg text-dust">
            {editingId ? "Edit Package" : "Create New Package"}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-dust mb-2 block">Package Name</Label>
              <Input
                placeholder="e.g., Classic Kenya Safari"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-clay/30 text-dust"
              />
            </div>

            <div>
              <Label className="text-dust mb-2 block">Duration</Label>
              <Input
                placeholder="e.g., 7 days"
                value={formData.duration || ""}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="bg-card border-clay/30 text-dust"
              />
            </div>

            <div>
              <Label className="text-dust mb-2 block">Starting Price</Label>
              <Input
                placeholder="e.g., $2,500"
                value={formData.price || ""}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="bg-card border-clay/30 text-dust"
              />
            </div>

            <div>
              <Label className="text-dust mb-2 block">Destinations (comma separated)</Label>
              <Input
                placeholder="e.g., Masai Mara, Amboseli"
                value={formData.destinations?.join(", ") || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    destinations: e.target.value.split(",").map((d) => d.trim()),
                  })
                }
                className="bg-card border-clay/30 text-dust"
              />
            </div>
          </div>

          <div>
            <Label className="text-dust mb-2 block">Highlights (comma separated)</Label>
            <Input
              placeholder="e.g., Big 5, Game drives, Sunset views"
              value={formData.highlights?.join(", ") || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  highlights: e.target.value.split(",").map((h) => h.trim()),
                })
              }
              className="bg-card border-clay/30 text-dust"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSave}
              className="bg-ochre hover:bg-ochre/90 text-card flex-1"
            >
              Save Package
            </Button>
            <Button
              onClick={() => {
                setShowForm(false)
                setFormData({})
              }}
              variant="outline"
              className="border-clay/30 text-dust flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border border-clay/30 p-6 hover:border-ochre/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-dust text-lg mb-1">{pkg.name}</h4>
                <p className="text-sm text-sand">{pkg.duration}</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-2xl font-light text-ochre">{pkg.price}</p>
              </div>
            </div>

            <div className="mb-4 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-sand mb-1">Destinations</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.destinations.map((dest, i) => (
                    <span
                      key={i}
                      className="bg-ochre/10 text-ochre text-xs px-2.5 py-1 rounded"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-sand mb-1">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-sand/10 text-sand text-xs px-2.5 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-clay/20">
              <Button
                onClick={() => handleEdit(pkg)}
                variant="outline"
                size="sm"
                className="flex-1 border-clay/30 text-dust hover:bg-clay/10"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(pkg.id)}
                variant="outline"
                size="sm"
                className="flex-1 border-clay/30 text-clay hover:bg-clay/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
