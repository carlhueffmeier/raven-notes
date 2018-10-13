import { SELECT_CURRENT_GROUP, RESET_CURRENT_GROUP } from './types';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  id: idReducer
});

function idReducer(state = null, action) {
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
