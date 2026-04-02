"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-16 py-7 bg-gradient-to-b from-dusk/90 to-transparent backdrop-blur-sm max-sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nomads%20logo%20fn_page-0001%20%281%29-BUlB2zoYoVP4J7bZV58xggVm64UgTP.jpg"
            alt="Nomads Ridge Safaris"
            width={220}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <a href="#destinations" className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300">
              Destinations
            </a>
          </li>
          <li>
            <a href="#experience" className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#packages" className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300">
              Packages
            </a>
          </li>
          <li>
            <a href="#about" className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="border border-clay text-clay px-6 py-2 text-sm uppercase tracking-wider hover:bg-clay hover:text-dusk transition-all duration-300">
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-bark/50 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-dust" />
          ) : (
            <Menu className="w-6 h-6 text-dust" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dusk border-t border-clay/30">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a href="#destinations" className="text-dust text-sm uppercase opacity-75 hover:text-ochre transition-colors">
              Destinations
            </a>
            <a href="#experience" className="text-dust text-sm uppercase opacity-75 hover:text-ochre transition-colors">
              Experience
            </a>
            <a href="#packages" className="text-dust text-sm uppercase opacity-75 hover:text-ochre transition-colors">
              Packages
            </a>
            <a href="#about" className="text-dust text-sm uppercase opacity-75 hover:text-ochre transition-colors">
              About
            </a>
            <a href="#contact" className="border border-clay text-clay px-4 py-2 text-sm uppercase hover:bg-clay hover:text-dusk transition-all text-center">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
