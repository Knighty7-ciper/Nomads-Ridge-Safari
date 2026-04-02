'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    phone: '+254714703892',
    email: 'nomadsridgesafaris@gmail.com',
    whatsapp: '+254714703892',
    office_address: 'Westlands, Nairobi, Kenya',
    business_hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM, Sun: 10AM-2PM',
    emergency_number: '+254722000911',
    facebook_url: 'https://www.facebook.com/nomadsridgesafaris',
    instagram_url: 'https://www.instagram.com/nomadsridgesafaris',
    company_description: 'Beyond destinations, into the wild. Authentic Kenya experiences crafted by local experts.',
  })
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/admin/settings', {
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
      })
      if (response.ok) {
        const data = await response.json()
        setSettings(data)
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify(settings),
      })

      if (response.ok) {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      }
    } catch (error) {
      console.error('Failed to save settings:', error)
    }
  }

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Site Settings</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <Input
                  value={settings.whatsapp}
                  onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Number</label>
                <Input
                  value={settings.emergency_number}
                  onChange={(e) => setSettings({ ...settings, emergency_number: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                <Input
                  value={settings.office_address}
                  onChange={(e) => setSettings({ ...settings, office_address: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Business Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Hours</label>
                <Input
                  value={settings.business_hours}
                  onChange={(e) => setSettings({ ...settings, business_hours: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                <textarea
                  value={settings.company_description}
                  onChange={(e) => setSettings({ ...settings, company_description: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows={3}
                  required
                />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
                <Input
                  value={settings.facebook_url}
                  onChange={(e) => setSettings({ ...settings, facebook_url: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
                <Input
                  value={settings.instagram_url}
                  onChange={(e) => setSettings({ ...settings, instagram_url: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
            Save Settings
          </Button>
          {saved && <div className="text-green-600 font-medium">Settings saved successfully!</div>}
        </div>
      </form>
    </div>
  )
}
