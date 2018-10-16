import { SELECT_CURRENT_GROUP, RESET_CURRENT_GROUP } from './types';
import { combineReducers } from 'redux';
import { path } from '../../../lib/utils';

const rootReducer = combineReducers({
  id: idReducer
});

function idReducer(state = null, action) {
  // Select a random group if none is selected right now
  const groupEntities = path(['payload', 'entities', 'groups'], action);
  if (state === null && groupEntities) {
    const ids = Object.keys(groupEntities);
    return ids[0];
  }
  // Handle user selection
  switch (action.type) {
    case SELECT_CURRENT_GROUP: {
      return action.payload;
    }
    case RESET_CURRENT_GROUP:
      return null;
    default:
      return state;
  }
}

export default rootReducer;
