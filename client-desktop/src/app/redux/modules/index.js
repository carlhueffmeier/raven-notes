import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import noteReducer, { sagas as noteSaga } from './note';
import userReducer from './user';
import groupReducer from './group';
import editorReducer from './editor';
import layoutReducer from './layout';
import searchReducer from './search';
import currentNoteReducer, { sagas as currentNoteSaga } from './currentNote';
import { sagas as groupSaga } from './group'
import currentGroupReducer from './currentGroup';

const rootReducer = combineReducers({
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
    search: searchReducer
  })
});

const rootSaga = function* rootSaga() {
  yield all([call(noteSaga), call(currentNoteSaga), call(groupSaga)]);
};

export default rootReducer;
export { rootSaga };
