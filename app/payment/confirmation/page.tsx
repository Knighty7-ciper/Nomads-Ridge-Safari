import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Mail, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function PaymentConfirmationPage() {
  // In a real app, this would come from the payment processing result
  const bookingReference = "RVD-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Payment Successful!</h1>
          <p className="text-lg text-muted-foreground">
            Your booking has been confirmed. Get ready for an amazing adventure!
          </p>
        </div>

        {/* Booking Details */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-semibold">Booking Confirmation</h2>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Booking Reference</p>
                <p className="font-mono text-lg font-bold text-cyan-600">{bookingReference}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Destination</p>
                    <p className="text-sm text-muted-foreground">Maasai Mara Safari</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Travel Dates</p>
                    <p className="text-sm text-muted-foreground">Mar 15 - Mar 18, 2024</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Travelers</p>
                    <p className="text-sm text-muted-foreground">2 Adults, 1 Child</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Total Paid</p>
                  <p className="text-2xl font-bold text-green-600">$1,247</p>
                </div>

                <div>
                  <p className="font-medium mb-2">Payment Method</p>
                  <p className="text-sm text-muted-foreground">M-Pesa (+254 700 000 000)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-heading text-lg font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-cyan-600">1</span>
                </div>
                <div>
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a detailed itinerary and booking confirmation via email within 30 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-cyan-600">2</span>
                </div>
                <div>
                  <p className="font-medium">Travel Expert Contact</p>
                  <p className="text-sm text-muted-foreground">
                    Our travel expert will call you within 24 hours to finalize details and answer any questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-cyan-600">3</span>
                </div>
                <div>
                  <p className="font-medium">Pre-Travel Information</p>
                  <p className="text-sm text-muted-foreground">
                    7 days before departure, you'll receive packing lists, weather updates, and final instructions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Itinerary
          </Button>
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Email Confirmation
          </Button>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>

        {/* Support */}
        <div className="text-center mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Need help or have questions? Contact us at{" "}
            <a href="tel:+254700000000" className="font-medium text-blue-600 hover:underline">
              +254 700 000 000
            </a>{" "}
            or{" "}
            <a href="mailto:support@riverdaletravel.co.ke" className="font-medium text-blue-600 hover:underline">
              support@riverdaletravel.co.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
