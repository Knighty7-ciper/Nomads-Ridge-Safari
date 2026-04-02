'use client'

import Link from 'next/link'
import Image from 'next/image'

const destinations = [
  {
    slug: 'maasai-mara',
    name: 'Masai Mara',
    country: 'Kenya',
    description: 'Home to the Great Migration and the most abundant wildlife in Africa',
    image: '/images/mara-golden-sunset.jpg',
    highlight: 'Great Migration',
  },
  {
    slug: 'lake-naivasha',
    name: 'Lake Naivasha',
    country: 'Kenya',
    description: 'A serene freshwater lake surrounded by lush vegetation and rich birdlife',
    image: '/images/naivasha-lake-birds.jpg',
    highlight: 'Birdwatching Paradise',
  },
  {
    slug: 'amboseli',
    name: 'Amboseli National Park',
    country: 'Kenya',
    description: 'Stunning Mount Kilimanjaro backdrop with vast elephant herds',
    image: '/images/amboseli-kilimanjaro.jpg',
    highlight: 'Kilimanjaro Views',
  },
  {
    slug: 'tsavo',
    name: 'Tsavo National Park',
    country: 'Kenya',
    description: "Kenya's largest park with rugged red earth and diverse wildlife",
    image: '/images/tsavo-red-earth.jpg',
    highlight: 'Red Earth Wilderness',
  },
]

export default function DestinationsPage() {
  return (
    <main className="bg-deep">
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-ochre uppercase text-xs tracking-widest mb-3">EXPLORE</p>
          <h1 className="font-serif text-6xl font-light mb-6 text-balance">
            Kenyan Safari Destinations
          </h1>
          <p className="text-sand text-lg max-w-3xl leading-relaxed">
            Discover Kenya's most iconic safari destinations. From the legendary Maasai Mara's Great Migration to the serene Lake Naivasha, the majestic elephant herds of Amboseli beneath Mount Kilimanjaro, and the raw wilderness of Tsavo. Each location offers unique wildlife encounters, stunning landscapes, and unforgettable experiences tailored for safari enthusiasts.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-6 relative h-96">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="space-y-2">
                  <p className="text-ochre text-xs uppercase tracking-widest font-semibold">{destination.highlight}</p>
                  <h3 className="text-3xl font-serif font-light text-dust group-hover:text-ochre transition-colors">{destination.name}</h3>
                  <p className="text-sand opacity-75 leading-relaxed">{destination.description}</p>
                  <div className="pt-4">
                    <span className="text-clay uppercase text-xs tracking-widest font-semibold group-hover:text-ochre transition-colors">
                      Explore Destination →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
