import React, { useContext } from "react";
import "./Note.css";
import { NotesDispatchContext } from "../../contexts/NotesContext";

const Note = ({ note }) => {
  const dispatch = useContext(NotesDispatchContext);

  const deleteNoteHandler = () => {
    dispatch({
      type: "DELETE",
      id: note.id,
    });
  };

  const setNoteToUpdateHandler = () => {
    dispatch({
      type: "SET_NOTE_ID_TO_UPDATE",
      id: note.id,
    });
  };

  return (
    <div className="note">
      <div className="note-title">{note.title}</div>
      <div className="note-content">{note.content}</div>
      <div className="note-ctas">
        <button className="btn-note-update" onClick={setNoteToUpdateHandler}>
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
