'use client'

import Link from "next/link"
import Footer from "@/components/layout/footer"

export default function TravelInsurance() {
  return (
    <main className="bg-dusk text-dust">
      <div className="pt-32 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="font-serif text-6xl lg:text-7xl font-light mb-6 leading-tight">Travel Insurance Guide</h1>
          <p className="text-xl text-dust/80 max-w-2xl">
            Comprehensive information about travel insurance for your African safari adventure.
          </p>
        </section>

        {/* Why Insurance Matters */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-6 text-ochre">Why Travel Insurance Matters</h2>
          <div className="bg-clay/5 border border-clay/20 p-8">
            <p className="text-dust/80 leading-relaxed mb-6">
              Travel insurance provides essential protection for your safari adventure. While East Africa is generally safe for tourists, unexpected situations can arise—medical emergencies, trip cancellations, lost luggage, or evacuation needs. Having comprehensive coverage ensures peace of mind and financial protection.
            </p>
            <p className="text-dust/80 leading-relaxed">
              We highly recommend purchasing travel insurance before your trip. Many policies offer affordable coverage that protects your investment and ensures you can receive proper medical care if needed.
            </p>
          </div>
        </section>

        {/* Types of Coverage */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-8 text-ochre">Types of Coverage</h2>
          <div className="space-y-6">
            <div className="border border-clay/20 p-6">
              <h3 className="font-semibold text-dust mb-3 flex items-center gap-2">
                <span className="text-ochre text-2xl">+</span> Medical Coverage
              </h3>
              <p className="text-dust/80 text-sm leading-relaxed">
                Covers emergency medical expenses, doctor visits, hospital stays, and emergency dental treatment. Essential for safari activities in remote areas where medical facilities may be limited.
              </p>
            </div>
            <div className="border border-clay/20 p-6">
              <h3 className="font-semibold text-dust mb-3 flex items-center gap-2">
                <span className="text-ochre text-2xl">+</span> Trip Cancellation & Interruption
              </h3>
              <p className="text-dust/80 text-sm leading-relaxed">
                Reimburses prepaid trip costs if you cancel for covered reasons (illness, injury, death of family member). Protects your safari investment completely.
              </p>
            </div>
            <div className="border border-clay/20 p-6">
              <h3 className="font-semibold text-dust mb-3 flex items-center gap-2">
                <span className="text-ochre text-2xl">+</span> Evacuation & Repatriation
              </h3>
              <p className="text-dust/80 text-sm leading-relaxed">
                Covers emergency medical evacuation from remote safari locations and repatriation to your home country. Critical for remote wildlife areas.
              </p>
            </div>
            <div className="border border-clay/20 p-6">
              <h3 className="font-semibold text-dust mb-3 flex items-center gap-2">
                <span className="text-ochre text-2xl">+</span> Baggage & Delay Coverage
              </h3>
              <p className="text-dust/80 text-sm leading-relaxed">
                Reimburses lost, damaged, or delayed luggage. Also covers purchases if your baggage is delayed, helping you enjoy your safari uninterrupted.
              </p>
            </div>
            <div className="border border-clay/20 p-6">
              <h3 className="font-semibold text-dust mb-3 flex items-center gap-2">
                <span className="text-ochre text-2xl">+</span> Activity Coverage
              </h3>
              <p className="text-dust/80 text-sm leading-relaxed">
                Some policies cover adventure activities. Verify that your safari experiences and activities are included in your coverage.
              </p>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-16 border-b border-clay/20 pb-12">
          <h2 className="font-serif text-4xl font-light mb-8 text-ochre">What to Look For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dust mb-2">Adequate Coverage Limits</h4>
                <p className="text-dust/80 text-sm">Look for medical coverage of at least $100,000 and evacuation coverage of $250,000+</p>
              </div>
              <div>
                <h4 className="font-semibold text-dust mb-2">Pre-Existing Conditions</h4>
                <p className="text-dust/80 text-sm">Understand if your conditions are covered. Some policies have waivers available for nominal fees</p>
              </div>
              <div>
                <h4 className="font-semibold text-dust mb-2">No Age Limits</h4>
                <p className="text-dust/80 text-sm">Ensure seniors and travelers of all ages can purchase full coverage without restrictions</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dust mb-2">Worldwide Coverage</h4>
                <p className="text-dust/80 text-sm">Confirm coverage extends to East Africa and doesn't exclude any countries on your itinerary</p>
              </div>
              <div>
                <h4 className="font-semibold text-dust mb-2">24/7 Emergency Hotline</h4>
                <p className="text-dust/80 text-sm">Essential for urgent situations. Easy to reach multilingual support at any time</p>
              </div>
              <div>
                <h4 className="font-semibold text-dust mb-2">Clear Terms & Exclusions</h4>
                <p className="text-dust/80 text-sm">Read fine print carefully to understand what's covered and what isn't</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-clay/20 pt-12 pb-20 text-center">
          <p className="text-dust/60 mb-6">Questions about insurance for your safari? Our team can help guide your decision.</p>
          <Link href="#contact" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
