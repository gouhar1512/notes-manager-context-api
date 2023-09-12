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
  const [appState, dispatch] = useReducer(notesReducer, intialState);

  return (
    <NotesContext.Provider value={appState}>
      <NotesDispatchContext.Provider value={dispatch}>
        <div className="App">
          <NotesManager />
        </div>
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export default App;
