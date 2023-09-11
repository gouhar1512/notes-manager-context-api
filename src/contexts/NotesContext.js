import { createContext } from "react";

export const intialState = {
  notesList: [
    { id: 1, title: "Note 1", content: "This is note one" },
    { id: 2, title: "Note 2", content: "This is note two" },
    { id: 3, title: "Note 3", content: "This is note three" },
  ],
  noteToUpdate: null,
};

export const NotesContext = createContext();
export const NotesDispatchContext = createContext();
