import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function TsavoPage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/tsavo-red-earth.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1808] via-[#1a0e04] to-[#0d0a04]" />

        {/* Sun glow */}
        <div className="absolute top-10% right-25% w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(200,98,42,0.5),rgba(180,60,30,0.2),transparent_70%)] animate-pulse" />

        {/* Birds */}
        <svg className="absolute top-25% right-28% animate-bounce" width="100" height="50" viewBox="0 0 100 50" fill="none">
          <path d="M10 25 Q20 15 30 25" stroke="rgba(245,237,224,0.4)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M45 15 Q55 8 65 15" stroke="rgba(245,237,224,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M75 22 Q82 17 89 22" stroke="rgba(245,237,224,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>

        {/* Horizon SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[400px]">
            <path fill="rgba(26,18,8,0.5)" d="M0,230 C100,200 200,140 320,125 C400,115 450,75 550,62 C650,48 700,110 800,95 C880,82 920,40 1020,30 C1100,22 1150,75 1240,65 C1320,58 1380,85 1440,88 L1440,400 L0,400 Z"/>
            <rect x="200" y="175" width="7" height="225" fill="#1a0e06"/>
            <ellipse cx="203" cy="110" rx="95" ry="32" fill="#1a0e06" opacity="0.9"/>
            <rect x="1150" y="195" width="6" height="205" fill="#1a0e06"/>
            <ellipse cx="1152" cy="145" rx="80" ry="25" fill="#1a0e06" opacity="0.85"/>
            <ellipse cx="1200" cy="295" rx="28" ry="18" fill="#1a0e06" opacity="0.65"/>
          </svg>
        </div>

        <div className="relative z-10 px-12 pb-28 w-full flex justify-between items-end max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase opacity-45 mb-6 flex items-center gap-3">
              Nomads Ridge Safaris <span className="text-ochre">›</span> Kenya <span className="text-ochre">›</span> Tsavo
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Tsavo<br/><em className="text-[#c8622a] not-italic">National Park</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Kenya, East Africa · 22,812 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "Where the red elephants walk and the lion's roar echoes across an ancient landscape — the largest national park in Kenya, and one of the most wild."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 1,200+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-[#c8622a]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$1,450</div>
              <div className="text-[0.68rem] opacity-40">per person</div>
              <div className="text-[0.68rem] text-[#c8622a] opacity-45 mt-2">↓ Scroll to see what's included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="bg-dusk py-28 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-deep to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[0.68rem] tracking-[0.38em] uppercase text-[#c8622a] mb-8 flex items-center justify-center gap-4">
            <span className="w-10 h-px bg-[#c8622a]"></span>
            Why this place changes you
            <span className="w-10 h-px bg-[#c8622a]"></span>
          </div>
          <p className="font-serif text-4xl font-light italic leading-relaxed mb-10 text-dust">
            Tsavo is not curated. It is not polished. It is <em className="text-ochre not-italic">raw Africa</em> — the way it was before tourism, before fences, before anything but the animals and the land. When you drive into Tsavo, you understand why this park was legendary before the world was watching.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            At 22,812 km², Tsavo is larger than some countries. It is one of the oldest and largest parks in Kenya, home to the famous red elephants, great herds of buffalo, and one of the densest populations of lion on the continent. This is Africa without apology.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#2a1808] to-[#3a2010]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(200,98,42,0.4),rgba(180,60,30,0.2),transparent_55%),linear-gradient(to_bottom,#3a2010,#0d0804_60%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#c8622a]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#c8622a] leading-none">22,812</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">km² of wilderness</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c8622a]"></span>
              Why Tsavo
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Raw, vast, and<br/><em className="text-ochre not-italic">untamed</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Tsavo is for people who want to feel the weight of wilderness. Not a theme park. Not a parade. A landscape so vast that you can spend six days and still feel like you've only seen the edge of it.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "The famous red elephants", desc: "Tsavo's elephants roll in the red volcanic soil of the park, coating themselves in ochre dust. They look like creatures from another age, ancient and elemental." },
                { num: "02", title: "A vast, empty wilderness", desc: "At 22,812 km², Tsavo is one of the largest national parks in the world. In the dry season, you can drive for hours without seeing another vehicle." },
                { num: "03", title: "Extraordinary lion density", desc: "Tsavo has one of the highest concentrations of lions in Africa. These lions are experienced, intelligent, and completely wild — you earn every sighting." },
                { num: "04", title: "History runs through it", desc: "The Galana River cuts through the park, creating lush riparian corridors. The historical Tsavo River bridges were built by British engineers during construction of the Uganda Railway." }
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[2rem_1fr] gap-5 pb-8 border-b border-dust/6">
                  <div className="font-serif text-3xl font-light text-[#c8622a] opacity-50 text-right">{item.num}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c8622a]"></span>
              What You'll Experience
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Six days exploring<br/><em className="text-ochre not-italic">Kenya's wild heart</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Tsavo rewards patience. The sightings aren't guaranteed on schedule — they emerge when the land decides to show them.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Day 1-2", title: "Red Elephant Country", desc: "Find the famous red elephants of Tsavo — dust-bathing in volcanic soil, crossing the Galana River, entirely undisturbed.", detail: "Full days · Private vehicle", color: "from-[#3a2010] to-[#c8622a]" },
              { tag: "Day 3-4", title: "Lion Territory", desc: "Tsavo's lions are legendary. Your guide has spent years learning their patterns. Find them in the rocky outcrops and riverine forest.", detail: "Dawn & evening drives", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Day 5", title: "Galana River Safari", desc: "Follow the Galana River through the heart of the park. Hippos, crocodiles, and some of the best birdwatching in Kenya.", detail: "Full day river circuit", color: "from-[#0a1a1a] to-[#2a4040]" },
              { tag: "Day 6", title: "Lugard Falls", desc: "Visit the dramatic Lugard Falls — a series of rapids and gorges carved over millennia. The water roars through ancient rock formations.", detail: "Scenic drive included", color: "from-[#1a2a3a] to-[#0d0804]" },
              { tag: "Any Day", title: "Night Drive", desc: "When the sun sets, Tsavo changes completely. Nocturnal species emerge — aardvark, civet, and if you're lucky, the rare African wild dog.", detail: "Night drive available", color: "from-[#050518] to-[#0d0804]" },
              { tag: "Sunset", title: "Bush Sundowners", desc: "Watch the sun drop over the Tsavo plains from a secluded vantage point. Your guide has prepared a proper sundowner setup.", detail: "Included daily", color: "from-[#4a3010] to-[#DAA020]" }
            ].map((exp, i) => (
              <div key={i} className="bg-bark/70 border border-dust/7 overflow-hidden hover:border-[#c8622a]/40 transition-all hover:-translate-y-1">
                <div className={`h-48 relative bg-gradient-to-br ${exp.color} overflow-hidden`}>
                  <div className="absolute top-4 left-4 bg-dusk/85 border border-[#c8622a]/40 text-[0.58rem] tracking-[0.2em] uppercase text-[#c8622a] px-3 py-1 backdrop-blur-sm">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c8622a]"></span>
              Wildlife You'll Encounter
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              A park defined by<br/><em className="text-ochre not-italic">its scale</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Tsavo's size means its wildlife is less concentrated than in smaller parks — but what you lack in density, you gain in authenticity. This is how wildlife exists when nobody is watching.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#c8622a]">12,000+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Elephants</div></div>
              <div><div className="font-serif text-4xl font-light text-[#c8622a]">700+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Buffalo</div></div>
              <div><div className="font-serif text-4xl font-light text-[#c8622a]">850+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Lions</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#c8622a]/8 border border-[#c8622a]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#c8622a] text-center">🏆 The Big Five</div>
            {[
              { emoji: "🐘", name: "Red Elephant", note: "Famous red-coated elephants", check: "✓ Very common" },
              { emoji: "🦁", name: "African Lion", note: "850+ lions · high density", check: "✓ Very common" },
              { emoji: "🐃", name: "African Buffalo", note: "Large herds near Galana River", check: "✓ Very common" },
              { emoji: "🐆", name: "Leopard", note: "Found in riverine forest", check: "✓ Common" },
              { emoji: "🦏", name: "Black Rhino", note: "In protected sanctuary zone", check: "◆ Occasional" },
              { emoji: "🦛", name: "Hippo", note: "Large pods in Galana River", check: "✓ Common" },
              { emoji: "🐊", name: "Nile Crocodile", note: "Lugard Falls area", check: "✓ Common" },
              { emoji: "🦒", name: "Giraffe", note: "Reticulated & Masai types", check: "✓ Common" },
              { emoji: "🦓", name: "Zebra", note: "Common on open plains", check: "✓ Very common" },
              { emoji: "🐕", name: "Wild Dog", note: "Rare · pack sightings", check: "◆ Rare" }
            ].map((animal, i) => (
              <div key={i} className="px-5 py-4 border-b border-r border-dust/5 hover:bg-[#c8622a]/6 border-r-dust/5 last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{animal.emoji}</span>
                  <div>
                    <div className="text-sm font-normal">{animal.name}</div>
                    <div className="text-[0.68rem] opacity-40">{animal.note}</div>
                  </div>
                  <div className="ml-auto text-[0.8rem] text-[#c8622a] opacity-60">{animal.check}</div>
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c8622a]"></span>
              Your Day by Day
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-4">
              Six days. One<br/><em className="text-ochre not-italic">vast wilderness.</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is the classic Tsavo circuit — designed to take in the park's major habitats and wildlife zones over six immersive days.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Mombasa/Nairobi → Tsavo", title: "Enter the Wilderness", desc: "Depart early from Mombasa (2.5 hrs) or Nairobi (5 hrs scenic). Enter through the Tsavo East main gate. Check into your camp with views over the savanna. Afternoon game drive along the Galana River.", tags: ["Road Transfer", "Park Entry", "Afternoon Drive", "Camp Check-in"] },
              { day: 2, sub: "Full Day · Tsavo East", title: "The Red Elephants", desc: "A full day in Tsavo East searching for the famous red elephants. Your guide knows the exact zones where the largest herds congregate. Also look for buffalo herds of 500+ and the resident lion pride.", tags: ["Full Day Drive", "Red Elephant Tracking", "Buffalo Herds", "Lion Pride"] },
              { day: 3, sub: "Full Day · Tsavo West", title: "Rocky Outcrops & Lions", desc: "Cross into Tsavo West through the park's dramatic landscapes. The rocky outcrops of Tsavo West are prime lion territory. Also visit theMzima Springs — an oasis of crystal-clear water where hippos and fish are visible underwater.", tags: ["Tsavo West", "Lion Territory", "Mzima Springs", "Hippo Pools"] },
              { day: 4, sub: "Full Day · Galana River Circuit", title: "River Life", desc: "Follow the Galana River through the heart of the park. This riparian corridor is one of the most wildlife-dense areas in Tsavo. Crocodiles line the sandbanks, hippos crowd the pools, and birdlife is extraordinary.", tags: ["River Safari", "Croc Viewing", "Birding", "Photography"] },
              { day: 5, sub: "Full Day · Lugard Falls & South", title: "Ancient Landscapes", desc: "Drive south to Lugard Falls — a dramatic series of rapids and gorges. The journey takes you through increasingly remote and wild country. Keep watch for the rare African wild dog, which den in this remote sector.", tags: ["Lugard Falls", "Wild Dog Country", "Remote Safari", "Scenic Drive"] },
              { day: 6, sub: "Departure Day · Final Morning Drive", title: "Last Light in Tsavo", desc: "One final dawn drive before departure. Your guide will take a different route — maybe the open plains, maybe the river — wherever the wildlife has been most active. Late morning transfer out of the park.", tags: ["Final Dawn Drive", "Farewell Safari", "Transfer Out"] }
            ].map((day) => (
              <div key={day.day} className="grid grid-cols-[120px_1fr] border-b border-dust/6 hover:bg-bark/70 transition-colors">
                <div className="py-8 px-6 border-r border-dust/6 flex flex-col items-center justify-center text-center">
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase opacity-40">Day</div>
                  <div className="font-serif text-4xl font-light text-[#c8622a] leading-none mt-1">{day.day}</div>
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
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#c8622a]"></span>
            What's Included
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-16">
            Everything you need.<br/><em className="text-ochre not-italic">Nothing</em> to worry about.
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🏕️", title: "Luxury Tented Camp — 5 Nights", desc: "Your camp in Tsavo is set in a private conservancy bordering the park. The tents are spacious and well-appointed, with en-suite bathrooms and a private veranda overlooking the savanna.", ticks: ["En-suite tent accommodation", "Private veranda", "All meals included"], highlight: true },
              { icon: "🍽️", title: "All Meals Included", desc: "Full board from Day 1 lunch through Day 6 breakfast. Dinners are cooked over an open fire. Bush breakfasts are arranged in scenic locations within the park.", ticks: ["All breakfasts, lunches & dinners", "Bush breakfasts", "Non-alcoholic drinks"] },
              { icon: "🚗", title: "Private 4×4 Land Cruiser", desc: "Your vehicle exclusively for your group. Tsavo's size demands a proper safari vehicle. Pop-top roof, charging ports, and your guide knows every track.", ticks: ["Private vehicle", "Pop-top roof", "Fuel & park fees"] },
              { icon: "🧭", title: "Expert Tsavo Guide", desc: "Your guide has spent years in Tsavo specifically. He knows the red elephant zones, the lion prides, the wild dog den sites. Tsavo rewards guides who have put in the time.", ticks: ["Certified guide", "Tsavo specialist", "Local knowledge"] }
            ].map((item, i) => (
              <div key={i} className={`p-8 border ${item.highlight ? 'border-[#c8622a]/30 bg-[#c8622a]/6' : 'border-dust/7 bg-bark/50'} hover:border-[#c8622a]/25 transition-colors`}>
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-normal mb-2">{item.title}</h3>
                <p className="text-sm opacity-55 leading-relaxed mb-4">{item.desc}</p>
                {item.ticks.map((tick, j) => (
                  <div key={j} className="text-[0.78rem] opacity-65 mt-2 flex items-center gap-2">
                    <span className="text-[#c8622a] font-medium">✓</span> {tick}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 border border-dust/7">
            <h4 className="text-[0.68rem] tracking-[0.25em] uppercase text-dust/40 mb-4">Not Included</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[0.8rem] opacity-45">
              {["International flights", "Kenya visa", "Travel insurance", "Alcoholic beverages", "Gratuities", "Personal purchases"].map((item) => (
                <span key={item} className="flex items-center gap-2"><span>–</span> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-dusk py-28 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#c8622a]"></span>
            When to Go
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-12">
            The dry season is<br/><em className="text-ochre not-italic">your best bet.</em>
          </h2>
          <div className="grid grid-cols-12 gap-1 mb-8">
            {[
              { month: "Jan", level: "good", event: "Dry & clear" },
              { month: "Feb", level: "good", event: "Hot & dry" },
              { month: "Mar", level: "ok", event: "Short rains" },
              { month: "Apr", level: "low", event: "Long rains" },
              { month: "May", level: "low", event: "Long rains" },
              { month: "Jun", level: "good", event: "Dry season" },
              { month: "Jul", level: "peak", event: "Best wildlife" },
              { month: "Aug", level: "peak", event: "Peak season" },
              { month: "Sep", level: "peak", event: "Excellent" },
              { month: "Oct", level: "good", event: "Transitional" },
              { month: "Nov", level: "ok", event: "Short rains" },
              { month: "Dec", level: "good", event: "Festive" }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-[0.58rem] tracking-[0.1em] uppercase opacity-40 mb-2">{m.month}</div>
                <div className={`h-${m.level === 'peak' ? '[60px]' : m.level === 'good' ? '[40px]' : m.level === 'ok' ? '[24px]' : '[14px]'} rounded-sm mx-auto w-full ${m.level === 'peak' ? 'bg-[#c8622a]' : m.level === 'good' ? 'bg-ochre/70' : m.level === 'ok' ? 'bg-[#8a7a30]/55' : 'bg-dust/15'}`}></div>
                <div className="text-[0.54rem] opacity-50 mt-2 leading-tight">{m.event}</div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-[#c8622a]/8 border-l-4 border-[#c8622a]">
            <p className="text-[0.9rem] leading-relaxed opacity-70"><strong className="text-ochre font-medium">Our recommendation:</strong> Tsavo is best visited between <strong>July and October</strong> when wildlife congregates around water sources. January and February are also excellent. The park is large enough that even during the green season (April-May), you'll find wildlife in the riparian zones.</p>
          </div>
        </div>
      </section>

      {/* Lodge */}
      <section className="bg-[#100c06] py-28 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#c8622a]"></span>
            Where You'll Stay
          </div>
          <h2 className="font-serif text-5xl font-light leading-tight mb-16">
            Your base in<br/><em className="text-ochre not-italic">the red earth</em>
          </h2>
          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#2a1808] to-[#3a2010] to-[#4a3020]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(200,98,42,0.3),transparent_55%)]" />
              <div className="absolute top-8 right-8 z-20 bg-dusk/88 border border-[#c8622a]/35 p-4 backdrop-blur-sm text-center">
                <div className="text-[#e8a020] text-sm tracking-wider">★★★★</div>
                <div className="text-[0.6rem] tracking-[0.15em] uppercase opacity-45 mt-1">Tented Camp</div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-normal mb-2">Tsavo Rhino Camp</h3>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-ochre mb-5">Luxury Tented Camp · Park Border · Private Conservancy</div>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-6">This camp sits on a private conservancy bordering Tsavo East, offering exclusive access to a pristine wildlife zone that sees far fewer visitors than the main park. The camp has been designed to blend into the landscape — you feel immersed in the wilderness from your first moment.</p>
              <p className="text-[0.88rem] opacity-60 leading-relaxed mb-8">Each tent is spacious with canvas walls, proper beds, and an en-suite bathroom with hot water. The main camp area overlooks a waterhole that's frequently visited by elephant herds, especially in the dry season.</p>
              <div className="grid grid-cols-2 gap-3">
                {["En-suite tent accommodation", "Hot water shower", "Private veranda", "Main camp lounge", "Dining area", "Waterhole views", "Evening campfire", "Solar power", "Charging station", "Mosquito nets", "Laundry service", "Pack lunches available"].map((a) => (
                  <div key={a} className="text-[0.78rem] opacity-65 flex items-center gap-2">
                    <span className="text-[#c8622a] opacity-70 text-xs">◆</span> {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dusk py-28 px-12 text-center">
        <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center justify-center gap-3">
          What Travellers Say
        </div>
        <h2 className="font-serif text-5xl font-light leading-tight mb-8">
          Real words from<br/><em className="text-ochre not-italic">real adventurers</em>
        </h2>
        <p className="font-serif text-3xl font-light italic leading-relaxed max-w-3xl mx-auto mb-6 text-dust">
          "We went to Tsavo for the elephants and left with something we didn't expect — a sense of how vast and untouched Africa can still be. <em className="text-ochre not-italic">We drove for three hours and saw no other vehicles.</em> That doesn't happen anywhere else."
        </p>
        <div className="text-[0.8rem] opacity-45 tracking-[0.15em] uppercase mb-16">— Michael & Sarah Okonkwo, Lagos · Family of 4 · September 2024</div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { stars: "★★★★★", text: "Our guide in Tsavo was extraordinary. He told us later he'd been tracking that lion pride for 11 years. We found them within 40 minutes.", auth: "Hans & Greta Lindberg — Stockholm · Couple · Oct 2024" },
            { stars: "★★★★★", text: "Tsavo surprised me. I expected it to be 'the second choice' after Maasai Mara. It was actually my favourite park. So much more raw.", auth: "Chen Wei — Singapore · Solo · Aug 2024" },
            { stars: "★★★★★", text: "The red elephants. Just — the red elephants. Watching a herd of 80 cross the Galana River in the late afternoon light. I've never seen anything like it.", auth: "Priya Sharma — Mumbai · Family · Jan 2025" }
          ].map((t, i) => (
            <div key={i} className="p-6 border border-dust/7 bg-bark/70 hover:border-[#c8622a]/30 transition-colors text-left">
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
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c8622a]"></span>
              Reserve Your Safari
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              The wilderness is<br/><em className="text-ochre not-italic">waiting for you.</em>
            </h2>
            <p className="text-[0.95rem] leading-relaxed opacity-62 mb-10">Tsavo is one of Kenya's less-visited major parks — but word is getting out. July to October camps are already booking well. A 20% deposit holds your dates.</p>
            <div className="p-6 bg-[#c8622a]/10 border border-[#c8622a]/25 mb-8">
              <p className="text-[0.82rem] opacity-75 leading-relaxed"><strong className="text-[#c8622a]">July–October 2025:</strong> Limited availability for our exclusive camp. <strong>January–March 2026:</strong> Excellent availability. <strong>April–June 2026:</strong> Green season rates available.</p>
            </div>
            <div className="space-y-3">
              {["Free cancellation up to 60 days before travel", "20% deposit to confirm", "Price match guarantee", "24/7 in-country support", "Kenya Tourism Board licensed"].map((item) => (
                <div key={item} className="text-[0.8rem] opacity-55 flex items-center gap-3"><span className="text-[#c8622a] font-semibold">✓</span> {item}</div>
              ))}
            </div>
          </div>
          <div className="bg-bark/80 border border-dust/8 p-10">
            <h3 className="font-serif text-3xl font-normal mb-4">Tsavo Wilderness Safari</h3>
            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-dust/6">
              <span className="font-serif text-5xl font-light text-ochre">$1,450</span>
              <span className="text-[0.72rem] opacity-45">per person · 6 days / 5 nights</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">First Name</label>
                <input type="text" placeholder="James" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50" />
              </div>
              <div className="form-field">
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Last Name</label>
                <input type="text" placeholder="Mwangi" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50" />
              </div>
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Email Address</label>
              <input type="email" placeholder="james@example.com" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50" />
            </div>
            <div className="mb-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Phone / WhatsApp</label>
              <input type="tel" placeholder="+254 700 000 000" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">Travel Month</label>
                <select className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50 appearance-none">
                  <option>July 2025</option>
                  <option>August 2025</option>
                  <option>September 2025</option>
                  <option>October 2025</option>
                  <option>January 2026</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase opacity-50 mb-2 block">No. of Travellers</label>
                <select className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50 appearance-none">
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
              <input type="text" placeholder="Dietary needs, mobility, special requests…" className="w-full bg-dust/5 border border-dust/10 p-4 text-dust text-[0.88rem] outline-none focus:border-[#c8622a]/50" />
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
