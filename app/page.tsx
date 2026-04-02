'use client'

import Footer from '@/components/layout/footer'
import Image from 'next/image'
import ProcessSection from '@/components/sections/process-section'
import TestimonialsPremium from '@/components/sections/testimonials-premium'
import PackagesPremium from '@/components/sections/packages-premium'
import DestinationsDynamic from '@/components/sections/destinations-dynamic'

export default function Home() {
  return (
    <>
    <main className="bg-dusk text-dust">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-start overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-4B91V9dTmHLMMH0Gl5MHM1Xpff0I1b.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dusk/75 via-dusk/60 to-transparent"></div>
        </div>

        {/* Silhouette landscape */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#100a04] to-transparent"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-2xl pl-6 sm:pl-12 md:pl-20 pr-6 sm:pr-12">
          <p className="text-ochre text-xs uppercase tracking-[0.35em] mb-6 flex items-center gap-4">
            <span className="block w-10 h-px bg-ochre"></span>
            Beyond Destinations
          </p>
          <h1 className="font-serif text-6xl lg:text-7xl font-light leading-tight mb-6 text-clay drop-shadow-2xl">
            Into The <em className="italic text-sand">Wild</em>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-sand max-w-md mb-8 opacity-75">
            From the Great Migration to intimate gorilla encounters, discover safari experiences crafted for adventurers and nature lovers alike.
          </p>
          <div className="flex gap-4">
            <a href="#destinations" className="bg-clay hover:bg-ochre text-dusk px-8 py-4 text-sm uppercase tracking-wider font-medium transition-colors">
              Explore Safaris
            </a>
            <a href="#contact" className="border border-dust/35 hover:border-dust text-dust px-8 py-4 text-sm uppercase tracking-wider transition-colors">
              Book Now
            </a>
          </div>
        </div>

        {/* Stats - right side */}
        <div className="absolute right-6 sm:right-12 md:right-20 bottom-20 z-10 space-y-8 text-right">
          <div>
            <div className="font-serif text-3xl text-clay">6+</div>
            <div className="text-xs uppercase tracking-wider opacity-50">Countries</div>
          </div>
          <div>
            <div className="font-serif text-3xl text-clay">200+</div>
            <div className="text-xs uppercase tracking-wider opacity-50">Safari Routes</div>
          </div>
          <div>
            <div className="font-serif text-3xl text-clay">3000+</div>
            <div className="text-xs uppercase tracking-wider opacity-50">Happy Travellers</div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-6 sm:left-12 md:left-20 z-10">
          <p className="text-xs uppercase tracking-wider opacity-45 mb-3">Scroll to explore</p>
          <div className="w-px h-12 bg-gradient-to-b from-dust to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-clay py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-xs md:text-sm">
          <p className="text-dusk uppercase tracking-widest font-medium">Safari Experiences ✦</p>
          <p className="text-dusk uppercase tracking-widest font-medium">Wildlife Encounters ✦</p>
          <p className="text-dusk uppercase tracking-widest font-medium">Mountain Adventures ✦</p>
          <p className="text-dusk uppercase tracking-widest font-medium">Safari Experiences ✦</p>
          <p className="text-dusk uppercase tracking-widest font-medium">Wildlife Encounters ✦</p>
          <p className="text-dusk uppercase tracking-widest font-medium">Mountain Adventures ✦</p>
        </div>
      </section>

      {/* DESTINATIONS SECTION - DYNAMIC WITH ANIMATIONS */}
      <DestinationsDynamic />

      {/* EXPERIENCE SECTION */}
      <section className="py-12 md:py-24 px-6 md:px-12 lg:px-20 bg-dusk">
        <p className="text-clay text-xs uppercase tracking-[0.35em] mb-4 flex items-center gap-4">
          <span className="block w-8 h-px bg-clay"></span>
          What We Offer
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-8 md:mb-12 text-dust">
          Unforgettable <em className="italic text-ochre">Experiences</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wildlife Safari Card */}
          <div className="group cursor-pointer">
            <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lion%20country-MhAKVw2p8iOKDXDRZbQj97qQaR0QZH.jpg"
                alt="Wildlife Safari"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk/80 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-serif font-light text-dust group-hover:text-clay transition-colors mb-3">Wildlife Safari</h3>
            <p className="text-sand leading-relaxed">
              Experience the raw beauty of Africa's iconic wildlife in their natural habitats. Encounter lions, elephants, zebras, and countless species on guided safari expeditions.
            </p>
          </div>

          {/* Gorilla Trekking Card */}
          <div className="group cursor-pointer">
            <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwanda%20canopy-xyGm95PrO7weFzo4UQ90Wl9Ifpkh1j.jpg"
                alt="Gorilla Trekking"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk/80 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-serif font-light text-dust group-hover:text-clay transition-colors mb-3">Gorilla Trekking</h3>
            <p className="text-sand leading-relaxed">
              Trek through misty forests to encounter mountain gorillas in their habitat. A once-in-a-lifetime adventure through pristine wilderness.
            </p>
          </div>

          {/* Mountain Adventures Card */}
          <div className="group cursor-pointer">
            <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg"
                alt="Mountain Adventures"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dusk/80 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-serif font-light text-dust group-hover:text-clay transition-colors mb-3">Mountain Adventures</h3>
            <p className="text-sand leading-relaxed">
              Summit Mount Kenya or explore Rwanda's Volcanoes. Challenge yourself while surrounded by breathtaking alpine landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <PackagesPremium />

      {/* PROCESS SECTION */}
      <ProcessSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsPremium />

      {/* CONTACT CTA */}
      <section id="contact" className="py-12 md:py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#0d0804] to-[#1a0e06] text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 md:mb-6 text-dust">
          Ready for Your Adventure?
        </h2>
        <p className="text-sand opacity-70 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-lg">
          Join thousands of travelers who've experienced the magic of Africa with Nomads Ridge Safaris.
        </p>
        <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-dust/10 border border-dust/20 px-4 py-3 text-sm text-dust placeholder-sand/50 focus:border-clay outline-none"
          />
          <button className="bg-clay hover:bg-ochre text-dusk px-8 py-3 text-sm uppercase tracking-wider font-medium transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
