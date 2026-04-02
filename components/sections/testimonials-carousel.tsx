"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  comment: string
  trip: string
  date: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export function TestimonialsCarousel({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Real experiences from real travelers",
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-serif text-amber-700 uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-amber-950 mb-4">
            {title}
          </h2>
          <p className="text-lg text-amber-900/70 font-light">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Cards - 3 visible on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length
              const testimonial = testimonials[index]
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-amber-600"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-amber-900/80 font-light leading-relaxed mb-6 italic">
                    "{testimonial.comment}"
                  </p>

                  {/* Trip & Date */}
                  <p className="text-xs text-amber-700 uppercase tracking-wider font-semibold mb-4">
                    {testimonial.trip} • {testimonial.date}
                  </p>

                  {/* Author */}
                  <div className="border-t border-amber-200 pt-4">
                    <p className="font-serif text-lg font-light text-amber-950">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-amber-900/60 font-light">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              onClick={goToPrevious}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToNext}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-600 w-8" : "bg-amber-300 hover:bg-amber-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
