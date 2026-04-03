"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MessageCircle, Search, Send } from "lucide-react"

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
  })

  // FAQ data
  const faqs = [
    {
      id: "1",
      question: "How do I book a safari tour?",
      answer:
        "You can book a safari tour through our website by selecting your preferred destination, dates, and package. You can also call us directly or request a callback for personalized assistance.",
    },
    {
      id: "2",
      question: "What is included in the safari packages?",
      answer:
        "Our safari packages typically include accommodation, meals, game drives, park fees, and transportation. Specific inclusions vary by package - check the detailed itinerary for each tour.",
    },
    {
      id: "3",
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking according to our cancellation policy. Cancellations made 30+ days in advance receive full refund, while later cancellations may incur fees.",
    },
    {
      id: "4",
      question: "What should I pack for a safari?",
      answer:
        "Essential items include comfortable clothing in neutral colors, sun hat, sunscreen, binoculars, camera, insect repellent, and sturdy walking shoes. We provide a detailed packing list upon booking.",
    },
    {
      id: "5",
      question: "Do you offer group discounts?",
      answer:
        "Yes, we offer attractive group discounts for parties of 6 or more people. Contact us for customized group pricing and special arrangements.",
    },
    {
      id: "6",
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, bank transfers, and mobile money payments (M-Pesa, Airtel Money). A deposit is required to confirm your booking.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle callback request
    console.log("Callback request:", callbackForm)
    alert("Callback request submitted! We'll contact you within 24 hours.")
    setCallbackForm({ name: "", phone: "", email: "", message: "", preferredTime: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Support & FAQ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help with your bookings, find answers to common questions, or request a callback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                  <Phone className="h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">support@riverdale.co.ke</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Request Callback */}
            <Card>
              <CardHeader>
                <CardTitle>Request Callback</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={callbackForm.name}
                    onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    value={callbackForm.phone}
                    onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={callbackForm.email}
                    onChange={(e) => setCallbackForm({ ...callbackForm, email: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Preferred Time (e.g., Morning, Afternoon)"
                    value={callbackForm.preferredTime}
                    onChange={(e) => setCallbackForm({ ...callbackForm, preferredTime: e.target.value })}
                  />
                  <Textarea
                    placeholder="How can we help you?"
                    value={callbackForm.message}
                    onChange={(e) => setCallbackForm({ ...callbackForm, message: e.target.value })}
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                    <Send className="h-4 w-4 mr-2" />
                    Request Callback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No FAQs found matching your search.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
