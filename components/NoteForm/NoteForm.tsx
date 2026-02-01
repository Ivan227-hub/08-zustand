'use client'

import { useEffect, useState } from 'react'
import { useNoteStore } from '@/lib/store/noteStore'
import css from './NoteForm.module.css'
import { NoteDraft } from '@/types/note'
import { createNote } from '@/lib/api/notes'
import { useRouter } from 'next/navigation'

export default function NoteForm() {
  const router = useRouter()
  const { draft, setDraft, clearDraft } = useNoteStore()
  const [form, setForm] = useState<NoteDraft>(draft)

  useEffect(() => {
    setForm(draft)
  }, [draft])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setDraft({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createNote(form)
    clearDraft()
    router.back()
  }

  const handleCancel = () => router.back()

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className={css.input} />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className={css.textarea} />
      <select name="tag" value={form.tag} onChange={handleChange} className={css.select}>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <div className={css.actions}>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  )
}
