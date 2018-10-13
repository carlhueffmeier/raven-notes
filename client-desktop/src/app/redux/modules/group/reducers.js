import { combineReducers } from 'redux';
import { unique, path } from '../../../lib/utils';

function byId(state = {}, action) {
  const groupEntities = path(['payload', 'entities', 'groups'], action);
  if (groupEntities) {
    return { ...state, ...groupEntities };
  }
  return state;
}

function allIds(state = [], action) {
  const groupEntities = path(['payload', 'entities', 'groups'], action);
  if (groupEntities) {
    const ids = Object.keys(groupEntities);
    return unique([...ids, ...state]);
  }
  return state;
}

const rootReducer = combineReducers({
  byId,
  allIds
});

export default rootReducer;
