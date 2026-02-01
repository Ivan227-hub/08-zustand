"use client";

import { useNoteStore } from "@/lib/store/noteStore";
import { FormEvent, useEffect, useState } from "react";
import css from "./NoteForm.module.css";

export default function NoteForm() {
  const { draft, setDraft, clearDraft } = useNoteStore();
  const [title, setTitle] = useState(draft.title);
  const [content, setContent] = useState(draft.content);
  const [tag, setTag] = useState(draft.tag);

  useEffect(() => {
    setDraft({ title, content, tag });
  }, [title, content, tag, setDraft]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Note created:", { title, content, tag });
    clearDraft();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="Important">Important</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}
