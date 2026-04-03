import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Clock } from "lucide-react"
import { format } from "date-fns"
import PricingEngine from "@/lib/pricing-engine"
import type { BookingData } from "@/app/booking/page"

interface BookingSummaryProps {
  bookingData: BookingData
}

const destinations = {
  "maasai-mara": { name: "Maasai Mara Safari", price: 45000, duration: "3 Days" },
  "diani-beach": { name: "Diani Beach Getaway", price: 28000, duration: "4 Days" },
  "mount-kenya": { name: "Mount Kenya Adventure", price: 38000, duration: "5 Days" },
  amboseli: { name: "Amboseli Elephant Safari", price: 32000, duration: "2 Days" },
  "lake-nakuru": { name: "Lake Nakuru Flamingo Safari", price: 25000, duration: "2 Days" },
  samburu: { name: "Samburu Game Reserve", price: 42000, duration: "4 Days" },
}

export function BookingSummary({ bookingData }: BookingSummaryProps) {
  const selectedDestination = destinations[bookingData.destination as keyof typeof destinations]
  const totalTravelers = bookingData.adults + bookingData.children
  const basePrice = selectedDestination?.price || 0

  const pricingEngine = PricingEngine.getInstance()
  const pricingResult = pricingEngine.calculatePrice({
    basePrice,
    adults: bookingData.adults,
    children: bookingData.children,
    infants: 0,
    travelDate: bookingData.startDate || undefined,
    bookingDate: new Date(),
    destination: selectedDestination?.name,
  })

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Destination */}
        {selectedDestination && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span className="font-medium">{selectedDestination.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{selectedDestination.duration}</span>
            </div>
          </div>
        )}

        {/* Dates */}
        {bookingData.startDate && bookingData.endDate && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-cyan-600" />
              <span className="font-medium">Travel Dates</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <div>{format(bookingData.startDate, "MMM dd, yyyy")}</div>
              <div>to {format(bookingData.endDate, "MMM dd, yyyy")}</div>
            </div>
          </div>
        )}

        {/* Travelers */}
        {totalTravelers > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-cyan-600" />
              <span className="font-medium">Travelers</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>
                {bookingData.adults} Adult{bookingData.adults !== 1 ? "s" : ""}
              </div>
              {bookingData.children > 0 && (
                <div>
                  {bookingData.children} Child{bookingData.children !== 1 ? "ren" : ""}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pricing */}
        {selectedDestination && totalTravelers > 0 && (
          <>
            <Separator />
            <div className="space-y-2">
              <h4 className="font-medium">Price Breakdown</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Adults ({bookingData.adults})</span>
                  <span>KES {pricingResult.breakdown.adults.total.toLocaleString()}</span>
                </div>
                {bookingData.children > 0 && (
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      Children ({bookingData.children})
                      <Badge variant="secondary" className="text-xs">
                        30% off
                      </Badge>
                    </span>
                    <span>KES {pricingResult.breakdown.children.total.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KES {pricingResult.subtotal.toLocaleString()}</span>
                </div>

                {pricingResult.discounts.map((discount, index) => (
                  <div key={index} className="flex justify-between text-green-600">
                    <span className="flex items-center gap-2">
                      {discount.name}
                      <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                        {discount.type}
                      </Badge>
                    </span>
                    <span>
                      {discount.type === "surcharge" ? "+" : "-"}KES {discount.amount.toLocaleString()}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between">
                  <span>Taxes (16%)</span>
                  <span>KES {pricingResult.taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Fee</span>
                  <span>KES {pricingResult.processingFee.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-base">
                  <span>Total</span>
                  <span className="text-cyan-600">KES {pricingResult.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Special Requests */}
        {bookingData.specialRequests && (
          <>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">Special Requests</h4>
              <p className="text-sm text-muted-foreground">{bookingData.specialRequests}</p>
            </div>
          </>
        )}

        {totalTravelers >= 8 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 text-sm font-medium">🎉 Large Group Discount Applied!</p>
            <p className="text-green-700 text-xs">
              You're saving KES{" "}
              {pricingResult.discounts.find((d) => d.type === "group")?.amount.toLocaleString() || "0"} with your group
              booking
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
