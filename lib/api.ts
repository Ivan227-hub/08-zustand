// lib/api.ts
import { Note } from "@/types/note";

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: string;
}


export async function createNote(params: CreateNoteParams): Promise<Note> {
  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    throw new Error("Failed to create note");
  }

  return res.json(); 
}

export interface FetchNotesParams {
  tag: string;
  search: string;
  page: number;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes({
  tag,
  search,
  page,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const params = new URLSearchParams({
    tag,
    search,
    page: String(page),
  });

  const res = await fetch(`/api/notes?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch notes");
  return res.json(); 
}
