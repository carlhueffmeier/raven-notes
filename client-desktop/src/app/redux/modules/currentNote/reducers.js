import { SELECT_CURRENT_NOTE, RESET_CURRENT_NOTE } from './types';

function rootReducer(state = null, action) {
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

export default rootReducer;
