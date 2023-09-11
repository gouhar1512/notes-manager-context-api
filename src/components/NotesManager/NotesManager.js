import React from "react";
import NoteForm from "../NoteForm/NoteForm";
import NotesList from "../NotesList/NotesList";
const NotesManager = ({
  noteToUpdate,
  onUpdateNote,
  setNoteToUpdateHandler,
}) => {
  return (
    <div className="notes-manager">
      <NoteForm
        noteToUpdate={noteToUpdate}
        onUpdateNote={onUpdateNote}
        setNoteToUpdateHandler={setNoteToUpdateHandler}
      />
      <NotesList setNoteToUpdateHandler={setNoteToUpdateHandler} />
    </div>
  );
};

export default NotesManager;
