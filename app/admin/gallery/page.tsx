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
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-4xl font-light text-dust mb-2">Manage Gallery</h1>
          <p className="text-sand">Upload and organize beautiful destination photos</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-ochre hover:bg-ochre/90 text-dusk font-semibold px-6 py-2"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Photo
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-card border border-clay/30 p-8 rounded-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dust mb-2">Photo Title</label>
              <Input
                placeholder="e.g., Lion at Sunset"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-dusk border-clay/30 text-dust placeholder:text-sand"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dust mb-2">Category</label>
              <Input
                placeholder="e.g., Wildlife, Landscape, Culture"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
              <label className="block text-sm font-semibold text-dust mb-2">Destination</label>
              <Input
                placeholder="e.g., Maasai Mara"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="bg-dusk border-clay/30 text-dust placeholder:text-sand"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-dust mb-2">Description</label>
            <textarea
              placeholder="Write a brief description of the photo..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-dusk border border-clay/30 text-dust placeholder:text-sand rounded p-3 focus:outline-none focus:border-ochre"
              rows={3}
              required
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit" className="bg-ochre hover:bg-ochre/90 text-dusk font-semibold px-6">
              {editingId ? 'Update Photo' : 'Add Photo'}
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
              className="bg-clay/30 hover:bg-clay/50 text-dust"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <div className="col-span-full border border-clay/20 bg-clay/5 p-12 rounded-lg text-center">
            <p className="text-sand">No gallery items yet. Upload your first photo.</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-card border border-clay/30 rounded-lg overflow-hidden hover:border-ochre/50 transition-all group">
              <div className="relative overflow-hidden h-48 bg-dusk">
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-semibold text-dust mb-1 group-hover:text-ochre transition-colors">{item.title}</h3>
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs bg-ochre/20 text-ochre px-2 py-1 rounded">{item.category}</span>
                    <span className="text-xs bg-clay/20 text-sand px-2 py-1 rounded">{item.destination}</span>
                  </div>
                </div>
                <p className="text-sm text-sand/70 line-clamp-2">{item.description}</p>
                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-clay/40 hover:bg-ochre/30 text-dust transition-colors text-sm"
                    size="sm"
                  >
                    <Edit2 className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 bg-clay/40 hover:bg-red-900/30 text-dust transition-colors text-sm"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
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