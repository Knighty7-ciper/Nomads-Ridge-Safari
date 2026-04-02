'use client'

import { useState, useEffect } from 'react'
import Footer from '@/components/layout/footer'

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState<number[]>([])

  const galleryItems = [
    { title: 'Elephant Herd at Sunset', location: 'Maasai Mara · Wildlife', category: 'wildlife', icon: '🐘', large: true },
    { title: 'Kilimanjaro at Dawn', location: 'Amboseli · Landscape', category: 'landscapes', icon: '🏔️', tall: true },
    { title: 'Maasai Mara Lion', location: 'Wildlife', category: 'wildlife', icon: '🦁' },
    { title: 'Giraffe on the Plain', location: 'Lake Naivasha · Wildlife', category: 'wildlife', icon: '🦒' },
    { title: 'Hippos at Lake Naivasha', location: 'Landscape', category: 'landscapes', icon: '🦛' },
    { title: 'Luxury Tented Camp', location: 'Maasai Mara · Accommodation', category: 'camps', icon: '🏕️', wide: true },
    { title: 'Flamingos at Lake', location: 'Birds', category: 'birds', icon: '🦩' },
    { title: 'Safari Sunset', location: 'Tsavo · Landscape', category: 'landscapes', icon: '🌅', tall: true },
    { title: 'Maasai Warrior Dance', location: 'Culture', category: 'culture', icon: '💃' },
    { title: 'Buffalo Herd', location: 'Wildlife', category: 'wildlife', icon: '🐃' },
    { title: 'Great Migration', location: 'Maasai Mara · Wildlife', category: 'wildlife', icon: '🦌', large: true },
    { title: 'African Fish Eagle', location: 'Birds', category: 'birds', icon: '🦅' },
    { title: 'Lodge with Mountain View', location: 'Amboseli · Accommodation', category: 'camps', icon: '🏨' },
    { title: 'Leopard in the Tree', location: 'Wildlife', category: 'wildlife', icon: '🐆' },
    { title: 'Acacia at Golden Hour', location: 'Maasai Mara · Landscape', category: 'landscapes', icon: '🌳', wide: true },
    { title: 'Plains Zebra', location: 'Wildlife', category: 'wildlife', icon: '🦓' },
  ]

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const navigateLightbox = (direction: number) => {
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < filteredItems.length) {
      setCurrentIndex(newIndex)
    }
  }

  const sceneClasses: { [key: string]: string } = {
    'Elephant Herd at Sunset': 'scene-elephants',
    'Kilimanjaro at Dawn': 'scene-kili',
    'Maasai Mara Lion': 'scene-lions',
    'Giraffe on the Plain': 'scene-giraffe',
    'Hippos at Lake Naivasha': 'scene-lake',
    'Luxury Tented Camp': 'scene-camp',
    'Flamingos at Lake': 'scene-birds',
    'Safari Sunset': 'scene-sunset',
    'Maasai Warrior Dance': 'scene-maasai',
    'Buffalo Herd': 'scene-buffalo',
    'Great Migration': 'scene-elephants',
    'African Fish Eagle': 'scene-giraffe',
    'Lodge with Mountain View': 'scene-kili',
    'Leopard in the Tree': 'scene-lions',
    'Acacia at Golden Hour': 'scene-sunset',
    'Plains Zebra': 'scene-giraffe',
  }

  return (
    <main className="bg-deep text-dust">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <style>{`
          :root {
            --dust: #f5ede0;
            --clay: #c8622a;
            --ochre: #d4943a;
            --bark: #2c1a0e;
            --dusk: #1a1209;
            --deep: #0d0a04;
            --sand: #e8d5b0;
            --sage: #6b7c5c;
          }

          .hero-sky {
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at 50% 40%, rgba(232,160,32,0.2) 0%, transparent 45%),
                        linear-gradient(170deg, #2a1508 0%, #1a0e04 35%, #0d0804 60%, #0a0604 100%);
          }

          .hero-sun {
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(232,160,32,0.35) 0%, rgba(200,98,42,0.15) 40%, transparent 70%);
            animation: sunPulse 4s ease-in-out infinite;
          }

          @keyframes sunPulse {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
            50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
          }

          .scene-elephants {
            background: radial-gradient(ellipse at 50% 60%, rgba(139,85,19,0.5) 0%, transparent 50%),
                        linear-gradient(135deg, #1a0e04 0%, #3a2010 50%, #5a3510 100%);
          }

          .scene-kili {
            background: radial-gradient(ellipse at 50% 30%, rgba(74,124,156,0.5) 0%, transparent 50%),
                        linear-gradient(135deg, #0d1820 0%, #1a2a3a 50%, #2a3a4a 100%);
          }

          .scene-lions {
            background: radial-gradient(ellipse at 50% 50%, rgba(160,82,45,0.4) 0%, transparent 50%),
                        linear-gradient(135deg, #2a1008 0%, #4a2010 50%, #6a3010 100%);
          }

          .scene-giraffe {
            background: radial-gradient(ellipse at 50% 40%, rgba(61,122,90,0.4) 0%, transparent 50%),
                        linear-gradient(135deg, #0d1a0a 0%, #1a3020 50%, #2a4030 100%);
          }

          .scene-lake {
            background: radial-gradient(ellipse at 50% 50%, rgba(45,106,106,0.4) 0%, transparent 50%),
                        linear-gradient(135deg, #0d1a1a 0%, #1a2a2a 50%, #2a3a3a 100%);
          }

          .scene-camp {
            background: radial-gradient(ellipse at 50% 40%, rgba(232,160,32,0.3) 0%, transparent 50%),
                        linear-gradient(135deg, #1a0e04 0%, #2a1a08 50%, #3a2808 100%);
          }

          .scene-birds {
            background: radial-gradient(ellipse at 30% 50%, rgba(255,200,100,0.3) 0%, transparent 50%),
                        linear-gradient(135deg, #1a1508 0%, #2a2010 50%, #3a2a18 100%);
          }

          .scene-sunset {
            background: radial-gradient(ellipse at 50% 60%, rgba(232,100,50,0.5) 0%, transparent 50%),
                        linear-gradient(to bottom, #1a0808 0%, #2a1008 50%, #3a1808 100%);
          }

          .scene-maasai {
            background: radial-gradient(ellipse at 50% 50%, rgba(200,40,20,0.3) 0%, transparent 50%),
                        linear-gradient(135deg, #1a0808 0%, #3a1010 50%, #5a1818 100%);
          }

          .scene-buffalo {
            background: radial-gradient(ellipse at 50% 50%, rgba(100,80,50,0.4) 0%, transparent 50%),
                        linear-gradient(135deg, #1a1510 0%, #2a2018 50%, #3a2a20 100%);
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 280px;
            gap: 1rem;
          }

          .gallery-item {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            background: linear-gradient(135deg, #1a1209, #2a1a0e);
          }

          .gallery-item.tall {
            grid-row: span 2;
          }

          .gallery-item.wide {
            grid-column: span 2;
          }

          .gallery-item.large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .gallery-img {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s, filter 0.3s;
          }

          .gallery-item:hover .gallery-img {
            transform: scale(1.05);
            filter: brightness(0.7);
          }

          .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1.5rem;
          }

          .gallery-item:hover .gallery-overlay {
            opacity: 1;
          }

          .gallery-overlay h4 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.2rem;
            font-weight: 400;
          }

          .gallery-overlay span {
            font-size: 0.7rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--ochre);
            margin-top: 0.3rem;
          }

          .gallery-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            opacity: 0.4;
          }

          .filter-bar {
            background: #100c06;
            padding: 2rem 5rem;
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .filter-btn {
            background: transparent;
            border: 1px solid rgba(245, 237, 224, 0.1);
            color: var(--dust);
            padding: 0.6rem 1.5rem;
            font-family: 'Outfit', sans-serif;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s;
            opacity: 0.6;
          }

          .filter-btn:hover,
          .filter-btn.active {
            border-color: var(--clay);
            color: var(--ochre);
            opacity: 1;
            background: rgba(200, 98, 42, 0.08);
          }

          .lightbox {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.95);
            z-index: 1000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .lightbox.open {
            display: flex;
          }

          .lightbox-content {
            max-width: 90vw;
            max-height: 90vh;
            position: relative;
          }

          .lightbox-img {
            width: 200px;
            height: 200px;
            background: linear-gradient(135deg, #1a1209, #2a1a0e);
            border-radius: 4px;
          }

          .lightbox-close {
            position: absolute;
            top: -3rem;
            right: 0;
            background: none;
            border: none;
            color: var(--dust);
            font-size: 2rem;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.3s;
          }

          .lightbox-close:hover {
            opacity: 1;
          }

          .lightbox-info {
            text-align: center;
            margin-top: 1rem;
          }

          .lightbox-info h4 {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.3rem;
          }

          .lightbox-info span {
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--ochre);
          }

          .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(245, 237, 224, 0.1);
            border: none;
            color: var(--dust);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            transition: background 0.3s;
          }

          .lightbox-nav:hover {
            background: rgba(245, 237, 224, 0.2);
          }

          .lightbox-prev {
            left: -4rem;
          }

          .lightbox-next {
            right: -4rem;
          }

          @media (max-width: 1100px) {
            .gallery-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .lightbox-nav {
              display: none;
            }
          }

          @media (max-width: 900px) {
            .filter-bar {
              padding: 1rem 1.5rem;
            }
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: 200px;
            }
            .gallery-item.tall,
            .gallery-item.wide,
            .gallery-item.large {
              grid-column: span 1;
              grid-row: span 1;
            }
          }
        `}</style>

        <div className="hero-sky"></div>
        <div className="hero-sun"></div>
        <div className="relative z-10 w-full px-20 pb-20">
          <div className="mb-6 text-xs tracking-widest opacity-45">
            Nomads Ridge Safaris <span className="text-ochre opacity-100"> › </span> Gallery
          </div>
          <h1 className="font-serif text-6xl font-light mb-4">
            Moments from the <em className="italic text-ochre">Wild</em>
          </h1>
          <p className="font-serif text-xl italic opacity-72 max-w-2xl">"Every photograph tells a story. Here are some from ours."</p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-dusk py-20 px-20 text-center">
        <div className="inline-block text-xs tracking-wider text-clay mb-4">Our Gallery</div>
        <h2 className="font-serif text-5xl font-light mb-6">
          Wildlife. Landscapes. <em className="italic text-ochre">Memories.</em>
        </h2>
        <p className="max-w-3xl mx-auto opacity-65 leading-relaxed">
          Images from our safaris across Kenya — the Maasai Mara, Amboseli, Tsavo, and the Great Rift Valley. Every shot taken by our guides, guests, or team.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="filter-bar">
        {['all', 'wildlife', 'landscapes', 'camps', 'culture', 'birds'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/s$/, '')}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="bg-deep py-16 px-20">
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-item ${item.large ? 'large' : ''} ${item.tall ? 'tall' : ''} ${item.wide ? 'wide' : ''}`}
              onClick={() => openLightbox(idx)}
            >
              <div className={`gallery-img ${sceneClasses[item.title] || 'scene-elephants'}`}>
                <div className="gallery-icon">{item.icon}</div>
              </div>
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && filteredItems[currentIndex] && (
        <div className="lightbox open">
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          {currentIndex > 0 && <button className="lightbox-nav lightbox-prev" onClick={() => navigateLightbox(-1)}>‹</button>}
          <div className="lightbox-content">
            <div className={`lightbox-img ${sceneClasses[filteredItems[currentIndex].title] || 'scene-elephants'}`}></div>
            <div className="lightbox-info">
              <h4>{filteredItems[currentIndex].title}</h4>
              <span>{filteredItems[currentIndex].location}</span>
            </div>
          </div>
          {currentIndex < filteredItems.length - 1 && <button className="lightbox-nav lightbox-next" onClick={() => navigateLightbox(1)}>›</button>}
        </div>
      )}

      {/* Testimonials */}
      <section className="bg-dusk py-20 px-20 text-center">
        <div className="inline-block text-xs tracking-wider text-clay mb-4">Guest Photos</div>
        <h2 className="font-serif text-5xl font-light mb-8">
          Stories from our <em className="italic text-ochre">guests</em>
        </h2>
        <p className="font-serif text-2xl italic max-w-4xl mx-auto leading-relaxed opacity-80 mb-4">
          "We came home with 3,000 photographs and three that we'll frame forever. <em className="text-ochre">The image of elephants with Kilimanjaro behind them</em> sits in our living room now."
        </p>
        <p className="text-xs tracking-widest opacity-50">Sarah & Michael, USA</p>
      </section>

      <Footer />
    </main>
  )
}
