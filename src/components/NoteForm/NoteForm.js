import React, { useContext, useEffect, useState } from "react";
import "./NoteForm.css";
import {
  NotesContext,
  NotesDispatchContext,
} from "../../contexts/NotesContext";

const NoteForm = ({ noteToUpdate, onUpdateNote, setNoteToUpdateHandler }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const id = crypto.randomUUID();
  const [isUpdatingNote, setIsUpdatingNote] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  const notes = useContext(NotesContext);

  useEffect(() => {
    if (noteToUpdate && notes.length > 0) {
      setIsUpdatingNote(true);
    } else {
      setIsUpdatingNote(false);
      setNoteToUpdateHandler(null);
    }
  }, [noteToUpdate, notes.length, setNoteToUpdateHandler]);

  useEffect(() => {
    if (noteToUpdate) {
      setTitle(noteToUpdate.title);
      setContent(noteToUpdate.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [isUpdatingNote, noteToUpdate]);

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const setContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }
    let note = {
      id,
      title,
      content,
    };
    if (noteToUpdate && notes.length > 0) {
      note.id = noteToUpdate.id;
      onUpdateNote(note);
    } else {
      dispatch({
        type: "ADD",
        id,
        title,
        content,
      });
    }
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={onSubmitHandler}>
      <label htmlFor="note-title">
        <div className="label-text">Title:</div>
        <input id="note-title" value={title} onChange={setTitleHandler} />
      </label>
      <label htmlFor="note-content">
        <div className="label-text">Content:</div>
        <textarea
          id="note-content"
          value={content}
          onChange={setContentHandler}
        />
      </label>
      {!isUpdatingNote ? (
        <button type="submit" className="btn-add-note">
          Add Note
        </button>
      ) : (
        <div className="update-ctas">
          <button type="submit" className="btn-update-note">
            Update Note
          </button>
          <button
            className="btn-cancel-update"
            onClick={() => setNoteToUpdateHandler(null)}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default NoteForm;
