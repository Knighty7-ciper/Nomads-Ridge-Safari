"use client"

import { useState } from "react"
import { Plus, Trash2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
  image?: string
}

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Mamta D.",
      location: "US",
      quote:
        "We, a group of 5 recently retired women and two kids put our trust in the hands of Mr. John, the Safari Director of BTPKS to show us sights of incredible of Kenya, and he did not disappoint us.",
      rating: 5,
    },
    {
      id: "2",
      name: "Nisha",
      location: "India",
      quote:
        "The places were overwhelming. It felt mesmerizing connecting to the nature and people, both in their truest and purest form. People were extremely affectionate and hospitable",
      rating: 5,
    },
  ])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Testimonial>>({})

  const handleAddNew = () => {
    setShowForm(true)
    setEditingId(null)
    setFormData({
      id: Math.random().toString(),
      name: "",
      location: "",
      quote: "",
      rating: 5,
    })
  }

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id)
    setFormData({ ...testimonial })
    setShowForm(true)
  }

  const handleSave = () => {
    if (editingId) {
      setTestimonials(
        testimonials.map((t) => (t.id === editingId ? (formData as Testimonial) : t))
      )
    } else {
      setTestimonials([...testimonials, formData as Testimonial])
    }
    setShowForm(false)
    setFormData({})
  }

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl font-light text-dust">Testimonials</h2>
        {!showForm && (
          <Button onClick={handleAddNew} className="bg-ochre hover:bg-ochre/90 text-card flex gap-2">
            <Plus className="w-4 h-4" />
            Add Testimonial
          </Button>
        )}
      </div>

      {showForm && (
        <div className="border border-clay/30 p-8 bg-clay/5 space-y-6">
          <h3 className="font-semibold text-lg text-dust">
            {editingId ? "Edit Testimonial" : "Add New Testimonial"}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-dust mb-2 block">Guest Name</Label>
              <Input
                placeholder="e.g., Mamta D."
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-clay/30 text-dust"
              />
            </div>

            <div>
              <Label className="text-dust mb-2 block">Location</Label>
              <Input
                placeholder="e.g., US, India, UK"
                value={formData.location || ""}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="bg-card border-clay/30 text-dust"
              />
            </div>
          </div>

          <div>
            <Label className="text-dust mb-2 block">Testimonial Quote</Label>
            <Textarea
              placeholder="Enter the guest's testimonial..."
              value={formData.quote || ""}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              className="bg-card border-clay/30 text-dust min-h-32"
            />
          </div>

          <div>
            <Label className="text-dust mb-2 block">Rating</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setFormData({ ...formData, rating: rate })}
                  className={`p-2 transition-colors ${
                    (formData.rating || 0) >= rate ? "text-ochre" : "text-clay/30"
                  }`}
                >
                  <Star className="w-6 h-6 fill-current" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} className="bg-ochre hover:bg-ochre/90 text-card flex-1">
              Save Testimonial
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

      {/* Testimonials List */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border border-clay/30 p-6 bg-clay/5 hover:border-ochre/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-dust text-lg">{testimonial.name}</h4>
                <p className="text-sm text-sand">{testimonial.location}</p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ochre text-ochre" />
                ))}
              </div>
            </div>

            <p className="text-dust/80 text-sm leading-relaxed mb-6 italic">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex gap-2 pt-4 border-t border-clay/20">
              <Button
                onClick={() => handleEdit(testimonial)}
                variant="outline"
                size="sm"
                className="flex-1 border-clay/30 text-dust hover:bg-clay/10"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(testimonial.id)}
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
