import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function SamburuPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f0f] via-[#1a0e04] to-[#0d0a04]" />

        {/* Sun glow */}
        <div className="absolute top-10% left-35% w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.6),rgba(200,98,42,0.25),transparent_70%)] animate-pulse" />

        {/* Birds */}
        <svg className="absolute top-20% right-32% animate-bounce" width="100" height="50" viewBox="0 0 100 50" fill="none">
          <path d="M5 28 Q16 18 27 28" stroke="rgba(245,237,224,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M38 15 Q50 6 62 15" stroke="rgba(245,237,224,0.45)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M70 32 Q78 25 86 32" stroke="rgba(245,237,224,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>

        {/* Horizon SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.55)" d="M0,210 C90,190 180,120 300,105 C380,95 420,50 520,40 C610,30 640,85 740,75 C840,65 880,15 990,5 C1070,-5 1120,50 1210,40 C1300,30 1360,70 1440,78 L1440,400 L0,400 Z"/>
            <rect x="160" y="160" width="7" height="240" fill="#1a0e06"/>
            <ellipse cx="163" cy="95" rx="110" ry="38" fill="#1a0e06" opacity="0.95"/>
            <rect x="1080" y="185" width="6" height="215" fill="#1a0e06"/>
            <ellipse cx="1083" cy="130" rx="92" ry="30" fill="#1a0e06" opacity="0.9"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Kenya <span className="text-ochre">›</span> Samburu
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Samburu<br/><em className="text-[#c48a2a] not-italic">National Reserve</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Kenya, Northern Region · 165 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Where the Special Five roam — rare species found nowhere else, striped desert elephants, and a landscape as dramatic as it is unforgiving."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 650+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-[#c48a2a]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$1,400</div>
              <div className="text-[0.68rem] opacity-40">per person</div>
              <div className="text-[0.68rem] text-[#c48a2a] opacity-45 mt-2">↓ Scroll to see what's included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="bg-dusk py-28 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[0.68rem] tracking-[0.38em] uppercase text-[#c48a2a] mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-[#c48a2a]"></span>
            Why this place changes you
            <span className="w-10 h-px bg-[#c48a2a]"></span>
          </div>
          <p className="font-serif text-4xl font-light italic leading-relaxed mb-10 text-dust">
            Samburu is where Kenya's northern deserts meet the wild. Here, you don't see the animals you find everywhere else — you see the <em className="text-ochre not-italic">Special Five</em>, species adapted to thrive in one of Africa's harshest landscapes.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            The elephants here are striped with red dust. The giraffes have reticulated patterns unlike any other. The oryx, the gerenuk, the Grevy's zebra — these are the animals that make Samburu different. This is specialist safari country, for travelers who want to go deeper.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#2a1f0f] to-[#3a2818]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(196,138,42,0.5),rgba(200,98,42,0.2),transparent_55%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#c48a2a]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#c48a2a] leading-none">Special 5</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Exclusive species</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c48a2a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c48a2a]"></span>
              Why Samburu
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Africa's rarest<br/><em className="text-ochre not-italic">species</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Samburu is Kenya's most exclusive reserve. It's where you find the "Special Five" — species that exist almost nowhere else. This is safari for adventurers, not tourists.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The Special Five — nowhere else on Earth", desc: "Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, and Somali ostrich. These five species are uniquely adapted to Samburu's arid landscape and found almost nowhere else." },
                { num: "02", title: "Red elephants of the north", desc: "Samburu's elephants are caked in red volcanic dust, giving them a distinctive appearance. They're smaller and more adaptable to desert life than their savanna cousins." },
                { num: "03", title: "Pristine and rarely visited", desc: "Unlike the crowded circuits of southern Kenya, Samburu sees a fraction of visitors. Your game drives are often yours alone — no convoy of vehicles." },
                { num: "04", title: "The Samburu people", desc: "The Samburu warrior culture has protected this land for centuries. Meet them, learn their traditions, and understand why this reserve remains so wild." }
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[2rem_1fr] gap-5 pb-8 border-b border-dust/6">
                  <div className="font-serif text-3xl font-light text-[#c48a2a] opacity-50 text-right">{item.num}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c48a2a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c48a2a]"></span>
              What You'll Experience
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Five days in <em className="text-ochre not-italic">specialist country</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Samburu rewards patience and curiosity. Every drive is a chance to see species you'll find nowhere else on Earth.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Daily", title: "Special Five Tracking", desc: "Find Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, and Somali ostrich. Your guide specializes in locating these rare northern species.", detail: "All drives · Expert guide · High success rate", color: "from-[#2a1f0f] to-[#0d0804]" },
              { tag: "Everywhere", title: "Desert Adaptation", desc: "Watch animals thrive in one of Africa's harshest environments. Everything here is designed for survival in extreme heat and drought.", detail: "Year-round · Daily wildlife", color: "from-[#4a3010] to-[#DAA020]" },
              { tag: "Optional", title: "Helicopter Safari", desc: "See Samburu from above — the reserve's vast expanses, hidden waterholes, and the full scale of the landscape. Sunrise flight available.", detail: "40min flight · Sunrise option · $600pp", color: "from-[#1a2a3a] to-[#0d0804]" },
              { tag: "Day 3", title: "Samburu Warrior Culture", desc: "Visit a traditional Samburu manyatta, meet warriors, learn about pastoralist traditions that have protected this land for centuries.", detail: "Cultural immersion · Community benefit", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Nightly", title: "Desert Sundowners", desc: "Watch the sun set over the Samburu landscape from a rocky outcrop. The sky turns colors you've never seen before.", detail: "Every evening · Open-air · Included", color: "from-[#4a3010] to-[#DAA020]" },
              { tag: "Best Nov-Mar", title: "River Crossings & Cats", desc: "During the dry season, predators gather at the Ewaso Nyiro River. This is peak season for leopard and lion sightings.", detail: "Seasonal · Prime predator time", color: "from-[#1a1a2a] to-[#0d0804]" }
            ].map((exp, i) => (
              <div key={i} className="bg-bark/70 border border-dust/7 overflow-hidden hover:border-[#c48a2a]/40 transition-all hover:-translate-y-1">
                <div className={`h-48 relative bg-gradient-to-br ${exp.color} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-dusk/85 border border-[#c48a2a]/40 text-[0.58rem] tracking-[0.2em] uppercase text-[#c48a2a] px-3 py-1 backdrop-blur-sm">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c48a2a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c48a2a]"></span>
              Wildlife You'll Encounter
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              The rarest <em className="text-ochre not-italic">species list</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Samburu is a specialist's paradise. Every animal here represents adaptation to extreme conditions. You won't see large herds — you'll see the incredible survivors of the desert.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#c48a2a]">Special</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Five species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#c48a2a]">500+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#c48a2a]">60+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Mammal species</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#c48a2a]/8 border border-[#c48a2a]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#c48a2a] text-center">⭐ The Special Five</div>
            {[
              { emoji: "🦓", name: "Grevy's Zebra", note: "Largest wild zebra population", check: "✓ Very common" },
              { emoji: "🦒", name: "Reticulated Giraffe", note: "Unique pattern · Northern form", check: "✓ Very common" },
              { emoji: "🦌", name: "Gerenuk", note: "Long-necked desert gazelle", check: "✓ Very common" },
              { emoji: "🦬", name: "Beisa Oryx", note: "Desert-adapted antelope", check: "✓ Common" },
              { emoji: "🦢", name: "Somali Ostrich", note: "Blue-legged northern form", check: "✓ Common" },
              { emoji: "🐘", name: "Red Elephant", note: "Dust-coated desert elephant", check: "✓ Very common" },
              { emoji: "🦁", name: "African Lion", note: "River territory hunters", check: "✓ Common" },
              { emoji: "🐆", name: "Leopard", note: "Rocky outcrop inhabitants", check: "✓ Common" },
              { emoji: "🦛", name: "Hippopotamus", note: "Ewaso Nyiro River resident", check: "✓ Common" },
              { emoji: "🐊", name: "Nile Crocodile", note: "River guardian", check: "✓ Common" }
            ].map((animal, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-[#c48a2a]/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{animal.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{animal.name}</div>
                    <div className="text-[0.68rem] opacity-40">{animal.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-[#c48a2a] opacity-60">{animal.check}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c48a2a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c48a2a]"></span>
              Your Day by Day
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Five days in the <em className="text-ochre not-italic">northern desert</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is immersive specialist safari. Slow days, deep exploration, focus on finding rare species in harsh terrain.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Nairobi → Samburu", title: "Enter the Desert", desc: "Fly north from Nairobi (3 hours bush flight) or drive (6+ hours) into Kenya's arid north. Land at Samburu and feel the temperature shift. Afternoon game drive along the Ewaso Nyiro River searching for your first Special Five species. Sunset sundowner on a rock outcrop overlooking the reserve.", tags: ["Bush Flight", "Afternoon Drive", "River Wildlife", "Desert Sundowners", "Dinner Included"] },
              { day: 2, sub: "Full Day · Special Five Hunt", title: "The Specialists", desc: "Up at 5:30am for a full day dedicated to finding Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, and Somali ostrich. Your guide knows exactly where these species concentrate. Morning: open savanna search. Afternoon: river area exploration. This is specialist tracking.", tags: ["Pre-dawn Drive", "Bush Breakfast", "All-day Tracking", "River Exploration", "All Meals"] },
              { day: 3, sub: "Samburu Culture Day · Traditions", title: "Warriors & Heritage", desc: "Morning game drive for any Special Five you missed. Afternoon: visit a traditional Samburu manyatta. Meet warriors who have protected these lands. Learn about pastoralist traditions, see inside a traditional home, watch spear demonstrations. Evening: quieter drive as wildlife emerges again.", tags: ["Morning Drive", "Samburu Community", "Cultural Walk", "Warrior Traditions", "Evening Drive"] },
              { day: 4, sub: "Full Day · Hidden Corners", title: "The Rarities", desc: "Explore less-visited areas of Samburu where guides take experienced travelers. Look for desert predators — leopard in rocky outcrops, cheetah on open plains. The Ewaso Nyiro River area is prime for cat sightings in the late afternoon.", tags: ["Full Day Drive", "Predator Tracking", "Remote Safari", "Bush Breakfast", "All Meals"] },
              { day: 5, sub: "Departure Day · Final Morning Safari", title: "Last Light in Samburu", desc: "One final dawn drive — your guide will take you to a favourite spot, perhaps a rocky ridge where eagles gather, or a waterhole where the animals congregate. Late breakfast, then transfer to airstrip for return to Nairobi. You'll be planning your return immediately.", tags: ["Final Dawn Drive", "Farewell Breakfast", "Airstrip Transfer", "Nairobi Connection"] }
            ].map((day) => (
              <div key={day.day} className="grid grid-cols-[120px_1fr] border-b border-dust/6 hover:bg-bark/70 transition-colors">
                <div className="py-8 px-6 border-r border-dust/6 flex flex-col items-center justify-center text-center">
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase opacity-40">Day</div>
                  <div className="font-serif text-4xl font-light text-[#c48a2a] leading-none mt-1">{day.day}</div>
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
