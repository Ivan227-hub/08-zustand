"use client";

interface NotePreviewProps {
  title: string;
  content: string;
}

export default function NotePreview({ title, content }: NotePreviewProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
