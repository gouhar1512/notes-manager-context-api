import React, { useContext } from "react";
import "./Note.css";
import { NotesDispatchContext } from "../../contexts/NotesContext";
import {
  DELETE_ACTION,
  SET_NOTEID_TO_UPDATE_ACTION,
} from "../../contexts/notesActionCreators";

const Note = ({ note }) => {
  const dispatch = useContext(NotesDispatchContext);

  const deleteNoteHandler = () => {
    dispatch(DELETE_ACTION(note.id));
  };

  const setNoteToUpdateHandler = () => {
    dispatch(SET_NOTEID_TO_UPDATE_ACTION(note.id));
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
