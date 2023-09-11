import React, { useContext } from "react";
import Note from "../Note/Note";
import "./NotesList.css";
import { NotesContext } from "../../contexts/NotesContext";

const NotesList = ({ setNoteToUpdateHandler }) => {
  const notes = useContext(NotesContext);
  if (notes.length === 0) {
    return <div className="notes-list">Add some notes</div>;
  }
  let mappedNotesList = notes.map((note) => (
    <Note
      key={note.id}
      note={note}
      setNoteToUpdateHandler={setNoteToUpdateHandler}
    />
  ));
  return <div className="notes-list">{mappedNotesList}</div>;
};

export default NotesList;
