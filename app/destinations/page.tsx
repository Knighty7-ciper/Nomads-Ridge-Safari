'use client'

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"
import TestimonialsPremium from "@/components/sections/testimonials-premium"
import { useEffect, useRef } from 'react'

const countries = [
  {
    name: "Kenya",
    flag: "🇰🇪",
    description: "The birthplace of safari. Home to iconic parks, the Great Migration, and incredible Big Five sightings."
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    description: "Endless plains, ancient calderas, and the largest wildlife concentration on Earth."
  },
  {
    name: "Uganda & Rwanda",
    flag: "🌍",
    description: "Mountain gorilla sanctuaries and chimpanzee habitats in misty volcanic highlands."
  }
]

const destinations = [
  // Kenya
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    country: "Kenya",
    tagline: "Where the Great Migration unfolds",
    image: "/images/mara-golden-sunset.jpg",
    highlight: "Great Migration",
    badge: "Featured",
    price: "From $2,100",
    tags: ["Big Five", "Maasai Culture"],
    description: "Witness the world's greatest wildlife spectacle as over two million wildebeest cross the Mara River.",
    featured: true,
    comingSoon: false
  },
  {
    id: "amboseli",
    name: "Amboseli National Park",
    country: "Kenya",
    tagline: "Kilimanjaro's royal throne",
    image: "/images/amboseli-kilimanjaro.jpg",
    highlight: "1,000+ Elephants",
    badge: "UNESCO",
    price: "From $1,650",
    tags: ["Kilimanjaro Views"],
    description: "Famous for its massive elephant herds and stunning views of Africa's highest mountain.",
    featured: false,
    comingSoon: false
  },
  {
    id: "tsavo",
    name: "Tsavo National Parks",
    country: "Kenya",
    tagline: "Land of the red elephants",
    image: "/images/tsavo-red-earth.jpg",
    highlight: "22,812 km²",
    badge: "Largest",
    price: "From $1,850",
    tags: ["Mzima Springs"],
    description: "Kenya's largest park hides the famous red elephants, Mzima Springs, and the elusive maneless lions.",
    featured: false,
    comingSoon: false
  },
  {
    id: "lake-naivasha",
    name: "Lake Naivasha",
    country: "Kenya",
    tagline: "Crescent Island's wild shores",
    image: "/images/naivasha-lake-birds.jpg",
    highlight: "1,500+ Hippos",
    badge: "Ramsar Site",
    price: "From $890",
    tags: ["450+ Bird Species"],
    description: "A freshwater alkaline lake with extraordinary hippo colonies and over 450 bird species.",
    featured: false,
    comingSoon: false
  },
  {
    id: "samburu",
    name: "Samburu National Reserve",
    country: "Kenya",
    tagline: "Northern Kenya's rare species",
    image: "/images/samburu-reserve.jpg",
    highlight: "Grevy's Zebra",
    badge: "Specialty",
    price: "From $1,400",
    tags: ["Reticulated Giraffe"],
    description: "Discover the 'Special Five' - Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, and Somali ostrich.",
    featured: false,
    comingSoon: false
  },
  // Tanzania
  {
    id: "serengeti",
    name: "Serengeti National Park",
    country: "Tanzania",
    tagline: "The endless plains",
    image: "/images/serengeti-plains.jpg",
    highlight: "Great Migration",
    badge: "UNESCO",
    price: "From $2,800",
    tags: ["Big Cat Capital", "Hot Air Balloon"],
    description: "Tanzania's crown jewel stretches endlessly with golden grasses. Witness the Great Migration's river crossings.",
    featured: true,
    comingSoon: false
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tagline: "Nature's amphitheater",
    image: "/images/ngorongoro-crater.jpg",
    highlight: "World's Largest Caldera",
    badge: "UNESCO",
    price: "From $2,200",
    tags: ["30,000+ Animals"],
    description: "A self-contained ecosystem where 30,000+ animals live in the world's largest inactive volcanic caldera.",
    featured: false,
    comingSoon: false
  },
  {
    id: "kilimanjaro",
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    tagline: "The roof of Africa",
    image: "/images/kilimanjaro-summit.jpg",
    highlight: "5,895m Summit",
    badge: "Adventure",
    price: "From $3,200",
    tags: ["7 Climatic Zones"],
    description: "Trek Africa's highest peak through five distinct climate zones from rainforest to glacial summit.",
    featured: false,
    comingSoon: false
  },
  {
    id: "tarangire",
    name: "Tarangire National Park",
    country: "Tanzania",
    tagline: "Land of the giants",
    image: "/images/tarangire-elephants.jpg",
    highlight: "Elephant Concentrations",
    badge: "Elephant Paradise",
    price: "From $1,600",
    tags: ["Baobab Groves"],
    description: "During dry season, Tarangire hosts Tanzania's largest elephant herds gathering around the river.",
    featured: false,
    comingSoon: false
  },
  // Uganda & Rwanda
  {
    id: "bwindi",
    name: "Bwindi Impenetrable Forest",
    country: "Uganda",
    tagline: "Where giants roam",
    image: "/images/bwindi-forest.jpg",
    highlight: "Mountain Gorillas",
    badge: "UNESCO",
    price: "From $3,500",
    tags: ["Half of World's Gorillas"],
    description: "Trek through misty rainforest to encounter one of the world's most endangered species - mountain gorillas.",
    featured: true,
    comingSoon: false
  },
  {
    id: "volcanoes",
    name: "Volcanoes National Park",
    country: "Rwanda",
    tagline: "Dian Fossey's legacy",
    image: "/images/volcanoes-park.jpg",
    highlight: "Golden Monkeys",
    badge: "Rwanda",
    price: "From $3,600",
    tags: ["Gorilla Treks"],
    description: "Rwanda's iconic volcanic park where Dian Fossey conducted her groundbreaking research.",
    featured: false,
    comingSoon: false
  },
  {
    id: "kibale",
    name: "Kibale National Park",
    country: "Uganda",
    tagline: "Kingdom of primates",
    image: "/images/kibale-forest.jpg",
    highlight: "1,500 Chimpanzees",
    badge: "Chimp Capital",
    price: "From $1,800",
    tags: ["13 Primate Species"],
    description: "Home to the highest concentration of primates in Africa. Track chimpanzee communities.",
    featured: false,
    comingSoon: false
  }
]

export default function DestinationsPage() {
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

  const kenyaDests = destinations.filter(d => d.country === "Kenya")
  const tanzaniaDests = destinations.filter(d => d.country === "Tanzania")
  const ugandaRwandaDests = destinations.filter(d => d.country === "Uganda" || d.country === "Rwanda")

  return (
    <main className="min-h-screen bg-deep text-dust overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/serengeti-plains.jpg')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Safari Scene SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-64 w-full"
          viewBox="0 0 1440 256"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="destSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d0d10" stopOpacity="0" />
              <stop offset="100%" stopColor="#1a1a1f" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect fill="url(#destSkyGrad)" width="1440" height="256" />
          {/* Distant mountains */}
          <path d="M0 180 Q200 140 400 155 T800 145 T1200 160 T1440 150 L1440 256 L0 256 Z" fill="#12121a" opacity="0.6" />
          {/* Mid hills */}
          <path d="M0 195 Q240 180 480 188 T960 182 T1440 192 L1440 256 L0 256 Z" fill="#15151a" />
          {/* Ground */}
          <path d="M0 220 Q360 210 720 215 T1440 213 L1440 256 L0 256 Z" fill="#1a1a1f" />
          {/* Acacia trees */}
          <g fill="#0f0f14">
            <path d="M120 218 Q120 185 125 170 Q130 185 130 218 Z" />
            <ellipse cx="125" cy="165" rx="50" ry="22" />
            <path d="M380 222 Q380 195 383 183 Q386 195 386 222 Z" />
            <ellipse cx="383" cy="178" rx="38" ry="16" />
            <path d="M650 220 Q650 190 653 178 Q656 190 656 220 Z" />
            <ellipse cx="653" cy="173" rx="45" ry="19" />
            <path d="M1050 221 Q1050 193 1053 181 Q1056 193 1056 221 Z" />
            <ellipse cx="1053" cy="176" rx="40" ry="17" />
          </g>
          {/* Elephant family */}
          <g fill="#0a0a0f" transform="translate(850, 205)">
            <ellipse cx="25" cy="14" rx="28" ry="15" />
            <ellipse cx="48" cy="7" rx="12" ry="12" />
            <path d="M8 20 Q-5 30 -10 42" stroke="#0a0a0f" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M15 20 Q12 32 8 45" stroke="#0a0a0f" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M40 20 Q45 32 50 45" stroke="#0a0a0f" strokeWidth="5" fill="none" strokeLinecap="round" />
            <ellipse cx="-20" cy="18" rx="15" ry="10" />
            <ellipse cx="-8" cy="12" rx="8" ry="8" />
          </g>
          {/* Birds */}
          <g fill="#1a1a1f" opacity="0.7">
            <path d="M200 90 Q207 82 214 90 Q207 87 200 90" />
            <path d="M218 98 Q225 90 232 98 Q225 95 218 98" />
            <path d="M1200 70 Q1207 62 1214 70 Q1207 67 1200 70" />
          </g>
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span
            className="inline-block text-ochre text-xs tracking-[0.35em] uppercase mb-8 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            Explore East Africa
          </span>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-sand leading-tight mb-8 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            Our Destinations
          </h1>
          <p
            className="text-dust/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.35s' }}
          >
            From the endless plains of the Maasai Mara to the misty mountains of Rwanda, discover extraordinary safari experiences across Kenya, Tanzania, Uganda, and Rwanda.
          </p>
          {/* Stats */}
          <div
            className="flex justify-center gap-12 md:gap-20 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-ochre">12+</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-1">Destinations</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-ochre">4</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-1">Countries</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-ochre">5</p>
              <p className="text-dust/60 uppercase text-xs tracking-wider mt-1">UNESCO Sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section
        ref={setRef(0)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-clay/10 via-clay/5 to-clay/10 border border-clay/20 p-10 md:p-14 mb-16">
            <div className="text-center mb-12">
              <span className="text-ochre/80 text-xs tracking-[0.3em] uppercase mb-4 block">Why Choose Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-sand">The Nomads Ridge Difference</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-sand mb-2">Local Expertise</h3>
                <p className="text-dust/60 text-xs">15+ years of safari operations with on-ground teams</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-sand mb-2">Safe & Licensed</h3>
                <p className="text-dust/60 text-xs">Fully licensed with comprehensive travel insurance</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-sand mb-2">Conservation</h3>
                <p className="text-dust/60 text-xs">10% of profits donated to wildlife conservation</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-ochre/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-sand mb-2">Flexible Booking</h3>
                <p className="text-dust/60 text-xs">20% deposit, free cancellation up to 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenya Section */}
      <section
        ref={setRef(1)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <span className="text-4xl">{countries[0].flag}</span>
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-4xl text-sand">{countries[0].name}</h2>
              <p className="text-dust/60 text-sm mt-1">{countries[0].description}</p>
            </div>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-clay/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kenyaDests.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Tanzania Section */}
      <section
        ref={setRef(2)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <span className="text-4xl">{countries[1].flag}</span>
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-4xl text-sand">{countries[1].name}</h2>
              <p className="text-dust/60 text-sm mt-1">{countries[1].description}</p>
            </div>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-clay/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tanzaniaDests.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Uganda & Rwanda Section */}
      <section
        ref={setRef(3)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <span className="text-4xl">{countries[2].flag}</span>
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-4xl text-sand">{countries[2].name}</h2>
              <p className="text-dust/60 text-sm mt-1">{countries[2].description}</p>
            </div>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-clay/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugandaRwandaDests.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={setRef(4)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-sand mb-6">Ready to Plan Your Safari?</h2>
          <p className="text-dust/70 text-lg mb-10 max-w-2xl mx-auto">
            Our safari specialists can help you choose the perfect destinations, create custom itineraries, and handle all the details for an unforgettable East African adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-block bg-ochre text-deep px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ochre/20"
            >
              Start Planning
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-clay/50 text-dust px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:border-ochre hover:text-ochre"
            >
              Contact Us
            </Link>
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

function DestinationCard({ dest }: { dest: typeof destinations[0] }) {
  const href = dest.comingSoon ? "#" : `/destinations/${dest.id}`

  return (
    <Link href={href} className={`group ${dest.comingSoon ? 'cursor-default' : ''}`}>
      <div className={`relative h-full flex flex-col bg-clay/5 border border-clay/15 hover:border-clay/40 transition-all duration-400 overflow-hidden ${dest.featured ? 'md:col-span-2' : ''}`}>
        {/* Image Container */}
        <div className={`relative ${dest.featured ? 'h-72' : 'h-48'} overflow-hidden`}>
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/20 to-transparent" />

          {/* Badge */}
          <span className="absolute top-4 left-4 bg-dusk/80 backdrop-blur-sm text-ochre text-xs uppercase tracking-widest px-3 py-1 border border-clay/30">
            {dest.badge}
          </span>

          {/* Coming Soon overlay */}
          {dest.comingSoon && (
            <div className="absolute inset-0 bg-dusk/60 flex items-center justify-center">
              <span className="bg-ochre/20 text-ochre px-4 py-2 text-xs uppercase tracking-widest border border-ochre/40">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-xs uppercase tracking-wider text-clay/80 mb-2">{dest.country}</p>
          <h3 className="font-serif text-xl md:text-2xl text-sand group-hover:text-ochre transition-colors mb-1">
            {dest.name}
          </h3>
          <p className="text-dust/50 text-sm italic mb-3">{dest.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {dest.tags.map((tag) => (
              <span key={tag} className="bg-sage/10 text-sage text-xs px-2 py-1">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-dust/70 text-sm leading-relaxed flex-grow mb-4">
            {dest.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-clay/10">
            <p className="font-serif text-ochre">{dest.price} <span className="text-dust/50 text-xs font-sans">/ person</span></p>
            {!dest.comingSoon && (
              <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-ochre group-hover:gap-3 transition-all">
                Explore
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
