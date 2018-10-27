import { CHANGE_THEME, TOGGLE_DARK_MODE } from './types';
import { DEFAULT_THEME_LIGHT, DEFAULT_THEME_DARK } from './constants';

const initialState = DEFAULT_THEME_LIGHT;

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      const newTheme = action.payload;
      return newTheme;
    }
    case TOGGLE_DARK_MODE: {
      return state === DEFAULT_THEME_LIGHT ? DEFAULT_THEME_DARK : DEFAULT_THEME_LIGHT;
    }
    default:
      return state;
  }
}

export default rootReducer;
