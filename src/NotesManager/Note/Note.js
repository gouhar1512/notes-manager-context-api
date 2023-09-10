import React from "react";
import "./Note.css";

const Note = ({ note, onDeleteNote }) => {
  const deleteNoteHandler = () => {
    onDeleteNote(note.id);
  };
  return (
    <div className="note">
      <div className="note-title">{note.title}</div>
      <div className="note-content">{note.content}</div>
      <div className="note-ctas">
        <button className="btn-note-update">Update</button>
        <button className="btn-note-delete" onClick={deleteNoteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
