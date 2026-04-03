'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    id: '1',
    name: 'Maasai Mara',
    country: 'Kenya',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lion%20country-MhAKVw2p8iOKDXDRZbQj97qQaR0QZH.jpg',
    description: 'Experience the raw power of Africa\'s iconic wildlife in their natural habitat. The Great Migration is a sight to behold.',
    featured: true,
  },
  {
    id: '3',
    name: 'Serengeti',
    country: 'Tanzania',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg',
    description: 'Witness endless plains and pristine wildlife in Africa\'s most iconic national park.',
    featured: false,
  },
  {
    id: '4',
    name: 'Ngorongoro',
    country: 'Tanzania',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ngorongoro%20stars-0dp4SzAsFG1V4tukuLrrm3m2xxwuml.jpg',
    description: 'Explore the world\'s largest volcanic crater with unparalleled wildlife concentrations.',
    featured: false,
  },
  {
    id: '5',
    name: 'Bwindi',
    country: 'Uganda',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bwindi%20Forest-gIiVyTLcwtTU2YKTblAL44MGQOxM3y.jpg',
    description: 'Trek through misty forests and encounter endangered mountain gorillas in their habitat.',
    featured: false,
  },
]

export default function DestinationsDynamic() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatingCards, setAnimatingCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Trigger initial animation on mount
    setIsVisible(true)
    
    // Stagger card animations
    destinations.forEach((dest, index) => {
      setTimeout(() => {
        setAnimatingCards((prev) => new Set(prev).add(dest.id))
      }, index * 150)
    })
  }, [])

  return (
    <section
      id="destinations"
      className="py-12 md:py-24 px-6 md:px-12 lg:px-20 bg-[#110c06] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className={`absolute -top-40 -right-40 w-80 h-80 bg-clay/5 rounded-full blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-ochre/5 rounded-full blur-3xl transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Header with animation */}
      <div className={`relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="text-clay text-xs uppercase tracking-[0.35em] mb-4 flex items-center gap-4">
          <span className="block w-8 h-px bg-clay"></span>
          Where to Go
        </p>
        <h2 className="font-serif text-5xl font-light mb-4 text-dust">
          Explore Kenya&apos;s Finest <em className="italic text-ochre">Destinations</em>
        </h2>
      </div>

      {/* Grid with dynamic animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 relative z-10">
        {/* Featured Large Card - First Item */}
        <Link
          href={`/destinations/${destinations[0].id}`}
          className={`sm:row-span-2 relative overflow-hidden cursor-pointer group aspect-square sm:aspect-[3/4] rounded-sm transition-all duration-700 ${
            animatingCards.has(destinations[0].id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Image
            src={destinations[0].image}
            alt={destinations[0].name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0602] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-ochre text-xs uppercase tracking-wider mb-2">{destinations[0].country}</p>
            <h3 className="font-serif text-2xl font-light text-dust mb-3">{destinations[0].name}</h3>
            <p className="text-sand text-sm opacity-70 line-clamp-3">{destinations[0].description}</p>
          </div>
        </Link>

        {/* Small Cards - 2x2 grid */}
        {destinations.slice(1).map((dest, index) => (
          <Link
            key={dest.id}
            href={`/destinations/${dest.id}`}
            className={`relative overflow-hidden cursor-pointer group aspect-square rounded-sm transition-all duration-700 ${
              animatingCards.has(dest.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0602] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-ochre text-xs uppercase tracking-wider mb-1">{dest.country}</p>
              <h3 className="font-serif text-lg font-light text-dust">{dest.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
