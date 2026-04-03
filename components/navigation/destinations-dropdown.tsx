"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const destinations = {
  Kenya: [
    { name: "Masai Mara", slug: "maasai-mara" },
    { name: "Lake Naivasha", slug: "lake-naivasha" },
    { name: "Amboseli", slug: "amboseli" },
    { name: "Tsavo", slug: "tsavo" },
  ],
}

export function DestinationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="text-dust hover:text-ochre transition-colors text-sm font-medium px-3 py-2 rounded-md hover:bg-clay/5 backdrop-blur-sm flex items-center gap-2 cursor-pointer"
      >
        Destinations
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-2 w-48 bg-card border border-clay/30 shadow-2xl z-50 rounded"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-2">
            {(destinations.Kenya || []).map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="block px-4 py-3 hover:bg-ochre/10 text-dust text-sm font-medium transition-colors border-l-2 border-transparent hover:border-ochre hover:text-ochre"
                onClick={() => setIsOpen(false)}
              >
                {dest.name}
              </Link>
            ))}
            <Link
              href="/destinations"
              className="block px-4 py-3 hover:bg-ochre/10 text-dust text-sm font-medium transition-colors border-l-2 border-transparent hover:border-ochre hover:text-ochre border-t border-clay/20"
              onClick={() => setIsOpen(false)}
            >
              View All Destinations
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
