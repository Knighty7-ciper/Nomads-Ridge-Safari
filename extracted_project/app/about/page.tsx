'use client'

import Link from "next/link"
import Footer from "@/components/layout/footer"
import FAQSection from "@/components/sections/faq-section"
import TestimonialsPremium from "@/components/sections/testimonials-premium"

export default function About() {
  return (
    <main className="bg-dusk text-dust">
      <div className="pt-32 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="font-serif text-6xl lg:text-7xl font-light mb-8 leading-tight">About Nomads Ridge Safaris</h1>
          <p className="text-xl text-dust/80 max-w-2xl leading-relaxed">
            We take you past the ordinary — into the living, breathing heart of Kenya, Tanzania, Uganda, Rwanda and beyond. This is not just a trip. This is your story with the wild.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-4xl font-light mb-6 text-ochre">Our Mission</h2>
            <p className="text-dust/80 leading-relaxed mb-4">
              Founded with a passion for authentic African experiences, Nomads Ridge Safaris has been crafting transformative safari journeys for over 15 years. We believe that true travel isn't about ticking boxes—it's about connecting with the soul of a place.
            </p>
            <p className="text-dust/80 leading-relaxed mb-4">
              Our mission is to provide immersive, responsible safari experiences that respect local communities, protect wildlife, and deliver unforgettable adventures to our guests. Every journey with us is a chance to connect with nature and contribute to conservation.
            </p>
            <p className="text-dust/80 leading-relaxed">
              We specialize in creating personalized experiences across Kenya, Tanzania, Uganda, and Rwanda—from the roaring lions of Maasai Mara to the misty mountains where mountain gorillas roam.
            </p>
          </div>
          <div className="border border-clay/30 p-8 flex flex-col justify-center bg-dusk">
            <p className="font-serif text-5xl font-light text-ochre mb-4">15+</p>
            <p className="text-sm uppercase tracking-wider text-dust/70">Years of Safari Excellence</p>
            <hr className="border-clay/20 my-6" />
            <p className="font-serif text-3xl font-light text-ochre mb-4">1000+</p>
            <p className="text-sm uppercase tracking-wider text-dust/70">Satisfied Explorers Worldwide</p>
            <hr className="border-clay/20 my-6" />
            <p className="font-serif text-3xl font-light text-ochre mb-4">5</p>
            <p className="text-sm uppercase tracking-wider text-dust/70">East African Countries Covered</p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-light mb-12 text-ochre">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-clay/30 p-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-dust">Authenticity</h3>
              <p className="text-dust/70 text-sm leading-relaxed">
                We avoid tourist traps and deliver genuine, unfiltered African experiences. Our guides are locals who know the land and its stories intimately.
              </p>
            </div>
            <div className="border border-clay/30 p-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-dust">Conservation</h3>
              <p className="text-dust/70 text-sm leading-relaxed">
                10% of our profits go directly to wildlife conservation and community protection initiatives. We actively participate in habitat restoration and anti-poaching efforts.
              </p>
            </div>
            <div className="border border-clay/30 p-8">
              <h3 className="font-serif text-2xl font-light mb-4 text-dust">Responsibility</h3>
              <p className="text-dust/70 text-sm leading-relaxed">
                We operate with minimal environmental impact, support local economies, maintain ethical wildlife viewing practices, and invest in community development.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-light mb-12 text-ochre">Expert Team</h2>
          <div className="border border-clay/30 p-12 bg-dusk">
            <p className="text-dust/80 leading-relaxed mb-6">
              Our team consists of certified safari guides with combined decades of experience in African wildlife, ecology, and hospitality. Each guide undergoes rigorous training in wildlife identification, safety protocols, and environmental conservation to ensure you receive world-class service and authentic insights into the ecosystems we explore.
            </p>
            <p className="text-dust/80 leading-relaxed">
              From logistics coordinators to camp managers, every team member is dedicated to making your safari an unforgettable journey. We employ local staff from communities across Kenya, Tanzania, Uganda, and Rwanda, directly supporting the economies and livelihoods we're committed to protecting.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 border-t border-clay/20 pt-12">
          <h2 className="font-serif text-4xl font-light mb-12 text-ochre">Why Choose Nomads Ridge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-ochre text-2xl mt-1">★</div>
              <div>
                <p className="font-semibold text-dust mb-2">Local Expert Guides</p>
                <p className="text-dust/60 text-sm">Passionate professionals who know every animal, plant, and cultural nuance</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-ochre text-2xl mt-1">★</div>
              <div>
                <p className="font-semibold text-dust mb-2">Personalized Experiences</p>
                <p className="text-dust/60 text-sm">Custom itineraries tailored to your interests, pace, and travel style</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-ochre text-2xl mt-1">★</div>
              <div>
                <p className="font-semibold text-dust mb-2">Sustainable Practices</p>
                <p className="text-dust/60 text-sm">Environmentally responsible operations that protect the wildlife and communities we love</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-ochre text-2xl mt-1">★</div>
              <div>
                <p className="font-semibold text-dust mb-2">24/7 Support</p>
                <p className="text-dust/60 text-sm">Dedicated team available before, during, and after your journey</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-ochre text-2xl mt-1">★</div>
              <div>
                <p className="font-semibold text-dust mb-2">Proven Track Record</p>
                <p className="text-dust/60 text-sm">Over 1000 satisfied explorers with 4.9/5 average rating</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-ochre text-2xl mt-1">★</div>
              <div>
                <p className="font-semibold text-dust mb-2">Multi-Country Expertise</p>
                <p className="text-dust/60 text-sm">Seamless experiences across Kenya, Tanzania, Uganda, and Rwanda</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="border-t border-clay/20 pt-12 pb-20 text-center">
          <h3 className="font-serif text-3xl font-light mb-4 text-dust">Contact Information</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-ochre text-sm uppercase tracking-wider font-semibold mb-2">Phone</p>
              <a href="tel:+254714703892" className="text-dust hover:text-ochre transition-colors">
                +254 714 703 892
              </a>
            </div>
            <div>
              <p className="text-ochre text-sm uppercase tracking-wider font-semibold mb-2">Email</p>
              <a href="mailto:nomadsridgesafaris@gmail.com" className="text-dust hover:text-ochre transition-colors">
                nomadsridgesafaris@gmail.com
              </a>
            </div>
            <div>
              <p className="text-ochre text-sm uppercase tracking-wider font-semibold mb-2">Location</p>
              <p className="text-dust/80">Westlands, Nairobi, Kenya</p>
            </div>
          </div>
          <Link href="#contact" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Plan Your Safari
          </Link>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsPremium />

      {/* FAQ SECTION */}
      <FAQSection />
      <Footer />
    </main>
  )
}
