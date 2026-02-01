import css from './Home.module.css'

export default function HomePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>NoteHub</h1>
        <p className={css.description}>
          Simple and fast note management application built with Next.js
        </p>
      </div>
    </main>
  )
}
