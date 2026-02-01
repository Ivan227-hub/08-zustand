import Link from 'next/link'
import css from './NoteList.module.css'
import { Note } from '@/types/note'

export default function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li key={note.id} className={css.listItem}>
          <h3 className={css.title}>{note.title}</h3>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <Link href={`/notes/${note.id}`} className={css.link}>
              Open
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
