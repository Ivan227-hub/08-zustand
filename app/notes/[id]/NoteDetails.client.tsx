"use client";

interface NoteDetailsProps {
  title: string;
  content: string;
}

export default function NoteDetails({ title, content }: NoteDetailsProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
