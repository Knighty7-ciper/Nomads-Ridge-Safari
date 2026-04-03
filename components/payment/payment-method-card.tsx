"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { PaymentMethod } from "@/app/payment/page"

interface PaymentMethodCardProps {
  method: {
    id: PaymentMethod
    name: string
    description: string
    icon: LucideIcon
    popular: boolean
  }
  isSelected: boolean
  onSelect: () => void
}

export function PaymentMethodCard({ method, isSelected, onSelect }: PaymentMethodCardProps) {
  const Icon = method.icon

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? "ring-2 ring-cyan-600 bg-cyan-50" : "hover:bg-gray-50"
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                method.id === "mpesa"
                  ? "bg-green-100"
                  : method.id === "card"
                    ? "bg-blue-100"
                    : method.id === "bank"
                      ? "bg-purple-100"
                      : "bg-indigo-100"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  method.id === "mpesa"
                    ? "text-green-600"
                    : method.id === "card"
                      ? "text-blue-600"
                      : method.id === "bank"
                        ? "text-purple-600"
                        : "text-indigo-600"
                }`}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{method.name}</h3>
                {method.popular && (
                  <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                    Popular
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{method.description}</p>
            </div>
          </div>
          {isSelected && (
            <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
