"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Clock, Users, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"

interface Destination {
  id: string
  name: string
  description: string
  location: string
  price_from: number
  duration: string
  max_group_size: number
  rating: number
  reviews_count: number
  image_url: string
  category: string
  featured: boolean
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [loading, setLoading] = useState(true)

  // Mock data - will be replaced with Supabase data
  const mockDestinations: Destination[] = [
    {
      id: "maasai-mara",
      name: "Maasai Mara Safari",
      description:
        "Experience the world-famous Great Migration and witness incredible wildlife in Kenya's most celebrated game reserve.",
      location: "Maasai Mara, Kenya",
      price_from: 45000,
      duration: "3-5 days",
      max_group_size: 8,
      rating: 4.9,
      reviews_count: 127,
      image_url: "/maasai-mara-safari.png",
      category: "Safari",
      featured: true,
    },
    {
      id: "diani-beach",
      name: "Diani Beach Paradise",
      description: "Relax on pristine white sand beaches with crystal clear waters and enjoy world-class water sports.",
      location: "Diani Beach, Kenya",
      price_from: 32000,
      duration: "4-7 days",
      max_group_size: 12,
      rating: 4.7,
      reviews_count: 89,
      image_url: "/diani-beach-kenya.png",
      category: "Beach",
      featured: true,
    },
    {
      id: "mount-kenya",
      name: "Mount Kenya Hiking",
      description:
        "Challenge yourself with an unforgettable trek to Africa's second-highest peak through diverse ecosystems.",
      location: "Mount Kenya, Kenya",
      price_from: 28000,
      duration: "5-7 days",
      max_group_size: 6,
      rating: 4.8,
      reviews_count: 64,
      image_url: "/mount-kenya-hikers.png",
      category: "Adventure",
      featured: false,
    },
    {
      id: "amboseli",
      name: "Amboseli National Park",
      description: "Marvel at large elephant herds with the stunning backdrop of Mount Kilimanjaro.",
      location: "Amboseli, Kenya",
      price_from: 38000,
      duration: "2-4 days",
      max_group_size: 10,
      rating: 4.6,
      reviews_count: 92,
      image_url: "/amboseli-elephants-kilimanjaro.png",
      category: "Safari",
      featured: false,
    },
  ]

  useEffect(() => {
    // Simulate API call - replace with actual Supabase query
    const fetchDestinations = async () => {
      setLoading(true)
      // TODO: Replace with actual Supabase query
      // const { data, error } = await supabase.from('destinations').select('*')
      setTimeout(() => {
        setDestinations(mockDestinations)
        setFilteredDestinations(mockDestinations)
        setLoading(false)
      }, 1000)
    }

    fetchDestinations()
  }, [])

  useEffect(() => {
    let filtered = destinations

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((dest) => dest.category.toLowerCase() === categoryFilter.toLowerCase())
    }

    // Price filter
    if (priceFilter !== "all") {
      switch (priceFilter) {
        case "budget":
          filtered = filtered.filter((dest) => dest.price_from < 30000)
          break
        case "mid":
          filtered = filtered.filter((dest) => dest.price_from >= 30000 && dest.price_from < 45000)
          break
        case "luxury":
          filtered = filtered.filter((dest) => dest.price_from >= 45000)
          break
      }
    }

    setFilteredDestinations(filtered)
  }, [searchTerm, categoryFilter, priceFilter, destinations])

  const categories = ["all", "safari", "beach", "adventure", "cultural"]
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "budget", label: "Under KSh 30,000" },
    { value: "mid", label: "KSh 30,000 - 45,000" },
    { value: "luxury", label: "Above KSh 45,000" },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading destinations...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Kenya's Best Destinations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From thrilling safaris to pristine beaches, explore the diverse beauty of Kenya with our carefully curated
            travel experiences.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={destination.image_url || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
                {destination.featured && (
                  <Badge className="absolute top-3 left-3 bg-amber-600 hover:bg-amber-700">Featured</Badge>
                )}
                <Badge variant="secondary" className="absolute top-3 right-3">
                  {destination.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{destination.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {destination.location}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{destination.rating}</span>
                    <span className="text-sm text-gray-500">({destination.reviews_count})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">From</div>
                    <div className="text-lg font-bold text-amber-600">
                      KSh {destination.price_from.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Max {destination.max_group_size}
                  </div>
                </div>

                <Link href={`/destinations/${destination.id}`}>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("all")
                setPriceFilter("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
