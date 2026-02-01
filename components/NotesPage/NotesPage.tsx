import Link from 'next/link'
import css from './NotesPage.module.css'

export default function NotesPage({ children }: { children: React.ReactNode }) {
  return (
    <section className={css.app}>
      <div className={css.toolbar}>
        <h1>Notes</h1>
        <Link href="/notes/action/create" className={css.button}>
          Create note +
        </Link>
      </div>
      {children}
    </section>
  )
}
