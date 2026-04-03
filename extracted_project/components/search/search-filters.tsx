"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, X } from "lucide-react"

interface SearchFiltersProps {
  onFiltersChange: (filters: SearchFilters) => void
  type: "destinations" | "hotels"
}

export interface SearchFilters {
  searchTerm: string
  location: string
  priceRange: [number, number]
  rating: number
  duration: string
  amenities: string[]
  category: string
}

export function SearchFilters({ onFiltersChange, type }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: "",
    location: "",
    priceRange: [0, 100000],
    rating: 0,
    duration: "",
    amenities: [],
    category: "",
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      searchTerm: "",
      location: "",
      priceRange: [0, 100000],
      rating: 0,
      duration: "",
      amenities: [],
      category: "",
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hotelAmenities = [
    "Free WiFi",
    "Pool",
    "Spa",
    "Restaurant",
    "Gym",
    "Beach Access",
    "Business Center",
    "Room Service",
    "Airport Transfer",
    "Conference Facilities",
  ]

  const safariCategories = [
    "Wildlife Safari",
    "Beach Holiday",
    "Mountain Adventure",
    "Cultural Tour",
    "Photography Safari",
    "Luxury Safari",
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Search & Filter
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Less Filters" : "More Filters"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search Term */}
        <div>
          <Label htmlFor="search">Search</Label>
          <div className="relative mt-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder={`Search ${type}...`}
              value={filters.searchTerm}
              onChange={(e) => updateFilters({ searchTerm: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Select value={filters.location} onValueChange={(value) => updateFilters({ location: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Any location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any location</SelectItem>
              <SelectItem value="Nairobi">Nairobi</SelectItem>
              <SelectItem value="Diani Beach">Diani Beach</SelectItem>
              <SelectItem value="Maasai Mara">Maasai Mara</SelectItem>
              <SelectItem value="Mount Kenya">Mount Kenya</SelectItem>
              <SelectItem value="Amboseli">Amboseli</SelectItem>
              <SelectItem value="Westlands">Westlands</SelectItem>
              <SelectItem value="Karen">Karen</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Label>Price Range (KSh)</Label>
          <div className="mt-2 mb-4">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
              max={100000}
              min={0}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>KSh {filters.priceRange[0].toLocaleString()}</span>
              <span>KSh {filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {isExpanded && (
          <>
            {/* Rating */}
            <div>
              <Label htmlFor="rating">Minimum Rating</Label>
              <Select
                value={filters.rating.toString()}
                onValueChange={(value) => updateFilters({ rating: Number.parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any rating</SelectItem>
                  <SelectItem value="3">3+ stars</SelectItem>
                  <SelectItem value="4">4+ stars</SelectItem>
                  <SelectItem value="5">5 stars only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Duration (for destinations) */}
            {type === "destinations" && (
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select value={filters.duration} onValueChange={(value) => updateFilters({ duration: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any duration</SelectItem>
                    <SelectItem value="1-2 Days">1-2 Days</SelectItem>
                    <SelectItem value="3-4 Days">3-4 Days</SelectItem>
                    <SelectItem value="5+ Days">5+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Category */}
            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Any category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any category</SelectItem>
                  {(type === "destinations" ? safariCategories : ["Luxury", "Business", "Resort", "Boutique"]).map(
                    (category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* Amenities (for hotels) */}
            {type === "hotels" && (
              <div>
                <Label>Amenities</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {hotelAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={filters.amenities.includes(amenity)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFilters({ amenities: [...filters.amenities, amenity] })
                          } else {
                            updateFilters({ amenities: filters.amenities.filter((a) => a !== amenity) })
                          }
                        }}
                      />
                      <Label htmlFor={amenity} className="text-sm">
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Clear Filters */}
        <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
}
