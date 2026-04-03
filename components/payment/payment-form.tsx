"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Smartphone, Building, Globe, Loader2 } from "lucide-react"
import type { PaymentMethod } from "@/app/payment/page"
import type { BookingData } from "@/app/booking/page"

interface PaymentFormProps {
  selectedMethod: PaymentMethod
  bookingData: BookingData
  onPayment: () => void
  isProcessing: boolean
}

export function PaymentForm({ selectedMethod, bookingData, onPayment, isProcessing }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    // Card details
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    // M-Pesa details
    mpesaNumber: "",
    // Bank details
    accountNumber: "",
    bankCode: "",
    // PayPal details
    paypalEmail: "",
    // Terms acceptance
    acceptTerms: false,
  })

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderPaymentFields = () => {
    switch (selectedMethod) {
      case "card":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number *</Label>
              <div className="relative mt-1">
                <CreditCard className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => updateFormData("cardNumber", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => updateFormData("expiryDate", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => updateFormData("cvv", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cardName">Cardholder Name *</Label>
              <Input
                id="cardName"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={(e) => updateFormData("cardName", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        )

      case "mpesa":
        return (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-5 h-5 text-green-600" />
                <h4 className="font-medium text-green-900">M-Pesa Payment</h4>
              </div>
              <p className="text-sm text-green-800">
                You'll receive an STK push notification on your phone to complete the payment.
              </p>
            </div>

            <div>
              <Label htmlFor="mpesaNumber">M-Pesa Phone Number *</Label>
              <div className="relative mt-1">
                <Smartphone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="mpesaNumber"
                  placeholder="+254 700 000 000"
                  value={formData.mpesaNumber}
                  onChange={(e) => updateFormData("mpesaNumber", e.target.value)}
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Enter the phone number registered with M-Pesa</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">How it works:</h4>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Click "Pay with M-Pesa" below</li>
                <li>2. Check your phone for STK push notification</li>
                <li>3. Enter your M-Pesa PIN to complete payment</li>
                <li>4. You'll receive confirmation SMS</li>
              </ol>
            </div>
          </div>
        )

      case "bank":
        return (
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-purple-600" />
                <h4 className="font-medium text-purple-900">Bank Transfer</h4>
              </div>
              <p className="text-sm text-purple-800">Transfer funds directly from your bank account.</p>
            </div>

            <div>
              <Label htmlFor="bankCode">Select Bank *</Label>
              <Select onValueChange={(value) => updateFormData("bankCode", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Choose your bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kcb">KCB Bank</SelectItem>
                  <SelectItem value="equity">Equity Bank</SelectItem>
                  <SelectItem value="coop">Co-operative Bank</SelectItem>
                  <SelectItem value="absa">Absa Bank</SelectItem>
                  <SelectItem value="standard">Standard Chartered</SelectItem>
                  <SelectItem value="dtb">Diamond Trust Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="accountNumber">Account Number *</Label>
              <div className="relative mt-1">
                <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="accountNumber"
                  placeholder="Enter your account number"
                  value={formData.accountNumber}
                  onChange={(e) => updateFormData("accountNumber", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        )

      case "paypal":
        return (
          <div className="space-y-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-indigo-600" />
                <h4 className="font-medium text-indigo-900">PayPal Payment</h4>
              </div>
              <p className="text-sm text-indigo-800">
                You'll be redirected to PayPal to complete your payment securely.
              </p>
            </div>

            <div>
              <Label htmlFor="paypalEmail">PayPal Email *</Label>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="paypalEmail"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.paypalEmail}
                  onChange={(e) => updateFormData("paypalEmail", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const getButtonText = () => {
    if (isProcessing) return "Processing..."

    switch (selectedMethod) {
      case "card":
        return "Pay with Card"
      case "mpesa":
        return "Pay with M-Pesa"
      case "bank":
        return "Pay with Bank Transfer"
      case "paypal":
        return "Pay with PayPal"
      default:
        return "Complete Payment"
    }
  }

  const canSubmit = () => {
    if (!formData.acceptTerms) return false

    switch (selectedMethod) {
      case "card":
        return formData.cardNumber && formData.expiryDate && formData.cvv && formData.cardName
      case "mpesa":
        return formData.mpesaNumber
      case "bank":
        return formData.accountNumber && formData.bankCode
      case "paypal":
        return formData.paypalEmail
      default:
        return false
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">Payment Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {renderPaymentFields()}

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => updateFormData("acceptTerms", checked as boolean)}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the terms and conditions
            </Label>
            <p className="text-xs text-muted-foreground">
              By proceeding, you agree to our{" "}
              <a href="#" className="text-cyan-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-cyan-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={onPayment}
          disabled={!canSubmit() || isProcessing}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 text-lg"
        >
          {isProcessing && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {getButtonText()}
        </Button>

        {/* Security Notice */}
        <div className="text-center text-xs text-muted-foreground">
          <p>🔒 Your payment information is encrypted and secure</p>
        </div>
      </CardContent>
    </Card>
  )
}
