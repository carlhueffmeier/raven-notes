import { SELECT_CURRENT_NOTE, RESET_CURRENT_NOTE } from './types';
import { combineReducers } from 'redux';
import { types as editorTypes } from '../../modules/editor';
import { types as noteTypes } from '../../modules/note';

const rootReducer = combineReducers({
  id: idReducer,
  dirty: dirtyReducer
});

function idReducer(state = null, action) {
  switch (action.type) {
    case SELECT_CURRENT_NOTE: {
      const { id } = action.payload;
      return id;
    }
    case RESET_CURRENT_NOTE:
      return null;
    default:
      return state;
  }
}

function dirtyReducer(state = false, action) {
  switch (action.type) {
    case editorTypes.UPDATE_EDITOR_CONTENT:
      return true;
    case noteTypes.UPDATE_NOTE.SUCCESS:
      return false;
    default:
      return state;
  }
}

export default rootReducer;
