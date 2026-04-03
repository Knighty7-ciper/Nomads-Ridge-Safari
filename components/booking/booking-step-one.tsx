"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star, Clock, Building, Plane, MessageCircle } from "lucide-react"
import type { BookingData } from "@/app/booking/page"

interface BookingStepOneProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
}

interface Destination {
  id: string
  name: string
  description: string
  price: number
  duration: string
  image: string
  featured: boolean
  type: "safari" | "hotel"
}

interface Hotel {
  id: string
  name: string
  description: string
  price: number
  location: string
  image: string
  rating: number
  amenities: string[]
}

export function BookingStepOne({ bookingData, updateBookingData }: BookingStepOneProps) {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [activeTab, setActiveTab] = useState("safari")

  useEffect(() => {
    const loadDestinations = () => {
      const defaultDestinations = [
        {
          id: "1", // Updated from "dest-1"
          name: "Maasai Mara Safari",
          description: "Experience the Great Migration and witness incredible wildlife in Kenya's most famous reserve.",
          price: 58500,
          duration: "3 Days",
          image: "/maasai-mara-safari.png",
          featured: true,
          type: "safari" as const,
        },
        {
          id: "2", // Updated from "dest-2"
          name: "Diani Beach Getaway",
          description: "Relax on pristine white sand beaches with crystal clear waters and luxury accommodations.",
          price: 36400,
          duration: "4 Days",
          image: "/diani-beach-kenya.png",
          featured: true,
          type: "safari" as const,
        },
        {
          id: "3", // Updated from "dest-3"
          name: "Mount Kenya Adventure",
          description: "Challenge yourself with hiking and climbing on Africa's second-highest mountain.",
          price: 49400,
          duration: "5 Days",
          image: "/mount-kenya-hikers.png",
          featured: false,
          type: "safari" as const,
        },
        {
          id: "4", // Updated from "dest-4"
          name: "Amboseli Elephant Safari",
          description: "Get up close with elephants against the backdrop of Mount Kilimanjaro.",
          price: 41600,
          duration: "2 Days",
          image: "/amboseli-elephants-kilimanjaro.png",
          featured: true,
          type: "safari" as const,
        },
      ]

      const stored = localStorage.getItem("adminDestinations")
      if (stored) {
        setDestinations(JSON.parse(stored))
      } else {
        localStorage.setItem("adminDestinations", JSON.stringify(defaultDestinations))
        setDestinations(defaultDestinations)
      }
    }

    const loadHotels = () => {
      const defaultHotels = [
        {
          id: "hotel-1",
          name: "Sarova Stanley Hotel",
          description: "Historic luxury hotel in the heart of Nairobi with colonial charm and modern amenities.",
          price: 15600,
          location: "Nairobi CBD",
          image: "/luxury-hotel-nairobi.png",
          rating: 4.5,
          amenities: ["Free WiFi", "Pool", "Restaurant", "Gym", "Business Center"],
        },
        {
          id: "hotel-2",
          name: "Serena Beach Resort & Spa",
          description: "Beachfront resort on Diani Beach with Swahili architecture and world-class spa facilities.",
          price: 22800,
          location: "Diani Beach",
          image: "/kenyan-beach-resort.png",
          rating: 4.8,
          amenities: ["Beach Access", "Spa", "Multiple Restaurants", "Pool", "Water Sports"],
        },
        {
          id: "hotel-3",
          name: "Fairmont The Norfolk",
          description: "Iconic heritage hotel offering timeless elegance and exceptional service since 1904.",
          price: 18200,
          location: "Nairobi",
          image: "/nairobi-heritage-hotel.png",
          rating: 4.6,
          amenities: ["Heritage Building", "Fine Dining", "Garden", "Conference Facilities", "Concierge"],
        },
        {
          id: "hotel-4",
          name: "Hemingways Nairobi",
          description: "Boutique hotel in Karen with stunning views of Ngong Hills and personalized service.",
          price: 19500,
          location: "Karen, Nairobi",
          image: "/boutique-hotel-karen-nairobi.png",
          rating: 4.7,
          amenities: ["Hill Views", "Fine Dining", "Spa", "Garden", "Airport Transfer"],
        },
        {
          id: "hotel-5",
          name: "Baobab Beach Resort",
          description: "All-inclusive beachfront resort with multiple pools and extensive recreational facilities.",
          price: 26000,
          location: "Diani Beach",
          image: "/kenyan-beach-resort.png",
          rating: 4.4,
          amenities: ["All-Inclusive", "Multiple Pools", "Beach Access", "Kids Club", "Entertainment"],
        },
        {
          id: "hotel-6",
          name: "Villa Rosa Kempinski",
          description: "Luxury hotel in Westlands offering sophisticated accommodations and world-class dining.",
          price: 21450,
          location: "Westlands, Nairobi",
          image: "/luxury-hotel-westlands-nairobi.png",
          rating: 4.6,
          amenities: ["Luxury Suites", "Rooftop Bar", "Spa", "Fine Dining", "Shopping Mall Access"],
        },
      ]

      const storedHotels = localStorage.getItem("adminHotels")
      if (storedHotels) {
        setHotels(JSON.parse(storedHotels))
      } else {
        localStorage.setItem("adminHotels", JSON.stringify(defaultHotels))
        setHotels(defaultHotels)
      }
    }

    loadDestinations()
    loadHotels()
  }, [])

  const handleDestinationSelect = (destinationName: string) => {
    updateBookingData({ destination: destinationName })
  }

  const handleCustomInquiry = () => {
    updateBookingData({ destination: "Custom Inquiry - Please specify your requirements" })
  }

  const safariDestinations = destinations.filter((dest) => dest.type !== "hotel")

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground mb-6">
        Choose your perfect Kenyan experience - safari adventures or luxury hotel stays.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="safari" className="flex items-center gap-2">
            <Plane className="w-4 h-4" />
            Safari & Tours
          </TabsTrigger>
          <TabsTrigger value="hotels" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            Hotels
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Custom Request
          </TabsTrigger>
        </TabsList>

        <TabsContent value="safari" className="space-y-4">
          {safariDestinations.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No safari destinations available for booking.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {safariDestinations.map((destination) => (
                <Card
                  key={destination.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    bookingData.destination === destination.name
                      ? "ring-2 ring-cyan-600 bg-cyan-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleDestinationSelect(destination.name)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-heading text-lg font-semibold truncate">{destination.name}</h3>
                          <div className="flex items-center gap-1 ml-2">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-medium">4.8</span>
                          </div>
                        </div>

                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">Kenya</span>
                          <Clock className="w-4 h-4 ml-4 mr-1" />
                          <span className="text-sm">{destination.duration}</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{destination.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {destination.featured && (
                              <Badge variant="secondary" className="text-xs">
                                Featured
                              </Badge>
                            )}
                            <Badge variant="secondary" className="text-xs">
                              Popular
                            </Badge>
                          </div>
                          <span className="font-heading text-lg font-bold text-cyan-600">
                            From KSh {destination.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="hotels" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  bookingData.destination === hotel.name ? "ring-2 ring-cyan-600 bg-cyan-50" : "hover:bg-gray-50"
                }`}
                onClick={() => handleDestinationSelect(hotel.name)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={hotel.image || "/placeholder.svg"}
                      alt={hotel.name}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading text-lg font-semibold truncate">{hotel.name}</h3>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">{hotel.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                        <Building className="w-4 h-4 ml-4 mr-1" />
                        <span className="text-sm">Hotel</span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{hotel.description}</p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {hotel.amenities.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{hotel.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-100 text-green-800">Available</Badge>
                        <span className="font-heading text-lg font-bold text-cyan-600">
                          KSh {hotel.price.toLocaleString()}/night
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No worries! We specialize in creating custom travel experiences. Tell us what you have in mind and we'll
                make it happen.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                <h4 className="font-medium text-blue-900 mb-2">We can help you with:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Specific hotels not listed above</li>
                  <li>• Combined safari + hotel packages</li>
                  <li>• Group bookings and corporate events</li>
                  <li>• Special occasion celebrations</li>
                  <li>• Extended Kenya tours (7+ days)</li>
                  <li>• Budget-friendly alternatives</li>
                  <li>• Luxury and premium experiences</li>
                </ul>
              </div>

              <Button
                onClick={handleCustomInquiry}
                className={`w-full ${
                  bookingData.destination === "Custom Inquiry - Please specify your requirements"
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "bg-amber-500 hover:bg-amber-600"
                }`}
              >
                {bookingData.destination === "Custom Inquiry - Please specify your requirements"
                  ? "✓ Custom Inquiry Selected"
                  : "Select Custom Inquiry"}
              </Button>

              <p className="text-xs text-muted-foreground">
                Our travel experts will call you to discuss your specific requirements and provide a personalized quote.
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
