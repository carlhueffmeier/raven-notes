import { CHANGE_LAYOUT } from './types';

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
