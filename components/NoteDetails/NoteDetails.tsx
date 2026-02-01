import css from './NoteDetails.module.css'
import { Note } from '@/types/note'
import { useRouter } from 'next/navigation'

export default function NoteDetails({ note }: { note: Note }) {
  const router = useRouter()

  return (
    <main className={css.main}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={() => router.back()}>
          Back
        </button>
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
