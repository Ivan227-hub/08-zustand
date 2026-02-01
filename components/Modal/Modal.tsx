import css from './Modal.module.css'

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>{children}</div>
    </div>
  )
}
