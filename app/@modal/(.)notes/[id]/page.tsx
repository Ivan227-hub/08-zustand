'use client'

import Modal from '@/app/@modal/Modal'
import { useRouter } from 'next/navigation'

interface NotePageProps {
  params: { id: string }
}

export default function NotePage({ params }: NotePageProps) {
  const router = useRouter()
  const { id } = params

  const handleClose = () => router.back()

  return (
    <Modal>
      <h2>Note {id}</h2>
      <button onClick={handleClose}>Close</button>
    </Modal>
  )
}
