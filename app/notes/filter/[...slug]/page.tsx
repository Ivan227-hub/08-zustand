'use client'

import { useParams } from 'next/navigation'

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
