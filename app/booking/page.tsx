"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Calendar, Users, MapPin, MessageSquare, Hotel, Compass } from "lucide-react"
import { BookingStepOne } from "@/components/booking/booking-step-one"
import { BookingStepTwo } from "@/components/booking/booking-step-two"
import { BookingStepThree } from "@/components/booking/booking-step-three"
import { BookingStepFour } from "@/components/booking/booking-step-four"
import { BookingSummary } from "@/components/booking/booking-summary"
import { PricingEngine } from "@/lib/pricing-engine"
import Link from "next/link"

export interface BookingData {
  bookingType: "destination" | "hotel"
  destination: string
  hotel?: string
  startDate: Date | null
  endDate: Date | null
  adults: number
  children: number
  specialRequests: string
  contactInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

const steps = [
  { id: 1, title: "Selection", icon: MapPin },
  { id: 2, title: "Dates", icon: Calendar },
  { id: 3, title: "Travelers", icon: Users },
  { id: 4, title: "Details", icon: MessageSquare },
]

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData>({
    bookingType: "destination",
    destination: "",
    hotel: "",
    startDate: null,
    endDate: null,
    adults: 2,
    children: 0,
    specialRequests: "",
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  })

  useEffect(() => {
    const destination = searchParams.get("destination")
    const hotel = searchParams.get("hotel")

    if (destination) {
      setBookingData((prev) => ({
        ...prev,
        bookingType: "destination",
        destination: getDestinationName(destination),
      }))
    } else if (hotel) {
      setBookingData((prev) => ({
        ...prev,
        bookingType: "hotel",
        hotel: getHotelName(hotel),
      }))
    }
  }, [searchParams])

  const getDestinationName = (id: string) => {
    const destinations: { [key: string]: string } = {
      "maasai-mara-safari": "Maasai Mara Safari Adventure",
      "mount-kenya-trekking": "Mount Kenya Trekking Expedition",
      "amboseli-elephant-paradise": "Amboseli Elephant Paradise",
    }
    return destinations[id] || id
  }

  const getHotelName = (id: string) => {
    const hotels: { [key: string]: string } = {
      "diani-beach-resort": "Diani Beach Resort & Spa",
      "nairobi-serena-hotel": "Nairobi Serena Hotel",
      "mara-safari-lodge": "Mara Safari Lodge",
    }
    return hotels[id] || id
  }

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitInquiry = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const pricingEngine = new PricingEngine()
      const totalPrice = pricingEngine.calculatePrice({
        destination: bookingData.bookingType === "destination" ? bookingData.destination : bookingData.hotel || "",
        startDate: bookingData.startDate!,
        endDate: bookingData.endDate!,
        adults: bookingData.adults,
        children: bookingData.children,
      })

      // Submit booking via MySQL API
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          booking_type: bookingData.bookingType,
          destination_id: bookingData.bookingType === "destination" ? 1 : null,
          hotel_id: bookingData.bookingType === "hotel" ? 1 : null,
          customer_name: `${bookingData.contactInfo.firstName} ${bookingData.contactInfo.lastName}`,
          customer_email: bookingData.contactInfo.email,
          customer_phone: bookingData.contactInfo.phone,
          start_date: bookingData.startDate!.toISOString().split("T")[0],
          end_date: bookingData.endDate!.toISOString().split("T")[0],
          adults: bookingData.adults,
          children: bookingData.children,
          total_price: totalPrice,
          special_requests: bookingData.specialRequests,
          status: "pending",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit booking")
      }

      const { data: booking } = await response.json()

      localStorage.setItem("currentBookingId", booking.id)

      router.push("/booking/confirmation")
    } catch (error) {
      console.error("Failed to submit booking:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`Failed to submit booking: ${errorMessage}. Please try again.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.bookingType === "destination" ? bookingData.destination !== "" : bookingData.hotel !== ""
      case 2:
        return bookingData.startDate && bookingData.endDate
      case 3:
        return bookingData.adults > 0
      case 4:
        return (
          bookingData.contactInfo.firstName &&
          bookingData.contactInfo.lastName &&
          bookingData.contactInfo.email &&
          bookingData.contactInfo.phone
        )
      default:
        return false
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BookingStepOne bookingData={bookingData} updateBookingData={updateBookingData} />
      case 2:
        return <BookingStepTwo bookingData={bookingData} updateBookingData={updateBookingData} />
      case 3:
        return <BookingStepThree bookingData={bookingData} updateBookingData={updateBookingData} />
      case 4:
        return <BookingStepFour bookingData={bookingData} updateBookingData={updateBookingData} />
      default:
        return null
    }
  }

  const progressPercentage = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <img src="/nomads-ridge-logo.png" alt="Nomads Ridge Safaris" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/destinations" className="text-foreground hover:text-cyan-600 transition-colors">
                  Destinations
                </Link>
                <Link href="/hotels" className="text-foreground hover:text-cyan-600 transition-colors">
                  Hotels
                </Link>
                <Link href="/about" className="text-foreground hover:text-cyan-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-foreground hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="text-cyan-200 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Book Your Adventure</h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              {bookingData.bookingType === "destination"
                ? "Complete your safari booking in just a few simple steps"
                : "Reserve your perfect accommodation with ease"}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Section */}
        <div className="mb-12">
          <Progress value={progressPercentage} className="h-3 mb-6" />
          <div className="flex justify-between">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                          ? "bg-cyan-600 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-cyan-600" : isCompleted ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center">
                  {bookingData.bookingType === "destination" ? (
                    <Compass className="w-6 h-6 mr-3 text-cyan-600" />
                  ) : (
                    <Hotel className="w-6 h-6 mr-3 text-cyan-600" />
                  )}
                  <CardTitle className="font-heading text-xl">
                    {steps.find((step) => step.id === currentStep)?.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">{renderStep()}</CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={nextStep} disabled={!canProceed()} className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3">
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={submitInquiry}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking"}
                  <MessageSquare className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingSummary bookingData={bookingData} />

              {/* Trust Indicators */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Why Book With Us?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Secure booking process</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>24/7 customer support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Free cancellation up to 48 hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Best price guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
