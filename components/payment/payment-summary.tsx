import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Users, Clock, Shield } from "lucide-react"
import { format } from "date-fns"
import type { BookingData } from "@/app/booking/page"

interface PaymentSummaryProps {
  bookingData: BookingData
}

const destinations = {
  "maasai-mara": { name: "Maasai Mara Safari", price: 450, duration: "3 Days" },
  "diani-beach": { name: "Diani Beach Getaway", price: 280, duration: "4 Days" },
  "mount-kenya": { name: "Mount Kenya Adventure", price: 380, duration: "5 Days" },
  amboseli: { name: "Amboseli Elephant Safari", price: 320, duration: "2 Days" },
}

export function PaymentSummary({ bookingData }: PaymentSummaryProps) {
  const selectedDestination = destinations[bookingData.destination as keyof typeof destinations]
  const totalTravelers = bookingData.adults + bookingData.children
  const basePrice = selectedDestination?.price || 0
  const childDiscount = 0.5 // 50% discount for children
  const subtotal = bookingData.adults * basePrice + bookingData.children * basePrice * childDiscount
  const taxes = subtotal * 0.16 // 16% VAT
  const processingFee = 25 // Fixed processing fee
  const total = subtotal + taxes + processingFee

  return (
    <div className="space-y-4">
      {/* Main Summary */}
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Payment Summary</CardTitle>
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

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-2">Contact Information</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>
                {bookingData.contactInfo.firstName} {bookingData.contactInfo.lastName}
              </div>
              <div>{bookingData.contactInfo.email}</div>
              <div>{bookingData.contactInfo.phone}</div>
            </div>
          </div>

          <Separator />

          {/* Pricing */}
          <div className="space-y-2">
            <h4 className="font-medium">Price Breakdown</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>
                  {bookingData.adults} Adult{bookingData.adults !== 1 ? "s" : ""}
                </span>
                <span>${(bookingData.adults * basePrice).toLocaleString()}</span>
              </div>
              {bookingData.children > 0 && (
                <div className="flex justify-between">
                  <span>
                    {bookingData.children} Child{bookingData.children !== 1 ? "ren" : ""}{" "}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      50% off
                    </Badge>
                  </span>
                  <span>${(bookingData.children * basePrice * childDiscount).toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees (16%)</span>
                <span>${taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Fee</span>
                <span>${processingFee}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium text-base">
                <span>Total Amount</span>
                <span className="text-cyan-600">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Badge */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Secure Payment</h4>
              <p className="text-xs text-muted-foreground">256-bit SSL encryption protects your data</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
