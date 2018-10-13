import { put, takeEvery, select } from 'redux-saga/effects';
import { SELECT_CURRENT_NOTE, RESET_CURRENT_NOTE, UPDATE_CURRENT_NOTE } from './types';
import { selectors as currentNoteSelectors } from './';
import { actions as editorActions } from '../../modules/editor';
import { jsonToEditorValue, createEmptyEditorValue } from '../../../lib/editorUtils';

function* selectCurrentNote() {
  const currentNote = yield select(currentNoteSelectors.getCurrentNote);
  const newEditorContent = jsonToEditorValue(currentNote.contentJson);
  yield put(editorActions.updateEditorContent(newEditorContent));
}

function* resetCurrentNote() {
  const newEditorContent = createEmptyEditorValue();
  yield put(editorActions.updateEditorContent(newEditorContent));
}

function* noteSaga() {
  yield takeEvery(SELECT_CURRENT_NOTE, selectCurrentNote);
  yield takeEvery(RESET_CURRENT_NOTE, resetCurrentNote);
}

export default noteSaga;
