import { api } from './axios'
import { NoteDraft, Note } from '@/types/note'

export const createNote = async (note: NoteDraft): Promise<Note> => {
  const { data } = await api.post('/notes', note)
  return data
}
