import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function NgorongoroPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a] via-[#0d1820] to-[#0d0a04]" />

        {/* Crater rim */}
        <div className="absolute top-5% left-35% w-96 h-80 opacity-25">
          <svg viewBox="0 0 300 280" fill="none" className="w-full h-full">
            <path d="M20,240 Q80,80 150,20 Q220,80 280,240 Z" fill="#1a2030" opacity="0.8"/>
            <path d="M80,240 Q120,140 150,100 Q180,140 220,240 Z" fill="#0d0a04" opacity="0.9"/>
          </svg>
        </div>

        {/* Sun glow */}
        <div className="absolute top-15% left-40% w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_70%)] animate-pulse" />

        {/* Mist */}
        <div className="absolute bottom-25% left-0 right-0 h-[120px] bg-gradient-to-t from-[rgba(74,124,156,0.15)] to-transparent animate-pulse" />

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
              Nomads Ridge Safaris <span className="text-ochre">›</span> Tanzania <span className="text-ochre">›</span> Ngorongoro
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Ngorongoro<br/><em className="text-[#4a7c9c] not-italic">Crater</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Tanzania, East Africa · 264 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Nature's amphitheater — where 25,000 animals live in an ecosystem contained within the world's largest inactive volcanic caldera, sealed off from the outside world."
            </p>
            <div className="flex gap-4">
              <a href="#booking" className="bg-clay text-dust px-8 py-3 uppercase text-[0.78rem] tracking-[0.22em] font-medium hover:bg-ochre transition-colors">
                Book This Safari
              </a>
              <a href="#itinerary" className="border border-dust/30 text-dust px-8 py-3 uppercase text-[0.78rem] tracking-[0.22em] hover:border-dust transition-colors">
                See Day by Day
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-6">
              <div className="text-[#e8a020] text-lg tracking-wider mb-1">★★★★★</div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 2,100+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-[#4a7c9c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$2,200</div>
              <div className="text-[0.68rem] opacity-40">per person</div>
              <div className="text-[0.68rem] text-[#4a7c9c] opacity-45 mt-2">↓ Scroll to see what's included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="bg-dusk py-28 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[0.68rem] tracking-[0.38em] uppercase text-[#4a7c9c] mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-[#4a7c9c]"></span>
            Why this place changes you
            <span className="w-10 h-px bg-[#4a7c9c]"></span>
          </div>
          <p className="font-serif text-4xl font-light italic leading-relaxed mb-10 text-dust">
            Ngorongoro is not a park you drive through — it is a <em className="text-ochre not-italic">world unto itself</em>. Inside the crater's 600-metre walls live 25,000 animals in a self-contained ecosystem. They have nowhere to go. You have nowhere to look but here.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            This is nature compressed, concentrated, and impossible to avoid. The lion density is extraordinary. The Big Five hunt in a contained space. And the geological grandeur — a caldera 264 km² in area, the world's largest inactive volcanic crater — frames it all in stone and history.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0d1820] to-[#1a2a3a]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_25%,rgba(74,124,156,0.5),rgba(74,124,156,0.2),transparent_50%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#4a7c9c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#4a7c9c] leading-none">25,000</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Animals inside</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Why Ngorongoro
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              The world's <em className="text-ochre not-italic">natural amphitheater</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Ngorongoro is geology meeting ecology. The crater's walls contain 2+ million years of history. The animals inside have nowhere to escape. This concentration creates sightings you'll find nowhere else.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The world's largest inactive volcanic caldera", desc: "264 km² of crater floor, bordered by 600-metre walls. It was formed 2.5 million years ago. This is one of geology's great wonders." },
                { num: "02", title: "A self-contained ecosystem", desc: "25,000+ animals live within the crater's walls. Most never leave. They have evolved in isolation, creating unique behavioral patterns and populations." },
                { num: "03", title: "The highest lion density in Africa", desc: "Over 60 lions live in the crater, organized into five prides. Their concentration is unmatched. You will see lions here — guaranteed." },
                { num: "04", title: "Olduvai Gorge — where humanity began", desc: "Adjacent to the crater, Olduvai Gorge reveals fossils spanning 2+ million years. This is where human evolution was proven." }
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[2rem_1fr] gap-5 pb-8 border-b border-dust/6">
                  <div className="font-serif text-3xl font-light text-[#4a7c9c] opacity-50 text-right">{item.num}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              What You'll Experience
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Three days in a <em className="text-ochre not-italic">natural wonder</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Ngorongoro rewards slow exploration. The crater reveals itself over days, not hours. Every descent is a different experience.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Every Day", title: "The Crater Drive", desc: "Descend the crater floor daily. Each drive is different — the lions move, the herds shift, the light transforms. You're never bored.", detail: "Multiple daily drives", color: "from-[#1a2a3a] to-[#0d0804]" },
              { tag: "Day 1", title: "The Crater Rim Viewpoint", desc: "Before descending, stand on the crater's rim. The view is absolute — 264 km² of contained world spread before you. It's the view that changed geology forever.", detail: "Sunrise viewpoint · Panoramic views", color: "from-[#0d1820] to-[#1a2a3a]" },
              { tag: "Daily", title: "The Lion Guarantee", desc: "Ngorongoro has Africa's highest lion density. 60+ lions in five prides. Seeing lions here is not luck — it's statistics. You will see them.", detail: "Highest lion density in Africa", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Day 2", title: "Olduvai Gorge", desc: "Visit the archaeological site where human evolution was proven. Walk through 2+ million years of Earth's story. This is the birthplace of humanity.", detail: "Guided archaeological tour", color: "from-[#1a1a2a] to-[#0a0a1a]" },
              { tag: "Day 3", title: "Maasai Village Visit", desc: "Meet the Maasai who have lived alongside Ngorongoro's wildlife for centuries. Learn pastoral traditions, see traditional homes, understand the cultural heritage.", detail: "Community-based tourism", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Nightly", title: "Sunset from the Rim", desc: "Return to the crater rim as the sun drops. The light transforms the landscape into gold and shadow. The scale of the crater becomes overwhelming.", detail: "Every evening included", color: "from-[#4a3010] to-[#DAA020]" }
            ].map((exp, i) => (
              <div key={i} className="bg-bark/70 border border-dust/7 overflow-hidden hover:border-[#4a7c9c]/40 transition-all hover:-translate-y-1">
                <div className={`h-48 relative bg-gradient-to-br ${exp.color} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-dusk/85 border border-[#4a7c9c]/40 text-[0.58rem] tracking-[0.2em] uppercase text-[#4a7c9c] px-3 py-1 backdrop-blur-sm">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Wildlife You'll Encounter
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              The enclosed <em className="text-ochre not-italic">Big Five</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Ngorongoro is famous not for variety but for concentration. 25,000 animals in a contained space means guaranteed sightings and behavioral intensity you won't see elsewhere.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">60+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Lions</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">25,000</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Total animals</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">100%</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Guaranteed sightings</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#4a7c9c]/8 border border-[#4a7c9c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#4a7c9c] text-center">🏆 The Crater Big Five</div>
            {[
              { emoji: "🦁", name: "African Lion", note: "60+ in five prides", check: "✓ Guaranteed" },
              { emoji: "🐘", name: "African Elephant", note: "Herds on crater floor", check: "✓ Very common" },
              { emoji: "🐃", name: "African Buffalo", note: "Large herds present", check: "✓ Very common" },
              { emoji: "🐆", name: "Leopard", note: "Crater rim forest", check: "✓ Common" },
              { emoji: "🦏", name: "Black Rhino", note: "Conservation population", check: "◆ Occasional" },
              { emoji: "🦒", name: "Giraffe", note: "Open crater floor", check: "✓ Very common" },
              { emoji: "🦓", name: "Plains Zebra", note: "Grazing herds", check: "✓ Very common" },
              { emoji: "🦛", name: "Hippopotamus", note: "Crater lake & streams", check: "✓ Very common" },
              { emoji: "🐊", name: "Nile Crocodile", note: "Lake Magadi", check: "✓ Common" },
              { emoji: "🦌", name: "Wildebeest", note: "Larger than average", check: "✓ Very common" }
            ].map((animal, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-[#4a7c9c]/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{animal.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{animal.name}</div>
                    <div className="text-[0.68rem] opacity-40">{animal.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-[#4a7c9c] opacity-60">{animal.check}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Your Day by Day
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Three days in <em className="text-ochre not-italic">nature's amphitheater.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is the ideal Ngorongoro experience — enough time to explore the crater thoroughly and understand its scale and significance.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Arusha → Ngorongoro", title: "The Crater Revealed", desc: "Drive from Arusha (2.5 hours) to the Ngorongoro Conservation Area. Check into your lodge with views over the crater. Afternoon: drive to the crater rim and descend to the floor for your first game drive. The scale is overwhelming. That feeling doesn't diminish.", tags: ["Road Transfer", "Crater Rim Viewpoint", "Crater Floor Drive", "Lodge Check-in", "Sunset from Rim"] },
              { day: 2, sub: "Full Day · The Crater Floor", title: "The Concentrated World", desc: "Spend the full day on the crater floor. Morning drive: hunt for lions and elephants. Afternoon: visit Lake Magadi with its hippo population and flamingos. The crater reveals itself in sections. Sunset: return to the rim as light transforms the landscape.", tags: ["Full Day Safari", "Lion Tracking", "Hippo Lake", "Bush Breakfast", "All Meals"] },
              { day: 3, sub: "Departure Day · Olduvai & Maasai", title: "History & Culture", desc: "Morning crater drive for final sightings. Afternoon: visit Olduvai Gorge and walk through 2+ million years of human history. Alternatively, visit a Maasai village to understand the culture protecting this landscape. Late afternoon transfer back to Arusha or onward journey.", tags: ["Final Crater Drive", "Olduvai Gorge", "Maasai Culture", "Arusha Return"] }
            ].map((day) => (
              <div key={day.day} className="grid grid-cols-[120px_1fr] border-b border-dust/6 hover:bg-bark/70 transition-colors">
                <div className="py-8 px-6 border-r border-dust/6 flex flex-col items-center justify-center text-center">
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase opacity-40">Day</div>
                  <div className="font-serif text-4xl font-light text-[#4a7c9c] leading-none mt-1">{day.day}</div>
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
