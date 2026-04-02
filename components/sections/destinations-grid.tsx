"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Destination {
  id: string
  name: string
  region: string
  description: string
  image_url: string
  slug: string
}

interface DestinationsGridProps {
  destinations: Destination[]
  title?: string
  subtitle?: string
}

export function DestinationsGrid({
  destinations,
  title = "African Destinations",
  subtitle = "Explore Kenya's most incredible wildlife and cultural experiences",
}: DestinationsGridProps) {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-serif text-amber-700 uppercase tracking-widest mb-4">
            Discover
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-amber-950 mb-4">
            {title}
          </h2>
          <p className="text-lg text-amber-900/70 font-light">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 h-72">
                {/* Background Image */}
                <img
                  src={destination.image_url || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-3xl font-light text-white mb-2 drop-shadow-lg">
                    {destination.name}
                  </h3>
                  <p className="text-white/80 text-sm font-light drop-shadow line-clamp-2">
                    {destination.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link href="/destinations">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold px-10 py-3 uppercase text-sm tracking-wider transition-all duration-300 hover:shadow-lg">
              Explore All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
