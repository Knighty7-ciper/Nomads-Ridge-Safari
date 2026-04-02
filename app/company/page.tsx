'use client'

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"

export default function Company() {
  return (
    <main className="bg-dusk text-dust">
      {/* Hero */}
      <div className="pt-40 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-ochre text-xs uppercase tracking-wider">ABOUT OUR COMPANY</span>
          <h1 className="font-serif text-6xl lg:text-7xl font-light leading-tight mt-4">Nomads Ridge Safaris</h1>
          <p className="text-dust/70 text-lg mt-6 max-w-2xl">Building authentic safari experiences across East Africa for over 15 years. We are committed to conservation, responsible tourism, and unforgettable journeys.</p>
        </div>

        {/* Logo Feature */}
        <div className="bg-clay/5 border border-clay/20 p-12 rounded-sm mb-20 flex items-center justify-center">
          <Image
            src="/logo.jpg"
            alt="Nomads Ridge Safaris Logo"
            width={400}
            height={140}
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 border-b border-clay/20 pb-20">
          <div>
            <p className="font-serif text-4xl font-light text-ochre mb-2">15+</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Years Operating</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-light text-ochre mb-2">1000+</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Satisfied Guests</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-light text-ochre mb-2">5</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Countries Served</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-light text-ochre mb-2">4.9★</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Average Rating</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-serif text-3xl font-light text-ochre mb-4">Our Mission</h2>
            <p className="text-dust/70 leading-relaxed mb-4">
              To create transformative safari experiences that connect travelers with Africa's wild heart while supporting conservation efforts and local communities. We believe authentic travel changes people and perspectives.
            </p>
            <p className="text-dust/70 leading-relaxed">
              Every journey with Nomads Ridge Safaris contributes to wildlife protection and sustainable development in the regions we explore.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-light text-ochre mb-4">Our Vision</h2>
            <p className="text-dust/70 leading-relaxed mb-4">
              To be East Africa's most trusted safari operator, recognized for exceptional experiences, ethical practices, and measurable conservation impact.
            </p>
            <p className="text-dust/70 leading-relaxed">
              We envision a future where tourism thrives alongside healthy ecosystems and thriving wildlife populations.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-light text-ochre mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
              <h3 className="text-lg font-semibold text-dust mb-3">Safari Tours</h3>
              <p className="text-dust/70 text-sm">Guided wildlife expeditions across Kenya's Maasai Mara, Tanzania's Serengeti, and more. From budget to luxury experiences.</p>
            </div>
            <div className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
              <h3 className="text-lg font-semibold text-dust mb-3">Primate Trekking</h3>
              <p className="text-dust/70 text-sm">Mountain gorilla treks in Uganda's Bwindi Forest and golden monkey experiences in Rwanda's Volcanoes National Park.</p>
            </div>
            <div className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
              <h3 className="text-lg font-semibold text-dust mb-3">Custom Packages</h3>
              <p className="text-dust/70 text-sm">Tailored itineraries designed specifically for your interests, duration, and travel style. Multi-country combinations available.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-clay/10 border border-clay/30 p-12 text-center">
          <h3 className="font-serif text-3xl font-light text-dust mb-4">Ready to Explore?</h3>
          <p className="text-dust/70 mb-8">Contact our team to start planning your African adventure.</p>
          <Link href="/contact" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Get In Touch
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
