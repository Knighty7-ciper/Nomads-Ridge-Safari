"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Mail } from "lucide-react"

export function CustomizeJourneySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="font-serif text-5xl font-light text-white mb-4">
                Customize Your Journey
              </h2>
              <p className="text-amber-100/90 font-light text-lg mb-8">
                Every traveler is unique. Let our experts craft a personalized safari experience tailored to your dreams, budget, and preferences.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">✓</span>
                  <span className="text-white/90 font-light">Personalized itineraries designed just for you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">✓</span>
                  <span className="text-white/90 font-light">Flexibility to adjust activities and accommodations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">✓</span>
                  <span className="text-white/90 font-light">Expert guidance from local specialists</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-serif font-bold px-8 py-3 uppercase text-sm tracking-wider transition-all duration-300 hover:shadow-lg">
                  Plan Your Trip
                </Button>
              </Link>
            </div>

            {/* Right side - Visual */}
            <div className="hidden lg:block h-96 bg-gradient-to-b from-amber-800 to-amber-950 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="text-8xl text-amber-600 font-serif font-light">∞</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function NewsletterSection() {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-5xl md:text-6xl font-light text-amber-950 mb-4">
          Stay Connected
        </h2>
        <p className="text-lg text-amber-900/70 font-light mb-8">
          Subscribe to our newsletter for exclusive travel tips, special offers, and safari stories from Kenya.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 bg-white border-2 border-amber-200 focus:border-amber-500 rounded-lg font-light"
            />
          </div>
          <Button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold px-8 py-3 uppercase text-sm tracking-wider transition-all duration-300 hover:shadow-lg"
          >
            <Mail className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </form>

        {subscribed && (
          <p className="text-amber-700 font-light">
            Thank you for subscribing! Check your email for exclusive offers.
          </p>
        )}

        <p className="text-xs text-amber-900/60 font-light">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

export function DownloadBrochureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-lg p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
                Download Our 2025 Safari Brochure
              </h2>
              <p className="text-amber-100/90 font-light text-lg mb-6">
                Get comprehensive details about all our safari packages, accommodations, and special offers for the upcoming year.
              </p>
              <Link href="/brochure">
                <Button className="bg-white text-amber-700 hover:bg-amber-50 font-serif font-bold px-8 py-3 uppercase text-sm tracking-wider transition-all duration-300 hover:shadow-lg">
                  Download PDF
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/20 p-8 rounded-lg backdrop-blur-sm">
                <div className="text-6xl font-serif font-light text-white">📄</div>
                <p className="text-white/80 font-light mt-4">Complete Safari Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from "react"
