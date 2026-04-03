'use client'

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/layout/footer"
import { Eye, Heart, MessageCircle, ArrowRight } from "lucide-react"
import TestimonialsPremium from "@/components/sections/testimonials-premium"

const articles = [
  {
    slug: "ultimate-maasai-mara-safari-guide",
    title: "All-Inclusive Kenya Safari Tours 2026/2027: Your Ultimate Guide",
    excerpt: "Are you dreaming of an unforgettable wildlife adventure? All-inclusive Kenya safari tours are the perfect way to...",
    date: "Mar 20, 2026",
    category: "Safari Adventures",
    readTime: "3 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lion%20country-MhAKVw2p8iOKDXDRZbQj97qQaR0QZH.jpg",
    views: 215,
    likes: 42,
    comments: 8
  },
  {
    slug: "best-time-kenya-tanzania",
    title: "Kenya And Tanzania Safari Packages: Best Routes And Tips For 2026",
    excerpt: "Africa made it to your travel list of 2026, so there is nothing like visiting Kenya and Tanzania in a smooth tour. A...",
    date: "Mar 13, 2026",
    category: "Travel Planning",
    readTime: "5 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seregeti%20dawns-sna119zI11DkWOvBNKqR4QZ8jHqXLJ.jpg",
    views: 342,
    likes: 68,
    comments: 15
  },
  {
    slug: "maasai-culture-guide",
    title: "Comparing The Best Kenya Safari Tours Companies: Which One Fits Your Style?",
    excerpt: "It is thrilling to plan a safari in Kenya, though it may be frustrating to have to select between the best Kenya safa...",
    date: "Mar 13, 2026",
    category: "Culture",
    readTime: "6 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ngorongoro%20stars-0dp4SzAsFG1V4tukuLrrm3m2xxwuml.jpg",
    views: 279,
    likes: 53,
    comments: 12
  },
  {
    slug: "safari-photography-tips",
    title: "The Wonders of Mount Kenya: A Guide to Kenya's Iconic Peak",
    excerpt: "Mount Kenya, standing tall at 5,199 meters, is a beacon of natural beauty and adventure for trekkers and...",
    date: "Mar 8, 2026",
    category: "Photography",
    readTime: "4 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rwanda%20canopy-xyGm95PrO7weFzo4UQ90Wl9Ifpkh1j.jpg",
    views: 156,
    likes: 31,
    comments: 6
  },
  {
    slug: "conservation-east-africa",
    title: "Exploring the Masai Mara: Africa's Premier Wildlife Destination",
    excerpt: "The Masai Mara National Reserve stands as one of the world's greatest natural wonders, a place where the circle of life...",
    date: "Mar 1, 2026",
    category: "Conservation",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    views: 425,
    likes: 89,
    comments: 22
  },
  {
    slug: "safari-packing-guide",
    title: "Serengeti Safari: Experience the Majesty of Tanzania's Vast Plains",
    excerpt: "The Serengeti, meaning 'the place where the land runs on forever' in the Maasai language, is a boundless ecosystem...",
    date: "Feb 25, 2026",
    category: "Travel Tips",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
    views: 198,
    likes: 40,
    comments: 9
  }
]

export default function Blog() {
  return (
    <main className="bg-dusk text-dust">
      <div className="pt-32 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="font-serif text-6xl lg:text-7xl font-light mb-6 leading-tight">Safari Stories & Travel Insights</h1>
          <p className="text-xl text-dust/80 max-w-2xl">
            Expert guides, wildlife facts, travel tips, and cultural insights from over 15 years of African safari experiences.
          </p>
        </section>

        {/* Articles Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border border-clay/30 hover:border-ochre/50 transition-all duration-300 group cursor-pointer overflow-hidden hover:shadow-xl bg-card"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-clay/10">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dusk/60 to-transparent"></div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-ochre text-card text-xs font-bold uppercase tracking-wider px-3 py-1">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-sand mb-4 pb-4 border-b border-clay/20">
                    <span>
                      <span className="text-ochre font-semibold">{article.date}</span>
                    </span>
                    <span className="flex-shrink-0">
                      <span className="text-ochre font-semibold">{article.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-light text-dust mb-3 group-hover:text-ochre transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-dust/70 text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Engagement Stats */}
                  <div className="flex items-center gap-4 text-xs text-sand mb-6 pb-6 border-b border-clay/20">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-ochre/60" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-ochre/60" />
                      <span>{article.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-ochre/60" />
                      <span>{article.comments}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 bg-ochre hover:bg-ochre/90 text-card font-semibold uppercase text-xs tracking-wider px-4 py-2.5 transition-colors w-full justify-center group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20 border-t border-clay/20 pt-12">
          <h2 className="font-serif text-3xl font-light mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {["Wildlife", "Travel Planning", "Culture", "Photography", "Conservation", "Travel Tips"].map((cat) => (
              <button key={cat} className="border border-clay/30 hover:border-clay hover:bg-clay hover:text-dusk text-dust/70 px-4 py-2 uppercase text-xs tracking-wider transition-all duration-300">
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-clay/10 border border-clay/20 p-12 text-center mb-20">
          <h2 className="font-serif text-3xl font-light mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-dust/70 mb-6">Get weekly safari tips, wildlife updates, and exclusive travel offers delivered to your inbox.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 bg-dusk border border-clay/30 text-dust px-4 py-3 placeholder-dust/40 focus:outline-none focus:border-clay" />
            <button className="bg-clay hover:bg-ochre text-dusk px-6 py-3 uppercase text-sm font-semibold tracking-wider transition-colors">Subscribe</button>
          </div>
        </section>

        <div className="border-t border-clay/20 pt-12 pb-20 text-center">
          <Link href="/" className="inline-block border-2 border-clay text-clay hover:bg-clay hover:text-dusk px-10 py-4 uppercase text-sm font-semibold tracking-wider transition-all duration-300">
            Back to Home
          </Link>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsPremium />

      <Footer />
    </main>
  )
}
