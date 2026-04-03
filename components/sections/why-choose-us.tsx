"use client"

import React from "react"

import { Award, Compass, Leaf, Zap } from "lucide-react"

interface Feature {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
}

interface WhyChooseUsProps {
  features?: Feature[]
  title?: string
  subtitle?: string
}

export function WhyChooseUs({
  title = "Why Choose Nomads Ridge Safaris",
  subtitle = "Experience authentic African safaris crafted by local experts",
  features = [
    {
      id: "1",
      title: "Local Expertise",
      description: "Our guides are locals who know these lands intimately, offering authentic cultural insights and unparalleled wildlife knowledge.",
      icon: <Compass className="w-12 h-12" />,
    },
    {
      id: "2",
      title: "Sustainable Tourism",
      description: "We're committed to conservation, supporting local communities and protecting Kenya's precious ecosystems for future generations.",
      icon: <Leaf className="w-12 h-12" />,
    },
    {
      id: "3",
      title: "Tailored Experiences",
      description: "Every safari is customized to your preferences, pace, and interests. From luxury lodges to bush camps, we arrange it all.",
      icon: <Award className="w-12 h-12" />,
    },
    {
      id: "4",
      title: "Exceptional Service",
      description: "From airport pickup to evening campfire stories, our team ensures every detail exceeds your expectations.",
      icon: <Zap className="w-12 h-12" />,
    },
  ],
}: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-serif text-amber-700 uppercase tracking-widest mb-4">
            Our Advantages
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-amber-950 mb-4">
            {title}
          </h2>
          <p className="text-lg text-amber-900/70 font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group hover:bg-amber-50 p-8 rounded-lg transition-all duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-light text-amber-950 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-amber-900/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
