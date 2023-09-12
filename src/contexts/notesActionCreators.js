import { ADD, DELETE, SET_NOTE_ID_TO_UPDATE, UPDATE } from "./notesConstant";

export const ADD_ACTION = (id, title, content) => ({
  type: ADD,
  id,
  title,
  content,
});

export const DELETE_ACTION = (id) => ({
  type: DELETE,
  id,
});

export const SET_NOTEID_TO_UPDATE_ACTION = (id) => ({
  type: SET_NOTE_ID_TO_UPDATE,
  id,
});

export const UPDATE_ACTION = (title, content) => ({
  type: UPDATE,
  title,
  content,
});
