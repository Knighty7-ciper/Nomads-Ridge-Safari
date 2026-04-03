'use client'

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"
import { useEffect, useRef } from 'react'

export default function Company() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el
  }

  return (
    <main className="bg-deep text-dust min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dusk via-dusk to-deep" />

        {/* Safari Scene SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-64 w-full"
          viewBox="0 0 1440 256"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d0d10" stopOpacity="0" />
              <stop offset="100%" stopColor="#1a1a1f" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Sky gradient overlay */}
          <rect fill="url(#heroSkyGradient)" width="1440" height="256" />
          {/* Distant mountains */}
          <path
            d="M0 180 Q200 140 400 155 T800 145 T1200 160 T1440 150 L1440 256 L0 256 Z"
            fill="#12121a"
            opacity="0.6"
          />
          {/* Mid hills */}
          <path
            d="M0 195 Q240 180 480 188 T960 182 T1440 192 L1440 256 L0 256 Z"
            fill="#15151a"
          />
          {/* Ground */}
          <path
            d="M0 220 Q360 210 720 215 T1440 213 L1440 256 L0 256 Z"
            fill="#1a1a1f"
          />
          {/* Large Acacia trees */}
          <g fill="#0f0f14">
            <path d="M120 218 Q120 185 125 170 Q130 185 130 218 Z" />
            <ellipse cx="125" cy="165" rx="50" ry="22" />
            <path d="M380 222 Q380 195 383 183 Q386 195 386 222 Z" />
            <ellipse cx="383" cy="178" rx="38" ry="16" />
            <path d="M650 220 Q650 190 653 178 Q656 190 656 220 Z" />
            <ellipse cx="653" cy="173" rx="45" ry="19" />
            <path d="M1050 221 Q1050 193 1053 181 Q1056 193 1056 221 Z" />
            <ellipse cx="1053" cy="176" rx="40" ry="17" />
            <path d="M1320 222 Q1320 198 1323 186 Q1326 198 1326 222 Z" />
            <ellipse cx="1323" cy="181" rx="35" ry="14" />
          </g>
          {/* Elephant family silhouette */}
          <g fill="#0a0a0f" transform="translate(850, 205)">
            <ellipse cx="25" cy="14" rx="28" ry="15" />
            <ellipse cx="48" cy="7" rx="12" ry="12" />
            <path d="M8 20 Q-5 30 -10 42" stroke="#0a0a0f" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M15 20 Q12 32 8 45" stroke="#0a0a0f" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M40 20 Q45 32 50 45" stroke="#0a0a0f" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Baby elephant */}
            <ellipse cx="-20" cy="18" rx="15" ry="10" />
            <ellipse cx="-8" cy="12" rx="8" ry="8" />
            <path d="M-28 25 Q-35 35 -40 45" stroke="#0a0a0f" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
          {/* Birds */}
          <g fill="#1a1a1f" opacity="0.7">
            <path d="M200 90 Q207 82 214 90 Q207 87 200 90" />
            <path d="M218 98 Q225 90 232 98 Q225 95 218 98" />
            <path d="M1200 70 Q1207 62 1214 70 Q1207 67 1200 70" />
            <path d="M1220 82 Q1227 74 1234 82 Q1227 79 1220 82" />
            <path d="M800 100 Q805 95 810 100 Q805 98 800 100" />
          </g>
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span
            className="inline-block text-ochre text-xs tracking-[0.35em] uppercase mb-8 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            About Our Company
          </span>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-sand leading-tight mb-8 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            Nomads Ridge Safaris
          </h1>
          <p
            className="text-dust/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.35s' }}
          >
            Building authentic safari experiences across East Africa for over 15 years. We are committed to conservation, responsible tourism, and unforgettable journeys.
          </p>
          {/* Stats */}
          <div
            className="flex justify-center gap-12 md:gap-20 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-ochre">15+</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-1">Years</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-ochre">1,000+</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-1">Guests</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-ochre">4</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-1">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Feature */}
      <section
        ref={setRef(0)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-20 max-w-7xl mx-auto -mt-16 relative z-20"
      >
        <div className="bg-clay/5 border border-clay/20 p-12 md:p-16 rounded-sm flex items-center justify-center backdrop-blur-sm">
          <Image
            src="/logo.jpg"
            alt="Nomads Ridge Safaris Logo"
            width={450}
            height={158}
            className="w-full max-w-lg h-auto"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto py-20">
        <div
          ref={setRef(1)}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-ochre/50 via-ochre/30 to-transparent" />
              <div className="pl-10">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-ochre mb-6">Our Mission</h2>
                <p className="text-dust/75 leading-relaxed mb-5">
                  To create transformative safari experiences that connect travelers with Africa's wild heart while supporting conservation efforts and local communities. We believe authentic travel changes people and perspectives.
                </p>
                <p className="text-dust/60 leading-relaxed">
                  Every journey with Nomads Ridge Safaris contributes to wildlife protection and sustainable development in the regions we explore.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-ochre/50 via-ochre/30 to-transparent" />
              <div className="pl-10">
                <h2 className="font-serif text-3xl md:text-4xl font-light text-ochre mb-6">Our Vision</h2>
                <p className="text-dust/75 leading-relaxed mb-5">
                  To be East Africa's most trusted safari operator, recognized for exceptional experiences, ethical practices, and measurable conservation impact.
                </p>
                <p className="text-dust/60 leading-relaxed">
                  We envision a future where tourism thrives alongside healthy ecosystems and thriving wildlife populations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto py-16">
        <div
          ref={setRef(2)}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="text-center mb-14">
            <span className="text-ochre/80 text-xs tracking-[0.3em] uppercase mb-4 block">What Drives Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-sand">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="group bg-gradient-to-br from-clay/5 to-clay/0 border border-clay/20 p-8 hover:border-ochre/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mb-6 group-hover:bg-ochre/20 transition-colors">
                <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-sand mb-3">Conservation First</h3>
              <p className="text-dust/60 text-sm leading-relaxed">
                Every safari we operate directly funds wildlife protection, habitat restoration, and anti-poaching initiatives across East Africa.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group bg-gradient-to-br from-clay/5 to-clay/0 border border-clay/20 p-8 hover:border-ochre/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mb-6 group-hover:bg-ochre/20 transition-colors">
                <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-sand mb-3">Community Impact</h3>
              <p className="text-dust/60 text-sm leading-relaxed">
                We partner with local Maasai and indigenous communities, ensuring they benefit from tourism while preserving their traditions.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group bg-gradient-to-br from-clay/5 to-clay/0 border border-clay/20 p-8 hover:border-ochre/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mb-6 group-hover:bg-ochre/20 transition-colors">
                <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-sand mb-3">Authentic Experiences</h3>
              <p className="text-dust/60 text-sm leading-relaxed">
                No manufactured tourist traps. Just genuine wildlife encounters, real cultural exchanges, and moments that stay with you forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto py-16">
        <div
          ref={setRef(3)}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="text-center mb-14">
            <span className="text-ochre/80 text-xs tracking-[0.3em] uppercase mb-4 block">Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-sand">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Safari Tours */}
            <div className="group relative overflow-hidden border border-clay/20 hover:border-ochre/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-clay/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-10">
                <div className="w-16 h-16 rounded-sm bg-ochre/10 flex items-center justify-center mb-6 group-hover:bg-ochre/20 transition-colors">
                  <svg className="w-8 h-8 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-sand mb-4">Safari Tours</h3>
                <p className="text-dust/65 text-sm leading-relaxed mb-4">
                  Guided wildlife expeditions across Kenya's Maasai Mara, Tanzania's Serengeti, and more. From budget camping to luxury lodge experiences.
                </p>
                <p className="text-ochre/80 text-xs uppercase tracking-wider">Big Five • Migration • Photography</p>
              </div>
            </div>

            {/* Primate Trekking */}
            <div className="group relative overflow-hidden border border-clay/20 hover:border-ochre/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-clay/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-10">
                <div className="w-16 h-16 rounded-sm bg-ochre/10 flex items-center justify-center mb-6 group-hover:bg-ochre/20 transition-colors">
                  <svg className="w-8 h-8 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-sand mb-4">Primate Trekking</h3>
                <p className="text-dust/65 text-sm leading-relaxed mb-4">
                  Mountain gorilla treks in Uganda's Bwindi Forest and golden monkey experiences in Rwanda's Volcanoes National Park.
                </p>
                <p className="text-ochre/80 text-xs uppercase tracking-wider">Gorillas • Golden Monkeys • Rwanda</p>
              </div>
            </div>

            {/* Custom Packages */}
            <div className="group relative overflow-hidden border border-clay/20 hover:border-ochre/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-clay/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-10">
                <div className="w-16 h-16 rounded-sm bg-ochre/10 flex items-center justify-center mb-6 group-hover:bg-ochre/20 transition-colors">
                  <svg className="w-8 h-8 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-sand mb-4">Custom Packages</h3>
                <p className="text-dust/65 text-sm leading-relaxed mb-4">
                  Tailored itineraries designed specifically for your interests, duration, and travel style. Multi-country combinations available.
                </p>
                <p className="text-ochre/80 text-xs uppercase tracking-wider">Bespoke • Flexible • Multi-Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto py-16">
        <div
          ref={setRef(4)}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y border-clay/20 py-16">
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-light text-ochre">15+</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-2">Years Operating</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-light text-ochre">1,000+</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-2">Satisfied Guests</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-light text-ochre">5</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-2">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl md:text-6xl font-light text-ochre">4.9★</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 max-w-7xl mx-auto py-20">
        <div
          ref={setRef(5)}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-clay/10 via-clay/5 to-clay/10 border border-clay/20 p-12 md:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-ochre/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-ochre/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl font-light text-sand mb-4">Ready to Explore?</h3>
              <p className="text-dust/70 mb-8 max-w-xl mx-auto">
                Contact our team of safari specialists to start planning your African adventure. We're here to make your dream safari a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-ochre text-deep px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ochre/20"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/destinations"
                  className="inline-block border border-clay/50 text-dust px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:border-ochre hover:text-ochre"
                >
                  View Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Scene SVG */}
      <div className="h-24 relative -mt-8">
        <svg className="absolute bottom-0 left-0 right-0 h-full w-full" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path d="M0 60 Q180 45 360 52 T720 48 T1080 55 T1440 50 L1440 96 L0 96 Z" fill="#0d0d10" />
          <g fill="#0a0a0f">
            <path d="M100 55 Q100 38 103 28 Q106 38 106 55 Z" />
            <ellipse cx="103" cy="25" rx="22" ry="9" />
            <path d="M500 52 Q500 38 503 30 Q506 38 506 52 Z" />
            <ellipse cx="503" cy="27" rx="18" ry="7" />
            <path d="M900 54 Q900 40 903 32 Q906 40 906 54 Z" />
            <ellipse cx="903" cy="29" rx="20" ry="8" />
            <path d="M1300 53 Q1300 40 1303 32 Q1306 40 1306 53 Z" />
            <ellipse cx="1303" cy="29" rx="17" ry="7" />
          </g>
        </svg>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </main>
  )
}
