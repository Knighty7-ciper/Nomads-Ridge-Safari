"use client"

import { useState, useEffect } from "react"
import { MapPin, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Destination {
  id: string
  name: string
  description: string
  location: string
  image_url: string
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true)
        // Fetch from MySQL API
        const response = await fetch("/api/destinations")
        if (response.ok) {
          const data = await response.json()
          setDestinations(data.data || [])
          setFilteredDestinations(data.data || [])
        } else {
          // No destinations yet
          setDestinations([])
          setFilteredDestinations([])
        }
      } catch (error) {
        console.error("[v0] Error fetching destinations:", error)
        setDestinations([])
        setFilteredDestinations([])
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  useEffect(() => {
    let filtered = destinations

    if (searchTerm) {
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredDestinations(filtered)
  }, [searchTerm, destinations])

  if (loading) {
    return (
      <div className="min-h-screen bg-dusk text-dust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-clay mx-auto"></div>
            <p className="mt-4 text-sand">Loading destinations...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dusk text-dust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-light mb-6 text-dust">Kenya&apos;s Finest Destinations</h1>
          <p className="text-xl text-sand max-w-2xl mx-auto font-light">
            Discover extraordinary experiences across Kenya's most captivating landscapes
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ochre" />
            <Input
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-clay/30 text-dust placeholder:text-sand/50"
            />
          </div>
        </div>

        {/* No Data State */}
        {destinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-sand mb-6">No destinations yet. Coming soon...</p>
            <p className="text-sm text-sage">Destinations will be managed through the admin dashboard</p>
          </div>
        )}

        {/* Destinations Grid */}
        {destinations.length > 0 && filteredDestinations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredDestinations.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative h-64 mb-4 overflow-hidden rounded-sm">
                    <Image
                      src={destination.image_url || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-light text-dust group-hover:text-ochre transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sand">
                      <MapPin className="h-4 w-4 text-clay" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <p className="text-sm text-sand line-clamp-2">{destination.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results State */}
        {destinations.length > 0 && filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-sand mb-4">No destinations match your search</p>
            <Button
              onClick={() => setSearchTerm("")}
              className="bg-clay hover:bg-ochre text-dusk"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
