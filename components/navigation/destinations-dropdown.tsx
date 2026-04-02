"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const destinations = {
  Kenya: [
    { name: "Masai Mara", id: "1" },
    { name: "Lake Naivasha", id: "2" },
    { name: "Amboseli", id: "3" },
    { name: "Tsavo", id: "4" },
  ],
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
        <div className="absolute left-0 top-full mt-2 w-48 bg-card border border-clay/30 shadow-2xl z-50 rounded">
          <div className="py-2">
            {(destinations.Kenya || []).map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className="block px-4 py-3 hover:bg-ochre/10 text-dust text-sm font-medium transition-colors border-l-2 border-transparent hover:border-ochre hover:text-ochre"
              >
                {dest.name}
              </Link>
            ))}
            <Link
              href="/destinations"
              className="block px-4 py-3 hover:bg-ochre/10 text-dust text-sm font-medium transition-colors border-l-2 border-transparent hover:border-ochre hover:text-ochre border-t border-clay/20"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
