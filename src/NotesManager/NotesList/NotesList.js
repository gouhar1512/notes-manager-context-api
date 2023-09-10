import React from "react";
import Note from "../Note/Note";
import "./NotesList.css";

const NotesList = (notesList) => {
  notesList = [
    {
      id: 1,
      title: "Note-1",
      content: "This is note 1",
    },
    {
      id: 2,
      title: "Note-2",
      content: "This is note 2",
    },
    {
      id: 3,
      title: "Note-3",
      content: "This is note 3",
    },
  ];
  let mappedNotesList = notesList.map((note) => (
    <Note key={note.id} note={note} />
  ));
  return <div className="notes-list">{mappedNotesList}</div>;
};

export default NotesList;
