"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, Phone } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface HeroSectionProps {
  badge?: string
  headline: string
  subheading?: string
  description?: string
  backgroundImage?: string
  backgroundVideo?: string
  showLogo?: boolean
  primaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryCTA?: {
    text: string
    icon?: boolean
    href?: string
    onClick?: () => void
  }
  showScrollIndicator?: boolean
}

export function HeroSection({
  badge,
  headline,
  subheading,
  description,
  backgroundImage = "/nomads-ridge-hero-bg.jpg",
  backgroundVideo,
  showLogo = true,
  primaryCTA = {
    text: "Start Your Journey",
    href: "/booking",
  },
  secondaryCTA = {
    text: "Speak to Expert",
    icon: true,
    href: "https://wa.me/254714703892?text=Hello! I'd like to inquire about your safari packages.",
  },
  showScrollIndicator = true,
}: HeroSectionProps) {
  const router = useRouter()

  const handlePrimaryCTA = () => {
    if (primaryCTA.onClick) {
      primaryCTA.onClick()
    } else if (primaryCTA.href) {
      if (primaryCTA.href.startsWith("http")) {
        window.open(primaryCTA.href, "_blank")
      } else {
        router.push(primaryCTA.href)
      }
    }
  }

  const handleSecondaryCTA = () => {
    if (secondaryCTA.onClick) {
      secondaryCTA.onClick()
    } else if (secondaryCTA.href) {
      window.open(secondaryCTA.href, "_blank")
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Image Background */}
      {!backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Cinematic luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75"></div>

      {/* Hero Content - Centered for maximum impact */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center min-h-screen flex items-center">
          
          {/* Badge */}
          {badge && (
            <div className="mb-8 md:mb-10">
              <p className="text-xs md:text-sm font-serif text-amber-300 tracking-widest uppercase font-semibold">
                {badge}
              </p>
            </div>
          )}

          {/* Main Headline - Massive luxury serif */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white mb-6 md:mb-8 drop-shadow-2xl leading-tight tracking-tight">
            {headline}
          </h1>

          {/* Subheading - Elegant italic serif */}
          {subheading && (
            <p className="text-lg sm:text-2xl md:text-3xl text-amber-100/90 mb-10 md:mb-12 font-serif italic drop-shadow-lg">
              {subheading}
            </p>
          )}

          {/* Decorative separator - elegant line */}
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-10 md:mb-12"></div>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-16 md:mb-20 max-w-4xl mx-auto drop-shadow-lg leading-relaxed font-light">
              {description}
            </p>
          )}

          {/* CTAs - Luxury buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-serif font-bold px-10 sm:px-12 py-3 md:py-4 uppercase text-sm tracking-wider transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto"
              onClick={handlePrimaryCTA}
            >
              {primaryCTA.text}
            </Button>
            <Button
              size="lg"
              className="border-2 border-amber-300 text-amber-100 hover:bg-amber-950/50 hover:border-amber-200 font-serif font-bold px-10 sm:px-12 py-3 md:py-4 uppercase text-sm tracking-wider transition-all duration-300 backdrop-blur-sm bg-transparent w-full sm:w-auto"
              onClick={handleSecondaryCTA}
            >
              {secondaryCTA.icon && <Phone className="w-5 h-5 mr-2" />}
              {secondaryCTA.text}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-3 animate-bounce">
              <span className="text-amber-200/60 text-xs md:text-sm font-serif uppercase tracking-wider">Explore More</span>
              <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-amber-300/60 rotate-180" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
