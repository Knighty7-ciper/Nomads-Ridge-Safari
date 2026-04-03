"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MessageSquare } from "lucide-react"
import type { BookingData } from "@/app/booking/page"

interface BookingStepFourProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
}

export function BookingStepFour({ bookingData, updateBookingData }: BookingStepFourProps) {
  const updateContactInfo = (field: string, value: string) => {
    updateBookingData({
      contactInfo: {
        ...bookingData.contactInfo,
        [field]: value,
      },
    })
  }

  const updateSpecialRequests = (value: string) => {
    updateBookingData({ specialRequests: value })
  }

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Please provide your contact information and any special requests for your trip.
      </p>

      {/* Contact Information */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-cyan-600" />
            <h4 className="font-medium">Contact Information</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={bookingData.contactInfo.firstName}
                onChange={(e) => updateContactInfo("firstName", e.target.value)}
                placeholder="Enter your first name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={bookingData.contactInfo.lastName}
                onChange={(e) => updateContactInfo("lastName", e.target.value)}
                placeholder="Enter your last name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={bookingData.contactInfo.email}
                  onChange={(e) => updateContactInfo("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  value={bookingData.contactInfo.phone}
                  onChange={(e) => updateContactInfo("phone", e.target.value)}
                  placeholder="+254 700 000 000"
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Requests */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-amber-600" />
            <h4 className="font-medium">Special Requests</h4>
          </div>

          <div>
            <Label htmlFor="specialRequests">Additional Information (Optional)</Label>
            <Textarea
              id="specialRequests"
              value={bookingData.specialRequests}
              onChange={(e) => updateSpecialRequests(e.target.value)}
              placeholder="Any dietary restrictions, accessibility needs, special occasions, or other requests..."
              className="mt-1 min-h-[100px]"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Let us know about any special requirements to make your trip perfect.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• We'll send you a detailed itinerary within 24 hours</li>
          <li>• Our travel expert will contact you to finalize details</li>
          <li>• Secure payment options including M-Pesa available</li>
          <li>• Full support throughout your journey</li>
        </ul>
      </div>
    </div>
  )
}
