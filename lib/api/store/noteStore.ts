import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { NoteDraft } from '@/types/note'

const initialDraft: NoteDraft = {
  title: '',
  content: '',
  tag: 'Todo',
}

interface NoteStore {
  draft: NoteDraft
  setDraft: (note: NoteDraft) => void
  clearDraft: () => void
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set({ draft: note }),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft',
    }
  )
)
