import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function LakeNaivashaPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/naivasha-lake-birds.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a18] via-[#0d1515] to-[#0d0a04]" />

        {/* Lake reflection */}
        <div className="absolute top-30% left-0 right-0 h-[200px] bg-gradient-to-b from-[rgba(74,124,156,0.2)] to-transparent" />

        {/* Water birds */}
        <svg className="absolute top-35% right-32% animate-pulse" width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path d="M10 25 Q20 18 30 25" stroke="rgba(245,237,224,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M45 20 Q52 15 59 20" stroke="rgba(245,237,224,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>

        {/* Reeds and water SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.4)" d="M0,280 C100,260 200,250 350,255 C500,260 550,240 700,235 C850,230 900,260 1100,255 C1250,252 1350,270 1440,268 L1440,400 L0,400 Z"/>
            <rect x="50" y="180" width="4" height="180" fill="#1a0e06"/>
            <rect x="55" y="200" width="3" height="160" fill="#1a0e06" opacity="0.8"/>
            <rect x="60" y="190" width="3" height="170" fill="#1a0e06" opacity="0.6"/>
            <rect x="1300" y="175" width="4" height="185" fill="#1a0e06"/>
            <rect x="1295" y="195" width="3" height="165" fill="#1a0e06" opacity="0.8"/>
            <ellipse cx="1400" cy="310" rx="25" ry="15" fill="#1a0e06" opacity="0.5"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Kenya <span className="text-ochre">›</span> Lake Naivasha
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Lake<br/><em className="text-[#4a7c9c] not-italic">Naivasha</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Kenya, East Africa · 139 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Where the hippos grunt at midnight and the fish eagles cry over still water — a freshwater lake in the heart of the Great Rift Valley, alive with birds and surprises."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 900+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-[#4a7c9c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$890</div>
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
            Lake Naivasha is not a place you <em className="text-ochre not-italic">see</em> wildlife — it's a place you <em className="text-ochre not-italic">feel</em> it. The hippos breathe at your feet. The fish eagles scream overhead. The water reflects a sky so vast it changes your sense of scale.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            This is the Great Rift Valley lakes at their finest — a shallow freshwater lake ringed by papyrus beds, acacia woodlands, and volcanic hills. It's a birder's paradise, a photographer's dream, and a sanctuary for some of Africa's most iconic wildlife.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0a1a18] to-[#0d2520]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(74,124,156,0.4),rgba(74,124,156,0.15),transparent_60%),linear-gradient(to_bottom,#0a1a18,#0d0804_60%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#4a7c9c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#4a7c9c] leading-none">400+</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Bird species</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Why Lake Naivasha
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Water, birds,<br/><em className="text-ochre not-italic">and wild magic</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Lake Naivasha is one of the most diverse ecosystems in the Rift Valley. It's a place where you can spend three days and feel like you've barely scratched the surface. Every hour reveals something new.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The birdlife is extraordinary", desc: "Over 400 bird species have been recorded at Lake Naivasha. Fish eagles, African spoonbills, kingfishers, rollers, and the spectacular osprey. Bring your binoculars." },
                { num: "02", title: "Hippos in their element", desc: "A pod of 200+ hippos lives in the northern bay of the lake. You can view them from shore — or take a boat to get closer to these extraordinary animals." },
                { num: "03", title: "Crescent Island is unforgettable", desc: "A private island in the lake, Crescent Island is home to giraffes, zebras, wildebeest, and buffaloes — all walking freely. No predators. Completely safe to walk among them." },
                { num: "04", title: "The Hell's Gate experience", desc: "Adjacent to the lake, Hell's Gate National Park offers hiking and cycling through a dramatic gorge — one of the only parks in Kenya where you're allowed out of the vehicle." }
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
              Three days of<br/><em className="text-ochre not-italic">water and wonder</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Lake Naivasha is a destination for all the senses — the sound of fish eagles, the sight of hippos surfacing, the smell of papyrus in the morning mist.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Day 1", title: "Lake Sunrise Boat Ride", desc: "The best time on the lake is dawn. As the mist rises off the water, the hippos surface, the fish eagles call, and the sun lights up the surrounding hills.", detail: "Early morning boat · 2 hours", color: "from-[#0a1a18] to-[#0d2520]" },
              { tag: "Day 1-2", title: "Crescent Island Walk", desc: "Walk among giraffes, zebras, and wildebeest on this predator-free island. No vehicles, no fences — just you and the animals.", detail: "Guided walking safari", color: "from-[#1a1008] to-[#4a3020]" },
              { tag: "Day 2", title: "Hell's Gate Hike", desc: "Hike through the dramatic gorge at Hell's Gate — towering cliffs, hot springs, and wildlife that includes buffalo, zebra, and giraffe.", detail: "Full day · No vehicle needed", color: "from-[#2a1a08] to-[#3a2010]" },
              { tag: "Day 2", title: "Hippo Sunset Viewing", desc: "Watch the hippos from shore as the sun sets over the lake. Your guide explains their behaviour, their social structure, their extraordinary lives.", detail: "Evening included", color: "from-[#0a1a1a] to-[#1a2a2a]" },
              { tag: "Day 3", title: "Elsamere Conservation", desc: "Visit Elsamere — the former home of Joy Adamson, author of 'Born Free'. Now a conservation centre with a small museum and beautiful grounds.", detail: "Half-day cultural visit", color: "from-[#1a2a1a] to-[#2a3a2a]" },
              { tag: "Any Day", title: "Birding Paradise", desc: "Lake Naivasha is one of the finest birding destinations in East Africa. Your guide is also a skilled birding naturalist.", detail: "Year-round · Specialist guide", color: "from-[#1a1a2a] to-[#0d0a1a]" }
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
              More than just<br/><em className="text-ochre not-italic">the big mammals</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Lake Naivasha is primarily a birding destination — but it's also home to some remarkable large mammals. The lake itself holds one of Africa's largest hippo populations.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">400+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">200+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Hippos</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">2,000+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Flamingos</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#4a7c9c]/8 border border-[#4a7c9c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#4a7c9c] text-center">🦜 Key Species</div>
            {[
              { emoji: "🦛", name: "Hippopotamus", note: "200+ in the lake", check: "✓ Very common" },
              { emoji: "🦅", name: "Fish Eagle", note: "Iconic lake call", check: "✓ Very common" },
              { emoji: "🦩", name: "Flamingo", note: "Seasonal thousands", check: "✓ Seasonal" },
              { emoji: "🦢", name: "African Spoonbill", note: "Wetland specialist", check: "✓ Common" },
              { emoji: "🦒", name: "Giraffe", note: "Crescent Island", check: "✓ Common" },
              { emoji: "🦓", name: "Zebra", note: "Crescent Island", check: "✓ Common" },
              { emoji: "🐃", name: "Buffalo", note: "Hell's Gate herds", check: "✓ Common" },
              { emoji: "🦌", name: "Wildebeest", note: "Crescent Island", check: "✓ Common" },
              { emoji: "翠", name: "Kingfisher", note: "Multiple species", check: "✓ Very common" },
              { emoji: "🐇", name: "Vervet Monkey", note: "Lakeside troops", check: "✓ Very common" }
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
              Three days at<br/><em className="text-ochre not-italic">the lake.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is a relaxed, immersive itinerary — the pace is slower than a traditional game drive safari, giving you time to absorb the lake's beauty.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Nairobi → Lake Naivasha", title: "Arrival & First Light on the Lake", desc: "Drive from Nairobi (1.5 hours) to Lake Naivasha. Check into your lakeside lodge with views over the water. Afternoon: your first boat ride on the lake — a chance to see hippos up close and hear the fish eagles for the first time.", tags: ["Road Transfer", "Lodge Check-in", "Afternoon Boat Ride", "Welcome Dinner"] },
              { day: 2, sub: "Full Day · Lake Naivasha", title: "Island Walk & Hell's Gate", desc: "Morning: Walk on Crescent Island among giraffes, zebras, and wildebeest — a completely unique experience. Afternoon: Hike through Hell's Gate National Park — towering cliffs, wildlife, and the dramatic gorge that gives the park its name.", tags: ["Crescent Island Walk", "Hell's Gate Hike", "Photography", "Guided Nature Walk"] },
              { day: 3, sub: "Departure Day · Final Morning", title: "Last Sunrise, Then Departure", desc: "Dawn: one final walk along the lake shore, or an early morning boat ride to catch the hippos returning from their night grazing. Late breakfast, then check-out and transfer back to Nairobi or onwards to your next destination.", tags: ["Final Lake Walk", "Farewell Breakfast", "Transfer to Nairobi"] }
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

      {/* What's Included */}
      <section className="bg-[#100c06] py-28 px-12" id="included">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#4a7c9c]"></span>
            What's Included
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-16">
            Everything you need.<br/><em className="text-ochre not-italic">Nothing</em> to worry about.
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🏨", title: "Lakeside Lodge — 2 Nights", desc: "Your lodge sits directly on the lake shore — wake up to hippos grunting in the night and fish eagles calling at dawn. Rooms are comfortable with lake views.", ticks: ["Lake-view rooms", "En-suite bathroom", "Restaurant & bar"], highlight: true },
              { icon: "🍽️", title: "All Meals Included", desc: "Full board from Day 1 lunch through Day 3 breakfast. Meals are taken at the lodge restaurant or as bush picnics in scenic locations.", ticks: ["All breakfasts, lunches & dinners", "Bush picnic options", "Dietary requirements catered for"] },
              { icon: "🚗", title: "Private Vehicle & Boat", desc: "Your own 4×4 vehicle for all land activities, plus a private boat for lake excursions. No sharing with strangers.", ticks: ["Private vehicle", "Boat hire included", "Fuel & park fees"] },
              { icon: "🧭", title: "Expert Nature Guide", desc: "Your guide is also a skilled birding naturalist. He'll help you identify the 20+ bird species you'll see, plus explain the hippo behaviour and ecology.", ticks: ["Birding specialist", "Walking guide", "Naturalist knowledge"] }
            ].map((item, i) => (
              <div key={i} className={`p-8 border ${item.highlight ? 'border-[#4a7c9c]/30 bg-[#4a7c9c]/6' : 'border-dust/7 bg-bark/50'} hover:border-[#4a7c9c]/25 transition-colors`}>
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-normal mb-2">{item.title}</h3>
                <p className="text-sm opacity-55 leading-relaxed mb-4">{item.desc}</p>
                {item.ticks.map((tick, j) => (
                  <div key={j} className="text-[0.78rem] opacity-65 mt-2 flex items-center gap-2">
                    <span className="text-[#4a7c9c] font-medium">✓</span> {tick}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 border border-dust/7">
            <h4 className="text-[0.68rem] tracking-[0.25em] uppercase text-dust/40 mb-4">Not Included</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[0.8rem] opacity-45">
              {["International flights", "Kenya visa", "Travel insurance", "Alcoholic beverages", "Gratuities", "Personal purchases", "Laundry"].map((item) => (
                <span key={item} className="flex items-center gap-2"><span>–</span> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-dusk py-28 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#4a7c9c]"></span>
            When to Go
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-12">
            The lake is beautiful<br/><em className="text-ochre not-italic">year-round.</em>
          </h2>
          <div className="grid grid-cols-12 gap-1 mb-8">
            {[
              { month: "Jan", level: "good", event: "Clear days" },
              { month: "Feb", level: "good", event: "Dry & warm" },
              { month: "Mar", level: "ok", event: "Short rains" },
              { month: "Apr", level: "low", event: "Green season" },
              { month: "May", level: "low", event: "Long rains" },
              { month: "Jun", level: "good", event: "Dry season" },
              { month: "Jul", level: "peak", event: "Best birding" },
              { month: "Aug", level: "peak", event: "Flamingos" },
              { month: "Sep", level: "good", event: "Good year-round" },
              { month: "Oct", level: "good", event: "Transitional" },
              { month: "Nov", level: "ok", event: "Short rains" },
              { month: "Dec", level: "good", event: "Festive" }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-[0.58rem] tracking-[0.1em] uppercase opacity-40 mb-2">{m.month}</div>
                <div className={`h-${m.level === 'peak' ? '[60px]' : m.level === 'good' ? '[40px]' : m.level === 'ok' ? '[24px]' : '[14px]'} rounded-sm mx-auto w-full ${m.level === 'peak' ? 'bg-[#4a7c9c]' : m.level === 'good' ? 'bg-ochre/70' : m.level === 'ok' ? 'bg-[#8a7a30]/55' : 'bg-dust/15'}`}></div>
                <div className="text-[0.54rem] opacity-50 mt-2 leading-tight">{m.event}</div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-[#4a7c9c]/8 border-l-4 border-[#4a7c9c]">
            <p className="text-[0.9rem] leading-relaxed opacity-70"><strong className="text-ochre font-medium">Our recommendation:</strong> Lake Naivasha is excellent year-round. The best birding is during <strong>July to September</strong> when migratory species are present. Flamingos are most numerous from August to October. The green season (April–May) offers fewer tourists and beautiful green landscapes.</p>
          </div>
        </div>
      </section>

      {/* Lodge */}
      <section className="bg-[#100c06] py-28 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#4a7c9c]"></span>
            Where You'll Stay
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-16">
            Your home on<br/><em className="text-ochre not-italic">the water's edge</em>
          </h2>
          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#0a1a18] to-[#0d2520] to-[#1a3530]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(74,124,156,0.3),transparent_55%)]" />
              <div className="absolute top-8 right-8 z-20 bg-dusk/88 border border-[#4a7c9c]/35 p-4 backdrop-blur-sm text-center">
                <div className="text-[#e8a020] text-sm tracking-wider">★★★★</div>
                <div className="text-[0.6rem] tracking-[0.15em] uppercase opacity-45 mt-1">Lakeside Lodge</div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-normal mb-2">Lake Naivasha Sopa Lodge</h3>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-ochre mb-5">Luxury Lodge · Lakeside · Rift Valley Views</div>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-6">This lodge sits on the southern shore of Lake Naivasha, with panoramic views across the water. The rooms are spacious and comfortable, each with a private balcony overlooking the lake.</p>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-8">The lodge grounds are visited by a variety of wildlife — giraffes sometimes wander through, vervet monkeys are regular visitors, and at night you can hear hippos grunting from the lake just below.</p>
              <div className="grid grid-cols-2 gap-3">
                {["Lake-view rooms", "Private balcony", "En-suite bathroom", "Swimming pool", "Restaurant & bar", "Garden areas", "Birding on grounds", "Evening campfire", "WiFi in rooms", "Room service", "Laundry service", "Gift shop"].map((a) => (
                  <div key={a} className="text-[0.78rem] opacity-65 flex items-center gap-2">
                    <span className="text-[#4a7c9c] opacity-70 text-xs">◆</span> {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dusk py-28 px-12 text-center">
        <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center justify-center gap-3">
          What Travellers Say
        </div>
        <h2 className="font-serif text-5xl font-light leading-tight mb-8">
          Real words from<br/><em className="text-ochre not-italic">nature lovers</em>
        </h2>
        <p className="font-serif text-3xl font-light italic leading-relaxed max-w-3xl mx-auto mb-6 text-dust">
          "Walking on Crescent Island was one of the most extraordinary experiences of my life. <em className="text-ochre not-italic">A giraffe bent down to eat from a tree right next to me.</em> Twenty feet away. I could hear it chewing. I've never felt so present."
        </p>
        <div className="text-[0.8rem] opacity-45 tracking-[0.15em] uppercase mb-16">— Rebecca & James Mutiso, London · Family of 4 · October 2024</div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { stars: "★★★★★", text: "The boat ride at dawn was magical. Our guide positioned us perfectly to watch hippos surface while fish eagles called overhead. My husband is still talking about it.", auth: "Anna & Pieter Bakker — Rotterdam · Couple · Sep 2024" },
            { stars: "★★★★★", text: "I'm a serious birder and Lake Naivasha didn't disappoint. 47 species in two days, including the African spoonbill I'd been looking for for years.", auth: "Thomas Kirui — Nairobi · Solo birder · Aug 2024" },
            { stars: "★★★★★", text: "We took our children to Hell's Gate and they hiked the whole gorge. Being allowed out of the vehicle in a wildlife park was a highlight for all of us.", auth: "Fatima Al-Hassan — Dubai · Family · Dec 2024" }
          ].map((t, i) => (
            <div key={i} className="p-6 border border-dust/7 bg-bark/70 hover:border-[#4a7c9c]/30 transition-colors text-left">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Reserve Your Safari
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              The lake is<br/><em className="text-ochre not-italic">waiting for you.</em>
            </h2>
            <p className="text-[0.95rem] leading-relaxed opacity-62 mb-10">Lake Naivasha is a perfect add-on to a longer Kenyan safari — or a standalone short break. Just 1.5 hours from Nairobi. A 20% deposit holds your dates.</p>
            <div className="p-6 bg-[#4a7c9c]/10 border border-[#4a7c9c]/25 mb-8">
              <p className="text-[0.82rem] opacity-75 leading-relaxed"><strong className="text-[#4a7c9c]">Available year-round.</strong> The lodge has good availability most months. Christmas and Easter peak periods book up 2-3 months in advance.</p>
            </div>
            <div className="space-y-3">
              {["Free cancellation up to 60 days before travel", "20% deposit to confirm", "Perfect add-on to any Kenya safari", "Can arrange from Mombasa too", "Kenya Tourism Board licensed"].map((item) => (
                <div key={item} className="text-[0.8rem] opacity-55 flex items-center gap-3"><span className="text-[#4a7c9c] font-semibold">✓</span> {item}</div>
              ))}
            </div>
          </div>
          <div className="bg-bark/80 border border-dust/8 p-10">
            <h3 className="font-serif text-3xl font-normal mb-4">Lake Naivasha Experience</h3>
            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-dust/6">
              <span className="font-serif text-5xl font-light text-ochre">$890</span>
              <span className="text-[0.72rem] opacity-45">per person · 3 days / 2 nights</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">First Name</label>
                <input type="text" placeholder="Amina" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
              </div>
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Last Name</label>
                <input type="text" placeholder="Hassan" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
              </div>
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Email Address</label>
              <input type="email" placeholder="amina@example.com" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Phone / WhatsApp</label>
              <input type="tel" placeholder="+254 700 000 000" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Travel Month</label>
                <select className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50 appearance-none">
                  <option>July 2025</option>
                  <option>August 2025</option>
                  <option>September 2025</option>
                  <option>October 2025</option>
                  <option>November 2025</option>
                  <option>December 2025</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">No. of Travellers</label>
                <select className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50 appearance-none">
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
              <input type="text" placeholder="Dietary needs, children's ages, special requests…" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
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
