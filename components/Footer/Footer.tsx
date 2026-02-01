import css from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <span>NoteHub © 2024</span>
        <a href="https://vercel.com" target="_blank">
          Vercel
        </a>
      </div>
    </footer>
  )
}
