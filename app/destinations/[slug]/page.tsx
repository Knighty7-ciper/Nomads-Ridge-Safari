import DestinationDetailTemplate from '@/components/sections/destination-detail-template'
import Footer from '@/components/layout/footer'
import { destinationsData } from '@/lib/destinations-data'

export async function generateStaticParams() {
  return [
    { slug: 'maasai-mara' },
    { slug: 'lake-naivasha' },
    { slug: 'amboseli' },
    { slug: 'tsavo' },
  ]
}

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const destination = destinationsData[params.slug]

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-deep text-dust">
        <h1 className="text-4xl font-serif mb-4">Destination Not Found</h1>
        <p className="text-lg opacity-70 mb-8">Sorry, this destination page is still being prepared.</p>
        <a href="/destinations" className="px-8 py-3 bg-clay hover:bg-ochre text-dust font-semibold uppercase tracking-wider transition-colors">
          Back to Destinations
        </a>
      </div>
    )
  }

  return (
    <>
      <DestinationDetailTemplate destination={destination} />
      <Footer />
    </>
  )
}
