import React, { useContext } from "react";
import "./Note.css";
import { NotesDispatchContext } from "../../contexts/NotesContext";

const Note = ({ note, setNoteToUpdateHandler }) => {
  const dispatch = useContext(NotesDispatchContext);

  const deleteNoteHandler = () => {
    dispatch({
      type: "DELETE",
      id: note.id,
    });
  };

  return (
    <div className="note">
      <div className="note-title">{note.title}</div>
      <div className="note-content">{note.content}</div>
      <div className="note-ctas">
        <button
          className="btn-note-update"
          onClick={() => setNoteToUpdateHandler(note)}>
          Update
        </button>
        <button className="btn-note-delete" onClick={deleteNoteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
