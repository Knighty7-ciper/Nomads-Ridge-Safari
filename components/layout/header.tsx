"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const destinations = {
  Kenya: ["Masai Mara", "Amboseli", "Tsavo", "Lake Naivasha"],
  Tanzania: ["Serengeti", "Ngorongoro", "Tarangire", "Zanzibar"],
  Uganda: ["Bwindi", "Queen Elizabeth", "Murchison Falls"],
  Rwanda: ["Volcanoes", "Akagera", "Nyungwe Forest"],
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-16 py-7 bg-dusk max-sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/nomads-ridge-safari.jpg"
            alt="Nomads Ridge Safaris"
            width={220}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          <li className="relative group">
            <button className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300 flex items-center gap-1">
              Destinations
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {/* Main Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-48 bg-card border border-clay/30 shadow-xl hidden group-hover:block z-50">
              <div className="py-2">
                {Object.keys(destinations).map((country) => (
                  <div key={country} className="relative group/item">
                    <button className="w-full text-left px-4 py-2.5 text-dust text-sm hover:bg-clay/10 transition-colors flex items-center justify-between">
                      {country}
                      <ChevronDown className="w-3 h-3 text-ochre/50" />
                    </button>
                    
                    {/* Nested Parks Dropdown */}
                    <div className="absolute left-full top-0 ml-0 w-40 bg-card border border-clay/30 shadow-xl hidden group-hover/item:block">
                      <div className="py-2">
                        {destinations[country as keyof typeof destinations].map((park) => (
                          <Link
                            key={park}
                            href={`/destinations/${park.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-dust text-xs hover:bg-ochre/10 hover:text-ochre transition-colors border-l-2 border-transparent hover:border-ochre"
                          >
                            {park}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link href="/gallery" className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-dust text-sm uppercase tracking-wider opacity-75 hover:opacity-100 hover:text-ochre transition-all duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="border border-clay text-clay px-6 py-2 text-sm uppercase tracking-wider hover:bg-clay hover:text-dusk transition-all duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-dusk/50 rounded transition-all duration-300"
          aria-label="Toggle menu"
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
        <div className="lg:hidden bg-dusk/95 border-t border-clay/30 backdrop-blur-sm">
          <div className="flex flex-col px-6 py-6 space-y-2">
            <button
              onClick={() => setOpenDropdown(openDropdown === "destinations" ? null : "destinations")}
              className="text-dust text-sm uppercase tracking-wider font-medium hover:text-ochre transition-colors duration-300 w-full text-left flex items-center justify-between py-2"
            >
              Destinations
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === "destinations" ? "rotate-180" : ""}`} />
            </button>
            
            {/* Mobile Destinations Dropdown */}
            {openDropdown === "destinations" && (
              <div className="pl-4 space-y-1">
                {Object.keys(destinations).map((country) => (
                  <div key={country}>
                    <p className="text-ochre text-xs uppercase tracking-wider font-semibold py-2">{country}</p>
                    <div className="space-y-1 pl-3">
                      {destinations[country as keyof typeof destinations].map((park) => (
                        <Link
                          key={park}
                          href={`/destinations/${park.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-dust text-xs py-1 hover:text-ochre transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {park}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <Link href="/gallery" className="text-dust text-sm uppercase tracking-wider font-medium hover:text-ochre transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/about" className="text-dust text-sm uppercase tracking-wider font-medium hover:text-ochre transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="border border-clay text-clay px-4 py-2 text-sm uppercase hover:bg-clay hover:text-dusk transition-all text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
