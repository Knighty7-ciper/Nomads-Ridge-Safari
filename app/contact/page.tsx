'use client'

import { useState } from 'react'
import Footer from '@/components/layout/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    travelers: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store in localStorage
    const inquiries = JSON.parse(localStorage.getItem('contactInquiries') || '[]')
    inquiries.push({ ...formData, timestamp: new Date().toISOString() })
    localStorage.setItem('contactInquiries', JSON.stringify(inquiries))
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', destination: '', dates: '', travelers: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="bg-dusk">
      {/* Hero */}
      <section className="hero relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-dusk to-bark opacity-90" />
        <div className="relative z-10 text-center px-8 max-w-2xl">
          <p className="text-ochre uppercase text-xs tracking-widest mb-6 opacity-70">Get in Touch</p>
          <h1 className="font-serif text-6xl lg:text-7xl font-light mb-6 text-dust">Plan Your Safari</h1>
          <p className="text-xl opacity-80">
            Ready to experience Africa's most incredible wildlife and landscapes? Let&apos;s start planning your dream safari today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-4xl font-light mb-8">Book Your Safari</h2>

              {submitted && (
                <div className="mb-8 p-6 bg-green-900/30 border border-green-600/50 text-green-200 rounded">
                  Thank you! We&apos;ve received your inquiry and will contact you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust placeholder-dust/40 focus:border-clay focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust placeholder-dust/40 focus:border-clay focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust placeholder-dust/40 focus:border-clay focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2">Preferred Destination</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust focus:border-clay focus:outline-none transition-colors"
                  >
                    <option value="">Select a destination</option>
                    <option value="maasai-mara">Masai Mara</option>
                    <option value="lake-naivasha">Lake Naivasha</option>
                    <option value="amboseli">Amboseli National Park</option>
                    <option value="tsavo">Tsavo National Park</option>
                    <option value="combination">Combination / Custom</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium mb-2">Preferred Dates</label>
                    <input
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust placeholder-dust/40 focus:border-clay focus:outline-none transition-colors"
                      placeholder="e.g., June 2025 or Flexible"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust focus:border-clay focus:outline-none transition-colors"
                    >
                      <option value="">Select number</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-8">5-8 People</option>
                      <option value="8+">8+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium mb-2">Message & Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-dust/20 text-dust placeholder-dust/40 focus:border-clay focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your safari dreams, budget, or any special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-clay hover:bg-ochre text-deep font-semibold uppercase tracking-widest transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-2xl font-light mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-ochre mb-1">Phone</p>
                    <a href="tel:+254700000000" className="text-lg hover:text-ochre transition-colors">
                      +254 (700) 000-000
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-ochre mb-1">Email</p>
                    <a href="mailto:info@nomaadsridgesafaris.com" className="text-lg hover:text-ochre transition-colors">
                      info@nomaadsridgesafaris.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-ochre mb-1">Office Location</p>
                    <p className="text-lg">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-light mb-4">Response Time</h3>
                <p className="opacity-80 leading-relaxed">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, please call our direct line above.
                </p>
              </div>

              <div className="p-6 bg-clay/10 border border-clay/30 rounded">
                <h3 className="font-serif text-xl font-light mb-3">Why Book With Us?</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>✓ Expert guides with 10+ years experience</li>
                  <li>✓ Personalized safari itineraries</li>
                  <li>✓ Flexible dates and group sizes</li>
                  <li>✓ All-inclusive packages available</li>
                  <li>✓ 24/7 emergency support</li>
                  <li>✓ Money-back guarantee if unsatisfied</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
