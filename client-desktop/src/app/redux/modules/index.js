import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import noteReducer, { saga as noteSaga } from './note';
import currentNoteReducer from './currentNote';

const rootReducer = combineReducers({
  entities: combineReducers({
    notes: noteReducer
    // users: userReducer,
    // groups: groupReducer
  }),
  ui: combineReducers({
    currentNote: currentNoteReducer
    // editor: editorReducer,
    // layout: layoutReducer
  })
});

const rootSaga = function* rootSaga() {
  yield all([call(noteSaga)]);
};

export default rootReducer;
export { rootSaga };
