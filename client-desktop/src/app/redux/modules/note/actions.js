import * as types from './types';

// Fetch all notes
const fetchNotes = () => ({
  type: types.FETCH_NOTES.START
});
const fetchNotesSuccess = payload => ({
  type: types.FETCH_NOTES.SUCCESS,
  payload
});
const fetchNotesError = error => ({
  type: types.FETCH_NOTES.ERROR,
  error
});

// Create new note
const createNote = () => ({
  type: types.CREATE_NOTE.START
});
const createNoteSuccess = payload => ({
  type: types.CREATE_NOTE.SUCCESS,
  payload
});
const createNoteError = error => ({
  type: types.CREATE_NOTE.ERROR,
  error
});

// Update note
const updateNote = payload => ({
  type: types.UPDATE_NOTE.START,
  payload
});
const updateNoteSuccess = payload => ({
  type: types.UPDATE_NOTE.SUCCESS,
  payload
});
const updateNoteError = error => ({
  type: types.UPDATE_NOTE.ERROR,
  error
});

export {
  fetchNotes,
  fetchNotesSuccess,
  fetchNotesError,
  createNote,
  createNoteSuccess,
  createNoteError,
  updateNote,
  updateNoteSuccess,
  updateNoteError
};
