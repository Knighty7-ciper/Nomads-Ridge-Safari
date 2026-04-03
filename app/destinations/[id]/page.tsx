import { redirect } from 'next/navigation'

// Map slug IDs to their corresponding static page paths
const slugToPath: { [key: string]: string } = {
  'maasai-mara': '/destinations/maasai-mara',
  'lake-naivasha': '/destinations/lake-naivasha',
  'amboseli': '/destinations/amboseli',
  'tsavo': '/destinations/tsavo',
}

export async function generateStaticParams() {
  return [
    { id: 'maasai-mara' },
    { id: 'lake-naivasha' },
    { id: 'amboseli' },
    { id: 'tsavo' },
  ]
}

export default function DestinationDetail({ params }: { params: { id: string } }) {
  const path = slugToPath[params.id]

  if (path) {
    redirect(path)
  }

  redirect('/destinations')
}
