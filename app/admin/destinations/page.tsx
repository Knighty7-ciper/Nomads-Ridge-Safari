'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2, Edit2, Plus } from 'lucide-react'

interface Destination {
  id: string
  name: string
  country: string
  description: string
  image_url: string
  best_season: string
  created_at: string
}

export default function DestinationsPage() {
  const router = useRouter()
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    description: '',
    image_url: '',
    best_season: '',
  })

  useEffect(() => {
    fetchDestinations()
  }, [])

  const fetchDestinations = async () => {
    try {
      const response = await fetch('/api/admin/destinations', {
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
      })
      if (response.ok) {
        const data = await response.json()
        setDestinations(data)
      }
    } catch (error) {
      console.error('Failed to fetch destinations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `/api/admin/destinations/${editingId}` : '/api/admin/destinations'

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: '', country: '', description: '', image_url: '', best_season: '' })
        setEditingId(null)
        setShowForm(false)
        fetchDestinations()
      }
    } catch (error) {
      console.error('Failed to save destination:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return

    try {
      const response = await fetch(`/api/admin/destinations/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
      })

      if (response.ok) {
        fetchDestinations()
      }
    } catch (error) {
      console.error('Failed to delete destination:', error)
    }
  }

  const handleEdit = (destination: Destination) => {
    setFormData({
      name: destination.name,
      country: destination.country,
      description: destination.description,
      image_url: destination.image_url,
      best_season: destination.best_season,
    })
    setEditingId(destination.id)
    setShowForm(true)
  }

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-4xl font-light text-dust mb-2">Manage Destinations</h1>
          <p className="text-sand">Add and edit safari destination pages</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-ochre hover:bg-ochre/90 text-dusk font-semibold px-6 py-2"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Destination
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-card border border-clay/30 p-8 rounded-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dust mb-2">Destination Name</label>
              <Input
                placeholder="e.g., Maasai Mara"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-dusk border-clay/30 text-dust placeholder:text-sand"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dust mb-2">Country</label>
              <Input
                placeholder="e.g., Kenya"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="bg-dusk border-clay/30 text-dust placeholder:text-sand"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dust mb-2">Image URL</label>
              <Input
                placeholder="https://..."
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-dusk border-clay/30 text-dust placeholder:text-sand"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dust mb-2">Best Season</label>
              <Input
                placeholder="e.g., June to October"
                value={formData.best_season}
                onChange={(e) => setFormData({ ...formData, best_season: e.target.value })}
                className="bg-dusk border-clay/30 text-dust placeholder:text-sand"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-dust mb-2">Description</label>
            <textarea
              placeholder="Write a compelling description..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-dusk border border-clay/30 text-dust placeholder:text-sand rounded p-3 focus:outline-none focus:border-ochre"
              rows={4}
              required
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit" className="bg-ochre hover:bg-ochre/90 text-dusk font-semibold px-6">
              {editingId ? 'Update Destination' : 'Create Destination'}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({ name: '', country: '', description: '', image_url: '', best_season: '' })
              }}
              className="bg-clay/30 hover:bg-clay/50 text-dust"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {destinations.length === 0 ? (
          <div className="border border-clay/20 bg-clay/5 p-12 rounded-lg text-center">
            <p className="text-sand">No destinations yet. Create one to get started.</p>
          </div>
        ) : (
          destinations.map((destination) => (
            <div key={destination.id} className="bg-card border border-clay/30 p-6 rounded-lg hover:border-ochre/50 transition-all group">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-dust mb-2 group-hover:text-ochre transition-colors">{destination.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-sand">{destination.country}</p>
                    <p className="text-xs text-sand/70">Best season: {destination.best_season}</p>
                    <p className="text-xs text-sand/60 mt-2 line-clamp-2">{destination.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    onClick={() => handleEdit(destination)}
                    className="bg-clay/40 hover:bg-ochre/30 text-dust transition-colors"
                    size="sm"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(destination.id)}
                    className="bg-clay/40 hover:bg-red-900/30 text-dust transition-colors"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}