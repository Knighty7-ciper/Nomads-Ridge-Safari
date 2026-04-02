"use client"

import type React from "react"
import { ArrowLeft } from "lucide-react" // Import ArrowLeft here

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import Link from "next/link"
import EmailService from "@/lib/email-service"
import Footer from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Store inquiry in localStorage for admin to see
    const inquiries = JSON.parse(localStorage.getItem("contactInquiries") || "[]")
    const newInquiry = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString(),
      status: "new",
    }
    inquiries.push(newInquiry)
    localStorage.setItem("contactInquiries", JSON.stringify(inquiries))

    const emailService = EmailService.getInstance()
    try {
      await emailService.sendContactInquiry(newInquiry)
    } catch (error) {
      console.error("Failed to send contact inquiry email:", error)
    }

    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you within 24 hours.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        headline="Get in Touch"
        subheading="Ready to plan your Kenyan adventure?"
        description="We're here to help you plan your dream safari and answer any questions you have about our incredible destinations and services."
        showLogo={true}
        badge={undefined}
        primaryCTA={{
          text: "Check Destinations",
          href: "/destinations",
        }}
        secondaryCTA={{
          text: "Call Now",
          icon: true,
          href: "tel:+254714703892",
        }}
      />

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-amber-700" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select onValueChange={(value) => updateFormData("inquiryType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="safari">Safari Booking</SelectItem>
                            <SelectItem value="beach">Beach Holiday</SelectItem>
                            <SelectItem value="mountain">Mountain Adventure</SelectItem>
                            <SelectItem value="cultural">Cultural Tour</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => updateFormData("subject", e.target.value)}
                        placeholder="Brief subject of your inquiry"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        placeholder="Tell us about your travel plans, dates, group size, and any special requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get in touch with our friendly team. We're here to help you plan the perfect Kenyan adventure.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-1">WhatsApp & Calls: +254 714 703 892</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for inquiries</p>
                      <a
                        href="https://wa.me/254714703892?text=Hello! I'd like to inquire about your travel services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 text-green-600 hover:text-green-700 font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground mb-1">nomadsridgesafaris@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Office Location</h3>
                      <p className="text-muted-foreground mb-1">Nomads Ridge Safaris</p>
                      <p className="text-muted-foreground mb-1">Nairobi, Kenya</p>
                      <p className="text-sm text-muted-foreground">Available for appointments and consultations</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-muted-foreground mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground mb-1">Sunday: Closed</p>
                      <p className="text-sm text-muted-foreground">East Africa Time (EAT)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about traveling to Kenya with Nomads Ridge Safaris.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What's included in your safari packages?</h3>
                <p className="text-muted-foreground">
                  Our safari packages typically include accommodation, all meals, game drives, park fees, professional
                  guide services, and transportation in a 4WD safari vehicle. International flights and personal
                  expenses are not included.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What's the best time to visit Kenya?</h3>
                <p className="text-muted-foreground">
                  Kenya is a year-round destination! The Great Migration in Maasai Mara is best from July-October. For
                  beach holidays, visit during dry seasons (December-March, June-October). We'll help you choose the
                  perfect time based on your interests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Do I need a visa to visit Kenya?</h3>
                <p className="text-muted-foreground">
                  Most visitors need a visa to enter Kenya. You can apply for an eVisa online before travel. Some
                  nationalities can get a visa on arrival. We'll provide detailed visa information based on your
                  nationality when you book.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept M-Pesa, bank transfers, credit/debit cards, and PayPal. For international clients, we
                  recommend bank transfers or PayPal. A deposit is required to confirm your booking, with the balance
                  due before travel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Can you customize tour packages?</h3>
                <p className="text-muted-foreground">
                  We specialize in creating custom itineraries tailored to your interests, budget, and travel dates.
                  Whether you want to combine safari with beach time, add cultural experiences, or focus on specific
                  wildlife, we'll design the perfect trip for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What safety measures do you have in place?</h3>
                <p className="text-muted-foreground">
                  Your safety is our top priority. All our guides are licensed and experienced, our vehicles are
                  regularly maintained and equipped with safety equipment, and we maintain 24/7 communication during
                  your trip. We also provide comprehensive travel insurance recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
