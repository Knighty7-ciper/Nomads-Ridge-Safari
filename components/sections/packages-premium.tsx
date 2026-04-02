'use client'

import Link from 'next/link'
import { useState } from 'react'
import { formatPrice } from '@/lib/currency'

interface Package {
  id: string
  name: string
  duration: string
  priceUSD: number
  description: string
  features: string[]
  isFeatured?: boolean
  image_color?: string
}

const defaultPackages: Package[] = [
  {
    id: '1',
    name: 'Classic Safari',
    duration: '5 Days',
    priceUSD: 1200,
    description: 'Experience the iconic Maasai Mara with expert guides and comfortable lodges.',
    features: [
      'Daily game drives',
      'Professional guides',
      'All meals included',
      'Comfortable accommodation',
      'Photography tips',
    ],
    isFeatured: false,
  },
  {
    id: '2',
    name: 'Premium Explorer',
    duration: '7 Days',
    priceUSD: 1800,
    description: 'Multi-destination safari across Kenya and Tanzania with luxury camps.',
    features: [
      'Guided safari experiences',
      'Luxury lodge stays',
      'All-inclusive meals',
      'Private transport',
      'Expert naturalists',
      'Conservation talks',
    ],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Gorilla Quest',
    duration: '10 Days',
    priceUSD: 2500,
    description: 'Ultimate African adventure including mountain gorilla trekking in Uganda.',
    features: [
      'Gorilla permits included',
      'Mountain trekking',
      'Luxury accommodations',
      'Expert guides',
      'Cultural experiences',
      'All meals & transport',
    ],
    isFeatured: false,
  },
]

interface PackagesPremiumProps {
  packages?: Package[]
  title?: string
  subtitle?: string
}

export default function PackagesPremium({ 
  packages = defaultPackages, 
  title = 'Safari Packages',
  subtitle = 'Handpicked experiences for every adventure seeker'
}: PackagesPremiumProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-32 bg-card border-t border-clay/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-ochre uppercase text-xs tracking-widest mb-3">PACKAGES</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dust mb-6">
            {title}
          </h2>
          <p className="text-dust/70 max-w-2xl text-lg">
            {subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              onMouseEnter={() => setHoveredId(pkg.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden transition-all duration-500 ${
                pkg.isFeatured
                  ? 'border-2 border-ochre md:scale-105 md:shadow-2xl'
                  : 'border border-clay/30 hover:border-ochre/50'
              }`}
              style={{
                animation: `slideUp 0.6s ease both`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${
                    pkg.isFeatured ? 'rgba(224, 32, 32, 0.1)' : 'rgba(160, 160, 48, 0.05)'
                  }, transparent)`,
                }}
              />

              {/* Featured Badge */}
              {pkg.isFeatured && (
                <div className="absolute top-0 right-0 bg-ochre text-card px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  Featured
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col bg-dusk">
                {/* Duration Tag */}
                <p className="text-ochre uppercase text-xs tracking-widest mb-3 font-semibold">
                  {pkg.duration}
                </p>

                {/* Package Name */}
                <h3 className="font-serif text-2xl md:text-3xl font-light text-dust mb-3 group-hover:text-ochre transition-colors">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="text-dust/70 text-sm leading-relaxed mb-6 flex-grow">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-xs text-dust/60 uppercase tracking-wider mb-1">From</p>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-3xl font-light text-clay">
                      {formatPrice(pkg.priceUSD, 'KES')}
                    </span>
                    <span className="text-xs text-dust/60">per person (KES)</span>
                    <span className="text-xs text-dust/50">${pkg.priceUSD} USD equivalent</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-dust/70 text-sm flex items-start gap-3"
                      style={{
                        animation: hoveredId === pkg.id ? `slideIn 0.3s ease` : 'none',
                        animationDelay: `${i * 0.05}s`,
                      }}
                    >
                      <span className="text-ochre mt-1 text-lg leading-none flex-shrink-0">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/booking?package=${pkg.id}`}
                  className={`block text-center py-3 px-6 uppercase text-xs font-semibold tracking-wider transition-all duration-300 ${
                    pkg.isFeatured
                      ? 'bg-ochre text-card hover:bg-ochre/90'
                      : 'border border-clay/40 text-dust hover:bg-clay hover:text-card'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-dusk border border-clay/30 p-12">
          <h3 className="font-serif text-3xl font-light text-dust mb-4">
            Can&apos;t Find Your Perfect Package?
          </h3>
          <p className="text-dust/70 mb-8 max-w-2xl mx-auto">
            Our expert team can design a fully customized safari experience tailored to your specific interests, budget, and travel dates.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ochre hover:bg-ochre/90 text-card px-10 py-4 uppercase text-xs font-semibold tracking-wider transition-colors"
          >
            Customize Your Safari
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
