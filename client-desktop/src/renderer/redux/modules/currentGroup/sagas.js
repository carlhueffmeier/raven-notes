import { put, takeEvery } from 'redux-saga/effects';
import { SELECT_CURRENT_GROUP, RESET_CURRENT_GROUP } from './types';
import { actions as currentNoteActions } from '../../modules/currentNote';

function* resetCurrentNote() {
  yield put(currentNoteActions.resetCurrentNote());
}

function* currentGroupSaga() {
  yield takeEvery(SELECT_CURRENT_GROUP, resetCurrentNote);
  yield takeEvery(RESET_CURRENT_GROUP, resetCurrentNote);
}

export default currentGroupSaga;
