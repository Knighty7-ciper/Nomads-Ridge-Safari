'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  location: string
  quote: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mamta D.',
    location: 'United States',
    quote:
      'We, a group of 5 recently retired women and two kids put our trust in the hands of Mr. John, the Safari Director. From receiving us from the airport to making sure our stay was perfect, he managed our entire travel logistics meticulously.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Nisha',
    location: 'India',
    quote:
      'The place\'s were overwhelming. It felt mesmerising connecting to the nature and people, both in their truest and purest form. People were extremely affectionate and hospitable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'James M.',
    location: 'United Kingdom',
    quote:
      'Absolutely unforgettable experience. The attention to detail was extraordinary, from the wildlife guides to the lodge accommodations. Every moment felt carefully curated.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah K.',
    location: 'Canada',
    quote:
      'The Masai Mara experience was beyond words. Our guide\'s knowledge of wildlife was exceptional, and the entire team made us feel so welcome.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
  },
]

const miniTestimonials = [
  {
    id: 1,
    stars: '★★★★★',
    text: 'Best safari experience of my life. Every detail was perfect!',
    author: 'Michael P. - Australia',
  },
  {
    id: 2,
    stars: '★★★★★',
    text: 'The guides were knowledgeable and the accommodations were luxurious.',
    author: 'Emma L. - Germany',
  },
  {
    id: 3,
    stars: '★★★★★',
    text: 'Wildlife encounters I\'ll never forget. Highly recommended!',
    author: 'David C. - USA',
  },
]

export default function TestimonialsPremium() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-32 bg-dusk border-t border-clay/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-ochre uppercase text-xs tracking-widest mb-3">TESTIMONIALS</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dust mb-6">
            What Our <em className="italic text-ochre">Travelers</em> Say
          </h2>
          <p className="text-dust/70 max-w-2xl text-lg">
            Hear from those who have experienced the magic of African safaris with us. Their stories inspire us every day.
          </p>
        </div>

        {/* Main Testimonial Layout */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Large Testimonial Card - Left */}
          <div className="md:col-span-7 relative">
            {/* Large Quote Mark */}
            <div className="absolute -top-4 -left-4 text-9xl text-ochre/15 font-serif leading-none">
              &ldquo;
            </div>

            {/* Quote Text */}
            <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-dust mb-8 relative z-10 italic">
              {currentTestimonial.quote}
            </p>

            {/* Author Info */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ochre/30 flex-shrink-0">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-dust font-semibold text-lg">{currentTestimonial.name}</p>
                  <p className="text-sand text-sm uppercase tracking-wider">{currentTestimonial.location}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlay(false)
                    }}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-ochre w-8 h-2'
                        : 'bg-clay/40 w-7 h-2 hover:bg-clay/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mini Testimonials - Right */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {miniTestimonials.map((mini) => (
              <div
                key={mini.id}
                className="p-5 border border-clay/30 bg-dusk/50 backdrop-blur hover:border-ochre/40 transition-all duration-300 group"
              >
                <p className="text-ochre text-lg mb-3">{mini.stars}</p>
                <p className="text-dust/90 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{mini.text}&rdquo;
                </p>
                <p className="text-sand text-xs uppercase tracking-wider">
                  {mini.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 border border-clay/40 hover:border-ochre hover:bg-ochre/10 text-dust transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-xs text-dust/60 uppercase tracking-wider px-6">
            {currentIndex + 1} / {testimonials.length}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 border border-clay/40 hover:border-ochre hover:bg-ochre/10 text-dust transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
