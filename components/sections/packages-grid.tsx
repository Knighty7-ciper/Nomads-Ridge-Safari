"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface Package {
  id: string
  name: string
  duration: string
  price: number
  image_url: string
  description: string
}

interface PackagesGridProps {
  packages: Package[]
  title?: string
  subtitle?: string
}

export function PackagesGrid({ packages, title = "Popular Packages", subtitle = "Discover our best-selling safari experiences" }: PackagesGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light text-amber-950 mb-4">
            {title}
          </h2>
          <p className="text-lg text-amber-900/70 font-light">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-900">
                  <img
                    src={pkg.image_url || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Duration Badge */}
                  <div className="flex justify-end">
                    <span className="bg-amber-500 text-amber-950 font-bold px-4 py-1 text-sm rounded-full">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className="font-serif text-2xl font-light text-white mb-3 drop-shadow-lg">
                      {pkg.name}
                    </h3>
                    <p className="text-white/90 text-sm font-light mb-4 drop-shadow line-clamp-2">
                      {pkg.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-light text-amber-300">
                        KES {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-white/80 text-xs uppercase tracking-wider">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link href="/packages">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold px-10 py-3 uppercase text-sm tracking-wider transition-all duration-300 hover:shadow-lg">
              Explore All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
