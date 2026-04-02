'use client'

import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="bg-dusk text-dust">
      {/* FEATURED HERO WITH BWINDI IMAGE */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bwindi%20Forest-gIiVyTLcwtTU2YKTblAL44MGQOxM3y.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-dusk via-dusk/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl w-full">
          <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-6 flex items-center gap-4">
            <span className="block w-10 h-px bg-ochre"></span>
            Beyond Destinations Into The Wild
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-dust">
            Where the Wild Calls Your Name
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-85 max-w-xl mb-10 text-dust">
            Journey into the heart of Kenya, Tanzania, Uganda, Rwanda and beyond — where ancient landscapes hold the world's greatest wildlife spectacles.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10 max-w-sm">
            <div>
              <p className="font-serif text-4xl text-ochre">6+</p>
              <p className="text-xs uppercase tracking-wider text-dust/70 mt-2">Countries</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-ochre">200+</p>
              <p className="text-xs uppercase tracking-wider text-dust/70 mt-2">Safari Routes</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-ochre">12K+</p>
              <p className="text-xs uppercase tracking-wider text-dust/70 mt-2">Explorers</p>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="#packages" className="bg-clay text-dusk px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-ochre transition-colors">
              Explore Safaris
            </a>
            <a href="#destinations" className="border border-dust/50 text-dust px-8 py-4 text-sm uppercase tracking-wider hover:border-dust transition-colors">
              Our Destinations
            </a>
          </div>
        </div>
      </section>

      {/* MAIN HERO SECTION */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-start overflow-hidden pt-24">
        {/* Hero Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0804] via-dusk to-[#2a1a0a]"></div>
          <div className="absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: 'radial-gradient(ellipse at 70% 40%, rgb(200,98,42), transparent 60%)'
            }}></div>
        </div>

        {/* Silhouette */}
        <svg className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 -z-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#100a04" d="M0,160 C80,130 160,80 280,100 C340,110 360,60 420,50 C480,40 500,90 560,80 C640,65 680,20 760,10 C820,2 840,50 900,60 C960,70 980,30 1060,25 C1140,20 1180,60 1260,70 C1320,78 1380,50 1440,60 L1440,320 L0,320 Z"></path>
        </svg>

        {/* Acacia Trees SVG */}
        <svg className="absolute bottom-0 right-12 w-96 opacity-55 -z-5 animate-sway" viewBox="0 0 380 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="180" y="200" width="8" height="220" fill="#1a0e06"/>
          <line x1="184" y1="200" x2="100" y2="160" stroke="#1a0e06" strokeWidth="5"/>
          <line x1="184" y1="200" x2="260" y2="150" stroke="#1a0e06" strokeWidth="5"/>
          <line x1="184" y1="230" x2="80" y2="210" stroke="#1a0e06" strokeWidth="3"/>
          <line x1="184" y1="230" x2="290" y2="200" stroke="#1a0e06" strokeWidth="3"/>
          <ellipse cx="184" cy="130" rx="120" ry="40" fill="#1a0e06" opacity="0.9"/>
          <ellipse cx="100" cy="145" rx="60" ry="22" fill="#1a0e06" opacity="0.8"/>
          <ellipse cx="265" cy="138" rx="70" ry="24" fill="#1a0e06" opacity="0.8"/>
          <rect x="55" y="280" width="5" height="140" fill="#1a0e06"/>
          <line x1="58" y1="280" x2="20" y2="255" stroke="#1a0e06" strokeWidth="3"/>
          <line x1="58" y1="280" x2="100" y2="252" stroke="#1a0e06" strokeWidth="3"/>
          <ellipse cx="58" cy="238" rx="55" ry="20" fill="#1a0e06" opacity="0.8"/>
          <ellipse cx="22" cy="248" rx="28" ry="12" fill="#1a0e06" opacity="0.7"/>
          <ellipse cx="98" cy="244" rx="32" ry="13" fill="#1a0e06" opacity="0.7"/>
          <rect x="300" y="290" width="6" height="130" fill="#1a0e06"/>
          <line x1="303" y1="290" x2="260" y2="265" stroke="#1a0e06" strokeWidth="3"/>
          <line x1="303" y1="290" x2="345" y2="262" stroke="#1a0e06" strokeWidth="3"/>
          <ellipse cx="303" cy="248" rx="60" ry="22" fill="#1a0e06" opacity="0.8"/>
        </svg>

        {/* Content */}
        <div className="relative z-10 px-20 max-w-4xl animate-fade-up max-sm:px-6">
          <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-8 flex items-center gap-4">
            <span className="block w-10 h-px bg-ochre"></span>
            Beyond Destinations Into The Wild
          </div>
          <h1 className="font-serif text-7xl lg:text-8xl font-light leading-tight mb-6 text-dust">
            Where the <em className="text-ochre italic font-light">Wild</em><br />Calls Your Name
          </h1>
          <p className="text-lg leading-relaxed opacity-72 max-w-md mb-8">
            Journey into the heart of Kenya, Tanzania, Uganda, Rwanda and beyond — where ancient landscapes hold the world's greatest wildlife spectacles.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#packages" className="bg-clay text-dusk px-6 py-4 text-sm uppercase tracking-wider font-medium hover:bg-ochre transition-colors">
              Explore Safaris
            </a>
            <a href="#destinations" className="border border-dust/35 text-dust px-6 py-4 text-sm uppercase tracking-wider hover:border-dust transition-colors">
              Our Destinations
            </a>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="absolute right-20 bottom-20 flex flex-col gap-6 z-10 max-sm:hidden">
          <div className="text-right">
            <div className="font-serif text-4xl text-ochre">6+</div>
            <div className="text-xs uppercase tracking-wider opacity-50 mt-1">Countries</div>
          </div>
          <div className="text-right">
            <div className="font-serif text-4xl text-ochre">200+</div>
            <div className="text-xs uppercase tracking-wider opacity-50 mt-1">Safari Routes</div>
          </div>
          <div className="text-right">
            <div className="font-serif text-4xl text-ochre">12K+</div>
            <div className="text-xs uppercase tracking-wider opacity-50 mt-1">Happy Travellers</div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-20 z-10 text-xs uppercase tracking-wider opacity-45 flex items-center gap-3 max-sm:hidden">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-dust to-transparent"></div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-clay py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Maasai Mara, Kenya ✦</span>
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Serengeti, Tanzania ✦</span>
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Bwindi, Uganda ✦</span>
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Volcanoes NP, Rwanda ✦</span>
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Amboseli, Kenya ✦</span>
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Ngorongoro, Tanzania ✦</span>
              <span className="text-sm uppercase tracking-wider text-dusk font-medium">Simien Mountains, Ethiopia ✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* DESTINATIONS SECTION */}
      <section id="destinations" className="py-28 px-20 bg-[#110c06] max-sm:px-6">
        <div className="grid grid-cols-2 gap-16 mb-12 max-md:grid-cols-1">
          <div>
            <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="block w-7 h-px bg-clay"></span>
              Destinations
            </div>
            <h2 className="font-serif text-5xl font-light mb-4">
              Six Nations,<br /><em className="text-ochre italic">Infinite</em> Stories
            </h2>
          </div>
          <p className="opacity-65 leading-relaxed">
            From the Great Migration on the Serengeti plains to mountain gorillas in Bwindi's ancient forests — every corner of East Africa holds a world-class encounter with nature in its purest form.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {/* Kenya - Featured */}
          <div 
            className="row-span-2 relative bg-[#1e1208] overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kenya%20big%205-zJcVlnQoIix0ZUKkwD21gtmte5VswL.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] via-[#c8622a] to-[#DAA520] opacity-40 group-hover:opacity-30 transition-opacity duration-600"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0a0602] to-transparent">
              <div className="text-ochre text-xs uppercase tracking-wider opacity-85 mb-1">Kenya</div>
              <h3 className="font-serif text-2xl mb-3">Maasai Mara & Beyond</h3>
              <p className="text-sm opacity-75 leading-relaxed mb-3">Home to Africa's iconic Big Five — elephants, lions, and more in their natural habitat.</p>
              <span className="text-xs border border-clay/50 text-clay px-2 py-1 w-fit">Big Five Safari</span>
            </div>
          </div>

          {/* Tanzania */}
          <div 
            className="relative bg-[#1e1208] overflow-hidden group cursor-pointer aspect-[3/4]"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti%20migration-vdcYvDXQY1fxOtzzCd2J1JvMWIjQkw.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c] via-[#2d5a1b] to-[#8B4513] opacity-40 group-hover:opacity-30 transition-opacity duration-600"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0a0602] to-transparent">
              <div className="text-ochre text-xs uppercase tracking-wider opacity-85 mb-1">Tanzania</div>
              <h3 className="font-serif text-xl">Serengeti & Ngorongoro</h3>
              <span className="text-xs border border-clay/50 text-clay px-2 py-1 w-fit mt-2">The Great Migration</span>
            </div>
          </div>

          {/* Uganda */}
          <div 
            className="relative bg-[#1e1208] overflow-hidden group cursor-pointer aspect-[3/4]"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bwindi%20Forest-gIiVyTLcwtTU2YKTblAL44MGQOxM3y.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a2d0a] via-[#1a5c1a] to-[#4a8c2a] opacity-40 group-hover:opacity-30 transition-opacity duration-600"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0a0602] to-transparent">
              <div className="text-ochre text-xs uppercase tracking-wider opacity-85 mb-1">Uganda</div>
              <h3 className="font-serif text-xl">Bwindi Forest</h3>
              <span className="text-xs border border-clay/50 text-clay px-2 py-1 w-fit mt-2">Mountain Gorillas</span>
            </div>
          </div>

          {/* Rwanda */}
          <div 
            className="relative bg-[#1e1208] overflow-hidden group cursor-pointer aspect-[3/4]"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volcanoes%20NP%20Primates-ir40ZnRVNDoMVuodjZe5s51xxXNFsg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d0a] via-[#2d5c1a] to-[#6aaa3a] opacity-40 group-hover:opacity-30 transition-opacity duration-600"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0a0602] to-transparent">
              <div className="text-ochre text-xs uppercase tracking-wider opacity-85 mb-1">Rwanda</div>
              <h3 className="font-serif text-xl">Volcanoes NP</h3>
              <span className="text-xs border border-clay/50 text-clay px-2 py-1 w-fit mt-2">Golden Monkeys</span>
            </div>
          </div>

          {/* Ethiopia */}
          <div 
            className="relative bg-[#1e1208] overflow-hidden group cursor-pointer aspect-[3/4]"
            style={{
              backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simien_Mountains-PvKW8hTMyt4vQujI6nhaauyhiARRCf.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3a0a0a] via-[#8B3a1a] to-[#c8622a] opacity-40 group-hover:opacity-30 transition-opacity duration-600"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#0a0602] to-transparent">
              <div className="text-ochre text-xs uppercase tracking-wider opacity-85 mb-1">Ethiopia</div>
              <h3 className="font-serif text-xl">Simien Mountains</h3>
              <span className="text-xs border border-clay/50 text-clay px-2 py-1 w-fit mt-2">Highland Adventure</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-28 px-20 bg-dusk max-sm:px-6">
        <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
          <span className="block w-7 h-px bg-clay"></span>
          Why Choose Us
        </div>
        <h2 className="font-serif text-5xl font-light mb-16">
          Safari Done<br /><em className="text-ochre italic">Right</em>
        </h2>
        
        <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
          {/* Visual */}
          <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1a0e06] to-[#2d1a0a] overflow-hidden">
            <div className="absolute inset-0 opacity-30" 
              style={{
                backgroundImage: 'radial-gradient(ellipse at 40% 60%, rgba(200,98,42,0.3), transparent 60%)'
              }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 border border-ochre/50 rounded-full flex flex-col items-center justify-center bg-dusk/85 backdrop-blur">
                <div className="font-serif text-4xl text-ochre">15+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 text-center mt-2">Years of<br/>Safari Excellence</div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-8">
            {[
              { icon: '🦁', title: 'Expert Local Guides', desc: 'Our guides are born from these lands — native trackers and naturalists with decades of reading the wild.' },
              { icon: '🏕️', title: 'Luxury Bush Camps', desc: 'Sleep under the stars in handpicked lodges and tented camps — from intimate family-run hideaways to iconic luxury properties.' },
              { icon: '🌍', title: 'Responsible Tourism', desc: 'Conservation is our compass. We partner with local communities and wildlife charities to protect the landscapes we love.' },
              { icon: '✈️', title: 'End-to-End Planning', desc: 'Flights, visas, transfers, accommodation, game drives — we handle every detail so you simply arrive and let the wild take over.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 pb-6 border-b border-dust/10 last:border-0">
                <div className="w-12 h-12 border border-clay/30 flex items-center justify-center flex-shrink-0 bg-clay/10 text-xl">{item.icon}</div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="h-72 flex gap-1 p-1 overflow-hidden bg-dusk">
        {[
          { label: 'Lion Country, Kenya', grad: 'from-[#2d1a0a] via-[#c8622a] to-[#DAA520]' },
          { label: 'Serengeti Dawn', grad: 'from-[#0a2d0a] via-[#228B22] to-[#87CEEB]' },
          { label: 'Ngorongoro Stars', grad: 'from-[#0a0a2d] via-[#1a1a6c] to-[#8B4513]' },
          { label: 'Bwindi Gorillas', grad: 'from-[#2d0a0a] via-[#8B0000] to-[#D2691E]' },
          { label: 'Canopy Rwanda', grad: 'from-[#0a2d1a] via-[#006400] to-[#4a8c2a]' }
        ].map((item, i) => (
          <div key={i} className="flex-1 group cursor-pointer overflow-hidden relative hover:flex-[2.5] transition-flex duration-500">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.grad} opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500`}></div>
            <div className="absolute bottom-4 left-4 right-4 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-dust">{item.label}</div>
          </div>
        ))}
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="py-28 px-20 bg-[#110c06] max-sm:px-6">
        <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
          <span className="block w-7 h-px bg-clay"></span>
          Safari Packages
        </div>
        <h2 className="font-serif text-5xl font-light mb-12">
          Choose Your <em className="text-ochre italic">Journey</em>
        </h2>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {[
            { duration: '5 Days · 4 Nights', name: 'Classic Kenya', price: '$2,100', featured: false },
            { duration: '10 Days · 9 Nights', name: 'East Africa Grand', price: '$4,800', featured: true },
            { duration: '8 Days · 7 Nights', name: 'Gorilla & Savanna', price: '$3,900', featured: false }
          ].map((pkg, i) => (
            <div key={i} className={`border p-10 ${pkg.featured ? 'border-clay/50 bg-gradient-to-br from-clay/10 to-dusk' : 'border-dust/10'} relative`}>
              {pkg.featured && <div className="absolute top-4 right-4 bg-clay text-dusk text-xs uppercase px-3 py-1 font-medium">Most Popular</div>}
              <div className="text-ochre text-xs uppercase tracking-wider mb-4">{pkg.duration}</div>
              <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-xs opacity-50 uppercase">From</span>
                <span className="font-serif text-3xl">{pkg.price}</span>
                <span className="text-xs opacity-45">/person</span>
              </div>
              <ul className="space-y-2 mb-8 text-sm opacity-70">
                <li>— Daily game drives</li>
                <li>— Luxury accommodation</li>
                <li>— Expert guides included</li>
                <li>— All meals provided</li>
              </ul>
              <a href="#contact" className={`block text-center py-3 text-sm uppercase tracking-wider transition-all ${pkg.featured ? 'bg-clay text-dusk hover:bg-ochre' : 'border border-dust/20 text-dust hover:bg-clay hover:text-dusk hover:border-clay'}`}>
                View Package
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-28 px-20 bg-dusk max-sm:px-6">
        <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
          <span className="block w-7 h-px bg-clay"></span>
          Stories from the Bush
        </div>
        <h2 className="font-serif text-5xl font-light mb-12">
          Travellers <em className="text-ochre italic">Speak</em>
        </h2>

        <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
          {/* Main Quote */}
          <div>
            <div className="font-serif text-9xl text-clay opacity-15 -mb-8">"</div>
            <p className="font-serif text-2xl font-light leading-relaxed mb-6 opacity-90">
              Watching a lioness hunt at golden hour in the Mara — I have no words. Savanna & Soul made every single moment feel orchestrated by the universe itself.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-clay to-ochre flex items-center justify-center text-dusk font-serif">S</div>
              <div>
                <div className="text-sm font-medium">Sarah Mitchell</div>
                <div className="text-xs opacity-45">London, United Kingdom</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-7 h-1 bg-clay"></div>
              <div className="w-7 h-1 bg-dust/20"></div>
              <div className="w-7 h-1 bg-dust/20"></div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="space-y-4">
            {[
              { stars: 5, text: 'The gorilla trek in Bwindi was the most humbling experience of my life. Pure magic.', author: 'James & Priya Okafor — Lagos, Nigeria' },
              { stars: 5, text: 'Our guide Moses knew every animal by name. The most informed guide on any trip worldwide.', author: 'Elena Fontaine — Paris, France' },
              { stars: 5, text: 'Ten days through Kenya and Tanzania — worth every single cent and then some.', author: 'David Chen — Toronto, Canada' }
            ].map((testi, i) => (
              <div key={i} className="p-4 border border-dust/10 bg-dusk/50">
                <div className="text-ochre text-sm mb-2">★★★★★</div>
                <p className="text-sm opacity-65 leading-relaxed mb-3">{testi.text}</p>
                <div className="text-xs opacity-45">{testi.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-32 px-20 bg-gradient-to-br from-[#0d0804] via-dusk to-[#1a0e06] text-center max-sm:px-6">
        <div className="text-ochre text-xs uppercase tracking-[0.35em] mb-4 flex items-center justify-center gap-3">
          <span className="block w-7 h-px bg-clay"></span>
          Plan Your Safari
          <span className="block w-7 h-px bg-clay"></span>
        </div>
        <h2 className="font-serif text-6xl font-light mb-4">
          Your <em className="text-ochre italic">Wild</em> Awaits
        </h2>
        <p className="opacity-60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us your dream and we'll craft the perfect East African adventure — tailor-made, down to the last sunset.
        </p>
        <div className="flex gap-2 max-w-md mx-auto max-sm:flex-col">
          <input type="email" placeholder="Your email address" className="flex-1 bg-dust/10 border border-dust/20 text-dust px-4 py-3 text-sm placeholder:opacity-40 focus:border-clay outline-none transition-colors" />
          <button className="bg-clay text-dusk px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-ochre transition-colors whitespace-nowrap">Start Planning →</button>
        </div>
      </section>

      <style jsx>{`
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(0.8deg); }
        }
        .animate-sway {
          animation: sway 8s ease-in-out infinite;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1.2s ease both;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </main>
    <Footer />
  )
}
