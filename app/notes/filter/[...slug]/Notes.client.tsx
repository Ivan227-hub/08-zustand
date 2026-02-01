"use client";

interface NotesProps {
  notes: { id: string; title: string }[];
}

export default function Notes({ notes }: NotesProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}
