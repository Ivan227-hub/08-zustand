import type { Metadata } from 'next'
import Notes from './Notes.client'

interface PageProps {
  params: {
    slug?: string[]
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = params.slug?.join('/') ?? 'all'

  return {
    title: `Filtered notes: ${slug}`,
    description: `Notes filtered by ${slug}`,
  }
}

export default function FilterNotesPage({ params }: PageProps) {
  const tag = params.slug?.[0] ?? 'all'

  return <Notes tag={tag} />
}
