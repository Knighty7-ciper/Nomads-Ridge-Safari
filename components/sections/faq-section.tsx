"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How much do Kenya safari tours cost?",
    answer:
      "Safari package prices vary depending on duration, accommodation level, and season. Our packages range from $1,500 to $8,000+ per person for 7-10 day experiences. Budget safaris offer excellent value, while luxury options include 5-star lodges and private guides. We also offer customizable packages to fit your specific budget. Contact us for a personalized quote.",
  },
  {
    question: "What is included in Kenya safari packages?",
    answer:
      "Our comprehensive packages include accommodation, all meals, guided game drives, transport between locations, and park fees. Optional additions include domestic flights, hot air balloon safaris, Zanzibar extensions, and specialized photography workshops. Most packages feature experienced local guides, camping or lodge stays, and wildlife viewing in multiple national parks.",
  },
  {
    question: "When is the best time for a Kenya safari?",
    answer:
      "The Great Migration (June-September) and calving season (February-March) are peak times for wildlife viewing. However, Kenya offers excellent safaris year-round. Dry seasons (June-October and December-February) offer the best game viewing, while rainy seasons feature lush landscapes and fewer crowds. We recommend visiting during your preferred season—we'll customize your itinerary accordingly.",
  },
  {
    question: "Can I combine Kenya and Tanzania?",
    answer:
      "Absolutely! Many of our guests combine Kenya and Tanzania for a comprehensive East African experience. Popular combinations include Maasai Mara (Kenya) with Serengeti (Tanzania), or adding Mount Kilimanjaro. We handle all logistics, border crossings, and transportation. Multi-country safaris typically span 10-14 days and offer incredible wildlife diversity.",
  },
  {
    question: "Can I customize a safari package?",
    answer:
      "Yes! We specialize in customized safaris. Tell us your dates, budget, and interests—whether wildlife photography, gorilla trekking, cultural experiences, or adventure—and we'll design your perfect journey. Our team works with you to adjust pacing, accommodations, activities, and destinations to create your ideal African adventure.",
  },
  {
    question: "Is Kenya safe for tourists?",
    answer:
      "Kenya is generally safe for tourists, with established safari infrastructure and experienced guides. Major tourist areas and national parks have strong security. We recommend standard travel precautions: avoid displaying valuables, stay in groups, and follow guide instructions. Our team has deep knowledge of safe travel routes and maintains excellent security protocols throughout your safari.",
  },
  {
    question: "Do you offer group safaris?",
    answer:
      "Yes! We offer both group and private safaris. Group safaris are cost-effective and great for meeting fellow travelers, typically 6-12 people per group. Private safaris offer exclusivity and flexibility for families or friends. We also can arrange semi-private options—join a group but with your own vehicle and guide.",
  },
  {
    question: "How many game drives are included?",
    answer:
      "Most of our packages include two game drives daily—early morning and late afternoon/evening—when wildlife is most active. Some lodges offer additional night drives. Daily drive duration is typically 4-5 hours. Our experienced guides time drives to maximize wildlife encounters while respecting the animals' natural behavior and conservation guidelines.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-ochre uppercase text-xs tracking-widest mb-2">FAQ</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dust mb-6">
            Kenya Safari Questions
          </h2>
          <p className="text-dust/70 text-lg">
            Everything you need to know about planning your African adventure
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-clay/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-clay/5 transition-colors text-left"
              >
                <h3 className="font-semibold text-dust text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-ochre flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 bg-clay/5 border-t border-clay/30">
                  <p className="text-dust/80 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-ochre/10 border border-ochre/20 text-center">
          <p className="text-dust/70 mb-4">Still have questions? We're here to help!</p>
          <a
            href="mailto:nomadsridgesafaris@gmail.com"
            className="inline-block bg-ochre hover:bg-ochre/90 text-card px-8 py-3 font-semibold uppercase text-sm tracking-wider transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
