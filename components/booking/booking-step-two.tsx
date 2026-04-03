"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import type { BookingData } from "@/app/booking/page"

interface BookingStepTwoProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
}

export function BookingStepTwo({ bookingData, updateBookingData }: BookingStepTwoProps) {
  const [showStartCalendar, setShowStartCalendar] = useState(false)
  const [showEndCalendar, setShowEndCalendar] = useState(false)

  const handleStartDateSelect = (date: Date | undefined) => {
    if (date) {
      updateBookingData({ startDate: date })
      setShowStartCalendar(false)
      // If end date is before start date, reset it
      if (bookingData.endDate && bookingData.endDate < date) {
        updateBookingData({ endDate: null })
      }
    }
  }

  const handleEndDateSelect = (date: Date | undefined) => {
    if (date) {
      updateBookingData({ endDate: date })
      setShowEndCalendar(false)
    }
  }

  const today = new Date()
  const minEndDate = bookingData.startDate || today

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">Select your travel dates to check availability and pricing.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium mb-2">Departure Date</label>
          <Button
            variant="outline"
            className={`w-full justify-start text-left font-normal ${
              !bookingData.startDate && "text-muted-foreground"
            }`}
            onClick={() => setShowStartCalendar(!showStartCalendar)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {bookingData.startDate ? format(bookingData.startDate, "PPP") : "Select departure date"}
          </Button>

          {showStartCalendar && (
            <Card className="mt-2">
              <CardContent className="p-3">
                <Calendar
                  mode="single"
                  selected={bookingData.startDate || undefined}
                  onSelect={handleStartDateSelect}
                  disabled={(date) => date < today}
                  initialFocus
                />
              </CardContent>
            </Card>
          )}
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium mb-2">Return Date</label>
          <Button
            variant="outline"
            className={`w-full justify-start text-left font-normal ${!bookingData.endDate && "text-muted-foreground"}`}
            onClick={() => setShowEndCalendar(!showEndCalendar)}
            disabled={!bookingData.startDate}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {bookingData.endDate ? format(bookingData.endDate, "PPP") : "Select return date"}
          </Button>

          {showEndCalendar && (
            <Card className="mt-2">
              <CardContent className="p-3">
                <Calendar
                  mode="single"
                  selected={bookingData.endDate || undefined}
                  onSelect={handleEndDateSelect}
                  disabled={(date) => date < minEndDate}
                  initialFocus
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {bookingData.startDate && bookingData.endDate && (
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
          <h4 className="font-medium text-cyan-900 mb-2">Trip Duration</h4>
          <p className="text-cyan-800">
            {Math.ceil((bookingData.endDate.getTime() - bookingData.startDate.getTime()) / (1000 * 60 * 60 * 24))} days
          </p>
        </div>
      )}
    </div>
  )
}
