import React, { useContext } from "react";
import Note from "../Note/Note";
import "./NotesList.css";
import { NotesContext } from "../../contexts/NotesContext";

const NotesList = () => {
  const { notesList } = useContext(NotesContext);
  if (notesList.length === 0) {
    return <div className="notes-list">Add some notes</div>;
  }
  let mappedNotesList = notesList.map((note) => (
    <Note key={note.id} note={note} />
  ));
  return <div className="notes-list">{mappedNotesList}</div>;
};

export default NotesList;
