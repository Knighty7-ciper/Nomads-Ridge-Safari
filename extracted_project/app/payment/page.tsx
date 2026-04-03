"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, CreditCard, Smartphone, Building, Globe } from "lucide-react"
import { PaymentMethodCard } from "@/components/payment/payment-method-card"
import { PaymentForm } from "@/components/payment/payment-form"
import { PaymentSummary } from "@/components/payment/payment-summary"
import type { BookingData } from "@/app/booking/page"

export type PaymentMethod = "card" | "mpesa" | "bank" | "paypal"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("mpesa")
  const [bookingData, setBookingData] = useState<BookingData | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    // In a real app, this would come from the previous step or be stored in session/state
    // For demo purposes, we'll use sample data
    const sampleBookingData: BookingData = {
      destination: "maasai-mara",
      startDate: new Date("2024-03-15"),
      endDate: new Date("2024-03-18"),
      adults: 2,
      children: 1,
      specialRequests: "Vegetarian meals preferred",
      contactInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+254 700 000 000",
      },
    }
    setBookingData(sampleBookingData)
  }, [])

  const paymentMethods = [
    {
      id: "mpesa" as PaymentMethod,
      name: "M-Pesa",
      description: "Pay with your mobile money",
      icon: Smartphone,
      popular: true,
    },
    {
      id: "card" as PaymentMethod,
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
      popular: false,
    },
    {
      id: "bank" as PaymentMethod,
      name: "Bank Transfer",
      description: "Direct bank transfer",
      icon: Building,
      popular: false,
    },
    {
      id: "paypal" as PaymentMethod,
      name: "PayPal",
      description: "Pay with your PayPal account",
      icon: Globe,
      popular: false,
    },
  ]

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    // Redirect to confirmation page
    window.location.href = "/payment/confirmation"
  }

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading payment details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Booking
              </Button>
              <h1 className="font-heading text-2xl font-bold text-cyan-600">Secure Payment</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-green-600" />
              <span>SSL Secured</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods & Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Choose Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <PaymentMethodCard
                      key={method.id}
                      method={method}
                      isSelected={selectedMethod === method.id}
                      onSelect={() => setSelectedMethod(method.id)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <PaymentForm
              selectedMethod={selectedMethod}
              bookingData={bookingData}
              onPayment={handlePayment}
              isProcessing={isProcessing}
            />
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <PaymentSummary bookingData={bookingData} />
          </div>
        </div>
      </div>
    </div>
  )
}
