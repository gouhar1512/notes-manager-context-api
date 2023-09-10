import React from "react";
import NoteForm from "./NoteForm/NoteForm";
import NotesList from "./NotesList/NotesList";

const NotesManager = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="notes-manager">
      <NoteForm onAddNote={onAddNote} onDeleteNote={onDeleteNote} />
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesManager;
