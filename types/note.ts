export interface NoteDraft {
  title: string
  content: string
  tag: string
}

export interface Note extends NoteDraft {
  id: string
  createdAt: string
}
