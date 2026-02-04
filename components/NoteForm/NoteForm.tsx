"use client";

import { FormEvent, ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createNote } from "@/lib/api";
import { useNoteStore } from "@/lib/store/noteStore";
import css from "./NoteForm.module.css";

export default function NoteForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { draft, setDraft, clearDraft } = useNoteStore();

  const [title, setTitle] = useState<string>(draft.title);
  const [content, setContent] = useState<string>(draft.content);
  const [tag, setTag] = useState<string>(draft.tag);

  useEffect(() => {
    setDraft({ title, content, tag });
  }, [title, content, tag, setDraft]);

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      clearDraft();
      router.back();
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ title, content, tag });
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        required
      />

      <textarea
        value={content}
        placeholder="Content"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
        required
      />

      <select
        value={tag}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setTag(e.target.value)
        }
        required
      >
        <option value="">Select tag</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Todo">Todo</option>
        <option value="Meeting">Meeting</option>
        <option value="Shopping">Shopping</option>
      </select>

      <div className={css.actions}>
        <button type="submit" disabled={isPending}>
          Create note
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
