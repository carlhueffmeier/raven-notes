import { call, put, takeEvery, spawn, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from './types';
import { ALL_NOTES_QUERY, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION } from './graphqlMock';
import { note as noteSchema } from './schema';
import { selectors as currentNoteSelectors } from '../../modules/currentNote';
import { selectors as editorSelectors } from '../../modules/editor';
import {
  editorValueToJson,
  editorValueToPlaintext,
  createEmptyJson
} from '../../../lib/editorUtils';
import { normalize } from 'normalizr';

const POLL_INTERVAL = 1000 * 10; // 10s

function* fetchNotes() {
  try {
    const response = yield call([graphqlClient, 'request'], ALL_NOTES_QUERY);
    const normalizedData = normalize(response.notes, [noteSchema]);
    yield put(actions.fetchNotesSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.fetchNotesError(error));
  }
}

function* createNote() {
  try {
    const newNoteInfo = {
      contentJson: createEmptyJson(),
      contentText: ''
    };
    const response = yield call([graphqlClient, 'request'], CREATE_NOTE_MUTATION, newNoteInfo);
    const normalizedData = normalize(response.createNote, noteSchema);
    yield put(actions.createNoteSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.createNoteError(error));
  }
}

function* updateNote(action) {
  try {
    const noteUpdate = action.payload;
    const response = yield call([graphqlClient, 'request'], UPDATE_NOTE_MUTATION, noteUpdate);
    const normalizedData = normalize(response.updateNote, noteSchema);
    yield put(actions.updateNoteSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.updateNoteError(error));
  }
}

function* pollFetchNotes() {
  while (true) {
    try {
      yield call(fetchNotes);
    } catch (error) {
      console.error(error);
      yield put(actions.fetchNotesError(error));
    }
    yield call(delay, POLL_INTERVAL);
  }
}

function* pollUpdateNotes() {
  while (true) {
    try {
      const currentNote = yield select(currentNoteSelectors.getCurrentNote);
      const isDirty = yield select(currentNoteSelectors.getCurrentNoteIsDirty);
      const editorContent = yield select(editorSelectors.getEditorContent);
      const editorContentJson = editorValueToJson(editorContent);
      const editorContentText = editorValueToPlaintext(editorContent);
      // Only update if there are changes in content
      if (isDirty && currentNote && editorContentJson !== currentNote.contentJson) {
        const noteUpdate = {
          id: currentNote.id,
          contentJson: editorContentJson,
          contentText: editorContentText
        };
        yield put(actions.updateNote(noteUpdate));
      }
    } catch (error) {
      console.error(error);
      yield put(actions.fetchNotesError(error));
    }
    yield call(delay, POLL_INTERVAL);
  }
}

function* noteSaga() {
  yield takeEvery(FETCH_NOTES.START, fetchNotes);
  yield takeEvery(CREATE_NOTE.START, createNote);
  yield takeEvery(UPDATE_NOTE.START, updateNote);
  yield spawn(pollFetchNotes);
  yield spawn(pollUpdateNotes);
}

export default noteSaga;
