import React, { useState } from "react";
import "./NoteForm.css";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      id: parseInt(Math.random() * 10),
      title,
      content,
    };
    onAddNote(note);
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
      <button type="submit" className="btn-add-note">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
