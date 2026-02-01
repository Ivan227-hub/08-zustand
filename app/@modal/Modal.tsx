'use client'

import { ReactNode } from 'react'
import css from './Modal.module.css'

interface ModalProps {
  children: ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className={css.overlay}>
      <div className={css.content}>{children}</div>
    </div>
  )
}
