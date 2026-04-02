'use client'

import Link from "next/link"
import Footer from "@/components/layout/footer"

const articles = [
  {
    slug: "ultimate-maasai-mara-safari-guide",
    title: "The Big Five: Masters of the African Savanna",
    excerpt: "Discover the iconic lion, elephant, leopard, cape buffalo, and rhino. Learn their behavior, habitats, and how to spot them safely in the wild.",
    date: "March 15, 2025",
    category: "Wildlife",
    readTime: "8 min read"
  },
  {
    slug: "best-time-kenya-tanzania",
    title: "Best Time to Visit Kenya and Tanzania",
    excerpt: "Plan your safari perfectly. We break down the seasons, migration patterns, and weather conditions for each destination to maximize wildlife sightings.",
    date: "March 10, 2025",
    category: "Travel Planning",
    readTime: "6 min read"
  },
  {
    slug: "maasai-culture-guide",
    title: "Maasai Culture: Understanding Pastoral Traditions",
    excerpt: "Immerse yourself in Maasai traditions, ceremonies, and community life. A deep dive into one of Africa's most fascinating and resilient cultures.",
    date: "March 5, 2025",
    category: "Culture",
    readTime: "10 min read"
  },
  {
    slug: "safari-photography-tips",
    title: "Photography Tips for Safari Adventures",
    excerpt: "Capture stunning wildlife moments with our comprehensive guide to camera settings, composition, lighting, and ethical wildlife photography practices.",
    date: "February 28, 2025",
    category: "Photography",
    readTime: "7 min read"
  },
  {
    slug: "conservation-east-africa",
    title: "Conservation Efforts in East African Protected Areas",
    excerpt: "Learn about the organizations and initiatives working to protect Kenya's and Tanzania's most vulnerable ecosystems, species, and natural heritage.",
    date: "February 20, 2025",
    category: "Conservation",
    readTime: "9 min read"
  },
  {
    slug: "safari-packing-guide",
    title: "What to Pack for Your African Safari",
    excerpt: "Essential gear, clothing, and travel items to ensure your comfort, safety, and readiness for every moment of your safari adventure.",
    date: "February 15, 2025",
    category: "Travel Tips",
    readTime: "5 min read"
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
              <article key={article.id} className="border border-clay/20 hover:border-clay/50 transition-all duration-300 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-clay/20 to-ochre/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <p className="text-ochre text-sm uppercase tracking-wider font-semibold">{article.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-ochre text-xs uppercase tracking-wider mb-3 font-semibold">{article.date} · {article.readTime}</p>
                  <h3 className="font-serif text-xl font-light mb-3 group-hover:text-ochre transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-dust/70 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <a href={`/blog/${article.slug}`} className="text-clay hover:text-ochre text-sm font-semibold uppercase tracking-wider transition-colors">
                    Read More →
                  </a>
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
      <Footer />
    </main>
  )
}
