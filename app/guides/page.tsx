'use client'

import Footer from "@/components/layout/footer"

export default function Guides() {
  const guides = [
    {
      name: "Samuel Kipchoge",
      role: "Lead Safari Guide",
      experience: "18 years",
      specialization: "Wildlife Photography & Big Five",
      bio: "Expert tracker with encyclopedic knowledge of Maasai Mara. Specializes in lion behavior and predator-prey interactions.",
      certifications: ["KWS Certified", "KATO Licensed", "First Aid Certified"]
    },
    {
      name: "Grace Wanjiro",
      role: "Senior Guide",
      experience: "12 years",
      specialization: "Cultural Immersion & Botany",
      bio: "Deep roots in Maasai community. Bridges travelers and local cultures with authentic storytelling and respect.",
      certifications: ["Guide License", "Cultural Ambassador", "Environmental Conservation"]
    },
    {
      name: "David Mwangi",
      role: "Gorilla Trek Specialist",
      experience: "15 years",
      specialization: "Primate Behavior & Rwanda",
      bio: "Trained primatologist with unmatched experience trekking mountain gorillas in Bwindi and Volcanoes National Parks.",
      certifications: ["Primate Specialist", "Conservation Certified", "Wilderness First Responder"]
    },
    {
      name: "Emily Omondi",
      role: "Naturalist Guide",
      experience: "10 years",
      specialization: "Ornithology & Ecosystems",
      bio: "Bird watching expert who brings the skies alive. Passionate about ecological education and sustainable tourism.",
      certifications: ["Birding Guide", "Ecology Specialist", "Tour Operator License"]
    },
  ]

  return (
    <main className="bg-dusk text-dust">
      <div className="pt-40 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-ochre text-xs uppercase tracking-wider">MEET THE TEAM</span>
          <h1 className="font-serif text-6xl lg:text-7xl font-light leading-tight mt-4">Our Expert Guides</h1>
          <p className="text-dust/70 text-lg mt-6 max-w-3xl">
            The heart of Nomads Ridge Safaris is our passionate team of expert guides. Trained professionals with deep knowledge of African wildlife, ecosystems, and culture. Each brings unique expertise and a genuine love for the wilderness.
          </p>
        </div>

        {/* Why Our Guides Matter */}
        <div className="border-t border-clay/20 pt-12 mb-20">
          <h2 className="font-serif text-4xl font-light text-ochre mb-12">What Sets Our Guides Apart</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl text-ochre mb-4">★</div>
              <h3 className="font-semibold text-dust mb-3">Certified Professionals</h3>
              <p className="text-dust/70 text-sm leading-relaxed">All guides hold official tourism licenses, wildlife certifications, and specialized training in their fields.</p>
            </div>
            <div>
              <div className="text-4xl text-ochre mb-4">★</div>
              <h3 className="font-semibold text-dust mb-3">Local Expertise</h3>
              <p className="text-dust/70 text-sm leading-relaxed">Born and raised in these regions, our guides possess intimate knowledge of terrain, wildlife patterns, and cultural traditions.</p>
            </div>
            <div>
              <div className="text-4xl text-ochre mb-4">★</div>
              <h3 className="font-semibold text-dust mb-3">Safety & Care</h3>
              <p className="text-dust/70 text-sm leading-relaxed">Every guide is trained in wilderness first aid and safety protocols to ensure your comfort and wellbeing.</p>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-light text-ochre mb-12">Meet The Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {guides.map((guide, idx) => (
              <div key={idx} className="border border-clay/30 p-8 hover:border-clay/60 transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-dust mb-1">{guide.name}</h3>
                    <p className="text-ochre text-sm uppercase tracking-wider font-semibold">{guide.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-light text-ochre">{guide.experience}</p>
                    <p className="text-dust/50 text-xs uppercase tracking-wider">Experience</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-dust/60 text-xs uppercase tracking-wider mb-2">Specialization</p>
                  <p className="text-dust font-semibold mb-4">{guide.specialization}</p>
                  <p className="text-dust/70 leading-relaxed text-sm">{guide.bio}</p>
                </div>

                <div>
                  <p className="text-dust/60 text-xs uppercase tracking-wider mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.certifications.map((cert, i) => (
                      <span key={i} className="text-xs bg-clay/10 text-clay px-3 py-1 border border-clay/30">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Selection Process */}
        <div className="bg-clay/5 border border-clay/20 p-12 mb-20">
          <h2 className="font-serif text-3xl font-light text-ochre mb-6">Our Selection Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="font-serif text-3xl font-light text-ochre mb-2">01</p>
              <h4 className="font-semibold text-dust mb-2">Certification</h4>
              <p className="text-dust/70 text-sm">Official tourism and wildlife licenses from government agencies</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-ochre mb-2">02</p>
              <h4 className="font-semibold text-dust mb-2">Experience</h4>
              <p className="text-dust/70 text-sm">Minimum 5+ years in safari guiding or primate tracking</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-ochre mb-2">03</p>
              <h4 className="font-semibold text-dust mb-2">Training</h4>
              <p className="text-dust/70 text-sm">Ongoing conservation education and customer service excellence</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-ochre mb-2">04</p>
              <h4 className="font-semibold text-dust mb-2">Passion</h4>
              <p className="text-dust/70 text-sm">Genuine love for wildlife and commitment to conservation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-clay/20 pt-12">
          <h3 className="font-serif text-3xl font-light text-dust mb-4">Experience Kenya with the Experts</h3>
          <p className="text-dust/70 mb-8">Our guides are ready to show you the real African wilderness</p>
          <a href="/contact" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Book Your Safari
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
