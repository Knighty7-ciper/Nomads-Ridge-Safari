import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/layout/footer"

const blogPosts = {
  "ultimate-maasai-mara-safari-guide": {
    title: "Ultimate Maasai Mara Safari Guide: When to Visit and What to Expect",
    excerpt: "Everything you need to know about planning the perfect Maasai Mara safari experience",
    content: `
      <p>The Maasai Mara National Reserve stands as Kenya's crown jewel, offering some of the most spectacular wildlife viewing opportunities in Africa. This comprehensive guide will help you plan the perfect safari experience.</p>
      
      <h2>Best Time to Visit</h2>
      <p>The Great Migration occurs from July to October, making this the peak season for wildlife viewing. However, each season offers unique advantages:</p>
      
      <h3>July - October (Dry Season)</h3>
      <ul>
        <li>Great Migration river crossings</li>
        <li>Excellent wildlife concentrations</li>
        <li>Clear skies for photography</li>
        <li>Higher prices and crowds</li>
      </ul>
      
      <h3>November - June (Green Season)</h3>
      <ul>
        <li>Lower prices and fewer tourists</li>
        <li>Beautiful landscapes and wildflowers</li>
        <li>Excellent bird watching</li>
        <li>Calving season (January-March)</li>
      </ul>
      
      <h2>What to Expect</h2>
      <p>The Maasai Mara covers 1,510 square kilometers of pristine savannah, home to the Big Five and over 450 bird species. Game drives typically start early morning (6:30 AM) and late afternoon (4:00 PM) when animals are most active.</p>
      
      <h2>Accommodation Options</h2>
      <p>From luxury tented camps to budget-friendly lodges, the Mara offers accommodation for every budget. Popular options include:</p>
      <ul>
        <li>Luxury: Angama Mara, Four Seasons Safari Lodge</li>
        <li>Mid-range: Mara Serena Safari Lodge, Keekorok Lodge</li>
        <li>Budget: Mara Springs Safari Camp, Jambo Mara Safari Lodge</li>
      </ul>
      
      <h2>Cultural Experiences</h2>
      <p>Don't miss the opportunity to visit a traditional Maasai village and learn about their rich culture and traditions. Many lodges offer cultural visits as part of their safari packages.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Safari Guides",
    image: "/maasai-mara-safari.png",
    readTime: "8 min read",
  },
  "hidden-gems-kenyan-coast": {
    title: "Hidden Gems of the Kenyan Coast: Beyond Diani Beach",
    excerpt: "Discover pristine beaches and coastal treasures away from the crowds",
    content: `
      <p>While Diani Beach rightfully claims fame as one of the world's best beaches, Kenya's coastline harbors numerous hidden gems waiting to be discovered by adventurous travelers.</p>
      
      <h2>Watamu Marine National Park</h2>
      <p>This UNESCO Biosphere Reserve offers pristine coral reefs, sea turtle nesting sites, and crystal-clear waters perfect for snorkeling and diving. The nearby Arabuko Sokoke Forest provides excellent bird watching opportunities.</p>
      
      <h2>Lamu Island</h2>
      <p>Step back in time on this UNESCO World Heritage site, where Swahili culture thrives unchanged for centuries. Narrow streets, traditional dhows, and stone houses create an authentic Arabian atmosphere.</p>
      
      <h2>Kilifi Creek</h2>
      <p>A hidden paradise north of Mombasa, Kilifi Creek offers mangrove forests, pristine beaches, and excellent water sports. The area is perfect for kayaking, stand-up paddleboarding, and deep-sea fishing.</p>
      
      <h2>Shimoni Caves</h2>
      <p>These historical caves near the Tanzanian border offer a glimpse into Kenya's complex past. The nearby Kisite-Mpunguti Marine National Park provides excellent dolphin watching opportunities.</p>
      
      <h2>Best Time to Visit</h2>
      <p>The Kenyan coast enjoys a tropical climate year-round. The best weather occurs from December to March and July to October, with minimal rainfall and comfortable temperatures.</p>
    `,
    author: "David Kimani",
    date: "2024-01-10",
    category: "Beach Destinations",
    image: "/diani-beach-kenya.png",
    readTime: "6 min read",
  },
  "mount-kenya-climbing-guide": {
    title: "Mount Kenya Climbing Guide: Conquering Africa's Second Highest Peak",
    excerpt: "Complete guide to climbing Mount Kenya, from route selection to preparation tips",
    content: `
      <p>Mount Kenya, standing at 5,199 meters, offers one of Africa's most rewarding climbing experiences. This comprehensive guide covers everything you need to know for a successful ascent.</p>
      
      <h2>Climbing Routes</h2>
      
      <h3>Sirimon Route (Most Popular)</h3>
      <ul>
        <li>Duration: 4-5 days</li>
        <li>Difficulty: Moderate</li>
        <li>Best for: First-time climbers</li>
        <li>Highlights: Diverse ecosystems, excellent acclimatization</li>
      </ul>
      
      <h3>Chogoria Route (Most Scenic)</h3>
      <ul>
        <li>Duration: 5-6 days</li>
        <li>Difficulty: Moderate to challenging</li>
        <li>Best for: Experienced hikers</li>
        <li>Highlights: Lake Michaelson, stunning views</li>
      </ul>
      
      <h3>Naro Moru Route (Fastest)</h3>
      <ul>
        <li>Duration: 3-4 days</li>
        <li>Difficulty: Challenging</li>
        <li>Best for: Experienced climbers</li>
        <li>Highlights: Direct route, vertical bog</li>
      </ul>
      
      <h2>What to Pack</h2>
      <p>Essential gear includes:</p>
      <ul>
        <li>Warm sleeping bag (rated to -10°C)</li>
        <li>Waterproof jacket and pants</li>
        <li>Insulated layers</li>
        <li>Sturdy hiking boots</li>
        <li>Headlamp and extra batteries</li>
        <li>Water purification tablets</li>
      </ul>
      
      <h2>Physical Preparation</h2>
      <p>Start training at least 8 weeks before your climb. Focus on cardiovascular fitness, leg strength, and hiking with a weighted pack. Practice on local hills and mountains if possible.</p>
      
      <h2>Best Climbing Season</h2>
      <p>The dry seasons (January-March and June-October) offer the best climbing conditions with clear skies and minimal rainfall.</p>
    `,
    author: "Peter Mwangi",
    date: "2024-01-05",
    category: "Adventure Travel",
    image: "/mount-kenya-hikers.png",
    readTime: "10 min read",
  },
  "best-time-kenya-tanzania": {
    title: "Best Time to Visit Kenya and Tanzania",
    excerpt: "Plan your safari perfectly with our seasonal guide",
    content: `<p>Choosing the right time to visit Kenya and Tanzania can make all the difference in your safari experience. Here's our comprehensive guide to each season's unique advantages.</p>
      <h2>Dry Seasons (Peak Viewing)</h2>
      <p>July-October and January-March offer the best wildlife viewing with concentrated animals around water sources.</p>
      <h2>Green Seasons (Budget-Friendly)</h2>
      <p>November-December and April-June bring lush landscapes, fewer tourists, and excellent birding opportunities.</p>
    `,
    author: "James Mwangi",
    date: "2025-03-10",
    category: "Travel Planning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serengeti%20migration-vdcYvDXQY1fxOtzzCd2J1JvMWIjQkw.jpg",
    readTime: "6 min read",
  },
  "maasai-culture-guide": {
    title: "Maasai Culture: Understanding Pastoral Traditions",
    excerpt: "Discover the rich heritage of Kenya's iconic Maasai people",
    content: `<p>The Maasai are one of Africa's most famous and vibrant ethnic groups, known for their distinctive red shawls, intricate beadwork, and warrior traditions.</p>
      <h2>Pastoral Heritage</h2>
      <p>For centuries, the Maasai have been pastoral nomads, herding cattle across the vast savannas of Kenya and Tanzania. This lifestyle remains central to Maasai identity and culture.</p>
      <h2>Traditional Ceremonies</h2>
      <p>Important rites of passage, including the famous warrior initiation ceremonies, continue to play a vital role in Maasai society.</p>
    `,
    author: "Amina Nakitare",
    date: "2025-03-05",
    category: "Culture",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kenya%20big%205-zJcVlnQoIix0ZUKkwD21gtmte5VswL.jpg",
    readTime: "10 min read",
  },
  "safari-photography-tips": {
    title: "Photography Tips for Safari Adventures",
    excerpt: "Capture stunning wildlife moments like a professional",
    content: `<p>Safari photography is one of the most rewarding aspects of an African adventure. Here are essential tips to elevate your wildlife photography.</p>
      <h2>Camera Settings for Wildlife</h2>
      <p>Use fast shutter speeds (1/1000 or faster), higher ISO for low light, and continuous autofocus for moving subjects.</p>
      <h2>Composition Techniques</h2>
      <p>Follow the rule of thirds, look for dramatic lighting, and be patient for the perfect moment.</p>
    `,
    author: "Peter Kipchoge",
    date: "2025-02-28",
    category: "Photography",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bwindi%20Forest-gIiVyTLcwtTU2YKTblAL44MGQOxM3y.jpg",
    readTime: "7 min read",
  },
  "conservation-east-africa": {
    title: "Conservation Efforts in East African Protected Areas",
    excerpt: "How communities are protecting Africa's wildlife heritage",
    content: `<p>East Africa is home to some of the world's most important conservation areas and initiatives. These efforts are vital to protecting endangered species and ecosystems.</p>
      <h2>Protected Areas</h2>
      <p>Kenya's national parks and reserves protect millions of acres of pristine habitat for lions, elephants, rhinos, and countless other species.</p>
      <h2>Community Conservation</h2>
      <p>Local communities are increasingly involved in conservation, benefiting economically while protecting their natural heritage.</p>
    `,
    author: "Dr. Grace Kipchoge",
    date: "2025-02-20",
    category: "Conservation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volcanoes%20NP%20Primates-ir40ZnRVNDoMVuodjZe5s51xxXNFsg.jpg",
    readTime: "9 min read",
  },
  "safari-packing-guide": {
    title: "What to Pack for Your African Safari",
    excerpt: "Essential gear and items for ultimate safari comfort",
    content: `<p>Proper packing ensures your safari is comfortable, safe, and memorable. Here's our comprehensive packing checklist.</p>
      <h2>Clothing Essentials</h2>
      <p>Neutral colors (khaki, brown, green) for wildlife viewing, comfortable hiking boots, and layers for temperature changes.</p>
      <h2>Safety & Health</h2>
      <p>Sunscreen, insect repellent, first aid kit, and any prescribed medications are essential items.</p>
    `,
    author: "Sophia Wanjiru",
    date: "2025-02-15",
    category: "Travel Tips",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simien_Mountains-PvKW8hTMyt4vQujI6nhaauyhiARRCf.jpeg",
    readTime: "5 min read",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <>
      <main className="bg-dusk text-dust min-h-screen">
        {/* Featured Image - Full Width */}
        {post.image && (
          <div className="h-96 md:h-[500px] bg-gradient-to-b from-clay/20 to-dusk overflow-hidden relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-dusk via-transparent to-transparent" />
          </div>
        )}

        {/* Article Content */}
        <article className="pt-20 pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            {/* Back Link */}
            <Link href="/blog" className="flex items-center gap-2 text-ochre hover:text-clay transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider">Back to Blog</span>
            </Link>

            {/* Header */}
            <header className="mb-16 border-b border-clay/20 pb-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider bg-clay/20 text-clay px-3 py-1">{post.category}</span>
                <span className="text-xs text-dust/60">•</span>
                <span className="text-xs text-dust/60 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-serif text-5xl lg:text-6xl font-light leading-tight mb-8 text-dust">{post.title}</h1>

              {/* Meta */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 text-dust/70 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-ochre" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-ochre" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose-invert prose max-w-none mb-16">
              <style>{`
                .prose-invert h2 {
                  font-family: var(--font-cormorant);
                  font-size: 2rem;
                  font-weight: 300;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: #d4943a;
                }
                .prose-invert h3 {
                  font-family: var(--font-cormorant);
                  font-size: 1.5rem;
                  font-weight: 400;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                }
                .prose-invert p {
                  color: #e8d5b0;
                  line-height: 1.8;
                  margin-bottom: 1.5rem;
                }
                .prose-invert ul {
                  list-style-position: inside;
                  margin-bottom: 1.5rem;
                  color: #e8d5b0;
                }
                .prose-invert li {
                  margin-bottom: 0.5rem;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Section */}
            <div className="border-y border-clay/20 py-8 mb-16">
              <div className="flex items-center justify-between">
                <span className="text-dust/60 text-sm uppercase tracking-wider">Share this article</span>
                <button className="p-3 text-ochre hover:bg-clay/10 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-clay/5 border border-clay/20 p-12 mb-20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-clay to-ochre rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-light text-dust mb-2">{post.author}</h3>
                  <p className="text-dust/70 leading-relaxed">
                    Travel writer and safari expert with over 15 years of experience exploring the African wilderness. {post.author}'s insights come from countless adventures across Kenya, Tanzania, Uganda, and Rwanda, sharing authentic stories from the heart of the wild.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <section>
              <h2 className="font-serif text-4xl font-light mb-12 text-dust">More from Our Blog</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(blogPosts)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 3)
                  .map(([slug, article]) => (
                    <Link key={slug} href={`/blog/${slug}`} className="group">
                      <div className="border border-clay/30 overflow-hidden hover:border-clay/60 transition-colors">
                        <div className="h-48 bg-gradient-to-br from-clay/20 to-ochre/20 group-hover:from-clay/30 group-hover:to-ochre/30 transition-colors" />
                        <div className="p-6">
                          <span className="text-xs uppercase tracking-wider text-clay mb-3 block">{article.category}</span>
                          <h3 className="font-serif text-xl font-light mb-3 text-dust group-hover:text-ochre transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-dust/60 text-xs mb-4">{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                          <span className="text-ochre text-xs uppercase tracking-wider group-hover:gap-2 flex items-center transition-all">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
