import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import { createReducer as createAppReducer } from './app';
import authenticationReducer, { sagas as authenticationSaga } from './authentication';
import noteReducer, { sagas as noteSaga } from './note';
import userReducer from './user';
import groupReducer, { sagas as groupSaga } from './group';
import editorReducer from './editor';
import layoutReducer from './layout';
import searchReducer from './search';
import currentNoteReducer, { sagas as currentNoteSaga } from './currentNote';
import currentGroupReducer from './currentGroup';
import modalsReducer from './modals';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  entities: combineReducers({
    notes: noteReducer,
    users: userReducer,
    groups: groupReducer
  }),
  ui: combineReducers({
    currentNote: currentNoteReducer,
    currentGroup: currentGroupReducer,
    editor: editorReducer,
    layout: layoutReducer,
    search: searchReducer,
    modals: modalsReducer
  })
});

const rootSaga = function* rootSaga() {
  yield all([call(noteSaga), call(currentNoteSaga), call(groupSaga), call(authenticationSaga)]);
};

export default createAppReducer(rootReducer);
export { rootSaga };
