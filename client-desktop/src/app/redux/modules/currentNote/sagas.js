import { put, takeEvery, select } from 'redux-saga/effects';
import Plain from 'slate-plain-serializer';
import { SELECT_CURRENT_NOTE, RESET_CURRENT_NOTE } from './types';
import * as selectors from './selectors';
import { actions as editorActions } from '../../modules/editor';

function* selectCurrentNote() {
  const currentNote = yield select(selectors.getCurrentNote);
  const newEditorContent = Plain.deserialize(currentNote.body);
  yield put(editorActions.updateEditorContent(newEditorContent));
}

function* resetCurrentNote() {
  const newEditorContent = Plain.deserialize('');
  yield put(editorActions.updateEditorContent(newEditorContent));
}

function* noteSaga() {
  yield takeEvery(SELECT_CURRENT_NOTE, selectCurrentNote);
  yield takeEvery(RESET_CURRENT_NOTE, resetCurrentNote);
}

export default noteSaga;
