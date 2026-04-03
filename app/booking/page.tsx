'use client'

import { useState, useEffect, useRef } from "react"
import Footer from "@/components/layout/footer"
import { Plane, Building, MessageCircle, MapPin, Star, Clock, Check, ChevronRight, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BookingData {
  destination: string
  date: string
  travelers: number
  name: string
  email: string
  phone: string
  specialRequests: string
}

const safariPackages = [
  {
    id: "1",
    name: "Maasai Mara Safari",
    description: "Experience the Great Migration and witness incredible wildlife in Kenya's most famous reserve.",
    price: 58500,
    duration: "3 Days",
    image: "/maasai-mara-safari.png",
    featured: true,
    highlights: ["Game drives", "Balloon safari", "Big Five", "Maasai cultural visit"]
  },
  {
    id: "2",
    name: "Amboseli Elephant Safari",
    description: "Get up close with elephants against the majestic backdrop of Mount Kilimanjaro.",
    price: 41600,
    duration: "2 Days",
    image: "/amboseli-elephants-kilimanjaro.png",
    featured: true,
    highlights: ["Elephant herds", "Kilimanjaro views", "Game drives", "Photography"]
  },
  {
    id: "3",
    name: "Mount Kenya Adventure",
    description: "Challenge yourself with hiking and climbing on Africa's second-highest mountain.",
    price: 49400,
    duration: "5 Days",
    image: "/mount-kenya-hikers.png",
    featured: false,
    highlights: ["Summit attempt", "Wildlife spotting", "Alpine camps", "Guided trek"]
  },
  {
    id: "4",
    name: "Diani Beach Getaway",
    description: "Relax on pristine white sand beaches with crystal clear waters and luxury accommodations.",
    price: 36400,
    duration: "4 Days",
    image: "/diani-beach-kenya.png",
    featured: true,
    highlights: ["Beach relaxation", "Water sports", "Snorkeling", "Spa treatments"]
  },
  {
    id: "5",
    name: "Samburu Safari",
    description: "Discover rare wildlife species unique to northern Kenya's rugged landscape.",
    price: 45800,
    duration: "3 Days",
    image: "/maasai-mara-safari.png",
    featured: false,
    highlights: ["Rare species", "Ewaso Ng'iro River", "Cultural encounters", "Game drives"]
  },
  {
    id: "6",
    name: "Tanzania Circuit",
    description: "Explore Serengeti and Ngorongoro Crater for the ultimate East African safari.",
    price: 89500,
    duration: "5 Days",
    image: "/kenya-big-five.png",
    featured: true,
    highlights: ["Serengeti", "Ngorongoro", "Great Migration", "All-inclusive"]
  }
]

const hotels = [
  {
    id: "hotel-1",
    name: "Sarova Stanley Hotel",
    description: "Historic luxury hotel in the heart of Nairobi with colonial charm and modern amenities.",
    price: 15600,
    location: "Nairobi CBD",
    image: "/luxury-hotel-nairobi.png",
    rating: 4.5,
    amenities: ["Free WiFi", "Pool", "Restaurant", "Gym"]
  },
  {
    id: "hotel-2",
    name: "Serena Beach Resort",
    description: "Beachfront resort on Diani Beach with Swahili architecture and world-class spa.",
    price: 22800,
    location: "Diani Beach",
    image: "/kenyan-beach-resort.png",
    rating: 4.8,
    amenities: ["Beach Access", "Spa", "Restaurants", "Pool"]
  },
  {
    id: "hotel-3",
    name: "Hemingways Nairobi",
    description: "Boutique hotel in Karen with stunning views of Ngong Hills.",
    price: 19500,
    location: "Karen, Nairobi",
    image: "/boutique-hotel-karen-nairobi.png",
    rating: 4.7,
    amenities: ["Hill Views", "Fine Dining", "Spa", "Airport Transfer"]
  }
]

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("safari")
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null)
  const [formData, setFormData] = useState<BookingData>({
    destination: "",
    date: "",
    travelers: 2,
    name: "",
    email: "",
    phone: "",
    specialRequests: ""
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handlePackageSelect = (pkg: typeof safariPackages[0]) => {
    setSelectedPackage(pkg.id)
    setFormData(prev => ({ ...prev, destination: pkg.name }))
  }

  const handleHotelSelect = (hotel: typeof hotels[0]) => {
    setSelectedHotel(hotel.id)
    setFormData(prev => ({ ...prev, destination: hotel.name }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-deep text-dust overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dusk via-dusk to-deep" />

        {/* Safari Scene SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-64 w-full"
          viewBox="0 0 1440 256"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bookingSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d0d10" stopOpacity="0" />
              <stop offset="100%" stopColor="#1a1a1f" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect fill="url(#bookingSkyGrad)" width="1440" height="256" />

          {/* Mountains */}
          <path d="M0 180 Q180 120 360 150 T720 130 T1080 145 T1440 140 L1440 256 L0 256 Z" fill="#15151a" />
          <path d="M0 200 Q240 170 480 185 T960 175 T1440 190 L1440 256 L0 256 Z" fill="#1a1a1f" />

          {/* Trees */}
          <g fill="#0f0f14">
            <path d="M80 210 Q80 185 85 170 Q90 185 90 210 Z" />
            <ellipse cx="85" cy="165" rx="30" ry="15" />
            <path d="M350 215 Q350 195 355 180 Q360 195 360 215 Z" />
            <ellipse cx="355" cy="175" rx="25" ry="12" />
            <path d="M600 212 Q600 192 605 178 Q610 192 610 212 Z" />
            <ellipse cx="605" cy="173" rx="28" ry="13" />
            <path d="M900 218 Q900 198 905 183 Q910 198 910 218 Z" />
            <ellipse cx="905" cy="178" rx="22" ry="11" />
            <path d="M1150 210 Q1150 190 1155 175 Q1160 190 1160 210 Z" />
            <ellipse cx="1155" cy="170" rx="27" ry="13" />
            <path d="M1350 215 Q1350 195 1355 182 Q1360 195 1360 215 Z" />
            <ellipse cx="1355" cy="177" rx="24" ry="12" />
          </g>

          {/* Acacia trees */}
          <g fill="#0a0a0f">
            <path d="M200 220 Q200 200 202 192 Q204 200 204 220 Z" />
            <ellipse cx="202" cy="188" rx="35" ry="14" />
            <path d="M750 222 Q750 205 752 198 Q754 205 754 222 Z" />
            <ellipse cx="752" cy="195" rx="30" ry="12" />
            <path d="M1250 218 Q1250 202 1252 195 Q1254 202 1254 218 Z" />
            <ellipse cx="1252" cy="192" rx="32" ry="13" />
          </g>
        </svg>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span
            className="inline-block text-ochre text-xs tracking-[0.35em] uppercase mb-6 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            Book Your Adventure
          </span>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-sand leading-tight mb-6 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            Start Your Safari Journey
          </h1>
          <p
            className="text-dust/80 text-lg max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.35s' }}
          >
            Choose from our curated safari packages or hotels, or create your custom African adventure with our expert team.
          </p>
        </div>
      </section>

      {/* Booking Content */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Tab Navigation */}
          <div
            ref={setRef(0)}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveTab("safari")}
                className={`flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "safari"
                    ? 'bg-ochre text-deep font-semibold'
                    : 'bg-clay/10 text-dust hover:bg-clay/20 border border-clay/30'
                }`}
              >
                <Plane className="w-4 h-4" />
                Safari Packages
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "hotels"
                    ? 'bg-ochre text-deep font-semibold'
                    : 'bg-clay/10 text-dust hover:bg-clay/20 border border-clay/30'
                }`}
              >
                <Building className="w-4 h-4" />
                Hotels
              </button>
              <button
                onClick={() => setActiveTab("custom")}
                className={`flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "custom"
                    ? 'bg-ochre text-deep font-semibold'
                    : 'bg-clay/10 text-dust hover:bg-clay/20 border border-clay/30'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Custom Request
              </button>
            </div>
          </div>

          {/* Safari Packages */}
          {activeTab === "safari" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safariPackages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  ref={setRef(index + 1)}
                  className={`opacity-0 translate-y-8 transition-all duration-700 ease-out cursor-pointer group ${
                    selectedPackage === pkg.id ? 'ring-2 ring-ochre' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handlePackageSelect(pkg)}
                >
                  <div className="bg-clay/5 border border-clay/20 hover:border-ochre/40 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dusk/60 to-transparent" />
                      {pkg.featured && (
                        <span className="absolute top-4 left-4 bg-ochre text-deep text-xs uppercase tracking-wider px-3 py-1 font-semibold">
                          Featured
                        </span>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <span className="text-clay text-xs uppercase tracking-wider">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-sand mb-2">{pkg.name}</h3>
                      <p className="text-dust/70 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.highlights.slice(0, 3).map((highlight) => (
                          <span key={highlight} className="text-xs text-ochre/80 bg-ochre/10 px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-2xl text-ochre">KSh {pkg.price.toLocaleString()}</span>
                        <span className="text-xs text-dust/50">per person</span>
                      </div>
                      {selectedPackage === pkg.id && (
                        <div className="mt-4 flex items-center gap-2 text-ochre">
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Selected</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Hotels */}
          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel, index) => (
                <div
                  key={hotel.id}
                  ref={setRef(index + 1)}
                  className={`opacity-0 translate-y-8 transition-all duration-700 ease-out cursor-pointer group ${
                    selectedHotel === hotel.id ? 'ring-2 ring-ochre' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handleHotelSelect(hotel)}
                >
                  <div className="bg-clay/5 border border-clay/20 hover:border-ochre/40 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dusk/60 to-transparent" />
                      <div className="absolute top-4 right-4 bg-dusk/80 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-ochre text-ochre" />
                        <span className="text-xs text-sand font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-dust/60 text-xs mb-2">
                        <MapPin className="w-3 h-3" />
                        {hotel.location}
                      </div>
                      <h3 className="font-serif text-xl text-sand mb-2">{hotel.name}</h3>
                      <p className="text-dust/70 text-sm mb-4 line-clamp-2">{hotel.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="text-xs text-dust/60 bg-dust/10 px-2 py-1 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-2xl text-ochre">KSh {hotel.price.toLocaleString()}</span>
                        <span className="text-xs text-dust/50">per night</span>
                      </div>
                      {selectedHotel === hotel.id && (
                        <div className="mt-4 flex items-center gap-2 text-ochre">
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Selected</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Request */}
          {activeTab === "custom" && (
            <div
              ref={setRef(1)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-clay/10 via-clay/5 to-clay/10 border border-clay/20 p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-ochre/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-ochre" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-sand mb-4">Create Your Custom Safari</h3>
                <p className="text-dust/70 mb-6 max-w-lg mx-auto">
                  Can't find what you're looking for? We specialize in creating bespoke African adventures. Tell us your dream safari and we'll make it happen.
                </p>
                <div className="bg-dusk/40 border border-dust/10 rounded-lg p-4 text-left mb-6">
                  <h4 className="text-sand font-medium mb-2">We can help with:</h4>
                  <ul className="text-sm text-dust/70 space-y-1">
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-ochre" /> Multi-country East Africa tours</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-ochre" /> Gorilla trekking in Uganda/Rwanda</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-ochre" /> Luxury honeymoons and celebrations</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-ochre" /> Family and group adventures</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-ochre" /> Extended 7+ day expeditions</li>
                  </ul>
                </div>
                <Button
                  onClick={() => setFormData(prev => ({ ...prev, destination: "Custom Inquiry" }))}
                  className="bg-ochre hover:bg-ochre/90 text-deep font-semibold px-8 py-3"
                >
                  Start Custom Inquiry
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Booking Form */}
          {(selectedPackage || selectedHotel || formData.destination === "Custom Inquiry") && (
            <div
              ref={setRef(7)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out mt-16"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl md:text-4xl text-sand mb-2">Complete Your Booking</h2>
                  <p className="text-dust/60">Fill in your details and we'll get back to you within 24 hours</p>
                </div>

                {submitted ? (
                  <div className="bg-gradient-to-br from-ochre/20 via-ochre/10 to-ochre/5 border border-ochre/30 p-8 md:p-12 text-center">
                    <div className="w-16 h-16 bg-ochre rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-deep" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-sand mb-4">Inquiry Submitted!</h3>
                    <p className="text-dust/70 mb-6 max-w-lg mx-auto">
                      Thank you for your interest in Nomads Ridge Safaris. Our travel experts will contact you within 24 hours to discuss your {formData.destination} adventure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:+254714703892"
                        className="flex items-center justify-center gap-2 bg-clay/20 hover:bg-clay/30 text-sand px-6 py-3 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Us Now
                      </a>
                      <a
                        href="https://wa.me/254714703892"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 px-6 py-3 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-clay/5 border border-clay/20 p-6 md:p-8 space-y-6">
                    {/* Selected Package/Hotel */}
                    <div className="bg-dusk/40 border border-dust/10 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-dust/50 text-xs uppercase tracking-wider">Selected</span>
                          <h4 className="text-sand font-medium">{formData.destination}</h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPackage(null)
                            setSelectedHotel(null)
                            setFormData(prev => ({ ...prev, destination: "" }))
                          }}
                          className="text-dust/50 hover:text-dust text-sm"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-dust/70 text-sm mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-dusk/40 border border-dust/20 px-4 py-3 text-sand placeholder-dust/40 focus:border-ochre outline-none transition-colors"
                          placeholder="John Kamau"
                        />
                      </div>
                      <div>
                        <label className="block text-dust/70 text-sm mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-dusk/40 border border-dust/20 px-4 py-3 text-sand placeholder-dust/40 focus:border-ochre outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-dust/70 text-sm mb-2">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-dusk/40 border border-dust/20 px-4 py-3 text-sand placeholder-dust/40 focus:border-ochre outline-none transition-colors"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-dust/70 text-sm mb-2">Preferred Travel Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full bg-dusk/40 border border-dust/20 px-4 py-3 text-sand focus:border-ochre outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-dust/70 text-sm mb-2">Number of Travelers</label>
                        <input
                          type="number"
                          min="1"
                          value={formData.travelers}
                          onChange={(e) => setFormData(prev => ({ ...prev, travelers: parseInt(e.target.value) }))}
                          className="w-full bg-dusk/40 border border-dust/20 px-4 py-3 text-sand focus:border-ochre outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-dust/70 text-sm mb-2">Special Requests or Questions</label>
                      <textarea
                        rows={4}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                        className="w-full bg-dusk/40 border border-dust/20 px-4 py-3 text-sand placeholder-dust/40 focus:border-ochre outline-none transition-colors resize-none"
                        placeholder="Dietary requirements, accessibility needs, special celebrations..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-ochre hover:bg-ochre/90 text-deep font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Submit Inquiry
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <p className="text-center text-dust/50 text-xs">
                      By submitting, you agree to our terms. We'll respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div
            ref={setRef(8)}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out mt-16"
          >
            <div className="bg-gradient-to-br from-clay/10 via-clay/5 to-clay/10 border border-clay/20 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-ochre/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-5 h-5 text-ochre" />
                </div>
                <h4 className="text-sand font-medium mb-2">Call or WhatsApp</h4>
                <a href="tel:+254714703892" className="text-dust/70 hover:text-ochre transition-colors">
                  +254 714 703 892
                </a>
                <p className="text-dust/50 text-xs mt-1">24/7 Available</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-ochre/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-5 h-5 text-ochre" />
                </div>
                <h4 className="text-sand font-medium mb-2">Email Us</h4>
                <a href="mailto:nomadsridgesafaris@gmail.com" className="text-dust/70 hover:text-ochre transition-colors">
                  nomadsridgesafaris@gmail.com
                </a>
                <p className="text-dust/50 text-xs mt-1">Response within 24h</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-ochre/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-ochre" />
                </div>
                <h4 className="text-sand font-medium mb-2">Visit Us</h4>
                <p className="text-dust/70">Nomads Ridge Safaris</p>
                <p className="text-dust/50 text-xs">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Scene */}
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
          </g>
        </svg>
      </div>

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
