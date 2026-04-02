'use client'

import { useState } from 'react'
import Footer from '@/components/layout/footer'

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    { title: 'Elephant Herd at Sunset', location: 'Maasai Mara · Wildlife', category: 'wildlife', icon: '🐘' },
    { title: 'Kilimanjaro at Dawn', location: 'Amboseli · Landscape', category: 'landscapes', icon: '🏔️' },
    { title: 'Maasai Mara Lion', location: 'Wildlife', category: 'wildlife', icon: '🦁' },
    { title: 'Giraffe on the Plain', location: 'Lake Naivasha · Wildlife', category: 'wildlife', icon: '🦒' },
    { title: 'Hippos at Lake Naivasha', location: 'Landscape', category: 'landscapes', icon: '🦛' },
    { title: 'Luxury Tented Camp', location: 'Maasai Mara · Accommodation', category: 'camps', icon: '🏕️' },
    { title: 'Flamingos at Lake', location: 'Birds', category: 'birds', icon: '🦩' },
    { title: 'Safari Sunset', location: 'Tsavo · Landscape', category: 'landscapes', icon: '🌅' },
    { title: 'Maasai Warrior Dance', location: 'Culture', category: 'culture', icon: '💃' },
    { title: 'Buffalo Herd', location: 'Wildlife', category: 'wildlife', icon: '🐃' },
    { title: 'Great Migration', location: 'Maasai Mara · Wildlife', category: 'wildlife', icon: '🦌' },
    { title: 'African Fish Eagle', location: 'Birds', category: 'birds', icon: '🦅' },
    { title: 'Lodge with Mountain View', location: 'Amboseli · Accommodation', category: 'camps', icon: '🏨' },
    { title: 'Leopard in the Tree', location: 'Wildlife', category: 'wildlife', icon: '🐆' },
    { title: 'Acacia at Golden Hour', location: 'Maasai Mara · Landscape', category: 'landscapes', icon: '🌳' },
    { title: 'Plains Zebra', location: 'Wildlife', category: 'wildlife', icon: '🦓' },
  ]

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const navigateLightbox = (direction: number) => {
    let newIndex = currentIndex + direction
    if (newIndex < 0) newIndex = filteredItems.length - 1
    if (newIndex >= filteredItems.length) newIndex = 0
    setCurrentIndex(newIndex)
  }

  const getGridClass = (index: number) => {
    if (index === 0) return 'col-span-2 row-span-2'
    if (index === 1) return 'row-span-2'
    if (index === 5) return 'col-span-2'
    if (index === 10) return 'col-span-2 row-span-2'
    if (index === 14) return 'col-span-2'
    return ''
  }

  return (
    <main className="bg-deep">
      {/* Hero */}
      <section className="hero relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep z-0" />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 40%, rgba(232,160,32,0.2) 0%, transparent 45%),
              linear-gradient(170deg, #2a1508 0%, #1a0e04 35%, #0d0804 60%, #0a0604 100%)`,
          }}
        />
        <div className="relative z-10 w-full px-8 lg:px-20 pb-20">
          <div className="mb-6">
            <p className="text-ochre uppercase text-xs tracking-widest opacity-60 mb-4">Nomads Ridge Safaris › Gallery</p>
            <h1 className="font-serif text-7xl font-light mb-6">Moments from the Wild</h1>
            <p className="text-lg italic opacity-70 max-w-2xl">"Every photograph tells a story. Here are some from ours."</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-dusk py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-ochre uppercase text-xs tracking-widest mb-6">Our Gallery</p>
          <h2 className="font-serif text-5xl font-light mb-6">Wildlife. Landscapes. Memories.</h2>
          <p className="text-lg opacity-70 leading-relaxed">Images from our safaris across Kenya — the Maasai Mara, Amboseli, Tsavo, and the Great Rift Valley. Every shot taken by our guides, guests, or team.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md py-6 px-8 border-b border-clay/20">
        <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-4">
          {['all', 'wildlife', 'landscapes', 'camps', 'culture', 'birds'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 uppercase text-xs tracking-widest font-medium transition-all ${
                filter === cat
                  ? 'bg-clay text-dust border border-clay'
                  : 'border border-dust/10 text-dust/60 hover:text-ochre hover:border-clay'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="bg-deep py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-4 auto-rows-[280px]">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden cursor-pointer group bg-gradient-to-br from-bark to-dusk ${getGridClass(index)}`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30 group-hover:opacity-50 transition-opacity bg-gradient-to-br from-bark/50 to-dusk/50">
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h4 className="font-serif text-xl font-light text-dust">{item.title}</h4>
                  <span className="text-xs uppercase tracking-widest text-ochre mt-2">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8">
          <button onClick={closeLightbox} className="absolute top-8 right-8 text-dust text-4xl hover:text-ochre transition-colors">
            ×
          </button>
          <button onClick={() => navigateLightbox(-1)} className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dust/10 hover:bg-dust/20 text-dust text-2xl transition-colors">
            ‹
          </button>
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-50">{filteredItems[currentIndex].icon}</div>
            <h4 className="font-serif text-2xl text-dust mb-2">{filteredItems[currentIndex].title}</h4>
            <p className="text-xs uppercase tracking-widest text-ochre">{filteredItems[currentIndex].location}</p>
          </div>
          <button onClick={() => navigateLightbox(1)} className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dust/10 hover:bg-dust/20 text-dust text-2xl transition-colors">
            ›
          </button>
        </div>
      )}

      {/* Testimonials */}
      <section className="bg-dusk py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-ochre uppercase text-xs tracking-widest mb-6">Guest Photos</p>
          <h2 className="font-serif text-5xl font-light mb-8">Stories from our guests</h2>
          <p className="font-serif text-2xl italic opacity-80 leading-relaxed mb-6">
            "We came home with 3,000 photographs and three that we&apos;ll frame forever. The image of elephants with Kilimanjaro behind them sits in our living room now. Every visitor asks about it."
          </p>
          <p className="text-xs uppercase tracking-widest opacity-50">— Sarah & James Wanjiku, Nairobi · Amboseli Safari · October 2024</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black/50 py-20 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-ochre uppercase text-xs tracking-widest mb-6">Ready to Create Your Own?</p>
          <h2 className="font-serif text-5xl font-light mb-6">Your photo could be next</h2>
          <p className="text-lg opacity-70 mb-8">Every safari creates memories that last a lifetime. Let us help you capture yours.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-clay hover:bg-ochre text-dust font-semibold uppercase tracking-wider transition-colors">
            Start Planning Your Safari
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
