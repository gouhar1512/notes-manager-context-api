export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
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
    case "DELETE": {
      let updatedNotesList = [...state.notesList];
      updatedNotesList = updatedNotesList.filter(
        (note) => note.id !== action.id
      );
      return {
        ...state,
        notesList: updatedNotesList,
      };
    }
    case "UPDATE":
      break;
    default:
      return state;
  }
};
