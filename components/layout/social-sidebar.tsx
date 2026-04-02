'use client'

import React from "react"

import Link from 'next/link'
import { Instagram, Facebook, Twitter, MessageCircle, Mail } from 'lucide-react'

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

export function SocialSidebar() {
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/nomadsridgesafaris',
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/nomadsridgesafaris',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/254714703892',
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ]

  return (
    <aside className="fixed right-0 top-1/3 z-40 hidden lg:flex flex-col items-center gap-6 py-8 pr-4">
      {/* Social Links */}
      <div className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-700 text-white hover:bg-amber-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Vertical Divider */}
      <div className="w-1 h-12 bg-gradient-to-b from-amber-700 to-transparent"></div>

      {/* Enquire Now CTA */}
      <Link
        href="/contact"
        className="writing-mode-vertical flex items-center justify-center px-2 py-4 bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-110"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
      >
        Enquire Now
      </Link>
    </aside>
  )
}
