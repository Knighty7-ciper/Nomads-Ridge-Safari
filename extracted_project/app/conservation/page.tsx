'use client'

import Footer from "@/components/layout/footer"

export default function Conservation() {
  return (
    <main className="bg-dusk text-dust">
      <div className="pt-40 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-ochre text-xs uppercase tracking-wider">OUR COMMITMENT</span>
          <h1 className="font-serif text-6xl lg:text-7xl font-light leading-tight mt-4">Conservation & Responsibility</h1>
          <p className="text-dust/70 text-lg mt-6 max-w-3xl">
            At Nomads Ridge Safaris, conservation isn't an afterthought—it's the foundation of everything we do. We believe tourism and wildlife protection must go hand in hand.
          </p>
        </div>

        {/* Impact by Numbers */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 border-b border-clay/20 pb-20">
          <div className="text-center">
            <p className="font-serif text-5xl font-light text-ochre mb-2">10%</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Profits to Conservation</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-5xl font-light text-ochre mb-2">500+</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Acres Protected</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-5xl font-light text-ochre mb-2">50+</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Local Jobs Created</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-5xl font-light text-ochre mb-2">1000+</p>
            <p className="text-dust/60 uppercase text-xs tracking-wider">Trees Planted</p>
          </div>
        </div>

        {/* Conservation Pillars */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-light text-ochre mb-12">Our Conservation Pillars</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-ochre pl-8">
              <h3 className="font-serif text-2xl font-light text-dust mb-3">Wildlife Protection</h3>
              <p className="text-dust/70 leading-relaxed mb-4">
                We actively participate in anti-poaching patrols with Kenya Wildlife Service (KWS) and regional conservation organizations. Our partnerships with wildlife protection agencies have helped secure critical habitats and reduce poaching in the Maasai Mara ecosystem.
              </p>
              <p className="text-dust/70 text-sm">
                Through guest contributions and direct donations, we've funded ranger patrols, surveillance equipment, and community compensation programs.
              </p>
            </div>

            <div className="border-l-4 border-ochre pl-8">
              <h3 className="font-serif text-2xl font-light text-dust mb-3">Habitat Restoration</h3>
              <p className="text-dust/70 leading-relaxed mb-4">
                We've invested in reforestation projects across Kenya, Tanzania, Uganda, and Rwanda. Since 2010, Nomads Ridge has planted over 1,000 native trees in degraded areas, creating corridors for wildlife movement and carbon sequestration.
              </p>
              <p className="text-dust/70 text-sm">
                Every safari contributes to ongoing habitat restoration efforts that benefit ecosystems and local communities.
              </p>
            </div>

            <div className="border-l-4 border-ochre pl-8">
              <h3 className="font-serif text-2xl font-light text-dust mb-3">Community Development</h3>
              <p className="text-dust/70 leading-relaxed mb-4">
                We employ 50+ local staff and support community initiatives that provide alternatives to resource extraction. Our partnerships with Maasai communities ensure tourism benefits are shared fairly.
              </p>
              <p className="text-dust/70 text-sm">
                Educational programs, healthcare support, and school funding are prioritized as essential to conservation success.
              </p>
            </div>

            <div className="border-l-4 border-ochre pl-8">
              <h3 className="font-serif text-2xl font-light text-dust mb-3">Responsible Tourism</h3>
              <p className="text-dust/70 leading-relaxed mb-4">
                All our guides follow strict ethical protocols: maintaining wildlife viewing distances, minimal environmental impact, respect for cultural sites, and education over entertainment. We refuse to support unethical animal interactions.
              </p>
              <p className="text-dust/70 text-sm">
                Our low-impact safari practices set industry standards and protect wildlife while creating authentic experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="bg-clay/5 border border-clay/20 p-12 mb-20">
          <h2 className="font-serif text-3xl font-light text-ochre mb-8">Our Partners</h2>
          <p className="text-dust/70 mb-8">We collaborate with leading conservation organizations to maximize impact:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-clay/30 p-6">
              <h4 className="font-semibold text-dust mb-2">Kenya Wildlife Service (KWS)</h4>
              <p className="text-dust/70 text-sm">Government agency protecting Kenya's protected areas and wildlife.</p>
            </div>
            <div className="border border-clay/30 p-6">
              <h4 className="font-semibold text-dust mb-2">African Wildlife Foundation (AWF)</h4>
              <p className="text-dust/70 text-sm">International organization focusing on large ecosystem conservation.</p>
            </div>
            <div className="border border-clay/30 p-6">
              <h4 className="font-semibold text-dust mb-2">Dian Fossey Gorilla Fund</h4>
              <p className="text-dust/70 text-sm">Supporting mountain gorilla research and protection in Rwanda and Uganda.</p>
            </div>
            <div className="border border-clay/30 p-6">
              <h4 className="font-semibold text-dust mb-2">Local Community Groups</h4>
              <p className="text-dust/70 text-sm">Grassroots initiatives led by Maasai, Samburu, and other indigenous communities.</p>
            </div>
          </div>
        </div>

        {/* How Guests Contribute */}
        <div className="border-t border-clay/20 pt-12 mb-20">
          <h2 className="font-serif text-3xl font-light text-ochre mb-12">How Your Safari Helps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-serif text-4xl font-light text-ochre mb-4">✓</p>
              <h4 className="font-semibold text-dust mb-3">Direct Donations</h4>
              <p className="text-dust/70 text-sm">10% of profits go directly to conservation projects and wildlife protection.</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-light text-ochre mb-4">✓</p>
              <h4 className="font-semibold text-dust mb-3">Community Support</h4>
              <p className="text-dust/70 text-sm">Employment for local guides, rangers, and hospitality staff sustains families.</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-light text-ochre mb-4">✓</p>
              <h4 className="font-semibold text-dust mb-3">Advocacy</h4>
              <p className="text-dust/70 text-sm">Your stories inspire others to care about African wildlife and ecosystems.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-clay/10 border border-clay/30 p-12 text-center">
          <h3 className="font-serif text-3xl font-light text-dust mb-4">Be Part of the Solution</h3>
          <p className="text-dust/70 mb-8">Every safari adventure directly contributes to protecting Africa's wild heart for generations to come.</p>
          <a href="/contact" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Join Conservation Efforts
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
