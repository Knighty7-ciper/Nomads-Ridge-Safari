'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Animal {
  name: string
  emoji: string
  image: string
  note: string
  frequency: string
}

interface ItineraryDay {
  day: number
  title: string
  subtitle: string
  description: string
  activities: string[]
}

interface DestinationData {
  id: string
  name: string
  country: string
  description: string
  price: number
  currency: string
  heroImage: string
  breadcrumb: string
  rating: number
  ratingCount: number
  duration: string
  tagline: string
  quote: string
  quoteAuthor: string
  animals: Animal[]
  itinerary: ItineraryDay[]
  included: string[]
  notIncluded: string[]
  lodge: {
    name: string
    type: string
    rating: string
    description: string
    amenities: string[]
  }
  bestTimeMonths: {
    month: string
    level: 'peak' | 'good' | 'ok' | 'low'
  }[]
  testimonials: {
    quote: string
    author: string
    rating: number
  }[]
}

export default function DestinationDetailTemplate({ data }: { data: DestinationData }) {
  const [revealVisible, setRevealVisible] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-reveal') || '0')
            setRevealVisible((prev) => ({ ...prev, [index]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const getRevealClass = (index: number) => {
    return revealVisible[index]
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-7'
  }

  return (
    <main className="bg-deep text-dust">
      {/* NAV - Simplified, no logo shown as per user request */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-deep/92 to-transparent backdrop-blur-sm">
        <Link href="/destinations" className="flex items-center gap-2 text-dust/60 hover:text-ochre transition-colors text-xs uppercase tracking-widest">
          ← Back to Destinations
        </Link>
        <Link
          href="/contact"
          className="bg-clay text-dust px-6 py-2 text-xs uppercase tracking-widest font-medium hover:bg-ochre transition-colors"
        >
          Book Now
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden pt-20">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-orange-900/5 to-deep" />
          <Image
            src={data.heroImage}
            alt={data.name}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Animated Sun */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-radial from-mara-gold/40 to-transparent opacity-60 animate-pulse" />

        {/* Hero Content */}
        <div className="relative z-10 w-full flex justify-between items-end px-20 pb-20">
          <div className="max-w-2xl">
            <p className="text-ochre text-xs uppercase tracking-widest mb-4 opacity-75">
              {data.breadcrumb}
            </p>
            <h1 className="text-7xl font-light font-serif text-dust mb-2 leading-tight">
              {data.name} <em className="italic text-ochre">{data.country}</em>
            </h1>
            <p className="text-mara-gold text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-mara-gold"></span>
              {data.tagline}
            </p>
            <p className="text-dust/70 font-serif italic text-xl max-w-xl mb-8">{data.description}</p>
            <div className="flex gap-4">
              <button className="bg-clay text-dust px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-ochre transition-colors">
                Explore Safari
              </button>
              <button className="border border-dust/30 text-dust px-8 py-4 text-xs uppercase tracking-widest hover:border-dust transition-colors">
                View Itinerary
              </button>
            </div>
          </div>

          {/* Price Tag */}
          <div className="bg-deep/80 border border-clay/30 backdrop-blur-xl p-6 text-right">
            <p className="text-xs uppercase opacity-45 tracking-widest mb-2">From</p>
            <p className="font-serif text-5xl font-light text-dust">
              {data.currency}
              {(data.price / 1).toLocaleString()}
            </p>
            <p className="text-xs opacity-40 mt-1">per person</p>
            <p className="text-xs text-ochre opacity-75 mt-2">★★★★★ {data.ratingCount} reviews</p>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs uppercase opacity-35 tracking-widest">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-dust to-transparent animate-bounce"></div>
        </div>
      </section>

      {/* EMOTIONAL HOOK */}
      <section className="bg-dusk py-28 px-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-deep to-transparent" />
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <p className="text-xs uppercase tracking-widest text-clay mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-clay"></span> Why {data.name} <span className="w-10 h-px bg-clay"></span>
          </p>
          <blockquote className="text-5xl font-light font-serif italic text-dust mb-8 leading-tight">
            {data.quote}
          </blockquote>
          <p className="text-sm uppercase opacity-50 tracking-widest">{data.quoteAuthor}</p>
        </div>
      </section>

      {/* WILDLIFE SECTION */}
      <section className="bg-bark py-28 px-20">
        <div
          data-reveal="1"
          className={`max-w-6xl mx-auto transition-all duration-1000 ${getRevealClass(1)}`}
        >
          <p className="text-xs uppercase tracking-widest text-clay mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-clay"></span> Wildlife Checklist
          </p>
          <h2 className="font-serif text-5xl font-light text-dust mb-4">
            Encounter Africa&apos;s <em className="italic text-ochre">Magnificent Creatures</em>
          </h2>

          {/* Animals Grid - Replace emojis with images */}
          <div className="grid grid-cols-2 gap-0 mt-12 border border-dust/5">
            {/* Big Five Badge */}
            <div className="col-span-2 bg-clay/10 border-b border-dust/5 p-4 text-center">
              <p className="text-xs uppercase tracking-widest text-clay font-medium">
                🏆 The Big Five
              </p>
            </div>

            {data.animals.map((animal, idx) => (
              <div
                key={idx}
                className="border-b border-r border-dust/5 p-5 hover:bg-clay/5 transition-colors flex items-center gap-4 last:border-r-0"
              >
                {/* Replace emoji with image */}
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm font-medium text-dust">{animal.name}</p>
                  <p className="text-xs opacity-50 text-dust mt-1">{animal.note}</p>
                </div>
                <div className="text-xs text-clay opacity-60 flex-shrink-0">{animal.frequency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="bg-dusk py-28 px-20">
        <div
          data-reveal="2"
          className={`max-w-5xl mx-auto transition-all duration-1000 ${getRevealClass(2)}`}
        >
          <p className="text-xs uppercase tracking-widest text-clay mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-clay"></span> Day by Day
          </p>
          <h2 className="font-serif text-5xl font-light text-dust mb-4">
            {data.duration} Days. A <em className="italic text-ochre">Hundred Memories.</em>
          </h2>

          <div className="mt-12 space-y-0 border border-dust/5">
            {data.itinerary.map((day, idx) => (
              <div key={idx} className="grid grid-cols-[120px_1fr] border-b border-dust/5 last:border-b-0 hover:bg-clay/3 transition-colors">
                <div className="border-r border-dust/5 p-8 flex flex-col items-center justify-center text-center">
                  <p className="text-xs uppercase opacity-40 tracking-widest">Day</p>
                  <p className="font-serif text-4xl font-light text-clay">{day.day}</p>
                </div>
                <div className="p-8">
                  <p className="text-xs uppercase opacity-60 text-ochre tracking-widest mb-2">{day.subtitle}</p>
                  <h3 className="font-serif text-2xl font-light text-dust mb-3">{day.title}</h3>
                  <p className="text-sm opacity-60 text-dust mb-4 leading-relaxed">{day.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {day.activities.map((activity, i) => (
                      <span
                        key={i}
                        className="text-xs border border-dust/10 text-dust px-3 py-1 opacity-60"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED/NOT INCLUDED */}
      <section className="bg-bark py-28 px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-5xl font-light text-dust mb-12">
            What&apos;s <em className="italic text-ochre">Included</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {data.included.map((item, idx) => (
              <div key={idx} className="border border-dust/10 bg-dusk/40 p-6 hover:border-clay/30 transition-colors">
                <h3 className="font-serif text-lg font-light text-dust mb-2">✓ {item}</h3>
              </div>
            ))}
          </div>

          <div className="bg-dusk/60 border border-dust/5 p-6">
            <p className="text-xs uppercase opacity-40 tracking-widest mb-4">Not Included</p>
            <ul className="text-sm opacity-60 space-y-2">
              {data.notIncluded.map((item, idx) => (
                <li key={idx}>– {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEST TIME */}
      <section className="bg-dusk py-28 px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-5xl font-light text-dust mb-12">
            Best Time to <em className="italic text-ochre">Visit</em>
          </h2>

          <div className="grid grid-cols-12 gap-1 mb-8 bg-bark/40 p-6">
            {data.bestTimeMonths.map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xs uppercase opacity-40 mb-2">{item.month.slice(0, 3)}</p>
                <div
                  className={`w-full rounded-sm mx-auto ${
                    item.level === 'peak'
                      ? 'h-16 bg-clay'
                      : item.level === 'good'
                        ? 'h-12 bg-ochre opacity-70'
                        : item.level === 'ok'
                          ? 'h-8 bg-sage opacity-55'
                          : 'h-4 bg-dust/10'
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'Peak Season', color: 'bg-clay' },
              { label: 'Good Season', color: 'bg-ochre' },
              { label: 'Ok Season', color: 'bg-sage' },
              { label: 'Low Season', color: 'bg-dust/10' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-3 h-3 ${item.color}`} />
                <span className="text-xs opacity-60">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bark py-28 px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl font-light text-dust mb-6">
            What Our <em className="italic text-ochre">Travelers Say</em>
          </h2>
          {data.testimonials.length > 0 && (
            <>
              <blockquote className="font-serif text-3xl italic font-light text-dust mb-6">
                "{data.testimonials[0].quote}"
              </blockquote>
              <p className="text-sm uppercase opacity-50">— {data.testimonials[0].author}</p>
            </>
          )}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-deep py-28 px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-4xl font-light text-dust mb-6">Ready to Explore?</h2>
            <p className="text-dust/70 mb-6 leading-relaxed">
              Our expert team will help you craft the perfect {data.name} safari experience tailored to your preferences,
              budget, and travel dates.
            </p>
            <div className="bg-clay/10 border border-clay/30 p-6 mb-6">
              <p className="text-sm text-dust mb-2">
                <strong className="text-clay">Limited Availability:</strong> Peak season books 6-8 months in advance.
              </p>
            </div>
            <ul className="space-y-3 text-sm opacity-70">
              <li>✓ Secure booking with instant confirmation</li>
              <li>✓ 24/7 customer support during your safari</li>
              <li>✓ Flexible cancellation up to 30 days before</li>
            </ul>
          </div>

          <div className="bg-dusk/70 border border-dust/10 p-12">
            <h3 className="font-serif text-3xl font-light text-dust mb-1">Let&apos;s Book It</h3>
            <p className="text-dust/50 text-xs uppercase tracking-widest mb-8">Start your adventure</p>

            <div className="space-y-4 mb-8 pb-8 border-b border-dust/10">
              <div>
                <p className="text-xs uppercase opacity-50 mb-2">Package Price</p>
                <p className="font-serif text-4xl font-light text-ochre">
                  {data.currency}
                  {(data.price / 1).toLocaleString()}
                </p>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-deep/60 border border-dust/10 text-dust px-4 py-3 text-sm placeholder-dust/30 focus:border-clay outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-deep/60 border border-dust/10 text-dust px-4 py-3 text-sm placeholder-dust/30 focus:border-clay outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-deep/60 border border-dust/10 text-dust px-4 py-3 text-sm placeholder-dust/30 focus:border-clay outline-none"
              />
              <select className="w-full bg-deep/60 border border-dust/10 text-dust px-4 py-3 text-sm focus:border-clay outline-none">
                <option>Preferred Travel Date</option>
                <option>June 2025</option>
                <option>July 2025</option>
                <option>August 2025</option>
              </select>
              <button
                type="submit"
                className="w-full bg-clay text-dust py-3 text-sm uppercase font-medium tracking-widest hover:bg-ochre transition-colors"
              >
                Request Booking
              </button>
              <p className="text-xs opacity-35 text-center mt-4">
                We&apos;ll respond within 24 hours with availability and custom options
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
