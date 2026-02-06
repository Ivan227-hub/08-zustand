import { Note } from "@/types/note";

interface FetchNotesParams {
  tag: string;
  search: string;
  page: number;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  params: FetchNotesParams
): Promise<FetchNotesResponse> {
  const query = new URLSearchParams({
    tag: params.tag,
    search: params.search,
    page: String(params.page),
  });

  const res = await fetch(`/api/notes?${query.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
}
