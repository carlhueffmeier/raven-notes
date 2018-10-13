import { combineReducers } from 'redux';
import { unique, path } from '../../../lib/utils';

function byId(state = {}, action) {
  const userEntities = path(['payload', 'entities', 'users'], action);
  if (userEntities) {
    return { ...state, ...userEntities };
  }
  return state;
}

function allIds(state = [], action) {
  const userEntities = path(['payload', 'entities', 'users'], action);
  if (userEntities) {
    const ids = Object.keys(userEntities);
    return unique([...ids, ...state]);
  }
  return state;
}

const rootReducer = combineReducers({
  byId,
  allIds
});

export default rootReducer;
