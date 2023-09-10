import React from "react";
import NoteForm from "./NoteForm/NoteForm";
import NotesList from "./NotesList/NotesList";
const NotesManager = ({
  notes,
  noteToUpdate,
  onAddNote,
  onDeleteNote,
  onUpdateNote,
  setNoteToUpdateHandler,
}) => {
  return (
    <div className="notes-manager">
      <NoteForm
        notes={notes}
        onAddNote={onAddNote}
        noteToUpdate={noteToUpdate}
        onUpdateNote={onUpdateNote}
        setNoteToUpdateHandler={setNoteToUpdateHandler}
      />
      <NotesList
        notes={notes}
        onDeleteNote={onDeleteNote}
        setNoteToUpdateHandler={setNoteToUpdateHandler}
      />
    </div>
  );
};

export default NotesManager;
