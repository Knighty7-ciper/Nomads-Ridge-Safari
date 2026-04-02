"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Clock } from "lucide-react"

interface WhatsAppWidgetProps {
  phoneNumber?: string
  businessName?: string
}

export function WhatsAppWidget({
  phoneNumber = "+254714703892",
  businessName = "Nomads Ridge Safaris",
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    {
      title: "Safari Booking Inquiry",
      message: "Hi! I'm interested in booking a safari package. Can you help me with pricing and availability?",
    },
    {
      title: "Hotel Reservation",
      message: "Hello! I'd like to inquire about hotel accommodations in Kenya. What options do you have available?",
    },
    {
      title: "Custom Tour Package",
      message: "Hi there! I'm looking for a custom tour package for my group. Can we discuss the details?",
    },
    {
      title: "General Information",
      message: "Hello! I have some questions about traveling to Kenya. Can you provide more information?",
    },
  ]

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}

        {/* WhatsApp Chat Widget */}
        {isOpen && (
          <Card className="w-80 shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-medium">{businessName}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-green-100">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="bg-gray-50 p-4 border-b">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700 mb-2">👋 Hello! Welcome to {businessName}</p>
                  <p className="text-xs text-gray-500">How can we help you plan your perfect Kenyan adventure today?</p>
                </div>
              </div>

              <div className="p-4 space-y-2 max-h-60 overflow-y-auto">
                <p className="text-xs text-gray-500 mb-3">Choose a quick message:</p>
                {quickMessages.map((msg, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3 text-xs bg-transparent"
                    onClick={() => sendWhatsAppMessage(msg.message)}
                  >
                    <div>
                      <div className="font-medium text-gray-700">{msg.title}</div>
                      <div className="text-gray-500 mt-1 line-clamp-2">{msg.message}</div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="p-4 bg-gray-50 border-t">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="w-3 h-3" />
                  <span>Typically replies within minutes</span>
                </div>
                <Button
                  onClick={() =>
                    sendWhatsAppMessage("Hello! I'd like to get more information about your travel services.")
                  }
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
