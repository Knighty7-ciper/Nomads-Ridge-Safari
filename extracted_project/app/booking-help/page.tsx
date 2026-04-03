import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Clock, HelpCircle, BookOpen } from "lucide-react"
import Footer from "@/components/layout/footer"

export default function BookingHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Booking Assistance</h1>
          <p className="text-lg text-muted-foreground">
            Need help with your booking? We're here to assist you every step of the way.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-4">Speak directly with our booking specialists</p>
              <p className="font-medium">+254 700 123 456</p>
              <p className="text-xs text-muted-foreground">Mon-Fri: 8AM-6PM EAT</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Quick responses via WhatsApp</p>
              <p className="font-medium">+254 722 000 911</p>
              <p className="text-xs text-muted-foreground">Available 24/7</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Detailed assistance via email</p>
              <p className="font-medium">bookings@riverdalekenya.co.ke</p>
              <p className="text-xs text-muted-foreground">Response within 2 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Booking Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              How to Book Your Safari
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-amber-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">Choose Your Safari</h4>
                <p className="text-sm text-muted-foreground">
                  Browse our destinations and select your preferred safari package
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-amber-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">Customize Details</h4>
                <p className="text-sm text-muted-foreground">Select dates, group size, and any special requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-amber-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Secure Payment</h4>
                <p className="text-sm text-muted-foreground">Complete your booking with our secure payment system</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-amber-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">Confirmation</h4>
                <p className="text-sm text-muted-foreground">Receive instant confirmation and detailed itinerary</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How far in advance should I book?</h4>
              <p className="text-muted-foreground">
                We recommend booking at least 3-6 months in advance, especially for peak seasons (July-October and
                December-January). This ensures better availability and rates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-muted-foreground">
                We accept major credit cards (Visa, Mastercard), bank transfers, and M-Pesa for local payments. A 30%
                deposit is required to confirm your booking.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Can I modify my booking after confirmation?</h4>
              <p className="text-muted-foreground">
                Yes, modifications are possible subject to availability and our terms. Changes made more than 30 days
                before travel are usually free of charge.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What's included in the safari packages?</h4>
              <p className="text-muted-foreground">
                Our packages typically include accommodation, meals, game drives, park fees, and professional guide
                services. International flights and personal expenses are usually excluded.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Clock className="w-5 h-5" />
              24/7 Emergency Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">If you're already on safari and need immediate assistance:</p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-red-800">Emergency Hotline: +254 722 000 911</p>
              <p className="text-red-700 text-sm">Available 24/7 during your safari</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
