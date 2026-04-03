'use client'

import Link from "next/link"
import Footer from "@/components/layout/footer"

export default function VisaInfo() {
  return (
    <main className="bg-dusk text-dust">
      <div className="pt-32 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="font-serif text-6xl lg:text-7xl font-light mb-6 leading-tight">Visa Information Guide</h1>
          <p className="text-xl text-dust/80 max-w-2xl">
            Everything you need to know about visa requirements for Kenya, Tanzania, Uganda, and Rwanda.
          </p>
        </section>

        {/* Important Note */}
        <div className="bg-ochre/10 border border-ochre/30 p-6 mb-12">
          <p className="text-sm text-dust/80">
            <strong>Important:</strong> Visa requirements change frequently. Always check with your country's embassy or official government resources before traveling. This information is current as of March 2025 and is provided for general guidance only.
          </p>
        </div>

        {/* Kenya */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-6 text-ochre">Kenya</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-dust mb-3">Visa on Arrival</h3>
              <p className="text-dust/80 leading-relaxed mb-3">
                Citizens of most countries can obtain a visa upon arrival at Jomo Kenyatta International Airport (JKIA) in Nairobi. The process is straightforward and typically takes 15-30 minutes.
              </p>
              <ul className="list-disc list-inside text-dust/70 space-y-2 text-sm">
                <li>Cost: 50 USD (exact amount recommended)</li>
                <li>Duration: Tourist visa valid for 90 days</li>
                <li>Required: Passport valid for 6 months beyond travel dates</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-dust mb-3">e-Visa Option</h3>
              <p className="text-dust/80 leading-relaxed mb-3">
                Apply online at www.ecitizen.go.ke before arriving. This streamlines the process and is recommended for travelers who prefer advance approval.
              </p>
              <ul className="list-disc list-inside text-dust/70 space-y-2 text-sm">
                <li>Cost: 50 USD</li>
                <li>Processing: Usually approved within 3-5 days</li>
                <li>Duration: 90-day tourist visa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tanzania */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-6 text-ochre">Tanzania</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-dust mb-3">Visa on Arrival</h3>
              <p className="text-dust/80 leading-relaxed mb-3">
                Available at Julius Nyerere International Airport (Dar es Salaam) and other entry points. Processing usually takes 20-45 minutes.
              </p>
              <ul className="list-disc list-inside text-dust/70 space-y-2 text-sm">
                <li>Cost: 50-100 USD (varies by entry point)</li>
                <li>Duration: 90-day tourist visa</li>
                <li>Required: Passport valid for 6 months minimum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-dust mb-3">e-Visa System</h3>
              <p className="text-dust/80 leading-relaxed mb-3">
                Tanzania offers e-visa through www.immigration.go.tz. Highly recommended for smoother entry.
              </p>
              <ul className="list-disc list-inside text-dust/70 space-y-2 text-sm">
                <li>Cost: 50 USD</li>
                <li>Processing: 1-3 business days</li>
                <li>Valid: 90 days for tourism</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Uganda */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-6 text-ochre">Uganda</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-dust mb-3">Visa Requirements</h3>
              <p className="text-dust/80 leading-relaxed mb-3">
                Most visitors can obtain a visa on arrival at Entebbe International Airport. The process is quick and efficient.
              </p>
              <ul className="list-disc list-inside text-dust/70 space-y-2 text-sm">
                <li>Cost: 50 USD</li>
                <li>Duration: 90-day tourist visa</li>
                <li>Required: Passport valid for at least 6 months</li>
                <li>Payment: USD or local currency accepted</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rwanda */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-6 text-ochre">Rwanda</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-dust mb-3">e-Visa (Recommended)</h3>
              <p className="text-dust/80 leading-relaxed mb-3">
                Rwanda primarily offers e-visas. Apply through www.migration.gov.rw before your trip for the smoothest process.
              </p>
              <ul className="list-disc list-inside text-dust/70 space-y-2 text-sm">
                <li>Cost: 50 USD</li>
                <li>Processing: Typically approved within 24 hours</li>
                <li>Duration: 90-day single-entry visa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-clay/20 pt-12 pb-20 text-center">
          <p className="text-dust/60 mb-6">Need help with visa preparations? Our team can assist with documentation and guidance.</p>
          <Link href="#contact" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
