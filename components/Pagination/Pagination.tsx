import Link from 'next/link'
import css from './Pagination.module.css'

export default function Pagination({ page, total }: { page: number; total: number }) {
  return (
    <ul className={css.pagination}>
      {Array.from({ length: total }).map((_, i) => (
        <li key={i} className={page === i + 1 ? css.active : ''}>
          <Link href={`?page=${i + 1}`}>{i + 1}</Link>
        </li>
      ))}
    </ul>
  )
}
