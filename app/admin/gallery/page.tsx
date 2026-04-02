'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trash2, Edit2, Plus } from 'lucide-react'

interface GalleryItem {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  destination: string
  created_at: string
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: '',
    destination: '',
  })

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    try {
      const response = await fetch('/api/admin/gallery', {
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
      })
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      }
    } catch (error) {
      console.error('Failed to fetch gallery:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `/api/admin/gallery/${editingId}` : '/api/admin/gallery'

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
        setFormData({
          title: '',
          description: '',
          image_url: '',
          category: '',
          destination: '',
        })
        setEditingId(null)
        setShowForm(false)
        fetchGallery()
      }
    } catch (error) {
      console.error('Failed to save gallery item:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
      })

      if (response.ok) {
        fetchGallery()
      }
    } catch (error) {
      console.error('Failed to delete gallery item:', error)
    }
  }

  const handleEdit = (item: GalleryItem) => {
    setFormData({
      title: item.title,
      description: item.description,
      image_url: item.image_url,
      category: item.category,
      destination: item.destination,
    })
    setEditingId(item.id)
    setShowForm(true)
  }

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-dust">Manage Gallery</h1>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Photo
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Photo Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <Input
              placeholder="Category (e.g., Wildlife, Landscape, Culture)"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
            <Input
              placeholder="Image URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              required
            />
            <Input
              placeholder="Destination"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              required
            />
          </div>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full mt-4 p-2 border rounded"
            rows={3}
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
                setFormData({
                  title: '',
                  description: '',
                  image_url: '',
                  category: '',
                  destination: '',
                })
              }}
              className="bg-clay hover:bg-ochre text-dusk"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-sand mb-2">{item.category}</p>
              <p className="text-xs text-sage mb-3">{item.destination}</p>
              <p className="text-sm text-sand mb-4">{item.description}</p>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
