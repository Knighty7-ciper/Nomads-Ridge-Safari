'use client'

import { useState, useEffect, useRef } from "react"
import Footer from "@/components/layout/footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: "1",
    src: "/images/mara-golden-sunset.jpg",
    alt: "Maasai Mara Golden Sunset",
    category: "Landscapes",
    title: "Mara Golden Hour",
    location: "Maasai Mara, Kenya"
  },
  {
    id: "2",
    src: "/images/amboseli-kilimanjaro.jpg",
    alt: "Elephants with Kilimanjaro",
    category: "Wildlife",
    title: "Elephants at Dusk",
    location: "Amboseli, Kenya"
  },
  {
    id: "3",
    src: "/images/tsavo-red-earth.jpg",
    alt: "Tsavo Red Earth",
    category: "Landscapes",
    title: "Red Earth Wilderness",
    location: "Tsavo, Kenya"
  },
  {
    id: "4",
    src: "/images/naivasha-lake-birds.jpg",
    alt: "Lake Naivasha Birds",
    category: "Birds",
    title: "Avian Paradise",
    location: "Lake Naivasha, Kenya"
  },
  {
    id: "5",
    src: "/maasai-mara-safari.png",
    alt: "Safari Vehicle",
    category: "Safari Life",
    title: "The Safari Journey",
    location: "Kenya"
  },
  {
    id: "6",
    src: "/masai-village-cultural-experience.png",
    alt: "Maasai Village",
    category: "Culture",
    title: "Maasai Cultural Experience",
    location: "Maasai Mara, Kenya"
  },
  {
    id: "7",
    src: "/kenyan-coast-dhow.png",
    alt: "Traditional Dhow",
    category: "Coast",
    title: "Coastal Heritage",
    location: "Kenyan Coast"
  },
  {
    id: "8",
    src: "/kenya-big-five.png",
    alt: "Big Five",
    category: "Wildlife",
    title: "The Big Five",
    location: "Various Parks"
  },
  {
    id: "9",
    src: "/mount-kenya-alpine-lakes.jpg",
    alt: "Mount Kenya",
    category: "Landscapes",
    title: "Alpine Reflections",
    location: "Mount Kenya"
  },
  {
    id: "10",
    src: "/mount-kenya-hikers.png",
    alt: "Mountain Hikers",
    category: "Adventure",
    title: "Summit Dreams",
    location: "Mount Kenya"
  },
  {
    id: "11",
    src: "/amboseli-elephants-kilimanjaro.png",
    alt: "Elephants Kilimanjaro",
    category: "Wildlife",
    title: "Royal Herd",
    location: "Amboseli, Kenya"
  },
  {
    id: "12",
    src: "/kenyan-beach-resort.png",
    alt: "Beach Resort",
    category: "Coast",
    title: "Coastal Paradise",
    location: "Diani Beach, Kenya"
  }
]

const categories = ["All", "Wildlife", "Landscapes", "Birds", "Culture", "Coast", "Adventure", "Safari Life"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null)
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

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightboxImage) return
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id)
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    }
    setLightboxImage(filteredImages[newIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return
      if (e.key === 'Escape') setLightboxImage(null)
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
      if (e.key === 'ArrowRight') navigateLightbox('next')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage])

  return (
    <main className="min-h-screen bg-deep text-dust overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dusk via-dusk to-deep" />

        <svg
          className="absolute bottom-0 left-0 right-0 h-40 w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gallerySkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d0d10" stopOpacity="0" />
              <stop offset="100%" stopColor="#1a1a1f" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect fill="url(#gallerySkyGrad)" width="1440" height="160" />
          <path d="M0 120 Q240 100 480 110 T960 105 T1440 115 L1440 160 L0 160 Z" fill="#15151a" />
          <path d="M0 140 Q360 130 720 135 T1440 133 L1440 160 L0 160 Z" fill="#1a1a1f" />
          <g fill="#0f0f14">
            <path d="M100 142 Q100 125 103 118 Q106 125 106 142 Z" />
            <ellipse cx="103" cy="115" rx="28" ry="11" />
            <path d="M400 144 Q400 130 403 123 Q406 130 406 144 Z" />
            <ellipse cx="403" cy="120" rx="22" ry="9" />
            <path d="M700 143 Q700 128 703 121 Q706 128 706 143 Z" />
            <ellipse cx="703" cy="118" rx="25" ry="10" />
            <path d="M1050 144 Q1050 130 1053 123 Q1056 130 1056 144 Z" />
            <ellipse cx="1053" cy="120" rx="23" ry="9" />
            <path d="M1300 143 Q1300 129 1303 122 Q1306 129 1306 143 Z" />
            <ellipse cx="1303" cy="119" rx="21" ry="8" />
          </g>
        </svg>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span
            className="inline-block text-ochre text-xs tracking-[0.35em] uppercase mb-6 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            Our Gallery
          </span>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-sand leading-tight mb-6 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            Moments from the Wild
          </h1>
          <p
            className="text-dust/80 text-lg max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.35s' }}
          >
            Capturing the magic of East Africa's most breathtaking landscapes, iconic wildlife, and rich cultural heritage.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div
            ref={setRef(0)}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-30 bg-deep/80 backdrop-blur-sm py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-ochre text-deep font-semibold'
                      : 'bg-clay/10 text-dust hover:bg-clay/20 border border-clay/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                ref={setRef(index + 1)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out group cursor-pointer"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setLightboxImage(image)}
              >
                <div className="relative aspect-square overflow-hidden bg-clay/10 border border-clay/20 hover:border-ochre/40 transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dusk/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-ochre text-xs uppercase tracking-wider mb-1">{image.category}</span>
                    <h3 className="text-sand font-serif text-lg mb-1">{image.title}</h3>
                    <p className="text-dust/70 text-xs">{image.location}</p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-dusk/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-dusk/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-clay/20 hover:bg-clay/30 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-sand" />
          </button>

          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-clay/20 hover:bg-clay/30 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-sand" />
          </button>

          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-clay/20 hover:bg-clay/30 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-sand" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-6 text-center">
              <span className="text-ochre text-xs uppercase tracking-wider">{lightboxImage.category}</span>
              <h3 className="text-sand font-serif text-2xl mt-2">{lightboxImage.title}</h3>
              <p className="text-dust/60 text-sm mt-1">{lightboxImage.location}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section
        ref={setRef(filteredImages.length + 2)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 py-16"
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-clay/10 via-clay/5 to-clay/10 border border-clay/20 p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-sand mb-4">Want to Capture Your Own Safari Moments?</h2>
          <p className="text-dust/70 mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect safari adventure. Our expert guides know all the best spots for wildlife photography and unforgettable encounters.
          </p>
          <a
            href="/booking"
            className="inline-block bg-ochre text-deep px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ochre/20"
          >
            Book Your Safari
          </a>
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
