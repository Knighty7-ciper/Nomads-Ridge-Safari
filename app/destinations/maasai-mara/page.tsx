import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function MaasaiMaraPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a2008] via-[#1a0e04] to-[#0d0a04]" />

        {/* Sun glow */}
        <div className="absolute top-12% right-22% w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.55),rgba(200,98,42,0.25),transparent_70%)] animate-pulse" />

        {/* Birds */}
        <svg className="absolute top-28% right-30% animate-bounce" width="100" height="50" viewBox="0 0 100 50" fill="none">
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
              Nomads Ridge Safaris <span className="text-ochre">›</span> Kenya <span className="text-ochre">›</span> Maasai Mara
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Maasai<br/><em className="text-ochre not-italic">Mara</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Kenya, East Africa · 1,510 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "The place where the earth trembles and the sky comes alive — where your children will remember what it means to be small."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 2,400+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-clay/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$2,100</div>
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
            There is a moment — usually at dawn, usually when you're least expecting it — when a thousand wildebeest thunder past your vehicle and the ground <em className="text-ochre not-italic">shakes beneath you</em>, and you realise that some things on this earth are still wild, still ancient, still beyond human control. The Maasai Mara is that moment.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            This is not a zoo. There are no fences. The lions hunt here. The elephants walk where they have always walked. And for five extraordinary days, you walk — carefully, humbly — alongside all of it. The Maasai Mara is the reason people say "Africa changed me." This is the Africa they mean.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#1a0e04] to-[#2d1a08]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_55%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-clay/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-ochre leading-none">Big 5</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">All in one reserve</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-clay"></span>
              Why the Maasai Mara
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              This is <em className="text-ochre not-italic">the one</em><br/>you've dreamed of
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              The Maasai Mara isn't just Kenya's greatest wildlife reserve — it's the benchmark against which every other safari on earth is measured. When people imagine Africa, they imagine this.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The Great Migration passes through here", desc: "From July to October, roughly 1.5 million wildebeest, 200,000 zebra and 300,000 gazelle cross from Tanzania into the Mara. It is the single largest animal migration on the planet." },
                { num: "02", title: "The Big Five — genuinely all five", desc: "Lion, leopard, elephant, buffalo, rhino. The Maasai Mara has healthy populations of all five. Leopard sightings are common here." },
                { num: "03", title: "It is alive at every hour", desc: "Dawn: lions return from the hunt. Midday: hippos jostle. Sunset: elephants cross the plain. Night: hyenas call under 4,000 stars." },
                { num: "04", title: "Your children will never forget this", desc: "We have never met a child who left the Mara unchanged. There is something about a real lion that rewires a young person's sense of wonder permanently." }
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
              Six moments that will <em className="text-ochre not-italic">stay with you</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Each day in the Mara is a full film. Here's what your package includes — and why each one is worth the journey.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Included Daily", title: "Dawn Game Drive", desc: "5:30am. The engine idles as your guide scans the horizon. The lions have been hunting all night. The golden light lasts 45 minutes — every photographer's obsession.", detail: "2× daily · Private 4×4 · Expert guide", color: "from-[#1a1a3a] to-[#0d0804]" },
              { tag: "Jul – Oct", title: "The Great Migration", desc: "Nothing prepares you for the sound of a million hooves. The wildebeest river crossing at Mara River is one of the most violent, beautiful things in nature.", detail: "Seasonal · Mara River crossing point", color: "from-[#4a3010] to-[#DAA020]" },
              { tag: "Optional Add-on", title: "Sunrise Hot Air Balloon", desc: "An hour above the Mara at first light. You see the land as eagles see it. Ends with champagne bush breakfast.", detail: "1hr flight · Champagne breakfast · $450pp", color: "from-[#0a1a2a] to-[#0d0804]" },
              { tag: "Every Day", title: "Big Five Tracking", desc: "Your guide reads animal tracks the way you read text. Every drive is a puzzle your guide solves in real time.", detail: "All 5 species · Year-round · High success rate", color: "from-[#0a1a0a] to-[#4a5020]" },
              { tag: "Day 3 Included", title: "Maasai Village Visit", desc: "Walk into an active village, see inside a Maasai home, watch the warriors dance, and understand why this land has been protected for so long.", detail: "Half-day · Cultural immersion · Village elder guided", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Every Night", title: "Bush Dinner Under the Stars", desc: "No light pollution for 100 kilometres. Dinner under the Milky Way while hyenas call. You'll smile when they do.", detail: "Nightly · Open-air · Full board included", color: "from-[#050518] to-[#0d0804]" }
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
              A checklist your family will <em className="text-ochre not-italic">obsess</em> over
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              The Maasai Mara has the densest concentration of large mammals anywhere in Africa. Print this list. Your kids will spend every drive ticking it off.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-ochre">95+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Mammal species</div></div>
              <div><div className="font-serif text-4xl font-light text-ochre">570+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
              <div><div className="font-serif text-4xl font-light text-ochre">1.5M</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Wildebeest migrate</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-clay/8 border border-clay/15 text-[0.62rem] tracking-[0.25em] uppercase text-clay text-center">🏆 The Big Five</div>
            {[
              { emoji: "🦁", name: "African Lion", note: "900+ resident lions", check: "✓ Very common" },
              { emoji: "🐘", name: "African Elephant", note: "Large herds near Mara River", check: "✓ Very common" },
              { emoji: "🐆", name: "Leopard", note: "Often seen in fig trees", check: "✓ Common" },
              { emoji: "🦏", name: "Black Rhino", note: "Protected conservancy zones", check: "◆ Occasional" },
              { emoji: "🐃", name: "African Buffalo", note: "Large herds throughout", check: "✓ Very common" },
              { emoji: "🐊", name: "Nile Crocodile", note: "Wait at river crossings", check: "✓ Common" },
              { emoji: "🦒", name: "Maasai Giraffe", note: "Tallest subspecies", check: "✓ Very common" },
              { emoji: "🦛", name: "Hippo", note: "Massive pods in Mara River", check: "✓ Very common" },
              { emoji: "🦓", name: "Plains Zebra", note: "200,000+ during migration", check: "✓ Very common" },
              { emoji: "🐩", name: "Wild Dog", note: "Rare — bucket list sighting", check: "◆ Rare" }
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
              Five days. A hundred <em className="text-ochre not-italic">memories.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is exactly what your family will experience, sunrise to sunset, for each day in the Mara.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Nairobi → Maasai Mara", title: "First Sight of the Plains", desc: "Fly from Nairobi (45 min bush flight) or drive through the Great Rift Valley (4.5 hrs scenic). Land on a red dirt airstrip in the middle of nowhere. Afternoon game drive en route to camp. Sundowners on the savanna. Dinner under the stars.", tags: ["Bush Flight", "Afternoon Drive", "Camp Check-in", "Bush Sundowners", "Dinner Included"] },
              { day: 2, sub: "Full Day · Deep into the Reserve", title: "The Hunt & the Herd", desc: "Up at 5:30am. Your guide has been tracking a pride of lions since 4am. Today is a full Big Five day: lion, leopard in a fig tree, a herd of 300 buffalo, elephants at the river, and as the sun drops, a cheetah sprints across the open plain at 110km/h.", tags: ["Dawn Game Drive", "Bush Breakfast", "Big Five Tracking", "River Crossing", "Sunset Drive", "All Meals"] },
              { day: 3, sub: "Optional Balloon Day · Culture Afternoon", title: "Sky & Soul", desc: "Optional: wake at 4:30am for the balloon. Nothing will look like the Mara at first light from 300 metres up. Champagne breakfast in the bush. In the afternoon, visit a Maasai village — meet elder warriors, step inside a traditional home.", tags: ["Hot Air Balloon (opt.)", "Champagne Breakfast", "Maasai Village", "Cultural Immersion", "Evening Drive"] },
              { day: 4, sub: "Conservation Day · Mara River", title: "Where the River Decides", desc: "Spend the full day at the Mara River waiting for a wildebeest crossing. When it happens, thousands of animals plunge into crocodile-filled water in a chaos of instinct. Your guide will brief you on conservation challenges facing the Mara.", tags: ["River Crossing Wait", "Croc Watching", "Conservation Talk", "Hippo Pools", "Sundowners"] },
              { day: 5, sub: "Departure Day · Final Morning Drive", title: "The Last Sunrise", desc: "One final early morning drive — your guide will take you to a special spot for the sunrise. Nobody talks on this drive. Late morning transfer to airstrip. Flight back to Nairobi. You'll be planning your return before you land.", tags: ["Final Dawn Drive", "Farewell Breakfast", "Airstrip Transfer", "Nairobi Connection"] }
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

      {/* What's Included */}
      <section className="bg-[#100c06] py-28 px-12" id="included">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-clay"></span>
            What's Included
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-16">
            Everything you need.<br/><em className="text-ochre not-italic">Nothing</em> to worry about.
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🏕️", title: "Luxury Tented Camp — 4 Nights", desc: "Your camp sits inside a private conservancy bordering the Mara — fewer vehicles, more animals, more quiet. Canvas walls. Real beds. Hot bucket shower. This is not camping. This is how the wild was meant to feel.", ticks: ["En-suite tent · King or twin beds", "Hot shower · Private veranda", "Butler service · Electricity"], highlight: true },
              { icon: "🍽️", title: "All Meals, All Days", desc: "Full board from Day 1 dinner through Day 5 breakfast. Breakfasts in the bush, lunches in camp, three-course dinners under the stars every night.", ticks: ["All breakfasts, lunches & dinners", "Bush meals in the field", "Non-alcoholic drinks included"] },
              { icon: "🚗", title: "Private 4×4 Land Cruiser", desc: "Your family has the vehicle exclusively — no strangers. Pop-top roof for standing photography. Charging ports. Binoculars. Your guide drives.", ticks: ["Full-day use · Private vehicle", "Pop-top roof for photography", "All fuel & park driving fees"] },
              { icon: "🧭", title: "Expert Naturalist Guide", desc: "Your guide has 12+ years in the Mara. He knows individual lions by name. He has seen the migration 200 times and will still stay two hours past sunset.", ticks: ["Certified KPSGA guide", "Morning & evening drives", "Wildlife identification booklets"] },
              { icon: "📋", title: "All Park & Conservancy Fees", desc: "Maasai Mara National Reserve entry fees and private conservancy levies are fully covered. No surprises at the gate.", ticks: ["All gate fees prepaid", "Private conservancy access"] },
              { icon: "✈️", title: "Airport & Camp Transfers", desc: "Nairobi Jomo Kenyatta Airport pickup on arrival day. Internal bush flight or road transfer to/from Mara airstrip fully arranged.", ticks: ["Nairobi airport transfers", "Bush flight or road transfer", "Airstrip meet & greet"] }
            ].map((item, i) => (
              <div key={i} className={`p-8 border ${item.highlight ? 'border-clay/30 bg-clay/6' : 'border-dust/7 bg-bark/50'} hover:border-clay/25 transition-colors`}>
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-normal mb-2">{item.title}</h3>
                <p className="text-sm opacity-55 leading-relaxed mb-4">{item.desc}</p>
                {item.ticks.map((tick, j) => (
                  <div key={j} className="text-[0.78rem] opacity-65 mt-2 flex items-center gap-2">
                    <span className="text-clay font-medium">✓</span> {tick}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 border border-dust/7">
            <h4 className="text-[0.68rem] tracking-[0.25em] uppercase text-dust/40 mb-4">Not Included (for full transparency)</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[0.8rem] opacity-45">
              {["International flights to Nairobi", "Kenya visa (approx. $50)", "Travel insurance (required)", "Alcoholic beverages at camp", "Hot air balloon flight ($450pp optional)", "Gratuities for guides & camp staff", "Personal purchases & souvenirs"].map((item) => (
                <span key={item} className="flex items-center gap-2"><span>–</span> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-dusk py-28 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-clay"></span>
            When to Go
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-12">
            Every month is <em className="text-ochre not-italic">different.</em><br/>Some months are unforgettable.
          </h2>
          <div className="grid grid-cols-12 gap-1 mb-8">
            {[
              { month: "Jan", level: "good", event: "Calving season" },
              { month: "Feb", level: "good", event: "Dry & clear" },
              { month: "Mar", level: "ok", event: "Short rains" },
              { month: "Apr", level: "low", event: "Long rains" },
              { month: "May", level: "low", event: "Long rains" },
              { month: "Jun", level: "good", event: "Herds gather" },
              { month: "Jul", level: "peak", event: "Migration arrives!" },
              { month: "Aug", level: "peak", event: "Peak crossings" },
              { month: "Sep", level: "peak", event: "Peak crossings" },
              { month: "Oct", level: "good", event: "Herds move south" },
              { month: "Nov", level: "ok", event: "Short rains" },
              { month: "Dec", level: "good", event: "Dry · festive" }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-[0.58rem] tracking-[0.1em] uppercase opacity-40 mb-2">{m.month}</div>
                <div className={`h-${m.level === 'peak' ? '[60px]' : m.level === 'good' ? '[40px]' : m.level === 'ok' ? '[24px]' : '[14px]'} rounded-sm mx-auto w-full ${m.level === 'peak' ? 'bg-clay' : m.level === 'good' ? 'bg-ochre/70' : m.level === 'ok' ? 'bg-[#8a7a30]/55' : 'bg-dust/15'}`}></div>
                <div className="text-[0.54rem] opacity-50 mt-2 leading-tight">{m.event}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-8 mb-8">
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-clay"></div>Peak season</div>
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-ochre/70"></div>Good season</div>
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-[#8a7a30]/55"></div>Quieter season</div>
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-dust/15"></div>Low season</div>
          </div>
          <div className="p-8 bg-clay/8 border-l-4 border-clay">
            <p className="text-[0.9rem] leading-relaxed opacity-70"><strong className="text-ochre font-medium">Our honest recommendation:</strong> If you can only go once and the Migration matters, go between <strong>late July and September</strong>. That's when the wildebeest crossings peak. If you want fewer crowds and lower prices, January and February are extraordinary — that's calving season. <strong>Avoid April and May</strong> unless you specifically love green landscapes.</p>
          </div>
        </div>
      </section>

      {/* Lodge */}
      <section className="bg-[#100c06] py-28 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-clay"></span>
            Where You'll Stay
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-16">
            Your home in <em className="text-ochre not-italic">the wild</em>
          </h2>
          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1a1008] to-[#2d1a08] to-[#3a2010]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(232,160,32,0.25),transparent_55%)]" />
              <div className="absolute top-8 right-8 z-20 bg-dusk/88 border border-clay/35 p-4 backdrop-blur-sm text-center">
                <div className="text-[#e8a020] text-sm tracking-wider">★★★★</div>
                <div className="text-[0.6rem] tracking-[0.15em] uppercase opacity-45 mt-1">Tented Camp</div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-normal mb-2">Mara Private Conservancy Camp</h3>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-ochre mb-5">Luxury Tented Camp · Private Conservancy · Inside the Ecosystem</div>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-6">Your camp is not at the edge of the Mara — it is inside it. Located on a private conservancy adjoining the reserve, you share this land with only 20 other guests at any time. Animals walk through camp at night. Elephants visit the waterhole at dawn.</p>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-8">Each tent is a proper room. Real bed with linen. An en-suite bathroom with hot water. A private veranda where you take your morning coffee while listening to the birds wake up.</p>
              <div className="grid grid-cols-2 gap-3">
                {["En-suite bathroom", "Hot water shower", "King or twin beds", "Private veranda", "Solar electricity", "Daily laundry", "Butler service", "Wifi (satellite)", "Charging stations", "Mosquito nets", "Binoculars provided", "Mini bar (soft drinks)"].map((a) => (
                  <div key={a} className="text-[0.78rem] opacity-65 flex items-center gap-2">
                    <span className="text-clay opacity-70 text-xs">◆</span> {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dusk py-28 px-12 text-center">
        <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center justify-center gap-3">
          What Families Say
        </div>
        <h2 className="font-serif text-5xl font-light leading-tight mb-8">
          Real words from <em className="text-ochre not-italic">real families</em>
        </h2>
        <p className="font-serif text-3xl font-light italic leading-relaxed max-w-3xl mx-auto mb-6 text-dust">
          "We had tried to explain the Mara to our children using YouTube videos and books. Nothing — <em className="text-ochre not-italic">nothing</em> — came close to the real thing. On Day 2, my 9-year-old turned to me at breakfast and said: 'Dad, I want to be a conservationist.' That was worth every single cent."
        </p>
        <div className="text-[0.8rem] opacity-45 tracking-[0.15em] uppercase mb-16">— Daniel & Claire Njoroge, Nairobi · Family of 4 · August 2024</div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { stars: "★★★★★", text: "Our guide Moses is a genius. He found a leopard with two cubs in a tree before any of the 20 other vehicles.", auth: "Sarah & Tom Wanjiku — Mombasa · Couple · Oct 2024" },
            { stars: "★★★★★", text: "The wildebeest crossing on Day 4 will be in my memory until I die. Over 3,000 animals in 20 minutes. Nothing prepares you.", auth: "James Ochieng — Kampala · Solo traveller · Sep 2024" },
            { stars: "★★★★★", text: "I was nervous about bringing my elderly mother. She has limited mobility. Nomads Ridge arranged everything. She cried when we left.", auth: "Amina Hassan — Dubai · Family trip · Jan 2025" }
          ].map((t, i) => (
            <div key={i} className="p-6 border border-dust/7 bg-bark/70 hover:border-clay/30 transition-colors text-left">
              <div className="text-[#e8a020] text-sm mb-3">{t.stars}</div>
              <p className="text-[0.83rem] opacity-62 leading-relaxed mb-4">{t.text}</p>
              <div className="text-[0.7rem] opacity-38 tracking-[0.1em] uppercase">{t.auth}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section className="bg-[#0a0704] py-28 px-12" id="booking">
        <div className="max-w-screen-xl mx-auto grid grid-cols-[1fr_1.3fr] gap-24 items-start">
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-clay mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-clay"></span>
              Reserve Your Safari
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              The Mara is waiting.<br/>So is <em className="text-ochre not-italic">your family.</em>
            </h2>
            <p className="text-[0.95rem] leading-relaxed opacity-62 mb-10">Peak season slots for July–September fill up 8–12 months in advance. If you're considering this, don't wait. A 20% deposit holds your dates — balance due 60 days before travel.</p>
            <div className="p-6 bg-clay/10 border border-clay/25 mb-8">
              <p className="text-[0.82rem] opacity-75 leading-relaxed"><strong className="text-clay">July & August 2025:</strong> Only 3 tented camp slots remaining for groups of 4+. <strong>September 2025:</strong> Open but filling. January & February 2026: Open.</p>
            </div>
            <div className="space-y-3">
              {["Free cancellation up to 60 days before travel", "20% deposit to confirm — no full payment upfront", "Price match guarantee on packages", "24/7 in-country support throughout your trip", "Over 2,400 five-star reviews", "Kenya Tourism Board licensed operator"].map((item) => (
                <div key={item} className="text-[0.8rem] opacity-55 flex items-center gap-3"><span className="text-clay font-semibold">✓</span> {item}</div>
              ))}
            </div>
          </div>
          <div className="bg-bark/80 border border-dust/8 p-10">
            <h3 className="font-serif text-3xl font-normal mb-4">Classic Kenya Safari</h3>
            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-dust/6">
              <span className="font-serif text-5xl font-light text-ochre">$2,100</span>
              <span className="text-[0.72rem] opacity-45">per person · 5 days / 4 nights</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">First Name</label>
                <input type="text" placeholder="Jane" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50" />
              </div>
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Last Name</label>
                <input type="text" placeholder="Kamau" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50" />
              </div>
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Email Address</label>
              <input type="email" placeholder="jane@example.com" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50" />
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Phone / WhatsApp</label>
              <input type="tel" placeholder="+254 700 000 000" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Travel Month</label>
                <select className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50 appearance-none">
                  <option>July 2025</option>
                  <option>August 2025</option>
                  <option>September 2025</option>
                  <option>October 2025</option>
                  <option>January 2026</option>
                  <option>February 2026</option>
                </select>
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">No. of Travellers</label>
                <select className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50 appearance-none">
                  <option>2 people</option>
                  <option>1 person</option>
                  <option>3 people</option>
                  <option>4 people (family)</option>
                  <option>5–8 people</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Anything we should know?</label>
              <input type="text" placeholder="Dietary needs, mobility, children's ages, special requests…" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-clay/50" />
            </div>
            <button className="w-full bg-clay text-dust border-none p-4 text-[0.78rem] tracking-[0.22em] uppercase font-medium hover:bg-ochre transition-colors cursor-pointer">
              Send My Enquiry — We Respond Within 3 Hours
            </button>
            <p className="text-[0.68rem] opacity-35 text-center mt-4 leading-relaxed">No payment required now. Our safari consultant will contact you within 3 hours.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
