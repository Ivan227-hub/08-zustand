"use client";

import css from "./Home.module.css";
import { useNoteStore } from "@/lib/store/noteStore";

export default function HomePage() {
  const { draft, setDraft, clearDraft } = useNoteStore();

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>NoteHub</h1>

        <input
          type="text"
          placeholder="Note title"
          value={draft.title}
          onChange={(e) =>
            setDraft({ ...draft, title: e.target.value })
          }
        />

        <textarea
          placeholder="Note content"
          value={draft.content}
          onChange={(e) =>
            setDraft({ ...draft, content: e.target.value })
          }
        />

        <button onClick={clearDraft}>
          Clear draft
        </button>

        <p>
          <strong>Current tag:</strong> {draft.tag}
        </p>
      </div>
    </main>
  );
}
