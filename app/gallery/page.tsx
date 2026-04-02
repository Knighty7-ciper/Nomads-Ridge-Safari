"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Gallery data with real safari images
  const galleryImages = [
    {
      id: "1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kenya%20big%205-zJcVlnQoIix0ZUKkwD21gtmte5VswL.jpg",
      alt: "Elephants at Watering Hole",
      category: "Wildlife",
      title: "Kenya's Iconic Elephants",
      destination: "Kenya"
    },
    {
      id: "2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti%20migration-vdcYvDXQY1fxOtzzCd2J1JvMWIjQkw.jpg",
      alt: "Serengeti Wildebeest Migration",
      category: "Wildlife",
      title: "The Great Serengeti Migration",
      destination: "Tanzania"
    },
    {
      id: "3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bwindi%20Forest-gIiVyTLcwtTU2YKTblAL44MGQOxM3y.jpg",
      alt: "Mountain Gorilla in Bwindi",
      category: "Primates",
      title: "Mountain Gorillas of Bwindi",
      destination: "Uganda"
    },
    {
      id: "4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volcanoes%20NP%20Primates-ir40ZnRVNDoMVuodjZe5s51xxXNFsg.jpg",
      alt: "Golden Monkey in Volcanoes",
      category: "Primates",
      title: "Golden Monkeys of Volcanoes National Park",
      destination: "Rwanda"
    },
    {
      id: "5",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simien_Mountains-PvKW8hTMyt4vQujI6nhaauyhiARRCf.jpeg",
      alt: "Simien Mountains Panorama",
      category: "Landscape",
      title: "Simien Mountains Majesty",
      destination: "Ethiopia"
    },
    {
      id: "6",
      src: "/masai-village-cultural-experience.png",
      alt: "Masai Village",
      category: "Culture",
      title: "Masai Cultural Experience",
    },
    {
      id: "7",
      src: "/kenyan-coast-dhow.png",
      alt: "Dhow Sailing",
      category: "Beach",
      title: "Traditional Dhow Sailing",
    },
    {
      id: "8",
      src: "/kenya-big-five.png",
      alt: "Big Five",
      category: "Safari",
      title: "The Big Five",
    },
  ]

  const categories = ["All", "Safari", "Beach", "Adventure", "Culture", "Landscape"]

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the breathtaking beauty of Kenya through our curated collection of travel photography
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-cyan-600 hover:bg-cyan-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <Badge className="mb-2 bg-cyan-600 text-white">{image.category}</Badge>
                <h3 className="text-white font-semibold text-sm">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              {selectedImage && (
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Gallery image"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
