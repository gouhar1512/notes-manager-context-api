import React from "react";
import "./NoteForm.css";
const NoteForm = () => {
  return (
    <form className="note-form">
      <label htmlFor="note-title">
        <div className="label-text">Title:</div>
        <input id="note-title" />
      </label>
      <label htmlFor="note-content">
        <div className="label-text">Content:</div>
        <textarea id="note-content" />
      </label>
      <button type="submit" className="btn-add-note">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
