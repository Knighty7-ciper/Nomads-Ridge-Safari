'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeaturedCardProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  href?: string
  overlay?: "dark" | "light" | "none"
  size?: "small" | "medium" | "large"
  position?: "top" | "center" | "bottom"
}

export function FeaturedCard({
  title,
  subtitle,
  description,
  image,
  href,
  overlay = "dark",
  size = "medium",
  position = "center",
}: FeaturedCardProps) {
  const sizeClasses = {
    small: "h-48 sm:h-56",
    medium: "h-64 sm:h-80",
    large: "h-96 sm:h-full",
  }

  const positionClasses = {
    top: "items-start pt-8 sm:pt-12",
    center: "items-center justify-center",
    bottom: "items-end pb-8 sm:pb-12",
  }

  const overlayClasses = {
    dark: "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
    light: "bg-gradient-to-t from-white/20 via-white/10 to-transparent",
    none: "",
  }

  const content = (
    <div
      className={`relative w-full overflow-hidden group cursor-pointer bg-cover bg-center ${sizeClasses[size]}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${overlayClasses[overlay]}`}></div>

      {/* Content */}
      <div className={`relative z-10 w-full h-full flex flex-col ${positionClasses[position]} px-6 sm:px-8 text-center`}>
        {subtitle && (
          <p className="text-xs sm:text-sm font-serif text-amber-300 tracking-widest uppercase font-semibold mb-2">
            {subtitle}
          </p>
        )}

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 drop-shadow-lg leading-tight">
          {title}
        </h3>

        {description && (
          <p className="text-sm sm:text-base text-white/85 drop-shadow-lg max-w-xl mx-auto font-light">
            {description}
          </p>
        )}

        {href && (
          <div className="mt-4 flex items-center justify-center gap-2 text-amber-300 group-hover:text-amber-200 transition-colors duration-300">
            <span className="text-xs sm:text-sm font-serif uppercase tracking-wider">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
