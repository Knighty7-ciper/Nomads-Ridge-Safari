"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, Users, MapPin, Phone, Mail, Download, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BookingDetails {
  id: string
  bookingType: string
  itemName: string
  customerName: string
  customerEmail: string
  customerPhone: string
  startDate: string
  endDate: string
  adults: number
  children: number
  totalPrice: number
  specialRequests: string
  status: string
}

export default function BookingConfirmationPage() {
  const [booking, setBooking] = useState<BookingDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading booking details
    const loadBookingDetails = () => {
      const bookingId = localStorage.getItem("currentBookingId")

      // Mock booking data for demonstration
      const mockBooking: BookingDetails = {
        id: bookingId || "BK-2024-001",
        bookingType: "destination",
        itemName: "Maasai Mara Safari Adventure",
        customerName: "John Doe",
        customerEmail: "john.doe@example.com",
        customerPhone: "+254 700 123 456",
        startDate: "2024-07-15",
        endDate: "2024-07-18",
        adults: 2,
        children: 1,
        totalPrice: 389700,
        specialRequests: "Vegetarian meals preferred",
        status: "confirmed",
      }

      setBooking(mockBooking)
      setLoading(false)
    }

    loadBookingDetails()
  }, [])

  const handleDownloadItinerary = () => {
    // Simulate PDF download
    alert("Itinerary download will be available once your booking is confirmed by our team.")
  }

  const handleShare = () => {
    if (navigator.share && booking) {
      navigator.share({
        title: `My ${booking.itemName} Booking`,
        text: `I just booked ${booking.itemName} with Riverdale Travel!`,
        url: window.location.href,
      })
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Booking link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your booking details...</p>
        </div>
      </div>
    )
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Booking Not Found</h1>
          <p className="text-muted-foreground mb-6">We couldn't find your booking details.</p>
          <Link href="/">
            <Button className="bg-cyan-600 hover:bg-cyan-700">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="font-heading text-2xl font-bold text-cyan-600">Riverdale</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/destinations" className="text-foreground hover:text-cyan-600 transition-colors">
                  Destinations
                </Link>
                <Link href="/hotels" className="text-foreground hover:text-cyan-600 transition-colors">
                  Hotels
                </Link>
                <Link href="/about" className="text-foreground hover:text-cyan-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-foreground hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Success Hero */}
      <section className="relative py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Thank you for choosing Riverdale Travel. Your adventure awaits!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Details */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-cyan-600" />
                      Booking Details
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Booking ID</label>
                      <p className="font-mono text-lg">{booking.id}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Type</label>
                      <p className="capitalize">{booking.bookingType}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Experience</label>
                    <p className="text-lg font-semibold">{booking.itemName}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Check-in</label>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-cyan-600" />
                        <p>{new Date(booking.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Check-out</label>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-cyan-600" />
                        <p>{new Date(booking.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Travelers</label>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-cyan-600" />
                      <p>
                        {booking.adults} Adults{booking.children > 0 && `, ${booking.children} Children`}
                      </p>
                    </div>
                  </div>

                  {booking.specialRequests && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Special Requests</label>
                      <p className="text-sm bg-gray-50 p-3 rounded-lg">{booking.specialRequests}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-cyan-600" />
                    <span>{booking.customerEmail}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-cyan-600" />
                    <span>{booking.customerPhone}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-semibold text-cyan-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Confirmation Email</h4>
                        <p className="text-sm text-muted-foreground">
                          You'll receive a detailed confirmation email within 15 minutes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-semibold text-cyan-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Personal Contact</h4>
                        <p className="text-sm text-muted-foreground">
                          Our travel specialist will call you within 24 hours to finalize details.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-semibold text-cyan-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Final Itinerary</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive your detailed itinerary and travel documents 7 days before departure.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Amount</span>
                        <span className="font-heading text-2xl font-bold text-cyan-600">
                          KSh {booking.totalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Payment will be processed after confirmation call
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Button onClick={handleDownloadItinerary} className="w-full bg-transparent" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Itinerary
                  </Button>
                  <Button onClick={handleShare} className="w-full bg-transparent" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Booking
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-cyan-600" />
                        <span>+254 700 123 456</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-cyan-600" />
                        <span>support@riverdale.travel</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
