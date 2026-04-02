'use client'

import { useState } from "react"
import { AlertCircle, Plus, Trash2, Edit2 } from "lucide-react"

const DEFAULT_SAFARI_TYPES = [
  {
    id: 1,
    name: "Luxury Safari",
    description: "Premium accommodations with all-inclusive experiences, private guides, gourmet dining",
    price_range: "$5,000 - $15,000",
    duration: "7-14 days",
    features: ["5-star lodges", "Private vehicle", "All meals included", "Premium guides"],
  },
  {
    id: 2,
    name: "Adventure Safari",
    description: "Active expeditions with camping, trekking, and immersive wildlife encounters",
    price_range: "$2,500 - $6,000",
    duration: "5-10 days",
    features: ["Camping", "Hiking", "Game drives", "Community visits"],
  },
  {
    id: 3,
    name: "Photography Safari",
    description: "Specialized for wildlife photographers with expert guides and optimal wildlife viewing times",
    price_range: "$3,500 - $8,000",
    duration: "7-12 days",
    features: ["Expert photographers", "Early/late drives", "Photo workshops", "Portfolio review"],
  },
  {
    id: 4,
    name: "Family Safari",
    description: "Kid-friendly adventures with educational activities, shorter drives, and family accommodations",
    price_range: "$3,000 - $7,500",
    duration: "5-8 days",
    features: ["Family lodges", "Kids activities", "Shorter drives", "Educational guides"],
  },
  {
    id: 5,
    name: "Budget Safari",
    description: "Affordable safari experiences with shared accommodations and group tours",
    price_range: "$1,500 - $3,500",
    duration: "4-7 days",
    features: ["Shared camps", "Group tours", "Basic meals", "Standard guides"],
  },
]

export default function SafariTypesAdmin() {
  const [safariTypes, setSafariTypes] = useState(DEFAULT_SAFARI_TYPES)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price_range: "",
    duration: "",
    features: [] as string[],
  })

  const handleEdit = (type: (typeof DEFAULT_SAFARI_TYPES)[0]) => {
    setEditingId(type.id)
    setFormData({
      name: type.name,
      description: type.description,
      price_range: type.price_range,
      duration: type.duration,
      features: type.features,
    })
  }

  const handleDelete = (id: number) => {
    setSafariTypes(safariTypes.filter((t) => t.id !== id))
  }

  const handleSave = () => {
    if (editingId) {
      setSafariTypes(
        safariTypes.map((t) =>
          t.id === editingId
            ? { ...t, ...formData }
            : t
        )
      )
    } else {
      setSafariTypes([
        ...safariTypes,
        {
          id: Math.max(...safariTypes.map((t) => t.id)) + 1,
          ...formData,
        },
      ])
    }
    setEditingId(null)
    setFormData({ name: "", description: "", price_range: "", duration: "", features: [] })
  }

  return (
    <main className="min-h-screen bg-dusk text-dust pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-5xl font-light mb-2">Safari Types</h1>
        <p className="text-dust/60 mb-12">Manage safari experience categories and packages</p>

        {/* Add/Edit Form */}
        {editingId !== null && (
          <div className="border border-clay/30 p-8 mb-12 bg-clay/5">
            <h2 className="font-serif text-2xl font-light mb-6">
              {editingId === 0 ? "Add New Safari Type" : "Edit Safari Type"}
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wider text-dust/70 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-bark border border-clay/30 p-3 text-dust"
                  placeholder="e.g., Luxury Safari"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-dust/70 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-bark border border-clay/30 p-3 text-dust min-h-24"
                  placeholder="Describe this safari type..."
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wider text-dust/70 mb-2">Price Range</label>
                  <input
                    type="text"
                    value={formData.price_range}
                    onChange={(e) => setFormData({ ...formData, price_range: e.target.value })}
                    className="w-full bg-bark border border-clay/30 p-3 text-dust"
                    placeholder="e.g., $5,000 - $15,000"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wider text-dust/70 mb-2">Duration</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full bg-bark border border-clay/30 p-3 text-dust"
                    placeholder="e.g., 7-14 days"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-dust/70 mb-2">Features (comma-separated)</label>
                <textarea
                  value={formData.features.join(", ")}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value.split(",").map((f) => f.trim()) })}
                  className="w-full bg-bark border border-clay/30 p-3 text-dust min-h-20"
                  placeholder="e.g., 5-star lodges, Private vehicle, All meals included"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-clay text-dusk px-8 py-3 uppercase text-sm font-semibold tracking-wider hover:bg-ochre transition-colors"
                >
                  Save Safari Type
                </button>
                <button
                  onClick={() => {
                    setEditingId(null)
                    setFormData({ name: "", description: "", price_range: "", duration: "", features: [] })
                  }}
                  className="border border-clay text-clay px-8 py-3 uppercase text-sm font-semibold tracking-wider hover:bg-clay hover:text-dusk transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {!editingId && (
          <button
            onClick={() => setEditingId(0)}
            className="mb-12 flex items-center gap-2 bg-clay text-dusk px-6 py-3 uppercase text-sm font-semibold tracking-wider hover:bg-ochre transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add New Safari Type
          </button>
        )}

        {/* Safari Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {safariTypes.map((type) => (
            <div key={type.id} className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-2xl font-light text-dust">{type.name}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(type)}
                    className="p-2 text-ochre hover:bg-clay/10 transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(type.id)}
                    className="p-2 text-clay hover:bg-clay/10 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-dust/70 text-sm mb-4">{type.description}</p>

              <div className="space-y-2 mb-4 pb-4 border-b border-clay/20">
                <div className="flex justify-between text-sm">
                  <span className="text-dust/60">Price Range:</span>
                  <span className="text-ochre font-semibold">{type.price_range}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-dust/60">Duration:</span>
                  <span className="text-dust">{type.duration}</span>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-dust/60 mb-2">Features</p>
                <ul className="space-y-1">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-dust/80">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="border border-clay/20 bg-clay/5 p-8 mt-12">
          <h3 className="font-semibold text-dust mb-3">Safari Type Management</h3>
          <p className="text-dust/70 text-sm">
            These safari types are the foundation of your package offerings. Each type can be assigned to specific destinations and customized with unique features and pricing. Keep descriptions clear and benefit-focused to help travelers choose the right experience.
          </p>
        </div>
      </div>
    </main>
  )
}
