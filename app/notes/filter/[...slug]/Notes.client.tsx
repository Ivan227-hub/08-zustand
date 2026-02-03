'use client';

import { useState, useEffect, ChangeEvent } from "react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchNotes, FetchNotesParams } from "@/lib/api";
import { Note } from "@/types/note";
import Link from "next/link";
import css from "./Notes.module.css";

interface NotesProps {
  tag: string;
}

export default function Notes({ tag }: NotesProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Дебаунс поиска
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const fetchParams: FetchNotesParams = { tag, search: debouncedSearch, page };

  // ⚡ useQuery без keepPreviousData напрямую
  const queryOptions: UseQueryOptions<Note[], Error> = {
    queryKey: ["notes", tag, debouncedSearch, page],
    queryFn: () => fetchNotes(fetchParams),
    staleTime: 500, // данные считаем свежими на 500ms
  };

  const query = useQuery(queryOptions);

  const notes: Note[] = Array.isArray(query.data) ? query.data : [];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handlePrevPage = () => page > 1 && setPage(prev => prev - 1);
  const handleNextPage = () => notes.length > 0 && setPage(prev => prev + 1);

  return (
    <section className={css.notesSection}>
      <div className={css.header}>
        <h1>Filter Notes</h1>
        <Link href="/notes/action/create" className={css.createButton}>
          Create note +
        </Link>
      </div>

      <div className={css.searchBox}>
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={handleSearchChange}
          className={css.searchInput}
        />
      </div>

      {query.isLoading && <p>Loading notes...</p>}
      {query.isError && <p>Error loading notes.</p>}

      {notes.length > 0 ? (
        <ul className={css.noteList}>
          {notes.map(note => (
            <li key={note.id} className={css.noteItem}>
              <Link href={`/notes/${note.id}`}>
                <h2>{note.title}</h2>
                <p>{note.content.slice(0, 100)}...</p>
                <span className={css.tag}>{note.tag}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes found.</p>
      )}

      <div className={css.pagination}>
        <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={notes.length === 0}>Next</button>
      </div>
    </section>
  );
}
