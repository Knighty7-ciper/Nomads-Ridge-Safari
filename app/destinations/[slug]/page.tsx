'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Users, Zap } from "lucide-react"
import Footer from "@/components/layout/footer"
import TestimonialsCarousel from "@/components/sections/testimonials-carousel"

const destinations: Record<string, any> = {
  arusha: {
    name: "Arusha National Park",
    country: "Tanzania",
    shortDesc: "A hidden gem offering diverse landscapes and incredible wildlife",
    fullDesc: "Arusha National Park, situated in the northern circuit of Tanzania, is a hidden gem that offers an incredible safari experience. Despite being one of the smaller national parks in the country, it boasts a remarkable diversity of landscapes and wildlife, making it a must-visit destination for nature enthusiasts and wildlife lovers.\n\nThe park's terrain is a visual feast, encompassing lush montane forests, rolling grasslands, and picturesque savannahs. Within its borders lies the striking Ngurdoto Crater, a volcanic caldera with steep walls and a swampy floor, reminiscent of a miniature version of the famous Ngorongoro Crater.",
    highlights: [
      {
        title: "Unique Size",
        desc: "Ranking as the 12th largest among Tanzania's 16 national parks, offering an intimate safari experience"
      },
      {
        title: "Proximity to Urban Centers",
        desc: "Just 40 minutes from Arusha town and 1 hour 30 minutes from Moshi - ideal for day trips"
      },
      {
        title: "Mount Meru",
        desc: "Tanzania's second-highest mountain with striking volcanic peak and hiking opportunities"
      },
      {
        title: "Ngurdoto Crater",
        desc: "A captivating volcanic caldera with lush rainforest, resembling Ngorongoro Crater"
      },
      {
        title: "Momella Lakes",
        desc: "Shallow alkaline lakes hosting flocks of flamingos, hippos, and water birds"
      },
      {
        title: "Diverse Wildlife",
        desc: "Giraffes, buffalo, zebras, colobus monkeys, and elusive leopards"
      }
    ],
    activities: [
      "Game drives through varied terrain",
      "Mount Meru hiking expeditions",
      "Guided walking safaris",
      "Canoeing safaris on Momella Lakes",
      "Kilimanjaro scenic flights",
      "Cultural visits to Maasai villages"
    ],
    bestTime: "January-February and July-September for optimal wildlife viewing",
    wildlife: ["Giraffes", "Buffalo", "Zebras", "Colobus Monkeys", "Leopards", "Hippos", "Flamingos"],
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518002367878-c23d76319b49?w=600&h=400&fit=crop"
    ],
    conclusion: "Arusha National Park has woven its enchanting spell, leaving visitors mesmerized by its diverse landscapes and rich biodiversity. From lush rainforests to picturesque Momella Lakes and rugged Mount Meru, the park offers a stunning tapestry of nature's wonders. Encounters with giraffes, monkeys, and elusive leopards bring you closer to Africa's wildlife essence. Arusha National Park is a true gem—an invitation to cherish and preserve our planet's wild places."
  },
  "maasai-mara": {
    name: "Maasai Mara National Reserve",
    country: "Kenya",
    shortDesc: "Africa's premier wildlife destination with legendary safari experiences",
    fullDesc: "The Maasai Mara National Reserve stands as Kenya's crown jewel, offering some of the most spectacular wildlife viewing opportunities in Africa. Covering 1,510 square kilometers of pristine savannah, the Mara is home to the Big Five and over 450 bird species, making it a paradise for wildlife enthusiasts and photographers.",
    highlights: [
      {
        title: "Great Migration",
        desc: "Witness the legendary migration of two million wildebeest and zebras (July-October)"
      },
      {
        title: "Big Five Guarantee",
        desc: "Excellent chances of spotting lion, leopard, elephant, buffalo, and rhino"
      },
      {
        title: "Bird Paradise",
        desc: "Over 450 bird species recorded, making it a birdwatcher's paradise"
      },
      {
        title: "Predator-Prey Drama",
        desc: "Experience nature's circle of life with daily wildlife interactions"
      },
      {
        title: "Luxury Accommodations",
        desc: "World-class lodges and exclusive tented camps"
      },
      {
        title: "Expert Guides",
        desc: "Professional guides with deep knowledge of wildlife behavior"
      }
    ],
    activities: [
      "Game drives at dawn and sunset",
      "Hot air balloon safaris",
      "Walking safaris",
      "Bird watching expeditions",
      "Photography tours",
      "Maasai cultural visits"
    ],
    bestTime: "July-October for Great Migration; January-March for calving season",
    wildlife: ["Lions", "Leopards", "Elephants", "Cape Buffalo", "Rhinos", "Cheetahs", "Zebras", "Wildebeest"],
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop"
    ],
    conclusion: "The Maasai Mara represents the ultimate African safari experience. Its combination of abundant wildlife, dramatic landscapes, and authentic cultural encounters creates memories that last a lifetime. Whether you're a first-time visitor or seasoned safari enthusiast, the Mara's magic never fades."
  },
  serengeti: {
    name: "Serengeti National Park",
    country: "Tanzania",
    shortDesc: "The place where the land runs forever - Tanzania's vast ecosystem",
    fullDesc: "The Serengeti, meaning 'the place where the land runs on forever' in the Maasai language, spans over 14,750 square kilometers across Tanzania and Kenya. It is home to the largest land animal migration on Earth and remains one of the world's most pristine ecosystems.",
    highlights: [
      {
        title: "Largest Migration",
        desc: "Two million wildebeest, zebras, and gazelles in annual circular migration"
      },
      {
        title: "Endless Plains",
        desc: "Vast 14,750 square kilometer ecosystem with endless vistas"
      },
      {
        title: "Calving Season",
        desc: "December-March brings drama as wildebeest give birth to thousands of calves"
      },
      {
        title: "Predator Diversity",
        desc: "Home to lions, leopards, cheetahs, and African wild dogs"
      },
      {
        title: "Seasonal Beauty",
        desc: "Green season brings lush landscapes; dry season concentrates wildlife"
      },
      {
        title: "Research Hub",
        desc: "Home to world-famous Serengeti Research Institute"
      }
    ],
    activities: [
      "Game drives tracking migration",
      "Sunrise and sunset drives",
      "Guided bush walks",
      "Big cat tracking",
      "Bird watching",
      "Photography safaris"
    ],
    bestTime: "July-October for migration; December-March for calving",
    wildlife: ["Wildebeest", "Zebras", "Lions", "Leopards", "Cheetahs", "Hyenas", "African Wild Dogs", "Giraffes"],
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop"
    ],
    conclusion: "The Serengeti is more than a park—it is a living, breathing ecosystem where the cycles of nature play out in their most dramatic form. Every visit tells a different story, shaped by seasons and migration patterns. It is an experience that touches the soul."
  }
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations[params.slug]

  if (!destination) {
    return (
      <main className="min-h-screen bg-dusk text-dust pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center py-20">
            <h1 className="font-serif text-4xl font-light text-dust mb-4">Destination Not Found</h1>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <>
      <main className="min-h-screen bg-dusk text-dust">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] w-full mt-20 overflow-hidden">
          <Image
            src={destination.images[0]}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <Link href="/destinations" className="flex items-center gap-2 text-ochre hover:text-ochre/80 mb-6 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Destinations
            </Link>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          {/* Header */}
          <header className="mb-16 border-b border-clay/30 pb-12">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-ochre" />
              <span className="text-ochre font-semibold">{destination.country}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-4 text-balance">
              {destination.name}
            </h1>
            <p className="text-sand text-lg md:text-xl">{destination.shortDesc}</p>
          </header>

          {/* Main Description */}
          <div className="prose prose-invert max-w-4xl mb-20">
            <p className="text-dust/80 leading-relaxed whitespace-pre-wrap text-lg">
              {destination.fullDesc}
            </p>
          </div>

          {/* Highlights Grid */}
          <section className="mb-20">
            <h2 className="font-serif text-4xl font-light mb-12 text-dust">What Makes This Destination Special</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.highlights.map((highlight: any, idx: number) => (
                <div key={idx} className="border border-clay/30 p-8 hover:border-ochre/50 transition-all">
                  <h3 className="font-semibold text-dust text-lg mb-3">{highlight.title}</h3>
                  <p className="text-sand text-sm leading-relaxed">{highlight.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Activities Section */}
          <section className="mb-20 bg-clay/5 border border-clay/30 p-12">
            <h2 className="font-serif text-3xl font-light mb-8 text-dust">Activities & Experiences</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {destination.activities.map((activity: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <Zap className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                  <span className="text-sand">{activity}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Wildlife Section */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl font-light mb-8 text-dust">Wildlife You'll Encounter</h2>
            <div className="flex flex-wrap gap-3">
              {destination.wildlife.map((animal: string, idx: number) => (
                <span key={idx} className="bg-ochre/20 text-ochre px-4 py-2 rounded border border-ochre/30">
                  {animal}
                </span>
              ))}
            </div>
          </section>

          {/* Best Time & Quick Info */}
          <section className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="border border-clay/30 p-8">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dust mb-2">Best Time to Visit</h3>
                  <p className="text-sand">{destination.bestTime}</p>
                </div>
              </div>
            </div>
            <div className="border border-clay/30 p-8">
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-ochre flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dust mb-2">Perfect For</h3>
                  <p className="text-sand">All safari experience levels from first-time adventurers to seasoned wildlife enthusiasts</p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl font-light mb-8 text-dust">Explore the Landscape</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {destination.images.map((img: string, idx: number) => (
                <div key={idx} className="relative h-64 overflow-hidden border border-clay/30 hover:border-ochre/50 transition-all">
                  <Image
                    src={img}
                    alt={`${destination.name} view ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="border-t border-clay/30 pt-12 text-center">
            <h2 className="font-serif text-3xl font-light mb-6 text-dust">Ready to Visit?</h2>
            <p className="text-sand mb-8 max-w-2xl mx-auto">
              Start planning your safari adventure to {destination.name} today. Our expert team will create an unforgettable experience tailored to your interests and preferences.
            </p>
            <button className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre/90 text-card font-semibold uppercase text-xs tracking-wider px-8 py-4 transition-colors">
              Customize Your Trip
            </button>
          </div>
        </article>
      </main>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Other Destinations CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-light text-dust mb-4">Explore More Destinations</h2>
          <p className="text-sand mb-10">Discover other incredible safari locations</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(destinations)
            .filter(([slug]) => slug !== params.slug)
            .map(([slug, dest]) => (
              <Link key={slug} href={`/destinations/${slug}`} className="group border border-clay/30 overflow-hidden hover:border-ochre/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-clay/20 to-ochre/20 group-hover:from-clay/30 group-hover:to-ochre/30 transition-colors"></div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-light mb-2 text-dust group-hover:text-ochre transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-sand text-sm mb-4">{dest.shortDesc}</p>
                  <span className="text-ochre text-xs uppercase tracking-wider">Explore →</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
