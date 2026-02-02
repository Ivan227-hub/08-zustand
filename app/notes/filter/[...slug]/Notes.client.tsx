'use client'

interface NotesProps {
  tag: string
}

export default function Notes({ tag }: NotesProps) {
  return (
    <section>
      <h1>Filter Notes</h1>
      <p>Current tag: {tag}</p>
    </section>
  )
}
