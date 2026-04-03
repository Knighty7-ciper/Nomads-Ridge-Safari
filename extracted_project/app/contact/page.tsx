'use client'

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Footer from "@/components/layout/footer"
import { useEffect, useRef } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const inquiries = JSON.parse(localStorage.getItem("contactInquiries") || "[]")
    const newInquiry = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString(),
      status: "new",
    }
    inquiries.push(newInquiry)
    localStorage.setItem("contactInquiries", JSON.stringify(inquiries))

    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you within 24 hours.")

    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
    })
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-deep text-dust overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dusk via-dusk to-deep" />

        {/* Safari Scene SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-48 w-full"
          viewBox="0 0 1440 192"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="contactSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d0d10" stopOpacity="0" />
              <stop offset="100%" stopColor="#1a1a1f" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect fill="url(#contactSkyGrad)" width="1440" height="192" />
          <path d="M0 140 Q240 125 480 135 T960 130 T1440 138 L1440 192 L0 192 Z" fill="#15151a" />
          <path d="M0 165 Q360 155 720 160 T1440 158 L1440 192 L0 192 Z" fill="#1a1a1f" />
          <g fill="#0f0f14">
            <path d="M100 165 Q100 145 103 135 Q106 145 106 165 Z" />
            <ellipse cx="103" cy="130" rx="35" ry="15" />
            <path d="M350 168 Q350 150 353 142 Q356 150 356 168 Z" />
            <ellipse cx="353" cy="137" rx="28" ry="11" />
            <path d="M600 166 Q600 148 603 140 Q606 148 606 166 Z" />
            <ellipse cx="603" cy="135" rx="32" ry="13" />
            <path d="M1100 167 Q1100 150 1103 142 Q1106 150 1106 167 Z" />
            <ellipse cx="1103" cy="137" rx="30" ry="12" />
            <path d="M1350 168 Q1350 152 1353 145 Q1356 152 1356 168 Z" />
            <ellipse cx="1353" cy="140" rx="26" ry="10" />
          </g>
        </svg>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span
            className="inline-block text-ochre text-xs tracking-[0.35em] uppercase mb-6 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.1s' }}
          >
            Get In Touch
          </span>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-sand leading-tight mb-6 opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.2s' }}
          >
            Start Your Safari Journey
          </h1>
          <p
            className="text-dust/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease_forwards]"
            style={{ animationDelay: '0.35s' }}
          >
            Our team of safari specialists is ready to help you plan the adventure of a lifetime across East Africa's most breathtaking landscapes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Info */}
            <div
              ref={setRef(0)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <span className="text-ochre/80 text-xs tracking-[0.3em] uppercase mb-4 block">Reach Out</span>
              <h2 className="font-serif text-3xl md:text-4xl text-sand mb-6">We're Here to Help</h2>
              <p className="text-dust/70 leading-relaxed mb-10">
                Whether you're planning your first safari or returning for another wild adventure, our dedicated team is available around the clock to assist you. Every journey begins with a conversation.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-5 p-6 bg-clay/5 border border-clay/20 hover:border-clay/40 transition-colors">
                  <div className="w-14 h-14 bg-ochre/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-sand mb-1">Phone & WhatsApp</h3>
                    <a href="tel:+254714703892" className="text-ochre text-lg hover:text-clay transition-colors">+254 714 703 892</a>
                    <p className="text-sage font-medium mt-1">Available 24/7</p>
                    <a
                      href="https://wa.me/254714703892?text=Hello! I'd like to inquire about your travel services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-sm text-ochre/80 hover:text-ochre transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp anytime
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 p-6 bg-clay/5 border border-clay/20 hover:border-clay/40 transition-colors">
                  <div className="w-14 h-14 bg-ochre/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-sand mb-1">Email</h3>
                    <a href="mailto:nomadsridgesafaris@gmail.com" className="text-ochre text-lg hover:text-clay transition-colors">nomadsridgesafaris@gmail.com</a>
                    <p className="text-sage font-medium mt-1">We respond within 24 hours</p>
                    <p className="text-dust/60 text-sm mt-1">For detailed inquiries and quotes</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-5 p-6 bg-clay/5 border border-clay/20 hover:border-clay/40 transition-colors">
                  <div className="w-14 h-14 bg-ochre/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-sand mb-1">Office Location</h3>
                    <p className="text-dust/80">Nomads Ridge Safaris</p>
                    <p className="text-dust/80">Nairobi, Kenya</p>
                    <p className="text-ochre/80 text-sm mt-1">East Africa</p>
                  </div>
                </div>
              </div>

              {/* Response Banner */}
              <div className="mt-10 bg-gradient-to-r from-clay/10 to-transparent border border-clay/20 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-ochre/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-dust/80">
                    <strong className="text-ochre">Quick Response:</strong> We typically respond within 2-4 hours during business hours, and within 24 hours for all other requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={setRef(1)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="bg-gradient-to-br from-clay/8 to-clay/5 border border-clay/20 p-8 md:p-10">
                <h3 className="font-serif text-2xl text-sand mb-2">Send Us a Message</h3>
                <p className="text-dust/60 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-dust/70 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="w-full bg-dusk/50 border border-clay/30 px-4 py-3 text-sand placeholder:text-dust/40 focus:border-ochre focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-dust/70 mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-dusk/50 border border-clay/30 px-4 py-3 text-sand placeholder:text-dust/40 focus:border-ochre focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-dust/70 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+254 700 000 000"
                        className="w-full bg-dusk/50 border border-clay/30 px-4 py-3 text-sand placeholder:text-dust/40 focus:border-ochre focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-dust/70 mb-2">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => updateFormData("inquiryType", e.target.value)}
                        className="w-full bg-dusk/50 border border-clay/30 px-4 py-3 text-sand focus:border-ochre focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="maasai-mara">Maasai Mara Safari</option>
                        <option value="amboseli">Amboseli National Park</option>
                        <option value="tsavo">Tsavo National Parks</option>
                        <option value="lake-naivasha">Lake Naivasha</option>
                        <option value="gorilla">Mountain Gorilla Trek</option>
                        <option value="custom">Custom Safari</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-dust/70 mb-2">Subject *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => updateFormData("subject", e.target.value)}
                      placeholder="Brief subject of your inquiry"
                      required
                      className="w-full bg-dusk/50 border border-clay/30 px-4 py-3 text-sand placeholder:text-dust/40 focus:border-ochre focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-dust/70 mb-2">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateFormData("message", e.target.value)}
                      placeholder="Tell us about your dream safari - number of travelers, interests, special requirements, questions..."
                      rows={6}
                      required
                      className="w-full bg-dusk/50 border border-clay/30 px-4 py-3 text-sand placeholder:text-dust/40 focus:border-ochre focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ochre text-deep py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ochre/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={setRef(2)}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out px-6 lg:px-12 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-clay/10 via-clay/5 to-clay/10 border border-clay/20 p-12">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-sand mb-4">Prefer to Call?</h3>
            <p className="text-dust/70 mb-6">
              Sometimes a conversation is the best way to plan your adventure.
            </p>
            <a
              href="tel:+254714703892"
              className="inline-flex items-center gap-3 bg-ochre text-deep px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ochre/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +254 714 703 892
            </a>
          </div>
        </div>
      </section>

      {/* Footer Scene */}
      <div className="h-24 relative -mt-8">
        <svg className="absolute bottom-0 left-0 right-0 h-full w-full" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path d="M0 60 Q180 45 360 52 T720 48 T1080 55 T1440 50 L1440 96 L0 96 Z" fill="#0d0d10" />
          <g fill="#0a0a0f">
            <path d="M100 55 Q100 38 103 28 Q106 38 106 55 Z" />
            <ellipse cx="103" cy="25" rx="22" ry="9" />
            <path d="M500 52 Q500 38 503 30 Q506 38 506 52 Z" />
            <ellipse cx="503" cy="27" rx="18" ry="7" />
            <path d="M900 54 Q900 40 903 32 Q906 40 906 54 Z" />
            <ellipse cx="903" cy="29" rx="20" ry="8" />
          </g>
        </svg>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </main>
  )
}
