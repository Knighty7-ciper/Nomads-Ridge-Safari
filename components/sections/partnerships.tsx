"use client"

export function PartnershipsSection() {
  const partnerships = [
    { id: 1, name: "Kenya Tourism Board", type: "Official Partner" },
    { id: 2, name: "African Safari Alliance", type: "Certified Member" },
    { id: 3, name: "Eco-Tourism Association", type: "Certified Operator" },
    { id: 4, name: "TripAdvisor", type: "Verified Operator" },
    { id: 5, name: "Safari Bookings", type: "Featured Operator" },
    { id: 6, name: "Kenya Wildlife Service", type: "Official Partner" },
    { id: 7, name: "KATO", type: "Member Association" },
    { id: 8, name: "Tourism Regulatory Authority", type: "Licensed Operator" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-amber-950 mb-4">
            Our Partners & Certifications
          </h2>
          <p className="text-lg text-amber-900/70 font-light">
            Trusted by leading tourism and conservation organizations
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Partnership Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partnerships.map((partner) => (
            <div
              key={partner.id}
              className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 text-center hover:shadow-lg"
            >
              <div className="text-3xl font-serif font-light text-amber-700 mb-3">
                ✓
              </div>
              <h3 className="font-serif text-lg font-light text-amber-950 mb-2">
                {partner.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                {partner.type}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center bg-amber-50 p-8 rounded-lg border-l-4 border-amber-600">
          <p className="text-lg text-amber-900 font-light">
            Nomads Ridge Safaris is a fully licensed, certified operator committed to sustainable tourism,
            <br />
            wildlife conservation, and exceptional customer service.
          </p>
        </div>
      </div>
    </section>
  )
}
