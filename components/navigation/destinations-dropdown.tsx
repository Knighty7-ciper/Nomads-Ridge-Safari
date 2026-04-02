"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const destinations = {
  Kenya: ["Masai Mara", "Amboseli", "Tsavo", "Lake Naivasha", "Mount Kenya"],
  Tanzania: ["Serengeti", "Ngorongoro", "Zanzibar", "Tarangire", "Lake Tanganyika"],
  Uganda: ["Bwindi", "Queen Elizabeth", "Murchison Falls", "Lake Bunyonyi"],
  Rwanda: ["Volcanoes", "Akagera", "Nyungwe Forest"],
  "Mixed Tours": ["Kenya & Tanzania", "Uganda & Rwanda", "Grand East Africa"],
}

export function DestinationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCountry, setActiveCountry] = useState<string | null>(null)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false)
        setActiveCountry(null)
      }}
    >
      <button className="text-dust hover:text-ochre transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-clay/5 backdrop-blur-sm flex items-center gap-2">
        Destinations
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Main Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-56 bg-card border border-clay/30 shadow-2xl z-50 rounded">
          <div className="py-2">
            {Object.keys(destinations).map((country) => (
              <div
                key={country}
                className="relative group/item"
                onMouseEnter={() => setActiveCountry(country)}
                onMouseLeave={() => setActiveCountry(null)}
              >
                <button className="w-full text-left px-4 py-3 hover:bg-clay/10 transition-colors flex items-center justify-between text-dust text-sm font-medium">
                  {country}
                  {country !== "Mixed Tours" && (
                    <ChevronDown className="w-4 h-4 text-ochre/50" />
                  )}
                </button>

                {/* Nested Parks Dropdown */}
                {activeCountry === country && country !== "Mixed Tours" && (
                  <div className="absolute left-full top-0 ml-0 w-48 bg-card border border-clay/30 shadow-2xl rounded">
                    <div className="py-2">
                      {(destinations[country as keyof typeof destinations] || []).map(
                        (park) => (
                          <Link
                            key={park}
                            href={`/destinations/${country.toLowerCase()}/${park.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2.5 hover:bg-ochre/10 text-dust text-sm transition-colors border-l-2 border-transparent hover:border-ochre hover:text-ochre"
                          >
                            {park}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Mixed Tours Links */}
                {activeCountry === country && country === "Mixed Tours" && (
                  <div className="absolute left-full top-0 ml-0 w-48 bg-card border border-clay/30 shadow-2xl rounded">
                    <div className="py-2">
                      {(destinations[country as keyof typeof destinations] || []).map(
                        (tour) => (
                          <Link
                            key={tour}
                            href={`/destinations/mixed-tours/${tour.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2.5 hover:bg-ochre/10 text-dust text-sm transition-colors border-l-2 border-transparent hover:border-ochre hover:text-ochre"
                          >
                            {tour}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
