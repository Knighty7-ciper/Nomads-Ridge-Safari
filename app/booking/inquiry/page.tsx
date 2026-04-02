"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, CheckCircle, Shield, MessageCircle, Loader2 } from "lucide-react"
import Link from "next/link"

interface BookingDetails {
  id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  start_date: string
  end_date: string
  adults: number
  children: number
  total_price: number
  special_requests: string
  created_at: string
}

export default function BookingInquiryPage() {
  const [booking, setBooking] = useState<BookingDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBookingDetails = async () => {
      try {
        const bookingId = localStorage.getItem("currentBookingId")

        if (!bookingId) {
          setError("No booking found")
          setLoading(false)
          return
        }

        // Fetch booking details from MySQL API
        const response = await fetch(`/api/bookings/${bookingId}`)
        
        if (!response.ok) {
          setError("Failed to load booking details")
          setLoading(false)
          return
        }

        const { data } = await response.json()
        
        if (!data) {
          console.error("Error fetching booking: No data returned")
          setError("Failed to load booking details")
        } else {
          setBooking(data)
        }
      } catch (err) {
        console.error("Error loading booking:", err)
        setError("Failed to load booking details")
      } finally {
        setLoading(false)
      }
    }

    loadBookingDetails()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-cyan-600" />
          <p className="text-muted-foreground">Loading your booking details...</p>
        </div>
      </div>
    )
  }

  if (error || !booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Booking not found"}</p>
          <Link href="/booking">
            <Button className="bg-cyan-600 hover:bg-cyan-700">Make New Booking</Button>
          </Link>
        </div>
      </div>
    )
  }

  const inquiryReference = `RVD-${booking.id.slice(-8).toUpperCase()}`

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Booking Inquiry Submitted!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for choosing Nomads Ridge Safaris. We'll contact you shortly to finalize your booking.
          </p>
        </div>

        {/* Inquiry Details */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-semibold">Inquiry Details</h2>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Inquiry Reference</p>
                <p className="font-mono text-lg font-bold text-cyan-600">{inquiryReference}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-foreground mb-2">Customer Information</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Name:</span> {booking.customer_name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span> {booking.customer_email}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Phone:</span> {booking.customer_phone}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Trip Details</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Dates:</span>{" "}
                    {new Date(booking.start_date).toLocaleDateString()} -{" "}
                    {new Date(booking.end_date).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Travelers:</span> {booking.adults} adults
                    {booking.children > 0 ? `, ${booking.children} children` : ""}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Total Price:</span> KSH{" "}
                    {booking.total_price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {booking.special_requests && (
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-2">Special Requests</h3>
                <p className="text-sm text-muted-foreground bg-gray-50 p-3 rounded">{booking.special_requests}</p>
              </div>
            )}

            <div className="bg-cyan-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-cyan-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Secure Booking Process - Next Steps:
              </h3>
              <div className="space-y-2 text-sm text-cyan-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Your inquiry has been received and logged in our secure system</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Our travel expert will call you within 2 hours (8 AM - 8 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>After our call, you'll receive secure payment instructions via email</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No online payments required - we prioritize your security</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-medium text-amber-900 mb-2">Why We Use This Secure Process:</h4>
              <p className="text-sm text-amber-800">
                To protect you from online fraud and ensure personalized service, we verify all bookings through direct
                contact before processing payments. This gives you peace of mind and allows us to customize your
                experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-heading text-lg font-semibold mb-4">Need Immediate Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">Call Us Now</p>
                  <p className="text-sm text-muted-foreground">Available 8 AM - 8 PM (EAT)</p>
                  <div className="space-y-1 mt-2">
                    <a href="tel:+254700000000" className="block text-green-600 font-medium hover:underline">
                      +254 700 000 000 (Primary)
                    </a>
                    <a href="tel:+254711000000" className="block text-green-600 font-medium hover:underline">
                      +254 711 000 000 (Secondary)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">WhatsApp Us</p>
                  <p className="text-sm text-muted-foreground">Instant messaging support</p>
                  <a
                    href={`https://wa.me/254700123456?text=Hi! I just submitted booking inquiry ${inquiryReference} and need assistance.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline mt-2 block"
                  >
                    +254 700 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 1 hour</p>
                  <a
                    href={`mailto:bookings@riverdaletravel.co.ke?subject=Booking Inquiry ${inquiryReference}`}
                    className="text-blue-600 font-medium hover:underline mt-2 block"
                  >
                    bookings@riverdaletravel.co.ke
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
              Back to Home
            </Button>
          </Link>
          <Link href="/booking">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Make Another Inquiry</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
