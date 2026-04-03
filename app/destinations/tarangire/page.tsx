import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function TarangirePage() {
  return (
    <main className="min-h-screen bg-deep">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/tarangire-elephants.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1808] via-[#1a0e04] to-[#0d0a04]" />

        {/* Baobab silhouettes */}
        <div className="absolute top-15% left-20% w-48 h-64 opacity-20">
          <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
            <circle cx="50" cy="30" r="25" fill="#1a0e06"/>
            <path d="M50 55 Q40 80 45 150 M50 55 L55 100 M50 55 Q60 80 55 150" stroke="#1a0e06" strokeWidth="4" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Sun glow */}
        <div className="absolute top-12% right-25% w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(200,98,42,0.5),rgba(180,60,30,0.2),transparent_70%)] animate-pulse" />

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
              Nomads Ridge Safaris <span className="text-ochre">›</span> Tanzania <span className="text-ochre">›</span> Tarangire
            </div>
            <h1 className="font-serif text-7xl font-light leading-none mb-2">
              Tarangire<br/><em className="text-[#c8622a] not-italic">National Park</em>
            </h1>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[#e8a020] opacity-90 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#e8a020]"></span>
              Tanzania, East Africa · 2,850 km²
            </div>
            <p className="font-serif text-xl italic opacity-72 mb-10 leading-relaxed max-w-lg">
              "The land of the giants — where thousands of elephants converge during dry season, where baobabs stand timeless, and where rivers hold the secret of survival."
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
              <div className="text-[0.7rem] tracking-[0.2em] uppercase opacity-50">Rated by 1,400+ travellers</div>
            </div>
            <div className="bg-dusk/80 border border-[#c8622a]/30 p-6 backdrop-blur-sm">
              <div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45">Classic Package From</div>
              <div className="font-serif text-5xl font-light text-dust leading-none">$1,600</div>
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
            When the dry season hits, Tarangire becomes an <em className="text-ochre not-italic">elephant highway</em>. Thousands gather at the river — the only reliable water source. You stand among giants, literally surrounded by generations of elephants.
          </p>
          <p className="text-lg leading-relaxed opacity-68">
            And when you're not watching elephants, you're looking up at baobabs — ancient, timeless trees that have stood for centuries. Tarangire is Tanzania's least crowded major park, and its dry season concentration makes it the elephant capital of East Africa.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-[#100c06] py-28 px-12" id="about">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#2a1808] to-[#3a2010]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(200,98,42,0.4),rgba(180,60,30,0.2),transparent_55%),linear-gradient(to_bottom,#3a2010,#0d0804_60%,#1a1008)]" />
            <div className="absolute bottom-16 right-12 z-20 bg-dusk/88 border border-[#c8622a]/40 p-5 backdrop-blur-sm text-center">
              <div className="font-serif text-4xl font-light text-[#c8622a] leading-none">Thousands</div>
              <div className="text-[0.6rem] tracking-[0.2em] uppercase opacity-50 mt-1">Elephants gather</div>
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.35em] uppercase text-[#c8622a] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c8622a]"></span>
              Why Tarangire
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">
              Elephant paradise <em className="text-ochre not-italic">in the dry season</em>
            </h2>
            <p className="text-base leading-relaxed opacity-65 mb-12">
              Tarangire is Tanzania's least visited major park, which means fewer vehicles and more authentic safari. During dry season (Jun-Oct), the elephant concentration is extraordinary.
            </p>
            <div className="space-y-8">
              {[
                { num: "01", title: "Dry season elephant congregations", desc: "From June to October, thousands of elephants converge at the Tarangire River — the only reliable water during drought. It's one of Africa's greatest wildlife spectacles, yet rarely as crowded as Serengeti." },
                { num: "02", title: "Ancient baobab forests", desc: "Tarangire's defining feature is its baobabs — some over 300 years old. They dominate the landscape, standing silent as generations of wildlife pass beneath them." },
                { num: "03", title: "The quieter safari experience", desc: "Tarangire gets a fraction of the visitors of Serengeti or Ngorongoro. You'll often have entire sections of the park to yourself. This is real safari, not tourism theater." },
                { num: "04", title: "Diverse habitats in one park", desc: "Acacia woodland, swamps, rocky hills, riverine forest — Tarangire contains extraordinary variety. Each habitat attracts different species." }
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
              Four days of <em className="text-ochre not-italic">elephant immersion</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">Tarangire rewards patience. Spend your days at waterholes, follow elephant herds, watch the river drama unfold. This is deliberate, focused safari.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[
              { tag: "Jun-Oct Peak", title: "The Great Congregation", desc: "Watch thousands of elephants gather at the Tarangire River during dry season. Mothers with calves, bulls with massive tusks, entire families moving to water.", detail: "Best time · Multiple daily drives", color: "from-[#3a2010] to-[#2a1808]" },
              { tag: "Daily", title: "Baobab Forest Drives", desc: "Drive through ancient baobab groves. These massive trees have stood for centuries, their gnarled trunks and spreading branches creating an almost mystical landscape.", detail: "400+ year old trees", color: "from-[#2a1a08] to-[#4a3020]" },
              { tag: "Anytime", title: "River Waterhole Sessions", desc: "Spend hours at the Tarangire River watching wildlife drama. Elephants pushing tusks. Lions stalking. Hippos jostle for position. The river is the stage, drama plays hourly.", detail: "All seasons · Every drive", color: "from-[#0a1a1a] to-[#2a4040]" },
              { tag: "Day 2-3", title: "Bird Paradise", desc: "Over 550 bird species recorded in Tarangire. Secretary birds strut on the plains. Golden eagles hunt overhead. Tarangire is a birder's dream destination.", detail: "550+ species · Any season", color: "from-[#1a1a2a] to-[#0d0804]" },
              { tag: "Dry Season", title: "Predator Activity", desc: "Concentrate wildlife draws predators. Lions hunt strategically. Leopards work the riverine forest. Cheetahs chase gazelles on open plains.", detail: "Peak predator season", color: "from-[#1a0808] to-[#8a3020]" },
              { tag: "Every Evening", title: "Sunset from the Plains", desc: "End each day on a rocky outcrop or waterhole, watching the sun drop over Tarangire's landscape. The light transforms ancient baobabs into monuments.", detail: "Every evening · Sundowner included", color: "from-[#4a3010] to-[#DAA020]" }
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
              The elephant <em className="text-ochre not-italic">congregation</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62 mb-8">
              Tarangire is defined by elephants during dry season. But the river and landscape support a complete ecosystem — every major predator and ungulate species in Tanzania.
            </p>
            <div className="flex gap-10">
              <div><div className="font-serif text-4xl font-light text-[#c8622a]">1,000s</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Elephants</div></div>
              <div><div className="font-serif text-4xl font-light text-[#c8622a]">550+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Bird species</div></div>
              <div><div className="font-serif text-4xl font-light text-[#c8622a]">400+</div><div className="text-[0.62rem] tracking-[0.2em] uppercase opacity-45 mt-1">Year old baobabs</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 px-4 py-3 bg-[#c8622a]/8 border border-[#c8622a]/15 text-[0.62rem] tracking-[0.25em] uppercase text-[#c8622a] text-center">🏆 The Big Five</div>
            {[
              { emoji: "🐘", name: "African Elephant", note: "Thousands during dry season", check: "✓ Very common" },
              { emoji: "🦁", name: "African Lion", note: "River territory hunters", check: "✓ Common" },
              { emoji: "🐃", name: "African Buffalo", note: "River dependent herds", check: "✓ Very common" },
              { emoji: "🐆", name: "Leopard", note: "Riverine forest specialist", check: "✓ Common" },
              { emoji: "🦏", name: "Black Rhino", note: "Shy · occasional sightings", check: "◆ Rare" },
              { emoji: "🦒", name: "Giraffe", note: "Acacia woodland browser", check: "✓ Very common" },
              { emoji: "🦓", name: "Plains Zebra", note: "Grass grazers", check: "✓ Very common" },
              { emoji: "🦛", name: "Hippopotamus", note: "Large river pods", check: "✓ Very common" },
              { emoji: "🐆", name: "Cheetah", note: "Open plains hunters", check: "✓ Common" },
              { emoji: "🦅", name: "Secretary Bird", note: "Snake-stomping legend", check: "✓ Common" }
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
              Four days among <em className="text-ochre not-italic">the elephants</em>
            </h2>
            <p className="text-base leading-relaxed opacity-62">This is a focused, immersive safari. Days are long, with patience rewarded by intimate elephant encounters and the quiet majesty of baobab forests.</p>
          </div>
          <div className="space-y-0">
            {[
              { day: 1, sub: "Arrival Day · Arusha → Tarangire", title: "Enter the Baobab Kingdom", desc: "Drive from Arusha (2.5 hours) to Tarangire National Park. Enter through the main gate and immediately encounter the baobabs. Afternoon game drive along the Tarangire River. Watch the first elephants arrive at water. Sundowner on a river outcrop.", tags: ["Road Transfer", "Park Entry", "Afternoon Drive", "River Exploration", "Sundowner"] },
              { day: 2, sub: "Full Day · The Congregation", title: "Thousands of Elephants", desc: "This is peak elephant season (if visiting Jun-Oct). Spend the entire day following elephant herds, watching them crowd the river, following mothers with calves. Your guide will position you for incredible encounters. Morning drive, afternoon drive — both dedicated to elephant observation.", tags: ["Full Day Safari", "Elephant Tracking", "Bush Breakfast", "All Meals"] },
              { day: 3, sub: "Full Day · Diversity Day", title: "Beyond the Elephants", desc: "Explore different sections of Tarangire's diverse habitats. Hunt for the Big Five in different zones. Visit a rocky outcrop. Search for lions. Watch the bird life — over 550 species recorded. The landscape is more varied than you expect.", tags: ["Habitat Exploration", "Predator Tracking", "Birding", "All Meals"] },
              { day: 4, sub: "Departure Day · Final Morning Safari", title: "Last Light on the River", desc: "One final early morning drive along the Tarangire River. Watch the wildlife emerge as the sun rises. See if new herds have arrived overnight. Late breakfast, then return to Arusha or onward journey.", tags: ["Final Dawn Drive", "Farewell Breakfast", "Arusha Return"] }
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

      <Footer />
    </main>
  )
}
