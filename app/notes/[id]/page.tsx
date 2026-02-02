import type { Metadata } from 'next'
import { api } from '@/lib/api/axios'
import { Note } from '@/types/note'
import css from '@/components/NoteDetails/NoteDetails.module.css'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const { data } = await api.get<Note>(`/notes/${params.id}`)

  return {
    title: data.title,
    description: data.content.slice(0, 100),
    openGraph: {
      title: data.title,
      description: data.content.slice(0, 100),
      url: `https://your-app.vercel.app/notes/${params.id}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        },
      ],
    },
  }
}

export default async function NotePage({
  params,
}: {
  params: { id: string }
}) {
  const { data: note } = await api.get<Note>(`/notes/${params.id}`)

  return (
    <main className={css.main}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
            <span className={css.tag}>{note.tag}</span>
          </div>
          <p className={css.content}>{note.content}</p>
          <span className={css.date}>{note.createdAt}</span>
        </div>
      </div>
    </main>
  )
}
