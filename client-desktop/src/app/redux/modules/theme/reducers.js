import { CHANGE_THEME } from './types';
import { DEFAULT_THEME_LIGHT } from './constants';

const initialState = DEFAULT_THEME_LIGHT;

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      const newTheme = action.payload;
      return newTheme;
    }
    default:
      return state;
  }
}

export default rootReducer;
