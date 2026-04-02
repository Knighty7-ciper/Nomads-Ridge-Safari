"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

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
    name: "Mamta D.",
    location: "United States",
    quote:
      "We, a group of 5 recently retired women and two kids put our trust in the hands of Mr. John, the Safari Director. From receiving us from the airport to making sure our stay was perfect, he managed our entire travel logistics meticulously.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Nisha",
    location: "India",
    quote:
      "The place's were overwhelming. It felt mesmerising connecting to the nature and people, both in their truest and purest form. People were extremely affectionate and hospitable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "James M.",
    location: "United Kingdom",
    quote:
      "Absolutely unforgettable experience. The attention to detail was extraordinary, from the wildlife guides to the lodge accommodations. Every moment felt carefully curated.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  // Display 3 cards
  const getVisibleCards = () => {
    return [0, 1, 2].map((offset) => (currentIndex + offset) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-dusk border-t border-clay/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-ochre uppercase text-xs tracking-widest mb-2">TESTIMONIALS</p>
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-dust mb-4">
                What They Say About Us
              </h2>
              <p className="text-dust/70 max-w-2xl">
                Our greatest compliments come from those who have traveled with us. Check out what our satisfied guests have to say.
              </p>
            </div>
          </div>
        </div>

        {/* Three-Card Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {getVisibleCards().map((cardIndex) => {
              const testimonial = testimonials[cardIndex]
              return (
                <div
                  key={cardIndex}
                  className="bg-card border border-clay/30 p-8 rounded hover:border-ochre/50 transition-all"
                >
                  {/* Star Rating - Circled */}
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 border-2 border-ochre text-ochre rounded-full font-serif text-lg font-light">
                      ★
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-dust text-center leading-relaxed mb-8 italic text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-clay/20 mb-6"></div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden mb-4 border-2 border-ochre/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-dust text-base">{testimonial.name}</h4>
                    <p className="text-sand text-xs uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 justify-center mt-12">
            <button
              onClick={goToPrevious}
              className="p-3 border border-clay/30 hover:border-ochre hover:bg-ochre/10 text-dust transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 border border-clay/30 hover:border-ochre hover:bg-ochre/10 text-dust transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-ochre w-6" : "bg-clay/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
