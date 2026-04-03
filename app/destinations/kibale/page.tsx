import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function KibalePage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/kibale-forest.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a08] via-[#0d1515] to-[#0d0a04]" />

        {/* Forest canopy */}
        <div className="absolute top-15% left-30% w-96 h-72 opacity-20">
          <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
            <circle cx="20" cy="30" r="20" fill="#0a2010"/>
            <circle cx="50" cy="20" r="30" fill="#0a2010"/>
            <circle cx="80" cy="35" r="25" fill="#0a2010"/>
            <path d="M20 50 L20 120 M50 50 L50 140 M80 60 L80 130" stroke="#0a2010" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Sun glow */}
        <div className="absolute top-12% right-30% w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_70%)] animate-pulse" />

        {/* Canopy birds */}
        <svg className="absolute top-32% right-30% animate-pulse" width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path d="M10 25 Q20 18 30 25" stroke="rgba(200,220,200,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M45 20 Q52 15 59 20" stroke="rgba(200,220,200,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>

        {/* Horizon SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.4)" d="M0,280 C100,260 200,250 350,255 C500,260 550,240 700,235 C850,230 900,260 1100,255 C1250,252 1350,270 1440,268 L1440,400 L0,400 Z"/>
            <rect x="50" y="180" width="4" height="180" fill="#0d2520"/>
            <path d="M50 200 Q55 175 60 200 Q65 175 70 200" fill="#0d2520" opacity="0.8"/>
            <rect x="1300" y="175" width="4" height="185" fill="#0d2520"/>
            <path d="M1300 190 Q1305 165 1310 190 Q1315 165 1320 190" fill="#0d2520" opacity="0.8"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Uganda <span className="text-ochre">›</span> Kibale
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Kibale<br/><em className="text-[#6a9c7c] not-italic">National Park</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Uganda, Central Africa · 766 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "The kingdom of primates — where 1,450 chimpanzees live, where 13 primate species coexist, and where a single forest contains more primates than anywhere else on Earth."
            </p>
            <div className="flex gap-4">
              <a href="#booking" className="bg-clay text-dust px-8 py-3 uppercase text-[0.78rem] tracking-[0.22em] font-medium hover:bg-ochre transition-colors">
                Book This Trek
              </a>
              <a href="#itinerary" className="border border-dust/30 text-dust px-8 py-3 uppercase text-[0.78rem] tracking-[0.22em] hover:border-dust transition-colors">
                See Day by Day
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-6">
              <div className="text-[#e8a020] text-lg tracking-wider mb-1">★★★★★</div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 1,100+ trekkers</div>
            </div>
            <div className="bg-dusk/80 border border-[#6a9c7c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$1,800</div>
              <div className="text-[0.68rem] opacity-40">per person</div>
              <div className="text-[0.68rem] text-[#6a9c7c] opacity-45 mt-2">↓ Scroll to see what's included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="bg-dusk py-28 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[0.68rem] tracking-[0.38em] uppercase text-[#6a9c7c] mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-[#6a9c7c]"></span>
            Why this place changes you
            <span className="w-10 h-px bg-[#6a9c7c]"></span>
          </div>
          <p className="font-serif text-4xl font-light italic leading-relaxed mb-10 text-dust">
            Listen. In Kibale's rainforest, you hear chimpanzees before you see them. The calls rise from the canopy — a sound that echoes across millennia. When you find them, swinging through the trees, you understand that <em className="text-ochre not-italic">we are not separate from nature</em>. We evolved from this.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            Kibale National Park is the world's highest concentration of primates. In this 766 km² rainforest, 13 primate species coexist. It is a testament to nature's biodiversity, and a responsibility to protect it.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0a1a08] to-[#0d2520]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(106,156,124,0.4),rgba(106,156,124,0.15),transparent_60%),linear-gradient(to_bottom,#0a1a08,#0d0804_60%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#6a9c7c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#6a9c7c] leading-none">1,450</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Chimpanzees</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#6a9c7c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#6a9c7c]"></span>
              Why Kibale
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              The primate <em className="text-ochre not-italic">capital</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Kibale is not a gorilla park. It is a chimpanzee and primate sanctuary of extraordinary richness. 1,450 chimpanzees, 13 primate species, and one of Africa's largest contiguous rainforests.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "1,450 chimpanzees — the largest population", desc: "Kibale hosts Uganda's largest chimpanzee population. Habituated groups are tracked daily. You'll hear them before you see them — a sound from deep time." },
                { num: "02", title: "13 primate species in one forest", desc: "Mountain monkeys, colobus, baboons, bush babies, and more. Kibale's primate diversity is unmatched on the continent." },
                { num: "03", title: "Chimpanzee habituation is an art", desc: "Guides have spent years habituating chimps to human presence. This is not a zoo — it is real forest conservation and research in action." },
                { num: "04", title: "The forest is a living research station", desc: "Kibale hosts universities and research teams studying primate behavior, forest ecology, and climate. This is active conservation science." }
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[2rem_1fr] gap-5 pb-8 border-b border-dust/6">
                  <div className="font-serif text-3xl font-light text-[#6a9c7c] opacity-50 text-right">{item.num}</div>
                  <div>
                    <h4 className="font-serif text-xl font-normal mb-1">{item.title}</h4>
                    <p className="text-sm opacity-55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-dusk py-28 px-12" id="experiences">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-20 max-w-xl">
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#6a9c7c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#6a9c7c]"></span>
              What You'll Experience
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Three days of <em className="text-ochre not-italic">primate immersion</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Kibale rewards multiple visits. Each trek reveals different chimps, different behaviors, different moments of connection. Stay for several days and you'll understand the complexity of their social world.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Daily", title: "Chimpanzee Trekking", desc: "Trek through rainforest searching for habituated chimpanzee groups. The experience is visceral — hearing them before seeing them, watching mothers with infants, observing social hierarchies unfold.", detail: "2-5 hour trek · Daily encounters", color: "from-[#0a1a08] to-[#0d2520]" },
              { tag: "Day 2-3", title: "Other Primate Encounters", desc: "Kibale hosts 13 primate species. Red colobus monkeys in the canopy, black-and-white colobus, L'Hoest's monkeys, and elusive nocturnal primates. Each has unique behaviors and ecological roles.", detail: "13 species · Specialist guides", color: "from-[#1a1008] to-[#2a2018]" },
              { tag: "Optional", title: "Chimpanzee Habituation Experience", desc: "For dedicated primate enthusiasts, participate in the actual habituation process — spending time with semi-habituated groups. More challenging, more rewarding, more intimate.", detail: "Advanced trekking option", color: "from-[#0a0808] to-[#2a1a08]" },
              { tag: "Any Time", title: "Forest Night Soundscape", desc: "The rainforest at night is a symphony of sound. Nocturnal primates, insects, amphibians, birds — the forest comes alive differently after dark.", detail: "Optional evening experience", color: "from-[#050505] to-[#0d0804]" },
              { tag: "Daily", title: "Rainforest Immersion", desc: "Walking through Kibale's dense forest is walking through deep complexity. Every trail is different, every turn reveals new ecology. The forest is a living organism.", detail: "Every moment rewarding", color: "from-[#0a1a08] to-[#1a2018]" },
              { tag: "Day 3", title: "Community & Conservation", desc: "Visit research camps, meet field teams studying chimpanzee behavior and ecology. Understand how conservation and research work together. Engage with local communities benefiting from park protection.", detail: "Conservation science", color: "from-[#0a0808] to-[#2a1a08]" }
            ].map((exp, i) => (
              <div key={i} className="bg-bark/70 border border-dust/7 overflow-hidden hover:border-[#6a9c7c]/40 transition-all hover:-translate-y-1">
                <div className={`h-48 relative bg-gradient-to-br ${exp.color} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-dusk/85 border border-[#6a9c7c]/40 text-[0.58rem] tracking-[0.2em] uppercase text-[#6a9c7c] px-3 py-1 backdrop-blur-sm">
                    {exp.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal mb-2">{exp.title}</h3>
                  <p className="text-sm opacity-55 leading-relaxed mb-4">{exp.desc}</p>
                  <div className="text-[0.68rem] tracking-[0.15em] uppercase text-ochre opacity-70 flex items-center gap-2">
                    <span className="w-4 h-px bg-ochre"></span>
                    {exp.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Checklist */}
      <section className="bg-[#100c06] py-28 px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_1.4fr] gap-24 items-start">
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#6a9c7c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#6a9c7c]"></span>
              Wildlife You'll Encounter
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              The world's richest <em className="text-ochre not-italic">primate forest</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Kibale is defined by primates. More primate species in one forest than anywhere else in Africa. It is a living showcase of primate diversity and social complexity.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#6a9c7c]">1,450</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Chimpanzees</div></div>
              <div><div className="font-serif text-4xl font-light text-[#6a9c7c]">13</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Primate species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#6a9c7c]">350+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#6a9c7c]/8 border border-[#6a9c7c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#6a9c7c] text-center">🐵 The 13 Primate Species</div>
            {[
              { emoji: "🦍", name: "Chimpanzee", note: "1,450 · habituated groups", check: "✓ Guaranteed" },
              { emoji: "🐒", name: "Red Colobus", note: "Largest population in Uganda", check: "✓ Very common" },
              { emoji: "🐵", name: "Black & White Colobus", note: "Canopy acrobats", check: "✓ Very common" },
              { emoji: "🦧", name: "L'Hoest's Monkey", note: "Rare endemic species", check: "✓ Common" },
              { emoji: "🐵", name: "Uganda Mangabey", note: "Endemic · forest dweller", check: "�� Common" },
              { emoji: "🦘", name: "Blue Monkey", note: "Mid-canopy dweller", check: "✓ Common" },
              { emoji: "🦝", name: "Baboon", note: "Forest edges", check: "✓ Occasional" },
              { emoji: "🌙", name: "Bush Baby (Galago)", note: "Nocturnal · elusive", check: "◆ Occasional" },
              { emoji: "🦂", name: "Potto", note: "Nocturnal primate · rare", check: "◆ Rare" },
              { emoji: "🦁", name: "Forest Elephant Signs", note: "Trails, dung · rarely seen", check: "◆ Rare" }
            ].map((animal, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-[#6a9c7c]/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{animal.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{animal.name}</div>
                    <div className="text-[0.68rem] opacity-40">{animal.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-[#6a9c7c] opacity-60">{animal.check}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-dusk py-28 px-12" id="itinerary">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-20 max-w-xl">
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#6a9c7c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#6a9c7c]"></span>
              Your Day by Day
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Three days in the <em className="text-ochre not-italic">primate kingdom.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Three days in Kibale allows multiple chimpanzee treks, exploration of other primate species, and understanding of the complex social lives of our closest relatives.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Road or Flight", title: "Enter the Forest Kingdom", desc: "Arrive in Fort Portal region. Transfer to Kibale National Park lodge (1.5 hours). Afternoon: orientation forest walk through Kibale's trails, learning about the ecosystem and preparing for chimpanzee trekking. Your guide will explain chimpanzee behavior and habituation.", tags: ["Arrival", "Lodge Check-in", "Orientation Trek", "Briefing Session"] },
              { day: 2, sub: "Full Day · Chimpanzee Trekking", title: "The Call of the Forest", desc: "Pre-dawn start. Trek through rainforest searching for habituated chimpanzee groups. The forest is alive with sounds — bird calls, insect songs, the rustling of movement. When you hear the pant-hoots, your heart quickens. Finding the chimps — mothers with infants, juveniles playing, the powerful males — is unforgettable.", tags: ["Pre-dawn Trek", "2-5 Hour Hike", "Chimp Encounter", "Bush Breakfast", "All Meals"] },
              { day: 3, sub: "Full Day or Departure · Other Primates", title: "The Diversity of Evolution", desc: "Second chimpanzee trek or explore other primate species — red colobus in the canopy, black-and-white colobus, L'Hoest's monkeys. Each species has evolved different solutions to rainforest life. Optional: visit research camps and community projects supporting conservation. Transfer out or extend stay.", tags: ["Additional Chimp Trek", "Other Primates", "Research Centre", "Conservation Learning"] }
            ].map((day) => (
              <div key={day.day} className="grid grid-cols-[120px_1fr] border-b border-dust/6 hover:bg-bark/70 transition-colors">
                <div className="py-8 px-6 border-r border-dust/6 flex flex-col items-center justify-center text-center">
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase opacity-40">Day</div>
                  <div className="font-serif text-4xl font-light text-[#6a9c7c] leading-none mt-1">{day.day}</div>
                </div>
                <div className="p-8">
                  <div className="text-[0.68rem] tracking-[0.2em] uppercase text-ochre opacity-75 mb-2">{day.sub}</div>
                  <h3 className="font-serif text-2xl font-normal mb-2">{day.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed mb-4">{day.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {day.tags.map((tag) => (
                      <span key={tag} className="border border-dust/12 text-[0.62rem] tracking-[0.15em] uppercase px-3 py-1 opacity-60">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
