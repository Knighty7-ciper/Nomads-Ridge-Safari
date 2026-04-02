import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"
import { MapPin, Compass } from "lucide-react"
import TestimonialsPremium from "@/components/sections/testimonials-premium"

const destinations = [
  {
    slug: "maasai-mara",
    name: "Masai Mara",
    country: "Kenya",
    description: "Home to the Great Migration and the most abundant wildlife in Africa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lion%20country-MhAKVw2p8iOKDXDRZbQj97qQaR0QZH.jpg",
    highlight: "Great Migration",
  },
  {
    slug: "amboseli",
    name: "Amboseli National Park",
    country: "Kenya",
    description: "Stunning views of Mount Kilimanjaro and large elephant populations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volcanoes%20NP%20Primates-ir40ZnRVNDoMVuodjZe5s51xxXNFsg.jpg",
    highlight: "Kilimanjaro Views",
  },
  {
    slug: "serengeti",
    name: "Serengeti National Park",
    country: "Tanzania",
    description: "Endless plains supporting the world's largest mammal migration",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg",
    highlight: "2M Animal Migration",
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    description: "A natural wonder with incredible biodiversity and volcanic beauty",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ngorongoro%20stars-0dp4SzAsFG1V4tukuLrrm3m2xxwuml.jpg",
    highlight: "UNESCO World Heritage",
  },
  {
    slug: "bwindi",
    name: "Bwindi Impenetrable National Park",
    country: "Uganda",
    description: "Encounter endangered mountain gorillas in their natural habitat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bwindi%20Forest-gIiVyTLcwtTU2YKTblAL44MGQOxM3y.jpg",
    highlight: "Mountain Gorillas",
  },
  {
    slug: "volcanoes",
    name: "Volcanoes National Park",
    country: "Rwanda",
    description: "Lush forests home to endangered mountain gorillas and stunning views",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwanda%20canopy-xyGm95PrO7weFzo4UQ90Wl9Ifpkh1j.jpg",
    highlight: "Gorilla Trekking",
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-dusk text-dust">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-ochre uppercase text-xs tracking-widest mb-3">EXPLORE</p>
          <h1 className="font-serif text-6xl font-light mb-6 text-balance">
            African Safari Destinations
          </h1>
          <p className="text-sand text-lg max-w-3xl leading-relaxed">
            Discover the world's most iconic safari destinations across Kenya, Tanzania, Uganda, and Rwanda. Each location offers unique wildlife encounters, stunning landscapes, and unforgettable experiences designed for adventure seekers and nature lovers.
          </p>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`}>
                <div className="group cursor-pointer h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-clay/10 mb-4">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dusk via-transparent to-transparent"></div>
                    
                    {/* Highlight Badge */}
                    <span className="absolute bottom-3 left-3 bg-ochre text-card text-xs font-bold uppercase tracking-wider px-3 py-1">
                      {dest.highlight}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sand text-xs uppercase tracking-wider mb-3">
                      <MapPin className="w-3 h-3 text-ochre" />
                      <span>{dest.country}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-light text-dust group-hover:text-ochre transition-colors mb-3">
                      {dest.name}
                    </h3>

                    <p className="text-sand text-sm leading-relaxed mb-4 flex-grow">
                      {dest.description}
                    </p>

                    <div className="flex items-center gap-2 text-ochre font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                      <Compass className="w-4 h-4" />
                      Explore Destination
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-clay/10 border-y border-clay/30 py-16 px-6 lg:px-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light text-dust mb-4">
            Can't Choose? Let Us Help
          </h2>
          <p className="text-sand text-lg mb-8">
            Our expert team can design the perfect multi-destination safari experience tailored to your interests and schedule.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ochre hover:bg-ochre/90 text-card font-semibold uppercase text-xs tracking-wider px-8 py-3 transition-colors"
          >
            Plan Your Custom Safari
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsPremium />

      <Footer />
    </main>
  )
}
