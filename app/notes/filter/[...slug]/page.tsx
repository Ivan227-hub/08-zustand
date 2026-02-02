import type { Metadata } from 'next'
import { useParams } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] }
}): Promise<Metadata> {
  const slug = params.slug?.join('/') ?? 'all'

  return {
    title: `Filtered notes: ${slug}`,
    description: `Notes filtered by ${slug}`,
  }
}

export default function FilterNotesPage() {
  const params = useParams()
  const slug = params.slug
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug

  return (
    <div>
      <h1>Filter Notes</h1>
      <p>Slug: {slugStr}</p>
    </div>
  )
}
