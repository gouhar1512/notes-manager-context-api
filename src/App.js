import { useReducer, useState } from "react";
import "./App.css";
import NotesManager from "./components/NotesManager/NotesManager";
import {
  NotesContext,
  NotesDispatchContext,
  intialState,
} from "./contexts/NotesContext";
import { notesReducer } from "./contexts/notesReducer";

function App() {
  const [notesList, dispatch] = useReducer(notesReducer, intialState);

  const [noteToUpdate, setNoteToUpdate] = useState(null);

  const setNoteToUpdateHandler = (note) => {
    setNoteToUpdate(note);
  };

  const updateNoteHandler = (updateNote) => {
    let updatedNotesList = [...notesList];
    let index = updatedNotesList.findIndex(
      (note) => note.id === noteToUpdate.id
    );
    updatedNotesList[index] = updateNote;
    // setNotesList(updatedNotesList);
    setNoteToUpdate(null);
  };

  return (
    <NotesContext.Provider value={notesList}>
      <NotesDispatchContext.Provider value={dispatch}>
        <div className="App">
          <NotesManager
            noteToUpdate={noteToUpdate}
            onUpdateNote={updateNoteHandler}
            setNoteToUpdateHandler={setNoteToUpdateHandler}
          />
        </div>
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export default App;
