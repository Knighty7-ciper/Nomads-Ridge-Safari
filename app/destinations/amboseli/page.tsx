import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function AmboseliPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a] via-[#0d1820] to-[#0d0a04]" />

        {/* Kilimanjaro SVG */}
        <div className="absolute top-5% left-40% w-80 h-72 opacity-30">
          <svg viewBox="0 0 300 250" fill="none" className="w-full h-full">
            <path d="M20,240 L80,100 L120,55 L150,25 L180,55 L220,100 L280,240 Z" fill="#1a2030" opacity="0.8"/>
            <path d="M120,55 L150,25 L180,55 L165,70 L135,70 Z" fill="#ffffff" opacity="0.9"/>
          </svg>
        </div>

        {/* Sun glow */}
        <div className="absolute top-15% left-45% w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle,rgba(232,160,32,0.5),rgba(200,98,42,0.2),transparent_70%)] animate-pulse" />

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
              Nomads Ridge Safaris <span className="text-ochre">›</span> Kenya <span className="text-ochre">›</span> Amboseli
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Amboseli<br/><em className="text-[#4a7c9c] not-italic">National Park</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Kenya, East Africa · 392 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Where Africa's highest mountain watches over the continent's most intimate elephant encounters — a landscape so iconic it needs no introduction."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 1,800+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-[#4a7c9c]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$1,650</div>
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
            You have seen a thousand photographs of Mount Kilimanjaro. But nothing — <em className="text-ochre not-italic">nothing</em> — prepares you for the moment a herd of 40 elephants walks past your vehicle with Kilimanjaro's snow-capped summit rising 5,896 metres behind them.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            Amboseli is compact, accessible, and staggeringly beautiful. In just three days, you will see more elephants than most people see in a lifetime. The Amboseli Elephant Research Project has studied these herds for over 50 years — these are not random elephants.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#0d1820] to-[#1a2a3a]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_25%,rgba(74,124,156,0.5),rgba(74,124,156,0.2),transparent_50%),linear-gradient(to_bottom,#1a3050,#0d0804_55%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#4a7c9c]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#4a7c9c] leading-none">1,000+</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Elephants in park</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#4a7c9c] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#4a7c9c]"></span>
              Why Amboseli
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Africa's most<br/><em className="text-ochre not-italic">iconic</em> view
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Amboseli is small enough to explore thoroughly in three days, yet rich enough to leave you breathless. No other park on earth offers this combination: Kilimanjaro as your backdrop, and elephants you've never seen anything like.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "Kilimanjaro. Elephants. Together.", desc: "The view of Africa's highest mountain rising behind elephant herds is the most photographed wildlife scene on the continent. Early mornings offer the clearest views." },
                { num: "02", title: "Africa's most studied elephants", desc: "The Amboseli Elephant Research Project has followed these herds since 1972. Your guide knows individual elephants by name — their ages, family lines, personalities." },
                { num: "03", title: "Compact and accessible", desc: "At 392 km², Amboseli is small enough that prime game areas are within 20 minutes of any lodge. No long drives between sighting spots." },
                { num: "04", title: "Five distinct habitats", desc: "From open savannah to acacia woodland, rocky thornbush to permanent swamps — each habitat draws different wildlife. A cheetah hunt in the plains. Hippos in the swamp." }
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
              Six moments that will <em className="text-ochre not-italic">stay with you</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Each day in Amboseli is shaped around the two things this park does better than anywhere else: elephants and Kilimanjaro.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Jun – Oct", title: "Kilimanjaro at Dawn", desc: "Up at 5:30am to catch Kilimanjaro at its clearest. The snow cap catches the first light while elephants move across the plains below.", detail: "Best light 6–8am · Clear skies Jun–Oct", color: "from-[#1a2a3a] to-[#0d0804]" },
              { tag: "Daily Included", title: "Elephant Herd Encounters", desc: "Watch herds of 30–50 elephants at Enkong Narok Swamp — the bulls with 100-pound tusks, mothers with calves, teenagers wrestling.", detail: "Morning & afternoon · Private vehicle", color: "from-[#4a3010] to-[#DAA020]" },
              { tag: "Optional Add-on", title: "Hot Air Balloon over Amboseli", desc: "Drift silently above the park as the sun rises behind Kilimanjaro. From 300 metres up, you see the elephant herds moving like shadows.", detail: "1hr flight · Champagne breakfast · $450pp", color: "from-[#0a1a2a] to-[#0d0804]" },
              { tag: "Year-round", title: "Swamp Waterhole Sessions", desc: "The Enkong Narok and Sinet Delta swamps are permanent water sources. Elephants, buffaloes, hippos and hundreds of birds gather here.", detail: "All day access · Hippos & buffaloes", color: "from-[#0a1a1a] to-[#2a4040]" },
              { tag: "Day 2 Included", title: "Maasai Cultural Visit", desc: "Visit a manyatta (traditional homestead), meet Maasai warriors, learn their customs, and understand how this partnership has protected wildlife.", detail: "Half-day · Community benefit", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "420+ Species", title: "Birdwatching Paradise", desc: "Over 420 species including flamingos, fish eagles, crowned cranes, yellow-billed storks, and a remarkable variety of raptors.", detail: "Year-round · Specialist guides", color: "from-[#1a1a2a] to-[#1a0a10]" }
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
              A checklist built<br/>for <em className="text-ochre not-italic">elephant lovers</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Amboseli has the highest density of large elephants in Africa, and a supporting cast of predators, grazers, and over 420 bird species.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">1,000+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Elephants resident</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">420+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#4a7c9c]">5</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Habitat types</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#4a7c9c]/8 border border-[#4a7c9c]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#4a7c9c] text-center">🏆 The Big Five</div>
            {[
              { emoji: "🐘", name: "African Elephant", note: "1,000+ · largest free-roaming herds", check: "✓ Very common" },
              { emoji: "🦁", name: "African Lion", note: "Resident prides · early morning sightings", check: "✓ Common" },
              { emoji: "🐃", name: "African Buffalo", note: "Large herds at Enkong Narok swamp", check: "✓ Very common" },
              { emoji: "🐆", name: "Leopard", note: "Spotted in acacia woodland", check: "◆ Occasional" },
              { emoji: "🦏", name: "Black Rhino", note: "Private conservancies · special permit", check: "◆ Rare" },
              { emoji: "🦒", name: "Maasai Giraffe", note: "Often seen browsing acacias", check: "✓ Very common" },
              { emoji: "🦛", name: "Hippo", note: "Enkong Narok permanent swamp", check: "✓ Common" },
              { emoji: "🐆", name: "Cheetah", note: "Open plains · excellent sightings", check: "✓ Common" },
              { emoji: "🦅", name: "Fish Eagle", note: "Swamps & seasonal lakes", check: "✓ Very common" },
              { emoji: "🦩", name: "Flamingo", note: "Seasonal lake edges", check: "✓ Seasonal" }
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
              Three days. One<br/><em className="text-ochre not-italic">unforgettable view.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Three days is the ideal minimum — enough to see everything at a relaxed pace.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Nairobi → Amboseli", title: "First Sight of the Mountain", desc: "Drive from Nairobi (4 hours) or take a 45-minute flight. As you descend, you'll see it — Kilimanjaro, enormous and snow-capped. Check into your lodge with views of the mountain. Afternoon game drive heads straight for Enkong Narok swamp.", tags: ["Road or Flight", "Afternoon Game Drive", "Swamp Visit", "Sundowners", "Dinner Included"] },
              { day: 2, sub: "Full Day · Dawn to Sunset", title: "Elephants & the Mountain", desc: "Up at 5:30am for the iconic morning — Kilimanjaro clear and still, the elephants moving across the plains. Observation Hill for the 360-degree view. Afternoon: Maasai cultural visit to a community conservancy.", tags: ["Dawn Drive", "Swamp Session", "Observation Hill", "Maasai Culture", "Sunset Drive"] },
              { day: 3, sub: "Departure Day · Final Morning Drive", title: "One Last Sunrise", desc: "One final dawn drive — your guide will take you to a different corner of the park: perhaps cheetahs on the open plains, or a lion pride returning from a hunt. Late breakfast, then transfer to airstrip or road back to Nairobi.", tags: ["Final Dawn Drive", "Farewell Breakfast", "Transfer to Nairobi", "Optional Coast Extension"] }
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
              { icon: "🏨", title: "Luxury Lodge — 2 Nights", desc: "Your lodge sits on the edge of the park with unobstructed views of Kilimanjaro. Wake up to the mountain in your window. The rooms are spacious, the beds are comfortable.", ticks: ["En-suite rooms · Mountain views", "Swimming pool", "Restaurant & bar"], highlight: true },
              { icon: "🍽️", title: "All Meals, All Days", desc: "Full board from Day 1 lunch through Day 3 breakfast. Breakfasts are generous — eggs made to order, fresh fruit, Kenyan coffee. Dinners are three courses.", ticks: ["All breakfasts, lunches & dinners", "Field lunches available", "Non-alcoholic drinks included"] },
              { icon: "🚗", title: "Private 4×4 Land Cruiser", desc: "Your family has the vehicle exclusively. Pop-top roof for unobstructed photography. Your guide drives, positions the vehicle, and stays as long as you want.", ticks: ["Full-day use · Private vehicle", "Pop-top roof for photography", "Charging ports & binoculars"] },
              { icon: "🧭", title: "Expert Naturalist Guide", desc: "Your guide has spent years in Amboseli. He knows the elephant families. He knows where the lions den. His knowledge transforms a game drive into understanding.", ticks: ["Certified KPSGA guide", "Morning & evening drives", "Wildlife & birding expertise"] },
              { icon: "📋", title: "All Park Entry Fees", desc: "Amboseli National Park entry fees are fully included. No surprises at the gate. Your package covers all park conservancy levies.", ticks: ["Park fees prepaid", "Conservancy access"] },
              { icon: "✈️", title: "Transfers & Transport", desc: "Road transfer from Nairobi or flight from Wilson Airport to Amboseli airstrip. Meet and greet at arrival, drop-off at departure.", ticks: ["Nairobi road transfer (4hrs)", "Or scenic flight (45 min)", "Airstrip transfers"] }
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
            <h4 className="text-[0.68rem] tracking-[0.25em] uppercase text-dust/40 mb-4">Not Included (for full transparency)</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[0.8rem] opacity-45">
              {["International flights to Nairobi", "Kenya visa (approx. $50)", "Travel insurance (required)", "Alcoholic beverages at lodge", "Hot air balloon flight ($450pp optional)", "Gratuities for guides & lodge staff", "Personal purchases & souvenirs", "Laundry services"].map((item) => (
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
            June to October is<br/><em className="text-ochre not-italic">your window.</em>
          </h2>
          <div className="grid grid-cols-12 gap-1 mb-8">
            {[
              { month: "Jan", level: "good", event: "Clear skies" },
              { month: "Feb", level: "good", event: "Hot & dry" },
              { month: "Mar", level: "ok", event: "Short rains" },
              { month: "Apr", level: "low", event: "Long rains" },
              { month: "May", level: "low", event: "Long rains" },
              { month: "Jun", level: "good", event: "Dry season" },
              { month: "Jul", level: "peak", event: "Best Kili views!" },
              { month: "Aug", level: "peak", event: "Peak safari" },
              { month: "Sep", level: "peak", event: "Peak safari" },
              { month: "Oct", level: "peak", event: "Last clear months" },
              { month: "Nov", level: "ok", event: "Short rains" },
              { month: "Dec", level: "good", event: "Festive season" }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-[0.58rem] tracking-[0.1em] uppercase opacity-40 mb-2">{m.month}</div>
                <div className={`h-${m.level === 'peak' ? '[60px]' : m.level === 'good' ? '[40px]' : m.level === 'ok' ? '[24px]' : '[14px]'} rounded-sm mx-auto w-full ${m.level === 'peak' ? 'bg-[#4a7c9c]' : m.level === 'good' ? 'bg-ochre/70' : m.level === 'ok' ? 'bg-[#8a7a30]/55' : 'bg-dust/15'}`}></div>
                <div className="text-[0.54rem] opacity-50 mt-2 leading-tight">{m.event}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-8 mb-8">
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-[#4a7c9c]"></div>Peak season</div>
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-ochre/70"></div>Good season</div>
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-[#8a7a30]/55"></div>Quieter season</div>
            <div className="flex items-center gap-2 text-[0.72rem] opacity-60"><div className="w-2.5 h-2.5 rounded-sm bg-dust/15"></div>Low season</div>
          </div>
          <div className="p-8 bg-[#4a7c9c]/8 border-l-4 border-[#4a7c9c]">
            <p className="text-[0.9rem] leading-relaxed opacity-70"><strong className="text-ochre font-medium">Our honest recommendation:</strong> The <strong>July to October window</strong> is Amboseli at its absolute finest. The long dry season means wildlife concentrates around the permanent swamps, Kilimanjaro is at its clearest. January and February are excellent for clear skies and fewer crowds. <strong>Avoid April and May</strong> unless you don't mind heavy rain.</p>
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
            Your home with a<br/><em className="text-ochre not-italic">mountain view</em>
          </h2>
          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#0d1820] to-[#1a2a3a] to-[#2a3a4a]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(74,124,156,0.25),transparent_55%)]" />
              <div className="absolute top-8 right-8 z-20 bg-dusk/88 border border-[#4a7c9c]/35 p-4 backdrop-blur-sm text-center">
                <div className="text-[#e8a020] text-sm tracking-wider">★★★★</div>
                <div className="text-[0.6rem] tracking-[0.15em] uppercase opacity-45 mt-1">Safari Lodge</div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-normal mb-2">Amboseli Serena Safari Lodge</h3>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-ochre mb-5">Luxury Lodge · Park Border · Kilimanjaro Views</div>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-6">Built in the style of a traditional Maasai manyatta, this lodge sits on the edge of the park with unobstructed views of Kilimanjaro from almost every room. The architecture is local stone and makuti thatch.</p>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-8">Wake up, draw back your curtains, and Kilimanjaro is there. The pool overlooks the plains. Elephants are regular visitors at the waterhole below the restaurant.</p>
              <div className="grid grid-cols-2 gap-3">
                {["En-suite bathrooms", "Kilimanjaro views", "Swimming pool", "Restaurant & bar", "Curio shop", "WiFi in lobby", "Room service", "Laundry service", "Daily housekeeping", "Gift shop", "Evening campfire", "Nature walks"].map((a) => (
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
          What Families Say
        </div>
        <h2 className="font-serif text-5xl font-light leading-tight mb-8">
          Real words from <em className="text-ochre not-italic">real families</em>
        </h2>
        <p className="font-serif text-3xl font-light italic leading-relaxed max-w-3xl mx-auto mb-6 text-dust">
          "On our second morning, we watched a family of elephants — maybe 40 of them — walk within five metres of our vehicle. The babies were right at the front. <em className="text-ochre not-italic">Kilimanjaro was in perfect view behind them.</em> That image is now on our wall at home."
        </p>
        <div className="text-[0.8rem] opacity-45 tracking-[0.15em] uppercase mb-16">— Marcus & Fiona Oduya, Johannesburg · Family of 4 · August 2024</div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { stars: "★★★★★", text: "Our guide Sam was exceptional. He knew every elephant family by name. We saw a calf born on Day 2. We stayed for two hours watching it find its feet.", auth: "Ingrid & Pieter van Dijk — Amsterdam · Family · Sep 2024" },
            { stars: "★★★★★", text: "The balloon was worth every cent. Floating silently over the park at sunrise with Kilimanjaro on one side and 1,000 elephants below us. My husband proposed in the basket.", auth: "Charlotte & James Kimani — Nairobi · Couple · Oct 2024" },
            { stars: "★★★★★", text: "As a wildlife photographer, Amboseli is the holy grail. The light, the elephants, the mountain. I came home with 12,000 images and three I'll frame forever.", auth: "David Mwangi — Nairobi · Solo · Jan 2025" }
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
              Kilimanjaro is waiting.<br/>So is <em className="text-ochre not-italic">your family.</em>
            </h2>
            <p className="text-[0.95rem] leading-relaxed opacity-62 mb-10">Amboseli's lodges fill up quickly during the June–October peak. A 20% deposit holds your dates — balance due 60 days before travel.</p>
            <div className="p-6 bg-[#4a7c9c]/10 border border-[#4a7c9c]/25 mb-8">
              <p className="text-[0.82rem] opacity-75 leading-relaxed"><strong className="text-[#4a7c9c]">July & August 2025:</strong> Only 4 lodge rooms remaining for families of 4. <strong>September–October 2025:</strong> Rooms available but lodges with best views nearly full. <strong>January–February 2026:</strong> Excellent availability.</p>
            </div>
            <div className="space-y-3">
              {["Free cancellation up to 60 days before travel", "20% deposit to confirm — no full payment upfront", "Price match guarantee on packages", "24/7 in-country support throughout your trip", "Over 1,800 five-star reviews", "Kenya Tourism Board licensed operator"].map((item) => (
                <div key={item} className="text-[0.8rem] opacity-55 flex items-center gap-3"><span className="text-[#4a7c9c] font-semibold">✓</span> {item}</div>
              ))}
            </div>
          </div>
          <div className="bg-bark/80 border border-dust/8 p-10">
            <h3 className="font-serif text-3xl font-normal mb-4">Amboseli Classic Safari</h3>
            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-dust/6">
              <span className="font-serif text-5xl font-light text-ochre">$1,650</span>
              <span className="text-[0.72rem] opacity-45">per person · 3 days / 2 nights</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">First Name</label>
                <input type="text" placeholder="Jane" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
              </div>
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Last Name</label>
                <input type="text" placeholder="Ochieng" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
              </div>
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Email Address</label>
              <input type="email" placeholder="jane@example.com" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
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
                  <option>January 2026</option>
                  <option>February 2026</option>
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
              <input type="text" placeholder="Dietary needs, mobility, children's ages, special requests…" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#4a7c9c]/50" />
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
