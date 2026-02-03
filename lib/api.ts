import axios from "axios";
import { Note } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

/* ---------- FETCH NOTES ---------- */
export interface FetchNotesParams {
  tag: string;
  search: string;
  page: number;
}

export const fetchNotes = async (params: FetchNotesParams): Promise<Note[]> => {
  const { data } = await api.get("/notes", { params });
  return data;
};

/* ---------- CREATE NOTE ---------- */
export interface CreateNotePayload {
  title: string;
  content: string;
  tag: string;
}

export const createNote = async (payload: CreateNotePayload): Promise<Note> => {
  const { data } = await api.post("/notes", payload);
  return data;
};
