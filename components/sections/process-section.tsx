import { ArrowRight } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Share Your Vision",
      description: "Tell us your travel dates, budget, and what matters most — whether it's the Great Migration, exclusive parks, pace preferences, or your ideal accommodation level.",
    },
    {
      number: 2,
      title: "Design Your Route",
      description: "We craft a personalized Kenya safari itinerary that follows seasonal wildlife patterns and optimizes your travel flow for the best wildlife viewing experience.",
    },
    {
      number: 3,
      title: "Perfect Every Detail",
      description: "Fine-tune your lodges, daily pacing, and optional extensions to Zanzibar or Tanzania — all customized to match your exact preferences and expectations.",
    },
    {
      number: 4,
      title: "Explore with Confidence",
      description: "Travel with our dedicated support team available before and during your safari, with expert guides who adapt daily to real field conditions and wildlife activity.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-ochre uppercase text-xs tracking-widest mb-2">OUR PROCESS</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dust mb-6">
            How Your Kenya Safari Is Designed
          </h2>
          <p className="text-dust/70 text-lg">
            A clear, thoughtful four-step process from your initial inquiry through to returning home with unforgettable memories.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-8">
              {/* Step Indicator */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-ochre flex items-center justify-center mb-6 flex-shrink-0 bg-ochre/10">
                  <span className="font-serif text-3xl font-light text-ochre">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-ochre to-ochre/20"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8 md:pb-0">
                <h3 className="font-serif text-2xl font-light text-dust mb-3">
                  {step.title}
                </h3>
                <p className="text-dust/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-clay/30">
          <button className="group inline-flex items-center gap-3 bg-ochre hover:bg-ochre/90 text-card px-8 py-4 transition-all">
            Start Planning Your Safari
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
