import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function SerengetiPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a2008] via-[#1a0e04] to-[#0d0a04]" />

        {/* Sun glow */}
        <div className="absolute top-12% right-20% w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.6),rgba(200,98,42,0.25),transparent_70%)] animate-pulse" />

        {/* Birds */}
        <svg className="absolute top-28% right-28% animate-bounce" width="100" height="50" viewBox="0 0 100 50" fill="none">
          <path d="M5 25 Q15 16 25 25" stroke="rgba(245,237,224,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M35 12 Q47 3 59 12" stroke="rgba(245,237,224,0.45)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M68 28 Q76 21 84 28" stroke="rgba(245,237,224,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>

        {/* Horizon SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.55)" d="M0,220 C80,195 150,130 260,115 C330,105 360,62 445,50 C525,38 545,95 630,82 C715,68 748,24 840,12 C905,3 928,58 1005,68 C1082,78 1110,30 1205,20 C1278,13 1340,58 1420,65 L1440,68 L1440,400 L0,400 Z"/>
            <rect x="180" y="170" width="7" height="230" fill="#1a0e06"/>
            <ellipse cx="183" cy="105" rx="105" ry="35" fill="#1a0e06" opacity="0.95"/>
            <rect x="1100" y="200" width="6" height="200" fill="#1a0e06"/>
            <ellipse cx="1103" cy="148" rx="88" ry="28" fill="#1a0e06" opacity="0.9"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Tanzania <span className="text-ochre">›</span> Serengeti
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Serengeti<br/><em className="text-ochre not-italic">National Park</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Tanzania, East Africa · 14,763 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "The endless plains where 1.5 million wildebeest move as one, where the sky is your only limit, and where the name means 'the place where the land runs on forever.'"
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 3,200+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-clay/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$2,800</div>
              <div className="text-[0.68rem] opacity-40">per person</div>
              <div className="text-[0.68rem] text-ochre opacity-45 mt-2">↓ Scroll to see what's included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="bg-dusk py-28 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[0.68rem] tracking-[0.38em] uppercase text-clay mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-clay"></span>
            Why this place changes you
            <span className="w-10 h-px bg-clay"></span>
          </div>
          <p className="font-serif text-4xl font-light italic leading-relaxed mb-10 text-dust">
            The Serengeti is not a place you visit. It is a <em className="text-ochre not-italic">phenomenon</em> you witness. 1.5 million wildebeest moving in unison, 250,000 zebra, hundreds of thousands of gazelle — this is the largest land animal migration on Earth, and it has no equal.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            The name itself — "Serengeti" — means "the place where the land runs on forever." Standing in the middle of 14,763 square kilometres of endless grassland, you understand. The horizon is limitless. The sky dominates. And you are very, very small.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#1a0e04] to-[#2d1a08]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_55%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-clay/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-ochre leading-none">1.5M</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Wildebeest migrate</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-clay"></span>
              Why the Serengeti
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              The greatest <em className="text-ochre not-italic">spectacle</em><br/>on Earth
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              The Serengeti is not just a national park. It is a living, breathing ecosystem of almost unimaginable scale. Every statistic is in millions, every vista is endless, and every moment feels primordial.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The Great Migration — 1.5 million strong", desc: "Every year, 1.5 million wildebeest, 250,000 zebra, and 400,000+ gazelle undertake a 3,000km circular journey. It is the largest land animal migration on the planet." },
                { num: "02", title: "Africa's largest lion population", desc: "The Serengeti hosts the continent's biggest concentration of lions — over 3,000 of them. They rule these plains with undisputed majesty." },
                { num: "03", title: "Endless golden grasslands", desc: "14,763 km² of savanna, grassland, and riverine forest. The landscape transforms through the seasons — from lush green to golden brown to dust." },
                { num: "04", title: "The river crossings", desc: "When the migration reaches the Grumeti River, crocodiles wait. The water churns with chaos and predation. This is nature at its most raw and honest." }
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[2rem_1fr] gap-5 pb-8 border-b border-dust/6">
                  <div className="font-serif text-3xl font-light text-clay opacity-50 text-right">{item.num}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-clay"></span>
              What You'll Experience
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Eight days of <em className="text-ochre not-italic">pure wonder</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">The Serengeti is vast beyond comprehension. These eight days are designed to let you absorb it — and to witness the migration if timing allows.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Included Daily", title: "The Endless Plains", desc: "Drive the golden grasslands in every direction. Lions rest under acacia trees. Cheetahs hunt on open ground. The horizon never ends.", detail: "2× daily · Private 4×4 · Expert guide", color: "from-[#1a1a3a] to-[#0d0804]" },
              { tag: "Jul – Oct", title: "The River Crossing", desc: "The Grumeti River roars with crocodiles waiting for the herds. When thousands of wildebeest plunge into the water, it's one of nature's most violent moments.", detail: "Seasonal · Grumeti River · Extreme sightings", color: "from-[#4a3010] to-[#DAA020]" },
              { tag: "Optional Add-on", title: "Hot Air Balloon Safari", desc: "Rise silently above the Serengeti at dawn. From 300 metres, you see the animals moving below like pieces on a vast board. The scale becomes apparent.", detail: "1hr flight · Champagne breakfast · $500pp", color: "from-[#0a1a2a] to-[#0d0804]" },
              { tag: "Every Day", title: "Big Cat Paradise", desc: "The Serengeti has more lions than any other park. Plus cheetahs hunting in coordinated groups, leopards in riverine forest, hyenas orchestrating kills.", detail: "Africa's largest cat population", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Day 4 Included", title: "Olduvai Gorge", desc: "Visit the site where human evolution was proven. Walk through the exact location where 'Lucy' and her kind walked 2+ million years ago.", detail: "Half-day · Archaeological wonder", color: "from-[#1a0a08] to-[#4a2a10]" },
              { tag: "Every Night", title: "Sundowner on the Savanna", desc: "As the sun drops, drive to a rocky outcrop or kopje. The sky catches fire. Lions roar. The day ends as Africa's greatest days do.", detail: "Nightly · Open-air · Full board", color: "from-[#050518] to-[#0d0804]" }
            ].map((exp, i) => (
              <div key={i} className="bg-bark/70 border border-dust/7 overflow-hidden hover:border-clay/40 transition-all hover:-translate-y-1">
                <div className={`h-48 relative bg-gradient-to-br ${exp.color} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-dusk/85 border border-clay/40 text-[0.58rem] tracking-[0.2em] uppercase text-clay px-3 py-1 backdrop-blur-sm">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-clay"></span>
              Wildlife You'll Encounter
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Africa's greatest <em className="text-ochre not-italic">wildlife show</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              The Serengeti is defined by sheer numbers. Millions of herbivores, thousands of predators, and a predator-prey dynamic that has remained unchanged for millennia.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-ochre">1.5M</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Wildebeest</div></div>
              <div><div className="font-serif text-4xl font-light text-ochre">250K</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Zebra</div></div>
              <div><div className="font-serif text-4xl font-light text-ochre">3,000+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Lions</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-clay/8 border border-clay/15 text-[0.62rem] tracking-[0.25em] uppercase text-clay text-center">🏆 The Big Five</div>
            {[
              { emoji: "🦁", name: "African Lion", note: "3,000+ · largest population", check: "✓ Very common" },
              { emoji: "🐘", name: "African Elephant", note: "Herds across all habitats", check: "✓ Very common" },
              { emoji: "🐃", name: "African Buffalo", note: "Part of the migration", check: "✓ Very common" },
              { emoji: "🐆", name: "Leopard", note: "Riverine forest specialist", check: "✓ Common" },
              { emoji: "🦏", name: "Black Rhino", note: "Conservation breeding area", check: "◆ Occasional" },
              { emoji: "🦒", name: "Giraffe", note: "Multiple subspecies present", check: "✓ Very common" },
              { emoji: "🦓", name: "Plains Zebra", note: "250,000 during migration", check: "✓ Very common" },
              { emoji: "🐆", name: "Cheetah", note: "Plains hunting groups", check: "✓ Common" },
              { emoji: "🦛", name: "Hippopotamus", note: "Grumeti River pools", check: "✓ Common" },
              { emoji: "🐊", name: "Nile Crocodile", note: "River apex predators", check: "✓ Very common" }
            ].map((animal, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-clay/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{animal.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{animal.name}</div>
                    <div className="text-[0.68rem] opacity-40">{animal.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-clay opacity-60">{animal.check}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-clay"></span>
              Your Day by Day
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Eight days. Endless <em className="text-ochre not-italic">horizons.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is the full Serengeti experience — from the southern plains to the northern Maasai Mara border, with timing for the Great Migration.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Arusha → Serengeti South", title: "Enter the Endless Grassland", desc: "Drive from Arusha to the Serengeti's southern Ngorongoro entrance (4.5 hours). Enter the park and immediately encounter the scale of the landscape. Afternoon game drive in the Seronera region. The savanna stretches forever in every direction.", tags: ["Road Transfer", "Park Entry", "Afternoon Drive", "Camp Check-in", "Sundowner"] },
              { day: 2, sub: "Full Day · Southern Plains", title: "The Migration's Starting Ground", desc: "Spend the full day in the Serengeti's golden grasslands. If timing is right (Dec-Mar), witness the migration's birthing grounds — thousands of wildebeest and zebra calves. If visiting Jul-Oct, track the herds in the north. Your guide will know exactly where the action is.", tags: ["Full Day Drive", "Migration Tracking", "Bush Breakfast", "All Meals"] },
              { day: 3, sub: "Serengeti Crossing · Grumeti River", title: "The River of Crocodiles", desc: "Drive north toward the Grumeti River, the site of one of the world's most dramatic wildlife events. If the migration is crossing, witness wildebeest plunging into crocodile-filled water. If not, track predators on the open plains. Either way, the river is a spectacle.", tags: ["River Safari", "Croc Watching", "Migration Tracking", "Dramatic Sightings"] },
              { day: 4, sub: "Olduvai & Serengeti", title: "Where Humans Began", desc: "Visit Olduvai Gorge in the morning — the archaeological site where human evolution was proven. See fossils 2+ million years old. Afternoon: return to the Serengeti for sunset and big cat tracking. The day moves from deep history to living present.", tags: ["Olduvai Gorge", "Archaeological Tour", "Afternoon Drive", "Lion Territory"] },
              { day: 5, sub: "Full Day · Central Serengeti", title: "Big Cats & Endless Plains", desc: "A full day dedicated to finding the Serengeti's legendary lions and cheetahs. The central Seronera region has the highest predator concentration in East Africa. Morning drive, afternoon drive, evening drive — every session is a masterclass in cat behavior.", tags: ["Lion Tracking", "Cheetah Hunts", "Predator Paradise", "All Meals"] },
              { day: 6, sub: "Northern Serengeti · Maasai Mara Border", title: "The Limit of the Migration", desc: "Drive north to the Maasai Mara border region. During migration season (Jul-Oct), watch the herds crossing between Kenya and Tanzania. The landscape becomes even more dramatic — rolling hills, riverine forests, and endless grassland.", tags: ["Migration Crossing", "Northern Plains", "Mara River Area", "Bush Breakfast"] },
              { day: 7, sub: "Wildlife Immersion · Your Choice", title: "Deep Exploration", desc: "Spend the day exactly how you want — focused on predators, following the migration, or simply absorbing the landscape's majesty from a rocky kopje. Your guide will customize based on what wildlife has been most active.", tags: ["Flexible Itinerary", "Predator Tracking", "Landscape Immersion", "Bush Meals"] },
              { day: 8, sub: "Departure Day · Final Morning Safari", title: "One Last Sunset's Rise", desc: "Final dawn drive through the landscape that changed you. Your guide will take you to a favourite vantage point — perhaps a kopje, perhaps the riverbank, perhaps simply into the endless savanna. After breakfast, return to Arusha and your onward journey.", tags: ["Final Dawn Drive", "Farewell Breakfast", "Arusha Return"] }
            ].map((day) => (
              <div key={day.day} className="grid grid-cols-[120px_1fr] border-b border-dust/6 hover:bg-bark/70 transition-colors">
                <div className="py-8 px-6 border-r border-dust/6 flex flex-col items-center justify-center text-center">
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase opacity-40">Day</div>
                  <div className="font-serif text-4xl font-light text-clay leading-none mt-1">{day.day}</div>
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
