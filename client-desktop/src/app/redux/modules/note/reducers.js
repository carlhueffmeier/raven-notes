import { combineReducers } from 'redux';
import { FETCH_NOTES, CREATE_NOTE, UPDATE_NOTE } from './types';
import { unique, path } from '../../../lib/utils';

function byId(state = {}, action) {
  const noteEntities = path(['payload', 'entities', 'notes'], action);
  if (noteEntities) {
    return { ...state, ...noteEntities };
  }
  return state;
}

function allIds(state = [], action) {
  const noteEntities = path(['payload', 'entities', 'notes'], action);
  if (noteEntities) {
    const ids = Object.keys(noteEntities);
    return unique([...ids, ...state]);
  }
  return state;
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
