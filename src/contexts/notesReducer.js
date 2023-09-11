export const notesReducer = (notesList, action) => {
  switch (action.type) {
    case "ADD": {
      let updatedNotesList = [...notesList];
      let newNote = {
        id: action.id,
        title: action.title,
        content: action.content,
      };
      updatedNotesList.push(newNote);
      return updatedNotesList;
    }
    case "DELETE": {
      let updatedNotesList = [...notesList];
      updatedNotesList = updatedNotesList.filter(
        (note) => note.id !== action.id
      );
      return updatedNotesList;
    }
    case "UPDATE":
      break;
    default:
      return notesList;
  }
};
