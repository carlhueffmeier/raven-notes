import { CHANGE_LAYOUT } from './types';
import { THREE_COLUMN_LAYOUT } from './constants';

const initialState = THREE_COLUMN_LAYOUT;

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LAYOUT: {
      const newLayout = action.payload;
      return newLayout;
    }
    default:
      return state;
  }
}

export default rootReducer;
