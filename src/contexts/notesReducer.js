import { ADD, DELETE, SET_NOTE_ID_TO_UPDATE, UPDATE } from "./notesConstant";
export const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      let updatedNotesList = [...state.notesList];
      let newNote = {
        id: action.id,
        title: action.title,
        content: action.content,
      };
      updatedNotesList.push(newNote);
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    case DELETE: {
      let updatedNotesList = [...state.notesList];
      updatedNotesList = updatedNotesList.filter(
        (note) => note.id !== action.id
      );
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    case SET_NOTE_ID_TO_UPDATE: {
      return {
        ...state,
        noteIdToUpdate: action.id,
      };
    }
    case UPDATE: {
      let updatedNotesList = [...state.notesList];
      let index = updatedNotesList.findIndex(
        (note) => note.id === state.noteIdToUpdate
      );
      let updatedNote = updatedNotesList[index];
      updatedNote.title = action.title;
      updatedNote.content = action.content;
      updatedNotesList[index] = updatedNote;
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    default:
      return state;
  }
};
