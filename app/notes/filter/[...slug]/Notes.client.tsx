"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { fetchNotes, FetchNotesResponse } from "@/lib/api";
import { Note } from "@/types/note";

import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import NoteList from "@/components/NoteList/NoteList";

import css from "./Notes.module.css";

interface NotesProps {
  tag: string;
}

export default function Notes({ tag }: NotesProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isError } = useQuery<FetchNotesResponse>({
    queryKey: ["notes", tag, debouncedSearch, page],
    queryFn: () => fetchNotes({ tag, search: debouncedSearch, page }),
    placeholderData: (prev) => prev,
  });

  const notes: Note[] = data?.notes ?? [];
  const totalPages: number = data?.totalPages ?? 1;

  return (
    <section className={css.notesSection}>
      <div className={css.header}>
        <h1>Filter Notes</h1>
        <Link href="/notes/action/create" className={css.createButton}>
          Create note +
        </Link>
      </div>

      <SearchBox
        value={search}
        onChange={(value: string) => {
          setSearch(value);
          setPage(1);
        }}
      />

      {isLoading && <p>Loading notes...</p>}
      {isError && <p>Error loading notes.</p>}

      {!isLoading && !isError && (
        <>
          {notes.length > 0 ? <NoteList notes={notes} /> : <p>No notes found.</p>}

          <Pagination page={page} total={totalPages} onPageChange={setPage} />
        </>
      )}
    </section>
  );
}
