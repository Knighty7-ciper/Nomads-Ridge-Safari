"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowRight,
  Shield,
  Award,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TripleClickPrompt } from "@/components/admin/triple-click-prompt"

export default function Footer() {
  const router = useRouter()

  const handleAuthenticated = () => {
    router.push("/admin")
  }
  return (
    <footer className="bg-dusk text-dust">
      {/* Top Footer CTA Section */}
      <div className="border-b border-clay/30 bg-gradient-to-r from-dusk to-bark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl font-light text-dust mb-3 leading-tight">Ready for Your African Adventure?</h3>
              <p className="text-dust/70 text-lg">We take you past the ordinary — into the living, breathing heart of the wild</p>
            </div>
            <div className="flex items-center justify-end">
              <Link href="#contact" className="border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-serif font-semibold text-dust mb-2">Nomads Ridge Safaris</h4>
              <p className="text-dust/70 text-sm mb-6 leading-relaxed">
                We take you past the ordinary — into the living, breathing heart of Kenya, Tanzania, Uganda, Rwanda and beyond. This is not just a trip. This is your story with the wild.
              </p>

              {/* Customer Rating */}
              <div className="flex items-center gap-2 text-ochre mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-medium">4.9/5 · 1000+ Explorers</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-dust mb-5 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/travel-insurance" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Travel Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/visa-info" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Visa Information
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif font-semibold text-dust mb-5 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/destinations/maasai-mara" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Safari Tours
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Custom Packages
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-dust/60 hover:text-ochre transition-colors duration-300 text-sm">
                    Group Bookings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold text-dust mb-5 uppercase text-sm tracking-wider">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-ochre flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-dust/50 uppercase tracking-wider">Phone</p>
                    <a href="tel:+254714703892" className="text-dust hover:text-ochre transition-colors text-sm">
                      +254 714 703 892
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-ochre flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-dust/50 uppercase tracking-wider">Email</p>
                    <a href="mailto:nomadsridgesafaris@gmail.com" className="text-dust hover:text-ochre transition-colors text-sm">
                      nomadsridgesafaris@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-clay/20 bg-bark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <TripleClickPrompt onAuthenticated={handleAuthenticated}>
              <p className="text-dust/50 text-sm cursor-pointer hover:text-ochre transition-colors duration-300">
                &copy; 2025 Nomads Ridge Safaris. All rights reserved. | License No: KTB/OP/000456
              </p>
            </TripleClickPrompt>
            <div className="flex items-center gap-4 text-dust/50 text-sm">
              <Link href="/sitemap" className="hover:text-ochre transition-colors">
                Sitemap
              </Link>
              <span>|</span>
              <Link href="/accessibility" className="hover:text-ochre transition-colors">
                Accessibility
              </Link>
              <span>|</span>
              <Link href="/cookies" className="hover:text-ochre transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
