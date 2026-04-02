'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, MapPin, Clock, Users } from 'lucide-react'
import Footer from '@/components/layout/footer'
import TestimonialsPremium from '@/components/sections/testimonials-premium'
import { formatPrice, convertToKES } from '@/lib/currency'

// Numeric ID to string key mapping
const idMap: { [key: string]: string } = {
  '1': 'maasai-mara-safari',
  '2': 'amboseli-kenya',
  '3': 'serengeti-tanzania',
  '4': 'ngorongoro-crater',
  '5': 'bwindi-uganda',
  '6': 'volcanoes-rwanda',
}

const destinations = {
  'maasai-mara-safari': {
    id: 'maasai-mara-safari',
    name: 'Maasai Mara Safari Adventure',
    location: 'Maasai Mara National Reserve, Kenya',
    rating: 4.9,
    reviews: 127,
    basePrice: 1000,
    duration: '4 Days / 3 Nights',
    bestTime: 'July - October (Great Migration)',
    groupSize: '2-12 people',
    difficulty: 'Moderate',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lion%20country-MhAKVw2p8iOKDXDRZbQj97qQaR0QZH.jpg',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kenya%20big%205-zJcVlnQoIix0ZUKkwD21gtmte5VswL.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti%20migration-vdcYvDXQY1fxOtzzCd2J1JvMWIjQkw.jpg',
    ],
    description: 'Experience the world-famous Great Migration and witness millions of wildebeest, zebras, and gazelles crossing the Mara River. This iconic safari destination offers unparalleled wildlife viewing opportunities in Kenya\'s most celebrated game reserve with luxury accommodations and expert Maasai guides.',
    highlights: [
      'Great Migration viewing (July-October)',
      'Big Five encounters guaranteed',
      'Maasai cultural village visits',
      'Hot air balloon safari option',
      'Professional guide services',
      'Luxury tented accommodation',
      'All meals included',
      'Airport transfers included',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & First Game Drive',
        description: 'Arrive at Maasai Mara airstrip, meet your professional guide, and transfer to your luxury tented camp. After lunch and settling in, embark on your first game drive to spot the Big Five. Evening sundowner drinks overlooking the savannah.',
      },
      {
        day: 2,
        title: 'Full Day Safari Adventure',
        description: 'Early morning game drive to catch predators in action, followed by breakfast in the bush. Visit a traditional Maasai village to learn about local culture and traditions. Afternoon game drive focusing on the Great Migration crossing points.',
      },
      {
        day: 3,
        title: 'Migration & Wildlife Photography',
        description: 'Dedicated day for witnessing the Great Migration river crossings and wildlife photography. Optional hot air balloon safari at dawn for aerial views of the migration. Professional photography guidance included.',
      },
      {
        day: 4,
        title: 'Final Game Drive & Departure',
        description: 'Final morning game drive with focus on any missed wildlife sightings. Return to camp for brunch before departure to airstrip. Certificate presentation and souvenir shopping opportunity.',
      },
    ],
    inclusions: [
      'Luxury tented camp accommodation (3 nights)',
      'All meals during safari (breakfast, lunch, dinner)',
      'Professional safari guide & driver',
      'Game drives in 4WD safari vehicle',
      'Park entrance fees & conservancy fees',
      'Airport/airstrip transfers',
      'Bottled water during all game drives',
      'Maasai village visit with cultural performance',
      'Emergency evacuation insurance',
    ],
  },
  'serengeti-tanzania': {
    id: 'serengeti-tanzania',
    name: 'Serengeti Wildlife Exploration',
    location: 'Serengeti National Park, Tanzania',
    rating: 4.8,
    reviews: 98,
    basePrice: 950,
    duration: '5 Days / 4 Nights',
    bestTime: 'June - September (Migration)',
    groupSize: '2-10 people',
    difficulty: 'Moderate',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg',
    ],
    description: 'Explore the endless plains of Serengeti, home to the world\'s largest land animal migration. Witness incredible wildlife concentrations and pristine ecosystems in Tanzania\'s most iconic national park.',
    highlights: [
      'Great Migration viewing',
      'Endless plains landscape',
      'Big Five encounters',
      'Professional guides',
      'Luxury camps',
      'All-inclusive packages',
      'Photography opportunities',
      'Conservation focus',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Orientation', description: 'Arrive and settle into your luxury camp.' },
      { day: 2, title: 'Full Day Safari', description: 'Explore the western plains of Serengeti.' },
      { day: 3, title: 'Migration Route', description: 'Follow the Great Migration movement.' },
      { day: 4, title: 'Photography Day', description: 'Dedicated time for wildlife photography.' },
      { day: 5, title: 'Departure', description: 'Final game drive and return journey.' },
    ],
    inclusions: [
      'Luxury camp accommodation',
      'All meals',
      'Professional guides',
      'Game drives',
      'Park fees',
    ],
  },
  'ngorongoro-crater': {
    id: 'ngorongoro-crater',
    name: 'Ngorongoro Crater Experience',
    location: 'Ngorongoro Conservation Area, Tanzania',
    rating: 4.7,
    reviews: 112,
    basePrice: 900,
    duration: '3 Days / 2 Nights',
    bestTime: 'Year-round',
    groupSize: '2-12 people',
    difficulty: 'Easy',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ngorongoro%20stars-0dp4SzAsFG1V4tukuLrrm3m2xxwuml.jpg',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ngorongoro%20stars-0dp4SzAsFG1V4tukuLrrm3m2xxwuml.jpg',
    ],
    description: 'Discover the world\'s largest volcanic crater filled with incredible wildlife and natural beauty. Ngorongoro offers exceptional game viewing in a unique ecosystem.',
    highlights: [
      'Largest volcanic crater',
      'High wildlife concentration',
      'Unique ecosystems',
      'Scenic drives',
      'Cultural villages',
      'Bird watching',
      'Photography spots',
      'Accessible terrain',
    ],
    itinerary: [
      { day: 1, title: 'Crater Rim Drive', description: 'Spectacular views from the crater rim.' },
      { day: 2, title: 'Crater Floor Safari', description: 'Descend into the crater for game viewing.' },
      { day: 3, title: 'Return Journey', description: 'Final wildlife viewing and departure.' },
    ],
    inclusions: [
      'Camp accommodation',
      'All meals',
      'Experienced guides',
      'Game drives',
      'Crater entrance fees',
    ],
  },
  'bwindi-uganda': {
    id: 'bwindi-uganda',
    name: 'Bwindi Gorilla Trekking',
    location: 'Bwindi Impenetrable National Park, Uganda',
    rating: 4.9,
    reviews: 134,
    basePrice: 1200,
    duration: '3 Days / 2 Nights',
    bestTime: 'Year-round',
    groupSize: '1-8 people',
    difficulty: 'Challenging',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwanda%20canopy-xyGm95PrO7weFzo4UQ90Wl9Ifpkh1j.jpg',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwanda%20canopy-xyGm95PrO7weFzo4UQ90Wl9Ifpkh1j.jpg',
    ],
    description: 'Trek through misty forests to encounter endangered mountain gorillas in their natural habitat. An unforgettable wildlife experience.',
    highlights: [
      'Mountain gorilla trekking',
      'Misty forest walks',
      'Rare wildlife sightings',
      'Expert trackers',
      'Conservation education',
      'Immersive nature experience',
      'Photography opportunities',
      'Cultural interactions',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Briefing', description: 'Arrive and prepare for trekking adventure.' },
      { day: 2, title: 'Gorilla Trek', description: 'Full day trekking to find mountain gorillas.' },
      { day: 3, title: 'Return Journey', description: 'Optional forest walk and return.' },
    ],
    inclusions: [
      'Eco-lodge accommodation',
      'All meals',
      'Expert guides & trackers',
      'Gorilla permit',
      'Trek preparation',
    ],
  },
}

export default function DestinationDetail({ params }: { params: { id: string } }) {
  const destinationKey = idMap[params.id] || params.id
  const destination = destinations[destinationKey as keyof typeof destinations]
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!destination) {
    return (
      <div className="min-h-screen bg-dusk text-dust flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-light mb-4">Destination Not Found</h1>
          <p className="text-sand mb-8">The destination you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/destinations"
            className="inline-block bg-clay hover:bg-ochre text-dusk px-8 py-3 uppercase text-sm font-semibold tracking-wider transition-colors"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  const kesPrice = convertToKES(destination.basePrice)

  return (
    <div className="min-h-screen bg-dusk text-dust">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-dusk/90 backdrop-blur border-b border-clay/20 px-6 md:px-12 lg:px-20 py-4">
        <Link href="/destinations" className="inline-flex items-center gap-2 text-clay hover:text-ochre transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Destinations
        </Link>
      </div>

      {/* Hero Section with Image Gallery */}
      <section className={`relative h-96 md:h-screen max-h-[600px] md:max-h-[700px] overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={destination.images[selectedImageIndex] || destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Navigation Controls */}
        {destination.images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length)}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-clay/80 hover:bg-clay p-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-dusk" />
            </button>
            <button
              onClick={() => setSelectedImageIndex((prev) => (prev + 1) % destination.images.length)}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-clay/80 hover:bg-clay p-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-dusk" />
            </button>
          </>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12 lg:p-20">
          <p className="text-ochre text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {destination.location}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-4 text-dust">{destination.name}</h1>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-clay" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-clay" />
              <span>{destination.groupSize}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          {/* Pricing and Quick Info */}
          <div className={`bg-clay/10 border border-clay/20 p-6 md:p-8 rounded-sm mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sand text-sm uppercase tracking-wider mb-2">From</p>
                <div className="flex flex-col gap-2">
                  <p className="font-serif text-3xl md:text-4xl font-light text-clay">{formatPrice(destination.basePrice, 'KES')}</p>
                  <p className="text-sm text-sand opacity-75">per person (KES)</p>
                  <p className="text-xs text-sand opacity-60">${destination.basePrice} USD equivalent</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <button className="bg-clay hover:bg-ochre text-dusk px-6 py-3 uppercase text-sm font-semibold tracking-wider transition-colors">
                  Book Now
                </button>
                <button className="border border-clay text-clay hover:bg-clay/10 px-6 py-3 uppercase text-sm font-semibold tracking-wider transition-colors">
                  Enquire
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
            <h2 className="font-serif text-3xl font-light mb-4 text-dust">About This Safari</h2>
            <p className="text-sand leading-relaxed mb-6">{destination.description}</p>
          </div>

          {/* Highlights */}
          <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            <h2 className="font-serif text-3xl font-light mb-6 text-dust">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-clay/5 border-l-2 border-clay hover:border-ochre transition-colors">
                  <span className="text-clay mt-1">✓</span>
                  <span className="text-sand">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <h2 className="font-serif text-3xl font-light mb-6 text-dust">Itinerary</h2>
            <div className="space-y-4">
              {destination.itinerary.map((day, idx) => (
                <div key={idx} className="bg-clay/5 border border-clay/20 p-6 hover:border-clay transition-colors">
                  <h3 className="font-serif text-xl font-light text-clay mb-2">Day {day.day}: {day.title}</h3>
                  <p className="text-sand text-sm">{day.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
            <h2 className="font-serif text-3xl font-light mb-6 text-dust">What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {destination.inclusions.map((inclusion, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sand">
                  <span className="text-ochre mt-1">•</span>
                  <span className="text-sm">{inclusion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsPremium />

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#0d0804] to-[#1a0e06] text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-dust">Ready to Book?</h2>
        <p className="text-sand opacity-75 max-w-2xl mx-auto mb-8 text-lg">
          Start your unforgettable safari adventure today. Our team is ready to help customize the perfect experience for you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-clay hover:bg-ochre text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-colors"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  )
}
