import { combineReducers } from 'redux';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from './types';
import { toMapIndexedBy, unique, prop } from '../../../lib/utils';

function byId(state = {}, action) {
  switch (action.type) {
    case CREATE_NOTE.SUCCESS:
    case UPDATE_NOTE.SUCCESS: {
      const note = action.payload;
      return { ...state, [note.id]: note };
    }
    case FETCH_NOTES.SUCCESS: {
      const notes = action.payload;
      const normalizedNotes = toMapIndexedBy('id', notes);
      return { ...state, ...normalizedNotes };
    }
    default:
      return state;
  }
}

function allIds(state = [], action) {
  switch (action.type) {
    case CREATE_NOTE.SUCCESS:
    case UPDATE_NOTE.SUCCESS: {
      const note = action.payload;
      return unique([note.id, ...state]);
    }
    case FETCH_NOTES.SUCCESS: {
      const notes = action.payload;
      const noteIds = notes.map(prop('id'));
      return unique([...state, ...noteIds]);
    }
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case FETCH_NOTES.START:
    case CREATE_NOTE.START:
    case UPDATE_NOTE.START:
      return true;
    case FETCH_NOTES.SUCCESS:
    case CREATE_NOTE.SUCCESS:
    case UPDATE_NOTE.SUCCESS:
    case FETCH_NOTES.ERROR:
    case CREATE_NOTE.ERROR:
    case UPDATE_NOTE.ERROR:
      return false;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case FETCH_NOTES.START:
    case CREATE_NOTE.START:
    case UPDATE_NOTE.START:
    case FETCH_NOTES.SUCCESS:
    case CREATE_NOTE.SUCCESS:
    case UPDATE_NOTE.SUCCESS:
      return null;
    case FETCH_NOTES.ERROR:
    case CREATE_NOTE.ERROR:
    case UPDATE_NOTE.ERROR:
      return action.error;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  byId,
  allIds,
  loading,
  error
});

export default rootReducer;
