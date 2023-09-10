import React from "react";
import NoteForm from "./NoteForm/NoteForm";
import NotesList from "./NotesList/NotesList";

const NotesManager = () => {
  return (
    <div className="notes-manager">
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default NotesManager;
