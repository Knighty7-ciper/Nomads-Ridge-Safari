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
    const inquiries = JSON.parse(localStorage.getItem('contactInquiries') || '[]')
    inquiries.push({ ...formData, timestamp: new Date().toISOString() })
    localStorage.setItem('contactInquiries', JSON.stringify(inquiries))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', destination: '', dates: '', travelers: '', message: '' })
    }, 3000)
  }

  return (
    <main className="bg-dusk text-dust">
      <style>{`
        :root {
          --dust: #e8e4df;
          --clay: #c9a87c;
          --ochre: #d4a853;
          --bark: #8b5e3c;
          --dusk: #1a1a1f;
          --deep: #0d0d10;
          --sand: #f5f0e8;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(13, 13, 16, 0.4) 0%,
            rgba(26, 26, 31, 0.7) 50%,
            #1a1a1f 100%
          );
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-tag {
          display: inline-block;
          color: var(--ochre);
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          color: var(--sand);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease 0.2s forwards;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--dust);
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease 0.4s forwards;
        }

        .contact-card {
          background: rgba(232, 228, 223, 0.1);
          border: 1px solid rgba(201, 168, 124, 0.2);
          padding: 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: rgba(201, 168, 124, 0.5);
          background: rgba(201, 168, 124, 0.05);
        }

        .contact-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--ochre), var(--bark));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 4px;
          font-size: 1.5rem;
        }

        .contact-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          color: var(--sand);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .contact-card p {
          color: var(--dust);
          opacity: 0.8;
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }

        .contact-card a {
          color: var(--ochre);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-card a:hover {
          color: var(--clay);
        }

        .contact-form-section {
          background: linear-gradient(135deg, rgba(201, 168, 124, 0.08), rgba(139, 94, 60, 0.05));
          border: 1px solid rgba(201, 168, 124, 0.2);
          padding: 3rem;
        }

        .form-label {
          display: block;
          color: var(--dust);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(26, 26, 31, 0.6);
          border: 1px solid rgba(201, 168, 124, 0.3);
          color: var(--sand);
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--ochre);
          background: rgba(26, 26, 31, 0.8);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--dust);
          opacity: 0.4;
        }

        .form-select {
          cursor: pointer;
        }

        .form-select option {
          background: var(--dusk);
          color: var(--sand);
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, var(--ochre), var(--bark));
          border: none;
          color: var(--dusk);
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 168, 83, 0.3);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .success-message {
          background: rgba(107, 124, 92, 0.2);
          border: 1px solid rgba(107, 124, 92, 0.5);
          color: var(--sand);
          padding: 1.25rem;
          border-radius: 4px;
          text-align: center;
          margin-bottom: 2rem;
        }

        .map-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, rgba(26, 26, 31, 0.8), rgba(13, 13, 16, 0.9));
          border: 1px solid rgba(201, 168, 124, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          border-radius: 4px;
        }

        .map-pin {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--ochre), var(--bark));
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-dusk to-[#1f1a15]"></div>
        <div className="hero-overlay"></div>
        
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <div className="hero-tag">Get in Touch</div>
          <h1 className="hero-title font-serif">Plan Your Safari Journey</h1>
          <p className="hero-subtitle">Start your African adventure with us. Get expert advice and custom booking assistance.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="text-xs tracking-widest text-ochre uppercase mb-4">Contact Information</div>
            <h2 className="font-serif text-5xl font-light mb-6 text-sand">
              Get in Touch <span className="italic text-ochre">Today</span>
            </h2>
            <p className="text-dust opacity-70 mb-12 text-lg leading-relaxed">
              Our safari experts are ready to help you plan the perfect Kenyan safari experience. Contact us via phone, email, or fill out our booking inquiry form below.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Call Us</h3>
                  <p><a href="tel:+254700123456">+254 700 123 456</a></p>
                  <p><a href="tel:+254800654321">+254 800 654 321</a></p>
                  <p className="text-xs opacity-60 mt-1">Available Mon-Fri, 8am-6pm EAT</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:info@nomaadsridge.com">info@nomaadsridge.com</a></p>
                  <p><a href="mailto:bookings@nomadsridge.com">bookings@nomadsridge.com</a></p>
                  <p className="text-xs opacity-60 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Office</h3>
                  <p>Nomads Ridge Safaris</p>
                  <p>Nairobi, Kenya</p>
                  <p className="text-xs opacity-60 mt-1">East Africa Safari Base</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">⏰</div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-xs opacity-60 mt-1">Sunday: Emergency bookings only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="mb-10">
              <h3 className="font-serif text-3xl text-sand mb-2">Safari Inquiry Form</h3>
              <p className="text-dust opacity-70">Tell us about your dream safari and we'll craft the perfect itinerary.</p>
            </div>

            {submitted && (
              <div className="success-message mb-6">
                ✓ Thank you! We've received your inquiry and will contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Phone & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254..."
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Preferred Destination *</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a destination</option>
                    <option value="maasai-mara">Maasai Mara</option>
                    <option value="lake-naivasha">Lake Naivasha</option>
                    <option value="amboseli">Amboseli</option>
                    <option value="tsavo">Tsavo</option>
                    <option value="multiple">Multiple Destinations</option>
                  </select>
                </div>
              </div>

              {/* Dates & Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Preferred Travel Dates</label>
                  <input
                    type="text"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="e.g., June 2024"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Number of Travelers *</label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    placeholder="How many people?"
                    min="1"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interests, special requests, or any questions..."
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Submit */}
              <button type="submit" className="submit-btn">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="font-serif text-4xl font-light mb-8 text-sand">Visit Our Office</h2>
        <div className="bg-mist border border-opacity-20 border-clay p-8">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h3 className="font-serif text-2xl text-sand">Nairobi Headquarters</h3>
            <span className="text-ochre text-sm tracking-widest">🎯 Main Office</span>
          </div>
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <p className="text-center text-dust opacity-70">Nomads Ridge Safaris, Nairobi, Kenya</p>
            <p className="text-xs text-dust opacity-50">Interactive map coming soon</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
