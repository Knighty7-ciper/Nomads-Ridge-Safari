"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Users, Baby } from "lucide-react"
import type { BookingData } from "@/app/booking/page"

interface BookingStepThreeProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
}

export function BookingStepThree({ bookingData, updateBookingData }: BookingStepThreeProps) {
  const updateAdults = (count: number) => {
    const newCount = Math.max(1, Math.min(10, count))
    updateBookingData({ adults: newCount })
  }

  const updateChildren = (count: number) => {
    const newCount = Math.max(0, Math.min(8, count))
    updateBookingData({ children: newCount })
  }

  const totalTravelers = bookingData.adults + bookingData.children

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">How many travelers will be joining this adventure?</p>

      <div className="space-y-4">
        {/* Adults */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-medium">Adults</h4>
                  <p className="text-sm text-muted-foreground">Age 18+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateAdults(bookingData.adults - 1)}
                  disabled={bookingData.adults <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium">{bookingData.adults}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateAdults(bookingData.adults + 1)}
                  disabled={bookingData.adults >= 10}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Children */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Baby className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium">Children</h4>
                  <p className="text-sm text-muted-foreground">Age 2-17</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateChildren(bookingData.children - 1)}
                  disabled={bookingData.children <= 0}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium">{bookingData.children}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateChildren(bookingData.children + 1)}
                  disabled={bookingData.children >= 8}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium mb-2">Traveler Summary</h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Adults:</span>
            <span>{bookingData.adults}</span>
          </div>
          {bookingData.children > 0 && (
            <div className="flex justify-between">
              <span>Children:</span>
              <span>{bookingData.children}</span>
            </div>
          )}
          <div className="flex justify-between font-medium pt-2 border-t">
            <span>Total Travelers:</span>
            <span>{totalTravelers}</span>
          </div>
        </div>
      </div>

      {totalTravelers > 6 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 text-sm">
            <strong>Large Group:</strong> For groups of 7+ travelers, we'll arrange special group accommodations and may
            offer group discounts.
          </p>
        </div>
      )}
    </div>
  )
}
