import { put, takeEvery, select } from 'redux-saga/effects';
import { SELECT_CURRENT_NOTE, RESET_CURRENT_NOTE, UPDATE_CURRENT_NOTE } from './types';
import { selectors as currentNoteSelectors } from './';
import { selectors as editorSelectors } from '../../modules/editor'
import { actions as editorActions } from '../../modules/editor';
import { actions as noteActions } from '../../modules/note'
import { 
  editorValueToJson,
  editorValueToPlaintext,
  jsonToEditorValue,
  createEmptyEditorValue  
} from '../../../lib/editorUtils';


function* selectCurrentNote() {
  const currentNote = yield select(currentNoteSelectors.getCurrentNote);
  const newEditorContent = jsonToEditorValue(currentNote.contentJson);
  yield put(editorActions.updateEditorContent(newEditorContent));
}

function* resetCurrentNote() {
  const newEditorContent = createEmptyEditorValue();
  yield put(editorActions.updateEditorContent(newEditorContent));
}

function* updateCurrentNote() {
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
        yield put(noteActions.updateNote(noteUpdate));
      }
    } catch (error) {
      console.error(error);
      yield put(noteActions.fetchNotesError(error));
    }
}

function* noteSaga() {
  yield takeEvery(SELECT_CURRENT_NOTE, selectCurrentNote);
  yield takeEvery(RESET_CURRENT_NOTE, resetCurrentNote);
  yield takeEvery(UPDATE_CURRENT_NOTE, updateCurrentNote);
}

export default noteSaga;
