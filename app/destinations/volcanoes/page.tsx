import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function VolcanoesPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2a] via-[#0d1515] to-[#0d0a04]" />

        {/* Volcanic peaks */}
        <div className="absolute top-8% left-38% w-96 h-80 opacity-25">
          <svg viewBox="0 0 300 280" fill="none" className="w-full h-full">
            <path d="M30,240 Q50,120 70,40 Q100,120 120,240 Z" fill="#1a2030" opacity="0.7"/>
            <path d="M140,240 Q160,130 180,50 Q210,130 230,240 Z" fill="#1a2030" opacity="0.8"/>
            <path d="M250,240 Q270,140 290,60 L310,240 Z" fill="#1a2030" opacity="0.75"/>
          </svg>
        </div>

        {/* Sun glow */}
        <div className="absolute top-10% right-30% w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_70%)] animate-pulse" />

        {/* Mist layers */}
        <div className="absolute top-35% left-0 right-0 h-[160px] bg-gradient-to-b from-[rgba(150,140,120,0.15)] to-transparent animate-pulse" />

        {/* Horizon SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.55)" d="M0,240 C120,220 200,160 340,145 C440,135 500,175 640,162 C760,150 820,100 960,88 C1080,78 1150,130 1260,120 C1340,113 1400,95 1440,98 L1440,400 L0,400 Z"/>
            <rect x="120" y="180" width="6" height="220" fill="#1a0e06"/>
            <ellipse cx="123" cy="120" rx="85" ry="28" fill="#1a0e06" opacity="0.9"/>
            <ellipse cx="1150" cy="280" rx="35" ry="22" fill="#1a0e06" opacity="0.7"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Rwanda <span className="text-ochre">›</span> Volcanoes
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Volcanoes<br/><em className="text-[#8a6a9c] not-italic">National Park</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Rwanda, Central Africa · 160 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Where Dian Fossey studied our closest relatives, where five volcanoes pierce the clouds, and where mountain gorillas still live as they have for millennia."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 1,900+ trekkers</div>
            </div>
            <div className="bg-dusk/80 border border-[#8a6a9c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$3,600</div>
              <div className="text-[0.68rem] opacity-40">per person</div>
              <div className="text-[0.68rem] text-[#8a6a9c] opacity-45 mt-2">↓ Scroll to see what's included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="bg-dusk py-28 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[0.68rem] tracking-[0.38em] uppercase text-[#8a6a9c] mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-[#8a6a9c]"></span>
            Why this place changes you
            <span className="w-10 h-px bg-[#8a6a9c]"></span>
          </div>
          <p className="font-serif text-4xl font-light italic leading-relaxed mb-10 text-dust">
            In the Virunga Mountains, where five volcanoes create an otherworldly landscape, the pioneering primatologist Dian Fossey spent 13 years. She showed the world that mountain gorillas are <em className="text-ochre not-italic">not monsters</em> — they are individuals, with personality, grief, and love.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            Walking through misty rainforest in Rwanda's Volcanoes National Park, following a family of mountain gorillas, you understand what Fossey understood. You see intelligence in those eyes. You recognize kinship. And everything changes.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#1a1a2a] to-[#2a1a3a]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(138,106,156,0.5),rgba(138,106,156,0.2),transparent_55%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#8a6a9c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#8a6a9c] leading-none">5</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Volcanic peaks</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#8a6a9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#8a6a9c]"></span>
              Why Volcanoes
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Dian Fossey's <em className="text-ochre not-italic">legacy</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Volcanoes National Park sits on the exact landscape where primatologist Dian Fossey conducted her groundbreaking research. Her discoveries revolutionized how we understand gorilla society. Her legacy continues here.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The five Virunga volcanoes", desc: "Karisimbi, Bisoke, Muhabura, Gahinga, and Sabyinyo — five volcanic peaks that pierce the clouds and frame the park's otherworldly landscape." },
                { num: "02", title: "Dian Fossey's research site", desc: "The Karisoke Research Centre, founded by Fossey in 1967, still operates. Walk the trails where she worked, learn about her discoveries, understand her revolutionary insights." },
                { num: "03", title: "Mountain gorillas in their home", desc: "Roughly 400 mountain gorillas live in the Virunga range. Volcanoes National Park protects a significant portion. Trekking here directly supports their conservation." },
                { num: "04", title: "Golden monkeys & rare species", desc: "Beyond gorillas, Volcanoes hosts golden monkeys, buffalo, elephants, and forest antelope. The park is a biodiversity hotspot on the Albertine Rift." }
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[2rem_1fr] gap-5 pb-8 border-b border-dust/6">
                  <div className="font-serif text-3xl font-light text-[#8a6a9c] opacity-50 text-right">{item.num}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#8a6a9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#8a6a9c]"></span>
              What You'll Experience
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Four days on <em className="text-ochre not-italic">volcanic slopes</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Volcanoes offers both gorilla trekking and unique experiences — volcano hikes, golden monkey tracking, and deep cultural immersion in the heart of Rwanda.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Day 1-2", title: "Gorilla Trekking", desc: "Trek through misty rainforest to find habituated gorilla families. The forest is lush, the experience visceral. One hour with a family of gorillas in their natural habitat.", detail: "2-4 hour hike · 1 hour with gorillas", color: "from-[#1a1a2a] to-[#0d0804]" },
              { tag: "Day 2", title: "Golden Monkey Tracking", desc: "Rwanda's exclusive golden monkeys live on volcanic slopes. These rare primates are found only in the Virunga range. Track them through montane forest in smaller, more intimate groups.", detail: "2-3 hour hike · Endemic species", color: "from-[#1a0a0a] to-[#3a2a10]" },
              { tag: "Day 3", title: "Mount Bisoke Volcano Trek", desc: "Hike to the summit of Mount Bisoke (3,711m), one of the park's five volcanoes. The climb is moderate but rewarding — views of Rwanda, Uganda, and the DRC unfold below.", detail: "6 hour hike · Crater lake summit", color: "from-[#1a2a3a] to-[#0d1515]" },
              { tag: "Evening", title: "Karisoke Research Centre", desc: "Visit the research centre founded by Dian Fossey. Learn about her life's work, her discoveries about gorilla society, and the ongoing conservation efforts on her legacy.", detail: "Historical significance", color: "from-[#1a1a1a] to-[#1a0a08]" },
              { tag: "Day 4", title: "Culture & Community", desc: "Visit a local Rwandan village. Engage with communities living alongside the park. Learn how conservation and community benefit work together in Rwanda.", detail: "Community-based tourism", color: "from-[#0a0808] to-[#2a1a08]" },
              { tag: "Nightly", title: "Montane Forest Night", desc: "Experience the sounds of the volcanic forest at night. The calls, the humidity, the energy of the montane ecosystem in darkness.", detail: "Optional evening walks", color: "from-[#050505] to-[#0d0804]" }
            ].map((exp, i) => (
              <div key={i} className="bg-bark/70 border border-dust/7 overflow-hidden hover:border-[#8a6a9c]/40 transition-all hover:-translate-y-1">
                <div className={`h-48 relative bg-gradient-to-br ${exp.color} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-dusk/85 border border-[#8a6a9c]/40 text-[0.58rem] tracking-[0.2em] uppercase text-[#8a6a9c] px-3 py-1 backdrop-blur-sm">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#8a6a9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#8a6a9c]"></span>
              Wildlife You'll Encounter
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Virunga's <em className="text-ochre not-italic">mountain primates</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Volcanoes is Rwanda's premier primate destination. Mountain gorillas, golden monkeys, and forest inhabitants found nowhere else on Earth.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#8a6a9c]">~100</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Park gorillas</div></div>
              <div><div className="font-serif text-4xl font-light text-[#8a6a9c]">5</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Volcanic peaks</div></div>
              <div><div className="font-serif text-4xl font-light text-[#8a6a9c]">Endemic</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Golden monkeys</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#8a6a9c]/8 border border-[#8a6a9c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#8a6a9c] text-center">🦍 Virunga Primates</div>
            {[
              { emoji: "🦍", name: "Mountain Gorilla", note: "~100 in park · habituated families", check: "✓ Guaranteed" },
              { emoji: "🐒", name: "Golden Monkey", note: "Endemic · volcanic slopes only", check: "✓ Very common" },
              { emoji: "🐵", name: "Black Colobus", note: "Forest canopy monkeys", check: "✓ Common" },
              { emoji: "🦁", name: "African Buffalo", note: "High altitude herds", check: "✓ Occasional" },
              { emoji: "🦌", name: "Forest Antelope", note: "Dense forest habitat", check: "◆ Occasional" },
              { emoji: "🐘", name: "Forest Elephant", note: "Rare · dung trails", check: "◆ Rare" },
              { emoji: "🦅", name: "Mountain Eagle", note: "Volcanic peaks", check: "✓ Common" },
              { emoji: "🦜", name: "Ruwenzori Turaco", note: "Forest canopy bird", check: "✓ Common" },
              { emoji: "🦋", name: "Alpine Butterfly", note: "Montane species", check: "✓ Very common" },
              { emoji: "🐢", name: "Forest Amphibians", note: "Rare species · endemic", check: "◆ Occasional" }
            ].map((animal, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-[#8a6a9c]/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{animal.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{animal.name}</div>
                    <div className="text-[0.68rem] opacity-40">{animal.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-[#8a6a9c] opacity-60">{animal.check}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#8a6a9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#8a6a9c]"></span>
              Your Day by Day
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Four days on <em className="text-ochre not-italic">volcanic slopes.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This comprehensive itinerary includes gorilla trekking, golden monkey tracking, volcano climbing, and deep engagement with Rwanda's culture and conservation efforts.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Kigali → Volcanoes", title: "Into the Mist", desc: "Arrive in Kigali, then drive to Volcanoes National Park (2.5 hours). Check into lodge with views of the volcanic peaks. Afternoon: orientation trek through forest trails. Meet your guides, acclimatize, and prepare for trekking.", tags: ["Road Transfer", "Lodge Check-in", "Orientation Trek", "Guide Meet"] },
              { day: 2, sub: "Full Day · Gorilla Trekking", title: "Face to Face with Giants", desc: "Up before dawn. Trek deep into misty rainforest searching for habituated gorilla families. The forest is alive with sounds. When you find the gorillas — silverbacks, mothers, playful juveniles — spend one precious hour observing them in their element.", tags: ["Pre-dawn Trek", "2-4 Hour Hike", "Gorilla Family", "1 Hour Observation", "Bush Lunch"] },
              { day: 3, sub: "Full Day · Golden Monkeys & Bisoke", title: "Primate Paradise & Volcano Summit", desc: "Morning: Trek to find Rwanda's exclusive golden monkeys on volcanic slopes — smaller, intimate encounters. Afternoon: climb Mount Bisoke (3,711m), one of the five volcanoes. The summit offers a crater lake and views of Rwanda, Uganda, and the DRC.", tags: ["Golden Monkey Trek", "Mount Bisoke Climb", "Crater Lake", "Panoramic Views"] },
              { day: 4, sub: "Departure or Extension · Culture & Karisoke", title: "Legacy & Community", desc: "Morning: visit the Karisoke Research Centre founded by Dian Fossey, understand her revolutionary work on gorilla society. Afternoon: engage with local community, learn about Rwanda's conservation and community partnership model. Transfer to Kigali or onward journey.", tags: ["Karisoke Research Centre", "Dian Fossey Legacy", "Community Visit", "Kigali Return"] }
            ].map((day) => (
              <div key={day.day} className="grid grid-cols-[120px_1fr] border-b border-dust/6 hover:bg-bark/70 transition-colors">
                <div className="py-8 px-6 border-r border-dust/6 flex flex-col items-center justify-center text-center">
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase opacity-40">Day</div>
                  <div className="font-serif text-4xl font-light text-[#8a6a9c] leading-none mt-1">{day.day}</div>
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
