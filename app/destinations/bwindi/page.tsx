import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function BwindiPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a08] via-[#0d1515] to-[#0d0a04]" />

        {/* Forest mist */}
        <div className="absolute top-20% left-0 right-0 h-[200px] bg-gradient-to-b from-[rgba(100,150,120,0.2)] to-transparent animate-pulse" />

        {/* Forest canopy SVG */}
        <svg className="absolute top-35% right-28% animate-pulse" width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path d="M10 25 Q20 18 30 25" stroke="rgba(200,220,200,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M45 20 Q52 15 59 20" stroke="rgba(200,220,200,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>

        {/* Forest and mist SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.4)" d="M0,280 C100,260 200,250 350,255 C500,260 550,240 700,235 C850,230 900,260 1100,255 C1250,252 1350,270 1440,268 L1440,400 L0,400 Z"/>
            <rect x="50" y="180" width="4" height="180" fill="#0d2520"/>
            <path d="M50 200 Q55 180 60 200 Q65 180 70 200" fill="#0d2520" opacity="0.8"/>
            <rect x="1300" y="175" width="4" height="185" fill="#0d2520"/>
            <path d="M1300 190 Q1305 170 1310 190 Q1315 170 1320 190" fill="#0d2520" opacity="0.8"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Uganda <span className="text-ochre">›</span> Bwindi
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Bwindi<br/><em className="text-[#6a9c7c] not-italic">Impenetrable Forest</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Uganda, East Africa · 32,000 hectares
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Where the world's rarest primates dwell in misty rainforest — a sanctuary for mountain gorillas and the only place on Earth where you can walk with them face to face."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 1,600+ trekkers</div>
            </div>
            <div className="bg-dusk/80 border border-[#6a9c7c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$3,500</div>
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
            In a misty rainforest deep in southwestern Uganda, a mountain gorilla looks directly at you. Its eyes hold 98% of your DNA. In that moment, you understand that we are not separate from nature — we are part of it.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            Bwindi Impenetrable Forest is home to roughly half of the world's remaining mountain gorillas. This is not a zoo exhibit. This is a creature in its element, and you are the visitor. Every trekking permits funds conservation of this endangered species.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0a1a08] to-[#0d2520]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(106,156,124,0.4),rgba(106,156,124,0.15),transparent_60%),linear-gradient(to_bottom,#0a1a08,#0d0804_60%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#6a9c7c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#6a9c7c] leading-none">~400</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Mountain gorillas</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#6a9c7c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#6a9c7c]"></span>
              Why Bwindi
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Half the world's <em className="text-ochre not-italic">gorillas</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Bwindi is a rainforest sanctuary containing roughly 400 mountain gorillas — nearly half of all that exist on Earth. This is where conservation happens. This is where you help save a species.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "Mountain gorillas — the rarest humans", desc: "At 98% genetically identical to us, mountain gorillas are our closest living relatives. Bwindi holds nearly half the world's population. Every trek supports conservation." },
                { num: "02", title: "Habituated family groups", desc: "Bwindi's gorilla families have been carefully habituated to human presence. You trek with a specific family group, watching them live their daily lives." },
                { num: "03", title: "The misty Impenetrable Forest", desc: "32,000 hectares of dense rainforest, named 'impenetrable' for good reason. The mist, the vegetation, the isolation — this is a world unto itself." },
                { num: "04", title: "120+ mammal species", desc: "Beyond gorillas, Bwindi hosts 120 mammal species, 350 bird species, and 310 butterfly species. It is one of Africa's richest ecosystems." }
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
              Three days of <em className="text-ochre not-italic">primate encounters</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Bwindi rewards patience. The forest is dense, the trails challenging, but when you meet a gorilla family face-to-face, every ache, every step, every moment becomes worth it.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Day 1", title: "The Gorilla Trek", desc: "Hike through dense rainforest searching for your designated family group. The forest is thick, the air humid, the experience primordial. When you find them — mothers, silverbacks, playful juveniles — nothing else matters.", detail: "2-7 hour hike · 1 hour with gorillas", color: "from-[#0a1a08] to-[#0d2520]" },
              { tag: "Day 2", title: "Forest Exploration", desc: "Trek through different trails of the Impenetrable Forest. Look for other primates — chimpanzees, colobus monkeys. Listen to the soundscape of the rainforest. Every creature has a voice here.", detail: "Half-day forest trek", color: "from-[#1a1008] to-[#2a2018]" },
              { tag: "Included", title: "Community Engagement", desc: "Visit a local Batwa community. These indigenous forest people have deep knowledge of Bwindi's ecosystem. Learn about their culture, their relationship with the forest, and conservation efforts.", detail: "Cultural immersion", color: "from-[#0a0808] to-[#2a1a08]" },
              { tag: "Day 3", title: "Birding & Wildlife", desc: "Bwindi hosts 350 bird species and remarkable biodiversity. Specialized guides can help spot rare species. The forest canopy is alive with calls and movement.", detail: "Specialist birding guides", color: "from-[#1a1a1a] to-[#1a0a08]" },
              { tag: "Daily", title: "Rainforest Immersion", desc: "Walking through Bwindi is walking through deep time. The vegetation, the sounds, the humidity — everything immerses you in one of Earth's last true wilderness areas.", detail: "Every step is wonder", color: "from-[#0a1a08] to-[#1a2018]" },
              { tag: "Evening", title: "Forest Night Walk", desc: "After dark, the forest transforms. Nocturnal creatures emerge. Listen to the soundscape, feel the humidity, experience the forest as its residents do.", detail: "Optional evening walk", color: "from-[#050505] to-[#0d0804]" }
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
              Africa's rarest <em className="text-ochre not-italic">rainforest dwellers</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Bwindi is a primate sanctuary. The forest hosts some of Africa's rarest species, many found nowhere else. This is conservation in action.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#6a9c7c]">~400</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Mountain gorillas</div></div>
              <div><div className="font-serif text-4xl font-light text-[#6a9c7c]">350+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#6a9c7c]">120</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Mammal species</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#6a9c7c]/8 border border-[#6a9c7c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#6a9c7c] text-center">🦍 Key Species</div>
            {[
              { emoji: "🦍", name: "Mountain Gorilla", note: "~400 · nearly half of world population", check: "✓ Guaranteed" },
              { emoji: "🐵", name: "Chimpanzee", note: "Forest inhabitants · occasionally seen", check: "◆ Occasional" },
              { emoji: "🐒", name: "Black Colobus", note: "Canopy monkeys", check: "✓ Common" },
              { emoji: "🦝", name: "Giant Forest Hog", note: "Nocturnal forest pig", check: "◆ Occasional" },
              { emoji: "🦌", name: "Forest Duiker", note: "Tiny antelope species", check: "◆ Rare" },
              { emoji: "🐘", name: "Forest Elephant Signs", note: "Dung, trails · rarely seen", check: "◆ Rare" },
              { emoji: "🦅", name: "Shelley's Eagle", note: "Endemic to region", check: "✓ Common" },
              { emoji: "🦚", name: "Great Blue Turaco", note: "Forest canopy bird", check: "✓ Common" },
              { emoji: "🦋", name: "Butterfly Species", note: "310+ species recorded", check: "✓ Very common" },
              { emoji: "🐢", name: "Forest Tortoise", note: "Rainforest resident", check: "◆ Occasional" }
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
              Three days in <em className="text-ochre not-italic">the impenetrable.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Three days in Bwindi allows one full gorilla trek, exploration of other forest zones, and cultural engagement with local communities.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Flight or Road", title: "Enter the Forest", desc: "Arrive in Bwindi region. If flying, take a scenic flight over the Albertine Rift. Check into lodge. Afternoon: nature walk through forest trails to acclimate to the environment. Your guides brief you on gorilla trekking and rainforest safety.", tags: ["Arrival", "Lodge Check-in", "Afternoon Nature Walk", "Pre-Trek Briefing"] },
              { day: 2, sub: "Full Day · The Gorilla Trek", title: "Face to Face", desc: "Up before dawn. Hike deep into the Impenetrable Forest searching for your habituated family group. The trek can take 2-7 hours depending on gorilla location. When you find them, spend one precious hour observing — mothers, babies, the massive silverback. Pure magic.", tags: ["Pre-dawn Start", "Forest Hike", "Gorilla Trek", "1 Hour with Gorillas", "Bush Lunch"] },
              { day: 3, sub: "Departure or Extension", title: "Final Forest Time", desc: "Morning: optional second trek or forest walk. Afternoon: visit Batwa community to learn about indigenous forest knowledge. Late afternoon transfer for onward journey or relaxation before departure.", tags: ["Forest Walks", "Cultural Visit", "Batwa Community", "Transfer Out"] }
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
