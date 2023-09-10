import { useState } from "react";
import "./App.css";
import NotesManager from "./NotesManager/NotesManager";

function App() {
  const [notesList, setNotesList] = useState([
    { id: 1, title: "Note 1", content: "This is note one" },
    { id: 2, title: "Note 2", content: "This is note two" },
    { id: 3, title: "Note 3", content: "This is note three" },
  ]);

  const [noteToUpdate, setNoteToUpdate] = useState(null);

  const setNotesListHandler = (newNote) => {
    let updatedNotesList = [...notesList];
    updatedNotesList.push(newNote);
    setNotesList(updatedNotesList);
  };

  const deleteNoteHandler = (noteId) => {
    let updatedNotesList = [...notesList];
    updatedNotesList = updatedNotesList.filter((note) => note.id !== noteId);
    setNotesList(updatedNotesList);
  };

  const setNoteToUpdateHandler = (note) => {
    setNoteToUpdate(note);
  };

  const updateNoteHandler = (updateNote) => {
    let updatedNotesList = [...notesList];
    let index = updatedNotesList.findIndex(
      (note) => note.id === noteToUpdate.id
    );
    updatedNotesList[index] = updateNote;
    setNotesList(updatedNotesList);
    setNoteToUpdate(null);
  };

  return (
    <div className="App">
      <NotesManager
        notes={notesList}
        noteToUpdate={noteToUpdate}
        onAddNote={setNotesListHandler}
        onDeleteNote={deleteNoteHandler}
        onUpdateNote={updateNoteHandler}
        setNoteToUpdateHandler={setNoteToUpdateHandler}
      />
    </div>
  );
}

export default App;
