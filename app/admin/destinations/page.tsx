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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Destinations</h1>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Destination
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Destination Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              required
            />
            <Input
              placeholder="Image URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              required
            />
            <Input
              placeholder="Best Season"
              value={formData.best_season}
              onChange={(e) => setFormData({ ...formData, best_season: e.target.value })}
              required
            />
          </div>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full mt-4 p-2 border rounded"
            rows={4}
            required
          />
          <div className="flex gap-2 mt-4">
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
              {editingId ? 'Update' : 'Create'}
            </Button>
            <Button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({ name: '', country: '', description: '', image_url: '', best_season: '' })
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {destinations.map((destination) => (
          <div key={destination.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{destination.name}</h3>
              <p className="text-gray-600">{destination.country}</p>
              <p className="text-sm text-gray-500">{destination.best_season}</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleEdit(destination)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleDelete(destination.id)}
                className="bg-red-600 hover:bg-red-700 text-white"
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
