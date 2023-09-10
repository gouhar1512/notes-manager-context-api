import { useState } from "react";
import "./App.css";
import NotesManager from "./NotesManager/NotesManager";

function App() {
  const [notes, setNotes] = useState([]);

  const setNotesHandler = (newNote) => {
    let updatedNotes = [...notes];
    updatedNotes.push(newNote);
    setNotes(updatedNotes);
  };

  const deleteNoteHandler = (noteId) => {
    let updatedNotes = [...notes];
    updatedNotes = updatedNotes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <NotesManager
        notes={notes}
        onAddNote={setNotesHandler}
        onDeleteNote={deleteNoteHandler}
      />
    </div>
  );
}

export default App;
