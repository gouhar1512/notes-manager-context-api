import React from "react";
import Note from "../Note/Note";
import "./NotesList.css";

const NotesList = ({ notes, onDeleteNote, setNoteToUpdateHandler }) => {
  if (notes.length === 0) {
    return <div className="notes-list">Add some notes</div>;
  }
  let mappedNotesList = notes.map((note) => (
    <Note
      key={note.id}
      note={note}
      onDeleteNote={onDeleteNote}
      setNoteToUpdateHandler={setNoteToUpdateHandler}
    />
  ));
  return <div className="notes-list">{mappedNotesList}</div>;
};

export default NotesList;
