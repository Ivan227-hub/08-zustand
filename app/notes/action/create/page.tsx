import NoteForm from "@/components/NoteForm/NoteForm";
import css from "@/components/NoteForm/NoteForm.module.css";

export const metadata = {
  title: "Create Note | NoteHub",
  description: "Page to create a new note",
  url: "/notes/action/create",
  openGraph: {
    title: "Create Note | NoteHub",
    description: "Page to create a new note",
    url: "/notes/action/create",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

// ✅ Обов'язково має бути дефолтний експорт компонента сторінки
export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
