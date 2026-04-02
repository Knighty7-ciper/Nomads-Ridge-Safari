'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/footer'
import { ChevronLeft } from 'lucide-react'

const destinations: { [key: string]: any } = {
  '1': { name: 'Maasai Mara', country: 'Kenya', tag: 'Big Five' },
  '2': { name: 'Amboseli National Park', country: 'Kenya', tag: 'Kilimanjaro Views' },
  '3': { name: 'Serengeti National Park', country: 'Tanzania', tag: 'Migration' },
  '4': { name: 'Ngorongoro Crater', country: 'Tanzania', tag: 'UNESCO Heritage' },
  '5': { name: 'Bwindi Impenetrable', country: 'Uganda', tag: 'Gorilla Trekking' },
  '6': { name: 'Volcanoes National Park', country: 'Rwanda', tag: 'Primates' },
}

export default function DestinationDetail({ params }: { params: { id: string } }) {
  const destination = destinations[params.id]

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-light text-dust mb-4">Destination Not Found</h1>
          <Link href="/destinations" className="text-clay hover:text-ochre">Back to Destinations</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-dusk">
      {/* Header with back button */}
      <div className="bg-dusk border-b border-clay/20 py-6 px-6 md:px-12 lg:px-20">
        <Link href="/destinations" className="flex items-center gap-2 text-clay hover:text-ochre transition-colors w-fit">
          <ChevronLeft size={20} />
          <span className="text-sm uppercase tracking-wider">Back to Destinations</span>
        </Link>
      </div>

      {/* Destination Hero */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-clay/20">
        <div className="max-w-4xl">
          <p className="text-clay text-xs uppercase tracking-[0.35em] mb-4">Explore</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-dust mb-4">
            {destination.name}
          </h1>
          <p className="text-sand text-lg mb-6">{destination.country}</p>
          <div className="inline-block border border-clay/40 text-clay px-4 py-2 text-xs uppercase tracking-wider">
            {destination.tag}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="mb-16 pb-12 border-b border-clay/20">
            <h2 className="font-serif text-3xl font-light text-dust mb-6">About This Destination</h2>
            <p className="text-sand text-lg leading-relaxed opacity-80">
              {destination.name} in {destination.country} is one of the most remarkable safari destinations in East Africa. 
              Experience the raw power of African wildlife and immerse yourself in pristine natural environments guided by expert professionals.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 pb-12 border-b border-clay/20">
            <div>
              <p className="text-clay text-xs uppercase tracking-wider mb-3">Best Time to Visit</p>
              <p className="font-serif text-2xl font-light text-dust">June - October</p>
            </div>
            <div>
              <p className="text-clay text-xs uppercase tracking-wider mb-3">Duration</p>
              <p className="font-serif text-2xl font-light text-dust">4-7 Days</p>
            </div>
            <div>
              <p className="text-clay text-xs uppercase tracking-wider mb-3">Group Size</p>
              <p className="font-serif text-2xl font-light text-dust">2-12 People</p>
            </div>
          </div>

          {/* Activities */}
          <div className="mb-16 pb-12 border-b border-clay/20">
            <h3 className="font-serif text-2xl font-light text-dust mb-6">What to Experience</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Guided safari game drives',
                'Wildlife photography',
                'Cultural experiences',
                'Luxury accommodations',
                'Expert naturalist guides',
                'All-inclusive meals',
              ].map((activity, i) => (
                <li key={i} className="text-sand flex items-start gap-3">
                  <span className="text-ochre mt-1.5">→</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sand text-sm mb-6">Ready to explore {destination.name}?</p>
            <Link
              href="/contact"
              className="inline-block bg-ochre hover:bg-ochre/90 text-card font-semibold uppercase text-xs tracking-wider px-12 py-4 transition-colors"
            >
              Plan Your Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
