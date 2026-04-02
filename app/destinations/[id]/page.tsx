'use client'

import DestinationDetailTemplate from '@/components/sections/destination-detail-template'
import Footer from '@/components/layout/footer'
import { destinationsData } from '@/lib/destinations-data'

export default function DestinationDetail({ params }: { params: { id: string } }) {
  const destinationData = destinationsData[params.id]

  if (!destinationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-light text-dust mb-4">Destination Not Found</h1>
          <p className="text-dust/60 mb-8">Sorry, this destination page is still being prepared.</p>
          <a
            href="/destinations"
            className="inline-block bg-clay text-dust px-8 py-3 uppercase text-sm font-medium tracking-wider hover:bg-ochre transition-colors"
          >
            Back to Destinations
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <DestinationDetailTemplate data={destinationData} />
      <Footer />
    </>
  )
}
