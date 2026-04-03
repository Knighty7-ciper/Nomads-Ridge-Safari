'use client'

import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"
import TestimonialsCarousel from "@/components/sections/testimonials-carousel"

const blogPosts: Record<string, any> = {
  "ultimate-maasai-mara-safari-guide": {
    title: "All-Inclusive Kenya Safari Tours 2026/2027: Your Ultimate Guide",
    excerpt: "Are you dreaming of an unforgettable wildlife adventure?",
    content: `Are you dreaming of an unforgettable wildlife adventure? All-inclusive Kenya safari tours are the perfect way to experience Africa's most iconic landscapes and incredible wildlife without the stress of planning logistics.

## What Makes All-Inclusive Safaris Special?

An all-inclusive Kenya safari package takes the guesswork out of travel planning. From the moment you land at the airport to your final departure, every detail is coordinated—accommodations, meals, game drives, and expert guides.

## Why Kenya for Your Safari Adventure?

Kenya is home to the legendary Maasai Mara, where the Great Migration creates one of nature's most spectacular events. But that's just the beginning. The country offers:

- Diverse Ecosystems: From savannah to forests to highland terrain
- Abundant Wildlife: The Big Five and countless other species  
- Expert Guides: Local knowledge passed down through generations
- Luxury Accommodations: World-class lodges and tented camps
- Cultural Experiences: Interactions with Maasai and Samburu communities

## The Best Time to Visit

Peak season (July-October) offers the most dramatic wildlife encounters, especially during the Great Migration. However, shoulder seasons (April-June, November) provide excellent value with fewer crowds.

## Crafting Your Perfect Itinerary

A typical 7-10 day all-inclusive Kenya safari might include:

1. Days 1-2: Nairobi arrival and overnight
2. Days 3-5: Maasai Mara game drives
3. Days 6-7: Amboseli with Kilimanjaro views
4. Days 8-10: Return to Nairobi with rest days

## What's Included

Premium all-inclusive packages typically feature:
- Round-trip flights
- Accommodation in selected lodges
- All meals and beverages
- Daily game drives
- Professional guide services
- Park fees
- 24/7 support

## Final Thoughts

Kenya's safari experiences remain unmatched for combining natural beauty, wildlife abundance, and authentic cultural encounters. An all-inclusive tour ensures you focus on the adventure while experts handle everything else.`,
    author: "Sarah Johnson",
    date: "2026-03-20",
    category: "Safari Adventures",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lion%20country-MhAKVw2p8iOKDXDRZbQj97qQaR0QZH.jpg",
    readTime: "3 min read",
  },
  "best-time-kenya-tanzania": {
    title: "Kenya And Tanzania Safari Packages: Best Routes And Tips For 2026",
    excerpt: "Africa made it to your travel list of 2026, so there is nothing like visiting Kenya and Tanzania in a smooth tour.",
    content: `Africa made it to your travel list of 2026, so there is nothing like visiting Kenya and Tanzania in a smooth tour. A cross-border safari offers the ultimate wildlife diversity and breathtaking scenery across the legendary Maasai Mara into the expansive Serengeti plains.

## Why Combine Kenya and Tanzania?

Kenya and Tanzania share a common wildlife ecosystem along their borders. The Great Migration is the ultimate example—animals move from the Maasai Mara in Kenya to the Serengeti in Tanzania based on seasonal rainfall patterns.

Combining both countries in one safari gives you:

- Greater Value: Experience more destinations in less travel time
- Migration Diversity: Follow the herds across two ecosystems
- Scenic Variety: From volcanic craters to endless plains
- Cultural Richness: Encounter different communities and traditions
- Wildlife Abundance: Double the parks means double the wildlife encounters

## Best Routes for 2026

### Route 1: Classic Migration Circuit
Maasai Mara → Serengeti → Ngorongoro Crater - Perfect for first-time visitors and migration enthusiasts.

### Route 2: Diverse Ecosystems  
Amboseli → Tarangire → Ngorongoro → Serengeti - Offers stunning views and landscape variety.

### Route 3: Adventure with Beach
Northern Circuit + Zanzibar Extension - Ideal for honeymooners seeking safari and relaxation.

## Planning Tips for 2026

Book early as peak season lodges fill quickly. Consider shoulder seasons for better value. Check visa requirements for both countries. Choose between fly-in (faster) or overland (more affordable) safaris.

## Wildlife You'll Encounter

Expect to see the Big Five, elephant herds, countless bird species, and predator-prey interactions. The sheer volume and diversity of wildlife in these two countries is unmatched globally.

## Conclusion

Kenya and Tanzania safari packages remain the pinnacle of African travel experiences. With careful planning and the right itinerary, your 2026 adventure will be unforgettable.`,
    author: "James Mwangi",
    date: "2026-03-13",
    category: "Travel Planning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg",
    readTime: "5 min read",
  },
  "maasai-culture-guide": {
    title: "Comparing The Best Kenya Safari Tours Companies: Which One Fits Your Style?",
    excerpt: "It is thrilling to plan a safari in Kenya, though it may be frustrating to have to select between the best Kenya safari companies.",
    content: `It is thrilling to plan a safari in Kenya, though it may be frustrating to have to select between the best Kenya safari companies. Each operator brings different strengths, philosophies, and specialties.

## What to Look For

When evaluating safari operators, consider:

- Experience: Years in operation and local expertise
- Guides: Training, language skills, naturalist knowledge
- Accommodations: Quality and sustainability practices
- Group Size: Small groups vs. larger tours
- Customization: Flexibility to tailor itineraries
- Price: Value for your investment
- Reviews: Testimonials from past travelers

## Different Styles of Safari Companies

### Luxury Operators
High-end lodges, exclusive access, personalized service. Best for those seeking ultimate comfort.

### Mid-Range Companies
Balance between comfort and value, shared camps, small group sizes. Ideal for most travelers.

### Budget Operators
Basic accommodations, group tours, shared vehicles. Perfect for budget-conscious adventurers.

### Specialty Companies
Photography-focused, hiking-focused, cultural immersion. Great if you have specific interests.

## The Right Company for You

Your choice depends on your budget, preferred travel style, specific interests, group size preferences, and flexibility vs. structured itineraries.

## Making Your Decision

Research company credentials, read reviews across multiple platforms, and ask detailed questions about their operations, guides, and accommodations.

The best safari company is one that aligns with your values, budget, and travel style.`,
    author: "Amina Nakitare",
    date: "2026-03-13",
    category: "Culture",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ngorongoro%20stars-0dp4SzAsFG1V4tukuLrrm3m2xxwuml.jpg",
    readTime: "6 min read",
  },
  "safari-photography-tips": {
    title: "The Wonders of Mount Kenya: A Guide to Kenya's Iconic Peak",
    excerpt: "Mount Kenya, standing tall at 5,199 meters, is a beacon of natural beauty and adventure for trekkers.",
    content: `Mount Kenya, standing tall at 5,199 meters, is a beacon of natural beauty and adventure for trekkers and nature enthusiasts. This UNESCO World Heritage Site is Africa's second-highest mountain and offers breathtaking views, diverse ecosystems, and unforgettable experiences.

## The Ascent Experience

Climbing Mount Kenya is more accessible than Mount Kilimanjaro, attracting hikers of varying skill levels. Multiple routes accommodate different fitness levels, from moderate to challenging.

## What Makes Mount Kenya Special

- Stunning Views: On clear days, you can see Mount Kilimanjaro
- Alpine Vegetation: Journey through multiple ecological zones
- Mountain Lakes: Crystal-clear alpine lakes dot the peaks
- Rock Formations: Dramatic rocky outcrops offer photography
- Wildlife: Encounters with mountain-adapted species

## Routes Available

The Sirimon Route offers gradual acclimatization and spectacular views. The Chogoria Route features scenic forests and mountain lakes. The Timau Route provides solitude and fewer crowds.

## Best Time to Trek

December-March and July-August offer the clearest skies and most stable weather.

## Practical Considerations

Acclimatization is crucial due to altitude. Most climbs take 4-5 days. Professional guides are essential for safety and navigation.

## The Summit Experience

Standing at Point Lenana or reaching the higher peaks offers panoramic views and memories that last a lifetime.`,
    author: "Peter Kipchoge",
    date: "2026-03-08",
    category: "Photography",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwanda%20canopy-xyGm95PrO7weFzo4UQ90Wl9Ifpkh1j.jpg",
    readTime: "4 min read",
  },
  "conservation-east-africa": {
    title: "Exploring the Masai Mara: Africa's Premier Wildlife Destination",
    excerpt: "The Masai Mara National Reserve stands as one of the world's greatest natural wonders.",
    content: `The Masai Mara National Reserve stands as one of the world's greatest natural wonders, a place where the circle of life continues in its most dramatic form.

## Natural Wonders

The Mara covers 1,510 square kilometers of pristine savannah, offering some of the most spectacular wildlife viewing opportunities in Africa. This comprehensive guide will help you plan the perfect safari experience.

## Best Time to Visit

The Great Migration occurs from July to October, making this the peak season for wildlife viewing. However, each season offers unique advantages.

### Peak Season (July-October)
- Great Migration river crossings
- Excellent wildlife concentrations
- Clear skies for photography
- Higher prices and crowds

### Green Season (November-June)
- Lower prices and fewer tourists
- Beautiful landscapes and wildflowers
- Excellent bird watching
- Calving season opportunities

## What to Expect

Game drives typically start early morning and late afternoon when animals are most active. The Big Five and over 450 bird species call the Mara home.

## Accommodation Options

From luxury tented camps to budget-friendly lodges, the Mara offers accommodation for every budget. Popular options span all price ranges.

## Cultural Experiences

Don't miss visiting traditional Maasai villages to learn about rich cultural heritage. Many lodges offer cultural visits as part of their packages.`,
    author: "Dr. Grace Kipchoge",
    date: "2026-03-01",
    category: "Conservation",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop",
    readTime: "7 min read",
  },
  "safari-packing-guide": {
    title: "Serengeti Safari: Experience the Majesty of Tanzania's Vast Plains",
    excerpt: "The Serengeti, meaning 'the place where the land runs on forever', is a boundless ecosystem.",
    content: `The Serengeti, meaning 'the place where the land runs on forever' in the Maasai language, is a boundless ecosystem that spans over 14,750 square kilometers across Tanzania and Kenya.

## What Makes the Serengeti Special

The Serengeti is home to the largest land animal migration on Earth. Approximately two million wildebeest, zebras, and gazelles undertake this epic annual journey in search of fresh grazing.

## The Great Migration

The migration follows an ancient circular route driven by rainfall patterns:

- December-March: Calving season in the south
- April-May: Movement north during rains
- June-October: Northern Serengeti and Maasai Mara
- November: Return south

## Wildlife Diversity

The Serengeti hosts unparalleled wildlife populations including:
- All members of the Big Five
- Cheetahs and wild dogs
- Over 500 bird species
- Countless other mammals

## Best Time to Visit

Each season offers unique viewing opportunities. Peak migration occurs July-October. Calving season (December-March) offers dramatic predator-prey interactions.

## Safari Experience

Professional guides share deep knowledge of animal behavior and ecology. Game drives maximize sightings while respecting wildlife. Accommodation ranges from luxury lodges to intimate camps.

## Practical Tips

Book well in advance during peak season. Pack layers for temperature variations. Bring quality camera equipment. Maintain realistic expectations for wildlife viewing.`,
    author: "Sophia Wanjiru",
    date: "2026-02-25",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    readTime: "5 min read",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-dusk text-dust pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Link href="/blog" className="flex items-center gap-2 text-ochre hover:text-ochre/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="text-center py-20">
            <h1 className="font-serif text-4xl font-light text-dust mb-4">Post Not Found</h1>
            <p className="text-sand">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const contentParts = post.content.split('\n\n')

  return (
    <>
      <main className="min-h-screen bg-dusk text-dust">
        {/* Hero Image - Full Width */}
        <div className="relative h-96 md:h-[500px] w-full mt-20 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/50 to-transparent"></div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
          {/* Back Button */}
          <Link href="/blog" className="flex items-center gap-2 text-ochre hover:text-ochre/80 mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-16 border-b border-clay/30 pb-12">
            <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-sand mb-6">
              <span className="text-ochre font-semibold">{post.category}</span>
              <span className="w-1 h-1 bg-clay/50 rounded-full"></span>
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-clay/50 rounded-full"></span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-light mb-8 leading-tight text-balance">
              {post.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-dust/70">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-ochre" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-ochre" />
                <span className="text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
            </div>
          </header>

          {/* Article Body - Formatted Text */}
          <div className="prose prose-invert max-w-none mb-20 text-dust/80">
            <style>{`
              .prose h2 {
                font-family: var(--font-serif);
                font-size: 2rem;
                font-weight: 300;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                color: #d4943a;
              }
              .prose h3 {
                font-family: var(--font-serif);
                font-size: 1.5rem;
                font-weight: 300;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                color: #d4943a;
              }
              .prose p {
                color: #e8d5b0;
                line-height: 1.8;
                margin-bottom: 1.5rem;
                font-weight: 300;
              }
              .prose ul {
                margin-bottom: 1.5rem;
                color: #e8d5b0;
              }
              .prose li {
                margin-bottom: 0.75rem;
                margin-left: 1.5rem;
                line-height: 1.6;
              }
              .prose strong {
                color: #d4943a;
                font-weight: 600;
              }
            `}</style>
            {contentParts.map((part, idx) => {
              if (part.startsWith('##')) {
                const title = part.replace(/^##\s*/, '')
                return <h2 key={idx}>{title}</h2>
              }
              if (part.startsWith('###')) {
                const title = part.replace(/^###\s*/, '')
                return <h3 key={idx}>{title}</h3>
              }
              if (part.startsWith('-')) {
                const items = part.split('\n').filter(line => line.startsWith('-')).map(item => item.replace(/^-\s*/, ''))
                return (
                  <ul key={idx}>
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )
              }
              return <p key={idx}>{part}</p>
            })}
          </div>

          {/* Engagement Bar */}
          <div className="border-y border-clay/30 py-8 mb-20 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-sand hover:text-ochre transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Helpful</span>
              </button>
              <button className="flex items-center gap-2 text-sand hover:text-ochre transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">Comment</span>
              </button>
            </div>
            <button className="flex items-center gap-2 text-sand hover:text-ochre transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>

          {/* Author Bio */}
          <div className="bg-clay/10 border border-clay/30 p-8 mb-20">
            <div className="flex gap-6">
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-ochre to-clay rounded-full"></div>
              <div>
                <h3 className="font-semibold text-dust text-lg mb-2">{post.author}</h3>
                <p className="text-sand text-sm leading-relaxed">
                  Award-winning travel writer and safari specialist with over 20 years exploring East Africa's most remote wilderness areas. {post.author} brings authentic, first-hand insights from countless expeditions across Kenya, Tanzania, Uganda, and Rwanda.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Related Articles CTA */}
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-light mb-4 text-dust">Discover More Safari Stories</h2>
            <p className="text-sand mb-10">Explore guides, tips, and inspiration for your African adventure</p>
            <Link href="/blog" className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre/90 text-card font-semibold uppercase text-xs tracking-wider px-8 py-3 transition-colors">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
