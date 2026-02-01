import Link from 'next/link'
import css from './SidebarNotes.module.css'

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href="/notes" className={css.menuLink}>
          All notes
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href="/notes/filter/Todo" className={css.menuLink}>
          Todo
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href="/notes/filter/In%20Progress" className={css.menuLink}>
          In Progress
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href="/notes/filter/Done" className={css.menuLink}>
          Done
        </Link>
      </li>
    </ul>
  )
}
