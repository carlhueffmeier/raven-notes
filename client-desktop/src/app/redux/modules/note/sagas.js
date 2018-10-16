import { call, put, takeEvery, spawn, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { normalize } from 'normalizr';
import graphqlClient from '../../../api/graphqlClient';
import * as actions from './actions';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from './types';
import { ALL_NOTES_QUERY, CREATE_NOTE_MUTATION, UPDATE_NOTE_MUTATION } from './graphql';
import {
  fetchNotesResponseSchema,
  createNoteResponseSchema,
  updateNoteResponseSchema
} from './schema';
import { selectors as currentNoteSelectors } from '../../modules/currentNote';
import { selectors as currentGroupSelectors } from '../../modules/currentGroup';
import { selectors as editorSelectors } from '../../modules/editor';
import {
  types as authenticationTypes,
  selectors as authenticationSelectors
} from '../../modules/authentication';
import {
  editorValueToJson,
  editorValueToPlaintext,
  createEmptyJson
} from '../../../lib/editorUtils';

const POLL_INTERVAL = 1000 * 10; // 10s

function* fetchNotes() {
  try {
    const response = yield call([graphqlClient, 'request'], ALL_NOTES_QUERY);
    graphqlClient.request(ALL_NOTES_QUERY);
    // ⚠️ Caution: Necessary change for local / mock api
    // const normalizedData = normalize(response, MOCK__fetchNotesResponseSchema);
    const normalizedData = normalize(response, fetchNotesResponseSchema);
    yield put(actions.fetchNotesSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.fetchNotesError(error));
  }
}

function* createNote() {
  try {
    const currentGroupId = yield select(currentGroupSelectors.getCurrentGroupId);
    const newNoteInfo = {
      contentJson: createEmptyJson(),
      contentText: '',
      groupId: currentGroupId
    };
    const response = yield call([graphqlClient, 'request'], CREATE_NOTE_MUTATION, newNoteInfo);
    const normalizedData = normalize(response, createNoteResponseSchema);
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
    const normalizedData = normalize(response.updateNote, updateNoteResponseSchema);
    yield put(actions.updateNoteSuccess(normalizedData));
  } catch (error) {
    console.error(error);
    yield put(actions.updateNoteError(error));
  }
}

function* updateIfDirty() {
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
}

function* pollUpdateNotes() {
  while (true) {
    if (yield select(authenticationSelectors.getIsAuthenticated)) {
      yield call(updateIfDirty);
    }
    yield call(delay, POLL_INTERVAL);
  }
}

function* pollFetchNotes() {
  while (true) {
    if (yield select(authenticationSelectors.getIsAuthenticated)) {
      yield call(fetchNotes);
    }
    yield call(delay, POLL_INTERVAL);
  }
}

function* noteSaga() {
  yield takeEvery(FETCH_NOTES.START, fetchNotes);
  yield takeEvery(CREATE_NOTE.START, createNote);
  yield takeEvery(UPDATE_NOTE.START, updateNote);
  yield takeEvery(authenticationTypes.SIGNIN.SUCCESS, fetchNotes);
  yield takeEvery(authenticationTypes.SIGNUP.SUCCESS, fetchNotes);
  yield spawn(pollFetchNotes);
  yield spawn(pollUpdateNotes);
}

export default noteSaga;
