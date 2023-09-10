import React from "react";
import NoteForm from "./NoteForm/NoteForm";
import NotesList from "./NotesList/NotesList";

const NotesManager = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className="notes-manager">
      <NoteForm onAddNote={onAddNote} />
      <NotesList notes={notes} onDeleteNote={onDeleteNote} />
    </div>
  );
};

export default NotesManager;
