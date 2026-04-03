import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function KilimanjaroPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/kilimanjaro-summit.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a] via-[#0d1820] to-[#0d0a04]" />

        {/* Kilimanjaro peak */}
        <div className="absolute top-3% left-42% w-96 h-96 opacity-28">
          <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
            <path d="M20,280 L100,80 L150,20 L200,80 L280,280 Z" fill="#1a2030" opacity="0.8"/>
            <path d="M140,20 L150,40 L140,50 L150,40 Z" fill="#ffffff" opacity="0.95"/>
            <path d="M145,30 Q150,22 155,30" fill="#ffffff" opacity="0.8"/>
          </svg>
        </div>

        {/* Sun glow */}
        <div className="absolute top-10% left-45% w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_70%)] animate-pulse" />

        {/* Clouds */}
        <div className="absolute top-40% left-0 right-0 h-[140px] bg-gradient-to-b from-[rgba(200,150,120,0.15)] to-transparent animate-pulse" />

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
              Nomads Ridge Safaris <span className="text-ochre">›</span> Tanzania <span className="text-ochre">›</span> Kilimanjaro
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Mount<br/><em className="text-[#4a7c9c] not-italic">Kilimanjaro</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Tanzania, East Africa · 5,895m Summit
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "The roof of Africa — where five distinct climate zones stack above the clouds, and where ordinary people accomplish extraordinary things."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 2,800+ trekkers</div>
            </div>
            <div className="bg-dusk/80 border border-[#4a7c9c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$3,200</div>
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
            Kilimanjaro is not a technical climb. But standing at 5,895 metres above the world, with Africa spread beneath you and the curvature of the Earth visible above, you understand why it transforms people.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            In seven days, you climb through five distinct climate zones — from tropical rainforest to barren arctic summit. You walk through worlds. And when you reach Uhuru Peak, you've accomplished something that ordinary people accomplish. Which makes it extraordinary.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0d1820] to-[#1a2a3a]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_25%,rgba(74,124,156,0.5),rgba(74,124,156,0.2),transparent_50%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#4a7c9c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#4a7c9c] leading-none">5,895m</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Africa's highest peak</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Why Kilimanjaro
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Africa's roof <em className="text-ochre not-italic">within reach</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Kilimanjaro is not technically difficult. It is accessible to anyone in reasonable fitness. What makes it transformative is the scale, the pace, and the moment you touch the summit.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "Five climatic zones in seven days", desc: "Tropical rainforest, montane forest, alpine grassland, alpine desert, and arctic summit. You experience Africa's entire vertical geography." },
                { num: "02", title: "Uhuru Peak — the roof of Africa", desc: "At 5,895m, Uhuru Peak is the continent's highest point. Non-technical. Achievable. Life-changing. The sunrise from the summit is unlike any other." },
                { num: "03", title: "The Rongai Route — the quietest path", desc: "Seven established routes lead to the summit. Rongai is the least crowded, crossing the remote northern face. Wildlife sightings en route." },
                { num: "04", title: "Altitude management done right", desc: "Our pacing strategy maximizes acclimatization and summit success. We climb high, sleep low. Most climbers reach Uhuru Peak with us." }
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
              Seven days <em className="text-ochre not-italic">climbing through worlds</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This trek is a vertical journey through Africa's entire climate spectrum. Each camp is higher, the air thinner, and the views more extraordinary.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Days 1-2", title: "Rainforest & Montane Forest", desc: "Start at 1,950m in tropical forest. The canopy is dense, the trail winds through ferns and moss. By day two, the forest opens to more sparse montane woodland.", detail: "Gentle acclimatization", color: "from-[#0a1a18] to-[#0d2520]" },
              { tag: "Day 3", title: "Alpine Grassland", desc: "Cross into alpine grassland with views of Mount Mawenzi to the east. The landscape opens. The air begins to thin. Mountains appear on the horizon.", detail: "3,500m elevation", color: "from-[#1a2010] to-[#2a3020]" },
              { tag: "Day 4-5", title: "Alpine Desert", desc: "Enter the barren landscape above the clouds. The air is thin, the sun intense. This is where altitude becomes real. Rest, hydrate, acclimatize.", detail: "Altitude challenges begin", color: "from-[#3a2a10] to-[#4a3a20]" },
              { tag: "Day 6", title: "The Summit Night", desc: "Leave camp at midnight. Climb by headlamp through the darkness toward Uhuru Peak. The arc of the Earth becomes visible. Reach the summit at sunrise.", detail: "The defining moment", color: "from-[#0a0818] to-[#0d0804]" },
              { tag: "Day 7", title: "The Crater Rim Walk", desc: "From Uhuru Peak, walk the crater rim before descending. Kibo's crater unfolds beneath you — a moonscape of volcanic rock and ice.", detail: "Walking the summit plateau", color: "from-[#1a1a2a] to-[#0d0a0a]" },
              { tag: "Days 7-8", title: "Descent & Recovery", desc: "Descend rapidly to lower elevations. The air thickens, the forest returns. Celebrate at base camp with your porters and guides.", detail: "Celebrations await", color: "from-[#1a2010] to-[#2a3020]" }
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
              The Climb Profile
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Vertical <em className="text-ochre not-italic">geography</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Kilimanjaro's unique appeal is its variety. In seven days, you ascend through five distinct climate zones, each with unique flora, fauna, and challenges.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">7</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Days to summit</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">5</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Climate zones</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">85%</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Summit success</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#4a7c9c]/8 border border-[#4a7c9c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#4a7c9c] text-center">🏔️ Climate Zones</div>
            {[
              { emoji: "🌴", name: "Tropical Rainforest", note: "1,950–2,800m · Dense vegetation", check: "Day 1-2" },
              { emoji: "🌲", name: "Montane Forest", note: "2,800–3,700m · Ferns & moss", check: "Day 2-3" },
              { emoji: "🌾", name: "Alpine Grassland", note: "3,700–4,400m · Open views", check: "Day 3-4" },
              { emoji: "🏜️", name: "Alpine Desert", note: "4,400–5,100m · Sparse vegetation", check: "Day 4-5" },
              { emoji: "❄️", name: "Arctic Summit", note: "5,100–5,895m · Rock & ice", check: "Day 6" },
              { emoji: "🦁", name: "Wildlife", note: "Buffaloes, monkeys, birds", check: "Lower slopes" },
              { emoji: "🐘", name: "Elephant Signs", note: "Dung & trails · Not usually seen", check: "Rainforest zone" },
              { emoji: "🦅", name: "Alpine Birds", note: "Eagles, augur buzzards, ravens", check: "All elevations" },
              { emoji: "🌡️", name: "Temperature Range", note: "-20°C summit to +25°C base", check: "Varies daily" },
              { emoji: "⭐", name: "Sunset from Summit", note: "Curvature visible · Magical", check: "Day 6 morning" }
            ].map((item, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-[#4a7c9c]/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{item.name}</div>
                    <div className="text-[0.68rem] opacity-40">{item.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-[#4a7c9c] opacity-60">{item.check}</div>
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
              Eight days <em className="text-ochre not-italic">climbing to the roof of Africa.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">The Rongai Route approaches from the north, winding through less-crowded terrain with opportunities for wildlife sightings and pristine mountain views.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Rongai Gate · Simba Camp", title: "Into the Forest", desc: "Start at Rongai Gate (1,950m) and trek into the tropical rainforest. The trail winds through dense vegetation, birdsong surrounds you, and the mountain looms above. Arrive at Simba Camp (2,650m) for your first night. Elevation: gentle, perfect for acclimatization.", tags: ["Rainforest Trail", "Wildlife Viewing", "Easy Pace", "Acclimatization Begins"] },
              { day: 2, sub: "Simba to Second Cave", title: "Montane Forest Opens", desc: "Continue climbing through montane forest as the canopy opens. Views of Mount Mawenzi appear. The second cave camp sits at 3,450m in a more open landscape. The trail is steady but the air begins to thin. Rest here — this is where altitude matters.", tags: ["Montane Forest", "Mawenzi Views", "Mid-pace Trek", "Altitude Training"] },
              { day: 3, sub: "Second Cave to Kibo Hut", title: "Into the Open", desc: "Leave the forest behind and enter alpine grassland. The views expand in every direction. By afternoon, you reach Kibo Hut (4,700m) on the south side of Kibo. Spend the afternoon and evening resting, hydrating, and mentally preparing for summit night.", tags: ["Alpine Grassland", "Panoramic Views", "Altitude Reaches 4,700m", "Pre-Summit Rest"] },
              { day: 4, sub: "Rest Day · Acclimatization", title: "The Climb High, Sleep Low Day", desc: "Today's hike goes up then back down — a crucial acclimatization technique. Trek to Stella Point (5,685m) and return to Kibo Hut. You ascend 1,000m and descend back, allowing your body to adjust without sleeping at extreme altitude. Spend the evening preparing gear.", tags: ["Acclimatization Climb", "Stella Point", "Return to Kibo", "Summit Prep"] },
              { day: 5, sub: "Rest & Preparation", title: "Mental Preparation", desc: "Rest at Kibo Hut. Check all gear, test flashlights, ensure shoes are comfortable. The guides will do a final briefing. Early dinner, then try to sleep. Summit night begins at midnight.", tags: ["Final Preparations", "Equipment Check", "Early Dinner", "Pre-Summit Night"] },
              { day: 6, sub: "Kibo Hut → Uhuru Peak → Mweka Camp", title: "Midnight to the Roof of Africa", desc: "Leave Kibo at midnight. Climb by headlamp in a steady pace through the alpine desert. The air is thin. Focus on breathing. Around dawn, reach Stella Point (5,685m) on the crater rim. Watch the sun rise as you touch the peak. Descend to Mweka Camp (3,100m) — a long, rewarding day.", tags: ["Summit Night", "Uhuru Peak", "5,895m Achieved", "Crater Rim Walk"] },
              { day: 7, sub: "Mweka Camp → Mweka Gate", title: "Down to the World", desc: "Descend through the forest back to Mweka Gate. The air thickens, the landscape becomes lush. Arrive at the gate where certificates are presented and porters are celebrated. The mountain is behind you. The sense of achievement is overwhelming.", tags: ["Forest Descent", "Mweka Gate", "Certification", "Celebration"] },
              { day: 8, sub: "Departure & Rest", title: "Recovery Day in Moshi", desc: "Transfer to Moshi for rest and recovery. Enjoy hot showers, real food, and the reality of what you've accomplished. Many climbers spend a final night here before heading to Tanzania's next adventure — a safari on the plains below.", tags: ["Transfer to Moshi", "Rest Day", "Hot Shower", "Celebration Dinner"] }
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
